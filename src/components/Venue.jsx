export default function Venue() {
  return (
    <section id="venue" className="section venue-section">
      <div className="venue-wrap fade-up">
        <span className="sec-label">Where</span>
        <h2 className="sec-title">The <em>Venue</em></h2>
        <div className="venue-card">
          <div className="venue-name">Alausa Secretariat Mosque</div>
          <div className="venue-sub">Lagos, Nigeria &mdash; venue to be confirmed</div>
          <div className="venue-row">
            <div className="venue-cell">
              <span className="venue-cell-label">City</span>
              <span className="venue-cell-val">Lagos, Nigeria</span>
            </div>
            <div className="venue-cell">
              <span className="venue-cell-label">Date</span>
              <span className="venue-cell-val">23 or 24 Jan 2027</span>
            </div>
            <div className="venue-cell">
              <span className="venue-cell-label">Duration</span>
              <span className="venue-cell-val">Fajr to Isha</span>
            </div>
            <div className="venue-cell">
              <span className="venue-cell-label">Stay</span>
              <span className="venue-cell-val">Overnight option available</span>
            </div>
            <div className="venue-cell">
              <span className="venue-cell-label">Meals</span>
              <span className="venue-cell-val">Provided for all</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
