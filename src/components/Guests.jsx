export default function Guests() {
  return (
    <section id="guests" className="section guests-section">
      <div className="guests-wrap">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <span className="sec-label">Travelling from the United Kingdom</span>
          <h2 className="sec-title">Invited <em>Guest Scholars</em></h2>
        </div>
        <div className="guests-grid">
          <div className="guest-card fade-up">
            <div className="guest-top">
              <img src="/assets/jamal.png" alt="Shaykh Jamal Abdulnasir" className="guest-photo" />
              <div className="guest-name">Shaykh Jamal Abdulnasir</div>
              <div className="guest-role">International Guest Scholar</div>
            </div>
            <div className="guest-bottom">
              <div className="guest-origin"><div className="guest-flag-dot" />United Kingdom</div>
            </div>
          </div>
          <div className="guest-card fade-up">
            <div className="guest-top">
              <img src="/assets/Abutaymiyah.png" alt="Shaykh Abu Taymiyah" className="guest-photo" />
              <div className="guest-name">Shaykh Abu Taymiyah</div>
              <div className="guest-role">International Guest Scholar</div>
            </div>
            <div className="guest-bottom">
              <div className="guest-origin"><div className="guest-flag-dot" />United Kingdom</div>
            </div>
          </div>
          <div className="guest-card fade-up">
            <div className="guest-top">
              <img src="/assets/syed.png" alt="Shaykh Syed Anis" className="guest-photo" />
              <div className="guest-name">Shaykh Syed Anis</div>
              <div className="guest-role">International Guest Scholar</div>
            </div>
            <div className="guest-bottom">
              <div className="guest-origin"><div className="guest-flag-dot" />United Kingdom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
