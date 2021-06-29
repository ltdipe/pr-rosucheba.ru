import { NextSeo } from 'next-seo'
import MobileCircles from '@/components/general/MobileCircles'
import ThankyouPopup from '@/components/popups/ThankyouPopup'
import ThankyouPopupAlt from '@/components/popups/ThankyouPopupAlt'
import First from '@/components/sections/First'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import ManyOptions from '@/components/sections/ManyOptions'
import EduLevels from '@/components/sections/EduLevels'
import Partners from '@/components/sections/Partners'
import Requirements from '@/components/sections/Requirements'
import HowMuchCosts from '@/components/sections/HowMuchCosts'
import WhatToDo from '@/components/sections/WhatToDo'
import LineBetweenSections from '@/components/general/LineBetweenSections'
import QuestionsLeft from '@/components/sections/QuestionsLeft'
import TrustedBy from '@/components/sections/TrustedBy'
import MobileBottom from '@/components/sections/MobileBottom'
import MobileStickyBottom from '@/components/layout/MobileStickyBottom'
import MobileQuestionModule from '@/components/layout/MobileQuestionModule'
import PopupForm from '@/components/popups/PopupForm'

const Home = ({ data }) => {
  return (
    <>
      <NextSeo
        title={'Дистанционное образование'}
        description={'Rosucheba — получите высшее образование цистанционн'}
        canonical={'https://pr-rosucheba.ru/'}
      />
      <MobileCircles />
      <ThankyouPopup />
      <ThankyouPopupAlt />
      <First />
      <Testimonials />
      <About />
      <HowItWorks />
      <Partners />
      <ManyOptions />
      <EduLevels />
      <HowMuchCosts />
      <Requirements />
      <WhatToDo />
      <LineBetweenSections />
      <QuestionsLeft />
      <TrustedBy />
      <MobileBottom />
      <MobileStickyBottom />
      <MobileQuestionModule />
      <PopupForm />
    </>
  )
}

export async function getStaticProps() {
  const data = []
  return {
    props: {
      data
    }
  }
}

export default Home
