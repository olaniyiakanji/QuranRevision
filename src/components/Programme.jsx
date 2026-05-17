const items = [
  { time: '06:00', name: 'Registration & Arrival', tag: 'Arrival', tagClass: 'tag-meal', dot: '#B87333', delay: 0 },
  { time: '06:15', name: 'Recital Session 1', tag: 'Recital', tagClass: 'tag-recital', dot: '#5FAD8E', delay: 60 },
  { time: '07:00', name: 'Fajr Prayer', tag: 'Prayer', tagClass: 'tag-prayer', dot: null, delay: 120 },
  { time: '07:15', name: 'Recital Session 2', tag: 'Recital', tagClass: 'tag-recital', dot: '#5FAD8E', delay: 160 },
  { time: '08:30', name: 'Open Breakfast', tag: 'Meal', tagClass: 'tag-meal', dot: '#B87333', delay: 200 },
  { time: '09:15', name: 'Recital Session 3', tag: 'Recital', tagClass: 'tag-recital', dot: '#5FAD8E', delay: 240 },
  { time: '13:00', name: 'Ẓuhr Prayer', tag: 'Prayer', tagClass: 'tag-prayer', dot: null, delay: 280 },
  { time: '13:15', name: 'Lunch', tag: 'Meal', tagClass: 'tag-meal', dot: '#B87333', delay: 310 },
  { time: '13:45', name: 'Recital Session 4', tag: 'Recital', tagClass: 'tag-recital', dot: '#5FAD8E', delay: 340 },
  { time: '15:30', name: 'ʿAṣr Prayer', tag: 'Prayer', tagClass: 'tag-prayer', dot: null, delay: 370 },
  { time: '15:40', name: 'Recital Session 5', tag: 'Recital', tagClass: 'tag-recital', dot: '#5FAD8E', delay: 400 },
  { time: '17:05', name: 'Maghrib Prayer', tag: 'Prayer', tagClass: 'tag-prayer', dot: null, delay: 430 },
  { time: '17:20', name: 'Tea Time', tag: 'Break', tagClass: 'tag-meal', dot: '#B87333', delay: 460 },
  { time: '17:35', name: 'Recital Session 6', tag: 'Recital', tagClass: 'tag-recital', dot: '#5FAD8E', delay: 490 },
  { time: '19:30', name: 'ʿIshāʾ Prayer', tag: 'Prayer', tagClass: 'tag-prayer', dot: null, delay: 520 },
  { time: '19:45', name: 'Closing Ceremony & Certificate Presentation', tag: 'Ceremony', tagClass: 'tag-ceremony', dot: '#8B7BB5', delay: 550 },
]

export default function Programme() {
  return (
    <section id="programme" className="section programme-section">
      <div className="programme-wrap">
        <div className="programme-header fade-up">
          <div>
            <span className="sec-label">Full Day &mdash; Fajr to Isha</span>
            <h2 className="sec-title">Day <em>Programme</em></h2>
          </div>
          <div className="legend">
            <div className="legend-item"><div className="legend-dot ld-prayer" />Prayer</div>
            <div className="legend-item"><div className="legend-dot ld-recital" />Recital</div>
            <div className="legend-item"><div className="legend-dot ld-meal" />Meal / Break</div>
            <div className="legend-item"><div className="legend-dot ld-ceremony" />Ceremony</div>
          </div>
        </div>
        <div className="timeline">
          {items.map((item, i) => (
            <div className="tl-item" data-delay={item.delay} key={i}>
              <div className="tl-time">{item.time}</div>
              <div className="tl-line-col">
                <div className="tl-dot-wrap">
                  <div className="tl-dot" style={{ background: item.dot || 'var(--gold)' }} />
                </div>
              </div>
              <div className="tl-content">
                <div className="tl-name">{item.name}</div>
                <span className={`tl-tag ${item.tagClass}`}>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
