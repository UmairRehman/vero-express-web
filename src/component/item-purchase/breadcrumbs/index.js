import React from 'react'

function Breadcrumb() {
    return (
        <div class="breadcrumb-bar">
            <div class="container">
                <div class="breadcrumb">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li class="sep"></li>
                        <li><a href="/">All Stores</a></li>
                        <li class="sep"></li>
                        <li><span>Walmart</span></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Breadcrumb