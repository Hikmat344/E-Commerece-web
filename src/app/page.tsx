
import { Difference } from '../../components/section/Difference'
import { Footer } from '../../components/section/Footer'
import { Hero } from '../../components/section/Hero'
import Navbar from '../../components/section/Navbar'
import Newsletter from '../../components/section/Newsletter'
import Products from '../../components/section/Products'
import Promotion from '../../components/section/Promotion'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Promotion/>
    <Products />
    <Difference />
    <Newsletter />
    <Footer />
    </>
  )
}
