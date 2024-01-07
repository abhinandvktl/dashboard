import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='profle'>
                <img width={'80px'} height={'80px'} src="https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/345695727/original/e74131fc5e2d96ff705999fe2a3fda2ddd28b7ea.jpg" alt="profileImage" />
                <div className='profile-name'>
                    <h4>Ram Mohan</h4>
                    <i className="fa-solid fa-chevron-down fa-rotate-270"></i>
                </div>
                <p className='email'>rammohan2@gmail.com</p>
            </div>
            <div className='page-nav'>
                <div className="nav-item">
                    <img src="/Assets/dashboard-icon.png" alt="dashboard-icon" />
                    <h4>Dashboard</h4>
                </div>
                <div className="nav-item">
                    <img src="/Assets/perks-icon.png" alt="" />
                    <h4>Perks</h4>
                </div>
                <div className="nav-item">
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <h4>Addons</h4>
                </div>
                <div className="nav-item">
                    <i class="fa-solid fa-circle-question"></i>
                    <h4>Faq</h4>
                </div>
                <div className="nav-item">
                    <img src="/Assets/support-icon.png" alt="" />
                    <h4>Support</h4>
                </div>
            </div>
            <div className='logout'>
                <button>Logout <i class="fa-solid fa-power-off"></i></button>
            </div>
        </div>
    )
}

export default Sidebar