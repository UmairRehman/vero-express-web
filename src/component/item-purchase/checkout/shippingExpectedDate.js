import React from 'react'

function ShippingExpectedDate() {
    const today = new Date();
    const endDate = addWorkingDays(today, 4);

    const formatDate = (date) =>
        date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });

    return (
        <h4 className="chk_h4">
            1. Shipping, Arrives between {formatDate(today)} — {formatDate(endDate)}
        </h4>
    );
}

// helper function
function addWorkingDays(date, days) {
    const result = new Date(date);
    let added = 0;
    while (added < days) {
        result.setDate(result.getDate() + 1);
        const day = result.getDay();
        if (day !== 0 && day !== 6) {
            added++;
        }
    }
    return result;
}

export default ShippingExpectedDate