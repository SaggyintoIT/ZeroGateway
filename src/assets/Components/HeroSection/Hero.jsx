import React from 'react'
import './Hero.css'
import logo1 from './logo_1.png'
import logo2 from './logo_2.png'
import logo3 from './logo_3.png'
import logo4 from './logo_4.png'
import logo5 from './logo_5.png'
import logo6 from './logo_6.png'
import hero from './illustration.png'
const Hero = () => {
  return (
    <div className='Hero-Section-Main'>
        <div className="hero-sub-main">
            <div className="hero-left">
            <h1 className='text-5xl font-sans'>Accept free & unlimited payments with instant bank</h1>
            <p>Unlock access to QR code, payment links, plugin, and APIs, enabling you to seamlessly accept both free and unlimited payments. Experience instant bank settlement while safeguarding against the risk of bank account freezes through our proprietory smart route technology.</p>

            <div className="buttonsHero">
                <button className='heroSignup'>Sign up</button>
                <button className='HeroStartbtn'>Start Accepting Payments</button>
            </div>
            </div>
            <div className="hero-right ">
                <img src={hero} alt="" />

            </div>

        </div>
        <section className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-9 mb-24">
        <div className="grid grid-cols-2 justify-center items-center gap-12 md:grid-cols-3 xl:grid-cols-none xl:flex xl:justify-between">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
