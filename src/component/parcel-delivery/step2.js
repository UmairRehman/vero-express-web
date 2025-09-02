import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Typography, message, Modal } from 'antd';
import { EnvironmentOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

const { Title } = Typography;

function ParcelStep2({ formData, onSubmit, onBack }) {
    const [form] = Form.useForm();
    const [isMapModalVisible, setIsMapModalVisible] = useState(false);
    const [currentLocationType, setCurrentLocationType] = useState(null); // 'pickup' or 'dropoff'
    const [pickupLocation, setPickupLocation] = useState({
        name: "",
        type: "",
        coordinates: [0, 0]
    });
    const [dropoffLocation, setDropoffLocation] = useState({
        name: "",
        type: "",
        coordinates: [0, 0]
    });

    const onFinish = async (values) => {
        // Format data according to the required API structure
        console.log('Step 2 form submission data:', formData);
        return;
        const apiPayload = {
            service_type: formData?.deliveryVia,
            payment_type: formData?.payment_type || "",
            food_delivery: {
                restaurant_id: "",
                items: []
            },
            item_purchases: {
                store: "",
                items: []
            },
            item_return: {
                store: formData?.item_return?.store || "",
                items: formData?.item_return?.items
            },
            item_exchange: {
                store: "",
                items: []
            },
            drop_of_packages: {
                delivery_type: "",
                items: []
            },
            pick_up_location: {
                name: pickupLocation.name || "",
                type: pickupLocation.type || "",
                coordinates: pickupLocation.coordinates || [0, 0]
            },
            drop_of_location: {
                name: dropoffLocation.name || "",
                type: dropoffLocation.type || "",
                coordinates: dropoffLocation.coordinates || [0, 0]
            },
            comments: formData?.specialInstructions,
            discount_code: formData?.discount_code || "",
            sender_number: formData?.sender_number || "",
            no_of_seats: formData?.no_of_seats || ""
        };

        try {
            console.log('Sending API request with payload:', apiPayload);
            
            // Show loading message
            message.loading('Submitting location information...', 0);
            
            const response = await axios.post('https://vero-1.herokuapp.com/api/v1/purchase', apiPayload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Hide loading message
            message.destroy();
            
            console.log('API Response:', response.data);
            message.success('Location information submitted successfully!');
            
            // Call the onSubmit prop to navigate to step 3
            if (onSubmit) {
                onSubmit(apiPayload);
            }
            
        } catch (error) {
            // Hide loading message
            message.destroy();
            
            console.error('API Error:', error);
            
            if (error.response) {
                // Server responded with error status
                console.error('Error Response:', error.response.data);
                message.error(`API Error: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                // Request was made but no response received
                console.error('No response received:', error.request);
                message.error('Network error. Please check your connection and try again.');
            } else {
                // Something else happened
                console.error('Error:', error.message);
                message.error('An unexpected error occurred. Please try again.');
            }
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Form validation failed:', errorInfo);
        message.error('Please check the form for errors.');
    };

    const openMapModal = (locationType) => {
        setCurrentLocationType(locationType);
        setIsMapModalVisible(true);
    };

    const handleMapSelection = (locationData) => {
        if (currentLocationType === 'pickup') {
            setPickupLocation(locationData);
            form.setFieldsValue({ pickupAddress: locationData.name });
        } else if (currentLocationType === 'dropoff') {
            setDropoffLocation(locationData);
            form.setFieldsValue({ dropoffAddress: locationData.name });
        }
        setIsMapModalVisible(false);
    };

    const closeMapModal = () => {
        setIsMapModalVisible(false);
        setCurrentLocationType(null);
    };

    // Google Maps component using @react-google-maps/api package
    const GoogleMapSelector = ({ onLocationSelect, onClose }) => {
        const [selectedLocation, setSelectedLocation] = useState(null);
        const [map, setMap] = useState(null);
        const [geocoder, setGeocoder] = useState(null);
        const [showManualInput, setShowManualInput] = useState(false);
        const [manualAddress, setManualAddress] = useState('');
        const [manualCoordinates, setManualCoordinates] = useState({ lat: '', lng: '' });

        // Map options
        const mapOptions = {
            center: { lat: 0, lng: 0 }, // Will be updated based on user location
            zoom: 2,
            mapTypeId: 'roadmap',
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true
        };

        // Initialize geocoder when map loads
        const onMapLoad = useCallback((map) => {
            console.log('Map loaded successfully'); // Debug log
            setMap(map);
            if (window.google && window.google.maps) {
                const newGeocoder = new window.google.maps.Geocoder();
                setGeocoder(newGeocoder);
                console.log('Geocoder initialized'); // Debug log
                
                // Show location request prompt
                showLocationRequest(map);
            }
        }, []);

        // Cleanup effect to prevent memory leaks
        useEffect(() => {
            return () => {
                // Cleanup when component unmounts
                setMap(null);
                setGeocoder(null);
                setSelectedLocation(null);
            };
        }, []);

        const showLocationRequest = (mapInstance) => {
            if (!mapInstance) {
                console.log('Map instance not available for location request');
                return;
            }

            if (navigator.geolocation) {
                // Show a message to user about location request
                message.info('Please allow location access to center the map on your current location', 5);
                
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        if (!mapInstance) {
                            console.log('Map instance not available during geolocation success');
                            return;
                        }
                        
                        const userLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        mapInstance.setCenter(userLocation);
                        mapInstance.setZoom(12);
                        message.success('Map centered on your current location', 3);
                    },
                    (error) => {
                        console.log('Geolocation error:', error);
                        let errorMessage = 'Location access denied. You can manually navigate the map.';
                        
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage = 'Location access denied. You can manually navigate the map.';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage = 'Location information unavailable. You can manually navigate the map.';
                                break;
                            case error.TIMEOUT:
                                errorMessage = 'Location request timed out. You can manually navigate the map.';
                                break;
                        }
                        
                        message.warning(errorMessage, 5);
                        
                        // Set a more reasonable default location (e.g., center of a major city)
                        // You can change this to your preferred default location
                        if (mapInstance) {
                            const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // New York City
                            mapInstance.setCenter(defaultLocation);
                            mapInstance.setZoom(10);
                        }
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 60000
                    }
                );
            } else {
                message.warning('Geolocation is not supported by this browser. You can manually navigate the map.', 5);
            }
        };

        // Handle map click
        const onMapClick = useCallback((event) => {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            
            console.log('Map clicked at:', lat, lng); // Debug log
            
            setSelectedLocation({ coordinates: [lat, lng] });
            
            // Reverse geocode to get address
            if (geocoder) {
                reverseGeocode(lat, lng);
            } else {
                console.log('Geocoder not available yet');
            }
        }, [geocoder]);

        const reverseGeocode = (lat, lng) => {
            if (!geocoder) {
                console.log('Geocoder not available for reverse geocoding');
                return;
            }
            
            const latlng = { lat, lng };
            console.log('Reverse geocoding for:', lat, lng); // Debug log
            
            geocoder.geocode({ location: latlng }, (results, status) => {
                console.log('Geocoding result:', status, results); // Debug log
                
                if (status === 'OK') {
                    if (results[0]) {
                        const address = results[0].formatted_address;
                        const placeType = getPlaceType(results[0].types);
                        
                        console.log('Setting location:', { name: address, type: placeType, coordinates: [lat, lng] });
                        
                        setSelectedLocation({
                            name: address,
                            type: placeType,
                            coordinates: [lat, lng]
                        });
                    }
                } else {
                    console.error('Geocoder failed due to: ' + status);
                    setSelectedLocation({
                        name: `Location at ${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                        type: 'unknown',
                        coordinates: [lat, lng]
                    });
                }
            });
        };

        const getPlaceType = (types) => {
            if (types.includes('shopping_mall') || types.includes('store')) return 'shopping_center';
            if (types.includes('airport')) return 'airport';
            if (types.includes('hospital')) return 'hospital';
            if (types.includes('school') || types.includes('university')) return 'educational';
            if (types.includes('restaurant') || types.includes('food')) return 'restaurant';
            if (types.includes('hotel') || types.includes('lodging')) return 'hotel';
            if (types.includes('bank')) return 'bank';
            if (types.includes('gas_station')) return 'gas_station';
            if (types.includes('subway_station') || types.includes('train_station')) return 'transportation';
            return 'location';
        };

        const confirmSelection = () => {
            if (selectedLocation && selectedLocation.name) {
                onLocationSelect(selectedLocation);
            } else if (showManualInput && manualAddress && manualCoordinates.lat && manualCoordinates.lng) {
                const manualLocation = {
                    name: manualAddress,
                    type: 'manual',
                    coordinates: [parseFloat(manualCoordinates.lat), parseFloat(manualCoordinates.lng)]
                };
                onLocationSelect(manualLocation);
            }
        };

        const handleManualSubmit = () => {
            if (manualAddress && manualCoordinates.lat && manualCoordinates.lng) {
                const manualLocation = {
                    name: manualAddress,
                    type: 'manual',
                    coordinates: [parseFloat(manualCoordinates.lat), parseFloat(manualCoordinates.lng)]
                };
                setSelectedLocation(manualLocation);
            }
        };

        return (
            <div style={{ padding: '20px' }}>
                <Title level={4}>Select {currentLocationType === 'pickup' ? 'Pickup' : 'Dropoff'} Location</Title>
                
                <p style={{ marginBottom: '15px', color: '#666' }}>
                    Click anywhere on the map to select a location. The address will be automatically detected.
                </p>

                {/* Location Control Buttons */}
                <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                    <Button 
                        type="primary" 
                        icon={<EnvironmentOutlined />}
                        onClick={() => {
                            if (map) {
                                showLocationRequest(map);
                            } else {
                                message.warning('Map is still loading. Please wait a moment and try again.');
                            }
                        }}
                        style={{ marginRight: '10px' }}
                        className='btn btn-green'
                    >
                        Use My Location
                    </Button>
                </div>

                {/* Fallback for when Google Maps is not available */}
                {(!process.env.REACT_APP_GOOGLE_MAPS_API_KEY || process.env.REACT_APP_GOOGLE_MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY") && (
                    <div style={{ 
                        padding: '15px', 
                        background: '#fff2e8', 
                        border: '1px solid #ffbb96', 
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: '0 0 10px 0', color: '#d46b08' }}>
                            <strong>Note:</strong> Google Maps API key not configured. You can manually enter location details below.
                        </p>
                        <Button 
                            type="link" 
                            onClick={() => setShowManualInput(!showManualInput)}
                            style={{ padding: 0, height: 'auto' }}
                        >
                            {showManualInput ? 'Hide Manual Input' : 'Show Manual Input'}
                        </Button>
                    </div>
                )}

                {/* Manual Input Section */}
                {(showManualInput || (!process.env.REACT_APP_GOOGLE_MAPS_API_KEY || process.env.REACT_APP_GOOGLE_MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY")) && (
                    <div style={{ 
                        padding: '15px', 
                        background: '#f0f9ff', 
                        border: '1px solid #91d5ff', 
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <Title level={5}>Manual Location Input</Title>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Input
                                    placeholder="Enter full address"
                                    value={manualAddress}
                                    onChange={(e) => setManualAddress(e.target.value)}
                                    style={{ marginBottom: '10px' }}
                                />
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Input
                                    placeholder="Latitude (e.g., 25.2048)"
                                    value={manualCoordinates.lat}
                                    onChange={(e) => setManualCoordinates(prev => ({ ...prev, lat: e.target.value }))}
                                    style={{ marginBottom: '10px' }}
                                />
                            </Col>
                            <Col span={12}>
                                <Input
                                    placeholder="Longitude (e.g., 55.2708)"
                                    value={manualCoordinates.lng}
                                    onChange={(e) => setManualCoordinates(prev => ({ ...prev, lng: e.target.value }))}
                                    style={{ marginBottom: '10px' }}
                                />
                            </Col>
                        </Row>
                        <Button 
                            type="primary" 
                            onClick={handleManualSubmit}
                            disabled={!manualAddress || !manualCoordinates.lat || !manualCoordinates.lng}
                            style={{ marginTop: '10px' }}
                        >
                            Set Manual Location
                        </Button>
                    </div>
                )}
                
                {/* Google Maps Container */}
                <div style={{ 
                    width: '100%', 
                    height: '400px', 
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    marginBottom: '20px'
                }}>
                    {process.env.REACT_APP_GOOGLE_MAPS_API_KEY && process.env.REACT_APP_GOOGLE_MAPS_API_KEY !== "YOUR_GOOGLE_MAPS_API_KEY" ? (
                        <LoadScript 
                            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
                            libraries={['places']}
                            onError={(error) => {
                                console.error('Google Maps failed to load:', error);
                                message.error('Google Maps failed to load. Please check your API key.');
                            }}
                            onLoad={() => {
                                console.log('Google Maps script loaded successfully');
                            }}
                        >
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                options={mapOptions}
                                onLoad={onMapLoad}
                                onClick={onMapClick}
                            >
                                {selectedLocation && selectedLocation.coordinates && (
                                    <Marker
                                        position={{ 
                                            lat: selectedLocation.coordinates[0], 
                                            lng: selectedLocation.coordinates[1] 
                                        }}
                                        title="Selected Location"
                                    />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    ) : (
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#f5f5f5',
                            color: '#666'
                        }}>
                            <EnvironmentOutlined style={{ fontSize: '48px', marginBottom: '16px', color: '#1890ff' }} />
                            <h4>Google Maps API Key Required</h4>
                            <p style={{ textAlign: 'center', margin: '0 20px' }}>
                                Please configure your Google Maps API key in the environment variables to use the interactive map.
                            </p>
                            <p style={{ fontSize: '12px', marginTop: '10px', color: '#999' }}>
                                Add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file
                            </p>
                        </div>
                    )}
                </div>

                {selectedLocation && selectedLocation.name && (
                    <div style={{ 
                        padding: '15px', 
                        background: '#f6ffed', 
                        border: '1px solid #b7eb8f', 
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <strong>Selected Location:</strong><br />
                        <strong>Address:</strong> {selectedLocation.name}<br />
                        <strong>Type:</strong> {selectedLocation.type}<br />
                        <strong>Coordinates:</strong> [{selectedLocation.coordinates[0].toFixed(6)}, {selectedLocation.coordinates[1].toFixed(6)}]
                    </div>
                )}

                {/* Debug info - remove in production */}
                {selectedLocation && (
                    <div style={{ 
                        padding: '10px', 
                        background: '#f0f0f0', 
                        border: '1px solid #ccc', 
                        borderRadius: '4px',
                        marginBottom: '20px',
                        fontSize: '12px'
                    }}>
                        <strong>Debug - Selected Location State:</strong><br />
                        {JSON.stringify(selectedLocation, null, 2)}
                    </div>
                )}

                <div style={{ textAlign: 'right' }}>
                    <Button style={{ marginRight: '10px' }} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button 
                        type="primary" 
                        onClick={confirmSelection}
                        disabled={!selectedLocation || (!selectedLocation.name && !selectedLocation.coordinates && !showManualInput)}
                    >
                        Confirm Selection
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <>
            <Form
                form={form}
                name="parcelStep2Form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="ttb-form"
            >
                <Row>
                    <Col span={24}>
                        <Title level={3}>
                            Location Information
                            <span style={{ display: 'block', fontSize: '14px', fontWeight: 'normal', color: '#666' }}>
                                Select Pickup and Dropoff Locations
                            </span>
                        </Title>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="pickupAddress"
                            label="Pickup Location"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select pickup location!',
                                },
                            ]}
                        >
                            <Input 
                                placeholder="Click to select pickup location on map"
                                readOnly
                                suffix={
                                    <Button 
                                        type="link" 
                                        icon={<EnvironmentOutlined />}
                                        onClick={() => openMapModal('pickup')}
                                        style={{ padding: 0, height: 'auto' }}
                                    >
                                        Select on Map
                                    </Button>
                                }
                            />
                        </Form.Item>
                        
                        {pickupLocation.name && (
                            <div style={{ 
                                padding: '10px', 
                                background: '#f6ffed', 
                                border: '1px solid #b7eb8f', 
                                borderRadius: '6px',
                                marginBottom: '20px',
                                fontSize: '12px'
                            }}>
                                <strong>Pickup:</strong> {pickupLocation.name} ({pickupLocation.type})<br />
                                <strong>Coordinates:</strong> [{pickupLocation.coordinates[0]}, {pickupLocation.coordinates[1]}]
                            </div>
                        )}
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="dropoffAddress"
                            label="Dropoff Location"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select dropoff location!',
                                },
                            ]}
                        >
                            <Input 
                                placeholder="Click to select dropoff location on map"
                                readOnly
                                suffix={
                                    <Button 
                                        type="link" 
                                        icon={<EnvironmentOutlined />}
                                        onClick={() => openMapModal('dropoff')}
                                        style={{ padding: 0, height: 'auto' }}
                                    >
                                        Select on Map
                                    </Button>
                                }
                            />
                        </Form.Item>
                        
                        {dropoffLocation.name && (
                            <div style={{ 
                                padding: '10px', 
                                background: '#f6ffed', 
                                border: '1px solid #b7eb8f', 
                                borderRadius: '6px',
                                marginBottom: '20px',
                                fontSize: '12px'
                            }}>
                                <strong>Dropoff:</strong> {dropoffLocation.name} ({dropoffLocation.type})<br />
                                <strong>Coordinates:</strong> [{dropoffLocation.coordinates[0]}, {dropoffLocation.coordinates[1]}]
                            </div>
                        )}
                    </Col>
                </Row>

                <div className="btn-nex-prev full" style={{ marginTop: '24px' }}>
                    <Button 
                        type="default" 
                        icon={<ArrowLeftOutlined />}
                        size="large"
                        className="btn-grey btnNext"
                        onClick={onBack}
                    >
                        Previous
                    </Button>
                    <Button 
                        type="primary" 
                        size="large"
                        className="btn-primary btnPrevious"
                        htmlType="submit"
                        disabled={!pickupLocation.name || !dropoffLocation.name}
                    >
                        Continue
                    </Button>
                </div>
            </Form>

            {/* Google Maps Modal */}
            <Modal
                title="Select Location on Map"
                open={isMapModalVisible}
                onCancel={closeMapModal}
                footer={null}
                width={800}
                destroyOnClose
            >
                <GoogleMapSelector 
                    onLocationSelect={handleMapSelection}
                    onClose={closeMapModal}
                />
            </Modal>
        </>
    );
}

export default ParcelStep2;