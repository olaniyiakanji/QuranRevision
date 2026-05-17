export default function WhySection() {
  return (
    <section className="section">
      <div className="why-wrap">
        <div className="fade-up">
          <span className="sec-label">Why This Matters</span>
          <h2 className="sec-title">More than a<br /><em>revision day</em></h2>
          <div style={{ width: '50px', height: '1px', background: 'var(--gold)', opacity: 0.4, margin: '1.8rem 0' }} />
          <p className="why-right-quote">
            &ldquo;Just imagine sitting in the Masjid from <strong>Fajr until Isha</strong>, surrounded by nothing but students and teachers of the Book of Allah.&rdquo;
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
            This event is designed to serve the spiritual and communal needs of the ummah in Lagos &mdash; strengthening Qur&rsquo;an memorization, preparing imams and huffaz for Tarawih and Qiyam al-Layl, and planting the seed of a lifelong annual tradition.
          </p>
        </div>
        <div className="fade-up">
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-num">01</div>
              <div className="why-card-title">Strengthen Memorization</div>
              <p className="why-card-body">Revise as much Qur&rsquo;an as possible in a single blessed sitting before Ramadan begins.</p>
            </div>
            <div className="why-card">
              <div className="why-card-num">02</div>
              <div className="why-card-title">Prepare for Tarawih</div>
              <p className="why-card-body">Imams and huffaz arrive at Ramadan more confident and spiritually prepared.</p>
            </div>
            <div className="why-card">
              <div className="why-card-num">03</div>
              <div className="why-card-title">Build Community</div>
              <p className="why-card-body">Connect with memorizers across Lagos and start building a lasting network of huffaz.</p>
            </div>
            <div className="why-card">
              <div className="why-card-num">04</div>
              <div className="why-card-title">Annual Tradition</div>
              <p className="why-card-body">The first of its kind in Nigeria &mdash; designed to grow into a major national gathering each year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
