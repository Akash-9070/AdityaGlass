import ParallaxHero from './components/ParallaxHero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import MapAndAddress from './components/MapAndAddress'
import Contact from './components/Contact'
import Features from './components/Features'

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <Features />
      <Services />
      <Portfolio />
      <MapAndAddress />
      <Contact />
    </>
  )
}

