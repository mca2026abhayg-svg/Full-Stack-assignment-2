import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [activeTab, setActiveTab] = useState('business')

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="tab-toggle">
          <button
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal
          </button>
          <button
            className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            Business
          </button>
        </div>

        <div className="hero-content">
          {activeTab === 'business' ? (
            <>
              <h1 className="hero-title">PayPal Open</h1>
              <h2 className="hero-subtitle">
                One platform for your business needs
              </h2>
              <p className="hero-description">
                PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.
              </p>
            </>
          ) : (
            <>
              <h1 className="hero-title">PayPal</h1>
              <h2 className="hero-subtitle">
                The smarter way to pay and get paid
              </h2>
              <p className="hero-description">
                Send and receive money, shop online, and manage your finances — all in one place.
              </p>
            </>
          )}

          <div className="hero-actions">
            <button className="btn-primary">Sign Up</button>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

