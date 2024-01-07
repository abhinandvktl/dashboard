import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='brand'>
                <img width={'110px'} src="/Assets/brand-logo.png" alt="Logo" className='brand-logo' />
            </div>
            <div className='header-left'>
                <div className="brand-badge">
                    <img width={'40px'} className='badge-image' src="/Assets/badge-image.jpg" alt="" />
                    <span>XYZ Enterprises Pvt.Ltd</span>
                </div>
                <div className="drop-down">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Header