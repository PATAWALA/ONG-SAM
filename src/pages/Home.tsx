import Hero from '../components/sections/Hero'
import Mission from '../components/sections/Mission'
import Domaines from '../components/sections/Domaines'
import Team from '../components/sections/Team'
import Tontines from '../components/sections/Tontines'
import Partners from '../components/sections/Partners'
import CallToAction from '../components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Domaines />
      <Team/>
      <Tontines />
      <Partners />
      <CallToAction />
    </>
  )
}