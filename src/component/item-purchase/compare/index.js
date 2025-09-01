import React, { useState, useCallback, useRef } from 'react'
import { Select, Spin } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import DefaultImage from "../../../assets/images/default-image.webp"
import { searchProductsByName } from '../../../services/stores'

const { Option } = Select

function CompareComponent({ product, loading }) {
    const [compareProduct1, setCompareProduct1] = useState(null)
    const [compareProduct2, setCompareProduct2] = useState(null)
    const [searching1, setSearching1] = useState(false)
    const [searching2, setSearching2] = useState(false)
    const [searchResults1, setSearchResults1] = useState([])
    const [searchResults2, setSearchResults2] = useState([])
    
    const searchTimeoutRef1 = useRef(null)
    const searchTimeoutRef2 = useRef(null)

    // Simple debounced search function
    const debouncedSearch = useCallback((searchText, setSearching, setResults, timeoutRef) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        
        timeoutRef.current = setTimeout(async () => {
            if (!searchText || searchText.length < 2) {
                setResults([])
                return
            }
            
            setSearching(true)
            try {
                const response = await searchProductsByName({ product_name: searchText })
                if (response?.data?.success && response?.data?.data?.data) {
                    setResults(response.data.data.data)
                } else {
                    setResults([])
                }
            } catch (error) {
                console.error('Error searching products:', error)
                setResults([])
            } finally {
                setSearching(false)
            }
        }, 500)
    }, [])

    // Render product card for comparison
    const renderProductCard = (compareProduct, title, onDeselect, searchResults, setSearching, setResults, timeoutRef, isFirstColumn) => {
        if (!compareProduct) {
            return (
                <div className="compare-item form-group">
                    <label>{title}</label>
                    <div className="cs_search_bar">
                        <Select
                            showSearch
                            placeholder="Search products to compare..."
                            style={{ width: '100%' }}
                            onSearch={(value) => debouncedSearch(value, setSearching, setResults, timeoutRef)}
                            onSelect={(value) => {
                                const selectedProduct = searchResults.find(p => p._id === value)
                                if (selectedProduct) {
                                    if (isFirstColumn) {
                                        setCompareProduct1(selectedProduct)
                                    } else {
                                        setCompareProduct2(selectedProduct)
                                    }
                                }
                            }}
                            notFoundContent={setSearching ? <Spin size="small" /> : null}
                            filterOption={false}
                            allowClear
                            onClear={() => setResults([])}
                        >
                            {searchResults.map(p => (
                                <Option key={p._id} value={p._id}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img 
                                            src={p.product_image || DefaultImage} 
                                            alt={p.product_name} 
                                            style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                                        />
                                        <span>{p.product_name}</span>
                                        <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                                            USD {p.product_price}
                                        </span>
                                    </div>
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            )
        }

        return (
            <div className="compare-item">
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => onDeselect()}
                        style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            background: '#ff4d4f',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 1
                        }}
                    >
                        <CloseOutlined style={{ fontSize: '12px' }} />
                    </button>
                    
                    <a className="comp_img">
                        <img 
                            src={compareProduct.product_image ? compareProduct.product_image : DefaultImage} 
                            alt={compareProduct.product_name} 
                        />
                    </a>
                    <a className="comp_cat">
                        {/* {compareProduct.product_category} */}
                    </a>
                    <a className="comp_title">
                        {compareProduct.product_name}
                    </a>

                    <div className="prod-star">
                        {[...Array(5)].map((_, i) => (
                            <i className="fa fa-star" key={i}></i>
                        ))}
                        <span>4.8 (20 reviews)</span>
                    </div>

                    <ul className="comp-select">
                        <li>
                            <label>Price:</label>
                            <h6>USD {compareProduct.product_price || "0.00"}</h6>
                        </li>
                        <li>
                            <label>Created:</label>
                            <span>{new Date(compareProduct.created_at).toLocaleDateString()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <section className="comparpro">
                <div className="container">
                    <div className="row row-compare">
                        <div className="col-md-12 text-center">
                            <p>Loading product details...</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="comparpro">
            <div className="container">
                <div className="row row-compare">
                    {/* First Column - Selected Product */}
                    <div className="col-md-4">
                        <h5>Selected Item</h5>
                        <div className="compare-item">
                            <a className="comp_img">
                                <img 
                                    src={product?.product_image ? product.product_image : DefaultImage} 
                                    alt={product?.product_name || "Product"} 
                                />
                            </a>
                            <a className="comp_cat">
                                {product?.product_category?.name}
                            </a>
                            <a className="comp_title">
                                {product?.product_name}
                            </a>

                            <div className="prod-star">
                                {[...Array(5)].map((_, i) => (
                                    <i className="fa fa-star" key={i}></i>
                                ))}
                                <span>4.8 (20 reviews)</span>
                            </div>

                            <ul className="comp-select">
                                <li>
                                    <label>Price:</label>
                                    <h6>USD {product?.product_price}</h6>
                                </li>
                                <li>
                                    <label>Store:</label>
                                    <span>{product?.product_store}</span>
                                </li>
                                <li>
                                    <label>Description:</label>
                                    <span>{product?.product_description}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Second Column - Compare Product 1 */}
                    <div className="col-md-4">
                        <h5>Compare With</h5>
                        {renderProductCard(
                            compareProduct1, 
                            "Search Item", 
                            () => setCompareProduct1(null),
                            searchResults1,
                            setSearching1,
                            setSearchResults1,
                            searchTimeoutRef1,
                            true
                        )}
                    </div>

                    {/* Third Column - Compare Product 2 */}
                    <div className="col-md-4">
                        <h5>Compare With</h5>
                        {renderProductCard(
                            compareProduct2, 
                            "Search Item", 
                            () => setCompareProduct2(null),
                            searchResults2,
                            setSearching2,
                            setSearchResults2,
                            searchTimeoutRef2,
                            false
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompareComponent