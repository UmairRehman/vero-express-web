import React, { useState, useEffect } from 'react';
import StoresSmallCard from '../../home/storesSmallCard';
import { getStores } from '../../../services/stores';
import { useNavigate } from 'react-router-dom';

const StoreListing = () => {
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);
    const [displayCount, setDisplayCount] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchStores();
    }, [displayCount, currentPage]);

    const fetchStores = async () => {
        setLoading(true);
        try {
            const { data: res } = await getStores({
                per_page: displayCount,
                page: currentPage
            });
            if (res.success && res.data) {
                setStores(res.data.data);
                setTotal(res.data.total || 0);
            }
        } catch (error) {
            console.log('Error fetching stores:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Top Available Stores</h2>
            <StoresSmallCard
                stores={stores}
                loading={loading}
                displayCount={displayCount}
                currentPage={currentPage}
                total={total}
                onDisplayCountChange={setDisplayCount}
                onPageChange={setCurrentPage}
                onStoreClick={() => navigate("../item-purchase/shop")}
                showExplore={false}
            />
        </div>
    );
};

export default StoreListing;
