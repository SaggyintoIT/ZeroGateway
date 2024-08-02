import { useState } from 'react'

import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/HeroSection/Hero'
import PaymentSolution from './assets/Components/PaymentSolution/PaymentSolution'
import StatisticsSection from './assets/Components/Statis/Statis'
import TestimonialSlider from './assets/Components/Testimonials/Testimonial'
import BlogSec from './assets/Components/Blogsec/BlogSec'
import FAQ from './assets/Components/Faq/faq'
import Footer from './assets/Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <PaymentSolution/>
      <StatisticsSection/>
      <TestimonialSlider/>
      <BlogSec/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
