import React, { useState, useCallback, useRef, useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography, message, Modal } from "antd";
import { EnvironmentOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { submitParcelOrder } from "../../services/parcel";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function ParcelStep2({ formData, onBack }) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [isMapModalVisible, setIsMapModalVisible] = useState(false);
    const [currentLocationType, setCurrentLocationType] = useState(null);

    const [pickupLocation, setPickupLocation] = useState(null);
    const [dropoffLocation, setDropoffLocation] = useState(null);

    // === Form Submit ===
    const onFinish = async () => {
        if (!pickupLocation || !dropoffLocation) {
            return message.error("Please select both pickup and dropoff locations!");
        }
        console.log(formData, "asdasasdd")

        let apiPayload = {
            service_type: formData?.selectType,
            payment_type: "1",
            pick_up_location: pickupLocation,
            drop_of_location: dropoffLocation,
            comments: formData?.specialInstructions,
        };

        if (formData?.selectType === 'item_return') {
            apiPayload.item_return = {
                // store: formData?.item_return?.store || "",
                items: formData?.items || []
            };
        }
        else if (formData?.selectType === 'item_exchange') {
            apiPayload.item_exchange = {
                // store: formData?.item_return?.store || "",
                items: formData?.items || []
            };
        }

        try {
            const response = await submitParcelOrder(apiPayload);
            if (response.data.success) {
                message.success("Order Placed successfully!");
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                message.error(response.data.message || "Failed to submit.");
            }
        } catch (error) {
            message.error("Failed to submit. Please try again.");
        }
    };

    // === Modal Control ===
    const openMapModal = (type) => {
        setCurrentLocationType(type);
        setIsMapModalVisible(true);
    };

    const handleMapSelection = (location) => {
        if (currentLocationType === "pickup") {
            setPickupLocation(location);
            form.setFieldsValue({ pickupAddress: location.name });
        } else {
            setDropoffLocation(location);
            form.setFieldsValue({ dropoffAddress: location.name });
        }
        setIsMapModalVisible(false);
    };

    // === Map Selector ===
    const GoogleMapSelector = ({ onLocationSelect }) => {
        const [selected, setSelected] = useState(null);
        const [currentLocation, setCurrentLocation] = useState(null);
        const mapRef = useRef(null);
        const geocoderRef = useRef(null);

        const mapOptions = {
            center: { lat: 25.2048, lng: 55.2708 }, // Default Dubai
            zoom: 10,
        };

        const onMapLoad = useCallback((map) => {
            console.log('Map loaded successfully');
            mapRef.current = map;

            // Initialize geocoder
            if (window.google && window.google.maps) {
                geocoderRef.current = new window.google.maps.Geocoder();
                console.log('Geocoder initialized');
            }

            // Get user's current location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const userLat = pos.coords.latitude;
                        const userLng = pos.coords.longitude;
                        console.log('User location:', userLat, userLng);

                        // Store current location for marker
                        setCurrentLocation({ lat: userLat, lng: userLng });

                        map.setCenter({ lat: userLat, lng: userLng });
                        map.setZoom(13);
                    },
                    (error) => {
                        console.log('Geolocation error:', error);
                        // Keep default center (Dubai) if geolocation fails
                        console.log('Using default center (Dubai)');
                    }
                );
            } else {
                console.log('Geolocation not supported');
            }
        }, []);

        const onMapClick = (e) => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            console.log('Clicked coordinates:', lat, lng); // Debug log

            if (!geocoderRef.current) {
                console.log('Geocoder not available');
                return;
            }

            geocoderRef.current.geocode({ location: { lat, lng } }, (results, status) => {
                console.log('Geocoding result:', status, results); // Debug log

                if (status === "OK" && results && results[0]) {
                    const address = results[0].formatted_address;
                    const newLocation = {
                        name: address,
                        // type: "location", 
                        type: "Point",
                        coordinates: [lat, lng]
                    };
                    setSelected(newLocation);
                } else {
                    // Fallback: create location with coordinates even if geocoding fails
                    const newLocation = {
                        name: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                        // type: "location", 
                        type: "Point",
                        coordinates: [lat, lng]
                    };
                    setSelected(newLocation);
                }
            });
        };

        return (
            <div>
                <div style={{ width: "100%", height: 400 }}>
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        options={mapOptions}
                        onLoad={onMapLoad}
                        onClick={onMapClick}
                    >
                        {/* Current location marker (blue) */}
                        {currentLocation && (
                            <Marker
                                position={currentLocation}
                                title="Your Current Location"
                                icon={{
                                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="8" fill="#4285F4" stroke="white" stroke-width="2"/>
                                            <circle cx="12" cy="12" r="3" fill="white"/>
                                        </svg>
                                    `),
                                    scaledSize: new window.google.maps.Size(24, 24),
                                    anchor: new window.google.maps.Point(12, 12)
                                }}
                            />
                        )}

                        {/* Selected location marker (red) */}
                        {selected && (
                            <Marker
                                position={{ lat: selected.coordinates[0], lng: selected.coordinates[1] }}
                                title="Selected Location"
                                icon={{
                                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/>
                                        </svg>
                                    `),
                                    scaledSize: new window.google.maps.Size(24, 24),
                                    anchor: new window.google.maps.Point(12, 24)
                                }}
                            />
                        )}
                    </GoogleMap>
                </div>
                {currentLocation && (
                    <div style={{ marginTop: 10, padding: '8px', background: '#e6f3ff', borderRadius: '4px', fontSize: '12px' }}>
                        <strong>📍 Your Location:</strong> {currentLocation.lat.toFixed(5)}, {currentLocation.lng.toFixed(5)}
                    </div>
                )}
                {selected && (
                    <div style={{ marginTop: 10, padding: '8px', background: '#fff2e8', borderRadius: '4px' }}>
                        <strong>🎯 Selected:</strong> {selected.name}
                        <br />
                        <span style={{ fontSize: '12px', color: '#666' }}>
                            {selected.coordinates[0].toFixed(5)}, {selected.coordinates[1].toFixed(5)}
                        </span>
                    </div>
                )}
                <div style={{ textAlign: "right", marginTop: 15 }}>
                    <Button onClick={() => setIsMapModalVisible(false)} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button type="primary" onClick={() => selected && onLocationSelect(selected)} disabled={!selected}>
                        Confirm
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="pickupAddress"
                            label="Pickup Location"
                            rules={[{ required: true, message: "Select pickup location!" }]}
                        >
                            <Input
                                readOnly
                                placeholder="Click to select"
                                suffix={
                                    <Button type="link" onClick={() => openMapModal("pickup")}>
                                        Select on Map
                                    </Button>
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="dropoffAddress"
                            label="Dropoff Location"
                            rules={[{ required: true, message: "Select dropoff location!" }]}
                        >
                            <Input
                                readOnly
                                placeholder="Click to select"
                                suffix={
                                    <Button type="link" onClick={() => openMapModal("dropoff")}>
                                        Select on Map
                                    </Button>
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <div style={{ marginTop: 24, textAlign: "right" }}>
                    <Button icon={<ArrowLeftOutlined />} onClick={onBack} style={{ marginRight: 10 }}>
                        Previous
                    </Button>
                    <Button type="primary" htmlType="submit" disabled={!pickupLocation || !dropoffLocation}>
                        Continue
                    </Button>
                </div>
            </Form>

            {/* Map Modal */}
            <Modal title="Select Location" open={isMapModalVisible} footer={null} onCancel={() => setIsMapModalVisible(false)} width={800}>
                {GOOGLE_API_KEY ? (
                    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={["places"]}>
                        <GoogleMapSelector onLocationSelect={handleMapSelection} />
                    </LoadScript>
                ) : (
                    <p style={{ color: "red" }}>⚠️ Please configure your Google Maps API Key!</p>
                )}
            </Modal>
        </>
    );
}

export default ParcelStep2;
