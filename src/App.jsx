import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Programme from './components/Programme'
import Categories from './components/Categories'
import Guests from './components/Guests'
import WhySection from './components/WhySection'
import Venue from './components/Venue'
import Register from './components/Register'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const fadeIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show')
          fadeIo.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })

    document.querySelectorAll('.fade-up').forEach(el => fadeIo.observe(el))

    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.stat').forEach((s) => {
            const d = parseInt(s.dataset.delay || 0)
            setTimeout(() => s.classList.add('show'), d)
          })
          statsObs.disconnect()
        }
      })
    }, { threshold: 0.3 })
    const firstStat = document.querySelector('.stat')
    if (firstStat) statsObs.observe(firstStat.closest('.stats-bar'))

    const tlObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.tl-item').forEach((item) => {
            const d = parseInt(item.dataset.delay || 0)
            setTimeout(() => item.classList.add('show'), d)
          })
          tlObs.disconnect()
        }
      })
    }, { threshold: 0.05 })
    const timeline = document.querySelector('.timeline')
    if (timeline) tlObs.observe(timeline)

    return () => {
      fadeIo.disconnect()
      statsObs.disconnect()
      tlObs.disconnect()
    }
  }, [])

  return (
    <>
      <div className="pattern-bg" />
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Programme />
      <Categories />
      <Guests />
      <WhySection />
      <Venue />
      <Register />
      <Footer />
    </>
  )
}
