export default function Categories() {
  return (
    <section id="categories" className="section">
      <div className="categories-wrap">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <span className="sec-label">Who Can Attend</span>
          <h2 className="sec-title">Participation <em>Categories</em></h2>
        </div>
        <div className="categories-grid fade-up">
          <div className="cat-card">
            <div className="cat-arabic">خَتْم</div>
            <div className="cat-name">Full Qur&rsquo;an</div>
            <div className="cat-info">30 Ajzāʾ &middot; 1 student per teacher</div>
            <div className="cat-divider" />
            <div className="cat-num">20</div>
            <div className="cat-num-label">Students</div>
          </div>
          <div className="cat-card">
            <div className="cat-arabic">نِصْف</div>
            <div className="cat-name">Half Qur&rsquo;an</div>
            <div className="cat-info">15 Ajzāʾ &middot; 1 student per teacher</div>
            <div className="cat-divider" />
            <div className="cat-num">20</div>
            <div className="cat-num-label">Students</div>
          </div>
          <div className="cat-card">
            <div className="cat-arabic">رُبْع</div>
            <div className="cat-name">Quarter Qur&rsquo;an</div>
            <div className="cat-info">7.5 Ajzāʾ &middot; 2 students per teacher</div>
            <div className="cat-divider" />
            <div className="cat-num">40</div>
            <div className="cat-num-label">Students</div>
          </div>
          <div className="cat-card">
            <div className="cat-arabic">٥ أجزاء</div>
            <div className="cat-name">5 Ajzāʾ</div>
            <div className="cat-info">5+ Ajzāʾ &middot; 2 students per teacher</div>
            <div className="cat-divider" />
            <div className="cat-num">60</div>
            <div className="cat-num-label">Students</div>
          </div>
        </div>
      </div>
    </section>
  )
}
