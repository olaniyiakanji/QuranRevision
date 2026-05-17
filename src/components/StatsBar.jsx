export default function StatsBar() {
  return (
    <div className="stats-bar section">
      <div className="stat" data-delay="0">
        <span className="stat-num">140+</span>
        <span className="stat-lbl">Participants</span>
      </div>
      <div className="stat" data-delay="100">
        <span className="stat-num">90+</span>
        <span className="stat-lbl">Teachers &amp; Listeners</span>
      </div>
      <div className="stat" data-delay="200">
        <span className="stat-num">6</span>
        <span className="stat-lbl">Recital Sessions</span>
      </div>
      <div className="stat" data-delay="300">
        <span className="stat-num">3</span>
        <span className="stat-lbl">UK Guest Scholars</span>
      </div>
      <div className="stat" data-delay="400">
        <span className="stat-num">1st</span>
        <span className="stat-lbl">Edition in Nigeria</span>
      </div>
    </div>
  )
}
