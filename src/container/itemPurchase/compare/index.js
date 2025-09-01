import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../component/header'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SubHeader from '../../../component/shared/subHeader'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import CompareComponent from '../../../component/item-purchase/compare'
import { getSingleProductDetails } from '../../../services/stores'
import { message } from 'antd'
import DefaultImage from '../../../assets/images/default-image.webp'

function Compare() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetch product details when component mounts
    useEffect(() => {
        const fetchProductDetails = async () => {
            if (!id) return

            setLoading(true)

            try {
                const response = await getSingleProductDetails(id)

                if (response?.data.success && response?.data) {
                    setProduct(response.data.data)
                }
            } catch (err) {
                message.error('Failed to load product details')
            } finally {
                setLoading(false)
            }
        }

        fetchProductDetails()
    }, [id])

    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <CompareComponent product={product} loading={loading} />
            <BestSeller />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </>
    )
}

export default Compare