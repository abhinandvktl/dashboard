import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from '../Components/Sidebar/Sidebar'

function Dashboard() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='container'>
      <div className={`side-bar ${showSidebar ? '' : 'hidden'}`}>
        <Sidebar />
      </div>

      <div className='body-container'>
        {/* toggle btn */}
        <div className='toggle-btn' onClick={toggleSidebar}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className='body-header'>
          <h2>Choose a plan that's just right for you !</h2>
          <div className='buttons'>
            <button id='btn-month'>Monthly</button>
            <button id='btn-annual'>Annually<sup>-10%</sup></button>
          </div>
        </div>
        <div className='grid-container'>
          {/* cards */}
          <div className="grid-item">
            <div className="card">
              <h2>Basic</h2>
              <small>$89.99/mo</small>
              <p className='price'>$9.99/<span>mo</span></p>
              <button style={{ backgroundColor: 'rgb(255, 195, 121)' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
              <hr />
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 25 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                  cloud_upload
                </span>
                <span>Up to 25gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email</span>
              </div>
              <div className='explore-link'>
                <a href='#'>EXPLORE FEATURES</a>
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <h2>Standard</h2>
              <small>$189.99/mo</small>
              <p className='price'>$99.99/<span>mo</span></p>
              <button style={{ backgroundColor: '#fa9b78' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
              <hr />
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 50 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                  cloud_upload
                </span>
                <span>Up to 60gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email+Chat Support</span>
              </div>
              <div className='explore-link'>
                <a href='#'>EXPLORE FEATURES</a>
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <h2>Premium</h2>
              <small>$199.99/mo</small>
              <p className='price'>$9.99/<span>mo</span></p>
              <button style={{ backgroundColor: '#fa98d8' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
              <hr />
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 75 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                  cloud_upload
                </span>
                <span>Up to 100gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email+Chat+WhatsApp</span>
              </div>
              <div className='explore-link'>
                <a href='#'>EXPLORE FEATURES</a>
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="bottom-card">
            <div className="left">
              <div style={{ backgroundColor: '#74ff4e' }} className='free-forever'>
                <p>Free Forever</p>
              </div>
              <h2>Free Starter</h2>
              <p>The quickest and easiest way to try protocols with basic functionalities</p>
              <button style={{ backgroundColor: '#74ff4e' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="right">
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 25 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                  cloud_upload
                </span>
                <span>Up to 25gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email</span>
              </div>
              <div style={{ display: 'flex' }}>
                <i class="fa-solid fa-check-double"></i>
                <span style={{ marginLeft: '10px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia facilis in consequuntur dicta.</span>
              </div>
            </div>
          </div>
          <div className="bottom-card">
            <div className="left">
              <div style={{ backgroundColor: '#99d1ff' }} className='free-forever'>
                <p>Let's Connect</p>
              </div>
              <h1>Enterprise Plan</h1>
              <p>The quickest and easiest way to try protocols with basic functionalities</p>
              <button style={{ backgroundColor: '#99d1ff' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="right">
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 25 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                  cloud_upload
                </span>
                <span>Up to 25gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email</span>
              </div>
              <div style={{ display: 'flex' }}>
                <i class="fa-solid fa-check-double"></i>
                <span style={{ marginLeft: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='right-icons'>
        <div className='notification'>
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className='add'>
          <div className='slider'></div>
          <div className='add-btn'>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard