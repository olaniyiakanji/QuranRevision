import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(v => !v)

  return (
    <>
      <nav id="nav">
        <a href="#" className="nav-logo">
          <img src="/assets/Logo.jpeg" alt="QRD" className="nav-logo-icon" />
          <div className="nav-logo-text">
            <span>Qur'an Revision Day</span>
            <span>Lagos &middot; Nigeria</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programme">Programme</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#guests">Guests</a></li>
          <li><a href="#venue">Venue</a></li>
          <li><a href="#register" className="nav-cta">Register</a></li>
        </ul>
        <div className="hamburger" onClick={toggle} aria-label="Menu">
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mobile-nav${open ? ' open' : ''}`} id="mobileNav">
        <a href="#about" onClick={toggle}>About</a>
        <a href="#programme" onClick={toggle}>Programme</a>
        <a href="#categories" onClick={toggle}>Categories</a>
        <a href="#guests" onClick={toggle}>Guests</a>
        <a href="#venue" onClick={toggle}>Venue</a>
        <a href="#register" onClick={toggle} style={{ color: 'var(--gold)' }}>Register Now &rarr;</a>
      </div>
    </>
  )
}
