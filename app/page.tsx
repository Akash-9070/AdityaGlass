import ParallaxHero from './components/ParallaxHero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import MapAndAddress from './components/MapAndAddress'
import Contact from './components/Contact'
import Features from './components/Features'
import ProjectGallery from './components/Products'
import BillGenerator from './components/BillGenerator'


export default function Home() {
  return (
    <>
      <ParallaxHero />
      <Features />
      <Services />
      <BillGenerator />
      <ProjectGallery />
      <Portfolio />
      <MapAndAddress />
      <Contact />
    </>
  )
}

