import { NextSeo } from 'next-seo'
import MobileCircles from '@/components/general/MobileCircles'
import ThankyouPopup from '@/components/popups/ThankyouPopup'
import ThankyouPopupAlt from '@/components/popups/ThankyouPopupAlt'
import First from '@/components/sections/First'
import Testimonials from '@/components/sections/Testimonials'
import AskQuestion from '@/components/sections/AskQuestion'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import EduLevels from '@/components/sections/EduLevels'
import Partners from '@/components/sections/Partners'
import Requirements from '@/components/sections/Requirements'
import HowMuchCosts from '@/components/sections/HowMuchCosts'
import TrustedBy from '@/components/sections/TrustedBy'
import MobileStickyBottom from '@/components/layout/MobileStickyBottom'
import MobileQuestionModule from '@/components/layout/MobileQuestionModule'
import PopupForm from '@/components/popups/PopupForm'

const Home = ({ data }) => {
  return (
    <>
      <NextSeo
        title={'Дистанционное образование'}
        description={'Rosucheba — получите высшее образование цистанционн'}
        canonical={'https://pr.rosucheba.ru/'}
      />

      {/* <MobileCircles />
      <ThankyouPopup />
      <ThankyouPopupAlt />
      <First />
      <Testimonials />
      <AskQuestion />
      <About />
      <HowItWorks />
      <EduLevels />
      <Partners />
      <Requirements />
      <HowMuchCosts />
      <TrustedBy />
      <MobileStickyBottom />
      <MobileQuestionModule />
      <PopupForm /> */}

      <header>
        <div className='rectangle-gradient-maker--header'></div>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='header-wrapper__header-items'>
              <div className='header-items__logo-container'>
                <svg
                  width='186'
                  height='30'
                  viewBox='0 0 186 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5.80229 18.8081H0.166229V4.94251H5.80229V7.14687C6.0699 6.57447 6.61526 6.01019 7.43836 5.45402C8.27972 4.88162 9.17378 4.59338 10.1226 4.59338C10.4267 4.59338 10.6781 4.61977 10.8747 4.67255V9.99265C10.2665 9.85057 9.70292 9.7775 9.18392 9.7775C7.67962 9.7775 6.55444 10.1794 5.80229 10.9873V18.8081Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M46.0433 19.1573C43.574 19.1573 41.6521 18.7533 40.2735 17.9475V13.6768C40.9526 14.0706 41.8203 14.4116 42.8766 14.6978C43.9511 14.986 45.0317 15.1281 46.1244 15.1281C46.8928 15.1281 47.278 14.9576 47.278 14.6186C47.278 14.4562 47.1705 14.3223 46.9556 14.2147C46.8117 14.1254 46.392 13.9813 45.6926 13.7844L44.2451 13.3541C42.7955 12.8527 41.7392 12.3067 41.0783 11.714C40.4701 11.1233 40.166 10.2545 40.166 9.10771C40.166 7.67467 40.7661 6.56437 41.9643 5.7768C43.1625 4.98924 44.8188 4.59546 46.9293 4.59546C48.9688 4.59546 50.7853 5.04202 52.3768 5.93919V10.1043C51.6976 9.69229 50.8461 9.34316 49.8264 9.05696C48.7539 8.75249 47.8051 8.60026 46.982 8.60026C46.3555 8.60026 46.0433 8.76264 46.0433 9.08335C46.0433 9.2437 46.2319 9.41421 46.6069 9.59283C46.7306 9.64763 46.9191 9.70853 47.1705 9.7816L48.835 10.2383C50.3555 10.7214 51.4239 11.2776 52.0423 11.9048C52.6586 12.532 52.9688 13.419 52.9688 14.5638C52.9688 15.9603 52.3646 17.0767 51.1584 17.9089C49.948 18.7411 48.245 19.1573 46.0433 19.1573Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M63.1928 13.4616V4.9425H68.8268V18.8081H63.1928V17.034C62.8704 17.5537 62.323 18.0368 61.5546 18.4853C60.8207 18.9319 60.0159 19.1572 59.1401 19.1572C57.654 19.1572 56.5187 18.6822 55.7321 17.7343C54.9455 16.7844 54.5521 15.4508 54.5521 13.7315V4.9425H60.2146V12.5198C60.2146 13.0759 60.3443 13.4961 60.6038 13.7823C60.8633 14.0705 61.1978 14.2126 61.6114 14.2126C62.2338 14.2126 62.763 13.9629 63.1928 13.4616Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M78.3554 19.1572C77.068 19.1572 75.8597 18.9055 74.7325 18.4042C73.587 17.8845 72.6281 17.0523 71.8597 15.9055C71.0731 14.7404 70.6798 13.3885 70.6798 11.8479C70.6798 10.289 71.0731 8.93716 71.8597 7.79032C73.362 5.65903 75.5454 4.59338 78.4081 4.59338C79.9286 4.59338 81.2889 4.8532 82.4871 5.37283V10.0211C81.3599 9.60902 80.3057 9.40401 79.3204 9.40401C78.4081 9.40401 77.6559 9.62323 77.066 10.0617C76.476 10.5001 76.18 11.105 76.18 11.8763C76.18 12.6639 76.4841 13.2789 77.0923 13.7173C77.6985 14.1558 78.479 14.377 79.4258 14.377C80.553 14.377 81.6275 14.1436 82.6473 13.6788V18.2742C81.2707 18.8629 79.8414 19.1572 78.3554 19.1572Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M90.6736 10.2911V18.8081H85.0375V0H90.6736V6.71661C90.9959 6.21525 91.5312 5.73216 92.2833 5.2653C93.0517 4.81875 93.8667 4.59344 94.7243 4.59344C96.2103 4.59344 97.3456 5.06841 98.1322 6.01633C98.9189 6.96425 99.3122 8.29986 99.3122 10.0191V18.8061H93.6498V11.2309C93.6498 10.6747 93.52 10.2546 93.2605 9.96835C93.001 9.68215 92.6665 9.53804 92.2529 9.53804C91.6305 9.53804 91.1034 9.78973 90.6736 10.2911Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M108.654 19.1573C106.507 19.1573 104.683 18.5118 103.18 17.2229C101.676 15.8974 100.926 14.1152 100.926 11.8764C100.926 9.79784 101.605 8.07048 102.965 6.69021C104.344 5.29168 106.142 4.59546 108.36 4.59546C110.274 4.59546 111.876 5.24906 113.165 6.55625C114.452 7.84517 115.097 9.59283 115.097 11.7952V13.0841H106.296C106.511 13.622 106.955 14.0279 107.624 14.306C108.295 14.5841 109.06 14.7221 109.917 14.7221C111.564 14.7221 113.048 14.373 114.373 13.6748V17.8115C113.118 18.7107 111.213 19.1573 108.654 19.1573ZM106.185 10.3987H109.863C109.842 9.78972 109.67 9.30054 109.337 8.93314C109.007 8.56575 108.589 8.38307 108.089 8.38307C107.016 8.38307 106.382 9.05493 106.185 10.3987Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M117.056 18.8081V0H122.718V6.50145C123.559 5.2308 124.82 4.59344 126.501 4.59344C128.255 4.59344 129.712 5.28357 130.876 6.66181C132.04 8.04207 132.62 9.77958 132.62 11.8743C132.62 13.9691 132.04 15.7066 130.876 17.0869C129.712 18.4671 128.255 19.1552 126.501 19.1552C124.82 19.1552 123.559 18.5199 122.718 17.2472V18.8061H117.056V18.8081ZM122.637 10.3175V13.4616C123.03 14.1254 123.736 14.4562 124.758 14.4562C125.437 14.4562 125.986 14.2106 126.408 13.7174C126.829 13.2242 127.038 12.6112 127.038 11.8764C127.038 11.1416 126.829 10.5286 126.408 10.0353C125.986 9.54209 125.437 9.29649 124.758 9.29649C123.754 9.29649 123.048 9.6375 122.637 10.3175Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M148.561 14.6714C148.847 14.6714 149.106 14.5902 149.339 14.4298V18.3271C148.676 18.8812 147.746 19.1593 146.548 19.1593C145.743 19.1593 145.001 18.9807 144.32 18.6214C143.64 18.2621 143.184 17.8338 142.951 17.3325C142.576 17.8704 142.021 18.3088 141.287 18.6498C140.553 18.9888 139.74 19.1593 138.844 19.1593C137.305 19.1593 136.097 18.729 135.221 17.8704C134.325 16.9752 133.879 15.873 133.879 14.5658C133.879 13.0963 134.416 11.9961 135.488 11.2613C136.599 10.5265 137.834 10.1591 139.192 10.1591C140.391 10.1591 141.431 10.4108 142.306 10.9122C142.306 9.53397 141.386 8.84383 139.543 8.84383C138.041 8.84383 136.717 9.14018 135.571 9.73086V5.50887C137.056 4.89993 138.819 4.59546 140.859 4.59546C142.933 4.59546 144.624 5.12321 145.931 6.18073C147.219 7.21999 147.863 8.59823 147.863 10.3195V14.0259C147.863 14.4562 148.094 14.6714 148.561 14.6714ZM142.387 14.8054V13.3541C142.01 13.0313 141.546 12.871 140.991 12.871C140.508 12.871 140.109 12.9867 139.796 13.2201C139.484 13.4535 139.328 13.7844 139.328 14.2147C139.328 14.6267 139.47 14.9576 139.758 15.2093C140.044 15.459 140.411 15.5848 140.859 15.5848C141.572 15.5848 142.083 15.325 142.387 14.8054Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M153.901 12.601C154.795 12.601 155.565 12.9237 156.208 13.5692C156.853 14.1781 157.173 14.9494 157.173 15.8811C157.173 16.7945 156.851 17.574 156.208 18.2194C155.563 18.8649 154.795 19.1877 153.901 19.1877C153.005 19.1877 152.228 18.8649 151.565 18.2194C150.921 17.574 150.6 16.7965 150.6 15.8811C150.6 14.9657 150.923 14.1984 151.565 13.5692C152.21 12.9237 152.986 12.601 153.901 12.601Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M164.743 18.8081H159.107V4.94251H164.743V7.14687C165.011 6.57447 165.556 6.01019 166.379 5.45402C167.221 4.88162 168.115 4.59338 169.063 4.59338C169.368 4.59338 169.619 4.61977 169.816 4.67255V9.99265C169.207 9.85057 168.644 9.7775 168.125 9.7775C166.62 9.7775 165.495 10.1794 164.743 10.9873V18.8081Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M180.202 13.4616V4.9425H185.836V18.8081H180.202V17.034C179.879 17.5537 179.332 18.0368 178.564 18.4853C177.83 18.9319 177.025 19.1572 176.149 19.1572C174.663 19.1572 173.528 18.6822 172.741 17.7343C171.954 16.7844 171.561 15.4508 171.561 13.7315V4.9425H177.224V12.5198C177.224 13.0759 177.353 13.4961 177.613 13.7823C177.872 14.0705 178.207 14.2126 178.62 14.2126C179.243 14.2126 179.77 13.9629 180.202 13.4616Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M31.7991 26.4036V17.8074L31.6896 17.6958L31.0429 18.3433V26.4036L29.2223 29.2291H31.0429H31.7991H33.6197L31.7991 26.4036Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M25.5181 0.271579L13.7315 12.0724L25.5181 23.8732L37.3047 12.0724L25.5181 0.271579Z'
                    fill='#2874FF'
                  />
                  <path
                    d='M31.0409 18.124V18.3453L31.6876 17.6978L25.7941 11.7971L25.2569 12.333L31.0409 18.124Z'
                    fill='white'
                  />
                </svg>
                <h2 className='logo-container__title text-highlight--color'>
                  Дистанционное высшее образование
                </h2>
              </div>
              <div className='header-items__item-group-container'>
                <div className='item-group-container__row-wrapper'>
                  <div className='row-wrapper__icon mr-4'>
                    <svg
                      width='16'
                      height='24'
                      viewBox='0 0 16 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='icon_path__stroke-1'
                        d='M8.22217 11.25C9.87902 11.25 11.2222 9.90685 11.2222 8.25C11.2222 6.59315 9.87902 5.25 8.22217 5.25C6.56531 5.25 5.22217 6.59315 5.22217 8.25C5.22217 9.90685 6.56531 11.25 8.22217 11.25Z'
                        stroke='#FF6600'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        className='icon_path__stroke-1'
                        d='M14.2222 11.25C11.9722 16.5 8.22217 22.5 8.22217 22.5C8.22217 22.5 4.47217 16.5 2.22217 11.25C-0.0278318 6 3.72217 1.5 8.22217 1.5C12.7222 1.5 16.4722 6 14.2222 11.25Z'
                        stroke='#FF6600'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='row-wrapper__text'>
                    <p>Москва, Дербеневская набережная 11</p>
                  </div>
                </div>
                <div className='item-group-container__row-wrapper mb-0'>
                  <div className='row-wrapper__icon mr-4'>
                    <svg
                      width='21'
                      height='20'
                      viewBox='0 0 21 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='icon_path__counter'
                        d='M10.2222 0C4.70817 0 0.222168 4.486 0.222168 10C0.222168 15.514 4.70817 20 10.2222 20C15.7362 20 20.2222 15.514 20.2222 10C20.2222 4.486 15.7362 0 10.2222 0ZM10.2222 18C5.81117 18 2.22217 14.411 2.22217 10C2.22217 5.589 5.81117 2 10.2222 2C14.6332 2 18.2222 5.589 18.2222 10C18.2222 14.411 14.6332 18 10.2222 18Z'
                        fill='#FF6600'
                      />
                      <path
                        className='icon_path__counter'
                        d='M11.2222 5H9.22217V10.414L12.5152 13.707L13.9292 12.293L11.2222 9.586V5Z'
                        fill='#FF6600'
                      />
                    </svg>
                  </div>
                  <div className='row-wrapper__text'>
                    <p>Приемная комиссия пн-пт с 9-00 до 19-00</p>
                  </div>
                </div>
              </div>
              <div className='header-items__item-group-container fd-row'>
                <img
                  className='edu-icons'
                  src='img/other/rabo.png'
                  alt='Российская ассоциация бизнес-образования'
                  loading='lazy'
                />
                <img
                  className='edu-icons'
                  src='img/other/decm.png'
                  alt='Департамент образования города Москвы'
                  loading='lazy'
                />
              </div>
              {/*  <div className="header-items__item-group-container">
              <div className="item-group-container__row-wrapper">
                <div className="row-wrapper__text row-wrapper__text--bigger mr-0">
                  <p>Свяжитесь с нами:</p>
                </div>
              </div>
              <div className="item-group-container__row-wrapper mb-0">
                <div className="row-wrapper__sm-icons">
                  <a href="sm-icons__link">
                    <svg
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3567 1.10501C20.4967 0.640011 20.3567 0.299011 19.6947 0.299011H17.5017C16.9437 0.299011 16.6887 0.594012 16.5487 0.918012C16.5487 0.918012 15.4337 3.63701 13.8537 5.40001C13.3437 5.91301 13.1107 6.07501 12.8327 6.07501C12.6937 6.07501 12.4917 5.91301 12.4917 5.44801V1.10501C12.4917 0.547011 12.3307 0.299011 11.8657 0.299011H8.41971C8.07171 0.299011 7.86171 0.557011 7.86171 0.803011C7.86171 1.33101 8.65171 1.45301 8.73271 2.94101V6.16901C8.73271 6.87601 8.60571 7.00501 8.32571 7.00501C7.58271 7.00501 5.77471 4.27601 4.70171 1.15201C4.49271 0.545011 4.28171 0.300012 3.72171 0.300012H1.52971C0.90271 0.300012 0.77771 0.595012 0.77771 0.919012C0.77771 1.50101 1.52071 4.38101 4.23871 8.19001C6.05071 10.791 8.60171 12.201 10.9257 12.201C12.3187 12.201 12.4907 11.888 12.4907 11.348V9.38201C12.4907 8.75601 12.6237 8.63001 13.0647 8.63001C13.3887 8.63001 13.9467 8.79401 15.2477 10.047C16.7337 11.533 16.9797 12.2 17.8147 12.2H20.0067C20.6327 12.2 20.9457 11.887 20.7657 11.269C20.5687 10.654 19.8587 9.75901 18.9167 8.70001C18.4047 8.09601 17.6397 7.44601 17.4067 7.12101C17.0817 6.70201 17.1757 6.51701 17.4067 6.14501C17.4077 6.14601 20.0787 2.38401 20.3567 1.10501Z"
                        fill="#4D76A1"
                      />
                    </svg>
                  </a>
                  <a href="sm-icons__link">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6044 5.09C15.7244 0.65 9.84438 -0.67 5.28438 2.09C0.844377 4.85 -0.595623 10.85 2.28438 15.29L2.52438 15.65L1.56438 19.25L5.16438 18.29L5.52438 18.53C7.08438 19.37 8.76438 19.85 10.4444 19.85C12.2444 19.85 14.0444 19.37 15.6044 18.41C20.0444 15.53 21.3644 9.65 18.6044 5.09ZM16.0844 14.33C15.6044 15.05 15.0044 15.53 14.1644 15.65C13.6844 15.65 13.0844 15.89 10.6844 14.93C8.64438 13.97 6.96438 12.41 5.76438 10.61C5.04438 9.77 4.68438 8.69 4.56438 7.61C4.56438 6.65 4.92438 5.81 5.52438 5.21C5.76438 4.97 6.00438 4.85 6.24438 4.85H6.84438C7.08438 4.85 7.32438 4.85 7.44438 5.33C7.68438 5.93 8.28438 7.37 8.28438 7.49C8.40438 7.61 8.40438 7.85 8.28438 7.97C8.40438 8.21 8.28438 8.45 8.16438 8.57C8.04438 8.69 7.92438 8.93 7.80438 9.05C7.56438 9.17 7.44438 9.41 7.56438 9.65C8.04438 10.37 8.64438 11.09 9.24438 11.69C9.96438 12.29 10.6844 12.77 11.5244 13.13C11.7644 13.25 12.0044 13.25 12.1244 13.01C12.2444 12.77 12.8444 12.17 13.0844 11.93C13.3244 11.69 13.4444 11.69 13.6844 11.81L15.6044 12.77C15.8444 12.89 16.0844 13.01 16.2044 13.13C16.3244 13.49 16.3244 13.97 16.0844 14.33Z"
                        fill="#3DBD2A"
                      />
                    </svg>
                  </a>
                  <a href="sm-icons__link">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1111 18.25C12.2328 18.25 14.2676 17.4071 15.7679 15.9069C17.2682 14.4066 18.1111 12.3717 18.1111 10.25C18.1111 8.12827 17.2682 6.09344 15.7679 4.59315C14.2676 3.09285 12.2328 2.25 10.1111 2.25C7.98935 2.25 5.95452 3.09285 4.45423 4.59315C2.95394 6.09344 2.11108 8.12827 2.11108 10.25C2.11108 12.3717 2.95394 14.4066 4.45423 15.9069C5.95452 17.4071 7.98935 18.25 10.1111 18.25ZM10.1111 20.25C4.58808 20.25 0.111084 15.773 0.111084 10.25C0.111084 4.727 4.58808 0.25 10.1111 0.25C15.6341 0.25 20.1111 4.727 20.1111 10.25C20.1111 15.773 15.6341 20.25 10.1111 20.25Z"
                        fill="#7B519D"
                      />
                      <path
                        d="M13.7551 9.65403C13.7671 8.16203 12.5361 6.79403 11.0111 6.60503L10.9111 6.59003C10.8346 6.57484 10.757 6.56614 10.6791 6.56403C10.3661 6.56403 10.2831 6.79003 10.2611 6.92503C10.2486 6.98109 10.2475 7.03909 10.2578 7.0956C10.2681 7.1521 10.2896 7.20597 10.3211 7.25403C10.4251 7.39903 10.6071 7.42403 10.7531 7.44603C10.7961 7.45203 10.8371 7.45703 10.8701 7.46603C12.2411 7.78103 12.7031 8.27803 12.9281 9.68103C12.9341 9.71603 12.9361 9.75803 12.9381 9.80303C12.9481 9.97003 12.9691 10.319 13.3331 10.319C13.3631 10.319 13.3951 10.317 13.4291 10.311C13.7681 10.258 13.7571 9.93903 13.7521 9.78603C13.7495 9.74907 13.7495 9.71198 13.7521 9.67503C13.7532 9.66841 13.7538 9.66173 13.7541 9.65503L13.7551 9.65403Z"
                        fill="#7B519D"
                      />
                      <path
                        d="M10.5911 6.05701C10.6311 6.06001 10.6711 6.06301 10.7021 6.06801C12.9521 6.42601 13.9881 7.52601 14.2751 9.86801C14.2801 9.90801 14.2801 9.95601 14.2811 10.008C14.2841 10.191 14.2901 10.571 14.6861 10.579H14.6981C14.7525 10.5819 14.8068 10.5731 14.8575 10.5533C14.9082 10.5335 14.9541 10.503 14.9921 10.464C15.1151 10.331 15.1071 10.134 15.1001 9.97401C15.0981 9.93601 15.0961 9.89901 15.0971 9.86701C15.1251 7.47201 13.1171 5.30001 10.7991 5.22001L10.7711 5.22101C10.7621 5.22233 10.7531 5.223 10.7441 5.22301C10.7211 5.22301 10.6921 5.22101 10.6621 5.21901C10.6222 5.21537 10.5822 5.21336 10.5421 5.21301C10.1731 5.21301 10.1031 5.48301 10.0941 5.64501C10.0741 6.01801 10.4231 6.04501 10.5911 6.05701ZM14.1661 12.894C14.1179 12.8563 14.0703 12.818 14.0231 12.779C13.7771 12.575 13.5151 12.387 13.2631 12.205C13.2104 12.1671 13.1577 12.1291 13.1051 12.091C12.7811 11.857 12.4901 11.742 12.2151 11.742C11.8451 11.742 11.5221 11.954 11.2551 12.371C11.1371 12.555 10.9931 12.645 10.8171 12.645C10.6942 12.6406 10.5738 12.6096 10.4641 12.554C9.41909 12.064 8.67209 11.314 8.24509 10.324C8.03909 9.84401 8.10509 9.53201 8.46909 9.27701C8.67509 9.13301 9.05909 8.86401 9.03209 8.34901C9.00209 7.76401 7.75109 6.00401 7.22409 5.80401C6.99928 5.71917 6.75138 5.71846 6.52609 5.80201C5.92109 6.01201 5.48609 6.38201 5.26909 6.86901C5.05909 7.34101 5.06909 7.89401 5.29709 8.47001C5.95409 10.136 6.87709 11.588 8.04309 12.786C9.18309 13.959 10.5851 14.919 12.2091 15.641C12.3551 15.706 12.5091 15.741 12.6211 15.767L12.7161 15.791C12.7291 15.7948 12.7426 15.7968 12.7561 15.797H12.7691C13.5331 15.797 14.4501 15.077 14.7321 14.255C14.9791 13.535 14.5281 13.18 14.1661 12.895V12.894ZM10.9291 7.96001C10.7991 7.96301 10.5261 7.97001 10.4301 8.25601C10.3861 8.39001 10.3911 8.50601 10.4461 8.60101C10.5271 8.74101 10.6831 8.78401 10.8241 8.80701C11.3361 8.89201 11.6001 9.18501 11.6521 9.72701C11.6771 9.98101 11.8421 10.157 12.0541 10.157C12.0701 10.1574 12.0861 10.1567 12.1021 10.155C12.3571 10.123 12.4801 9.93001 12.4691 9.58001C12.4731 9.21401 12.2881 8.80001 11.9731 8.47001C11.6571 8.13801 11.2761 7.95101 10.9291 7.96001Z"
                        fill="#7B519D"
                      />
                    </svg>
                  </a>
                  <a href="sm-icons__link">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4427 0.967003L1.71274 7.804C0.502744 8.29 0.509744 8.965 1.49074 9.266L6.04274 10.686L16.5747 4.041C17.0727 3.738 17.5277 3.901 17.1537 4.233L8.62074 11.934H8.61874L8.62074 11.935L8.30674 16.627C8.76674 16.627 8.96974 16.416 9.22774 16.167L11.4387 14.017L16.0377 17.414C16.8857 17.881 17.4947 17.641 17.7057 16.629L20.7247 2.401C21.0337 1.162 20.2517 0.601003 19.4427 0.967003Z"
                        fill="#32AADE"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>  */}
              <div className='header-items__item-group-container'>
                <div className='item-group-container__row-wrapper mb-0'>
                  <div
                    className='
                    row-wrapper__text
                    fd-column
                    row-wrapper__text--bigger
                    big-number
                  '>
                    <p className='text-highlight--color text-highlight--bold mr-4'>
                      +7 (499) 490-29-60
                    </p>
                    <p className='text-highlight--color are-there-questions-p'>
                      Есть вопросы? Звоните, проконсультируем!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='header-wrapper__menu'>
              <div className='menu__menu-mobile'>
                <input
                  type='checkbox'
                  className='menu-mobile__toggler'
                  name='menu-toggle'
                  id='menu-toggle'
                />
                <div className='menu-mobile__hamburder'>
                  <div className='menu-btn__btn-line'></div>
                  <div className='menu-btn__btn-line'></div>
                  <div className='menu-btn__btn-line mb-0'></div>
                </div>
                <div className='menu-mobile__menu-panel'>
                  <div className='menu-mobile__hamburder menu-mobile__hamburder--panel'></div>
                  <div className='menu-panel__menu-panel-row'>
                    <div className='menu-panel-row__number-wrapper'>
                      <div className='number-wrapper__text'>
                        <p>Номер приемной комиссии:</p>
                      </div>
                      <div className='number-wrapper__number'>
                        <p>+7 (499) 490-29-60</p>
                      </div>
                      <div className='number-wrapper__btn'>
                        <a
                          id='cta-make-a-call'
                          href='tel:+7-499-490-2960'
                          className='btn btn-tertiary'>
                          НАБРАТЬ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='menu-panel__menu-panel-row'>
                    <nav className='side-panel-nav'>
                      <ul className='side-panel-nav__side-panel-nav-items'>
                        <li className='side-panel-nav-items__nav-item'>
                          <a href='#about' className='nav-item__link'>
                            О Rosucheba
                          </a>
                        </li>
                        <li className='side-panel-nav-items__nav-item'>
                          <a href='#partners' className='nav-item__link'>
                            Вузы-партнеры
                          </a>
                        </li>
                        <li className='side-panel-nav-items__nav-item'>
                          <a
                            href='#choose-from-many'
                            className='nav-item__link'>
                            Специальности
                          </a>
                        </li>
                        <li className='side-panel-nav-items__nav-item'>
                          <a href='#what-to-do' className='nav-item__link'>
                            Поступление без ЕГЭ
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/*  This is area outside of menu is used to close the menu by click outside of it  */}
                <label
                  htmlFor='menu-toggle'
                  className='area-outside-of-menu'></label>
                {/*  <label htmlFor="menu-toggle" className="area-at-the-right-edge"></label>  */}
              </div>
              <hr className='header-wrapper__menu__line border-highlight--color' />
              <nav className='menu__menu-items-container'>
                <ul className='menu-items-container__menu-items'>
                  <li className='menu-items__menu-item'>
                    <a href='#about' className='menu-item__link'>
                      О Rosucheba
                    </a>
                  </li>
                  <li className='menu-items__menu-item'>
                    <a href='#partners' className='menu-item__link'>
                      Вузы-партнеры
                    </a>
                  </li>
                  {/*  <li className="menu-items__menu-item">
                  <a href="#how-it-works" className="menu-item__link"
                    >Как работаем</a
                  >
                </li>  */}
                  <li className='menu-items__menu-item'>
                    <a href='#needed-docs' className='menu-item__link'>
                      Документы для поступления
                    </a>
                  </li>
                  <li className='menu-items__menu-item'>
                    <a href='#choose-from-many' className='menu-item__link'>
                      Специальности
                    </a>
                  </li>
                  <li className='menu-items__menu-item'>
                    <a href='#what-to-do' className='menu-item__link'>
                      Поступление без ЕГЭ
                    </a>
                  </li>
                  <li className='menu-items__menu-item'>
                    <a href='#price-info' className='menu-item__link'>
                      Стоимость обучения
                    </a>
                  </li>
                  {/*  <li
                  className="menu-items__menu-item menu-items__menu-item--highlight"
                >
                  <a
                    href="#js-section-heading"
                    className="menu-item__link text-highlight--color"
                    >Программы</a
                  >
                </li>  */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main id='home'>
        <div className='circles-mobile'>
          <svg
            width='34'
            height='69'
            className=''
            viewBox='0 0 34 69'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='34.5'
              cy='34.5'
              r='34'
              stroke='#2874FF'
              strokeOpacity='0.2'
            />
          </svg>

          <svg
            width='69'
            height='141'
            viewBox='0 0 69 141'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='70.5'
              cy='70.5'
              r='70'
              stroke='#2874FF'
              strokeOpacity='0.15'
            />
          </svg>

          <svg
            width='126'
            height='252'
            viewBox='0 0 126 252'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='126'
              cy='126'
              r='125.5'
              stroke='#2874FF'
              strokeOpacity='0.1'
            />
          </svg>

          <svg
            width='208'
            height='374'
            viewBox='0 0 208 374'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='208'
              cy='166'
              r='207.5'
              stroke='#2874FF'
              strokeOpacity='0.08'
            />
          </svg>
        </div>
        <div id='js-app-is-submitted' className='app--is-sumbitted'>
          <div
            className='
            row
            step-success__step-success-row
            step-success__step-success-row--full-screen
          '>
            <svg
              className='success-check-icon mt-0'
              width='68'
              height='68'
              viewBox='0 0 68 68'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                className='icon_path__counter'
                cx='34'
                cy='34'
                r='34'
                fill='#2874FF'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M29.2073 41.736C29.2535 41.9487 29.3691 42.1479 29.5505 42.2967L30.1248 42.7674L30.4799 43.1666C30.6603 43.3694 30.9046 43.4814 31.1555 43.4994C31.524 43.5993 31.9334 43.4825 32.1911 43.1681L32.7517 42.4842L33.0831 42.1893C33.2302 42.0585 33.3296 41.894 33.3799 41.7177L45.735 26.6448C46.0851 26.2177 46.0227 25.5876 45.5956 25.2375L44.3623 24.2266C43.9352 23.8765 43.3051 23.939 42.955 24.3661L31.2594 38.6345L24.9386 31.5288C24.5715 31.1161 23.9395 31.0792 23.5268 31.4463L22.3354 32.5061C21.9227 32.8731 21.8858 33.5052 22.2528 33.9179L29.2073 41.736Z'
                fill='white'
              />
            </svg>
            <p
              className='
              step-success-row__p
              text-highlight--font-22 text-highlight--color text-highlight--bold
            '>
              Спасибо за заявку!
            </p>
            <p
              className='
              step-success-row__p
              text-highlight--font-12
              text-highlight--color
              text-highlight--fw-300
              mb-31
            '>
              Менеджер свяжется с Вами в ближайшее время
            </p>
            <a
              href='!#'
              id='step-success-row__back-to-main'
              className='btn step-success-row__back-to-main'>
              Вернуться на главную
            </a>
          </div>
        </div>
        <div id='js-app-is-submitted--learn-more' className='app--is-sumbitted'>
          <div
            className='
            row
            step-success__step-success-row
            step-success__step-success-row--full-screen
          '>
            <svg
              className='success-check-icon mt-0'
              width='68'
              height='68'
              viewBox='0 0 68 68'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle
                className='icon_path__counter'
                cx='34'
                cy='34'
                r='34'
                fill='#2874FF'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M29.2073 41.736C29.2535 41.9487 29.3691 42.1479 29.5505 42.2967L30.1248 42.7674L30.4799 43.1666C30.6603 43.3694 30.9046 43.4814 31.1555 43.4994C31.524 43.5993 31.9334 43.4825 32.1911 43.1681L32.7517 42.4842L33.0831 42.1893C33.2302 42.0585 33.3296 41.894 33.3799 41.7177L45.735 26.6448C46.0851 26.2177 46.0227 25.5876 45.5956 25.2375L44.3623 24.2266C43.9352 23.8765 43.3051 23.939 42.955 24.3661L31.2594 38.6345L24.9386 31.5288C24.5715 31.1161 23.9395 31.0792 23.5268 31.4463L22.3354 32.5061C21.9227 32.8731 21.8858 33.5052 22.2528 33.9179L29.2073 41.736Z'
                fill='white'
              />
            </svg>
            <p
              className='
              step-success-row__p
              text-highlight--font-22 text-highlight--color text-highlight--bold
            '>
              Спасибо за заявку!
            </p>
            <p
              className='
              step-success-row__p
              text-highlight--font-12
              text-highlight--color
              text-highlight--fw-300
              mb-31
            '>
              Менеджер свяжется с Вами в ближайшее время
            </p>
            <a
              href='!#'
              id='step-success-row__back-to-main--form-popup'
              className='btn step-success-row__back-to-main'>
              Вернуться на главную
            </a>
          </div>
        </div>
        <section id='js-section-heading' className='section-heading'>
          <div className='rectangle-gradient-maker'></div>
          <div className='rectangle-gradient-maker-desktop desktop-only'></div>
          <div
            className='
            container
            container-flex
            container-flex--jc-start
            container-flex--row
          '>
            <div className='section-heading__left'>
              <div className='left__text-headings'>
                <h1 className='h1 text-heading__primary text-highlight--bold'>
                  <span className='text-highlight--color'>
                    Высшее образование
                  </span>
                  <br />
                  <span id='location-depended-heading'>
                    дистанционно в вузах Москвы
                  </span>
                </h1>

                <h2 className='h5 text-headings__secondary'>
                  <span className='text-highlight--fw-500'>
                    Подайте заявку на обучение или консультацию сейчас!
                  </span>
                  Менеджер расскажет о ВУЗах-партнерах, возможных скидках и
                  подберет программу обучения.
                </h2>
              </div>

              {/*  <div id="submit-app" className="left__left-inputs">
              <div className="left-inputs__left-inputs-inner">
                <div id="fill-in-fields" className="fill-in-fields-below hidden">
                  <p>Заполните поля ниже</p>
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 16.5355L16.8284 19.3639L17.5355 20.0711L18.2426 19.3639L21.0711 16.5355L20.364 15.8284L17.5355 18.6568L14.7071 15.8284L14 16.5355Z"
                      fill="#FB0000"
                    />
                    <path
                      d="M1 0.500021C15.3057 0.4422 18.0509 5.29583 17.5 19"
                      stroke="#FB0000"
                    />
                  </svg>
                </div>
                 Input one
                <div className="container-input">
                  <div
                    id="input-select-choose-uni"
                    className="container-input__inner input-select-choose-uni"
                  >
                    <div className="input-select__arrow-down">
                      <svg
                        width="26"
                        height="14"
                        viewBox="0 0 26 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.3295 0L13.0013 10.8095L1.67047 0L0 1.59398L11.3282 12.406L13.0013 14L14.6718 12.406L26 1.59398L24.3295 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      id="input-select-choose-uni-inner-text"
                      className="input-style-primary input-style-select-primary"
                    >
                      Выберите ВУЗ
                    </div>
                  </div>
                  <div
                    id="input-select-choose-uni-dropdown"
                    className="container-input__inner-dropdown input-select-choose-uni-dropdown"
                  >
                    <ul className="inner-dropdown__inner-dropdown-items">
                      <li
                        className="inner-dropdown-items__item"
                        data-uni="consultation-is-needed"
                      >
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Определюсь после консультации
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item" data-uni="synergy">
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Московский финансово-промышленный университет
                          (Синергия)
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item" data-uni="IPO">
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Институт профессионального образования (ИПО)
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item" data-uni="MOI">
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Московский Открытый Институт (МОИ)
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item" data-uni="PocHOY">
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Российский Новый Университет (РосНОУ)
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item" data-uni="TGY">
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Тамбовский государственный университет (ТГУ)
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item" data-uni="CBA">
                        <p>
                          <svg
                            className="inner-dropdown-items-uni__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Столичная Бизнес Академия (СБА)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                 Input two
                <div className="container-input">
                  <div
                    id="input-select-choose-programm"
                    className="container-input__inner input-select-choose-programm"
                  >
                    <div className="input-select__arrow-down">
                      <svg
                        width="26"
                        height="14"
                        viewBox="0 0 26 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.3295 0L13.0013 10.8095L1.67047 0L0 1.59398L11.3282 12.406L13.0013 14L14.6718 12.406L26 1.59398L24.3295 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      id="input-select-choose-programm-inner-text"
                      className="input-style-primary input-style-select-primary"
                    >
                      Подберите направление
                    </div>
                  </div>

                   Programm dropdown step 1
                  <div
                    id="input-select-choose-programm-dropdown"
                    className="container-input__inner-dropdown input-select-choose-programm-dropdown"
                  >
                    <ul className="inner-dropdown__inner-dropdown-items">
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Определюсь после консультации
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Колледж
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Бакалавриат
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Специалитет
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Магистратура
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Профессиональная переподготовка
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Повышение квалификации
                        </p>
                      </li>
                      <li className="inner-dropdown-items__item">
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Master of Business Administration (МВА)
                        </p>
                      </li>
                    </ul>
                  </div>

                   Programm dropdown step 2
                  <div
                    id="input-select-choose-programm-dropdown--step-two"
                    className="container-input__inner-dropdown input-select-choose-programm-dropdown--step-two"
                  >
                    <ul
                      id="inner-dropdown-items--step-two"
                      className="inner-dropdown__inner-dropdown-items"
                    >
                      <li
                        id="inner-dropdown-items__item--selected"
                        className="inner-dropdown-items__item inner-dropdown-items__item--selected"
                      >
                        <p>
                          <svg
                            width="9"
                            height="15"
                            viewBox="0 0 9 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.20471 13.2882L2.41412 7.49765L8.20471 1.70706C8.5953 1.31647 8.5953 0.683529 8.20471 0.292941C7.81412 -0.097647 7.18118 -0.097647 6.79059 0.292941L0.292941 6.79059C-0.0976471 7.18118 -0.0976471 7.81412 0.292941 8.2047L6.79059 14.7024C7.18118 15.0929 7.81412 15.0929 8.20471 14.7024C8.5953 14.3118 8.5953 13.6788 8.20471 13.2882Z"
                              fill="#2874FF"
                            />
                          </svg>
                          <span
                            id="programm-dropdown-step-two-selected-step-one-item"
                            className="text-highlight--color"
                          ></span>
                        </p>
                      </li>
                      <li
                        id="js-insert-after--step-two"
                        className="inner-dropdown-items__item"
                      >
                        <p>
                          <svg
                            className="inner-dropdown-items-programm__item__icon"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
                              fill="#fff"
                            />
                          </svg>
                          Определюсь после консультации
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                 Input three
                <div id="container-input-phone-num" className="container-input">
                  <label htmlFor="phone-number">
                    <p className="text-highlight--font-12 text-highlight--bold">
                      <span className="text-highlight--color-red"> * </span>
                      Напишите свой номер:
                    </p>
                  </label>
                  <input
                    type="tel"
                    className="container-input-phone-number__input input-style-primary"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Номер телефона"
                  />
                </div>

                 Input four
                <div
                  id="container-input--user-name"
                  className="container-input container-input--user-name"
                >
                  <label htmlFor="user-name">
                    <p className="text-highlight--font-12 text-highlight--bold">
                      Ваше имя:
                    </p>
                  </label>
                  <input
                    type="text"
                    className="container-input-phone-number__input input-style-primary"
                    name="user-name"
                    id="user-name"
                    placeholder=""
                  />
                </div>
              </div>
            </div>  */}

              <div className='left__call-to-action'>
                <div className='call-to-action__btn-group'>
                  <p className='btn-group__limited'>
                    <span className='text-highlight--bold text-highlight--color'>
                      *количество мест со скидкой ограничено
                    </span>
                  </p>

                  {/*  id="cta-submit-application"  */}
                  <a
                    id='main-popup-btn'
                    href='#!'
                    className='btn-group__btn btn btn-primary'
                    type='button'>
                    ПОДАТЬ ЗАЯВКУ
                  </a>
                </div>

                <div className='call-to-action__discount'>
                  <div className='discount__arrow-pointer'>
                    <svg
                      className='arrow-pointer__arrow-up'
                      width='25'
                      height='28'
                      viewBox='0 0 25 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className='icon_path__counter'
                        d='M25 12.6301L13.9292 1.44405L12.5 0L11.0708 1.44405L0 12.6301L1.42918 14.0741L11.4895 3.91077V28H13.5105V3.91077L23.5708 14.0741L25 12.6301Z'
                        fill='#2874FF'
                      />
                    </svg>

                    <svg
                      className='arrow-pointer__left'
                      width='56'
                      height='26'
                      viewBox='0 0 56 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <rect
                        className='icon_path__counter'
                        x='14.0865'
                        y='2.39431'
                        width='17.5845'
                        height='2.3368'
                        transform='rotate(135 14.0865 2.39431)'
                        fill='#FF6600'
                      />
                      <rect
                        className='icon_path__counter'
                        x='1.65234'
                        y='11.5238'
                        width='17.5775'
                        height='2.3368'
                        transform='rotate(45 1.65234 11.5238)'
                        fill='#FF6600'
                      />
                      <rect
                        className='icon_path__counter'
                        x='3'
                        y='12.0001'
                        width='53'
                        height='2'
                        fill='#FF6600'
                      />
                    </svg>
                  </div>

                  <div className='discount__text-container text-highlight--bold'>
                    <p>
                      <span className='text-highlight--color'>
                        Скидка 30% на все программы до конца месяца!
                      </span>
                      Успейте получить!
                    </p>
                  </div>
                </div>
              </div>
              <div className='numbers-in-the-header'>
                <div className='content__showing-off-numbers'>
                  <div className='showing-off-numbers__showing-off-number'>
                    <div className='showing-off-number__number'>
                      <p
                        className='
                        text-highlight--font-60
                        text-highlight--color
                        text-highlight--bold
                      '>
                        6
                      </p>
                    </div>
                    <div className='showing-off-number__line'></div>
                    <div className='showing-off-number__description'>
                      <p className='text-highlight--fw-700'>Вузов-партнеров</p>
                    </div>
                  </div>
                  <div className='showing-off-numbers__showing-off-number'>
                    <div className='showing-off-number__number'>
                      <p
                        className='
                        text-highlight--font-60
                        text-highlight--color
                        text-highlight--bold
                      '>
                        50+
                      </p>
                    </div>
                    <div className='showing-off-number__line'></div>
                    <div className='showing-off-number__description'>
                      <p className='text-highlight--fw-700'>Специальностей</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='section-heading__right'>
              <div className='right__img'>
                <div className='img__img-container'>
                  <div className='img-container__circles'>
                    <svg
                      className='circles__circle'
                      width='407'
                      height='407'
                      viewBox='0 0 407 407'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle cx='203.5' cy='203.5' r='203.5' fill='#2874FF' />
                    </svg>
                    <svg
                      className='circles__circle--line'
                      width='1185'
                      height='1185'
                      viewBox='0 0 1185 1185'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        opacity='0.07'
                        cx='592.5'
                        cy='592.5'
                        r='592'
                        stroke='#2874FF'
                      />
                      <circle
                        opacity='0.3'
                        cx='592.5'
                        cy='592.5'
                        r='290'
                        stroke='#2874FF'
                      />
                      <circle
                        opacity='0.2'
                        cx='592.5'
                        cy='592.5'
                        r='386'
                        stroke='#2874FF'
                      />
                      <circle
                        opacity='0.1'
                        cx='592.5'
                        cy='592.5'
                        r='484'
                        stroke='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='img-container__person'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-testimonials'>
          <div className='container container-flex'>
            <div className='section-testimonials__testimonials'>
              <div className='testimonials__testimonial'>
                <div className='testimonial__icon'>
                  <svg
                    className='icon__suitcase'
                    width='46'
                    height='43'
                    viewBox='0 0 46 43'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__counter'
                      d='M44.4133 8.45496H35.1295V8.1075C35.1295 3.64837 31.5191 0 27.1064 0H18.1665C13.7538 0 10.1434 3.64837 10.1434 8.1075V8.45496H0.859612C0.401152 8.45496 0 8.86034 0 9.32362V41.2903C0 41.7536 0.401152 42.159 0.859612 42.159H44.4133C44.8717 42.159 45.2729 41.7536 45.2729 41.2903V9.32362C45.2729 8.86034 44.8717 8.45496 44.4133 8.45496ZM11.8626 8.1075C11.8626 4.57495 14.6707 1.73732 18.1665 1.73732H27.1064C30.6022 1.73732 33.4102 4.57495 33.4102 8.1075V8.45496H11.8626V8.1075ZM43.5537 20.5004V22.2377V40.4217H1.71922V22.2377V20.5004V10.1923H43.5537V20.5004Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M26.5334 21.7583C26.0749 21.7583 25.6738 22.1637 25.6738 22.627V25.9279C25.6738 27.781 24.1838 29.2867 22.3499 29.2867C20.5161 29.2867 19.0261 27.781 19.0261 25.9279V22.627C19.0261 22.1637 18.6249 21.7583 18.1665 21.7583H1.71924V23.4956H17.3069V25.9279C17.3069 28.7076 19.5419 31.024 22.3499 31.024C25.158 31.024 27.393 28.7655 27.393 25.9279V23.4956H43.5537V21.7583H26.5334Z'
                      fill='#FF6600'
                    />
                  </svg>
                </div>
                <div className='testimonial__title'>
                  <p className='text-highlight--color text-highlight--bold'>
                    СОВМЕЩАЙТЕ С РАБОТОЙ
                  </p>
                </div>
                <div className='testimonial__text-container'>
                  <p>
                    Во всех вузах-партнерах дистанционное обучение и сдача
                    сессий без отрыва от работы
                  </p>
                </div>
              </div>
              <div className='testimonials__testimonial'>
                <div className='testimonial__icon'>
                  <svg
                    className='icon__procent'
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__inner_counter'
                      d='M32.1597 18.345L15.8913 31.4096C15.5681 31.6818 15.4603 32.2262 15.7835 32.5528C15.9451 32.7705 16.1606 32.8794 16.43 32.8794C16.5916 32.8794 16.807 32.825 16.9148 32.7161L33.1832 19.6514C33.5065 19.3793 33.6142 18.8349 33.291 18.5083C33.0216 18.1272 32.5368 18.0728 32.1597 18.345Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M20.2547 24.1696C20.4702 24.1696 20.6856 24.1696 20.9011 24.1152C23.1098 23.7886 24.672 21.6656 24.2949 19.3793C24.1333 18.2905 23.5407 17.3107 22.6788 16.6575C21.8169 16.0042 20.7395 15.732 19.6621 15.8954C18.5848 16.0587 17.6151 16.6575 16.9687 17.5284C16.3223 18.3994 16.0529 19.4881 16.2145 20.5768C16.5377 22.6998 18.3154 24.1696 20.2547 24.1696ZM19.8776 17.5829C19.9854 17.5829 20.147 17.5284 20.2547 17.5284C21.4398 17.5284 22.5172 18.3994 22.6788 19.6514C22.8943 21.0123 21.9785 22.2644 20.6318 22.4821C19.2851 22.6998 18.0461 21.7744 17.8306 20.4135C17.6151 19.0526 18.5848 17.8006 19.8776 17.5829Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M28.8738 26.8914C26.6113 26.8914 24.7798 28.7422 24.7798 31.0285C24.7798 33.3149 26.6113 35.1657 28.8738 35.1657C31.1363 35.1657 32.9679 33.3149 32.9679 31.0285C32.914 28.7422 31.0825 26.8914 28.8738 26.8914ZM28.8738 33.4782C27.5271 33.4782 26.3959 32.335 26.3959 30.9741C26.3959 29.6132 27.5271 28.47 28.8738 28.47C30.2206 28.47 31.3518 29.6132 31.3518 30.9741C31.2979 32.3894 30.2206 33.4782 28.8738 33.4782Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__counter'
                      d='M49.0208 24.9862C49.0208 24.9317 49.0747 24.8229 49.0747 24.7684C49.0747 22.4277 46.6506 21.2301 44.5497 20.1958C43.0413 19.4337 41.4253 18.6172 40.9943 17.6373C40.5634 16.603 41.1559 14.9155 41.7485 13.3368C42.5565 11.105 43.3646 8.81865 41.8562 7.29444C40.3479 5.77023 38.1931 6.31459 36.0384 6.80451C34.53 7.13113 32.9678 7.51218 31.9443 7.0767C30.9208 6.64121 30.0589 5.2803 29.2509 3.97384C28.0658 2.12301 26.7729 0 24.5104 0C22.2479 0 20.955 2.12301 19.8238 4.02827C19.0158 5.38918 18.2077 6.75008 17.1842 7.18557C16.1607 7.62106 14.5446 7.24 13.0363 6.85895C10.8815 6.31459 8.67291 5.77023 7.21845 7.24C5.71012 8.76422 6.46428 11.0505 7.16458 13.2824C7.70327 14.9155 8.18809 16.5486 7.75714 17.6373C7.32619 18.6716 5.81785 19.4337 4.36339 20.1958C2.31637 21.2845 0 22.4821 0 24.7684C0 24.8229 -5.21762e-08 24.9317 0.053869 24.9862C0.053869 25.0406 0 25.1495 0 25.2039C0 27.4902 2.31637 28.7423 4.36339 29.7766C5.81785 30.5387 7.32619 31.3008 7.75714 32.3351C8.18809 33.3693 7.6494 35.0569 7.16458 36.6899C6.46428 38.9218 5.71012 41.2081 7.21845 42.7324C8.72678 44.2566 10.9354 43.6578 13.0363 43.1134C14.5446 42.7323 16.1607 42.3513 17.1842 42.7868C18.2077 43.2223 19.0158 44.5832 19.8238 45.9441C20.955 47.8493 22.2479 49.9724 24.5104 49.9724C26.7729 49.9724 28.1196 47.8493 29.2509 45.9985C30.0589 44.6921 30.9208 43.3311 31.9443 42.8957C33.0217 42.4602 34.53 42.7868 36.0384 43.1678C38.1393 43.6578 40.3479 44.2021 41.8562 42.6779C43.3646 41.1537 42.5565 38.8674 41.7485 36.6355C41.1559 35.0024 40.5634 33.3693 40.9943 32.3351C41.4253 31.3008 42.9875 30.5387 44.5497 29.7766C46.6506 28.6878 49.0747 27.4902 49.0747 25.2039C49.0747 25.095 49.0208 25.0406 49.0208 24.9862ZM43.7955 28.3068C42.0178 29.2322 40.1324 30.1576 39.486 31.7363C38.7857 33.3693 39.5399 35.329 40.1863 37.2343C40.8327 39.0307 41.4791 40.7726 40.6711 41.5348C39.8092 42.4057 38.1393 42.0247 36.3616 41.5892C34.5839 41.1537 32.8062 40.7727 31.244 41.4259C29.7357 42.0791 28.7661 43.6033 27.8503 45.1275C26.8268 46.7606 25.8571 48.3393 24.4565 48.3393C23.1098 48.3393 22.1402 46.7606 21.1167 45.0731C20.2009 43.4945 19.2312 41.9158 17.7229 41.2626C16.1607 40.6093 14.3292 41.0448 12.5515 41.5348C10.7738 41.9702 9.10387 42.4057 8.24196 41.5892C7.43393 40.7727 7.97261 39.0307 8.56517 37.2343C9.15773 35.329 9.80416 33.3693 9.10386 31.7907C8.45744 30.212 6.67976 29.2866 4.95595 28.4157C3.17827 27.4902 1.50833 26.6193 1.50833 25.2584C1.50833 25.2039 1.50833 25.0951 1.45446 25.0406C1.45446 24.9862 1.50833 24.8773 1.50833 24.8229C1.50833 23.5164 3.17827 22.6454 4.95595 21.6656C6.67976 20.7946 8.45744 19.8692 9.10386 18.2905C9.75029 16.6575 9.15773 14.6978 8.56517 12.8469C7.97261 10.9961 7.43393 9.25414 8.24196 8.49203C9.10387 7.62106 10.7738 8.05655 12.5515 8.54647C14.3292 8.98196 16.1607 9.47188 17.7229 8.81865C19.2312 8.16542 20.2009 6.58677 21.1167 5.00812C22.1402 3.3206 23.0559 1.74196 24.4565 1.74196C25.8571 1.74196 26.8268 3.3206 27.8503 4.95369C28.8199 6.4779 29.7896 8.00211 31.244 8.65534C32.8062 9.30858 34.5839 8.87309 36.3616 8.49203C38.1393 8.05655 39.8092 7.67549 40.6711 8.54647C41.4791 9.30858 40.8327 11.0505 40.1863 12.8469C39.486 14.7522 38.7857 16.7119 39.486 18.345C40.1324 19.9236 42.0178 20.849 43.7955 21.7744C45.6809 22.6999 47.4047 23.6253 47.4047 24.9317C47.4047 24.9862 47.4047 25.095 47.4586 25.1495C47.4586 25.2039 47.4047 25.3128 47.4047 25.3672C47.4586 26.456 45.6809 27.3814 43.7955 28.3068Z'
                      fill='#00A3FF'
                    />
                  </svg>
                </div>
                <div className='testimonial__title'>
                  <p className='text-highlight--color text-highlight--bold'>
                    ВЫГОДНО
                  </p>
                </div>
                <div className='testimonial__text-container'>
                  <p>
                    От
                    <span className='text-highlight--crossed price-regular'>
                      35 000 р.
                    </span>
                    <span className='text-highlight--color price-discount'>
                      16 700 р.
                    </span>
                    за семестр и дополнительные скидки при оплате за год!
                  </p>
                </div>
              </div>
              <div className='testimonials__testimonial'>
                <div className='testimonial__icon'>
                  <svg
                    className='icon__checked-list'
                    width='47'
                    height='45'
                    viewBox='0 0 47 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__inner_counter'
                      d='M5.12329 33.9942C5.12329 36.9082 7.46946 39.2797 10.3537 39.2797C13.238 39.2797 15.5842 36.9082 15.5842 33.9942C15.5842 31.0801 13.238 28.7087 10.3537 28.7087C7.46946 28.7087 5.12329 31.0795 5.12329 33.9942ZM13.865 33.9942C13.865 35.9504 12.2896 37.5423 10.3537 37.5423C8.4179 37.5423 6.84251 35.9504 6.84251 33.9942C6.84251 32.038 8.4179 30.446 10.3537 30.446C12.2896 30.446 13.865 32.038 13.865 33.9942Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__counter'
                      d='M46.3841 14.2559C46.0299 13.9368 45.4872 13.9675 45.1703 14.3254L32.6848 28.4573L26.2572 21.9621C25.9213 21.6227 25.3775 21.6227 25.0417 21.9621C24.7058 22.3014 24.7058 22.851 25.0417 23.1904L32.1128 30.3354C32.2744 30.4987 32.4928 30.5896 32.7209 30.5896C32.7289 30.5896 32.7369 30.5896 32.7449 30.589C32.981 30.5821 33.2045 30.4778 33.3621 30.2995L46.4534 15.4819C46.7692 15.1246 46.7383 14.575 46.3841 14.2559Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__counter'
                      d='M33.0171 32.7618C32.542 32.7618 32.1575 33.151 32.1575 33.6305V42.2748H1.71922V1.73732H32.1575V19.9369C32.1575 20.4164 32.542 20.8056 33.0171 20.8056C33.4922 20.8056 33.8767 20.4164 33.8767 19.9369V0.868661C33.8767 0.38916 33.4922 0 33.0171 0H0.859612C0.384533 0 0 0.38916 0 0.868661V43.1435C0 43.623 0.384533 44.0121 0.859612 44.0121H33.0171C33.4922 44.0121 33.8767 43.623 33.8767 43.1435V33.6305C33.8767 33.151 33.4922 32.7618 33.0171 32.7618Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M22.9689 11.7125C23.444 11.7125 23.8285 11.3233 23.8285 10.8438C23.8285 10.3643 23.444 9.9751 22.9689 9.9751H5.69872C5.22364 9.9751 4.83911 10.3643 4.83911 10.8438C4.83911 11.3233 5.22364 11.7125 5.69872 11.7125H22.9689Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M24.04 18.5714C24.04 18.0919 23.6555 17.7027 23.1804 17.7027H5.91479C5.43971 17.7027 5.05518 18.0919 5.05518 18.5714C5.05518 19.0509 5.43971 19.4401 5.91479 19.4401H23.1804C23.6555 19.4401 24.04 19.0509 24.04 18.5714Z'
                      fill='#FF6600'
                    />
                  </svg>
                </div>
                <div className='testimonial__title'>
                  <p className='text-highlight--color text-highlight--bold'>
                    ГОС. ДИПЛОМЫ
                  </p>
                </div>
                <div className='testimonial__text-container'>
                  <p>
                    Сотрудничаем только с теми вузами, которые выдают дипломы
                    гос. образца
                  </p>
                </div>
              </div>
              <div className='testimonials__testimonial'>
                <div className='testimonial__icon'>
                  <svg
                    className='icon__certificate'
                    width='38'
                    height='49'
                    viewBox='0 0 38 49'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__counter'
                      d='M0 0V48.0254H37.8814V0H0ZM36.1616 46.2881H1.71865V1.73732H36.1616V46.2881Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M24.4165 30.6909C25.1958 29.5825 25.6589 28.2326 25.6589 26.7727C25.6589 23.0288 22.6451 19.9827 18.9407 19.9827C15.2364 19.9827 12.222 23.0288 12.222 26.7727C12.222 28.2332 12.6856 29.5837 13.4656 30.6921L9.08785 37.0229C8.88499 37.3165 8.88097 37.7056 9.07754 38.0033C9.2741 38.3004 9.63113 38.4446 9.97727 38.3687L13.3229 37.6217L13.9303 40.7813C14.0002 41.1426 14.2874 41.4206 14.6473 41.4745C14.6897 41.4808 14.7321 41.4843 14.7745 41.4843C15.0885 41.4843 15.3831 41.31 15.5332 41.0233L18.9402 34.542L22.3488 41.0233C22.4995 41.31 22.7935 41.4843 23.1075 41.4843C23.1494 41.4843 23.1918 41.4814 23.2348 41.4745C23.5947 41.42 23.8823 41.1426 23.9517 40.7813L24.5603 37.6217L27.9013 38.3681C28.2475 38.4446 28.6045 38.3004 28.8016 38.0027C28.9982 37.7051 28.9942 37.3159 28.7919 37.0223L24.4165 30.6909ZM18.9402 21.72C21.6966 21.72 23.9391 23.9866 23.9391 26.7727C23.9391 29.557 21.6966 31.8219 18.9402 31.8219C16.1837 31.8219 13.9407 29.557 13.9407 26.7727C13.9412 23.9872 16.1837 21.72 18.9402 21.72ZM15.155 38.0404L14.8432 36.416C14.7991 36.1861 14.6644 35.984 14.4713 35.8554C14.2776 35.7268 14.0409 35.6834 13.8146 35.7332L11.7607 36.1919L14.6604 31.9985C15.4914 32.6941 16.4897 33.1921 17.5848 33.4197L15.155 38.0404ZM24.0709 35.7338C23.8451 35.684 23.6078 35.7274 23.4141 35.8554C23.2204 35.984 23.0863 36.1861 23.0422 36.416L22.7287 38.0427L20.2978 33.4203C21.3929 33.1927 22.3918 32.6941 23.2222 31.9985L26.1202 36.1924L24.0709 35.7338Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M8.70971 12.8191H28.9071C29.3822 12.8191 29.7668 12.4305 29.7668 11.9505C29.7668 11.4704 29.3822 11.0818 28.9071 11.0818H8.70971C8.23463 11.0818 7.8501 11.4704 7.8501 11.9505C7.8501 12.4305 8.23463 12.8191 8.70971 12.8191Z'
                      fill='#FF6600'
                    />
                  </svg>
                </div>
                <div className='testimonial__title'>
                  <p className='text-highlight--color text-highlight--bold'>
                    АККРЕДИТАЦИЯ
                  </p>
                </div>
                <div className='testimonial__text-container'>
                  <p>
                    Все программы наших вузов-партнеров аккредитованы и
                    сертифицированы
                  </p>
                </div>
              </div>
              <div className='testimonials__testimonial'>
                <div className='testimonial__icon'>
                  <svg
                    className='icon__graduand-hat'
                    width='49'
                    height='53'
                    viewBox='0 0 49 53'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__counter'
                      d='M48.4248 15.9978L24.9287 0.130299C24.6422 -0.043433 24.2411 -0.043433 23.9545 0.130299L0.401152 15.9978C0.171922 16.1715 0 16.4032 0 16.6927C0 16.9823 0.114615 17.2718 0.401152 17.3877L3.95421 19.8199V32.5023C3.95421 32.7919 4.12614 33.0814 4.35537 33.2552L24.0691 46.0534C24.1837 46.1693 24.3557 46.1693 24.5276 46.1693C24.6995 46.1693 24.8714 46.1113 24.9861 45.9955C31.1753 41.7101 37.3072 37.4827 43.4964 33.1973C43.7256 33.0235 43.8975 32.7919 43.8975 32.5023V20.4569L48.3675 17.4456C48.5967 17.2718 48.7686 17.0402 48.7686 16.7507C48.826 16.4611 48.7113 16.1715 48.4248 15.9978ZM42.2356 32.097L39.6568 33.8922L37.0779 35.6874L24.5849 44.2582L5.73075 32.097V21.036L23.9545 33.3131C24.1264 33.4289 24.2411 33.4868 24.413 33.4868C24.5849 33.4868 24.7568 33.4289 24.8714 33.3131L35.3014 26.3059C37.5937 24.7423 39.886 23.2366 42.1783 21.6731V32.097H42.2356ZM42.8087 19.1829C42.6941 19.2408 42.5794 19.2987 42.4648 19.4145C36.4475 23.4683 30.4303 27.522 24.413 31.5758L2.46422 16.7507L24.413 1.92553L46.419 16.7507L42.8087 19.1829Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M41.2614 51.3813L37.078 44.0266V24.6844C37.078 24.3949 36.9634 24.1053 36.6768 23.9895L24.9288 15.9978C24.5276 15.7083 24.0119 15.8241 23.7253 16.2295C23.4388 16.6348 23.5534 17.156 23.9546 17.4456L35.3587 25.1477V44.0266L31.1753 51.3813C31.0034 51.6709 31.0034 51.9604 31.1753 52.25C31.3472 52.5395 31.6338 52.7133 31.9203 52.7133H40.5737C40.8603 52.7133 41.1468 52.5395 41.3187 52.25C41.4333 52.0183 41.4333 51.6709 41.2614 51.3813ZM33.353 50.9759L36.1611 46.0535L38.9691 50.9759H33.353Z'
                      fill='#FF6600'
                    />
                  </svg>
                </div>
                <div className='testimonial__title'>
                  <p className='text-highlight--color text-highlight--bold'>
                    ПРЕСТИЖНОЕ ОБРАЗОВАНИЕ
                  </p>
                </div>
                <div className='testimonial__text-container'>
                  <p>Дипломы наших вузов-партнеров котируются по всему миру</p>
                </div>
              </div>
              <div className='testimonials__testimonial'>
                <div className='testimonial__icon'>
                  <svg
                    className='icon__calendar'
                    width='47'
                    height='52'
                    viewBox='0 0 47 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__inner_counter'
                      d='M12.9132 21.4079H7.31884C6.84376 21.4079 6.45923 21.7965 6.45923 22.2766V27.9297C6.45923 28.4092 6.84376 28.7984 7.31884 28.7984H12.9132C13.3883 28.7984 13.7728 28.4092 13.7728 27.9297V22.2766C13.7728 21.7971 13.3883 21.4079 12.9132 21.4079ZM12.0536 27.0611H8.17845V23.1452H12.0536V27.0611Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M25.9608 21.4079H20.3664C19.8914 21.4079 19.5068 21.7965 19.5068 22.2766V27.9297C19.5068 28.4092 19.8914 28.7984 20.3664 28.7984H25.9608C26.4353 28.7984 26.8204 28.4092 26.8204 27.9297V22.2766C26.8204 21.7971 26.4353 21.4079 25.9608 21.4079ZM25.1012 27.0611H21.2261V23.1452H25.1012V27.0611Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M38.6063 21.4079H33.012C32.5375 21.4079 32.1523 21.7965 32.1523 22.2766V27.9297C32.1523 28.4092 32.5375 28.7984 33.012 28.7984H38.6063C39.0808 28.7984 39.4659 28.4092 39.4659 27.9297V22.2766C39.4659 21.7971 39.0808 21.4079 38.6063 21.4079ZM37.7467 27.0611H33.8716V23.1452H37.7467V27.0611Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__counter'
                      d='M12.9132 34.2849H7.31884C6.84376 34.2849 6.45923 34.6741 6.45923 35.1536V40.8068C6.45923 41.2863 6.84376 41.6755 7.31884 41.6755H12.9132C13.3883 41.6755 13.7728 41.2863 13.7728 40.8068V35.1536C13.7728 34.6741 13.3883 34.2849 12.9132 34.2849ZM12.0536 39.9382H8.17845V36.0222H12.0536V39.9382Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__inner_counter'
                      d='M25.9608 34.2849H20.3664C19.8914 34.2849 19.5068 34.6741 19.5068 35.1536V40.8068C19.5068 41.2863 19.8914 41.6755 20.3664 41.6755H25.9608C26.4353 41.6755 26.8204 41.2863 26.8204 40.8068V35.1536C26.8204 34.6741 26.4353 34.2849 25.9608 34.2849ZM25.1012 39.9382H21.2261V36.0222H25.1012V39.9382Z'
                      fill='#FF6600'
                    />
                    <path
                      className='icon_path__counter'
                      d='M38.6063 34.2849H33.012C32.5375 34.2849 32.1523 34.6741 32.1523 35.1536V40.8068C32.1523 41.2863 32.5375 41.6755 33.012 41.6755H38.6063C39.0808 41.6755 39.4659 41.2863 39.4659 40.8068V35.1536C39.4659 34.6741 39.0808 34.2849 38.6063 34.2849ZM37.7467 39.9382H33.8716V36.0222H37.7467V39.9382Z'
                      fill='#00A3FF'
                    />
                    <path
                      className='icon_path__counter'
                      d='M45.4144 4.58653H39.737C39.7295 4.58653 39.7232 4.58826 39.7158 4.58884V3.43179C39.7158 1.53927 38.1926 0 36.3197 0C34.4469 0 32.9237 1.53985 32.9237 3.43179V4.58653H26.5265V3.43179C26.5265 1.53927 25.0032 0 23.1304 0C21.2576 0 19.7344 1.53985 19.7344 3.43179V4.58653H13.3366V3.43179C13.3366 1.53927 11.8134 0 9.94055 0C8.06774 0 6.54451 1.53985 6.54451 3.43179V4.58711C6.54165 4.58711 6.53878 4.58653 6.53592 4.58653H0.859612C0.384533 4.58653 0 4.97511 0 5.45519V50.4784C0 50.9579 0.384533 51.3471 0.859612 51.3471H45.4144C45.8889 51.3471 46.274 50.9579 46.274 50.4784V5.45519C46.274 4.97511 45.8889 4.58653 45.4144 4.58653ZM34.6429 3.43179C34.6429 2.49711 35.3948 1.73732 36.3197 1.73732C37.2447 1.73732 37.9966 2.49711 37.9966 3.43179V8.22506C37.9966 9.15916 37.2447 9.91953 36.3197 9.91953C35.3948 9.91953 34.6429 9.15974 34.6429 8.22506V3.43179ZM23.1304 1.73732C24.0548 1.73732 24.8073 2.49711 24.8073 3.43179V8.22506C24.8073 9.15916 24.0554 9.91953 23.1304 9.91953C22.2055 9.91953 21.4536 9.15974 21.4536 8.22506V5.53626C21.4559 5.50905 21.4616 5.48299 21.4616 5.45461C21.4616 5.42623 21.4559 5.40017 21.4536 5.37296V3.43179C21.4536 2.49711 22.2055 1.73732 23.1304 1.73732ZM8.26373 3.43179C8.26373 2.49711 9.01561 1.73732 9.94055 1.73732C10.8649 1.73732 11.6174 2.49711 11.6174 3.43179V8.22506C11.6174 9.15916 10.8655 9.91953 9.94055 9.91953C9.01561 9.91953 8.26373 9.15974 8.26373 8.22506V3.43179ZM44.5548 49.6098H1.71922V6.32385H6.53592C6.53878 6.32385 6.54165 6.32327 6.54451 6.32327V8.22564C6.54451 10.1182 8.06832 11.6574 9.94055 11.6574C11.8128 11.6574 13.3366 10.1182 13.3366 8.22564V6.32443H19.7344V8.22564C19.7344 10.1182 21.2582 11.6574 23.1304 11.6574C25.0027 11.6574 26.5265 10.1182 26.5265 8.22564V6.32443H32.9237V8.22564C32.9237 10.1182 34.4469 11.6574 36.3197 11.6574C38.1926 11.6574 39.7158 10.1182 39.7158 8.22564V6.32153C39.7232 6.32153 39.7295 6.32385 39.737 6.32385H44.5548V49.6098Z'
                      fill='#00A3FF'
                    />
                  </svg>
                </div>
                <div className='testimonial__title'>
                  <p className='text-highlight--color text-highlight--bold'>
                    ЕЖЕМЕСЯЧНОЕ ЗАЧИСЛЕНИЕ
                  </p>
                </div>
                <div className='testimonial__text-container'>
                  <p>
                    Можете начать учиться уже в следующем месяце, зачисляем
                    круглый год!
                    {/*  <span
                    className="inserted-text-1"
                  ></span>  */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  <section className="section-sm">
        <div className="section-sm__blocks">
          <div className="blocks__sm-block sm-block--teal">
            <div className="sm-block__icon">
              <a className="icon__link" href="#">
                <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.9995 1.13313C28.8798 1.76749 28.759 2.41114 28.6365 3.05369C27.8243 7.31497 27.0109 11.5768 26.1986 15.8381C25.6843 18.5361 25.1727 21.2347 24.6556 23.9328C24.4588 24.9589 23.6252 25.3004 22.7583 24.7136C20.5495 23.2176 18.339 21.7232 16.1378 20.2163C15.9241 20.0698 15.7972 20.0846 15.5972 20.231C14.481 21.0495 13.3539 21.8527 12.2284 22.6586C11.4129 23.2427 10.5913 22.9537 10.3361 21.9909C9.737 19.7322 9.13737 17.474 8.54813 15.2125C8.49784 15.0201 8.40491 14.9294 8.22672 14.8622C6.10861 14.059 3.99269 13.2493 1.87677 12.4401C1.19187 12.1784 0.889599 11.691 1.0339 11.0801C1.13557 10.6485 1.43839 10.4103 1.83141 10.254C3.87791 9.44206 5.92277 8.6263 7.96872 7.81327C14.4203 5.24907 20.873 2.69089 27.3186 0.113575C28.1856 -0.232835 28.8317 0.27312 28.9525 0.824972C28.9738 0.921683 28.9831 1.02167 28.9995 1.13313ZM26.1216 4.39671C26.1035 4.38797 26.086 4.37922 26.068 4.37048C22.028 8.25475 17.988 12.139 13.9229 16.0473C16.8735 18.0466 19.7984 20.0289 22.7567 22.0336C23.8843 16.1233 25.0032 10.26 26.1216 4.39671ZM22.9523 4.29508C22.9403 4.28251 22.9277 4.2694 22.9157 4.25683C17.0129 6.60357 11.1101 8.95031 5.1597 11.3156C5.3133 11.3774 5.41333 11.4189 5.51445 11.4577C6.88206 11.9811 8.2464 12.5133 9.61893 13.0236C10.106 13.2045 10.4066 13.5099 10.5236 14.0202C10.6498 14.5694 10.8073 15.1108 10.9527 15.6556C10.9794 15.7556 11.0133 15.8539 11.0303 15.9086C11.2107 15.6834 11.367 15.4376 11.5709 15.2403C15.2364 11.7074 18.908 8.18099 22.5779 4.65297C22.7036 4.53331 22.8283 4.41419 22.9523 4.29508ZM11.2926 16.9369C11.5676 17.9761 11.8332 18.9798 12.1082 20.0185C12.7259 19.5737 13.3085 19.1546 13.912 18.7203C13.0194 18.1127 12.1721 17.5357 11.2926 16.9369Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="blocks__sm-block sm-block--salat">
            <div className="sm-block__icon">
              <a className="icon__link" href="#">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 27.999C0.334887 27.07 0.657706 26.1741 0.980956 25.2781C1.39342 24.1343 1.80244 22.9892 2.22396 21.8488C2.29249 21.6639 2.28258 21.5292 2.1744 21.359C1.27705 19.9437 0.647362 18.4173 0.326267 16.7729C0.082752 15.5261 0.036204 14.2699 0.169814 13.0026C0.40514 10.7754 1.14344 8.73218 2.41446 6.88884C4.24966 4.22804 6.72791 2.43187 9.84361 1.52006C11.2228 1.11648 12.6356 0.949215 14.07 1.0114C16.8344 1.13106 19.345 1.99484 21.5608 3.64861C24.0726 5.52327 25.7488 7.97563 26.5574 10.9993C26.9341 12.4077 27.0789 13.8432 26.9578 15.3014C26.591 19.7099 24.5343 23.1376 20.866 25.6028C19.1993 26.7226 17.3391 27.3706 15.3436 27.6507C12.8391 28.0024 10.4694 27.5701 8.19978 26.5026C7.91532 26.3688 7.64034 26.2139 7.35286 26.0861C7.25934 26.0445 7.13176 26.027 7.03521 26.0535C4.75091 26.6849 2.46834 27.3239 0.18533 27.9608C0.138351 27.9741 0.089648 27.981 0 27.999ZM3.31525 24.9187C3.34973 24.926 3.36439 24.9342 3.37602 24.9307C4.61386 24.585 5.85255 24.2411 7.08866 23.8894C7.22313 23.8512 7.32442 23.8572 7.44639 23.9327C8.93549 24.8604 10.5448 25.4432 12.299 25.638C13.8097 25.8056 15.2915 25.6817 16.7431 25.2532C19.3454 24.4855 21.4203 22.9844 22.9585 20.7551C24.055 19.1665 24.6778 17.4047 24.876 15.4953C24.9911 14.3892 24.9282 13.2874 24.7118 12.1941C24.3274 10.2504 23.499 8.51645 22.1944 7.02394C20.1221 4.65392 17.5055 3.33896 14.3497 3.09664C12.6352 2.96497 10.9758 3.21544 9.3833 3.8429C6.92574 4.81175 5.02374 6.44366 3.69022 8.71632C2.81443 10.2093 2.33042 11.8249 2.19939 13.5507C2.11319 14.6847 2.20327 15.8015 2.45411 16.9076C2.814 18.494 3.5105 19.9248 4.48499 21.2247C4.56903 21.3367 4.57895 21.4306 4.53326 21.5554C4.2725 22.2626 4.01692 22.9716 3.76048 23.6801C3.61092 24.0914 3.46395 24.5036 3.31525 24.9187Z" fill="white"/>
                <path d="M8.88894 7.18166C8.92471 7.18166 8.96092 7.18166 8.99669 7.18166C9.61474 7.18252 9.78369 7.30132 10.0026 7.87173C10.3621 8.80756 10.7103 9.7481 11.0926 10.6749C11.2879 11.1484 11.0763 11.5104 10.8422 11.8668C10.647 12.164 10.4078 12.4338 10.1772 12.707C9.9423 12.9858 9.9117 13.1474 10.0845 13.4622C10.9741 15.083 12.152 16.4396 13.7644 17.3865C14.176 17.6284 14.6118 17.8309 15.0441 18.0354C15.3255 18.1688 15.5031 18.1225 15.6862 17.8849C16.0698 17.387 16.4495 16.8856 16.8219 16.3791C17.0275 16.099 17.196 16.0227 17.5201 16.1664C17.9973 16.3778 18.4658 16.6098 18.9304 16.8474C19.4584 17.1176 19.9773 17.4058 20.5022 17.682C20.71 17.7914 20.791 17.957 20.791 18.1877C20.7906 18.7289 20.6932 19.2535 20.5009 19.7548C20.2747 20.3446 19.7863 20.7052 19.2765 21.0333C18.2455 21.6964 17.1284 21.75 15.9953 21.3996C14.4299 20.9158 12.9524 20.2438 11.6629 19.208C10.6698 18.4107 9.75999 17.5276 9.00057 16.5103C8.35234 15.6418 7.72955 14.748 7.17528 13.8182C6.59602 12.8464 6.26286 11.7776 6.30423 10.6243C6.34776 9.40628 6.81928 8.37396 7.68903 7.52091C8.02435 7.19238 8.44673 7.14692 8.88894 7.18166Z" fill="white"/>
                </svg>
              </a>  
            </div>
          </div>
          <div className="blocks__sm-block sm-block--purple">
            <div className="sm-block__icon">
              <a className="icon__link" href="#">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4857 0C15.6768 0.0365899 17.8433 0.260902 19.9869 0.669754C21.5415 0.96645 22.8169 1.83108 23.939 2.90412C25.1104 4.02409 26.0754 5.30315 26.4182 6.93537C26.9547 9.4895 27.1626 12.0691 26.8634 14.6709C26.746 15.6939 26.615 16.7192 26.4135 17.7278C26.0944 19.3218 25.1572 20.5762 24.0247 21.6779C22.9327 22.7406 21.7018 23.6347 20.1765 23.9377C18.925 24.1867 17.6513 24.372 16.3791 24.4603C14.8927 24.5637 13.3968 24.524 11.9056 24.5677C11.7207 24.5733 11.4937 24.6679 11.3636 24.7992C10.4787 25.6932 9.62001 26.6128 8.74308 27.5148C8.132 28.144 7.26618 28.1718 6.82256 27.5267C6.62892 27.2451 6.55511 26.8411 6.53527 26.4863C6.49321 25.7465 6.51146 25.002 6.52734 24.2599C6.53369 23.9775 6.4321 23.859 6.16863 23.7476C3.53545 22.6324 1.55779 20.8252 0.69514 18.0484C0.315797 16.8266 0.20866 15.5054 0.0896198 14.2191C-0.134177 11.7915 0.0800966 9.37973 0.566576 6.99344C0.796721 5.86552 1.34828 4.88952 2.06173 4.0042C3.20372 2.58754 4.5592 1.42939 6.31465 0.877362C7.20031 0.59896 8.13915 0.453396 9.06608 0.350786C10.5342 0.189313 12.0119 0.112951 13.4857 0ZM7.58521 24.1223C7.58521 24.8907 7.57727 25.6598 7.59315 26.4274C7.59553 26.5531 7.67648 26.713 7.77409 26.7862C7.8225 26.8228 8.00344 26.7154 8.10185 26.6422C8.21771 26.5571 8.30898 26.4386 8.41056 26.3344C9.6835 25.0243 10.9501 23.7086 12.2357 22.4113C12.3849 22.261 12.6357 22.1305 12.8405 22.1297C14.8641 22.1234 16.8743 21.9849 18.8726 21.6517C21.2789 21.2508 22.87 19.8007 23.8144 17.6475C24.1652 16.8472 24.2271 15.9047 24.3414 15.017C24.6366 12.7158 24.5302 10.4225 24.1192 8.13966C23.6732 5.66745 22.1359 4.05591 19.8813 3.28354C18.4862 2.80549 16.9315 2.7339 15.4379 2.62413C13.169 2.45709 10.9041 2.60822 8.64388 2.9081C7.19 3.10059 5.92182 3.61444 4.86315 4.63498C3.96558 5.50121 3.21245 6.44777 2.96564 7.72364C2.54821 9.88006 2.36885 12.0524 2.59027 14.239C2.70058 15.3272 2.78629 16.4511 3.13309 17.4741C3.78305 19.3942 5.20361 20.6637 7.07334 21.4035C7.45109 21.553 7.62172 21.7097 7.59632 22.1353C7.55585 22.7955 7.58442 23.4597 7.58521 24.1223Z" fill="white"/>
                <path d="M14.6126 15.8235C14.7579 15.7448 14.9563 15.6724 15.1086 15.5443C15.2785 15.4019 15.4047 15.2078 15.5531 15.0384C15.9991 14.5301 16.5173 14.41 17.0688 14.7743C17.8402 15.2834 18.5926 15.8251 19.3243 16.3914C19.8433 16.7931 19.8909 17.202 19.5751 17.7914C19.1362 18.6099 18.545 19.2677 17.6228 19.539C17.4585 19.5875 17.2506 19.5954 17.0919 19.539C13.4818 18.2488 10.4272 16.2093 8.42094 12.8494C7.74638 11.7191 7.23768 10.4893 6.64882 9.30733C6.35122 8.70916 6.45519 8.15634 6.81072 7.6226C7.2107 7.02285 7.744 6.57979 8.38999 6.27355C8.84711 6.0564 9.21851 6.0914 9.52961 6.48991C10.1304 7.25989 10.7168 8.04657 11.2366 8.87302C11.6231 9.48789 11.4541 10.0455 10.8787 10.5116C10.7859 10.5864 10.6899 10.6572 10.6002 10.7351C10.2113 11.07 10.1304 11.3078 10.3065 11.7851C10.9883 13.6281 12.1707 14.9963 14.0492 15.6883C14.2063 15.7448 14.3777 15.7678 14.6126 15.8235Z" fill="white"/>
                <path d="M20.1925 12.2473C20.1996 12.3531 20.2123 12.4589 20.2139 12.5639C20.2171 12.8153 20.1337 13.0205 19.8552 13.0491C19.5798 13.077 19.4378 12.8988 19.4036 12.6506C19.3489 12.2585 19.306 11.8631 19.2798 11.4678C19.1322 9.25015 17.3569 7.07305 15.1959 6.51466C14.5999 6.36114 13.9793 6.30148 13.3691 6.20364C13.1159 6.16308 12.8889 6.09626 12.912 5.77491C12.9358 5.44003 13.1945 5.37003 13.4524 5.37719C15.9586 5.44162 18.3918 6.7167 19.5457 9.28515C19.7552 9.75127 19.902 10.2532 20.0147 10.7527C20.125 11.2403 20.1552 11.7454 20.2203 12.2434C20.2115 12.2449 20.202 12.2465 20.1925 12.2473Z" fill="white"/>
                <path d="M18.4989 11.8306C18.4949 11.8504 18.506 11.9817 18.4457 12.0509C18.3354 12.1774 18.1807 12.3516 18.0497 12.3468C17.9235 12.342 17.7331 12.1551 17.6974 12.0159C17.6164 11.6993 17.637 11.3581 17.5744 11.0343C17.249 9.35597 15.9951 8.20816 14.292 8.0093C14.1484 7.9926 14.0063 7.96078 13.8627 7.93772C13.5968 7.89476 13.4532 7.73806 13.4928 7.47159C13.5341 7.20035 13.7389 7.11444 13.992 7.13115C14.961 7.19399 15.8538 7.47875 16.6474 8.05226C17.9045 8.95985 18.414 10.2461 18.4989 11.8306Z" fill="white"/>
                <path d="M16.7736 11.4422C16.7038 11.5099 16.5721 11.7445 16.3983 11.7819C16.134 11.8384 15.984 11.6125 15.9403 11.3476C15.9213 11.2307 15.9007 11.1145 15.8769 10.9984C15.7269 10.2451 15.3785 9.90229 14.6301 9.77502C14.5523 9.7615 14.4468 9.78934 14.3992 9.74638C14.2476 9.61036 14.0151 9.45844 14.0032 9.29855C13.9833 9.03288 14.2174 8.91436 14.4968 8.91754C15.757 8.92709 16.7728 9.97785 16.7736 11.4422Z" fill="white"/>
                </svg>
              </a>  
            </div>
          </div>
          <div className="blocks__sm-block sm-block--ocean">
            <div className="sm-block__icon">
              <a className="icon__link" href="#">
                <svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0303 5.01816C19.0303 6.29134 19.0331 7.56453 19.029 8.8384C19.0276 9.21765 19.0944 9.57189 19.4539 9.75804C19.803 9.93932 20.1612 9.80805 20.4091 9.56703C21.0179 8.97523 21.6501 8.3897 22.1563 7.71317C23.7155 5.62593 24.9696 3.35532 25.9661 0.94162C26.263 0.22272 26.5515 0.0303189 27.3304 0.0296243C28.5129 0.0289298 29.6947 0.0240676 30.8772 0.0344865C31.0907 0.0365702 31.3166 0.0664376 31.5149 0.142148C32.0507 0.345662 32.2835 0.936758 32.092 1.51882C31.6492 2.8698 30.953 4.09783 30.2126 5.29183C29.3552 6.67337 28.4193 8.00559 27.5233 9.36282C27.3587 9.61287 27.2065 9.87334 27.0715 10.1408C26.8449 10.5881 26.8842 11.0062 27.2375 11.3841C27.7175 11.8981 28.1982 12.4114 28.6631 12.9393C29.7216 14.1409 30.8056 15.3231 31.8076 16.572C32.2628 17.1394 32.579 17.8299 32.9006 18.4925C33.2256 19.1635 32.7236 19.9789 31.9839 19.9893C30.4116 20.0116 28.8394 19.9984 27.2671 19.997C26.8911 19.9963 26.617 19.815 26.4131 19.5017C25.1962 17.6347 23.6136 16.1107 21.9118 14.7098C21.5661 14.425 21.1329 14.2208 20.7087 14.0666C20.0944 13.8436 19.6598 14.177 19.6502 14.8369C19.6364 15.7628 19.6095 16.6907 19.655 17.6145C19.7094 18.7085 18.9498 19.9581 17.2948 19.9838C14.8417 20.022 12.662 19.2065 10.6324 17.8979C8.81085 16.7234 7.29642 15.2133 6.04713 13.4442C4.07954 10.6575 2.32338 7.74234 1.05757 4.55695C0.644352 3.51993 0.351658 2.4336 0.0445023 1.35837C-0.155907 0.655449 0.338573 0.0199001 1.0679 0.011565C2.3647 -0.00371592 3.66151 0.00045161 4.95831 0.0101759C5.51684 0.0143434 5.80058 0.271341 6.03198 0.862436C6.70896 2.59266 7.34807 4.33955 8.09461 6.03921C8.80327 7.65274 9.75504 9.1336 10.9382 10.4422C11.2392 10.7749 11.6317 11.0479 12.0277 11.2618C12.3969 11.4612 12.7082 11.2959 12.8287 10.8854C12.9244 10.5568 12.9926 10.2054 12.9919 9.865C12.9878 8.09589 12.9829 6.32607 12.9258 4.55765C12.8955 3.61231 12.6655 2.70796 12.0449 1.94461C11.7915 1.63274 11.5608 1.29447 11.3686 0.94162C11.275 0.770056 11.2061 0.483885 11.2867 0.343579C11.3776 0.184518 11.6476 0.127561 11.8432 0.0330973C11.8803 0.015038 11.9341 0.0303189 11.9795 0.0303189C13.8961 0.0303189 15.8128 0.0296243 17.7294 0.0303189C18.6288 0.0310135 19.029 0.433875 19.0296 1.33754C19.031 2.56418 19.0303 3.79082 19.0303 5.01816Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>  */}
        {/*  <section className="section-cards">
        <div className="container">
          <div className="section-cards__title">
            <div className="title__title-wrapper">
              <div className="title-wrapper__heading">
                <h2 className="heading__h2 h1 text-highlight--bold">
                  Программы обучения
                </h2>
              </div>
              <div className="title-wrapper__underline">

              </div>
            </div>
          </div>
          <div className="section-cards__cards">
            <div className="cards__card">
              <div className="card__img card__img--construction"></div>
              <div className="card__card-content">
                <div className="card-content__card-content-row">
                  <div className="card-content-row__content-row-tag">
                    <p>Бакалавриат</p>
                  </div>
                  <div className="card-content-row__content-row-time">
                    <div className="content-row-time__icon">
                      <svg className="icon__clock" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 1.43628C4.15546 1.43628 1.43622 4.15733 1.43622 7.50007C1.43622 10.8428 4.15727 13.5639 7.50001 13.5639C10.8446 13.5639 13.5638 10.8428 13.5638 7.50007C13.5638 4.15733 10.8428 1.43628 7.50001 1.43628ZM7.50001 12.9133C4.51406 12.9133 2.08675 10.4842 2.08675 7.50007C2.08675 4.51593 4.51587 2.08681 7.50001 2.08681C10.4842 2.08681 12.9133 4.51593 12.9133 7.50007C12.9133 10.4842 10.486 12.9133 7.50001 12.9133Z" fill="#00A3FF"/>
                        <path d="M9.0317 6.51428L7.72343 7.82254V3.17153C7.72343 2.99133 7.57747 2.84717 7.39907 2.84717C7.22067 2.84717 7.07471 2.99313 7.07471 3.17153V8.60822C7.07471 8.62985 7.07651 8.65147 7.08192 8.67129C7.08372 8.6803 7.08732 8.68931 7.08912 8.69832C7.09273 8.70913 7.09453 8.72175 7.09994 8.73256C7.10534 8.74337 7.11075 8.75238 7.11615 8.7632C7.12156 8.7722 7.12516 8.78121 7.13057 8.78842C7.154 8.82446 7.18463 8.8551 7.22067 8.87852C7.22788 8.88393 7.23509 8.88573 7.24229 8.88934C7.25311 8.89654 7.26572 8.90195 7.27653 8.90736C7.28554 8.91096 7.29636 8.91276 7.30717 8.91637C7.31798 8.91997 7.32699 8.92357 7.3378 8.92538C7.35943 8.92898 7.37925 8.93258 7.40087 8.93258C7.4225 8.93258 7.44412 8.93078 7.46394 8.92538C7.47476 8.92357 7.48377 8.91997 7.49458 8.91637C7.50539 8.91276 7.5144 8.91096 7.52521 8.90736C7.53783 8.90195 7.54864 8.89474 7.56125 8.88934C7.56846 8.88573 7.57567 8.88213 7.58107 8.87852C7.59909 8.86591 7.61531 8.8533 7.63153 8.83708L9.49121 6.97379C9.61735 6.84765 9.61735 6.64042 9.49121 6.51428C9.36507 6.38813 9.15964 6.38813 9.0317 6.51428Z" fill="#00A3FF"/>
                        <path d="M7.5 0C3.36437 0 0 3.36437 0 7.5C0 11.6356 3.36437 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36437 11.6356 0 7.5 0ZM7.5 14.3513C3.72297 14.3513 0.650529 11.2788 0.650529 7.5018C0.650529 3.72477 3.72297 0.650529 7.5 0.650529C11.277 0.650529 14.3495 3.72297 14.3495 7.5C14.3495 11.277 11.277 14.3513 7.5 14.3513Z" fill="#00A3FF"/>
                      </svg>
                    </div>
                    <div className="content-row-time__text">
                      <p>4,5 года</p>
                    </div>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__title">
                    <p className="text-highlight--bold">
                      Промышленное и гражданское строительство
                    </p>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__btn">
                    <a href="#" className="btn btn--secondary">Узнать подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards__card">
              <div className="card__img card__img--electrical"></div>
              <div className="card__card-content">
                <div className="card-content__card-content-row">
                  <div className="card-content-row__content-row-tag">
                    <p>Бакалавриат</p>
                  </div>
                  <div className="card-content-row__content-row-time">
                    <div className="content-row-time__icon">
                      <svg className="icon__clock" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 1.43628C4.15546 1.43628 1.43622 4.15733 1.43622 7.50007C1.43622 10.8428 4.15727 13.5639 7.50001 13.5639C10.8446 13.5639 13.5638 10.8428 13.5638 7.50007C13.5638 4.15733 10.8428 1.43628 7.50001 1.43628ZM7.50001 12.9133C4.51406 12.9133 2.08675 10.4842 2.08675 7.50007C2.08675 4.51593 4.51587 2.08681 7.50001 2.08681C10.4842 2.08681 12.9133 4.51593 12.9133 7.50007C12.9133 10.4842 10.486 12.9133 7.50001 12.9133Z" fill="#00A3FF"/>
                        <path d="M9.0317 6.51428L7.72343 7.82254V3.17153C7.72343 2.99133 7.57747 2.84717 7.39907 2.84717C7.22067 2.84717 7.07471 2.99313 7.07471 3.17153V8.60822C7.07471 8.62985 7.07651 8.65147 7.08192 8.67129C7.08372 8.6803 7.08732 8.68931 7.08912 8.69832C7.09273 8.70913 7.09453 8.72175 7.09994 8.73256C7.10534 8.74337 7.11075 8.75238 7.11615 8.7632C7.12156 8.7722 7.12516 8.78121 7.13057 8.78842C7.154 8.82446 7.18463 8.8551 7.22067 8.87852C7.22788 8.88393 7.23509 8.88573 7.24229 8.88934C7.25311 8.89654 7.26572 8.90195 7.27653 8.90736C7.28554 8.91096 7.29636 8.91276 7.30717 8.91637C7.31798 8.91997 7.32699 8.92357 7.3378 8.92538C7.35943 8.92898 7.37925 8.93258 7.40087 8.93258C7.4225 8.93258 7.44412 8.93078 7.46394 8.92538C7.47476 8.92357 7.48377 8.91997 7.49458 8.91637C7.50539 8.91276 7.5144 8.91096 7.52521 8.90736C7.53783 8.90195 7.54864 8.89474 7.56125 8.88934C7.56846 8.88573 7.57567 8.88213 7.58107 8.87852C7.59909 8.86591 7.61531 8.8533 7.63153 8.83708L9.49121 6.97379C9.61735 6.84765 9.61735 6.64042 9.49121 6.51428C9.36507 6.38813 9.15964 6.38813 9.0317 6.51428Z" fill="#00A3FF"/>
                        <path d="M7.5 0C3.36437 0 0 3.36437 0 7.5C0 11.6356 3.36437 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36437 11.6356 0 7.5 0ZM7.5 14.3513C3.72297 14.3513 0.650529 11.2788 0.650529 7.5018C0.650529 3.72477 3.72297 0.650529 7.5 0.650529C11.277 0.650529 14.3495 3.72297 14.3495 7.5C14.3495 11.277 11.277 14.3513 7.5 14.3513Z" fill="#00A3FF"/>
                      </svg>
                    </div>
                    <div className="content-row-time__text">
                      <p>4,5 года</p>
                    </div>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__title">
                    <p className="text-highlight--bold">
                      Электрооборудование и электрохозяйство предприятий
                    </p>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__btn">
                    <a href="#" className="btn btn--secondary">Узнать подробнее</a>
                  </div>
                </div>

                <div className="card-content__card-content-tag"></div>
                <div className="card-content__card-content-time">
                  <div className="card-content-time__time-icon"></div>
                  <div className="card-content-time__time-text"></div>
                </div>
              </div>
            </div>
            <div className="cards__card">
              <div className="card__img card__img--heat_engineering"></div>
              <div className="card__card-content">
                <div className="card-content__card-content-row">
                  <div className="card-content-row__content-row-tag">
                    <p>Бакалавриат</p>
                  </div>
                  <div className="card-content-row__content-row-time">
                    <div className="content-row-time__icon">
                      <svg className="icon__clock" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 1.43628C4.15546 1.43628 1.43622 4.15733 1.43622 7.50007C1.43622 10.8428 4.15727 13.5639 7.50001 13.5639C10.8446 13.5639 13.5638 10.8428 13.5638 7.50007C13.5638 4.15733 10.8428 1.43628 7.50001 1.43628ZM7.50001 12.9133C4.51406 12.9133 2.08675 10.4842 2.08675 7.50007C2.08675 4.51593 4.51587 2.08681 7.50001 2.08681C10.4842 2.08681 12.9133 4.51593 12.9133 7.50007C12.9133 10.4842 10.486 12.9133 7.50001 12.9133Z" fill="#00A3FF"/>
                        <path d="M9.0317 6.51428L7.72343 7.82254V3.17153C7.72343 2.99133 7.57747 2.84717 7.39907 2.84717C7.22067 2.84717 7.07471 2.99313 7.07471 3.17153V8.60822C7.07471 8.62985 7.07651 8.65147 7.08192 8.67129C7.08372 8.6803 7.08732 8.68931 7.08912 8.69832C7.09273 8.70913 7.09453 8.72175 7.09994 8.73256C7.10534 8.74337 7.11075 8.75238 7.11615 8.7632C7.12156 8.7722 7.12516 8.78121 7.13057 8.78842C7.154 8.82446 7.18463 8.8551 7.22067 8.87852C7.22788 8.88393 7.23509 8.88573 7.24229 8.88934C7.25311 8.89654 7.26572 8.90195 7.27653 8.90736C7.28554 8.91096 7.29636 8.91276 7.30717 8.91637C7.31798 8.91997 7.32699 8.92357 7.3378 8.92538C7.35943 8.92898 7.37925 8.93258 7.40087 8.93258C7.4225 8.93258 7.44412 8.93078 7.46394 8.92538C7.47476 8.92357 7.48377 8.91997 7.49458 8.91637C7.50539 8.91276 7.5144 8.91096 7.52521 8.90736C7.53783 8.90195 7.54864 8.89474 7.56125 8.88934C7.56846 8.88573 7.57567 8.88213 7.58107 8.87852C7.59909 8.86591 7.61531 8.8533 7.63153 8.83708L9.49121 6.97379C9.61735 6.84765 9.61735 6.64042 9.49121 6.51428C9.36507 6.38813 9.15964 6.38813 9.0317 6.51428Z" fill="#00A3FF"/>
                        <path d="M7.5 0C3.36437 0 0 3.36437 0 7.5C0 11.6356 3.36437 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36437 11.6356 0 7.5 0ZM7.5 14.3513C3.72297 14.3513 0.650529 11.2788 0.650529 7.5018C0.650529 3.72477 3.72297 0.650529 7.5 0.650529C11.277 0.650529 14.3495 3.72297 14.3495 7.5C14.3495 11.277 11.277 14.3513 7.5 14.3513Z" fill="#00A3FF"/>
                      </svg>
                    </div>
                    <div className="content-row-time__text">
                      <p>4,5 года</p>
                    </div>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__title">
                    <p className="text-highlight--bold">
                      Теплоэнергия и теплотехника
                    </p>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__btn">
                    <a href="#" className="btn btn--secondary">Узнать подробнее</a>
                  </div>
                </div>

                <div className="card-content__card-content-tag"></div>
                <div className="card-content__card-content-time">
                  <div className="card-content-time__time-icon"></div>
                  <div className="card-content-time__time-text"></div>
                </div>
              </div>
            </div>
            <div className="cards__card">
              <div className="card__img card__img--business_managment"></div>
              <div className="card__card-content">
                <div className="card-content__card-content-row">
                  <div className="card-content-row__content-row-tag">
                    <p>Бакалавриат</p>
                  </div>
                  <div className="card-content-row__content-row-time">
                    <div className="content-row-time__icon">
                      <svg className="icon__clock" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 1.43628C4.15546 1.43628 1.43622 4.15733 1.43622 7.50007C1.43622 10.8428 4.15727 13.5639 7.50001 13.5639C10.8446 13.5639 13.5638 10.8428 13.5638 7.50007C13.5638 4.15733 10.8428 1.43628 7.50001 1.43628ZM7.50001 12.9133C4.51406 12.9133 2.08675 10.4842 2.08675 7.50007C2.08675 4.51593 4.51587 2.08681 7.50001 2.08681C10.4842 2.08681 12.9133 4.51593 12.9133 7.50007C12.9133 10.4842 10.486 12.9133 7.50001 12.9133Z" fill="#00A3FF"/>
                        <path d="M9.0317 6.51428L7.72343 7.82254V3.17153C7.72343 2.99133 7.57747 2.84717 7.39907 2.84717C7.22067 2.84717 7.07471 2.99313 7.07471 3.17153V8.60822C7.07471 8.62985 7.07651 8.65147 7.08192 8.67129C7.08372 8.6803 7.08732 8.68931 7.08912 8.69832C7.09273 8.70913 7.09453 8.72175 7.09994 8.73256C7.10534 8.74337 7.11075 8.75238 7.11615 8.7632C7.12156 8.7722 7.12516 8.78121 7.13057 8.78842C7.154 8.82446 7.18463 8.8551 7.22067 8.87852C7.22788 8.88393 7.23509 8.88573 7.24229 8.88934C7.25311 8.89654 7.26572 8.90195 7.27653 8.90736C7.28554 8.91096 7.29636 8.91276 7.30717 8.91637C7.31798 8.91997 7.32699 8.92357 7.3378 8.92538C7.35943 8.92898 7.37925 8.93258 7.40087 8.93258C7.4225 8.93258 7.44412 8.93078 7.46394 8.92538C7.47476 8.92357 7.48377 8.91997 7.49458 8.91637C7.50539 8.91276 7.5144 8.91096 7.52521 8.90736C7.53783 8.90195 7.54864 8.89474 7.56125 8.88934C7.56846 8.88573 7.57567 8.88213 7.58107 8.87852C7.59909 8.86591 7.61531 8.8533 7.63153 8.83708L9.49121 6.97379C9.61735 6.84765 9.61735 6.64042 9.49121 6.51428C9.36507 6.38813 9.15964 6.38813 9.0317 6.51428Z" fill="#00A3FF"/>
                        <path d="M7.5 0C3.36437 0 0 3.36437 0 7.5C0 11.6356 3.36437 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36437 11.6356 0 7.5 0ZM7.5 14.3513C3.72297 14.3513 0.650529 11.2788 0.650529 7.5018C0.650529 3.72477 3.72297 0.650529 7.5 0.650529C11.277 0.650529 14.3495 3.72297 14.3495 7.5C14.3495 11.277 11.277 14.3513 7.5 14.3513Z" fill="#00A3FF"/>
                      </svg>
                    </div>
                    <div className="content-row-time__text">
                      <p>4,5 года</p>
                    </div>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__title">
                    <p className="text-highlight--bold">
                      Управление малым бизнесом
                    </p>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__btn">
                    <a href="#" className="btn btn--secondary">Узнать подробнее</a>
                  </div>
                </div>

                <div className="card-content__card-content-tag"></div>
                <div className="card-content__card-content-time">
                  <div className="card-content-time__time-icon"></div>
                  <div className="card-content-time__time-text"></div>
                </div>
              </div>
            </div>
            <div className="cards__card">
              <div className="card__img card__img--mining"></div>
              <div className="card__card-content">
                <div className="card-content__card-content-row">
                  <div className="card-content-row__content-row-tag">
                    <p>Бакалавриат</p>
                  </div>
                  <div className="card-content-row__content-row-time">
                    <div className="content-row-time__icon">
                      <svg className="icon__clock" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 1.43628C4.15546 1.43628 1.43622 4.15733 1.43622 7.50007C1.43622 10.8428 4.15727 13.5639 7.50001 13.5639C10.8446 13.5639 13.5638 10.8428 13.5638 7.50007C13.5638 4.15733 10.8428 1.43628 7.50001 1.43628ZM7.50001 12.9133C4.51406 12.9133 2.08675 10.4842 2.08675 7.50007C2.08675 4.51593 4.51587 2.08681 7.50001 2.08681C10.4842 2.08681 12.9133 4.51593 12.9133 7.50007C12.9133 10.4842 10.486 12.9133 7.50001 12.9133Z" fill="#00A3FF"/>
                        <path d="M9.0317 6.51428L7.72343 7.82254V3.17153C7.72343 2.99133 7.57747 2.84717 7.39907 2.84717C7.22067 2.84717 7.07471 2.99313 7.07471 3.17153V8.60822C7.07471 8.62985 7.07651 8.65147 7.08192 8.67129C7.08372 8.6803 7.08732 8.68931 7.08912 8.69832C7.09273 8.70913 7.09453 8.72175 7.09994 8.73256C7.10534 8.74337 7.11075 8.75238 7.11615 8.7632C7.12156 8.7722 7.12516 8.78121 7.13057 8.78842C7.154 8.82446 7.18463 8.8551 7.22067 8.87852C7.22788 8.88393 7.23509 8.88573 7.24229 8.88934C7.25311 8.89654 7.26572 8.90195 7.27653 8.90736C7.28554 8.91096 7.29636 8.91276 7.30717 8.91637C7.31798 8.91997 7.32699 8.92357 7.3378 8.92538C7.35943 8.92898 7.37925 8.93258 7.40087 8.93258C7.4225 8.93258 7.44412 8.93078 7.46394 8.92538C7.47476 8.92357 7.48377 8.91997 7.49458 8.91637C7.50539 8.91276 7.5144 8.91096 7.52521 8.90736C7.53783 8.90195 7.54864 8.89474 7.56125 8.88934C7.56846 8.88573 7.57567 8.88213 7.58107 8.87852C7.59909 8.86591 7.61531 8.8533 7.63153 8.83708L9.49121 6.97379C9.61735 6.84765 9.61735 6.64042 9.49121 6.51428C9.36507 6.38813 9.15964 6.38813 9.0317 6.51428Z" fill="#00A3FF"/>
                        <path d="M7.5 0C3.36437 0 0 3.36437 0 7.5C0 11.6356 3.36437 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36437 11.6356 0 7.5 0ZM7.5 14.3513C3.72297 14.3513 0.650529 11.2788 0.650529 7.5018C0.650529 3.72477 3.72297 0.650529 7.5 0.650529C11.277 0.650529 14.3495 3.72297 14.3495 7.5C14.3495 11.277 11.277 14.3513 7.5 14.3513Z" fill="#00A3FF"/>
                      </svg>
                    </div>
                    <div className="content-row-time__text">
                      <p>4,5 года</p>
                    </div>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__title">
                    <p className="text-highlight--bold">
                      Экономика горной промышленности
                    </p>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__btn">
                    <a href="#" className="btn btn--secondary">Узнать подробнее</a>
                  </div>
                </div>

                <div className="card-content__card-content-tag"></div>
                <div className="card-content__card-content-time">
                  <div className="card-content-time__time-icon"></div>
                  <div className="card-content-time__time-text"></div>
                </div>
              </div>
            </div>
            <div className="cards__card">
              <div className="card__img card__img--economic_security"></div>
              <div className="card__card-content">
                <div className="card-content__card-content-row">
                  <div className="card-content-row__content-row-tag">
                    <p>Бакалавриат</p>
                  </div>
                  <div className="card-content-row__content-row-time">
                    <div className="content-row-time__icon">
                      <svg className="icon__clock" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 1.43628C4.15546 1.43628 1.43622 4.15733 1.43622 7.50007C1.43622 10.8428 4.15727 13.5639 7.50001 13.5639C10.8446 13.5639 13.5638 10.8428 13.5638 7.50007C13.5638 4.15733 10.8428 1.43628 7.50001 1.43628ZM7.50001 12.9133C4.51406 12.9133 2.08675 10.4842 2.08675 7.50007C2.08675 4.51593 4.51587 2.08681 7.50001 2.08681C10.4842 2.08681 12.9133 4.51593 12.9133 7.50007C12.9133 10.4842 10.486 12.9133 7.50001 12.9133Z" fill="#00A3FF"/>
                        <path d="M9.0317 6.51428L7.72343 7.82254V3.17153C7.72343 2.99133 7.57747 2.84717 7.39907 2.84717C7.22067 2.84717 7.07471 2.99313 7.07471 3.17153V8.60822C7.07471 8.62985 7.07651 8.65147 7.08192 8.67129C7.08372 8.6803 7.08732 8.68931 7.08912 8.69832C7.09273 8.70913 7.09453 8.72175 7.09994 8.73256C7.10534 8.74337 7.11075 8.75238 7.11615 8.7632C7.12156 8.7722 7.12516 8.78121 7.13057 8.78842C7.154 8.82446 7.18463 8.8551 7.22067 8.87852C7.22788 8.88393 7.23509 8.88573 7.24229 8.88934C7.25311 8.89654 7.26572 8.90195 7.27653 8.90736C7.28554 8.91096 7.29636 8.91276 7.30717 8.91637C7.31798 8.91997 7.32699 8.92357 7.3378 8.92538C7.35943 8.92898 7.37925 8.93258 7.40087 8.93258C7.4225 8.93258 7.44412 8.93078 7.46394 8.92538C7.47476 8.92357 7.48377 8.91997 7.49458 8.91637C7.50539 8.91276 7.5144 8.91096 7.52521 8.90736C7.53783 8.90195 7.54864 8.89474 7.56125 8.88934C7.56846 8.88573 7.57567 8.88213 7.58107 8.87852C7.59909 8.86591 7.61531 8.8533 7.63153 8.83708L9.49121 6.97379C9.61735 6.84765 9.61735 6.64042 9.49121 6.51428C9.36507 6.38813 9.15964 6.38813 9.0317 6.51428Z" fill="#00A3FF"/>
                        <path d="M7.5 0C3.36437 0 0 3.36437 0 7.5C0 11.6356 3.36437 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36437 11.6356 0 7.5 0ZM7.5 14.3513C3.72297 14.3513 0.650529 11.2788 0.650529 7.5018C0.650529 3.72477 3.72297 0.650529 7.5 0.650529C11.277 0.650529 14.3495 3.72297 14.3495 7.5C14.3495 11.277 11.277 14.3513 7.5 14.3513Z" fill="#00A3FF"/>
                      </svg>
                    </div>
                    <div className="content-row-time__text">
                      <p>4,5 года</p>
                    </div>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__title">
                    <p className="text-highlight--bold">
                      Экономическая безопасность
                    </p>
                  </div>
                </div>
                <div className="card-content__card-content-row">
                  <div className="card-content-row__btn">
                    <a href="#" className="btn btn--secondary">Узнать подробнее</a>
                  </div>
                </div>

                <div className="card-content__card-content-tag"></div>
                <div className="card-content__card-content-time">
                  <div className="card-content-time__time-icon"></div>
                  <div className="card-content-time__time-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

        {/*  <hr className="hr-between-sections" />  */}
        <section id='about' className='section-about'>
          <div className='container container--about'>
            {/*  <div className="section__title">
            <h2
              className="h1 h1--padding-bottom text-highlight--color text-highlight--bold-mobile"
            >
              О проекте
            </h2>
          </div>  */}
            <div className='section__content'>
              <div className='content__info h1--padding-bottom'>
                <p>
                  <span className='text-highlight--color text-highlight--fw-700'>
                    ROSUCHEBA
                  </span>
                  <span className='text-highlight--fw-300'>
                    — мы помогаем абитуриентам
                    <span id='customizedCountryText'></span> поступать и
                    обучаться в вузах Москвы дистанционно из своего города по
                    нашим
                    <span className='text-highlight--fw-700'>
                      партнерским скидкам
                    </span>
                    , а университетам — находить своих студентов!
                  </span>
                </p>
                <div className='info__check-marks desktop-only'>
                  <p className='check-marks__mark'>
                    <svg
                      className='mark__check-icon'
                      width='37'
                      height='37'
                      viewBox='0 0 37 37'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <rect width='37' height='37' rx='18.5' fill='white' />
                      <path
                        d='M15 19L17.5 21.5L23 16'
                        stroke='#2874FF'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    Бесплатно подберём ВУЗ
                  </p>
                  <p className='check-marks__mark'>
                    <svg
                      className='mark__check-icon'
                      width='37'
                      height='37'
                      viewBox='0 0 37 37'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <rect width='37' height='37' rx='18.5' fill='white' />
                      <path
                        d='M15 19L17.5 21.5L23 16'
                        stroke='#2874FF'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    Сделаем скидку
                  </p>
                </div>
              </div>
              <div className='content__showing-off-numbers'>
                <div className='showing-off-numbers__showing-off-number'>
                  <div className='showing-off-number__number'>
                    <p
                      className='
                      text-highlight--font-60
                      text-highlight--color
                      text-highlight--bold
                    '>
                      6
                    </p>
                  </div>
                  <div className='showing-off-number__line'></div>
                  <div className='showing-off-number__description'>
                    <p className='text-highlight--fw-700'>Вузов-партнеров</p>
                  </div>
                </div>
                <div className='showing-off-numbers__showing-off-number'>
                  <div className='showing-off-number__number'>
                    <p
                      className='
                      text-highlight--font-60
                      text-highlight--color
                      text-highlight--bold
                    '>
                      50+
                    </p>
                  </div>
                  <div className='showing-off-number__line'></div>
                  <div className='showing-off-number__description'>
                    <p className='text-highlight--fw-700'>Специальностей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='how-it-works' className='section-how-it-works'>
          <div className='container'>
            <div className='section__title'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
              '>
                Как работает ROSUCHEBA
              </h2>
            </div>
            <div className='section__content'>
              <div className='content__steps'>
                <div className='steps__step'>
                  <div className='step__icon'>
                    <svg
                      className='desktop-only'
                      width='56'
                      height='121'
                      viewBox='0 0 56 121'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        opacity='0.1'
                        d='M55.6709 121H27.6143V31.6836L0.0556641 39.7354V18.4854L53.0977 0.140625H55.6709V121Z'
                        fill='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='step__title'>
                    <div className='icon-retractable-arrows mobile-only'>
                      <img
                        className='icon-retractable-arrows__up'
                        src='img/svgs/arrow-up.svg'
                        alt='Стрелка вверх'
                      />
                      <img
                        className='icon-retractable-arrows__down'
                        src='img/svgs/arrow-down.svg'
                        alt='Стрелка вниз'
                      />
                    </div>
                    <p
                      className='
                      title__mobile-style
                      text-highlight--color text-highlight--bold
                    '>
                      <span
                        className='
                        mobile-style__number
                        mobile-only
                        text-highlight--color text-highlight--bold
                      '>
                        1
                      </span>
                      ЗАЯВКА
                    </p>
                  </div>
                  <div className='step__text'>
                    <p>Вы заинтересованы в обучении и оставляете заявку</p>
                  </div>
                </div>

                <div className='steps__step'>
                  <div className='step__icon'>
                    <svg
                      className='desktop-only'
                      width='87'
                      height='123'
                      viewBox='0 0 87 123'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        opacity='0.1'
                        d='M87 123H2.66406V104.738L41.5117 63.8984C51.0853 52.9967 55.8721 44.3363 55.8721 37.917C55.8721 32.7152 54.7376 28.7585 52.4688 26.0469C50.1999 23.3353 46.9072 21.9795 42.5908 21.9795C38.3298 21.9795 34.8711 23.8057 32.2148 27.458C29.5586 31.055 28.2305 35.5651 28.2305 40.9883H0.173828C0.173828 33.5729 2.02767 26.7386 5.73535 20.4854C9.44303 14.1768 14.5895 9.25163 21.1748 5.70996C27.7601 2.16829 35.1201 0.397461 43.2549 0.397461C56.3148 0.397461 66.3587 3.41341 73.3867 9.44531C80.4701 15.4772 84.0117 24.1377 84.0117 35.4268C84.0117 40.1859 83.1263 44.8343 81.3555 49.3721C79.5846 53.8545 76.8177 58.5859 73.0547 63.5664C69.347 68.4915 63.3428 75.1045 55.042 83.4053L39.4365 101.418H87V123Z'
                        fill='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='step__title'>
                    <div className='icon-retractable-arrows mobile-only'>
                      <img
                        className='icon-retractable-arrows__up'
                        src='img/svgs/arrow-up.svg'
                        alt='Стрелка вверх'
                      />
                      <img
                        className='icon-retractable-arrows__down'
                        src='img/svgs/arrow-down.svg'
                        alt='Стрелка вниз'
                      />
                    </div>
                    <p
                      className='
                      title__mobile-style
                      text-highlight--color text-highlight--bold
                    '>
                      <span
                        className='
                        mobile-style__number
                        mobile-only
                        text-highlight--color text-highlight--bold
                      '>
                        2
                      </span>
                      СВЯЗЫВАЕМСЯ С ВАМИ
                    </p>
                  </div>
                  <div className='step__text'>
                    <p>
                      Наши менеджеры связываются с Вами, уточняют текущий
                      уровень образования и Ваши предпочтения
                    </p>
                  </div>
                </div>

                <div className='steps__step'>
                  <div className='step__icon'>
                    <svg
                      className='desktop-only'
                      width='88'
                      height='125'
                      viewBox='0 0 88 125'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        opacity='0.1'
                        d='M29.2305 50.8662H42.4287C52.8877 50.8662 58.1172 45.7474 58.1172 35.5098C58.1172 31.5254 56.8721 28.2881 54.3818 25.7979C51.8916 23.2523 48.3776 21.9795 43.8398 21.9795C40.1322 21.9795 36.8949 23.0586 34.1279 25.2168C31.4163 27.375 30.0605 30.0589 30.0605 33.2686H2.08691C2.08691 26.9046 3.85775 21.2324 7.39941 16.252C10.9411 11.2715 15.8385 7.39779 22.0918 4.63086C28.4004 1.80859 35.3177 0.397461 42.8438 0.397461C56.291 0.397461 66.8607 3.46875 74.5527 9.61133C82.2448 15.7539 86.0908 24.193 86.0908 34.9287C86.0908 40.1305 84.486 45.0557 81.2764 49.7041C78.1221 54.2972 73.5013 58.0326 67.4141 60.9102C73.8333 63.2344 78.8691 66.776 82.5215 71.5352C86.1738 76.2389 88 82.0771 88 89.0498C88 99.8408 83.8496 108.474 75.5488 114.948C67.248 121.423 56.3464 124.66 42.8438 124.66C34.9303 124.66 27.5703 123.166 20.7637 120.178C14.0124 117.134 8.89355 112.956 5.40723 107.644C1.9209 102.276 0.177734 96.1885 0.177734 89.3818H28.3174C28.3174 93.0895 29.8115 96.2992 32.7998 99.0107C35.7881 101.722 39.4681 103.078 43.8398 103.078C48.765 103.078 52.694 101.722 55.627 99.0107C58.5599 96.2438 60.0264 92.7298 60.0264 88.4688C60.0264 82.3815 58.5046 78.0651 55.4609 75.5195C52.4173 72.974 48.2116 71.7012 42.8438 71.7012H29.2305V50.8662Z'
                        fill='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='step__title'>
                    <div className='icon-retractable-arrows mobile-only'>
                      <img
                        className='icon-retractable-arrows__up'
                        src='img/svgs/arrow-up.svg'
                        alt='Стрелка вверх'
                      />
                      <img
                        className='icon-retractable-arrows__down'
                        src='img/svgs/arrow-down.svg'
                        alt='Стрелка вниз'
                      />
                    </div>
                    <p
                      className='
                      title__mobile-style
                      text-highlight--color text-highlight--bold
                    '>
                      <span
                        className='
                        mobile-style__number
                        mobile-only
                        text-highlight--color text-highlight--bold
                      '>
                        3
                      </span>
                      ПОДБИРАЕМ ВУЗ
                    </p>
                  </div>
                  <div className='step__text'>
                    <p>
                      На основе уровня образования и предпочтений подбирают Вам
                      ВУЗ из 6 наших вузов-партнеров
                    </p>
                  </div>
                </div>

                <div className='steps__step'>
                  <div className='step__icon'>
                    <svg
                      className='desktop-only'
                      width='89'
                      height='121'
                      viewBox='0 0 89 121'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        opacity='0.1'
                        d='M76.541 73.7686H88.8262V95.3506H76.541V121H48.5674V95.3506H1.83398L0.173828 78.251L48.5674 0.389648V0.140625H76.541V73.7686ZM26.8193 73.7686H48.5674V36.5811L46.8242 39.4033L26.8193 73.7686Z'
                        fill='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='step__title'>
                    <div className='icon-retractable-arrows mobile-only'>
                      <img
                        className='icon-retractable-arrows__up'
                        src='img/svgs/arrow-up.svg'
                        alt='Стрелка вверх'
                      />
                      <img
                        className='icon-retractable-arrows__down'
                        src='img/svgs/arrow-down.svg'
                        alt='Стрелка вниз'
                      />
                    </div>
                    <p
                      className='
                      title__mobile-style
                      text-highlight--color text-highlight--bold
                    '>
                      <span
                        className='
                        mobile-style__number
                        mobile-only
                        text-highlight--color text-highlight--bold
                      '>
                        4
                      </span>
                      ПОДБОР ПРОГРАММЫ
                    </p>
                  </div>
                  <div className='step__text'>
                    <p>
                      На основе уровня образования и предпочтений подбирают
                      <br />
                      направление обучения
                    </p>
                  </div>
                </div>

                <div className='steps__step'>
                  <div className='step__icon'>
                    <svg
                      className='desktop-only'
                      width='86'
                      height='123'
                      viewBox='0 0 86 123'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        opacity='0.1'
                        d='M3.32422 61.8984L10.7119 0.140625H81.3516V21.8887H33.4561L30.7168 45.8779C32.709 44.7158 35.3099 43.6921 38.5195 42.8066C41.7845 41.9212 44.9665 41.4785 48.0654 41.4785C60.0739 41.4785 69.2878 45.0479 75.707 52.1865C82.1816 59.2699 85.4189 69.2308 85.4189 82.0693C85.4189 89.8167 83.6758 96.8447 80.1895 103.153C76.7585 109.407 71.9163 114.221 65.6631 117.597C59.4098 120.972 52.0221 122.66 43.5 122.66C35.9186 122.66 28.8076 121.111 22.167 118.012C15.5264 114.857 10.3245 110.569 6.56152 105.146C2.7985 99.667 0.944661 93.4967 1 86.6348H29.0566C29.3333 91.0618 30.7445 94.5758 33.29 97.1768C35.8356 99.7777 39.1836 101.078 43.334 101.078C52.7415 101.078 57.4453 94.1055 57.4453 80.1602C57.4453 67.2663 51.6901 60.8193 40.1797 60.8193C33.6497 60.8193 28.7799 62.9222 25.5703 67.1279L3.32422 61.8984Z'
                        fill='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='step__title'>
                    <div className='icon-retractable-arrows mobile-only'>
                      <img
                        className='icon-retractable-arrows__up'
                        src='img/svgs/arrow-up.svg'
                        alt='Стрелка вверх'
                      />
                      <img
                        className='icon-retractable-arrows__down'
                        src='img/svgs/arrow-down.svg'
                        alt='Стрелка вниз'
                      />
                    </div>
                    <p
                      className='
                      title__mobile-style
                      text-highlight--color text-highlight--bold
                    '>
                      <span
                        className='
                        mobile-style__number
                        mobile-only
                        text-highlight--color text-highlight--bold
                      '>
                        5
                      </span>
                      ЗАЧИСЛЯЕМ
                    </p>
                  </div>
                  <div className='step__text'>
                    <p>
                      Вы подаете документы и уже в следующем месяце приступаете
                      к дистанционному обучению из своей страны / города. Да,
                      зачисление в наши вузы ведется ежемесячно!
                    </p>
                  </div>
                </div>

                <div className='steps__step'>
                  <div className='step__icon'>
                    <svg
                      className='desktop-only'
                      width='87'
                      height='125'
                      viewBox='0 0 87 125'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        opacity='0.1'
                        d='M68.2324 0.397461V22.3945H66.9873C56.5283 22.3945 47.9232 24.9124 41.1719 29.9482C34.4759 34.9287 30.3532 41.8737 28.8037 50.7832C35.1123 44.5853 43.0811 41.4863 52.71 41.4863C63.1689 41.4863 71.4974 45.3047 77.6953 52.9414C83.8932 60.5781 86.9922 70.5944 86.9922 82.9902C86.9922 90.6823 85.166 97.738 81.5137 104.157C77.9167 110.576 72.8532 115.612 66.3232 119.265C59.8486 122.862 52.6546 124.66 44.7412 124.66C36.1637 124.66 28.4993 122.723 21.748 118.85C14.9967 114.921 9.73958 109.331 5.97656 102.082C2.21354 94.8327 0.276693 86.4766 0.166016 77.0137V65.8076C0.166016 53.3564 2.82227 42.1781 8.13477 32.2725C13.5026 22.3115 21.1393 14.5088 31.0449 8.86426C40.9505 3.21973 51.9352 0.397461 63.999 0.397461H68.2324ZM42.998 62.9023C39.2904 62.9023 36.1914 63.7601 33.7012 65.4756C31.2109 67.1911 29.3571 69.2939 28.1396 71.7842V80.168C28.1396 95.4414 33.4245 103.078 43.9941 103.078C48.2552 103.078 51.7969 101.169 54.6191 97.3506C57.4967 93.5322 58.9355 88.7454 58.9355 82.9902C58.9355 77.069 57.4691 72.2546 54.5361 68.5469C51.6585 64.7839 47.8125 62.9023 42.998 62.9023Z'
                        fill='#2874FF'
                      />
                    </svg>
                  </div>
                  <div className='step__title'>
                    <div className='icon-retractable-arrows mobile-only'>
                      <img
                        className='icon-retractable-arrows__up'
                        src='img/svgs/arrow-up.svg'
                        alt='Стрелка вверх'
                      />
                      <img
                        className='icon-retractable-arrows__down'
                        src='img/svgs/arrow-down.svg'
                        alt='Стрелка вниз'
                      />
                    </div>
                    <p
                      className='
                      title__mobile-style
                      text-highlight--color text-highlight--bold
                    '>
                      <span
                        className='
                        mobile-style__number
                        mobile-only
                        text-highlight--color text-highlight--bold
                      '>
                        6
                      </span>
                      ПОЛУЧАЕТЕ ДИПЛОМ
                    </p>
                  </div>
                  <div className='step__text'>
                    <p>
                      Смотрите лекции, дистанционно закрываете сессии, общаетесь
                      с преподавателями и в итоге получаете диплом об
                      образовании гос. образца от аккредитованного ВУЗа
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='partners' className='section-partners'>
          <svg
            className='section__waves section__waves--top mobile-only'
            width='375'
            height='24'
            viewBox='0 0 375 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M375 24H0V1.28127C167.971 32.0204 243.803 -7.4018 375 1.28127V24Z'
              fill='#F9FBFF'
            />
          </svg>

          <svg
            className='section__waves section__waves--top desktop-only'
            width='1439'
            height='91'
            viewBox='0 0 1439 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M1440 91H0V4.85815C645.008 121.411 936.205 -28.0652 1440 4.85815V91Z'
              fill='#F9FBFF'
            />
          </svg>

          <div className='container'>
            <div className='section__title'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
              '>
                ВУЗы-партнеры
              </h2>
              <p className='title__p desktop-only'>
                6 наших вузов-партнеров, в котрых Вы можете получить образование
                дистанционно
              </p>
            </div>
            <div className='section__content'>
              <div className='content__img-wrapper'>
                <div className='img-wrapper__img'>
                  <svg
                    width='104'
                    height='29'
                    viewBox='0 0 104 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M24.7665 10.245H25.8014L26.8117 13.3575C26.9323 13.7207 27.0232 14.084 27.0682 14.2282H27.0829C27.1216 14.0922 27.2263 13.7207 27.348 13.3575L28.3888 10.245H29.4149L30.109 15.2885H29.0227L28.698 12.6833C28.6525 12.312 28.623 12.0475 28.6158 11.9491H28.6002C28.5771 12.0622 28.5024 12.3351 28.3965 12.6686L27.5446 15.2885H26.4949L25.6426 12.6756C25.5445 12.3576 25.4694 12.055 25.4382 11.9491H25.423C25.4162 12.0622 25.3937 12.3576 25.3562 12.691L25.0309 15.2885H24.073L24.7665 10.245Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M34.61 12.7745C34.61 11.8355 34.1723 11.0173 33.169 11.0173C32.158 11.0173 31.6818 11.8051 31.6818 12.7438C31.6818 13.691 32.1428 14.5158 33.1463 14.5158C34.1576 14.5158 34.61 13.7131 34.61 12.7745ZM30.5504 12.7745C30.5504 11.4038 31.4635 10.1538 33.1463 10.1538C34.8288 10.1538 35.7336 11.3884 35.7336 12.7438C35.7336 14.1146 34.8518 15.3792 33.169 15.3792C31.486 15.3792 30.5504 14.1373 30.5504 12.7745Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M36.2282 12.7591C36.2282 11.3884 37.1268 10.1538 38.8243 10.1538C39.4799 10.1538 39.941 10.2985 40.3332 10.5555L39.8577 11.3358C39.5787 11.1535 39.2686 11.0399 38.8092 11.0399C37.8664 11.0399 37.3596 11.7971 37.3596 12.7289C37.3596 13.691 37.8435 14.4855 38.8243 14.4855C39.3671 14.4855 39.6989 14.2962 39.9641 14.0998L40.4011 14.8492C40.1444 15.0838 39.5411 15.3791 38.8092 15.3791C37.096 15.3791 36.2282 14.1295 36.2282 12.7591Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M41.0394 10.245H42.096V12.3276H42.4509L43.9221 10.245H45.0619L43.3178 12.5849C43.4914 12.7438 43.6654 12.9943 43.8993 13.365C44.345 14.1072 44.5024 14.4179 44.8723 14.4179H44.9484L44.9415 15.2885H44.5024C43.9066 15.2885 43.6429 15.0232 43.16 14.213C42.7522 13.5465 42.594 13.1682 42.2847 13.1682H42.096V15.2885H41.0394V10.245Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M49.268 12.7745C49.268 11.8355 48.8318 11.0173 47.828 11.0173C46.8169 11.0173 46.3411 11.8051 46.3411 12.7438C46.3411 13.691 46.8013 14.5158 47.8055 14.5158C48.8165 14.5158 49.268 13.7131 49.268 12.7745ZM45.2092 12.7745C45.2092 11.4038 46.1217 10.1538 47.8055 10.1538C49.4874 10.1538 50.3931 11.3884 50.3931 12.7438C50.3931 14.1146 49.5104 15.3792 47.828 15.3792C46.1445 15.3792 45.2092 14.1373 45.2092 12.7745Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M52.7963 14.4705C53.4075 14.4705 53.7312 14.2812 53.7312 13.7964C53.7312 13.327 53.4599 13.0846 52.8414 13.0846H52.237V14.4705H52.7963ZM52.7288 12.32C53.3021 12.32 53.5507 12.1154 53.5507 11.6685C53.5507 11.2521 53.279 11.0628 52.7513 11.0628H52.237V12.32H52.7288ZM51.1888 10.245H52.8643C53.7918 10.245 54.5994 10.5481 54.5994 11.5018C54.5994 12.1534 54.2529 12.5167 53.7097 12.6601V12.6756C54.3052 12.7664 54.8107 13.1683 54.8107 13.8874C54.8107 14.9171 53.9889 15.2886 52.8414 15.2886H51.1888V10.245Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M55.275 12.7591C55.275 11.3884 56.1741 10.1538 57.8711 10.1538C58.5274 10.1538 58.9884 10.2985 59.3805 10.5555L58.9045 11.3358C58.6261 11.1535 58.3156 11.0399 57.8555 11.0399C56.9134 11.0399 56.4069 11.7971 56.4069 12.7289C56.4069 13.691 56.8908 14.4855 57.8711 14.4855C58.4149 14.4855 58.7463 14.2962 59.0109 14.0998L59.4486 14.8492C59.1918 15.0838 58.5885 15.3791 57.8555 15.3791C56.1435 15.3791 55.275 14.1295 55.275 12.7591Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M60.0867 10.245H61.1437V12.3276H61.4978L62.9695 10.245H64.1083L62.3651 12.5849C62.5401 12.7438 62.7127 12.9943 62.947 13.365C63.3923 14.1072 63.5501 14.4179 63.9206 14.4179H63.9957L63.9883 15.2885H63.5502C62.9538 15.2885 62.6902 15.0232 62.2073 14.213C61.7999 13.5465 61.6411 13.1682 61.3319 13.1682H61.1437V15.2885H60.0867V10.245Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M64.7465 10.245H65.7351V12.9411C65.7351 13.327 65.7126 13.6681 65.7053 13.7284H65.7212C65.7656 13.6453 65.954 13.3195 66.2485 12.8808L68.037 10.245H69.1084V15.2885H68.1203V12.373C68.1203 12.055 68.1427 11.7744 68.1427 11.7065H68.128C68.0746 11.8051 67.9158 12.0775 67.6438 12.4637L65.7212 15.2885H64.7465V10.245Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M71.1195 8.79883H71.9423C71.9648 9.10155 72.1149 9.29097 72.3947 9.29097C72.6662 9.29097 72.8177 9.10155 72.8471 8.79883H73.6615C73.5944 9.59405 73.0133 9.94204 72.3947 9.94204C71.7762 9.94204 71.1948 9.59405 71.1195 8.79883ZM70.2062 10.2449H71.1948V12.9411C71.1948 13.3269 71.172 13.668 71.1649 13.7284H71.1801C71.2244 13.6453 71.4129 13.3194 71.708 12.8807L73.4962 10.2449H74.5672V15.2885H73.5784V12.373C73.5784 12.055 73.6012 11.7744 73.6012 11.7065H73.5863C73.5339 11.805 73.375 12.0774 73.1037 12.4636L71.1801 15.2885H70.2062V10.2449Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M28.1469 20.5047C28.1469 19.5651 27.7102 18.7474 26.7061 18.7474C25.6949 18.7474 25.2197 19.5353 25.2197 20.4749C25.2197 21.4215 25.6802 22.2459 26.6835 22.2459C27.6946 22.2459 28.1469 21.4442 28.1469 20.5047ZM24.0879 20.5047C24.0879 19.1343 25.0016 17.8845 26.6835 17.8845C28.366 17.8845 29.2717 19.1185 29.2717 20.4749C29.2717 21.8449 28.3886 23.1094 26.7061 23.1094C25.0231 23.1094 24.0879 21.8678 24.0879 20.5047Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M30.8383 18.854H29.4497V17.9752H33.2903V18.854H31.909V23.0182H30.8383V18.854Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M33.8684 17.9752H34.9249V20.0578H35.2793L36.751 17.9752H37.89L36.1478 20.3155C36.3203 20.4749 36.4944 20.7236 36.7282 21.0956C37.1735 21.8366 37.3319 22.1481 37.7021 22.1481H37.7769L37.77 23.0183H37.3319C36.7363 23.0183 36.4716 22.7536 35.989 21.9434C35.5816 21.2772 35.4227 20.8983 35.1137 20.8983H34.9249V23.0183H33.8684V17.9752Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M40.0678 20.4136C40.7391 20.4136 41.0255 20.1412 41.0255 19.5802C41.0255 19.0725 40.747 18.7932 40.0903 18.7932H39.592V20.4136H40.0678ZM38.5282 17.9753H40.1734C41.2676 17.9753 42.0973 18.4825 42.0973 19.565C42.0973 20.6642 41.3048 21.2236 40.0594 21.2236H39.592V23.0183H38.5282V17.9753Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M47.271 17.9752H48.3349V23.0183H47.271V17.9752ZM44.4488 22.209C45.1202 22.209 45.4145 21.9278 45.4145 21.3758C45.4145 20.8606 45.1354 20.5879 44.4787 20.5879H43.9056V22.209H44.4488ZM42.8413 17.9752H43.9056V19.7702H44.5624C45.6488 19.7702 46.4781 20.2766 46.4781 21.3532C46.4781 22.4505 45.6864 23.0183 44.4415 23.0183H42.8413V17.9752Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M50.3003 18.854H48.9113V17.9752H52.7513V18.854H51.3719V23.0182H50.3003V18.854Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M57.7597 17.9752H58.8246V23.0183H57.7597V17.9752ZM54.938 22.209C55.6097 22.209 55.9042 21.9278 55.9042 21.3758C55.9042 20.8606 55.6244 20.5879 54.9681 20.5879H54.3953V22.209H54.938ZM53.3308 17.9752H54.3953V19.7702H55.051C56.1382 19.7702 56.9676 20.2766 56.9676 21.3532C56.9676 22.4505 56.1744 23.0183 54.9306 23.0183H53.3308V17.9752Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M60.8334 16.5287H61.6562C61.6787 16.8316 61.8302 17.0215 62.1096 17.0215C62.3807 17.0215 62.532 16.8316 62.5619 16.5287H63.3773C63.3093 17.3231 62.7283 17.6725 62.1096 17.6725C61.4909 17.6725 60.9096 17.3231 60.8334 16.5287ZM59.9208 17.9752H60.9096V20.6716C60.9096 21.0569 60.8868 21.3984 60.8797 21.4582H60.8944C60.9399 21.3759 61.1277 21.0495 61.4229 20.6107L63.2115 17.9752H64.2822V23.0183H63.2933V20.1029C63.2933 19.785 63.3161 19.5057 63.3161 19.4374H63.3014C63.2482 19.5353 63.0898 19.8079 62.8184 20.1946L60.8944 23.0183H59.9208V17.9752Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M67.5018 18.0179H68.4892V20.7134C68.4892 21.0996 68.4677 21.4407 68.4599 21.5004H68.4745C68.5201 21.4185 68.7088 21.0923 69.0029 20.6534L70.7912 18.0179H71.863V23.0605H70.8742V20.1457C70.8742 19.8277 70.8971 19.5481 70.8971 19.4797H70.8814C70.829 19.5779 70.67 19.8506 70.3996 20.2368L68.4745 23.0605H67.5018V18.0179Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M72.9603 18.0179H74.0251V20.002H76.273V18.0179H77.3373V23.0605H76.273V20.8802H74.0251V23.0605H72.9603V18.0179Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M78.1257 20.5313C78.1257 19.161 79.0236 17.9262 80.7212 17.9262C81.3776 17.9262 81.8377 18.07 82.2298 18.3281L81.7552 19.1079C81.4754 18.9254 81.1665 18.8128 80.7065 18.8128C79.7631 18.8128 79.2577 19.5696 79.2577 20.5013C79.2577 21.4636 79.7403 22.2582 80.7212 22.2582C81.2644 22.2582 81.5962 22.0692 81.8607 21.8724L82.2984 22.6222C82.0416 22.8563 81.4392 23.1517 80.7065 23.1517C78.9932 23.1517 78.1257 21.9019 78.1257 20.5313Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M83.8876 18.8957H82.499V18.0179H86.3394V18.8957H84.9598V23.0604H83.8876V18.8957Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M86.9176 18.0179H87.9063V20.7134C87.9063 21.0996 87.8833 21.4407 87.8769 21.5004H87.8921C87.9369 21.4185 88.1254 21.0923 88.4197 20.6534L90.2081 18.0179H91.2795V23.0605H90.2914V20.1457C90.2914 19.8277 90.3139 19.5481 90.3139 19.4797H90.2987C90.2458 19.5779 90.0879 19.8506 89.8152 20.2368L87.8921 23.0605H86.9176V18.0179Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M93.2452 18.8957H91.8568V18.0179H95.6972V18.8957H94.317V23.0604H93.2452V18.8957Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M96.1629 23.0148L96.306 22.2213C96.3661 22.2443 96.4727 22.2582 96.6005 22.2582C96.9852 22.2582 97.1886 22.0094 97.3705 21.6076L97.4453 21.4183L95.9209 18.0181H96.9476L97.9659 20.3577L98.9853 18.0181H100.011L98.3137 21.8039C97.9128 22.705 97.5059 23.0836 96.6685 23.0836C96.4264 23.0836 96.246 23.0453 96.1629 23.0148Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M101.548 18.8957H100.159V18.0179H104V18.8957H102.618V23.0604H101.548V18.8957Z'
                      fill='#00A3FF'
                    />
                    <path
                      d='M12.3237 18.5178V11.6944H11.1026L10.8087 8.79047C14.8677 9.42566 17.9711 12.9889 17.9711 17.149C17.9711 19.3237 17.1401 21.3878 15.6653 22.9507V17.4368L12.3237 18.5178ZM14.6377 26.8728H14.1591V19.5319L9.50096 21.1453L4.84234 19.5319V26.8728H4.36282V18.8482L7.70331 19.9304V12.7218H8.82399L9.49978 6.08463L10.1745 12.7218H11.2955V19.9304L14.6377 18.8482V26.8728ZM13.1307 27.8023L10.0134 27.322V22.0549L13.1307 20.9753V27.8023ZM8.9847 27.3229L5.86983 27.8023V20.9753L8.9847 22.0535V27.3229ZM1.02763 17.149C1.02763 12.9735 4.12373 9.42316 8.19062 8.79047L7.89667 11.6944H6.6737V18.5178L3.33454 17.4368V22.9492C1.85858 21.3894 1.02763 19.3348 1.02763 17.149ZM19 17.149C19 12.3953 15.3827 8.33113 10.7003 7.73646L10.1542 2.36256L11.0201 1.50515L9.49978 0L7.98073 1.50488L8.84407 2.36136L8.29768 7.73646C3.60853 8.32968 0 12.3755 0 17.149C0 19.9485 1.21253 22.5566 3.33454 24.3639V27.9003H4.84234V29L9.50096 28.2841L14.1591 29V27.9003H15.6653V24.3653C17.7836 22.5573 19 19.9344 19 17.149Z'
                      fill='#FF6600'
                    />
                  </svg>
                </div>
              </div>
              <div className='content__img-wrapper'>
                <div className='img-wrapper__img'>
                  <span className='img__promo desktop-only'>
                    -30% с ROSUCHEBA
                  </span>
                  {/*  <div className="img__sinergy"></div>  */}
                  <svg
                    width='96'
                    height='17'
                    viewBox='0 0 96 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M0 16.8801H17.3829V0.109192H0V16.8801ZM15.211 14.7826H2.173V2.20463H15.2099V14.7826H15.211ZM10.7958 14.0636L5.02417 8.49519L10.7969 2.92467V5.88968L8.09627 8.49413L10.7969 11.0996L10.7958 14.0636Z'
                      fill='#FF3A4F'
                    />
                    <path
                      d='M60.1295 9.73481C60.2428 9.13248 60.2428 8.53014 60.1295 7.91296H53.6941V16.8218H60.1295C60.2428 16.2067 60.2428 15.6022 60.1295 14.9989H55.9682V13.2311H59.6481C59.7613 12.6277 59.7613 12.0254 59.6481 11.4082H55.9682V9.73481H60.1295Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M67.9708 1.16331C68.5061 1.16331 69.0766 1.34677 69.6844 1.70626C69.7295 1.63521 69.7481 1.43478 69.7383 1.09332C69.7295 0.751856 69.7119 0.533404 69.6745 0.436904C69.1854 0.149523 68.5875 0 67.8807 0C66.8739 0 66.0671 0.288441 65.4604 0.85684C64.8526 1.42524 64.5448 2.13362 64.5448 2.97349C64.5448 3.81336 64.8438 4.52174 65.4516 5.09014C66.0594 5.65854 66.8662 5.94698 67.8719 5.94698C68.5798 5.94698 69.1777 5.79746 69.6668 5.50902C69.7031 5.41252 69.7207 5.19406 69.7306 4.85366C69.7394 4.5122 69.7218 4.31071 69.6767 4.24072C69.0689 4.59915 68.4973 4.78367 67.9642 4.78367H67.9631L67.9719 4.8017C67.4191 4.8017 66.9563 4.63521 66.5848 4.30329C66.2133 3.97031 66.0319 3.53341 66.0319 2.98197C66.0319 2.43054 66.2133 1.99364 66.5848 1.66066C66.9552 1.3298 67.4169 1.16331 67.9708 1.16331Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M77.1992 5.83359V0.14748C76.8189 0.0859738 76.4375 0.0859738 76.066 0.14748L73.3182 3.4794V0.14748C72.8379 0.0679462 72.3575 0.0679462 71.8772 0.14748V5.83359C72.2575 5.89509 72.6389 5.89509 73.0093 5.83359L75.7572 2.50167V5.83359C76.2386 5.91206 76.7189 5.91206 77.1992 5.83359Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M70.4428 16.8218C71.1957 16.9448 71.9486 16.9448 72.7026 16.8218V9.73481H76.51C76.6232 9.13248 76.6232 8.53014 76.51 7.91296H70.4428V16.8218Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M86.3683 16.8219V7.91306C85.7714 7.81762 85.1746 7.81762 84.5932 7.91306L80.2889 13.1347V7.91306C79.5349 7.79005 78.7831 7.79005 78.0302 7.91306V16.8219C78.627 16.9184 79.2239 16.9184 79.8053 16.8219L84.1095 11.6002V16.8219C84.8636 16.9449 85.6154 16.9449 86.3683 16.8219Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M91.6958 7.91296C90.6593 7.91296 89.8206 8.18656 89.1952 8.73481C88.5698 9.28306 88.2577 9.99568 88.2577 10.8727C88.2577 11.4633 88.4137 11.983 88.727 12.4358C89.0392 12.8875 89.4656 13.23 90.0196 13.4644L87.7751 16.808C88.1016 16.8631 88.5138 16.8907 89.0117 16.8907C89.5085 16.8907 89.9207 16.8631 90.2471 16.808L92.2783 13.7931H93.1587V16.808C93.9116 16.931 94.6646 16.931 95.4186 16.808H95.4175L95.4318 7.91296H91.6958ZM93.1444 11.9702H91.7233C91.3968 11.9702 91.1121 11.8748 90.8857 11.6818C90.6582 11.4898 90.545 11.2163 90.545 10.8462C90.545 10.4761 90.6582 10.2014 90.8857 10.0095C91.1121 9.81858 91.3825 9.72208 91.7101 9.72208V9.72314H93.1444V11.9702Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M89.691 4.67026V4.6692H87.0343V3.54089H89.3821C89.4546 3.15594 89.4546 2.771 89.3821 2.37758H87.0343V1.31077H89.691C89.7635 0.925828 89.7635 0.540886 89.691 0.147461H85.5835V5.83357H89.691C89.7635 5.44014 89.7635 5.0552 89.691 4.67026Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M82.0937 5.83357V1.31077H83.6897C83.7622 0.925828 83.7622 0.540886 83.6897 0.147461H79.0568C78.9831 0.532403 78.9831 0.917344 79.0568 1.31077H80.6516V5.83357C81.1331 5.91204 81.6134 5.91204 82.0937 5.83357Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M95.9461 0.147461H91.3133C91.2396 0.532403 91.2396 0.917344 91.3133 1.31077H92.9081V5.83357C93.3884 5.91204 93.8688 5.91204 94.3491 5.83357V1.31077H95.945C96.0176 0.925828 96.0176 0.540886 95.9461 0.147461Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M41.3936 16.8219V7.91306C40.7957 7.81762 40.2 7.81762 39.6174 7.91306L35.3121 13.1347V7.91306C34.5592 7.79005 33.8063 7.79005 33.0533 7.91306V16.8219C33.6513 16.9184 34.247 16.9184 34.8285 16.8219L39.1327 11.6002V16.8219C39.8867 16.9449 40.6396 16.9449 41.3936 16.8219Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M25.0033 5.88662C25.311 5.88662 25.5649 5.86965 25.7738 5.83465L29.0547 0.148542C28.8459 0.113548 28.5931 0.09552 28.2842 0.09552C27.9754 0.09552 27.7127 0.113548 27.5049 0.148542L26.1816 2.56212L24.8582 0.148542C24.6494 0.112487 24.3955 0.09552 24.0877 0.09552C23.7788 0.09552 23.5161 0.113548 23.3084 0.148542L25.4122 3.78693L24.2251 5.83359C24.4328 5.86859 24.6955 5.88662 25.0033 5.88662Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M26.1793 10.2843C26.7619 9.76359 27.4862 9.50272 28.3523 9.50272C29.191 9.50272 30.0857 9.7901 31.0375 10.3521C31.109 10.2429 31.1365 9.92795 31.1233 9.39349C31.1101 8.85903 31.0804 8.5165 31.0244 8.36486C30.2572 7.91205 29.3196 7.67981 28.2116 7.67981C26.6344 7.67981 25.3704 8.13262 24.4174 9.02339C23.4667 9.91417 22.983 11.0255 22.983 12.3405C22.983 13.6554 23.4524 14.7657 24.4031 15.6575C25.355 16.5483 26.6201 17.0011 28.1963 17.0011C29.3042 17.0011 30.2418 16.7678 31.009 16.3161C31.0661 16.1655 31.0936 15.8219 31.109 15.2885C31.1233 14.754 31.0947 14.4391 31.0233 14.3299C30.0714 14.8919 29.1756 15.1793 28.3381 15.1793L28.3391 15.1803L28.3534 15.2069C27.4873 15.2069 26.763 14.946 26.1804 14.4253C25.5979 13.9046 25.3143 13.2185 25.3143 12.3553C25.3121 11.49 25.5957 10.8049 26.1793 10.2843Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M45.8529 0.147361V5.83347H48.4084C49.025 5.83347 49.5141 5.69455 49.8779 5.40505C50.2395 5.11661 50.4209 4.72212 50.4209 4.22371C50.4209 3.91725 50.3396 3.64577 50.1758 3.41884C50.0131 3.1919 49.7856 3.01693 49.5053 2.89392C50.0406 2.63199 50.3121 2.21205 50.3121 1.63411C50.3121 1.1972 50.1307 0.837711 49.7779 0.557754C49.424 0.277796 48.9612 0.137817 48.3908 0.137817L45.8529 0.147361ZM48.3182 4.67016H47.3026V3.46231H48.2644C48.7271 3.46231 48.9535 3.6638 48.9535 4.05722C48.9535 4.46868 48.7447 4.67016 48.3182 4.67016ZM48.8623 1.88967C48.8623 2.07313 48.8085 2.22159 48.6898 2.32658C48.5721 2.43156 48.4183 2.48352 48.227 2.48352H47.3015V2.48458V1.30325H48.227C48.6535 1.30325 48.8623 1.49625 48.8623 1.88967Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M32.3367 5.83253V3.54197H34.7757V5.83359C35.256 5.91206 35.7364 5.91206 36.2167 5.83359V0.14748C35.7364 0.0679462 35.256 0.0679462 34.7746 0.14748V2.37866H32.3367V0.14854C31.8564 0.0690067 31.3761 0.0690067 30.8958 0.14854V5.83253C31.3761 5.91206 31.8564 5.91206 32.3367 5.83253Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M43.7041 5.83359V0.14748C43.3238 0.0859738 42.9424 0.0859738 42.5708 0.14748L39.823 3.4794V0.14748C39.3427 0.0679462 38.8623 0.0679462 38.382 0.14748V5.83359C38.7623 5.89509 39.1426 5.89509 39.5141 5.83359L42.262 2.50167V5.83359C42.7434 5.91206 43.2237 5.91206 43.7041 5.83359Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M63.9656 16.8207V13.8875H65.3153C66.3529 13.8875 67.1904 13.6139 67.8301 13.0657C68.4698 12.5174 68.7963 11.791 68.7963 10.9003C68.7963 10.0095 68.4698 9.28308 67.8301 8.73483C67.1904 8.18658 66.3529 7.91193 65.3153 7.91193H61.7057V16.8207C62.4597 16.9459 63.2126 16.9459 63.9656 16.8207ZM63.9656 9.73589H65.3153C65.6417 9.73589 65.9121 9.83239 66.1396 10.0243C66.3661 10.2163 66.4804 10.5037 66.4804 10.8875C66.4804 11.2714 66.3661 11.5588 66.1385 11.7507C65.9121 11.9416 65.6274 12.0381 65.301 12.0381L63.9656 12.0668V9.73589Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M56.3958 1.31077C56.4683 0.925828 56.4683 0.540886 56.3958 0.147461H52.2883V5.83357H56.3958C56.4683 5.44014 56.4683 5.0552 56.3958 4.67026V4.6692H53.7402V3.54089H56.0869C56.1594 3.15594 56.1594 2.771 56.0869 2.37758H53.7402V1.31077H56.3958Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M62.2146 3.4359C62.6224 3.08596 62.8312 2.62254 62.8312 2.05414C62.8312 1.48574 62.6224 1.02233 62.2146 0.671321C61.8069 0.321374 61.2716 0.147461 60.6099 0.147461H58.3083V5.83251C58.7886 5.91098 59.2678 5.91098 59.7493 5.83251V3.96082H60.611C61.2716 3.96082 61.8069 3.78585 62.2146 3.4359ZM59.7493 2.79963V1.31183H60.611C60.8187 1.31183 60.9924 1.37334 61.1364 1.49635C61.2815 1.6183 61.354 1.80282 61.354 2.04672C61.354 2.29168 61.2815 2.47514 61.1364 2.59709C60.9924 2.7201 60.8099 2.78055 60.6011 2.78055L59.7493 2.79963Z'
                      fill='#1E30A9'
                    />
                    <path
                      d='M51.6916 16.8219V7.91306C50.9386 7.79005 50.1857 7.79005 49.4328 7.91306H49.4317V11.4083H45.61V7.91306C44.8571 7.79005 44.1042 7.79005 43.3513 7.91306V16.8219C44.1042 16.9449 44.8571 16.9449 45.61 16.8219V13.2312H49.4317V16.8219C50.1868 16.9449 50.9386 16.9449 51.6916 16.8219Z'
                      fill='#1E30A9'
                    />
                  </svg>
                </div>
              </div>
              <div className='content__img-wrapper'>
                <div className='img-wrapper__img'>
                  {/*  <div className="img__business-academy"></div>  */}
                  <svg
                    width='106'
                    height='48'
                    viewBox='0 0 106 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.60306 48.001H8.46378V40.7815H9.62371L11.9748 44.0302L14.3053 40.7815H15.4446V48.001H14.3053V42.5142L12.2856 45.2367H11.6228L9.60306 42.5142V48.001Z'
                      fill='#DA1E39'
                    />
                    <path
                      d='M20.8101 48.0001H17.2472V40.7806H20.5412C21.1973 40.7806 21.7168 40.939 22.1001 41.2551C22.4834 41.5711 22.6747 42.0044 22.6747 42.5544C22.6747 42.9122 22.5849 43.2216 22.4053 43.4827C22.2256 43.7443 21.9941 43.9299 21.7112 44.0399C22.167 44.1226 22.538 44.3354 22.8248 44.6793C23.111 45.0231 23.2544 45.4525 23.2544 45.9686C23.2544 46.5808 23.0335 47.0724 22.5916 47.4435C22.1564 47.8146 21.5628 48.0001 20.8101 48.0001ZM18.3865 41.8228V43.6893H20.3443C20.7242 43.6893 21.0194 43.6088 21.2297 43.4471C21.44 43.2855 21.5455 43.0538 21.5455 42.7511C21.5455 42.4483 21.44 42.2183 21.2297 42.06C21.0188 41.9017 20.7237 41.8228 20.3443 41.8228H18.3865ZM18.3865 44.6898V46.9585H20.6032C21.045 46.9585 21.3921 46.8574 21.6442 46.6541C21.8964 46.4514 22.0225 46.168 22.0225 45.8031C22.0225 45.4459 21.8981 45.1703 21.6498 44.9781C21.401 44.7859 21.0523 44.6893 20.6037 44.6893H18.3865V44.6898Z'
                      fill='#DA1E39'
                    />
                    <path
                      d='M25.2535 48H24.0417L27.2112 40.7394H28.3092L31.4788 48H30.2564L29.4692 46.2057H26.0301L25.2535 48ZM27.7496 42.1732L26.424 45.2052H29.0758L27.7496 42.1732Z'
                      fill='#DA1E39'
                    />
                    <path
                      d='M39.412 38.3107H35.8167V32.9711L35.7609 32.735L33.9928 29.2147H33.0449L31.2768 32.735L31.221 32.9711V35.377H28.7455V29.4508L28.2155 28.923H27.3959L26.3503 26.321H25.3662L24.3206 28.923H24.031V24.17L23.8759 23.7967L21.9684 21.8974V15.3684L21.9622 15.2868L20.5061 6.0074C20.5066 5.92463 20.4876 5.84519 20.4525 5.77408C20.3599 5.55688 20.1283 5.42077 19.8834 5.45855C19.6072 5.50132 19.4153 5.74909 19.4376 6.02184L17.9798 15.3118L17.9736 15.3934V21.9224L16.0661 23.8217L15.911 24.195V28.948H15.6214L14.5758 26.346H13.5917L12.5461 28.948H11.7265L11.1965 29.4758V35.402H8.72096V32.9961L8.66516 32.76L6.89709 29.2397H5.94918L4.18111 32.76L4.12531 32.9961V38.3357H0.530031C0.237119 38.3357 0 38.5718 0 38.8634C0 39.1551 0.237119 39.3912 0.530031 39.3912H4.65479L5.18482 38.8634V33.1205L6.42286 30.6557L7.6609 33.1205V35.9298L8.19093 36.4575H11.7265L12.2565 35.9298V30.0035H12.9049L13.3969 29.6719L14.0832 27.9631L14.7694 29.6719L15.2615 30.0035H16.4399L16.9699 29.4758V24.4139L18.8775 22.5146L19.0326 22.1413V15.4345L19.9721 9.44716L20.9078 15.409V22.1157L21.0629 22.489L22.9704 24.3883V29.4502L23.5004 29.978H24.6788L25.1709 29.6463L25.8571 27.9375L26.5434 29.6463L27.0355 29.978H27.6838V35.9042L28.2138 36.4319H31.7494L32.2794 35.9042V33.095L33.5175 30.6301L34.7555 33.095V38.8379L35.2855 39.3656H39.4109C39.7038 39.3656 39.9409 39.1295 39.9409 38.8379C39.9409 38.5462 39.7049 38.3107 39.412 38.3107Z'
                      fill='#DA1E39'
                    />
                    <path
                      d='M18.3469 4.61079C18.858 3.07368 19.3696 1.53712 19.8807 0C20.4118 1.53712 20.9424 3.07368 21.4735 4.61079C20.1535 3.76141 18.8329 2.91202 17.5128 2.06263C19.0934 2.02208 20.6746 1.98153 22.2552 1.94153C20.9524 2.83147 19.6497 3.72085 18.3469 4.61079Z'
                      fill='#DA1E39'
                    />
                    <path
                      d='M52.7649 20.6513C51.6301 20.6513 50.6771 20.2746 49.9055 19.5214C49.1489 18.7681 48.7707 17.8082 48.7707 16.641C48.7707 15.4816 49.1489 14.525 49.9055 13.7718C50.6693 13.0113 51.6222 12.6307 52.7649 12.6307C53.6101 12.6307 54.3371 12.8229 54.9453 13.2068V14.049C54.2629 13.6134 53.5398 13.3951 52.776 13.3951C51.8861 13.3951 51.1329 13.7051 50.5175 14.3256C49.9094 14.9311 49.6053 15.7033 49.6053 16.641C49.6053 17.5865 49.9094 18.362 50.5175 18.9675C51.1329 19.5808 51.8934 19.8869 52.7984 19.8869C53.7033 19.8869 54.4744 19.6286 55.1126 19.1114V19.9641C54.4744 20.4224 53.6922 20.6513 52.7649 20.6513Z'
                      fill='black'
                    />
                    <path
                      d='M58.4836 20.518H57.6824V15.8656H55.7352V15.1678H60.4302V15.8656H58.483V20.518H58.4836Z'
                      fill='black'
                    />
                    <path
                      d='M61.9438 15.8655C62.485 15.3116 63.1824 15.0344 64.0355 15.0344C64.8886 15.0344 65.5854 15.3116 66.1272 15.8655C66.6683 16.4049 66.9395 17.0654 66.9395 17.8481C66.9395 18.6308 66.6689 19.2919 66.1272 19.8308C65.5781 20.3774 64.8813 20.6507 64.0355 20.6507C63.1902 20.6507 62.4928 20.3774 61.9438 19.8308C61.4021 19.2919 61.1315 18.6308 61.1315 17.8481C61.1315 17.0659 61.4021 16.4049 61.9438 15.8655ZM66.116 17.8487C66.116 17.2582 65.9196 16.7593 65.5263 16.3532C65.1329 15.9544 64.6364 15.7549 64.0355 15.7549C63.4346 15.7549 62.9375 15.9544 62.5447 16.3532C62.1514 16.7593 61.955 17.2582 61.955 17.8487C61.955 18.432 62.1514 18.9269 62.5447 19.333C62.9375 19.7319 63.4346 19.9313 64.0355 19.9313C64.6364 19.9313 65.1329 19.7319 65.5263 19.333C65.919 18.9269 66.116 18.432 66.116 17.8487Z'
                      fill='black'
                    />
                    <path
                      d='M67.551 20.518V19.787C67.5878 19.7942 67.6587 19.7981 67.7625 19.7981C68.23 19.7981 68.5486 19.5025 68.7193 18.912C68.8599 18.4393 68.9492 17.7599 68.9865 16.8738L69.0312 15.1678H73.0477V20.518H72.2465V15.8656H69.7989L69.7654 16.8955C69.7503 17.2944 69.7358 17.5821 69.7208 17.7593C69.6538 18.4832 69.5461 19.0148 69.3983 19.3542C69.2649 19.7086 69.0607 19.9986 68.7862 20.2236C68.5117 20.4491 68.1781 20.5502 67.7848 20.528C67.6659 20.5291 67.5878 20.5252 67.551 20.518Z'
                      fill='black'
                    />
                    <path
                      d='M75.6834 20.518H74.938V15.1678H75.7392V19.3442L79.1771 15.1678H79.9225V20.518H79.1213V16.3528L75.6834 20.518Z'
                      fill='black'
                    />
                    <path
                      d='M86.1858 20.518H85.3846V18.3798C84.8652 18.6014 84.3128 18.712 83.727 18.712C82.9777 18.712 82.427 18.5403 82.075 18.197C81.7224 17.8537 81.5466 17.2904 81.5466 16.5077V15.1672H82.3478V16.441C82.3478 17.0171 82.4644 17.4199 82.6982 17.6487C82.932 17.8776 83.327 17.992 83.8832 17.992C84.4244 17.992 84.9254 17.8737 85.3852 17.6376V15.1672H86.1864V20.518H86.1858Z'
                      fill='black'
                    />
                    <path
                      d='M88.8783 20.518H88.0772V15.1678H88.8783V17.4166H92.1824V15.1678H92.9836V20.518H92.1824V18.1365H88.8783V20.518Z'
                      fill='black'
                    />
                    <path
                      d='M96.4655 20.6513C95.8942 20.6513 95.4088 20.4963 95.0082 20.1858C94.6149 19.8608 94.4185 19.4253 94.4185 18.8787C94.4185 18.3398 94.6261 17.9076 95.0417 17.5826C95.4568 17.2654 95.9835 17.1066 96.6218 17.1066C97.3186 17.1066 97.9641 17.2799 98.5578 17.6271V17.0954C98.5578 16.2022 97.968 15.755 96.7886 15.755C96.1581 15.755 95.5723 15.9361 95.0306 16.2977V15.5222C95.5572 15.1972 96.1989 15.035 96.9554 15.035C97.6896 15.035 98.2738 15.2067 98.7079 15.55C99.1419 15.8933 99.359 16.3827 99.359 17.0177V19.222C99.359 19.4286 99.4053 19.5914 99.4979 19.7092C99.5905 19.8275 99.7149 19.8864 99.8706 19.8864C99.9889 19.8864 100.093 19.8641 100.182 19.8197V20.4402C100.063 20.5213 99.8851 20.5619 99.648 20.5619C99.3807 20.5619 99.1564 20.4897 98.9751 20.3458C98.7932 20.2019 98.6805 19.9897 98.6359 19.7086C98.0936 20.3374 97.3705 20.6513 96.4655 20.6513ZM96.6882 19.9314C97.0592 19.9314 97.4112 19.8464 97.7449 19.6764C98.0785 19.5064 98.3491 19.2925 98.5572 19.0336V18.2915C98.0082 17.9371 97.4263 17.7598 96.8104 17.7598C96.321 17.7598 95.9333 17.856 95.6476 18.0476C95.362 18.2398 95.2191 18.502 95.2191 18.8342C95.2191 19.1814 95.3564 19.4508 95.6309 19.643C95.9054 19.8353 96.258 19.9314 96.6882 19.9314Z'
                      fill='black'
                    />
                    <path
                      d='M101.973 20.518H101.061L102.663 18.3798C102.225 18.3059 101.889 18.1304 101.655 17.8537C101.422 17.5765 101.305 17.2243 101.305 16.796C101.305 16.301 101.474 15.9061 101.811 15.6105C102.149 15.315 102.621 15.1672 103.229 15.1672H105.999V20.5174H105.198V18.5237H103.474L101.973 20.518ZM103.352 17.8265H105.199V15.8655H103.352C102.959 15.8655 102.657 15.9505 102.445 16.1205C102.234 16.2905 102.129 16.5344 102.129 16.8516C102.129 17.1693 102.234 17.411 102.445 17.5771C102.657 17.7432 102.959 17.8265 103.352 17.8265Z'
                      fill='black'
                    />
                    <path
                      d='M52.2756 31.5955H49.0937V23.8416H54.4119V24.5838H49.9172V26.777H52.2756C53.1431 26.777 53.8182 26.9986 54.3003 27.4414C54.7896 27.8847 55.0345 28.468 55.0345 29.1918C55.0345 29.9229 54.7896 30.5061 54.3003 30.9422C53.811 31.3778 53.1359 31.5955 52.2756 31.5955ZM49.9172 27.5191V30.8533H52.198C52.8357 30.8533 53.3311 30.7078 53.6832 30.4156C54.0353 30.124 54.2116 29.7123 54.2116 29.1807C54.2116 28.6563 54.0353 28.2485 53.6832 27.9569C53.3306 27.6652 52.8357 27.5191 52.198 27.5191H49.9172Z'
                      fill='black'
                    />
                    <path
                      d='M57.4375 31.5955H56.6921V26.2454H57.4933V30.4217L60.9312 26.2454H61.6766V31.5955H60.8755V27.4303L57.4375 31.5955Z'
                      fill='black'
                    />
                    <path
                      d='M65.2814 31.7283C64.5025 31.7283 63.8425 31.6066 63.3013 31.3628V30.5872C63.9022 30.8678 64.5287 31.0083 65.1815 31.0083C65.7305 31.0083 66.1623 30.9217 66.4776 30.7478C66.7928 30.5745 66.9501 30.3323 66.9501 30.0223C66.9501 29.7418 66.8201 29.524 66.5607 29.3684C66.3013 29.2135 65.9447 29.1357 65.4928 29.1357H64.5583V28.438H65.4928C65.9079 28.438 66.2215 28.368 66.4329 28.2274C66.6444 28.0874 66.7498 27.8991 66.7498 27.6625C66.7498 27.1086 66.2455 26.8314 65.2367 26.8314C64.6359 26.8314 64.0461 26.9531 63.4676 27.1969V26.4548C63.9792 26.2259 64.6208 26.1115 65.3924 26.1115C66.0078 26.1115 66.5233 26.2409 66.939 26.4992C67.3541 26.7575 67.5622 27.0975 67.5622 27.5186C67.5399 27.8658 67.4545 28.1263 67.3061 28.2996C67.1577 28.4735 66.9535 28.6152 66.694 28.7263C67.421 28.9629 67.7842 29.4129 67.7842 30.0778C67.7842 30.5728 67.556 30.9717 67.1002 31.2744C66.6438 31.5772 66.0379 31.7283 65.2814 31.7283Z'
                      fill='black'
                    />
                    <path
                      d='M70.1984 31.5955H69.3972V26.2454H70.1984V28.4941H73.5024V26.2454H74.3036V31.5955H73.5024V29.214H70.1984V31.5955Z'
                      fill='black'
                    />
                    <path
                      d='M78.7648 31.7283C77.9268 31.7283 77.2221 31.4661 76.6508 30.9417C76.0873 30.4251 75.8056 29.7529 75.8056 28.9258C75.8056 28.128 76.0577 27.4597 76.5621 26.9209C77.0737 26.382 77.7304 26.1121 78.5316 26.1121C78.9618 26.1121 79.3439 26.1987 79.6776 26.3726C80.0112 26.5465 80.2746 26.7731 80.4676 27.0537C80.6606 27.3342 80.8051 27.6314 80.9017 27.9453C80.9982 28.2591 81.0462 28.5752 81.0462 28.8924V29.1141H76.6296C76.6743 29.6902 76.9058 30.1496 77.3248 30.4934C77.7438 30.8367 78.2761 31.0084 78.921 31.0084C79.5442 31.0084 80.1189 30.8423 80.6456 30.5101V31.2189C80.2076 31.5589 79.581 31.7283 78.7648 31.7283ZM76.6402 28.4608H80.2338C80.2115 28.0475 80.0558 27.6742 79.7663 27.342C79.4918 27.0026 79.0689 26.8326 78.4981 26.8326C77.9642 26.8326 77.5262 26.9953 77.1853 27.3198C76.8517 27.652 76.6698 28.0325 76.6402 28.4608Z'
                      fill='black'
                    />
                    <path
                      d='M85.0175 31.7283C84.1939 31.7283 83.5116 31.4622 82.9704 30.9306C82.4287 30.3918 82.1581 29.7196 82.1581 28.9146C82.1581 28.1169 82.4326 27.4525 82.9816 26.9209C83.5228 26.382 84.2051 26.1121 85.0286 26.1121C85.6518 26.1121 86.193 26.2415 86.6527 26.4998V27.242C86.1707 26.9687 85.6663 26.832 85.1396 26.832C84.5164 26.832 84.0009 27.0314 83.5931 27.4303C83.1852 27.8142 82.981 28.313 82.981 28.9258C82.981 29.524 83.1847 30.0223 83.5931 30.4212C84.0082 30.8128 84.5237 31.0084 85.1396 31.0084C85.7327 31.0084 86.2706 30.8534 86.7526 30.5429V31.2739C86.2488 31.5772 85.6702 31.7283 85.0175 31.7283Z'
                      fill='black'
                    />
                    <path
                      d='M49.1829 42.6731H48.3265L51.798 34.8748H52.5657L56.0477 42.6731H55.1801L54.2121 40.5349H50.1292L49.1829 42.6731ZM52.1757 35.9047L50.4065 39.815H53.9443L52.1757 35.9047Z'
                      fill='black'
                    />
                    <path
                      d='M57.3153 37.3223H58.1165V39.5266L60.6751 37.3223H61.7653L58.9282 39.7372L62.1659 42.6725H61.0199L58.1159 40.036V42.6725H57.3147V37.3223H57.3153Z'
                      fill='black'
                    />
                    <path
                      d='M64.8138 42.8059C64.2425 42.8059 63.7571 42.6509 63.3565 42.3403C62.9632 42.0154 62.7668 41.5798 62.7668 41.0332C62.7668 40.4943 62.9743 40.0622 63.39 39.7372C63.8051 39.42 64.3318 39.2611 64.97 39.2611C65.6669 39.2611 66.3124 39.4344 66.906 39.7816V39.25C66.906 38.3567 66.3163 37.9095 65.1369 37.9095C64.5064 37.9095 63.9206 38.0906 63.3788 38.4523V37.6768C63.9055 37.3518 64.5471 37.1896 65.3037 37.1896C66.0379 37.1896 66.6221 37.3612 67.0561 37.7045C67.4902 38.0478 67.7072 38.5373 67.7072 39.1722V41.3765C67.7072 41.5832 67.7535 41.7459 67.8461 41.8637C67.9388 41.982 68.0632 42.0409 68.2188 42.0409C68.3377 42.0409 68.4415 42.0187 68.5302 41.9742V42.5948C68.4113 42.6759 68.2333 42.7164 67.9962 42.7164C67.729 42.7164 67.5047 42.6442 67.3234 42.5003C67.1415 42.3564 67.0288 42.1442 66.9841 41.8631C66.4418 42.492 65.7188 42.8059 64.8138 42.8059ZM65.0364 42.0859C65.4075 42.0859 65.7595 42.0009 66.0931 41.8309C66.4268 41.6609 66.6974 41.4471 66.9055 41.1882V40.446C66.3565 40.0916 65.7746 39.9144 65.1586 39.9144C64.6693 39.9144 64.2816 40.0105 63.9959 40.2021C63.7102 40.3944 63.5674 40.6566 63.5674 40.9888C63.5674 41.336 63.7047 41.6054 63.9792 41.7976C64.2537 41.9898 64.6063 42.0859 65.0364 42.0859Z'
                      fill='black'
                    />
                    <path
                      d='M69.8982 44.2568H69.1305V41.9748H69.8089C70.402 41.1921 70.7061 39.8921 70.7211 38.0756L70.7323 37.3223H74.7265V41.9748H75.728V44.2568H74.9491V42.6725H69.8982V44.2568ZM70.6988 41.9753H73.9253V38.0206H71.4777V38.3417C71.4777 39.9366 71.2182 41.1482 70.6988 41.9753Z'
                      fill='black'
                    />
                    <path
                      d='M79.6106 42.8059C78.7726 42.8059 78.068 42.5437 77.4966 42.0192C76.9331 41.5026 76.6514 40.8304 76.6514 40.0033C76.6514 39.2055 76.9036 38.5373 77.4079 37.9984C77.9196 37.4596 78.5762 37.1896 79.3774 37.1896C79.8076 37.1896 80.1898 37.2762 80.5234 37.4501C80.857 37.624 81.1204 37.8506 81.3134 38.1312C81.5065 38.4117 81.651 38.7089 81.7475 39.0228C81.844 39.3366 81.892 39.6527 81.892 39.9699V40.1916H77.4754C77.5201 40.7677 77.7516 41.2271 78.1706 41.5709C78.5896 41.9143 79.1219 42.0859 79.7668 42.0859C80.39 42.0859 80.9647 41.9198 81.4914 41.5876V42.2964C81.0529 42.6359 80.4263 42.8059 79.6106 42.8059ZM77.4855 39.5383H81.0791C81.0568 39.125 80.9011 38.7517 80.6115 38.4195C80.337 38.0801 79.9141 37.9101 79.3434 37.9101C78.8094 37.9101 78.3715 38.0728 78.0306 38.3973C77.6969 38.7295 77.5151 39.11 77.4855 39.5383Z'
                      fill='black'
                    />
                    <path
                      d='M84.1722 42.6731H83.3934V37.3229H84.1722L86.3197 39.8044L88.4783 37.3229H89.2572V42.6731H88.4783V38.4195L86.4759 40.7349H86.1646L84.1733 38.4195V42.6731H84.1722Z'
                      fill='black'
                    />
                    <path
                      d='M91.8928 42.6731H91.1474V37.3229H91.9486V41.4993L95.3865 37.3229H96.1319V42.6731H95.3307V38.5078L91.8928 42.6731Z'
                      fill='black'
                    />
                    <path
                      d='M98.5126 42.6731H97.6004L99.2022 40.5349C98.7643 40.461 98.4289 40.2855 98.1952 40.0088C97.9614 39.7316 97.8448 39.3794 97.8448 38.9511C97.8448 38.4561 98.0133 38.0612 98.3508 37.7656C98.6884 37.4701 99.1609 37.3223 99.7691 37.3223H102.539V42.6725H101.738V40.6788H100.013L98.5126 42.6731ZM99.8924 39.981H101.739V38.0206H99.8924C99.499 38.0206 99.1972 38.1056 98.9858 38.2756C98.7743 38.4456 98.6688 38.6895 98.6688 39.0067C98.6688 39.3244 98.7743 39.5661 98.9858 39.7322C99.1967 39.8983 99.499 39.981 99.8924 39.981Z'
                      fill='black'
                    />
                  </svg>
                </div>
              </div>
              <div className='content__img-wrapper'>
                <div className='img-wrapper__img'>
                  {/*  <div className="img__tambov"></div>  */}
                  <svg
                    width='143'
                    height='51'
                    viewBox='0 0 143 51'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M25.658 0.00202043C33.1312 0.00202043 40.6023 0.00403791 48.0754 2.94368e-06C50.1382 -0.00201454 51.1483 1.03296 51.1504 3.23605C51.1524 17.4613 51.1423 31.6866 51.1382 45.9119C51.1382 46.6523 51.1625 47.3927 51.1483 48.1311C51.114 49.8742 50.0594 50.9294 48.3037 50.998C48.1361 51.004 47.9663 51.002 47.7987 51.002C32.9877 51.002 18.1768 51.004 3.36585 50.994C2.8345 50.994 2.27286 50.9637 1.77788 50.7922C0.747517 50.4331 0.101016 49.7007 0.0262641 48.5609C0.00808126 48.2925 0.00202032 48.0242 0.00202032 47.7539C0 32.9213 0 18.0908 0 3.26026C0 3.05851 0 2.85676 0.0101016 2.65501C0.101016 1.07936 1.05865 0.0645625 2.63449 0.0443876C5.79831 0.00202043 8.96212 0.0322827 12.1259 0.0322827C16.6373 0.0322827 21.1467 0.0322827 25.658 0.0322827C25.658 0.0221953 25.658 0.0121079 25.658 0.00202043ZM25.5489 48.2784C26.9288 48.2784 28.3107 48.2784 29.6906 48.2784C35.3475 48.2784 41.0023 48.2804 46.6592 48.2764C47.837 48.2744 48.3502 47.8588 48.4573 46.8278C48.5017 46.3941 48.4856 45.9543 48.4856 45.5165C48.4795 32.4654 48.4694 19.4143 48.4633 6.36315C48.4633 5.65703 48.4876 4.95091 48.4694 4.24479C48.4452 3.33289 47.9401 2.81641 47.0532 2.69335C46.6228 2.63282 46.1804 2.6308 45.744 2.63282C40.0204 2.64291 34.2969 2.66914 28.5733 2.66914C20.6618 2.66712 12.7502 2.64694 4.83866 2.6308C3.2022 2.62677 2.64661 3.18965 2.64661 4.91056C2.64459 18.6335 2.64661 32.3584 2.64661 46.0814C2.64661 47.8588 3.06886 48.2764 4.8427 48.2764C11.7441 48.2784 18.6455 48.2784 25.5489 48.2784Z'
                      fill='#000082'
                    />
                    <path
                      d='M113.881 42.5971C113.659 42.9583 113.37 43.2952 113.229 43.6846C113.047 44.1849 113 44.7316 112.865 45.2501C112.673 45.9905 112.214 46.1923 111.556 45.922C111.756 45.355 111.954 44.8466 112.113 44.3241C112.21 44.0033 112.15 43.5938 112.33 43.3476C113.425 41.8406 112.293 40.6301 111.853 39.2078C113.762 39.2279 112.996 41.4028 114.198 42.0746C114.198 41.1062 114.198 40.2306 114.198 39.2864C114.578 39.2864 114.992 39.2864 115.326 39.2864C115.281 40.1862 115.239 41.0719 115.188 42.1109C116.627 41.4673 115.706 39.1351 117.754 39.2138C117.554 39.6375 117.405 40.0148 117.207 40.3638C116.065 42.3853 117.681 44.0235 117.892 45.93C117.249 46.1984 116.829 45.9099 116.641 45.2118C116.493 44.661 116.443 44.082 116.257 43.5474C116.134 43.1923 115.849 42.8917 115.635 42.5669C115.532 42.6072 115.431 42.6496 115.328 42.6899C115.328 43.7108 115.328 44.7337 115.328 45.8473C115.033 45.8473 114.627 45.8473 114.202 45.8473C114.202 44.8325 114.202 43.7895 114.202 42.7464C114.095 42.698 113.988 42.6476 113.881 42.5971Z'
                      fill='#000082'
                    />
                    <path
                      d='M61.6156 45.817C61.3812 45.817 61.0236 45.817 60.7186 45.817C60.7186 43.6846 60.7186 41.5581 60.7186 39.4216C62.3187 39.1674 62.4075 39.234 62.6459 40.8722C62.7975 41.9152 62.9551 42.9583 63.3288 44.0174C63.5955 42.4922 63.8642 40.967 64.139 39.3893C64.7208 39.3893 65.2421 39.3893 65.7532 39.3893C65.7532 41.54 65.7532 43.6422 65.7532 45.807C65.4158 45.807 64.9309 45.807 64.5531 45.807C64.5531 44.0457 64.5531 42.3207 64.5531 40.3416C64.244 41.9979 64.0076 43.4283 63.6905 44.8426C63.6157 45.1775 63.2642 45.4519 63.0399 45.7525C62.8258 45.4438 62.4924 45.1593 62.4197 44.8204C62.1166 43.4223 61.8944 42.008 61.6136 40.4485C61.6156 42.3349 61.6156 44.0497 61.6156 45.817Z'
                      fill='#000082'
                    />
                    <path
                      d='M65.0663 11.9374C65.0097 11.9475 64.8501 11.9919 64.6905 11.9939C64.4946 11.9979 64.2986 11.9656 64.1673 11.9535C64.1673 9.79483 64.1673 7.68454 64.1673 5.56215C65.6441 5.22725 65.8502 5.35838 66.0825 6.84325C66.2502 7.92463 66.4078 9.00802 66.8098 10.1136C66.9856 9.05038 67.1755 7.98919 67.3311 6.92395C67.5594 5.35637 67.5473 5.35435 69.2039 5.50364C69.2039 7.62604 69.2039 9.75448 69.2039 11.9394C68.8685 11.9394 68.414 11.9394 68.0018 11.9394C68.0018 10.1822 68.0018 8.43707 68.0018 6.40546C67.6968 8.06585 67.4462 9.468 67.1816 10.8681C67.1008 11.2979 67.2038 11.9656 66.4906 11.8244C66.23 11.772 65.9451 11.2716 65.8724 10.9327C65.5714 9.53256 65.3471 8.11629 65.0643 6.54668C65.0663 8.44312 65.0663 10.156 65.0663 11.9374Z'
                      fill='#000082'
                    />
                    <path
                      d='M132.418 45.8131C132.07 45.8131 131.65 45.8131 131.272 45.8131C131.272 44.3867 131.272 42.9745 131.272 41.2556C130.717 42.9019 130.248 44.2899 129.735 45.8131C129.585 45.8131 129.161 45.8131 128.735 45.8151C128.735 43.6705 128.735 41.5259 128.735 39.2986C129.133 39.2986 129.567 39.2986 129.916 39.2986C129.916 40.7472 129.916 42.1473 129.916 43.5495C129.965 43.5636 130.016 43.5757 130.064 43.5898C130.539 42.1917 131.016 40.7936 131.533 39.2704C131.66 39.2704 132.078 39.2704 132.416 39.2704C132.418 41.4694 132.418 43.61 132.418 45.8131Z'
                      fill='#000082'
                    />
                    <path
                      d='M57.6396 41.8164C57.187 43.0975 56.7325 44.3766 56.2799 45.6577C56.3668 45.7082 56.4517 45.7586 56.5385 45.811C56.088 45.811 55.6375 45.811 55.2698 45.811C55.2698 43.6483 55.2698 41.5057 55.2698 39.2905C55.6577 39.2905 56.0698 39.2905 56.4355 39.2905C56.4355 40.7149 56.4355 42.119 56.4355 43.5252C56.488 43.5414 56.5385 43.5555 56.5911 43.5716C57.0719 42.1977 57.5527 40.8238 58.0315 39.4519C57.9426 39.3975 57.8538 39.343 57.7649 39.2885C58.179 39.2885 58.5912 39.2885 58.8316 39.2885C58.8316 40.3638 58.8316 41.4351 58.8316 42.5044C58.8316 43.5898 58.8316 44.6732 58.8316 45.8151C58.6417 45.8151 58.2194 45.8151 57.7992 45.8151C57.8376 45.1533 57.8881 44.5098 57.9063 43.8642C57.9245 43.1984 57.9103 42.5326 57.9103 41.8669C57.8194 41.8507 57.7305 41.8326 57.6396 41.8164Z'
                      fill='#000082'
                    />
                    <path
                      d='M104.608 11.9537C104.287 11.9537 103.864 11.9537 103.458 11.9537C103.458 10.5676 103.458 9.21593 103.458 7.86422C103.414 7.85009 103.367 7.83597 103.323 7.82387C102.858 9.15339 102.394 10.4829 101.882 11.9476C101.735 11.9476 101.313 11.9476 100.929 11.9476C100.929 9.81512 100.929 7.70484 100.929 5.51788C101.305 5.51788 101.687 5.51788 102.062 5.51788C102.062 6.89784 102.062 8.2778 102.062 9.65574C102.123 9.6739 102.184 9.69206 102.244 9.71022C102.715 8.33026 103.188 6.9503 103.689 5.48157C103.872 5.48157 104.232 5.48157 104.608 5.48157C104.608 7.63422 104.608 9.76671 104.608 11.9537Z'
                      fill='#000082'
                    />
                    <path
                      d='M66.2543 34.6201C66.0866 34.6201 65.632 34.6201 65.2603 34.6201C65.2603 32.4351 65.2603 30.3087 65.2603 28.0996C65.6623 28.0996 66.0704 28.0996 66.424 28.0996C66.424 29.534 66.424 30.9523 66.424 32.3686C66.4724 32.3867 66.5209 32.4029 66.5674 32.421C67.0442 31.0189 67.521 29.6167 68.0422 28.0834C68.2059 28.0834 68.6221 28.0834 68.9635 28.0834C68.9635 30.2664 68.9635 32.4049 68.9635 34.612C68.6241 34.612 68.1736 34.612 67.7836 34.612C67.7836 33.2018 67.7836 31.7815 67.7836 30.0888C67.2341 31.7149 66.7634 33.115 66.2543 34.6201Z'
                      fill='#000082'
                    />
                    <path
                      d='M76.9094 45.801C76.9094 43.6342 76.9094 41.4896 76.9094 39.2784C77.2953 39.2784 77.7115 39.2784 78.0711 39.2784C78.0711 40.7189 78.0711 42.1191 78.0711 43.5192C78.1277 43.5333 78.1863 43.5474 78.2428 43.5616C78.7115 42.1776 79.1803 40.7916 79.6934 39.2744C79.8409 39.2744 80.2591 39.2744 80.6106 39.2744C80.6106 41.4493 80.6106 43.6039 80.6106 45.8171C80.2732 45.8171 79.8187 45.8171 79.4671 45.8171C79.4671 44.4553 79.4671 43.1419 79.4671 41.8306C79.4126 41.8124 79.356 41.7922 79.3015 41.7741C78.8469 43.0673 78.3903 44.3585 77.8812 45.803C77.7216 45.801 77.2751 45.801 76.9094 45.801Z'
                      fill='#000082'
                    />
                    <path
                      d='M90.4355 34.628C90.2435 34.628 89.7849 34.628 89.4354 34.628C89.4354 32.433 89.4354 30.2864 89.4354 28.0793C89.8354 28.0793 90.2233 28.0793 90.6031 28.0793C90.6031 29.4754 90.6031 30.8533 90.6031 32.2312C90.6658 32.2514 90.7264 32.2696 90.789 32.2897C91.2598 30.9179 91.7325 29.5439 92.2416 28.0611C92.3972 28.0611 92.7912 28.0611 93.1649 28.0611C93.1649 30.2359 93.1649 32.3886 93.1649 34.6078C92.8255 34.6078 92.3487 34.6078 91.9911 34.6078C91.9911 33.2117 91.9911 31.8318 91.9911 30.4498C91.9568 30.4276 91.9224 30.4074 91.8861 30.3852C91.4234 31.739 90.9607 33.0927 90.4355 34.628Z'
                      fill='#000082'
                    />
                    <path
                      d='M95.6539 5.38672C96.058 5.38672 96.4782 5.38672 96.8176 5.38672C96.8176 6.86352 96.8176 8.29795 96.8176 9.73036C96.8601 9.74045 96.9045 9.75054 96.9469 9.76063C97.4338 8.34839 97.9207 6.93615 98.4561 5.38874C98.5591 5.38874 98.947 5.38874 99.3248 5.38874C99.3248 7.57165 99.3248 9.71422 99.3248 11.9314C99.0198 11.9314 98.6036 11.9314 98.1874 11.9314C98.1874 10.5414 98.1874 9.16547 98.1874 7.79156C98.1409 7.77946 98.0945 7.76735 98.048 7.75525C97.5894 9.10091 97.1308 10.4446 96.6196 11.9395C96.4661 11.9395 96.0156 11.9395 95.6519 11.9395C95.6539 9.73843 95.6539 7.59183 95.6539 5.38672Z'
                      fill='#000082'
                    />
                    <path
                      d='M73.2264 24.2259C74.1133 21.6819 74.4649 19.1984 74.2729 16.6099C75.2811 16.6099 76.3498 16.6099 77.3539 16.6099C77.3539 18.4075 77.3317 20.1708 77.3741 21.93C77.3822 22.2448 77.7034 22.5393 77.7782 22.8661C77.8671 23.2515 77.8428 23.6631 77.758 24.1392C77.2973 22.8722 76.2933 23.2353 75.4488 23.2232C74.6245 23.2152 73.6588 22.9307 73.2264 24.2259ZM74.4911 22.6866C75.0144 22.6866 75.4245 22.7451 75.8064 22.6644C76.0306 22.618 76.3781 22.3557 76.3842 22.1842C76.4286 20.5218 76.4104 18.8554 76.4104 17.197C75.871 17.197 75.4871 17.197 75.0609 17.197C74.8709 19.0249 74.6891 20.7801 74.4911 22.6866Z'
                      fill='#000082'
                    />
                    <path
                      d='M70.5293 34.6805C70.5293 32.4048 70.5293 30.2885 70.5293 28.0168C70.9353 28.0168 71.4263 28.043 71.9132 28.0127C73.9779 27.8856 74.083 29.0558 73.7557 30.6012C73.6931 30.8957 73.7052 31.269 73.8365 31.5272C74.6952 33.2058 73.8587 34.6523 71.9799 34.6785C71.4808 34.6866 70.9818 34.6805 70.5293 34.6805ZM71.6101 34.2528C72.091 34.0834 72.8264 34.0128 72.893 33.7666C73.0627 33.1271 73.0304 32.3867 72.8748 31.735C72.8264 31.5312 72.1253 31.4828 71.6101 31.3295C71.6101 32.3786 71.6101 33.2017 71.6101 34.2528ZM71.5657 31.2024C72.1435 30.8756 72.7456 30.7222 72.788 30.4761C72.887 29.891 72.7516 29.2555 72.6243 28.6583C72.6041 28.5635 72.1233 28.4889 71.891 28.5454C71.7475 28.5817 71.5919 28.8803 71.5798 29.0699C71.5414 29.663 71.5657 30.2622 71.5657 31.2024Z'
                      fill='#000082'
                    />
                    <path
                      d='M127.442 18.7001C126.888 20.2979 126.417 21.6557 125.949 23.0114C126.041 23.0619 126.132 23.1123 126.225 23.1607C125.771 23.1607 125.318 23.1607 124.92 23.1607C124.92 21.0525 124.92 18.9422 124.92 16.7532C125.294 16.7532 125.678 16.7532 126.066 16.7532C126.066 18.1392 126.066 19.5434 126.066 20.9455C126.122 20.9576 126.179 20.9718 126.235 20.9839C126.714 19.6079 127.193 18.23 127.716 16.733C127.838 16.733 128.197 16.733 128.619 16.733C128.619 18.8776 128.619 21.0081 128.619 23.1728C128.254 23.1728 127.797 23.1728 127.442 23.1728C127.442 21.7404 127.442 20.3544 127.442 18.7001Z'
                      fill='#000082'
                    />
                    <path
                      d='M123.817 39.2139C124.237 39.2139 124.7 39.2099 125.165 39.2139C126.961 39.228 127.575 40.1076 127.035 41.8164C126.947 42.0989 126.983 42.4963 127.114 42.7626C127.969 44.4856 127.155 45.8554 125.231 45.8716C124.734 45.8756 124.237 45.8716 123.817 45.8716C123.817 43.6181 123.817 41.4674 123.817 39.2139ZM124.852 45.6134C125.454 45.343 126.175 45.2159 126.223 44.9617C126.351 44.2818 126.235 43.5374 126.104 42.8413C126.08 42.7183 125.496 42.5992 125.213 42.6638C125.05 42.7021 124.888 43.1056 124.87 43.3538C124.819 43.9852 124.852 44.6207 124.852 45.6134ZM124.854 39.5165C124.854 40.4567 124.821 41.0175 124.87 41.5723C124.89 41.7882 125.054 42.109 125.223 42.1635C125.431 42.232 125.91 42.113 125.932 42.0061C126.058 41.4089 126.177 40.7774 126.088 40.1883C126.054 39.9684 125.458 39.8312 124.854 39.5165Z'
                      fill='#000082'
                    />
                    <path
                      d='M136.61 39.2764C136.806 39.2764 137.22 39.2764 137.636 39.2764C137.636 41.4593 137.636 43.606 137.636 45.8131C137.274 45.8131 136.858 45.8131 136.509 45.8131C136.509 44.8366 136.509 43.8945 136.509 42.8736C136.078 42.8736 135.63 42.8736 135.145 42.8736C135.145 43.842 135.145 44.8064 135.145 45.8232C134.828 45.8232 134.404 45.8232 134.03 45.8232C134.03 43.6503 134.03 41.5058 134.03 39.2885C134.408 39.2885 134.846 39.2885 135.028 39.2885C135.028 40.152 134.977 40.9651 135.064 41.762C135.086 41.9617 135.549 42.2462 135.812 42.2482C136.076 42.2502 136.553 41.9718 136.573 41.7781C136.66 40.9752 136.61 40.1581 136.61 39.2764Z'
                      fill='#000082'
                    />
                    <path
                      d='M97.9934 23.2192C97.9934 20.9434 97.9934 18.815 97.9934 16.4061C98.9894 16.6159 100.21 16.5837 101.002 17.1506C101.452 17.4734 101.198 18.7747 101.123 19.6462C101.689 20.5742 101.824 21.704 101.238 22.5736C100.458 23.7336 99.0824 23.0558 97.9934 23.2192ZM99.0621 22.8399C99.5955 22.6623 100.311 22.5877 100.351 22.3839C100.484 21.694 100.46 20.9394 100.309 20.2494C100.268 20.0679 99.547 20.0356 99.0642 19.9166C99.0621 20.9414 99.0621 21.7424 99.0621 22.8399ZM99.0298 16.9307C99.0298 17.8406 98.9995 18.4317 99.0379 19.0208C99.0884 19.8096 99.8258 19.7067 99.9915 19.392C100.27 18.8675 100.311 18.1573 100.25 17.546C100.23 17.3402 99.5915 17.199 99.0298 16.9307Z'
                      fill='#000082'
                    />
                    <path
                      d='M112.546 16.6282C112.95 16.6282 113.37 16.6282 113.693 16.6282C113.693 17.6127 113.693 18.5529 113.693 19.5616C114.152 19.5616 114.6 19.5616 115.204 19.5616C115.158 18.5529 115.116 17.6147 115.071 16.6302C115.332 16.6302 115.782 16.6302 116.178 16.6302C116.178 18.8333 116.178 20.9859 116.178 23.1789C115.845 23.1789 115.382 23.1789 115.079 23.1789C115.122 22.2126 115.164 21.2724 115.208 20.2496C114.641 20.2496 114.188 20.2496 113.697 20.2496C113.697 21.2079 113.697 22.1742 113.697 23.1749C113.364 23.1749 112.94 23.1749 112.548 23.1749C112.546 20.9819 112.546 18.8313 112.546 16.6282Z'
                      fill='#000082'
                    />
                    <path
                      d='M107.259 16.6221C107.695 16.6221 108.085 16.6221 108.41 16.6221C108.41 17.6147 108.41 18.5549 108.41 19.5576C108.887 19.5576 109.333 19.5576 109.936 19.5576C109.889 18.5468 109.847 17.6087 109.8 16.6262C110.037 16.6262 110.459 16.6262 110.905 16.6262C110.905 18.7889 110.905 20.9557 110.905 23.1689C110.584 23.1689 110.129 23.1689 109.792 23.1689C109.839 22.1985 109.883 21.2341 109.931 20.2193C109.344 20.2193 108.915 20.2193 108.426 20.2193C108.426 21.1958 108.426 22.1581 108.426 23.1709C108.093 23.1709 107.638 23.1709 107.259 23.1709C107.259 20.99 107.259 18.8434 107.259 16.6221Z'
                      fill='#000082'
                    />
                    <path
                      d='M75.6103 8.60259C75.6103 7.99734 75.5598 7.38806 75.6225 6.78887C75.7235 5.78416 76.374 5.2233 77.3741 5.18699C78.4105 5.14866 79.1964 5.70145 79.2671 6.73036C79.358 8.03164 79.36 9.35108 79.257 10.6503C79.1782 11.6672 78.366 12.2119 77.3357 12.1534C76.3356 12.0949 75.7356 11.5279 75.6063 10.5192C75.5982 10.4526 75.5901 10.386 75.5901 10.3175C75.5881 9.7465 75.5901 9.17354 75.5901 8.60259C75.5962 8.60259 75.6043 8.60259 75.6103 8.60259ZM78.3176 8.65303C78.3236 8.65303 78.3317 8.65303 78.3378 8.65303C78.3378 8.01752 78.4509 7.35175 78.2974 6.75457C78.2004 6.3773 77.7034 6.10494 77.3862 5.78416C77.1054 6.10293 76.6084 6.40353 76.5841 6.74045C76.4912 8.03971 76.4932 9.35511 76.5922 10.6544C76.6164 10.9792 77.1357 11.2657 77.4286 11.5703C77.7256 11.2657 78.2024 11.0014 78.2772 10.6503C78.4166 10.0128 78.3176 9.32081 78.3176 8.65303Z'
                      fill='#000082'
                    />
                    <path
                      d='M94.5064 11.8567C93.7972 12.123 93.3588 11.891 93.173 11.1627C93.0336 10.6119 92.981 10.0248 92.7548 9.5124C92.6012 9.16539 92.2174 8.91926 91.9365 8.62874C91.8517 8.68725 91.7668 8.74575 91.682 8.80426C91.682 9.80292 91.682 10.7996 91.682 11.8567C91.3769 11.8567 90.9567 11.8567 90.5526 11.8567C90.5526 9.75853 90.5526 7.67649 90.5526 5.51979C90.9041 5.51979 91.286 5.51979 91.6597 5.51979C91.6597 6.37117 91.6597 7.24474 91.6597 8.18489C92.577 8.09814 92.5224 7.28711 92.7285 6.73029C92.977 6.05039 93.1346 5.34226 94.1548 5.48953C93.8094 6.42766 93.472 7.34562 93.1932 8.09814C93.6457 9.39337 94.0538 10.5635 94.5064 11.8567Z'
                      fill='#000082'
                    />
                    <path
                      d='M74.2365 39.2724C74.4426 39.2724 74.8305 39.2724 75.2729 39.2724C75.2729 41.4493 75.2729 43.616 75.2729 45.8272C74.9355 45.8272 74.5416 45.8272 74.1395 45.8272C74.1395 44.8528 74.1395 43.8864 74.1395 42.8575C73.6567 42.8575 73.2082 42.8575 72.7576 42.8575C72.7576 43.8682 72.7576 44.8124 72.7576 45.8171C72.4586 45.8171 72.0344 45.8171 71.6444 45.8171C71.6444 43.6624 71.6444 41.4977 71.6444 39.2764C72.0344 39.2764 72.4566 39.2764 72.7556 39.2764C72.7152 40.0451 72.6849 40.7936 72.6344 41.5401C72.596 42.111 72.8607 42.2926 73.4122 42.3006C74.0082 42.3087 74.2749 42.115 74.2426 41.4936C74.2082 40.7734 74.2365 40.0532 74.2365 39.2724Z'
                      fill='#000082'
                    />
                    <path
                      d='M61.151 34.622C60.8136 34.622 60.363 34.622 59.9933 34.622C59.9933 32.4169 59.9933 30.2683 59.9933 28.0813C60.3994 28.0813 60.7833 28.0813 61.1267 28.0813C61.0903 28.6967 61.0318 29.2515 61.0277 29.8063C61.0136 31.1782 61.0237 31.1782 62.4945 30.9926C62.4945 30.0342 62.4945 29.0719 62.4945 28.0652C62.7894 28.0652 63.1854 28.0652 63.6359 28.0652C63.6359 30.236 63.6359 32.3987 63.6359 34.62C63.3167 34.62 62.8662 34.62 62.4419 34.62C62.5025 34.0329 62.6076 33.4377 62.6177 32.8406C62.642 31.4646 62.6036 31.4485 61.153 31.6846C61.151 32.6388 61.151 33.6012 61.151 34.622Z'
                      fill='#000082'
                    />
                    <path
                      d='M80.7339 5.32823C81.1399 5.32823 81.6309 5.32218 82.1218 5.33025C83.8896 5.35849 84.5139 6.29259 83.9239 7.95903C83.8351 8.2092 83.8512 8.5784 83.9765 8.80839C84.9179 10.5293 84.1118 11.9738 82.1622 12.0061C81.6652 12.0142 81.1682 12.0081 80.7339 12.0081C80.7339 9.75459 80.7339 7.5979 80.7339 5.32823ZM81.7299 11.7358C82.3461 11.4311 83.0673 11.2899 83.136 10.9953C83.2855 10.3619 83.1502 9.63758 83.0128 8.97584C82.9845 8.84269 82.4107 8.72164 82.1279 8.78015C81.9562 8.81646 81.7683 9.2018 81.7481 9.44188C81.6955 10.1016 81.7299 10.7654 81.7299 11.7358ZM82.0188 5.72366C81.9218 5.81444 81.8269 5.90523 81.7299 5.99602C81.7299 6.55486 81.6976 7.11572 81.746 7.67255C81.7642 7.89043 81.9178 8.2092 82.0855 8.27376C82.2915 8.35042 82.7784 8.25156 82.8027 8.14867C82.9421 7.55957 83.0916 6.92809 83.0027 6.34706C82.9663 6.09487 82.3643 5.92944 82.0188 5.72366Z'
                      fill='#000082'
                    />
                    <path
                      d='M73.8991 7.00071C73.5597 5.84469 72.9314 5.68127 72.0303 5.94153C72.0303 6.5851 72.0303 7.26096 72.0303 7.93682C74.281 8.48557 74.7396 9.05047 74.3517 10.7774C74.0991 11.8971 72.9334 12.2724 70.9333 11.877C70.9333 9.75054 70.9333 7.62411 70.9333 5.33426C71.8142 5.33426 72.7577 5.20716 73.6466 5.37058C74.4749 5.52794 74.0648 6.19371 73.8991 7.00071ZM71.9334 9.95229C71.9334 10.2347 71.8788 10.4567 71.9455 10.6342C72.0566 10.9267 72.2445 11.191 72.398 11.4674C72.7395 11.2193 73.1072 10.9994 73.4042 10.7088C73.5112 10.6019 73.4688 10.3235 73.4627 10.1238C73.4365 9.47414 73.6102 8.64092 72.6061 8.61469C71.4465 8.58443 72.1536 9.55484 71.9334 9.95229Z'
                      fill='#000082'
                    />
                    <path
                      d='M98.2197 39.2582C99.3168 39.2582 100.381 39.2582 101.333 39.2582C101.333 41.1304 101.309 42.9582 101.357 44.7841C101.365 45.0827 101.763 45.353 101.848 45.6718C101.937 46.0067 101.868 46.3819 101.868 46.6543C101.382 46.386 100.943 46.0208 100.446 45.9018C99.9067 45.7726 99.2925 45.7807 98.747 45.8977C98.246 46.0067 97.7955 46.3396 97.1126 46.6765C97.2783 46.2084 97.4399 45.7404 97.6096 45.2743C97.7308 44.9394 97.9329 44.6186 97.9773 44.2736C98.149 42.9461 98.2884 41.6166 98.3995 40.2831C98.4258 39.9845 98.2965 39.6677 98.2197 39.2582ZM98.5026 45.3651C99.0117 45.3651 99.4521 45.4115 99.8724 45.3449C100.074 45.3127 100.398 45.0706 100.4 44.9152C100.438 43.2185 100.424 41.5198 100.424 39.8453C99.8724 39.8453 99.4885 39.8453 99.0784 39.8453C98.8885 41.6832 98.7046 43.4445 98.5026 45.3651Z'
                      fill='#000082'
                    />
                    <path
                      d='M63.1167 19.8904C63.1167 20.4956 63.1611 21.1029 63.1066 21.7021C63.0116 22.7774 62.2702 23.421 61.2277 23.4028C60.1812 23.3846 59.4639 22.7269 59.4155 21.6314C59.367 20.4916 59.367 19.3456 59.4155 18.2058C59.4619 17.086 60.2559 16.3638 61.3004 16.392C62.3288 16.4203 63.0338 17.0921 63.1167 18.1775C63.1591 18.7444 63.1248 19.3194 63.1248 19.8904C63.1207 19.8904 63.1187 19.8904 63.1167 19.8904ZM62.2338 19.963C62.1934 19.2205 62.2399 18.5003 62.0782 17.8285C62.0015 17.5077 61.5267 17.0699 61.2358 17.0739C60.9509 17.076 60.4438 17.5561 60.4256 17.8507C60.3367 19.2165 60.3347 20.5945 60.4196 21.9603C60.4377 22.2609 60.9287 22.7451 61.2176 22.7552C61.5045 22.7653 61.9893 22.3315 62.0702 22.0148C62.2338 21.347 62.1914 20.6247 62.2338 19.963Z'
                      fill='#000082'
                    />
                    <path
                      d='M108.463 43.6585C108.507 44.3908 108.55 45.0707 108.596 45.8091C108.24 45.8091 107.822 45.8091 107.444 45.8091C107.444 43.6463 107.444 41.5018 107.444 39.3451C109.352 38.8972 110.681 39.3471 110.919 40.5495C111.321 42.5892 110.794 43.3034 108.463 43.6585ZM108.485 43.1238C109.042 42.9463 109.731 42.8636 109.75 42.7022C109.853 41.8387 109.824 40.953 109.74 40.0855C109.727 39.9624 109.152 39.799 108.861 39.8373C108.709 39.8575 108.515 40.2671 108.501 40.5092C108.457 41.302 108.485 42.0989 108.485 43.1238Z'
                      fill='#000082'
                    />
                    <path
                      d='M84.8149 21.0403C84.8695 21.7606 84.922 22.4405 84.9765 23.1648C84.6068 23.1648 84.1826 23.1648 83.7906 23.1648C83.7906 21.002 83.7906 18.8413 83.7906 16.6624C85.8655 16.2912 87.0595 16.7068 87.2857 17.9294C87.6494 19.9065 87.209 20.4936 84.8149 21.0403ZM84.8432 20.5662C85.4473 20.3201 86.1079 20.2112 86.1382 20.0094C86.2594 19.1843 86.2352 18.3248 86.1443 17.4936C86.1281 17.3463 85.5321 17.191 85.2048 17.191C85.0856 17.191 84.8755 17.6247 84.8614 17.8709C84.8169 18.6597 84.8432 19.4526 84.8432 20.5662Z'
                      fill='#000082'
                    />
                    <path
                      d='M79.8065 28.1198C82.0531 27.7627 83.0936 28.1419 83.2855 29.3988C83.6067 31.5132 83.1744 32.072 80.8248 32.3766C80.8732 33.0969 80.9238 33.8272 80.9763 34.616C80.6268 34.616 80.1803 34.616 79.8065 34.616C79.8065 32.419 79.8065 30.2704 79.8065 28.1198ZM80.8409 32.0155C81.4773 31.6867 82.142 31.5434 82.1986 31.2731C82.3521 30.5448 82.3178 29.7479 82.1986 29.0054C82.1662 28.8057 81.5682 28.6503 81.2086 28.5838C81.1298 28.5696 80.8712 29.0155 80.8571 29.2596C80.8106 30.0545 80.8409 30.8534 80.8409 32.0155Z'
                      fill='#000082'
                    />
                    <path
                      d='M89.6333 39.2663C92.1385 39.0585 92.9891 39.4197 93.1527 40.7895C93.3891 42.7707 92.9547 43.2973 90.6374 43.6705C90.6839 44.3585 90.7304 45.0626 90.7789 45.8111C90.7526 45.8171 90.6253 45.8595 90.496 45.8655C90.197 45.8776 89.898 45.8696 89.6354 45.8696C89.6333 43.6544 89.6333 41.4957 89.6333 39.2663ZM90.6475 42.8454C90.7344 42.9442 90.8213 43.0431 90.9082 43.1419C91.2981 42.9382 91.9628 42.7929 92.0234 42.5165C92.183 41.7963 92.1486 41.0074 92.0294 40.2711C91.9971 40.0653 91.4092 39.8857 91.0556 39.8353C90.9566 39.8212 90.6839 40.2993 90.6657 40.5636C90.6132 41.3201 90.6475 42.0848 90.6475 42.8454Z'
                      fill='#000082'
                    />
                    <path
                      d='M69.709 42.0263C69.709 42.4035 69.709 42.7667 69.709 43.1278C69.3231 43.0512 68.8362 42.803 68.5998 42.9523C68.3756 43.0935 68.3816 43.6483 68.3433 44.0256C68.3049 44.421 68.3352 44.8225 68.3352 45.2522C69.2039 45.5185 69.8888 45.4721 70.3717 44.5542C70.3717 44.9496 70.3717 45.343 70.3717 45.8091C69.2908 45.8091 68.2342 45.8091 67.2523 45.8091C67.2523 43.6261 67.2523 41.4775 67.2523 39.2704C68.2382 39.2704 69.2625 39.2704 70.3171 39.2704C70.3171 39.7324 70.3171 40.1359 70.3171 40.8642C69.7656 39.9765 69.309 39.4096 68.3352 39.9745C68.3352 40.3094 68.3332 40.7351 68.3352 41.1628C68.3372 42.458 68.4928 42.5609 69.709 42.0263Z'
                      fill='#000082'
                    />
                    <path
                      d='M88.0737 28.2307C88.0959 28.4123 88.1807 28.6504 88.1363 28.8642C88.0716 29.183 87.9181 29.4836 87.8009 29.7923C87.5767 29.5764 87.3645 29.3444 87.1221 29.1507C86.8574 28.9389 86.5504 28.5939 86.2877 28.6161C86.013 28.6383 85.5564 29.0175 85.5463 29.2596C85.4755 30.6961 85.4675 32.1406 85.5463 33.5771C85.5604 33.8272 86.0938 34.2348 86.3806 34.2287C86.6675 34.2227 87.1039 33.8393 87.1968 33.5347C87.3706 32.9658 87.5666 32.7035 88.1585 32.9738C88.1504 34.2025 87.6171 34.7916 86.4695 34.8461C85.3604 34.9005 84.5745 34.2569 84.5159 33.1332C84.4573 31.9933 84.4533 30.8474 84.5098 29.7095C84.5705 28.493 85.419 27.9019 86.6736 28.0875C87.0857 28.146 87.506 28.1722 88.0737 28.2307Z'
                      fill='#000082'
                    />
                    <path
                      d='M59.6821 11.9758C59.4417 11.9658 59.1872 11.9537 58.9771 11.9436C59.4498 9.98459 59.8882 8.06999 60.3892 6.17154C60.4721 5.85883 60.8155 5.61471 61.0378 5.33832C61.258 5.62077 61.5873 5.87093 61.6762 6.1897C62.2035 8.0821 62.6742 9.99064 63.1773 11.9476C62.8136 11.9476 62.4277 11.9476 62.0863 11.9476C61.951 11.4009 61.9227 10.8097 61.6439 10.382C61.5085 10.1722 60.8964 10.2005 60.5105 10.2408C59.4013 10.3558 59.8478 11.2334 59.6821 11.9758ZM60.9832 6.86757C60.9004 6.86555 60.8176 6.86152 60.7347 6.8595C60.5185 7.76333 60.3024 8.66919 60.0721 9.62749C60.6236 9.62749 61.064 9.62749 61.6035 9.62749C61.3832 8.64296 61.1832 7.75527 60.9832 6.86757Z'
                      fill='#000082'
                    />
                    <path
                      d='M76.5841 34.0612C77.3539 34.144 78.1297 34.3618 78.5499 33.3672C78.5499 33.7647 78.5499 34.1641 78.5499 34.6241C77.4771 34.6241 76.4144 34.6241 75.481 34.6241C75.5154 33.5649 75.5639 32.5017 75.58 31.4385C75.5982 30.343 75.5841 29.2455 75.5841 28.0854C76.4185 28.0854 77.4407 28.0854 78.5317 28.0854C78.5317 28.5253 78.5317 28.953 78.5317 29.4957C78.3196 29.3686 78.1438 29.3242 78.1216 29.2415C77.9579 28.5898 77.4872 28.2832 76.9417 28.5596C76.675 28.6947 76.5983 29.302 76.5336 29.7115C76.4669 30.1292 76.5195 30.5649 76.5195 31.1218C77.0286 31.0431 77.3963 30.9886 77.8307 30.922C77.8307 31.1742 77.8307 31.5132 77.8307 31.8299C77.4266 31.7593 77.0589 31.6927 76.5841 31.61C76.5841 32.4755 76.5841 33.23 76.5841 34.0612Z'
                      fill='#000082'
                    />
                    <path
                      d='M89.0758 10.1157C89.2132 11.5663 88.7546 12.0767 87.6212 12.1534C86.4857 12.2301 85.6695 11.651 85.5887 10.5434C85.5019 9.34102 85.4938 8.12448 85.5847 6.92205C85.6675 5.82253 86.5524 5.25359 87.6616 5.41096C88.1121 5.47552 88.5646 5.51788 89.1707 5.5885C89.1889 5.78419 89.2738 6.10699 89.2293 6.41163C89.193 6.65776 88.997 6.8817 88.8717 7.11573C88.6738 6.95433 88.4778 6.79092 88.2778 6.63355C87.9666 6.39146 87.603 5.92138 87.3464 5.97384C87.0353 6.03638 86.613 6.52663 86.5908 6.85548C86.5019 8.12448 86.4958 9.40558 86.5948 10.6726C86.6211 11.0115 87.1343 11.3141 87.4232 11.6329C87.7383 11.3464 88.0535 11.0599 88.3667 10.7714C88.6051 10.5555 88.8394 10.3356 89.0758 10.1157Z'
                      fill='#000082'
                    />
                    <path
                      d='M68.2908 16.8358C68.2908 17.2978 68.2908 17.7598 68.2908 18.6072C67.8463 18.2642 67.5877 18.0746 67.3412 17.8728C67.0563 17.6408 66.719 17.1607 66.5149 17.2131C66.1816 17.2978 65.7149 17.7155 65.6947 18.0181C65.6098 19.3537 65.6138 20.7013 65.7068 22.0369C65.727 22.3254 66.222 22.741 66.5513 22.7955C66.7917 22.8358 67.2604 22.4323 67.3675 22.1358C67.5473 21.6314 67.6503 21.238 68.2928 21.5043C68.414 22.6502 67.9998 23.197 66.8866 23.3765C65.8623 23.542 64.8663 23.0477 64.7875 22.1297C64.6663 20.7316 64.6643 19.3113 64.7694 17.9132C64.838 16.9972 65.7835 16.4828 66.7311 16.6301C67.2038 16.7027 67.6826 16.7572 68.2908 16.8358Z'
                      fill='#000082'
                    />
                    <path
                      d='M117.623 23.1567C117.623 21.008 117.623 18.8655 117.623 16.6483C117.958 16.6483 118.435 16.6483 118.845 16.6483C118.764 17.4008 118.682 18.1694 118.617 18.7707C119.504 19.1883 120.423 19.3698 120.896 19.9267C121.261 20.3584 121.193 21.2804 121.098 21.9542C120.936 23.1103 120.001 23.3927 117.623 23.1567ZM118.653 22.5696C118.746 22.6543 118.839 22.737 118.932 22.8218C119.322 22.5857 120.023 22.3698 120.041 22.1056C120.096 21.3288 120.053 20.4452 119.712 19.7774C119.459 19.2851 118.684 19.6523 118.659 20.2838C118.631 21.0444 118.653 21.807 118.653 22.5696Z'
                      fill='#000082'
                    />
                    <path
                      d='M82.8108 23.1749C82.4794 23.1749 82.0855 23.1749 81.7137 23.1749C81.5945 22.6423 81.5642 22.0653 81.3178 21.6073C81.2167 21.4176 80.647 21.4277 80.2935 21.4378C79.0186 21.4701 79.5177 22.4688 79.3924 23.1729C79.1116 23.1729 78.8247 23.1729 78.6328 23.1729C79.0974 21.224 79.552 19.2831 80.0308 17.3504C80.0975 17.0821 80.2248 16.7008 80.4248 16.6201C80.9258 16.4163 81.1804 16.7008 81.3077 17.2314C81.7804 19.2085 82.3017 21.1755 82.8108 23.1749ZM79.7136 20.8689C80.3036 20.8689 80.7137 20.8689 81.2531 20.8689C81.0187 19.846 80.8086 18.9261 80.5985 18.0061C80.5218 17.998 80.447 17.992 80.3702 17.9839C80.1621 18.8978 79.954 19.8117 79.7136 20.8689Z'
                      fill='#000082'
                    />
                    <path
                      d='M122.872 45.8211C122.468 45.8211 122.078 45.8211 121.69 45.8211C121.635 44.2454 121.472 44.0598 120.326 44.0921C119.033 44.1284 119.524 45.119 119.387 45.8231C119.134 45.8231 118.875 45.8231 118.621 45.8231C118.595 45.7585 118.544 45.7 118.556 45.6576C118.989 44.0094 119.427 42.3651 119.861 40.7168C119.946 40.394 119.952 40.0349 120.102 39.7464C120.215 39.5265 120.494 39.2562 120.696 39.2562C120.89 39.2582 121.193 39.5507 121.253 39.7706C121.647 41.193 121.979 42.6314 122.346 44.0598C122.494 44.6348 122.684 45.1997 122.872 45.8211ZM119.718 43.5272C120.326 43.5272 120.738 43.5272 121.267 43.5272C121.035 42.5205 120.825 41.6166 120.617 40.7108C120.534 40.7148 120.449 40.7188 120.366 40.7209C120.158 41.6186 119.95 42.5164 119.718 43.5272Z'
                      fill='#000082'
                    />
                    <path
                      d='M143 45.8212C142.642 45.8212 142.281 45.8212 141.925 45.8212C141.798 45.2966 141.774 44.7015 141.497 44.2677C141.362 44.0559 140.747 44.074 140.364 44.1124C139.246 44.2233 139.673 45.103 139.588 45.801C139.331 45.801 139.048 45.801 138.731 45.801C138.842 45.5024 138.969 45.2381 139.038 44.9617C139.434 43.3296 139.792 41.6874 140.22 40.0633C140.303 39.7486 140.638 39.4984 140.856 39.218C141.081 39.4923 141.42 39.7344 141.507 40.0471C142.032 41.9476 142.501 43.8642 143 45.8212ZM141.459 43.5636C141.222 42.5307 141.016 41.6329 140.812 40.7331C140.723 40.7412 140.632 40.7492 140.543 40.7573C140.335 41.6692 140.127 42.5791 139.903 43.5636C140.477 43.5636 140.867 43.5636 141.459 43.5636Z'
                      fill='#000082'
                    />
                    <path
                      d='M106.032 23.1568C104.974 23.1568 103.907 23.1568 102.905 23.1568C102.905 21.0081 102.905 18.8454 102.905 16.6282C103.864 16.6282 104.915 16.6282 106.026 16.6282C106.026 17.0761 106.026 17.4917 106.026 18.0929C105.38 17.6369 105.034 16.6665 104.052 17.2778C104.052 17.9718 104.052 18.7304 104.052 19.6282C104.465 19.5798 104.86 19.5334 105.307 19.4789C105.307 19.7553 105.307 20.074 105.307 20.3968C104.917 20.3222 104.549 20.2536 104.067 20.1608C104.067 21.0202 104.067 21.7728 104.067 22.5999C104.814 22.8017 105.57 22.9046 106.032 21.8757C106.032 22.2832 106.032 22.6867 106.032 23.1568Z'
                      fill='#000082'
                    />
                    <path
                      d='M92.1507 21.5831C92.1365 22.7855 91.6577 23.3181 90.5162 23.3988C89.399 23.4775 88.5828 22.85 88.5242 21.7505C88.4636 20.5804 88.4575 19.4001 88.5181 18.23C88.5767 17.0901 89.502 16.4445 90.6213 16.6463C91.0617 16.7249 91.5102 16.7693 92.0577 16.842C92.0577 17.2354 92.0577 17.7135 92.0577 18.2663C91.6213 18.4398 91.2637 18.5588 91.1142 17.8164C91.0617 17.5561 90.593 17.1748 90.3667 17.2071C90.0576 17.2515 89.5727 17.6268 89.5566 17.883C89.4758 19.2811 89.4737 20.6893 89.5485 22.0874C89.5626 22.3537 90.0738 22.8198 90.3122 22.7935C90.6415 22.7572 90.9466 22.3618 91.2314 22.0854C91.4658 21.8574 91.6537 21.581 91.8618 21.3248C91.9608 21.4116 92.0557 21.4963 92.1507 21.5831Z'
                      fill='#000082'
                    />
                    <path
                      d='M102.371 34.6322C101.26 34.6322 100.2 34.6322 99.2561 34.6322C99.2561 32.4412 99.2561 30.2966 99.2561 28.0834C100.248 28.0834 101.27 28.0834 102.363 28.0834C102.363 28.5232 102.363 28.953 102.363 29.3807C102.301 29.4049 102.238 29.4311 102.175 29.4553C101.965 29.1588 101.816 28.7553 101.529 28.5959C101.25 28.4385 100.834 28.5293 100.408 28.5091C100.408 29.4049 100.408 30.1957 100.408 31.1177C100.858 31.033 101.25 30.9604 101.68 30.8817C101.68 31.1924 101.68 31.5132 101.68 31.844C101.276 31.7613 100.911 31.6867 100.426 31.5858C100.426 32.4533 100.426 33.2058 100.426 34.2509C101.095 34.0169 101.719 33.799 102.371 33.571C102.371 33.7425 102.371 34.1419 102.371 34.6322Z'
                      fill='#000082'
                    />
                    <path
                      d='M106.214 44.5421C106.214 44.9193 106.214 45.2986 106.214 45.7788C105.17 45.7788 104.085 45.7788 103.101 45.7788C103.101 43.6342 103.101 41.4836 103.101 39.2744C104.068 39.2744 105.119 39.2744 106.184 39.2744C106.184 39.7405 106.184 40.148 106.184 40.5656C105.584 40.2166 105.04 39.8978 104.242 39.4338C104.2 40.2489 104.159 40.6705 104.157 41.0902C104.153 42.4499 104.228 42.5044 105.501 42.109C105.501 42.4479 105.501 42.7748 105.501 43.0713C105.115 43.0068 104.681 42.801 104.418 42.9341C104.218 43.037 104.198 43.5636 104.165 43.9086C104.125 44.3383 104.155 44.7761 104.155 45.2462C105.034 45.569 105.703 45.4116 106.214 44.5421Z'
                      fill='#000082'
                    />
                    <path
                      d='M94.3245 23.1768C94.3245 21.121 94.3245 19.1721 94.3245 17.2232C94.2578 17.1668 94.1912 17.1123 94.1245 17.0558C93.8235 17.4189 93.5244 17.7841 93.0921 18.3066C93.0921 17.655 93.0921 17.191 93.0921 16.6442C94.3063 16.6442 95.5246 16.6442 96.8014 16.6442C96.8014 17.1405 96.8014 17.6106 96.8014 18.0928C96.662 18.0686 96.5771 18.0807 96.5448 18.0444C96.2801 17.7538 96.0256 17.4553 95.767 17.1587C95.6538 17.538 95.4599 17.9132 95.4417 18.2965C95.3952 19.2992 95.4033 20.308 95.4357 21.3107C95.4538 21.92 95.5589 22.5292 95.6276 23.1728C95.2316 23.1768 94.7387 23.1768 94.3245 23.1768Z'
                      fill='#000082'
                    />
                    <path
                      d='M58.4659 6.7525C58.1709 6.48014 57.8598 6.19164 57.5487 5.90516C57.4436 6.32682 57.2679 6.74645 57.2497 7.17214C57.2072 8.24343 57.2153 9.31673 57.2436 10.39C57.2557 10.8702 57.3628 11.3504 57.4396 11.9132C57.0638 11.9132 56.5951 11.9132 56.1567 11.9132C56.1567 9.92601 56.1567 7.95089 56.1567 5.97577C56.088 5.91928 56.0193 5.86279 55.9506 5.8063C55.6435 6.1634 55.3364 6.52251 54.9102 7.02083C54.9102 6.39743 54.9102 5.93542 54.9102 5.34027C56.0274 5.34027 57.1264 5.2979 58.2214 5.3564C58.7912 5.38465 58.8639 6.02823 58.4659 6.7525Z'
                      fill='#000082'
                    />
                    <path
                      d='M105.923 34.6302C105.467 34.6302 104.941 34.6302 104.414 34.6302C104.939 32.7963 104.588 30.9362 104.667 29.0983C104.675 28.9227 104.467 28.7371 104.359 28.5576C104.165 28.6988 103.945 28.8138 103.788 28.9873C103.652 29.1366 103.59 29.3505 103.317 29.4997C103.317 29.066 103.317 28.6302 103.317 28.027C104.398 28.027 105.509 27.908 106.58 28.0633C107.499 28.1965 106.949 28.9671 106.998 29.5058C106.855 29.4816 106.77 29.4917 106.739 29.4574C106.475 29.1628 106.22 28.8582 105.962 28.5576C105.846 28.9349 105.646 29.3081 105.632 29.6894C105.59 30.8615 105.592 32.0357 105.63 33.2079C105.642 33.6376 105.8 34.0653 105.923 34.6302Z'
                      fill='#000082'
                    />
                    <path
                      d='M94.2598 28.0228C95.4902 28.0228 96.5387 27.9381 97.5651 28.0471C98.6197 28.158 98.0459 28.9408 98.0944 29.4976C97.9509 29.4795 97.8641 29.4956 97.8338 29.4613C97.5691 29.1627 97.3145 28.8561 97.0559 28.5514C96.9388 28.961 96.7388 29.3685 96.7206 29.7821C96.6741 30.8877 96.6781 31.9993 96.7165 33.1049C96.7327 33.575 96.8802 34.041 96.9832 34.5857C96.5711 34.5857 96.0337 34.5857 95.7569 34.5857C95.7569 32.7095 95.7629 30.8272 95.7448 28.9428C95.7427 28.8157 95.5771 28.5938 95.4781 28.5877C95.3124 28.5777 95.074 28.6604 94.9811 28.7875C94.8296 28.9933 94.771 29.2676 94.674 29.5118C94.579 29.5218 94.4861 29.5299 94.3911 29.54C94.3507 29.0921 94.3124 28.6463 94.2598 28.0228Z'
                      fill='#000082'
                    />
                    <path
                      d='M69.0645 16.608C69.812 16.3659 70.2605 16.729 70.4868 17.5623C70.6969 18.3309 70.9838 19.0774 71.495 19.8582C71.794 18.8192 72.095 17.7781 72.4324 16.606C72.5213 16.6019 72.8405 16.5858 73.1456 16.5697C72.4768 18.5085 71.8344 20.421 71.1555 22.3175C70.8101 23.2838 70.5252 23.4009 69.709 23.1366C70.008 22.8017 70.4828 22.4849 70.608 22.0653C70.7454 21.6033 70.6505 21.0182 70.4949 20.5381C70.0625 19.2146 69.5474 17.9173 69.0645 16.608Z'
                      fill='#000082'
                    />
                    <path
                      d='M57.3325 31.2024C57.6315 30.2057 57.9325 29.2091 58.276 28.0632C58.3144 28.0611 58.5932 28.043 58.8558 28.0248C58.8942 28.1378 58.9387 28.2004 58.9245 28.2427C58.2861 30.0726 57.6477 31.9045 56.9951 33.7303C56.7385 34.4505 56.3385 34.9589 55.5122 34.6361C55.8516 34.2064 56.3244 33.8433 56.4476 33.3853C56.5708 32.9273 56.4193 32.3523 56.2638 31.8702C55.8536 30.6052 55.3748 29.3624 54.9142 28.0793C55.6031 27.8392 56.0415 28.1217 56.2678 28.9226C56.486 29.6913 56.789 30.4357 57.0537 31.1903C57.1487 31.1923 57.2416 31.1963 57.3325 31.2024Z'
                      fill='#000082'
                    />
                    <path
                      d='M85.3099 45.8311C84.9281 45.8311 84.4997 45.8311 84.1624 45.8311C84.1624 43.6281 84.1624 41.4673 84.1624 39.2582C85.0998 39.2582 86.1301 39.2582 87.2393 39.2582C87.2393 39.7242 87.2393 40.1701 87.2393 40.7975C86.6635 40.1701 86.2696 39.3026 85.3099 39.9159C85.3099 41.8285 85.3099 43.7874 85.3099 45.8311Z'
                      fill='#000082'
                    />
                    <path
                      d='M56.4012 17.2294C56.4012 19.1682 56.4012 21.113 56.4012 23.1386C56.0699 23.1386 55.5971 23.1386 55.2436 23.1386C55.2436 21.0001 55.2436 18.8474 55.2436 16.6342C56.1729 16.6342 57.2214 16.6342 58.3407 16.6342C58.3407 17.0821 58.3407 17.528 58.3407 18.3612C57.8174 17.3988 57.3366 16.7633 56.4012 17.2294Z'
                      fill='#000082'
                    />
                    <path
                      d='M122.15 16.6079C122.492 16.6079 122.92 16.6079 123.344 16.6079C123.344 18.7969 123.344 20.9576 123.344 23.1668C123.011 23.1668 122.552 23.1668 122.15 23.1668C122.15 20.9919 122.15 18.8171 122.15 16.6079Z'
                      fill='#000082'
                    />
                    <path
                      d='M125.993 15.1553C126.532 15.1553 127.07 15.1553 127.838 15.1553C127.498 15.4196 127.211 15.8231 126.908 15.8332C126.545 15.8453 126.167 15.5265 125.795 15.351C125.864 15.2844 125.928 15.2198 125.993 15.1553Z'
                      fill='#000082'
                    />
                    <path
                      d='M101.887 3.90576C102.497 3.90576 103.036 3.90576 103.81 3.90576C103.515 4.17207 103.293 4.52916 103 4.60381C102.45 4.74302 101.937 4.60785 101.887 3.90576Z'
                      fill='#000082'
                    />
                    <path
                      d='M4.42446 45.5891C4.42446 45.0625 4.42446 44.6691 4.42446 44.2737C4.42446 35.5925 4.41032 26.9132 4.43659 18.234C4.44265 16.5918 4.02444 14.8608 5.26088 13.3335C8.81663 13.4929 12.0936 11.9132 15.5362 11.076C16.0514 10.9509 16.4676 10.7955 16.4373 10.0975C16.4272 9.84733 16.7524 9.49225 17.0151 9.33892C17.4454 9.08875 17.9808 9.01814 18.4091 8.76596C18.6738 8.61061 19.0031 8.24343 18.9849 7.99528C18.9324 7.29521 19.2738 6.95829 19.8132 6.66172C23.6316 4.57161 27.448 4.56354 31.2785 6.62944C31.824 6.92399 32.1654 7.26293 32.1412 7.95694C32.1311 8.22124 32.4362 8.60052 32.6988 8.74982C33.1897 9.03025 33.7736 9.14323 34.2787 9.40146C34.4928 9.51243 34.7615 9.83321 34.7413 10.0329C34.6646 10.7592 35.0908 10.9388 35.6505 11.0941C38.0789 11.774 40.4871 12.5286 42.9337 13.1338C43.8913 13.3719 44.9298 13.2892 45.8268 13.3456C47.2532 14.9112 46.7461 16.7794 46.7521 18.5326C46.7885 27.1109 46.7683 35.6913 46.7683 44.2697C46.7683 44.6631 46.7683 45.0585 46.7683 45.5871C46.2794 45.5871 45.9197 45.5871 45.5601 45.5871C42.2589 45.5871 38.9598 45.573 35.6606 45.6093C35.303 45.6133 34.9514 45.9159 34.5878 46.0531C34.3231 46.154 34.0443 46.275 33.7696 46.275C28.3147 46.2871 22.8578 46.2932 17.403 46.2609C17.0615 46.2589 16.7322 45.9079 16.3746 45.7787C16.0756 45.6698 15.7463 45.5951 15.4311 45.5931C12.1986 45.579 8.96614 45.5851 5.73161 45.5851C5.33765 45.5891 4.94369 45.5891 4.42446 45.5891ZM16.9262 38.0861C22.7225 38.0861 28.4238 38.0861 34.2241 38.0861C34.2241 37.6099 34.2241 37.2145 34.2241 36.8171C34.2241 30.7323 34.2241 24.6476 34.2221 18.5608C34.2221 15.9724 34.2363 13.384 34.2059 10.7955C34.2019 10.4808 34.0463 9.96838 33.8342 9.8897C31.5573 9.04033 29.4178 7.90247 26.8298 7.87221C23.67 7.8359 20.7001 8.23939 17.8394 9.6012C17.1121 9.9482 16.8514 10.2851 16.8535 11.08C16.8797 19.7209 16.8696 28.3598 16.8716 37.0007C16.8716 37.3598 16.906 37.7209 16.9262 38.0861ZM46.3016 42.7787C46.3299 42.5124 46.3602 42.349 46.3602 42.1836C46.3642 34.3194 46.3561 26.4532 46.3784 18.5891C46.3804 17.8386 46.0672 17.7034 45.4126 17.7075C42.1822 17.7296 38.9537 17.7498 35.7232 17.6974C34.806 17.6812 34.604 17.9899 34.608 18.8514C34.6383 26.4815 34.6262 34.1116 34.6282 41.7397C34.6282 42.0666 34.6585 42.3954 34.6787 42.7787C38.5739 42.7787 42.3923 42.7787 46.3016 42.7787ZM16.3928 17.7175C15.9463 17.7175 15.615 17.7175 15.2837 17.7175C12.1865 17.7175 9.08735 17.7599 5.99223 17.6933C4.97803 17.6711 4.78004 18.0181 4.78408 18.9563C4.82045 26.4896 4.80428 34.0249 4.80226 41.5582C4.80226 41.9496 4.80226 42.3389 4.80226 42.7545C8.754 42.7545 12.5663 42.7545 16.3928 42.7545C16.3928 34.4082 16.3928 26.1446 16.3928 17.7175ZM28.0561 40.9227C26.5106 40.9227 25.1044 40.8924 23.7023 40.9549C23.5023 40.963 23.169 41.4068 23.1548 41.6631C23.0942 42.7666 23.1306 43.8762 23.1265 44.9859C23.1245 45.4438 23.1326 45.9684 23.7771 45.805C24.0236 45.7424 24.3185 45.2966 24.3347 45.0121C24.3993 43.8843 24.3609 42.7525 24.3609 41.4896C24.8781 41.4896 25.2761 41.5279 25.662 41.4815C26.5065 41.3826 26.9025 41.6288 26.8136 42.573C26.7288 43.4707 26.7651 44.3867 26.8379 45.2885C26.854 45.4882 27.2278 45.7687 27.4682 45.8029C27.6379 45.8272 28.0218 45.5044 28.0278 45.3288C28.0763 43.8944 28.0561 42.46 28.0561 40.9227ZM34.7898 15.0262C38.59 15.0262 42.4286 15.0262 46.1723 15.0262C45.9278 14.5561 45.7238 14.1668 45.5036 13.7391C44.8611 13.7391 44.1722 13.7391 43.4812 13.7391C43.3984 14.0921 43.3297 14.3786 43.265 14.655C42.8024 14.655 42.3822 14.655 41.972 14.655C41.8993 14.306 41.8407 14.0235 41.7862 13.7653C39.681 13.4889 39.5436 13.5393 39.188 14.6873C38.7981 14.6873 38.4021 14.6873 37.9779 14.6873C37.891 14.3504 37.8122 14.0417 37.7395 13.7633C36.4222 13.5313 35.2262 13.4263 34.7898 15.0262ZM13.2815 14.661C12.7603 14.661 12.336 14.661 11.9299 14.661C11.6754 13.5333 11.3259 13.4223 9.34393 13.7935C9.26312 14.0901 9.18029 14.3947 9.1015 14.6853C8.63278 14.6853 8.2368 14.6853 7.81658 14.6853C7.74384 14.3423 7.67717 14.0316 7.61252 13.7249C6.88723 13.7249 6.22457 13.7249 5.63059 13.7249C5.38411 14.2253 5.174 14.651 4.98207 15.0444C8.76612 15.0444 12.5643 15.0444 16.31 15.0444C16.0696 14.5682 15.8655 14.1627 15.6574 13.7491C14.9119 13.7491 14.1583 13.7491 13.4048 13.7491C13.3563 14.0881 13.3219 14.3483 13.2815 14.661ZM31.7412 41.5783C31.7412 42.0121 31.7412 42.4055 31.7412 42.8009C31.7432 43.6402 31.7129 44.4815 31.7755 45.3147C31.7896 45.5003 32.1109 45.7283 32.3351 45.7969C32.426 45.8251 32.7634 45.4902 32.7675 45.3147C32.8038 43.8843 32.7877 42.4539 32.7877 40.9247C31.4745 40.9247 30.3047 40.8944 29.141 40.9549C28.945 40.965 28.6218 41.3564 28.6117 41.5824C28.5592 42.7888 28.5531 43.9993 28.6178 45.2038C28.6299 45.4277 29.036 45.6294 29.2582 45.8413C29.442 45.6274 29.7714 45.4216 29.7875 45.1957C29.8501 44.2939 29.8663 43.382 29.8017 42.4802C29.7431 41.651 30.0845 41.3847 30.8502 41.4896C31.1108 41.5218 31.3735 41.54 31.7412 41.5783ZM21.3487 41.5481C21.3487 42.8211 21.3143 43.9933 21.3769 45.1594C21.3891 45.3954 21.7709 45.6133 21.981 45.8393C22.1891 45.6113 22.5669 45.3914 22.579 45.1513C22.6417 43.9791 22.5952 42.8009 22.6134 41.6247C22.6215 41.1103 22.4154 40.9005 21.8982 40.9126C20.9567 40.9348 20.0132 40.9428 19.0738 40.9105C18.4919 40.8924 18.3121 41.1405 18.3242 41.6873C18.3485 42.7949 18.3 43.9065 18.3525 45.0121C18.3667 45.2905 18.6495 45.5588 18.8071 45.8312C19.001 45.5568 19.3445 45.2925 19.3607 45.0081C19.4253 43.8783 19.3869 42.7424 19.3869 41.5481C20.0637 41.5481 20.6213 41.5481 21.3487 41.5481ZM4.9356 15.6879C4.64064 17.2535 4.677 17.2999 6.15588 17.304C6.49125 17.304 6.8246 17.304 7.15997 17.304C8.57217 17.2999 8.68329 17.1446 8.27317 15.69C7.16199 15.6879 6.04072 15.6879 4.9356 15.6879ZM42.8186 15.696C42.5377 17.2313 42.5903 17.3019 43.9762 17.304C44.3459 17.304 44.7156 17.306 45.0854 17.304C46.4774 17.2999 46.5178 17.2495 46.247 15.696C45.1076 15.696 43.956 15.696 42.8186 15.696ZM42.2165 15.6315C41.176 15.6315 40.178 15.5972 39.188 15.6637C39.0103 15.6758 38.7193 16.1036 38.7294 16.3275C38.7436 16.6523 38.9638 17.2313 39.1335 17.2454C40.1457 17.3322 41.17 17.2878 42.2165 17.2878C42.2165 16.6684 42.2165 16.2105 42.2165 15.6315ZM38.1819 15.6315C37.1354 15.6315 36.1374 15.5911 35.1515 15.6658C34.9595 15.6799 34.6565 16.152 34.6666 16.4001C34.6787 16.7027 34.9494 17.2313 35.1454 17.2495C36.1313 17.3362 37.1273 17.2898 38.1819 17.2898C38.1819 16.7007 38.1819 16.2226 38.1819 15.6315ZM16.3767 17.2939C16.3767 16.6927 16.3767 16.2105 16.3767 15.6294C15.3544 15.6294 14.3887 15.581 13.4351 15.6678C13.227 15.6859 12.9138 16.1903 12.9179 16.4667C12.9219 16.7451 13.2391 17.2374 13.4533 17.2576C14.4048 17.3443 15.3685 17.2939 16.3767 17.2939ZM8.90351 15.6294C9.02675 16.2992 8.37822 17.1224 9.42475 17.2656C10.3703 17.3947 11.3461 17.2939 12.3886 17.2939C12.2694 16.62 12.9219 15.8009 11.8754 15.6577C10.9279 15.5265 9.95003 15.6294 8.90351 15.6294ZM17.8171 43.4142C17.8171 42.7787 17.8596 42.1412 17.7929 41.5118C17.7707 41.306 17.4737 41.1284 17.302 40.9388C17.1605 41.1244 16.904 41.306 16.8979 41.4936C16.8615 42.7626 16.8636 44.0336 16.9019 45.3006C16.908 45.4801 17.1848 45.6516 17.3363 45.8272C17.4959 45.6577 17.7747 45.4983 17.7929 45.3147C17.8495 44.6873 17.8151 44.0477 17.8171 43.4142ZM34.214 43.4142C34.2161 43.4142 34.216 43.4142 34.2181 43.4142C34.2181 42.7767 34.2504 42.1352 34.1979 41.4997C34.1817 41.304 33.9332 41.1305 33.7898 40.9448C33.6463 41.1224 33.3837 41.2979 33.3776 41.4795C33.3413 42.7545 33.3453 44.0336 33.3756 45.3087C33.3796 45.4802 33.5999 45.6456 33.7191 45.813C33.8847 45.6516 34.1736 45.5003 34.1898 45.3248C34.2484 44.6953 34.214 44.0538 34.214 43.4142Z'
                      fill='#000082'
                    />
                    <path
                      d='M23.7266 24.0464C25.0136 24.0464 26.2096 24.0464 27.4521 24.0464C27.4521 25.9086 27.4521 27.7041 27.4521 29.5582C26.1995 29.5582 25.0055 29.5582 23.7266 29.5582C23.7266 27.7223 23.7266 25.9328 23.7266 24.0464Z'
                      fill='#000082'
                    />
                    <path
                      d='M31.4725 32.0658C31.4866 32.3261 31.5028 32.6146 31.525 32.9959C27.5713 32.9959 23.6761 32.9959 19.7223 32.9959C19.6819 32.5036 19.389 31.9327 20.2638 31.9347C23.9185 31.9387 27.5753 31.9508 31.2301 31.9629C31.2907 31.9629 31.3513 32.0114 31.4725 32.0658Z'
                      fill='#000082'
                    />
                    <path
                      d='M26.7551 37.6786C25.9207 37.6786 25.2014 37.6786 24.3711 37.6786C24.3711 36.5085 24.3468 35.3767 24.3973 34.2489C24.4054 34.0734 24.7408 33.8131 24.963 33.7687C25.3489 33.69 25.7732 33.69 26.1591 33.7687C26.3813 33.8131 26.7207 34.0713 26.7288 34.2469C26.7793 35.3706 26.7551 36.4984 26.7551 37.6786Z'
                      fill='#000082'
                    />
                    <path
                      d='M28.9875 17.4835C28.147 18.696 27.5187 19.6422 26.8358 20.546C26.7005 20.7256 26.3348 20.8406 26.1045 20.8023C25.9449 20.776 25.7328 20.4371 25.7267 20.2333C25.6923 18.9704 25.7085 17.7054 25.7085 16.0914C26.8884 16.5938 27.8541 17.0033 28.9875 17.4835Z'
                      fill='#000082'
                    />
                    <path
                      d='M29.83 24.0384C30.3452 24.0384 30.7331 24.0384 31.2442 24.0384C31.2442 25.7573 31.2644 27.4237 31.216 29.0882C31.2099 29.2697 30.8078 29.5703 30.5796 29.5804C30.3371 29.5925 29.8684 29.3303 29.8644 29.1749C29.8098 27.4802 29.83 25.7815 29.83 24.0384Z'
                      fill='#000082'
                    />
                    <path
                      d='M23.1872 24.0364C23.1872 25.7916 23.2114 27.4601 23.1508 29.1265C23.1447 29.298 22.6518 29.5683 22.377 29.5784C22.1608 29.5865 21.7467 29.2677 21.7406 29.0841C21.6901 27.4197 21.7123 25.7512 21.7123 24.0344C22.2275 24.0364 22.6194 24.0364 23.1872 24.0364Z'
                      fill='#000082'
                    />
                    <path
                      d='M25.3146 16.0995C25.3146 17.7276 25.3287 19.0269 25.2984 20.3241C25.2944 20.5037 25.0903 20.8022 24.9469 20.8244C24.7449 20.8547 24.4257 20.7397 24.3044 20.5763C23.6135 19.6382 22.965 18.6677 22.1649 17.5077C23.2195 17.0356 24.1569 16.616 25.3146 16.0995Z'
                      fill='#000082'
                    />
                    <path
                      d='M19.8819 24.0424C20.4072 24.0424 20.7971 24.0424 21.3345 24.0424C21.3345 25.7633 21.3588 27.4338 21.3002 29.1023C21.2941 29.2818 20.8193 29.5643 20.5506 29.5804C20.3385 29.5925 19.9163 29.2738 19.9122 29.0922C19.8617 27.45 19.8819 25.8057 19.8819 24.0424Z'
                      fill='#000082'
                    />
                    <path
                      d='M28.0036 24.0141C28.4602 24.0141 28.8239 24.0141 29.2744 24.0141C29.2744 25.8581 29.2744 27.6718 29.2744 29.5521C28.8582 29.5521 28.4723 29.5521 28.0036 29.5521C28.0036 27.7364 28.0036 25.9226 28.0036 24.0141Z'
                      fill='#000082'
                    />
                    <path
                      d='M23.5023 22.0431C22.4719 21.4519 21.5204 20.9052 20.4173 20.2737C20.9062 19.4728 21.3628 18.7283 21.9062 17.8406C22.7447 19.0531 23.4639 20.0942 24.2094 21.1735C23.9872 21.4459 23.7811 21.6981 23.5023 22.0431Z'
                      fill='#000082'
                    />
                    <path
                      d='M27.6945 22.0107C26.945 21.5063 26.9268 21.0221 27.4319 20.3947C28.0359 19.6442 28.5572 18.8312 29.1249 18.0302C29.2602 18.1149 29.3552 18.1492 29.4138 18.2158C30.923 19.969 30.8927 20.1667 28.9309 21.2945C28.5289 21.5265 28.1268 21.7605 27.6945 22.0107Z'
                      fill='#000082'
                    />
                    <path
                      d='M19.5041 30.7383C20.3526 30.0967 30.8967 30.1088 31.6462 30.7383C27.5692 30.7383 23.6417 30.7383 19.5041 30.7383Z'
                      fill='#000082'
                    />
                    <path
                      d='M23.7286 23.3483C23.7266 22.047 24.3388 21.2824 25.3974 21.2077C26.5914 21.125 27.2844 21.819 27.4622 23.3483C26.2399 23.3483 25.0237 23.3483 23.7286 23.3483Z'
                      fill='#000082'
                    />
                    <path
                      d='M19.4597 33.7788C19.9991 33.7788 20.4315 33.7788 20.9568 33.7788C20.9568 35.0639 20.9568 36.3208 20.9568 37.6564C20.4961 37.6564 20.0153 37.6564 19.4597 37.6564C19.4597 36.3975 19.4597 35.1406 19.4597 33.7788Z'
                      fill='#000082'
                    />
                    <path
                      d='M31.6604 33.8192C31.6604 35.1386 31.6604 36.3894 31.6604 37.6887C31.1473 37.6887 30.6927 37.6887 30.1694 37.6887C30.1694 36.3995 30.1694 35.1487 30.1694 33.8192C30.6482 33.8192 31.0988 33.8192 31.6604 33.8192Z'
                      fill='#000082'
                    />
                    <path
                      d='M19.7991 23.4231C19.9607 22.4587 20.0981 21.6497 20.2638 20.6631C21.2598 21.2341 22.1407 21.7042 22.973 22.2469C23.1488 22.3619 23.2417 22.7613 23.1993 22.9994C23.169 23.1668 22.8538 23.3948 22.6558 23.4049C21.7871 23.4473 20.9143 23.4231 19.7991 23.4231Z'
                      fill='#000082'
                    />
                    <path
                      d='M30.8724 20.8225C31.0058 21.6517 31.1371 22.4547 31.2805 23.3504C30.1128 23.3504 29.0582 23.3504 27.9995 23.3504C27.7692 22.3114 28.5107 21.6356 30.8724 20.8225Z'
                      fill='#000082'
                    />
                    <path
                      d='M37.4203 23.7639C36.7132 23.7639 36.1535 23.7639 35.5878 23.7639C35.4141 22.2972 35.2444 20.8668 35.0646 19.3355C38.7092 19.3355 42.2488 19.3355 45.9116 19.3355C45.748 20.8083 45.5884 22.2387 45.4207 23.7437C44.855 23.7437 44.2671 23.7437 43.5176 23.7437C43.5176 23.0558 43.4913 22.3617 43.5257 21.6697C43.562 20.9334 43.0792 20.9455 42.5943 20.9858C42.1175 21.0241 41.4225 20.7235 41.4265 21.6395C41.4286 22.3073 41.4265 22.9751 41.4265 23.7296C40.7679 23.7296 40.1881 23.7296 39.4588 23.7296C39.4588 23.0638 39.4264 22.4001 39.4668 21.7424C39.5133 20.9737 39.0385 20.9636 38.493 20.9777C37.9556 20.9919 37.3657 20.8728 37.4142 21.7404C37.4485 22.3698 37.4203 23.0073 37.4203 23.7639Z'
                      fill='#000082'
                    />
                    <path
                      d='M38.4224 37.0935C38.4224 33.5326 38.3981 30.0747 38.4365 26.6187C38.4486 25.614 40.4144 24.7767 41.2811 25.271C42.3236 25.8662 42.6974 26.6348 42.6549 27.8675C42.5499 30.9159 42.6206 33.9684 42.6206 37.0955C41.2064 37.0935 39.8851 37.0935 38.4224 37.0935ZM38.8871 29.1406C38.8871 30.9502 38.8608 32.7196 38.9254 34.4849C38.9315 34.6725 39.5012 35.0114 39.774 34.9812C40.5377 34.8944 41.8185 35.5118 41.9741 34.5736C42.265 32.8225 42.0569 30.9886 42.0569 29.1406C40.9599 29.1406 40.0002 29.1406 38.8871 29.1406Z'
                      fill='#000082'
                    />
                    <path
                      d='M45.4531 42.3873C44.8127 42.3873 44.253 42.3873 43.6045 42.3873C43.6045 40.969 43.6045 39.5891 43.6045 38.1264C44.1945 38.1264 44.7783 38.1264 45.4531 38.1264C45.4531 39.5165 45.4531 40.8944 45.4531 42.3873Z'
                      fill='#000082'
                    />
                    <path
                      d='M41.3357 42.3632C40.7397 42.3632 40.1821 42.3632 39.5416 42.3632C39.5416 40.959 39.5416 39.573 39.5416 38.1164C40.1376 38.1164 40.6932 38.1164 41.3357 38.1164C41.3357 39.5307 41.3357 40.9146 41.3357 42.3632Z'
                      fill='#000082'
                    />
                    <path
                      d='M37.4082 42.3691C36.7334 42.3691 36.1798 42.3691 35.4667 42.3691C35.4667 41.0638 35.4283 39.7767 35.5131 38.4956C35.5253 38.3241 36.1617 38.082 36.5091 38.08C36.8082 38.0779 37.3577 38.3604 37.3678 38.542C37.4445 39.7968 37.4082 41.0558 37.4082 42.3691Z'
                      fill='#000082'
                    />
                    <path
                      d='M43.5782 34.3215C43.5782 32.877 43.5782 31.5515 43.5782 30.0929C44.0934 30.0929 44.5621 30.0364 45.0046 30.1191C45.2086 30.1574 45.5036 30.4641 45.5117 30.6598C45.5582 31.8561 45.5359 33.0566 45.5359 34.3235C44.8369 34.3215 44.251 34.3215 43.5782 34.3215Z'
                      fill='#000082'
                    />
                    <path
                      d='M35.4565 30.0848C35.9252 30.0848 36.2263 30.113 36.5192 30.0787C37.2243 29.998 37.4688 30.2946 37.4284 30.9926C37.3799 31.8581 37.3738 32.7317 37.4263 33.5992C37.4768 34.4345 36.9657 34.3961 36.398 34.3982C35.8505 34.4002 35.4101 34.3901 35.4424 33.6275C35.4929 32.4997 35.4565 31.3699 35.4565 30.0848Z'
                      fill='#000082'
                    />
                    <path
                      d='M7.6045 23.77C6.84486 23.77 6.24887 23.77 5.61651 23.77C5.49933 22.2852 5.3862 20.8427 5.267 19.3195C8.8874 19.3195 12.3967 19.3195 16.0615 19.3195C15.908 20.8043 15.7605 22.2327 15.605 23.7418C15.0393 23.7418 14.4554 23.7418 13.6917 23.7418C13.6917 23.1204 13.6574 22.497 13.6998 21.8776C13.7483 21.1695 13.4553 20.9113 12.7644 20.9476C12.1583 20.9798 11.6088 20.9597 11.7057 21.8413C11.7704 22.4345 11.7179 23.0417 11.7179 23.7297C11.0471 23.7297 10.437 23.7297 9.69755 23.7297C9.69755 23.3524 9.74402 22.9872 9.68745 22.6382C9.58037 21.9684 10.1885 20.8891 8.7278 20.9496C7.61258 20.996 7.61056 20.9617 7.6045 22.5858C7.6045 22.9469 7.6045 23.3121 7.6045 23.77Z'
                      fill='#000082'
                    />
                    <path
                      d='M12.6896 37.1137C11.2956 37.1137 10.0289 37.1137 8.64899 37.1137C8.62677 36.7828 8.58636 36.462 8.58434 36.1412C8.57828 33.115 8.63081 30.0868 8.55606 27.0626C8.52373 25.7875 9.53187 25.5373 10.2693 25.0895C10.5501 24.918 11.1986 25.271 11.6451 25.4667C12.4734 25.8299 12.7361 26.4674 12.7139 27.3995C12.6452 30.2562 12.6896 33.115 12.6896 35.9738C12.6896 36.3349 12.6896 36.6961 12.6896 37.1137ZM12.2512 29.0921C11.2653 29.0921 10.4289 29.0518 9.60056 29.1204C9.38439 29.1386 9.03083 29.4956 9.02477 29.7055C8.9783 31.2811 8.81264 32.8911 9.06114 34.4284C9.26519 35.6853 10.5158 34.7835 11.2673 34.9893C11.6795 35.1022 12.2573 35.1406 12.2553 34.382C12.2472 32.6732 12.2512 30.9664 12.2512 29.0921Z'
                      fill='#000082'
                    />
                    <path
                      d='M5.58414 42.3652C5.58414 40.9469 5.58414 39.5831 5.58414 38.1345C6.20033 38.1345 6.81855 38.1345 7.52162 38.1345C7.52162 39.5246 7.52162 40.9126 7.52162 42.3652C6.87714 42.3652 6.26094 42.3652 5.58414 42.3652Z'
                      fill='#000082'
                    />
                    <path
                      d='M5.60638 30.1433C6.28521 30.1433 6.87918 30.1433 7.53579 30.1433C7.53579 31.5596 7.53579 32.9173 7.53579 34.3336C6.87312 34.3336 6.27915 34.3336 5.60638 34.3336C5.60638 32.9476 5.60638 31.5939 5.60638 30.1433Z'
                      fill='#000082'
                    />
                    <path
                      d='M13.7482 42.3571C13.7482 40.9105 13.7482 39.5548 13.7482 38.1728C13.9523 38.1264 14.1099 38.0659 14.2695 38.0578C15.716 37.9832 15.716 37.9872 15.716 39.4035C15.716 40.271 15.71 41.1385 15.6999 42.006C15.6978 42.1009 15.6473 42.1937 15.6009 42.3551C15.0271 42.3571 14.4452 42.3571 13.7482 42.3571Z'
                      fill='#000082'
                    />
                    <path
                      d='M11.6633 42.3834C11.0067 42.3834 10.443 42.3834 9.69348 42.3834C9.69348 41.6873 9.69348 41.0014 9.69348 40.3154C9.69348 39.6154 9.69348 38.9153 9.69348 38.1305C10.3844 38.1305 10.9966 38.1305 11.6633 38.1305C11.6633 39.5427 11.6633 40.9025 11.6633 42.3834Z'
                      fill='#000082'
                    />
                    <path
                      d='M15.716 34.275C15.4413 34.3314 15.314 34.3738 15.1847 34.3819C13.6998 34.4787 13.6998 34.4767 13.6977 32.9676C13.6977 32.2978 13.7442 31.626 13.6856 30.9622C13.6088 30.1089 14.0877 30.0665 14.7342 30.0725C15.3362 30.0786 15.7726 30.1068 15.7322 30.9098C15.6736 32.0033 15.716 33.1048 15.716 34.275Z'
                      fill='#000082'
                    />
                    <path
                      d='M41.4266 30.1332C41.4266 31.5475 41.4266 32.877 41.4266 34.2711C41.1983 34.3114 40.9801 34.378 40.7579 34.3861C39.5012 34.4345 39.4992 34.4304 39.4972 33.1251C39.4952 32.4856 39.5477 31.842 39.4851 31.2105C39.3982 30.341 39.679 29.9315 40.5942 30.0808C40.8245 30.1171 41.0609 30.111 41.4266 30.1332Z'
                      fill='#000082'
                    />
                    <path
                      d='M9.6955 30.1331C10.3622 30.1331 10.9582 30.1331 11.6269 30.1331C11.6269 31.5271 11.6269 32.8829 11.6269 34.3173C10.9804 34.3173 10.3622 34.3173 9.6955 34.3173C9.6955 32.9051 9.6955 31.5453 9.6955 30.1331Z'
                      fill='#000082'
                    />
                  </svg>
                </div>
              </div>
              <div className='content__img-wrapper'>
                <div className='img-wrapper__img'>
                  <span className='img__promo desktop-only'>
                    -30% с ROSUCHEBA
                  </span>
                  {/*  <div className="img__ipe"></div>  */}
                  <svg
                    width='134'
                    height='44'
                    viewBox='0 0 134 44'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4.47759 25.7168C4.42999 25.5545 4.3772 25.3927 4.31263 25.238C4.249 25.0842 4.17312 24.937 4.09535 24.7997C4.07602 24.7653 4.05387 24.7319 4.03361 24.6995C4.01287 24.6675 3.99401 24.6364 3.96998 24.604L3.93651 24.5555L3.90069 24.5029C3.87995 24.4662 3.85874 24.4304 3.84225 24.3923C3.77202 24.2432 3.7428 24.0852 3.74798 23.9441C3.75364 23.8025 3.7838 23.6784 3.82528 23.5749C3.85026 23.5105 3.8776 23.4536 3.9054 23.4042C3.6212 23.7654 3.18946 24.4549 3.67775 25.4435C4.28152 26.6655 4.51813 27.2924 4.56432 27.528C4.58553 27.4147 4.59872 27.2919 4.61286 27.1635C4.627 27.0173 4.62936 26.8621 4.62606 26.7026C4.62276 26.5427 4.60909 26.3786 4.58317 26.213C4.55866 26.0474 4.52378 25.8809 4.47759 25.7168Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M10.4191 15.8558C10.5134 15.9654 10.6067 16.0928 10.6911 16.2367C10.7754 16.3788 10.8532 16.5406 10.9192 16.7071C10.9838 16.8783 11.0398 17.0584 11.0776 17.2475C11.1143 17.4356 11.1374 17.6299 11.1464 17.8251C11.1619 18.2154 11.1237 18.6053 11.053 18.9637C10.9838 19.3221 10.8848 19.6495 10.7858 19.9237C10.7561 20.006 10.7264 20.0836 10.6977 20.157C11.1657 19.6829 11.7233 18.8753 11.7006 17.7296C11.6615 15.7669 9.96758 15.3201 9.7536 15.3201C9.7536 15.3201 9.77245 15.3403 9.80215 15.3784C9.82619 15.3892 9.85258 15.4024 9.88133 15.4174C10.0298 15.4946 10.2282 15.6366 10.4191 15.8558Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M5.38016 26.1537C5.37545 26.11 5.36791 26.0667 5.36131 26.023C5.35424 25.9802 5.34953 25.9369 5.3401 25.8946C5.33067 25.8532 5.32078 25.8113 5.31135 25.7709C5.30051 25.7304 5.29344 25.69 5.28118 25.6519C5.26893 25.6128 5.2562 25.5757 5.24348 25.539C5.23169 25.5023 5.21944 25.4675 5.2086 25.4322C5.19446 25.3988 5.17985 25.3678 5.16665 25.3367C5.13884 25.2751 5.11528 25.2177 5.0903 25.1688C5.06296 25.1213 5.03892 25.0795 5.0196 25.0451C4.98943 24.9929 4.96917 24.9572 4.96115 24.9435C4.97152 24.9558 4.99462 24.9887 5.03044 25.0385C5.05353 25.0705 5.08276 25.11 5.11528 25.1543C5.14544 25.2008 5.17514 25.2558 5.21049 25.3151C5.22698 25.3452 5.24631 25.3758 5.26327 25.4082C5.27883 25.4416 5.29438 25.4769 5.31088 25.5122C5.32785 25.5479 5.34434 25.5851 5.36131 25.6227C5.37828 25.6599 5.39006 25.7012 5.40467 25.7408C5.51308 25.7967 6.21959 26.1673 6.34496 26.4721C6.34496 26.4721 6.86059 25.357 6.01834 24.2545C6.40152 24.674 7.41487 25.6514 9.24597 26.5497C9.24597 26.5497 10.3946 27.1325 9.82994 28.4541C9.80637 28.5091 9.77951 28.559 9.74887 28.6051C9.75453 28.6018 9.76066 28.598 9.76584 28.5952C9.78281 28.5834 9.80025 28.5712 9.81816 28.5585C9.85304 28.5336 9.88886 28.5096 9.92421 28.4833C10.0628 28.3737 10.2013 28.2476 10.3324 28.1046C10.4615 27.9602 10.5892 27.8046 10.7038 27.6343C10.7646 27.552 10.8141 27.4608 10.8711 27.3747C10.9215 27.2844 10.9762 27.196 11.0215 27.1019L11.0917 26.9627L11.1553 26.8206C11.1991 26.7266 11.2326 26.6292 11.2713 26.5347C11.3368 26.3414 11.399 26.149 11.4362 25.959C11.4796 25.7685 11.4998 25.5823 11.5135 25.4049C11.5149 25.3692 11.5159 25.3334 11.5168 25.2982C10.6321 23.7531 9.44204 23.3599 9.32327 22.8195C9.18705 22.1977 9.86859 22.4503 10.2772 22.9362C10.6859 23.422 11.0563 23.9464 11.7374 24.1021C11.7374 24.1021 12.4915 22.5397 10.3984 20.8004C10.2414 20.6917 10.0533 20.6203 10.0533 20.6203C10.0533 20.6203 10.0651 20.6014 10.0868 20.5666C10.1085 20.5309 10.1405 20.4763 10.1797 20.4058C10.2574 20.2642 10.3644 20.0582 10.4742 19.8019C10.5841 19.546 10.6962 19.2398 10.7825 18.9026C10.8711 18.5663 10.9291 18.1976 10.9366 17.8274C10.939 17.6416 10.9286 17.4568 10.9041 17.2757C10.8801 17.0956 10.8362 16.9197 10.7858 16.7541C10.733 16.5848 10.6703 16.4305 10.5987 16.2852C10.528 16.1413 10.4469 16.0115 10.3635 15.8991C10.1947 15.6728 10.0105 15.52 9.86953 15.4334C9.85256 15.4226 9.83513 15.4127 9.81957 15.4038C10.0067 15.6507 10.4785 16.4089 10.0628 17.3105C9.88414 17.6976 9.57213 17.8914 9.24267 17.9356C9.20214 17.9572 9.15783 17.9761 9.10929 17.9906C8.42445 18.2013 7.90269 18.0123 7.52422 17.7155C7.53977 17.7418 7.55533 17.7691 7.57277 17.7954C7.60387 17.8382 7.63404 17.8881 7.66703 17.9262C7.70521 17.9728 7.74339 18.0193 7.77826 18.0551C7.84755 18.1327 7.93239 18.2065 8.0144 18.2719C8.1836 18.4017 8.36978 18.4995 8.55878 18.5593C8.74731 18.6213 8.93819 18.6472 9.11588 18.6486C9.47126 18.651 9.76678 18.5546 9.94919 18.4511C10.0411 18.3998 10.1052 18.3448 10.1405 18.301C10.157 18.2785 10.1702 18.2606 10.1764 18.2465C10.1811 18.2366 10.1844 18.231 10.1858 18.2286C10.1853 18.231 10.182 18.2371 10.1787 18.2484C10.174 18.263 10.1632 18.2818 10.149 18.3076C10.1179 18.3565 10.0585 18.4205 9.97087 18.4849C9.79554 18.6138 9.50378 18.7507 9.12343 18.7944C8.93442 18.8156 8.72327 18.8132 8.50505 18.7695C8.28635 18.7276 8.06106 18.643 7.84943 18.5169C7.74339 18.4516 7.64205 18.3824 7.5426 18.2963C7.48981 18.2526 7.44739 18.2117 7.4045 18.1703C7.35407 18.1237 7.31542 18.0739 7.2697 18.025C7.24237 17.993 7.21739 17.9591 7.19241 17.9257C7.2188 18.0198 7.24755 18.1129 7.2796 18.2056C7.30364 18.2794 7.33192 18.3518 7.36114 18.4233L7.40497 18.5315L7.45399 18.6373L7.50301 18.7422L7.51291 18.7657L7.52705 18.7921L7.5558 18.8448C7.59398 18.9139 7.63121 18.9863 7.67033 19.0531C7.8221 19.3184 7.99602 19.5761 8.16946 19.8188C8.34574 20.0596 8.52531 20.2873 8.703 20.498C8.88116 20.7077 9.05508 20.902 9.22099 21.076C9.38595 21.2519 9.54432 21.4062 9.68619 21.5426C9.82806 21.6776 9.95484 21.7914 10.0618 21.8836C10.1693 21.9743 10.2541 22.0458 10.314 22.0919C10.3663 22.1324 10.3974 22.1564 10.4045 22.162C10.3974 22.1573 10.3649 22.1357 10.3093 22.099C10.2452 22.0576 10.1556 21.9922 10.0416 21.9094C9.92798 21.8248 9.79224 21.7199 9.63953 21.5948C9.48776 21.4687 9.31714 21.3258 9.13851 21.1611C8.95799 20.9979 8.76852 20.8154 8.57292 20.6165C8.37732 20.4166 8.17795 20.1993 7.97999 19.9665C7.78345 19.7304 7.58973 19.4839 7.40497 19.2111C7.35926 19.1444 7.31778 19.0776 7.27442 19.0098L7.24237 18.9595L7.22587 18.9336L7.20796 18.904L7.08353 18.6877L7.02603 18.5767C7.01519 18.5541 7.00341 18.5315 6.99257 18.5089C7.02273 18.7116 7.06138 18.9125 7.10615 19.1095C7.17308 19.3917 7.25886 19.6725 7.34983 19.9326C7.44409 20.1946 7.55061 20.4434 7.66232 20.6739C7.77449 20.9039 7.89657 21.1146 8.01581 21.3051C8.13506 21.4955 8.25713 21.662 8.36789 21.8074C8.48007 21.9522 8.58187 22.0755 8.67001 22.1733C8.75721 22.2721 8.8279 22.3473 8.87739 22.3981C8.90379 22.4263 8.92406 22.447 8.93678 22.4611C8.92264 22.4489 8.9019 22.4291 8.87268 22.4038C8.82036 22.3562 8.74401 22.2857 8.65069 22.1926C8.55548 22.0999 8.44519 21.9833 8.32217 21.8459C8.20151 21.7063 8.06671 21.5468 7.93333 21.362C7.80042 21.1771 7.66232 20.9711 7.53223 20.744C7.40215 20.5163 7.27583 20.2699 7.16224 20.0069C7.0496 19.7403 6.94496 19.4675 6.85682 19.1768C6.78141 18.9247 6.71731 18.6651 6.66547 18.4026C6.66075 18.6157 6.66075 18.8302 6.66782 19.0446C6.66924 19.1354 6.67583 19.2257 6.68008 19.316L6.68715 19.4491L6.70034 19.586C6.71967 19.7577 6.75172 19.934 6.79225 20.1043C6.87332 20.4472 6.99634 20.775 7.13868 21.0821C7.2829 21.3892 7.44787 21.6743 7.62178 21.9339C7.79617 22.1945 7.97858 22.4292 8.15532 22.638C8.5107 23.0561 8.84864 23.3703 9.0909 23.581C9.21251 23.6868 9.3096 23.7668 9.37747 23.8204C9.4279 23.8608 9.46136 23.8872 9.47503 23.898C9.46184 23.8886 9.42743 23.8637 9.37323 23.8256C9.303 23.7757 9.20119 23.7014 9.07346 23.6026C8.81895 23.4046 8.46263 23.1092 8.08038 22.7066C7.8895 22.5044 7.69154 22.2768 7.49924 22.0209C7.30741 21.766 7.12171 21.4833 6.95486 21.1743C6.79037 20.8648 6.64331 20.53 6.53726 20.1725C6.48448 19.9947 6.44064 19.8127 6.40812 19.6222L6.38786 19.4863L6.369 19.3457C6.35722 19.253 6.34402 19.1608 6.33554 19.0682C6.27379 18.5047 6.25541 17.9375 6.26861 17.39C6.24033 17.5904 6.21629 17.795 6.19838 18.0038C6.16162 18.4398 6.14842 18.8923 6.1767 19.3489C6.20498 19.8052 6.27427 20.267 6.3987 20.7124C6.4298 20.8244 6.46468 20.9349 6.50286 21.0436C6.54198 21.1494 6.5844 21.266 6.62729 21.3733C6.71543 21.5863 6.80733 21.7998 6.9148 22.003C7.12454 22.4127 7.37905 22.789 7.66562 23.1224C7.94983 23.4568 8.26797 23.7451 8.57386 24.0156C8.88069 24.2851 9.17339 24.5423 9.42225 24.8039C9.67158 25.0625 9.87472 25.3245 10.0345 25.5686C10.1933 25.8127 10.3154 26.0366 10.4021 26.2261C10.4488 26.3188 10.4832 26.4058 10.5157 26.4796C10.5482 26.5544 10.5727 26.6189 10.593 26.6706C10.6274 26.7614 10.6482 26.8155 10.6529 26.8277C10.6472 26.8159 10.6246 26.7623 10.5859 26.6729C10.5643 26.6217 10.5379 26.5577 10.5021 26.4858C10.4672 26.4133 10.4295 26.3287 10.379 26.2379C10.2848 26.0521 10.1547 25.8353 9.98783 25.6006C9.82051 25.3659 9.6103 25.1166 9.35437 24.8706C9.09986 24.6237 8.80057 24.382 8.48195 24.1238C8.16522 23.8651 7.82917 23.5843 7.52092 23.2508C7.21173 22.9188 6.93035 22.5373 6.69704 22.1216C6.57639 21.9155 6.47269 21.6997 6.37089 21.4781C6.32187 21.3671 6.27804 21.2618 6.22996 21.147C6.18566 21.0337 6.14371 20.9184 6.106 20.8027C5.95424 20.3381 5.86233 19.856 5.81331 19.3795C5.76335 18.9031 5.75722 18.4318 5.77749 17.9779C5.78079 17.9055 5.7855 17.835 5.78974 17.7639C5.76005 17.9351 5.73366 18.1092 5.71339 18.2846C5.66673 18.6345 5.64505 18.991 5.62996 19.3494C5.63044 19.5281 5.62525 19.7069 5.63232 19.8856C5.64175 20.0629 5.64316 20.2416 5.66437 20.4166C5.67286 20.5046 5.68087 20.5925 5.68935 20.6795C5.69972 20.7661 5.71433 20.8521 5.72659 20.9377C5.74073 21.0224 5.75062 21.1085 5.76712 21.1917C5.78503 21.2759 5.802 21.3587 5.81944 21.4405C5.8496 21.607 5.89862 21.7646 5.94151 21.9217C5.97969 22.0797 6.03955 22.2264 6.08856 22.3732C6.13522 22.5209 6.20074 22.6568 6.25683 22.7913C6.28652 22.8581 6.3115 22.9249 6.34355 22.9879C6.37607 23.05 6.40718 23.1116 6.43876 23.1723C6.55659 23.4173 6.69704 23.6224 6.81016 23.8119C6.93883 23.9916 7.05007 24.1482 7.14763 24.2743C7.32768 24.4864 7.43985 24.6185 7.4653 24.6491C7.43797 24.6204 7.31825 24.4944 7.12642 24.2917C7.02273 24.1713 6.90207 24.0189 6.7635 23.8448C6.63954 23.6605 6.48542 23.4601 6.35392 23.2193C6.31904 23.16 6.28369 23.0998 6.24693 23.0373C6.21111 22.9757 6.18236 22.9089 6.14795 22.843C6.08385 22.7095 6.00985 22.574 5.95376 22.4263C5.89626 22.2801 5.82698 22.1319 5.77843 21.9734C5.72706 21.8163 5.66767 21.6564 5.62808 21.4885C5.60546 21.4052 5.58283 21.3215 5.56021 21.2364C5.53853 21.1508 5.52345 21.0638 5.50506 20.9777C5.4881 20.8907 5.46783 20.8027 5.45228 20.7143C5.43908 20.6254 5.42588 20.5365 5.41221 20.4472C5.3811 20.2675 5.36932 20.085 5.35 19.9025C5.33303 19.72 5.32832 19.5347 5.31795 19.3504C5.31323 18.9821 5.31653 18.6119 5.34528 18.2498C5.36178 17.9864 5.39053 17.7272 5.42447 17.4742C5.40561 17.5861 5.38723 17.6981 5.37074 17.8124C5.35283 17.9638 5.33491 18.1162 5.317 18.27C5.30145 18.4238 5.29297 18.5785 5.27977 18.7342C5.26657 18.888 5.26092 19.0451 5.25338 19.2022C5.24631 19.3584 5.23876 19.514 5.23169 19.6683C5.2185 19.9759 5.20766 20.2807 5.19917 20.5746C5.18362 21.1644 5.16948 21.7142 5.1577 22.186C5.15063 22.4221 5.13884 22.6389 5.12423 22.8303C5.10538 23.0222 5.087 23.1892 5.05872 23.3247C5.04788 23.3924 5.0328 23.4521 5.02054 23.5048C5.00876 23.557 4.99698 23.6003 4.98613 23.636C4.96822 23.6981 4.95786 23.7348 4.95597 23.7433C4.95738 23.7348 4.96587 23.6976 4.97906 23.6346C4.98755 23.5989 4.99697 23.5537 5.00546 23.5015C5.01394 23.4488 5.02478 23.3882 5.03185 23.3204C5.05118 23.1845 5.06013 23.018 5.06626 22.8275C5.06956 22.6361 5.06767 22.4212 5.06013 22.1855C5.04316 21.7138 5.0229 21.164 5.00169 20.5742C4.99698 20.4298 4.99226 20.2826 4.98849 20.1335C4.97058 20.2755 4.95361 20.4157 4.93099 20.5516C4.8716 20.9067 4.77215 21.2256 4.65856 21.4857C4.60153 21.6159 4.54026 21.7312 4.48229 21.8309C4.42479 21.9301 4.3687 22.0129 4.3211 22.0802C4.27255 22.146 4.23296 22.1977 4.20515 22.2307C4.18111 22.2603 4.16603 22.2782 4.1632 22.2819C4.16556 22.2772 4.17876 22.2584 4.19996 22.2269C4.22494 22.1912 4.25935 22.1366 4.30036 22.0661C4.34089 21.9955 4.38849 21.909 4.43516 21.8055C4.48276 21.703 4.53178 21.5854 4.57373 21.4532C4.66045 21.1903 4.72643 20.8719 4.75 20.5309C4.75707 20.4429 4.75848 20.3573 4.7599 20.2675C4.76226 20.1781 4.76367 20.0874 4.76555 19.9961C4.76226 19.8136 4.76414 19.6293 4.75236 19.444C4.75189 19.4223 4.75094 19.3997 4.74906 19.3781C4.65621 19.9411 4.47663 20.4063 4.14293 20.5083C3.18897 20.7999 2.93587 20.2557 2.89675 19.6923C2.89675 19.6923 2.23454 20.3338 2.70209 21.266C2.8845 21.6413 3.20453 21.8436 3.43123 21.9424C3.15551 21.9033 2.69738 21.9494 2.25434 22.4513C1.98191 22.7814 1.86502 22.9371 1.86502 22.9371C1.86502 22.9371 2.56211 23.6755 3.35252 23.287C4.14293 22.8985 4.10429 22.9954 4.10429 23.1314C4.10429 23.1459 4.09015 23.1695 4.06611 23.2014C4.08402 23.1657 4.09722 23.1431 4.10193 23.1346C4.09627 23.1394 4.0826 23.1544 4.06139 23.1784C4.03406 23.2094 3.99447 23.2569 3.95252 23.3228C3.93697 23.3468 3.92047 23.3726 3.90397 23.4018C3.9709 23.3171 4.0284 23.2518 4.06422 23.2038C4.04631 23.2386 4.02369 23.287 3.99871 23.3468C3.97137 23.4173 3.94026 23.5039 3.91953 23.604C3.89832 23.7052 3.88371 23.8195 3.89549 23.9403C3.90727 24.0617 3.93979 24.1882 4.01002 24.3062C4.02557 24.3359 4.04678 24.3636 4.06517 24.3933C4.08779 24.4229 4.11041 24.4525 4.13304 24.4826C4.15707 24.5122 4.18205 24.548 4.20703 24.5819C4.2306 24.6167 4.25558 24.651 4.27726 24.6877C4.37011 24.8297 4.45024 24.9859 4.52094 25.1495C4.59116 25.3118 4.65338 25.4821 4.69863 25.6561C4.74529 25.8301 4.78017 26.0074 4.80138 26.1829C4.82164 26.3592 4.82871 26.5333 4.82447 26.7021C4.81976 26.871 4.80185 27.0323 4.77687 27.1847C4.75896 27.2919 4.73633 27.3944 4.71088 27.4904C4.92015 27.3055 5.30145 26.8851 5.38299 26.2148L5.38016 26.1537Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M6.63767 31.4088C7.22165 32.1862 8.13696 32.2638 8.60451 31.7587C9.07159 31.2536 8.89673 30.5537 9.20828 30.3011C9.51982 30.0486 9.83137 30.2428 9.77293 30.6896C9.71448 31.1365 8.64363 31.8946 8.50695 32.3414C8.37074 32.7883 8.56539 33.5267 8.91606 33.7407C8.91606 33.7407 9.48919 33.3023 9.46185 32.6702C9.47128 32.8489 9.58722 34.283 10.9022 34.2651C10.9022 34.2651 10.2207 32.4383 11.2529 31.3895C11.8053 30.8284 12.2026 29.9809 12.3162 28.9762C12.2922 29.0726 12.2648 29.1681 12.2337 29.2622L12.1908 29.3906L12.1418 29.5157C12.1116 29.5994 12.0711 29.6798 12.0343 29.7607C11.9976 29.8407 11.9528 29.9164 11.9127 29.9931C11.8684 30.0669 11.8232 30.1398 11.7779 30.2099C11.7289 30.2786 11.6823 30.3458 11.6332 30.4098C11.5809 30.4719 11.5319 30.5335 11.4819 30.5918C11.4292 30.6468 11.3778 30.7009 11.3278 30.7527C11.2755 30.8025 11.2237 30.8477 11.1742 30.8924C11.1261 30.9389 11.0738 30.9756 11.0262 31.0137C10.9781 31.0504 10.9352 31.0885 10.89 31.1172C10.7995 31.1764 10.7241 31.2324 10.6562 31.2696C10.5393 31.3373 10.4662 31.3782 10.4488 31.3876C10.4653 31.3777 10.5346 31.3302 10.6468 31.2554C10.7113 31.2136 10.7825 31.1529 10.8678 31.088C10.9107 31.057 10.9503 31.0156 10.9955 30.977C11.0394 30.9366 11.0884 30.8971 11.1327 30.8481C11.177 30.8006 11.2255 30.7527 11.2727 30.7005C11.3179 30.6468 11.3636 30.5909 11.4122 30.5335C11.4565 30.4738 11.5003 30.4112 11.546 30.3477C11.5894 30.2833 11.6299 30.2141 11.6728 30.1455C11.711 30.074 11.7501 30.0015 11.7883 29.9277C11.8208 29.8506 11.859 29.7763 11.8887 29.6968C11.9184 29.6168 11.9519 29.5383 11.975 29.456L12.0131 29.3341L12.0457 29.209C12.0885 29.0425 12.1173 28.8732 12.1399 28.7063C12.1503 28.6169 12.1592 28.5285 12.1658 28.4405C12.1611 28.4537 12.1578 28.4669 12.1536 28.4796L12.1121 28.5971L12.0645 28.7124C12.0348 28.7895 11.9962 28.8624 11.9608 28.9362C11.9259 29.0091 11.8821 29.0778 11.8439 29.1479C11.8001 29.2156 11.7572 29.2805 11.7138 29.3445C11.6658 29.4056 11.621 29.4672 11.5739 29.5246C11.5239 29.5797 11.4772 29.6347 11.4292 29.6864C11.3787 29.7353 11.3297 29.7838 11.2821 29.8294C11.2317 29.8722 11.1827 29.9131 11.1351 29.9531C11.0898 29.9936 11.0394 30.0246 10.9951 30.058C10.9489 30.09 10.9083 30.1234 10.865 30.1483C10.7792 30.1986 10.7076 30.2471 10.6444 30.279C10.5407 30.3317 10.4738 30.367 10.4526 30.3769C10.4728 30.3637 10.5374 30.3247 10.6354 30.2649C10.6963 30.2282 10.7632 30.1746 10.8433 30.1187C10.8848 30.0914 10.922 30.0552 10.9649 30.0208C11.0069 29.9841 11.0535 29.9508 11.095 29.9075C11.1379 29.8656 11.1831 29.8209 11.2288 29.7763C11.2717 29.7278 11.316 29.6784 11.3613 29.6272C11.4051 29.5735 11.4461 29.5166 11.49 29.4602C11.5319 29.4019 11.5701 29.3388 11.6116 29.2777C11.6483 29.2133 11.6846 29.147 11.7214 29.0802C11.7525 29.011 11.7893 28.9424 11.818 28.8704C11.8463 28.798 11.8774 28.7265 11.8995 28.6512L11.9363 28.5393L11.9665 28.425C12.0075 28.2726 12.0348 28.1179 12.056 27.965C12.0683 27.8611 12.0772 27.7581 12.0824 27.6574C12.0659 27.7181 12.048 27.7778 12.0277 27.8376C11.9801 27.9862 11.9179 28.1296 11.851 28.2674C11.8161 28.3361 11.7784 28.402 11.7421 28.4673C11.7011 28.5304 11.6634 28.5943 11.6215 28.6531C11.5772 28.7105 11.5376 28.7697 11.4914 28.8224C11.4457 28.8751 11.4032 28.9292 11.3566 28.9758C11.3099 29.0233 11.2647 29.0684 11.2204 29.1126C11.1737 29.1531 11.1285 29.1926 11.0846 29.2302C11.0417 29.2692 10.9951 29.2989 10.9545 29.3313C10.9116 29.3614 10.8735 29.3934 10.8339 29.4174C10.7547 29.4663 10.6882 29.5129 10.6289 29.5439C10.5336 29.5952 10.4714 29.6286 10.4521 29.6394C10.4719 29.6262 10.5308 29.5881 10.6204 29.5298C10.6765 29.4941 10.7382 29.4419 10.8122 29.3878C10.8504 29.3614 10.8853 29.3271 10.9244 29.2937C10.9625 29.2589 11.0054 29.226 11.0441 29.1851C11.0832 29.1446 11.1242 29.1037 11.1671 29.0599C11.2062 29.0143 11.2463 28.9659 11.2887 28.917C11.3302 28.868 11.366 28.8126 11.4065 28.7589C11.4461 28.7044 11.4796 28.6446 11.5178 28.5863C11.5536 28.5266 11.5847 28.4626 11.6191 28.4005C11.6488 28.3352 11.679 28.2698 11.7072 28.2025C11.7596 28.0675 11.8076 27.9274 11.8411 27.7835C11.8779 27.6414 11.8995 27.4952 11.9184 27.3522C11.9306 27.2285 11.9396 27.1067 11.941 26.9877C11.9354 27.0069 11.9302 27.0267 11.9255 27.046C11.9005 27.1175 11.8802 27.1904 11.8515 27.2605C11.8232 27.3305 11.7968 27.4001 11.7624 27.4679C11.7459 27.5013 11.7313 27.5356 11.7138 27.569L11.6601 27.6664C11.5885 27.7952 11.5074 27.9156 11.4226 28.0271C11.3377 28.1376 11.2496 28.2402 11.16 28.33C11.1384 28.3535 11.1162 28.3761 11.0945 28.3977C11.0719 28.4189 11.0493 28.4391 11.0276 28.4593C10.9823 28.4988 10.9418 28.5402 10.8984 28.5746C10.8122 28.6428 10.7349 28.7091 10.66 28.7589C10.5869 28.8102 10.5242 28.8568 10.4686 28.8887C10.3602 28.9565 10.298 28.995 10.298 28.995C10.298 28.995 10.3564 28.9518 10.4592 28.8756C10.5115 28.8389 10.5695 28.7872 10.6383 28.7312C10.7076 28.6762 10.7783 28.6047 10.857 28.5299C10.8975 28.4932 10.9333 28.4499 10.9739 28.4071C10.9941 28.386 11.0144 28.3643 11.0347 28.3417C11.054 28.3182 11.0728 28.2952 11.0931 28.2712C11.1728 28.1762 11.2491 28.0708 11.3222 27.958C11.3938 27.8446 11.4617 27.7233 11.5192 27.5958L11.5621 27.4994C11.5753 27.4669 11.5871 27.4335 11.5993 27.4006C11.6257 27.3352 11.646 27.267 11.6662 27.1993C11.6879 27.1325 11.7006 27.0624 11.7186 26.9947C11.7303 26.9246 11.7459 26.8569 11.7534 26.7878C11.7737 26.6509 11.7808 26.515 11.7831 26.3838C11.7822 26.2765 11.777 26.174 11.7685 26.0743C11.7398 26.2695 11.6889 26.4651 11.629 26.6613C11.5574 26.872 11.4739 27.0831 11.3684 27.2835C11.3184 27.3856 11.2585 27.4815 11.2025 27.5798C11.1402 27.6739 11.0809 27.7694 11.0125 27.8578C10.8824 28.0389 10.7321 28.2021 10.5794 28.3507C10.4243 28.4984 10.257 28.6244 10.0901 28.7293C9.91809 28.8281 9.74842 28.9118 9.5778 28.9541C9.55659 28.9602 9.53632 28.9663 9.51558 28.972C9.49437 28.9758 9.47364 28.98 9.45243 28.9837C9.41095 28.9908 9.37136 28.9983 9.33271 29.004C9.29217 29.0054 9.25306 29.0073 9.21582 29.0087C9.17859 29.0101 9.14182 29.011 9.10694 29.0054C9.03625 28.9969 8.97073 28.996 8.91229 28.9743C8.88401 28.9659 8.85714 28.9598 8.83216 28.9518C8.83075 28.9518 8.82981 28.9508 8.82886 28.9508C7.94466 28.7928 6.95252 27.6847 7.61049 26.2638C7.56477 26.2855 5.52723 27.299 7.16367 29.5665C7.16367 29.5665 6.24836 29.1973 5.25528 30.3632C5.25481 30.3595 6.05323 30.6313 6.63767 31.4088Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M4.44882 11.4775C4.46538 11.4766 4.4791 11.4761 4.49092 11.4752C4.50559 11.4743 4.51694 11.4728 4.52356 11.4728C4.49896 11.4761 4.47389 11.4775 4.44882 11.4775Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M4.42855 11.4784C4.40969 11.4774 4.38943 11.4737 4.36539 11.4704C4.35125 11.468 4.33664 11.4671 4.32203 11.4624C4.30742 11.4577 4.29186 11.4525 4.27584 11.4468C4.25934 11.4417 4.24143 11.437 4.22588 11.428C4.20938 11.4186 4.19336 11.4087 4.17592 11.3984C4.13915 11.3805 4.1104 11.3485 4.07553 11.3199C4.05856 11.3053 4.04536 11.2855 4.03028 11.2676C4.01472 11.2488 3.99823 11.231 3.98644 11.2093C3.93036 11.1284 3.89077 11.0297 3.85872 10.9238C3.83138 10.818 3.80734 10.7042 3.80357 10.5857C3.79603 10.4681 3.7965 10.3463 3.80923 10.2235C3.82101 10.1008 3.84269 9.978 3.87144 9.85665C3.90255 9.73531 3.94025 9.61631 3.98456 9.50202C4.00718 9.44464 4.03075 9.38867 4.05856 9.33412C4.08354 9.27956 4.11323 9.22735 4.14198 9.17655C4.17026 9.12529 4.20278 9.07731 4.23389 9.02981C4.26877 8.98466 4.30082 8.93951 4.33664 8.89859C4.3734 8.85814 4.40592 8.81722 4.44504 8.78289C4.4639 8.76548 4.48275 8.74855 4.50019 8.73162L4.55863 8.68741C4.63263 8.62815 4.71228 8.58629 4.78298 8.5576C4.81786 8.54067 4.85462 8.53361 4.88573 8.5242C4.91684 8.51433 4.94889 8.51103 4.97623 8.50774C5.03137 8.49834 5.07191 8.50398 5.10113 8.50539C5.12988 8.50774 5.14449 8.50821 5.14449 8.50821C5.20529 8.49975 5.26845 8.49598 5.33302 8.49786C5.33302 8.49786 3.88982 8.11549 3.3478 9.23864C2.78032 10.4145 3.6042 11.4784 4.42855 11.4784Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M14.4805 9.70618H17.7181C17.4112 9.52463 17.2062 9.1921 17.2062 8.81208C17.2062 8.43064 17.4112 8.09811 17.7166 7.91656H14.4824C14.7878 8.09858 14.9929 8.43252 14.9929 8.81208C14.9929 9.19163 14.7855 9.52463 14.4805 9.70618ZM16.0986 8.05249C16.5185 8.05249 16.8602 8.39301 16.8602 8.81208C16.8602 9.22973 16.519 9.57025 16.0986 9.57025C15.6801 9.57025 15.3388 9.22973 15.3388 8.81208C15.3388 8.39301 15.6801 8.05249 16.0986 8.05249Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M21.3934 8.83042C21.3934 8.4391 21.6051 8.09858 21.9204 7.91656H18.7814C19.0868 8.09811 19.2918 8.43205 19.2918 8.81208C19.2918 9.1921 19.0868 9.52416 18.7799 9.70618H21.8596C21.5773 9.51663 21.3934 9.1954 21.3934 8.83042ZM20.3975 9.57025C19.979 9.57025 19.6377 9.22973 19.6377 8.81208C19.6377 8.39301 19.979 8.05202 20.3975 8.05202C20.8175 8.05202 21.1592 8.39254 21.1592 8.81208C21.1587 9.22973 20.8175 9.57025 20.3975 9.57025Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M10.305 40.0177C9.87566 39.6946 9.42272 39.3451 8.93914 39.0728C8.70018 38.9411 8.44095 38.8301 8.23027 38.8277C8.12563 38.8268 8.0408 38.8508 7.95926 38.9049L7.87583 38.9651L7.8089 39.021L7.74386 39.0845C7.72595 39.1066 7.70474 39.1288 7.68777 39.1513C7.55015 39.3319 7.5214 39.5314 7.60623 39.7656C7.68777 39.9989 7.86216 40.2312 8.06342 40.44C8.2675 40.6489 8.49939 40.8412 8.74354 41.0176C8.86609 41.1074 8.9891 41.1888 9.12013 41.2744C9.2554 41.3633 9.38973 41.4536 9.51698 41.5604C9.64283 41.6681 9.76254 41.7833 9.87896 41.9244C9.90771 41.9601 9.93599 41.9982 9.96333 42.0415C9.99114 42.0857 10.0204 42.1342 10.0439 42.2028C10.0543 42.2386 10.0651 42.2809 10.0661 42.335C10.067 42.3886 10.0524 42.4596 10.0133 42.5198C9.97417 42.58 9.92044 42.6181 9.87661 42.6402C9.83136 42.6623 9.79177 42.6718 9.75736 42.6783C9.68855 42.691 9.63246 42.691 9.58061 42.6901C9.52877 42.6892 9.48022 42.684 9.43356 42.6774C9.34024 42.6656 9.25257 42.6487 9.16585 42.6266C9.07912 42.6036 9.00183 42.58 8.91746 42.5377C8.84959 42.5048 8.78643 42.4723 8.71856 42.4248C8.65399 42.3792 8.58848 42.335 8.5239 42.2908C8.46357 42.2466 8.40324 42.2033 8.34433 42.161C8.22367 42.0744 8.10961 41.9879 7.99319 41.9023C7.7646 41.7311 7.54025 41.5632 7.32674 41.3976C6.89642 41.0651 6.49014 40.7523 6.11968 40.4579C5.74733 40.1654 5.40656 39.8982 5.10397 39.6607C4.80044 39.4251 4.53603 39.2195 4.3178 39.0507C4.09769 38.8837 3.92189 38.7572 3.80264 38.6707C3.6801 38.5874 3.61411 38.5427 3.61411 38.5427C3.61411 38.5427 3.68623 38.5766 3.82055 38.641C3.953 38.7073 4.14435 38.8108 4.38473 38.9491C4.62463 39.0874 4.91686 39.2562 5.24396 39.4589C5.57058 39.6635 5.93916 39.8949 6.3412 40.1475C6.74324 40.3986 7.17167 40.6794 7.62791 40.972C7.85556 41.1187 8.08793 41.2688 8.32736 41.423C8.09028 41.2467 7.86311 41.0566 7.65054 40.8379C7.49453 40.6743 7.34324 40.4965 7.22022 40.2881C7.21928 40.2872 7.21881 40.2862 7.21786 40.2848C7.1778 40.2467 7.12878 40.1992 7.07411 40.1456C7.01802 40.092 6.94826 40.0337 6.87521 39.9683C6.57875 39.7087 6.16304 39.3752 5.7412 39.0488C4.89612 38.3964 4.02652 37.7714 4.02652 37.7714C4.02652 37.7714 4.96587 38.2845 5.88967 38.8301C6.28134 39.0615 6.6683 39.299 6.98361 39.506C6.98361 39.4763 6.98691 39.4467 6.98974 39.4171C6.95816 39.284 6.96853 39.1015 7.09108 38.8038C7.0298 38.7544 6.95581 38.6942 6.87097 38.6241C6.63389 38.4322 6.31763 38.1787 5.99289 37.9355C5.66815 37.6938 5.33256 37.4657 5.07145 37.3086C4.94231 37.2281 4.83155 37.167 4.75283 37.1237C4.68308 37.0866 4.64066 37.0635 4.63123 37.0584C4.6416 37.0617 4.68826 37.0776 4.76132 37.1026C4.84616 37.1322 4.96682 37.1764 5.10916 37.2347C5.39478 37.3486 5.76807 37.523 6.13334 37.7131C6.49815 37.9021 6.85589 38.1048 7.12265 38.2568C7.19147 38.2967 7.25368 38.333 7.30883 38.3645C7.38094 38.2389 7.46437 38.0997 7.56476 37.9445C7.5148 37.8979 7.45588 37.8452 7.38895 37.785C7.17309 37.5908 6.87898 37.3396 6.57026 37.1082C6.26013 36.8782 5.93256 36.6689 5.67333 36.5349C5.54419 36.4653 5.43437 36.4145 5.35472 36.3797C5.2859 36.3491 5.24254 36.3312 5.23311 36.327C5.24348 36.3289 5.2892 36.3397 5.36226 36.3585C5.44474 36.3783 5.5654 36.4112 5.70491 36.4587C5.98723 36.5495 6.3544 36.7028 6.70883 36.8839C7.06327 37.0645 7.40592 37.2691 7.65808 37.4285C7.72454 37.4708 7.78392 37.5089 7.83671 37.5428C7.91589 37.4299 8.00309 37.3105 8.09594 37.1839C8.04739 37.1289 7.97858 37.0541 7.8895 36.9695C7.70427 36.7879 7.43043 36.564 7.13727 36.3613C6.8441 36.1586 6.53303 35.9752 6.29407 35.8482C6.08338 35.7363 5.93115 35.6615 5.89721 35.6455C5.93303 35.654 6.09611 35.6991 6.32564 35.772C6.58582 35.8543 6.92941 35.9799 7.26688 36.1309C7.60341 36.2818 7.93145 36.4625 8.16711 36.6219C8.25808 36.6812 8.33537 36.7371 8.39665 36.7832C8.49798 36.6501 8.60591 36.5118 8.72233 36.3651C7.93192 35.7927 5.81944 34.4203 4.38143 34.9546L0.563229 38.673C0.112643 39.1123 -0.0970965 39.7529 0.0447722 40.3653C0.15082 40.8201 0.42466 41.2424 1.0666 41.289C1.47477 41.21 2.40611 40.195 2.84303 39.6969C2.73509 39.6221 2.61962 39.5483 2.49707 39.4773C2.40517 39.4255 2.3076 39.3738 2.20815 39.3286C2.20485 39.3286 2.20297 39.3286 2.19967 39.3277C2.15631 39.3216 2.09268 39.3131 2.01679 39.3098C1.8655 39.3023 1.65482 39.3089 1.4743 39.3879C1.42858 39.4072 1.38616 39.4312 1.34846 39.4608C1.30934 39.4895 1.27634 39.5243 1.24806 39.56C1.21931 39.5972 1.19858 39.6381 1.18161 39.6786C1.16464 39.7195 1.15427 39.7609 1.14673 39.7999C1.14013 39.838 1.134 39.8747 1.134 39.9076C1.13306 39.9405 1.1307 39.9688 1.13306 39.9923C1.134 40.0271 1.13636 40.0515 1.13636 40.0619C1.13447 40.0525 1.12788 40.029 1.11939 39.9942C1.11279 39.9711 1.11091 39.9415 1.10478 39.9086C1.0996 39.8747 1.0996 39.8366 1.09724 39.7947C1.09818 39.7524 1.10148 39.7073 1.11091 39.6574C1.12128 39.6099 1.13825 39.5582 1.16275 39.5088C1.18821 39.4603 1.2212 39.4105 1.26126 39.3672C1.30132 39.323 1.34799 39.284 1.39795 39.251C1.45403 39.2129 1.51436 39.1824 1.57375 39.157C1.46393 39.1518 1.35694 39.1654 1.25749 39.2035C1.21931 39.2172 1.18349 39.2322 1.15474 39.2468C1.12316 39.2595 1.09206 39.2774 1.06283 39.2962C1.0025 39.3319 0.947359 39.3752 0.901169 39.4251C0.805962 39.5224 0.743275 39.6438 0.718295 39.7684C0.691901 39.893 0.701328 40.0196 0.73432 40.1282C0.766842 40.2378 0.824343 40.33 0.892685 40.393C0.961499 40.4551 1.04162 40.4847 1.11044 40.4847C1.17925 40.4857 1.23015 40.4603 1.26362 40.4457C1.28813 40.4311 1.30368 40.4226 1.31028 40.4179C1.30509 40.4231 1.29048 40.4339 1.26692 40.4509C1.23392 40.4687 1.18444 40.5002 1.11138 40.5078C1.03832 40.5153 0.945474 40.4918 0.861578 40.4306C0.778153 40.3681 0.705098 40.2731 0.65608 40.156C0.607534 40.0388 0.58114 39.8982 0.595751 39.7496C0.610833 39.6019 0.669749 39.4458 0.77344 39.3155C0.824343 39.2492 0.885616 39.1899 0.952072 39.1391C1.01664 39.0883 1.10337 39.038 1.16982 39.006C1.33055 38.9237 1.51672 38.895 1.69252 38.9006C2.0479 38.9124 2.37264 39.0295 2.66062 39.1551C2.9486 39.283 3.20123 39.4284 3.41192 39.5605C3.57688 39.664 3.71545 39.7599 3.82433 39.838C3.82527 39.838 3.82668 39.839 3.82668 39.839C4.66093 40.3177 6.21677 41.2537 8.6078 42.8538C8.97308 43.0983 9.4213 43.2084 9.85257 43.1219C10.4012 43.0123 10.6628 42.652 11.0125 42.2033C11.2802 41.86 11.5786 41.4442 11.7963 41.1361C11.7086 41.0717 11.6186 41.0063 11.5277 40.9395C11.1431 40.6587 10.7358 40.3441 10.305 40.0177Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M13.1297 8.81074C13.1297 9.26179 13.4959 9.62771 13.9484 9.62771C14.4004 9.62771 14.7671 9.26226 14.7671 8.81074C14.7671 8.35969 14.4004 7.99377 13.9484 7.99377C13.4959 7.99424 13.1297 8.35969 13.1297 8.81074Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M19.0703 8.80458C19.0703 8.35353 18.7036 7.98761 18.2516 7.98761C17.7996 7.98761 17.4329 8.35306 17.4329 8.80458C17.4329 9.25563 17.7996 9.62154 18.2516 9.62154C18.7036 9.62154 19.0703 9.25563 19.0703 8.80458Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M16.0981 8.26843C15.7978 8.26843 15.5542 8.51159 15.5542 8.8112C15.5542 9.1108 15.7978 9.35396 16.0981 9.35396C16.3983 9.35396 16.642 9.1108 16.642 8.8112C16.642 8.51112 16.3988 8.26843 16.0981 8.26843Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M20.3952 8.26843C20.095 8.26843 19.8513 8.51159 19.8513 8.8112C19.8513 9.1108 20.095 9.35396 20.3952 9.35396C20.6954 9.35396 20.9391 9.1108 20.9391 8.8112C20.9391 8.51112 20.6954 8.26843 20.3952 8.26843Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M41.0948 23.5749C41.1363 23.6784 41.1664 23.8025 41.1721 23.9441C41.1778 24.0857 41.1481 24.2432 41.0778 24.3928C41.0613 24.4309 41.0406 24.4667 41.0194 24.5033L40.9836 24.556L40.9501 24.6045C40.9261 24.6369 40.9072 24.6684 40.886 24.6999C40.8657 24.7324 40.8441 24.7658 40.8247 24.8001C40.747 24.9379 40.6711 25.0847 40.6075 25.2385C40.5429 25.3932 40.4896 25.555 40.4425 25.7173C40.3963 25.8814 40.3614 26.0474 40.3374 26.213C40.3115 26.3786 40.2978 26.5427 40.2945 26.7026C40.2912 26.8621 40.2936 27.0173 40.3077 27.1635C40.3218 27.2919 40.335 27.4147 40.3562 27.528C40.4024 27.2924 40.639 26.6655 41.2428 25.4435C41.7311 24.4549 41.2998 23.7654 41.0152 23.4042C41.043 23.4536 41.0698 23.5105 41.0948 23.5749Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M33.2194 17.7291C33.1968 18.8748 33.7544 19.6824 34.2224 20.1565C34.1937 20.0836 34.164 20.0055 34.1343 19.9232C34.0353 19.649 33.9363 19.3217 33.8671 18.9633C33.7964 18.6049 33.7582 18.215 33.7737 17.8246C33.7822 17.6294 33.8058 17.4352 33.8421 17.247C33.8793 17.058 33.9354 16.8778 34.0004 16.7066C34.0669 16.5401 34.1447 16.3788 34.2286 16.2363C34.3125 16.0924 34.4063 15.9649 34.5005 15.8553C34.6914 15.6361 34.8898 15.4936 35.0388 15.416C35.0675 15.4014 35.0939 15.3883 35.1184 15.377C35.1481 15.3389 35.1665 15.3187 35.1665 15.3187C34.9525 15.3196 33.2586 15.7664 33.2194 17.7291Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M41.4865 21.9419C41.7132 21.8431 42.0332 21.6409 42.2156 21.2656C42.6827 20.3329 42.0209 19.6918 42.0209 19.6918C41.9818 20.2553 41.7287 20.7995 40.7748 20.5079C40.4415 20.4063 40.2615 19.9407 40.1686 19.3777C40.1672 19.3993 40.1663 19.4219 40.1658 19.444C40.154 19.6288 40.1559 19.8132 40.1526 19.9957C40.154 20.0865 40.1559 20.1777 40.1583 20.2671C40.1597 20.3574 40.1611 20.443 40.1682 20.5304C40.1913 20.8714 40.2577 21.1903 40.344 21.4532C40.3859 21.5854 40.4349 21.7025 40.4825 21.8055C40.5292 21.909 40.5768 21.9951 40.6173 22.0661C40.6588 22.1366 40.6928 22.1912 40.7177 22.2269C40.7389 22.2589 40.7521 22.2773 40.7545 22.282C40.7517 22.2782 40.7366 22.2603 40.7125 22.2307C40.6843 22.1973 40.6447 22.146 40.5966 22.0797C40.549 22.012 40.4929 21.9297 40.4354 21.8304C40.3779 21.7312 40.3162 21.616 40.2591 21.4852C40.1455 21.2247 40.0456 20.9062 39.9867 20.5511C39.9641 20.4152 39.9471 20.2751 39.9292 20.133C39.9254 20.2821 39.9207 20.4293 39.916 20.5737C39.8953 21.1635 39.875 21.7133 39.8576 22.1851C39.8496 22.4207 39.8481 22.6357 39.8514 22.8271C39.8576 23.0176 39.8661 23.1836 39.8858 23.32C39.8929 23.3877 39.9038 23.4484 39.9122 23.5011C39.9207 23.5533 39.9302 23.5984 39.9386 23.6342C39.9518 23.6972 39.9603 23.7343 39.9617 23.7428C39.9594 23.7343 39.9495 23.6977 39.9316 23.6356C39.9207 23.5998 39.9089 23.5566 39.8972 23.5044C39.8849 23.4517 39.8698 23.3915 39.859 23.3242C39.8307 23.1888 39.8123 23.0218 39.7935 22.8299C39.7789 22.6389 39.7671 22.4217 39.76 22.1855C39.7482 21.7138 39.7341 21.1645 39.7185 20.5742C39.71 20.2802 39.6992 19.9755 39.686 19.6679C39.6789 19.5131 39.6714 19.3579 39.6643 19.2013C39.6563 19.0442 39.6511 18.8871 39.6379 18.7333C39.6247 18.5781 39.6162 18.4234 39.6007 18.2691C39.5828 18.1153 39.5649 17.9629 39.547 17.8115C39.5305 17.6972 39.5121 17.5852 39.4932 17.4733C39.5276 17.7268 39.5564 17.9855 39.5729 18.2489C39.6016 18.611 39.6049 18.9812 39.6002 19.3494C39.5903 19.5338 39.5856 19.7187 39.5682 19.9011C39.5488 20.0836 39.5371 20.2666 39.506 20.4458C39.4928 20.5352 39.4796 20.6245 39.4664 20.7129C39.4508 20.8014 39.4305 20.8893 39.4136 20.9763C39.3947 21.0629 39.3801 21.1499 39.3584 21.235C39.3358 21.3197 39.3132 21.4034 39.2906 21.4866C39.2505 21.6545 39.1916 21.8145 39.1402 21.9715C39.0921 22.13 39.0229 22.2787 38.9649 22.4245C38.9088 22.5722 38.8348 22.7076 38.7712 22.8412C38.7368 22.907 38.708 22.9743 38.6722 23.0354C38.6354 23.0975 38.6005 23.1582 38.5652 23.2175C38.4337 23.4583 38.2791 23.6591 38.1556 23.843C38.017 24.017 37.8964 24.1694 37.7927 24.2898C37.6009 24.4925 37.4811 24.6186 37.4538 24.6473C37.4797 24.6172 37.5919 24.485 37.7715 24.2724C37.869 24.1464 37.9803 23.9893 38.109 23.8101C38.2216 23.6205 38.363 23.415 38.4804 23.1704C38.5115 23.1097 38.5426 23.0486 38.5756 22.986C38.6076 22.923 38.6326 22.8562 38.6623 22.7895C38.7184 22.6549 38.7839 22.519 38.8305 22.3713C38.8796 22.2241 38.9394 22.0774 38.9781 21.9198C39.021 21.7627 39.07 21.6052 39.1001 21.4387C39.1171 21.3573 39.1346 21.274 39.1525 21.1899C39.169 21.1066 39.1789 21.0205 39.193 20.9359C39.2053 20.8503 39.2203 20.7642 39.2302 20.6777C39.2387 20.5907 39.2467 20.5027 39.2552 20.4152C39.2764 20.2403 39.2778 20.0615 39.2873 19.8842C39.2943 19.7055 39.2887 19.5268 39.2896 19.348C39.275 18.9896 39.2529 18.6331 39.2062 18.2832C39.1859 18.1073 39.1595 17.9333 39.1298 17.7625C39.1346 17.8331 39.1393 17.9041 39.1421 17.9765C39.1624 18.4304 39.1562 18.9017 39.1063 19.3781C39.0573 19.8546 38.9653 20.3367 38.8136 20.8014C38.7763 20.9171 38.7344 21.0323 38.6896 21.1456C38.6411 21.2609 38.5977 21.3653 38.5487 21.4768C38.4469 21.6983 38.3432 21.9142 38.2221 22.1202C37.9883 22.5359 37.7074 22.9179 37.3982 23.2494C37.0899 23.5829 36.7544 23.8637 36.4372 24.1224C36.1185 24.3806 35.8197 24.6223 35.5647 24.8693C35.3093 25.1148 35.0991 25.3645 34.9313 25.5992C34.7644 25.8339 34.6343 26.0507 34.5401 26.2365C34.4896 26.3273 34.4519 26.4124 34.4171 26.4844C34.3812 26.5568 34.3548 26.6203 34.3332 26.6716C34.294 26.7609 34.2714 26.8145 34.2662 26.8263C34.271 26.8141 34.2922 26.76 34.3261 26.6692C34.3464 26.617 34.3704 26.5526 34.4034 26.4778C34.4359 26.4039 34.4703 26.3169 34.517 26.2243C34.6037 26.0347 34.7258 25.8109 34.8846 25.5668C35.0444 25.3227 35.2475 25.0607 35.4969 24.802C35.7453 24.541 36.0384 24.2837 36.3453 24.0137C36.6516 23.7433 36.9693 23.455 37.2535 23.1206C37.5401 22.7871 37.795 22.4108 38.0043 22.0012C38.1118 21.7985 38.2037 21.5845 38.2918 21.3714C38.3347 21.2642 38.3776 21.1475 38.4163 21.0417C38.4544 20.9331 38.4893 20.8225 38.5204 20.7106C38.6448 20.2652 38.7146 19.8033 38.7424 19.3471C38.7702 18.8899 38.757 18.4379 38.7207 18.0015C38.7028 17.7926 38.6788 17.5881 38.6505 17.3877C38.6637 17.9347 38.6448 18.5024 38.5836 19.0658C38.5751 19.1585 38.5619 19.2507 38.5501 19.3433L38.5313 19.484L38.511 19.6199C38.4785 19.8104 38.4346 19.9924 38.3818 20.1702C38.2758 20.5276 38.1287 20.8625 37.9643 21.172C37.7974 21.4805 37.6112 21.7637 37.4199 22.0186C37.2276 22.2744 37.0296 22.5021 36.8387 22.7038C36.456 23.1065 36.1002 23.4018 35.8456 23.6003C35.7179 23.6991 35.6161 23.7734 35.5459 23.8232C35.4912 23.8613 35.4573 23.8863 35.4441 23.8957C35.4573 23.8849 35.4907 23.8585 35.5416 23.8181C35.6095 23.7644 35.7066 23.6845 35.8282 23.5787C36.0705 23.368 36.4084 23.0542 36.7638 22.6361C36.9405 22.4268 37.1229 22.1921 37.2973 21.932C37.4708 21.6724 37.6362 21.3874 37.7804 21.0803C37.9228 20.7731 38.0463 20.4453 38.1269 20.1024C38.1674 19.9322 38.1994 19.7558 38.2188 19.5841L38.232 19.4473L38.239 19.3142C38.2437 19.2239 38.2499 19.134 38.2513 19.0428C38.2584 18.8283 38.2584 18.6138 38.2536 18.4008C38.2013 18.6632 38.1377 18.9233 38.0618 19.175C37.9737 19.4656 37.8695 19.7384 37.7564 20.0051C37.6428 20.2675 37.5165 20.514 37.3864 20.7421C37.2563 20.9693 37.1187 21.1748 36.9853 21.3601C36.8519 21.545 36.7176 21.7044 36.5969 21.8446C36.4739 21.9819 36.3632 22.0985 36.2684 22.1912C36.1751 22.2843 36.0987 22.3553 36.0464 22.4024C36.0177 22.4282 35.9965 22.4475 35.9828 22.4597C35.9951 22.4456 36.0153 22.4249 36.0422 22.3967C36.0912 22.3464 36.1619 22.2707 36.2496 22.1719C36.3377 22.0741 36.4395 21.9504 36.5517 21.806C36.6625 21.6607 36.7845 21.4942 36.9038 21.3037C37.023 21.1132 37.1451 20.9025 37.2573 20.6725C37.3685 20.4416 37.4755 20.1927 37.5698 19.9312C37.6607 19.6707 37.7465 19.3904 37.8134 19.1082C37.8587 18.9106 37.8969 18.7103 37.927 18.5071C37.9162 18.5297 37.9044 18.5522 37.8936 18.5748L37.8361 18.6858L37.7116 18.9022L37.6937 18.9318L37.6772 18.9577L37.6452 19.008C37.6013 19.0757 37.5603 19.1425 37.5141 19.2093C37.3294 19.4821 37.1357 19.7285 36.9396 19.9646C36.7416 20.197 36.5423 20.4147 36.3467 20.6146C36.1511 20.8136 35.9616 20.9961 35.7811 21.1593C35.6029 21.3239 35.4323 21.4669 35.2801 21.5929C35.1273 21.718 34.9921 21.8229 34.878 21.9076C34.7635 21.9908 34.6739 22.0562 34.6103 22.0971C34.5552 22.1338 34.5222 22.1554 34.5151 22.1601C34.5222 22.1545 34.5533 22.1305 34.6056 22.0901C34.6654 22.044 34.7503 21.9725 34.8578 21.8817C34.9647 21.7891 35.0915 21.6757 35.2334 21.5407C35.3753 21.4048 35.5332 21.2501 35.6986 21.0746C35.8645 20.9006 36.0384 20.7064 36.2166 20.4961C36.3943 20.2854 36.5738 20.0578 36.7501 19.817C36.9236 19.5743 37.0975 19.3165 37.2493 19.0513C37.2884 18.9845 37.3256 18.912 37.3638 18.8429L37.3925 18.7902L37.4067 18.7639L37.4166 18.7408L37.4656 18.636L37.5146 18.5301L37.5584 18.422C37.5881 18.3505 37.6159 18.278 37.64 18.2042C37.672 18.1115 37.7008 18.0184 37.7272 17.9243C37.7022 17.9577 37.6772 17.9921 37.6499 18.0236C37.6037 18.0725 37.566 18.1223 37.5151 18.1689C37.4722 18.2103 37.4302 18.2512 37.377 18.295C37.2775 18.381 37.1762 18.4506 37.0702 18.5155C36.8585 18.6416 36.6332 18.7263 36.4145 18.7681C36.1963 18.8119 35.9856 18.8142 35.7962 18.793C35.4163 18.7493 35.124 18.6129 34.9487 18.4836C34.8606 18.4191 34.8017 18.3552 34.7706 18.3062C34.7564 18.2809 34.7456 18.262 34.7409 18.247C34.7376 18.2362 34.7347 18.2301 34.7338 18.2277C34.7352 18.2301 34.7385 18.2357 34.7432 18.2456C34.7493 18.2597 34.7625 18.2776 34.779 18.3001C34.8149 18.3434 34.8785 18.3989 34.9704 18.4502C35.1528 18.5536 35.4488 18.6501 35.8037 18.6477C35.9814 18.6463 36.1723 18.6204 36.3608 18.5583C36.5498 18.4986 36.7365 18.4008 36.9052 18.271C36.9872 18.2056 37.072 18.1318 37.1413 18.0542C37.1762 18.0184 37.2144 17.9718 37.2526 17.9253C37.2851 17.8872 37.3157 17.8373 37.3468 17.7945C37.3638 17.7682 37.3793 17.7409 37.3954 17.7146C37.0169 18.0114 36.4947 18.2004 35.8103 17.9897C35.7618 17.9751 35.7174 17.9563 35.6769 17.9347C35.3475 17.8905 35.035 17.6967 34.8568 17.3096C34.4411 16.408 34.9129 15.6503 35.1 15.4029C35.0845 15.4114 35.0675 15.4217 35.0501 15.4325C34.9091 15.5186 34.7253 15.6719 34.5561 15.8982C34.4727 16.011 34.3916 16.1408 34.3209 16.2843C34.2493 16.4296 34.1871 16.5834 34.1338 16.7527C34.0834 16.9183 34.0395 17.0942 34.0155 17.2743C33.9905 17.4554 33.9806 17.6403 33.983 17.826C33.9905 18.1962 34.0485 18.5645 34.1371 18.9012C34.2233 19.2384 34.3355 19.5446 34.4453 19.8005C34.5552 20.0573 34.6617 20.2628 34.7399 20.4044C34.779 20.4749 34.8106 20.5295 34.8328 20.5653C34.8545 20.6001 34.8662 20.6189 34.8662 20.6189C34.8662 20.6189 34.6782 20.6908 34.5212 20.799C32.4281 22.5383 33.1822 24.1007 33.1822 24.1007C33.8637 23.9451 34.2337 23.4206 34.6428 22.9348C35.0519 22.4489 35.733 22.1964 35.5968 22.8181C35.4785 23.3586 34.2884 23.7517 33.4032 25.2968C33.4042 25.3316 33.4047 25.3673 33.4065 25.4036C33.4197 25.5809 33.44 25.7671 33.4838 25.9576C33.5211 26.1481 33.5833 26.34 33.6488 26.5338C33.6879 26.6288 33.7214 26.7257 33.7647 26.8197L33.8288 26.9618L33.8991 27.101C33.9443 27.195 33.9985 27.2835 34.0494 27.3738C34.1065 27.4603 34.1559 27.5511 34.2167 27.6334C34.3313 27.8037 34.459 27.9593 34.5882 28.1037C34.7187 28.2467 34.8578 28.3728 34.9963 28.4823C35.0312 28.5087 35.067 28.5327 35.1024 28.5576C35.1203 28.5703 35.1372 28.5825 35.1547 28.5943C35.1599 28.5976 35.1665 28.6013 35.1717 28.6042C35.1415 28.5581 35.1142 28.5087 35.0906 28.4532C34.5259 27.132 35.675 26.5488 35.675 26.5488C37.5061 25.6505 38.5195 24.6731 38.9027 24.2536C38.0609 25.3556 38.5765 26.4712 38.5765 26.4712C38.7019 26.1664 39.4084 25.7958 39.5168 25.7398C39.5314 25.7003 39.5432 25.6589 39.5602 25.6218C39.5771 25.5846 39.5936 25.547 39.6106 25.5117C39.6271 25.476 39.6426 25.4412 39.6582 25.4073C39.6752 25.3749 39.695 25.3443 39.711 25.3142C39.7459 25.2549 39.7756 25.1999 39.8062 25.1533C39.8387 25.1091 39.8675 25.0696 39.891 25.0376C39.9269 24.9878 39.9504 24.9553 39.9603 24.9426C39.9523 24.9567 39.9325 24.9925 39.9019 25.0447C39.8821 25.079 39.858 25.1209 39.8312 25.1684C39.8062 25.2173 39.7826 25.2747 39.7548 25.3363C39.7416 25.3673 39.727 25.3984 39.7129 25.4318C39.702 25.4666 39.6898 25.5019 39.678 25.5381C39.6657 25.5748 39.653 25.6119 39.6408 25.6509C39.6285 25.689 39.6214 25.7295 39.6106 25.7699C39.6012 25.8104 39.5913 25.8522 39.5818 25.8936C39.5724 25.9355 39.5677 25.9792 39.5606 26.022C39.5545 26.0653 39.5465 26.109 39.5418 26.1523L39.5371 26.2139C39.6191 26.8842 39.9999 27.3042 40.2092 27.4895C40.1833 27.394 40.1606 27.2915 40.1432 27.1838C40.1182 27.0314 40.1003 26.8696 40.0956 26.7012C40.0918 26.5323 40.0989 26.3583 40.1192 26.1819C40.1404 26.0065 40.1752 25.8292 40.2219 25.6552C40.2671 25.4812 40.3294 25.3109 40.3996 25.1486C40.4703 24.9854 40.5509 24.8293 40.6433 24.6868C40.6649 24.6501 40.6899 24.6162 40.7135 24.5809C40.7385 24.5466 40.7635 24.5109 40.7875 24.4817C40.8101 24.4516 40.8327 24.422 40.8554 24.3923C40.8742 24.3627 40.895 24.335 40.9105 24.3053C40.9807 24.1873 41.0133 24.0603 41.025 23.9394C41.0368 23.8181 41.0222 23.7038 41.001 23.6031C40.9798 23.5029 40.9487 23.4164 40.9218 23.3459C40.8968 23.2861 40.8742 23.2377 40.8563 23.2029C40.8921 23.2513 40.9496 23.3162 41.0166 23.4009C41.0001 23.3713 40.984 23.3459 40.968 23.3214C40.9261 23.2555 40.8865 23.208 40.8591 23.177C40.8379 23.153 40.8243 23.138 40.8186 23.1337C40.8233 23.1422 40.8365 23.1648 40.8544 23.2005C40.8304 23.1685 40.8162 23.1455 40.8162 23.1304C40.8162 22.9945 40.7771 22.8972 41.568 23.2861C42.3584 23.6746 43.0555 22.9362 43.0555 22.9362C43.0555 22.9362 42.9386 22.7805 42.6662 22.4503C42.2203 21.949 41.7622 21.9029 41.4865 21.9419Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M37.7564 29.5627C39.3928 27.2952 37.3553 26.2822 37.3096 26.26C37.9675 27.6809 36.9754 28.789 36.0912 28.9471C36.0902 28.9471 36.0898 28.948 36.0879 28.948C36.0629 28.956 36.0356 28.9621 36.0078 28.9706C35.9493 28.9922 35.8838 28.9931 35.8131 29.0016C35.7782 29.0068 35.7415 29.0063 35.7042 29.0044C35.667 29.003 35.6279 29.0016 35.5873 28.9997C35.5482 28.9941 35.5086 28.9866 35.4676 28.9795C35.4469 28.9757 35.4257 28.9715 35.4045 28.9677C35.3837 28.9621 35.3635 28.956 35.3423 28.9499C35.1716 28.908 35.002 28.8238 34.8299 28.7251C34.6631 28.6202 34.4958 28.4941 34.3407 28.3464C34.188 28.1978 34.0376 28.0346 33.9075 27.8535C33.8392 27.7646 33.7798 27.6692 33.7176 27.5751C33.6615 27.4773 33.6016 27.3808 33.5517 27.2788C33.4456 27.0784 33.3622 26.8668 33.2906 26.6561C33.2307 26.4599 33.1798 26.2643 33.1511 26.0691C33.1426 26.1683 33.1369 26.2713 33.1364 26.3786C33.1388 26.5098 33.1459 26.6457 33.1661 26.7826C33.1737 26.8517 33.1892 26.9195 33.201 26.9895C33.2189 27.0573 33.2312 27.1273 33.2533 27.1941C33.2736 27.2619 33.2939 27.33 33.3203 27.3954C33.3325 27.4279 33.3443 27.4617 33.3575 27.4942L33.4004 27.5906C33.4579 27.7181 33.5258 27.8394 33.5974 27.9528C33.6705 28.0656 33.7468 28.171 33.8265 28.266C33.8467 28.29 33.8656 28.3135 33.8849 28.3366C33.9052 28.3591 33.9254 28.3808 33.9457 28.4019C33.9862 28.4447 34.0221 28.4885 34.0626 28.5247C34.1413 28.5995 34.212 28.671 34.2813 28.726C34.3501 28.782 34.4081 28.8342 34.4604 28.8709C34.5632 28.9471 34.6216 28.9903 34.6216 28.9903C34.6216 28.9903 34.5594 28.9513 34.451 28.8836C34.3949 28.8516 34.3327 28.805 34.2596 28.7537C34.1847 28.7039 34.1079 28.638 34.0211 28.5694C33.9773 28.535 33.9372 28.4941 33.892 28.4541C33.8703 28.4339 33.8477 28.4137 33.8251 28.393C33.8034 28.3714 33.7817 28.3488 33.7595 28.3253C33.67 28.235 33.5819 28.1324 33.497 28.0219C33.4122 27.9109 33.3311 27.7905 33.2595 27.6612L33.2057 27.5638C33.1883 27.5304 33.1737 27.4961 33.1572 27.4627C33.1228 27.395 33.0964 27.3249 33.0681 27.2553C33.0394 27.1852 33.0191 27.1123 32.9941 27.0408C32.9894 27.0215 32.9842 27.0018 32.9786 26.9825C32.98 27.1015 32.9885 27.2233 33.0012 27.347C33.02 27.49 33.0417 27.6362 33.0785 27.7783C33.1119 27.9222 33.1605 28.0619 33.2123 28.1973C33.2406 28.2651 33.2708 28.33 33.3005 28.3953C33.3349 28.4574 33.366 28.5214 33.4018 28.5811C33.44 28.6395 33.4734 28.6992 33.513 28.7537C33.5536 28.8074 33.5894 28.8624 33.6309 28.9118C33.6728 28.9607 33.7134 29.0091 33.7525 29.0548C33.7954 29.098 33.8368 29.1394 33.8755 29.1799C33.9146 29.2213 33.9575 29.2537 33.9952 29.289C34.0343 29.3224 34.0692 29.3567 34.1074 29.383C34.1814 29.4376 34.2431 29.4898 34.2992 29.5251C34.3888 29.5834 34.4477 29.6215 34.4675 29.6347C34.4477 29.6239 34.3855 29.5905 34.2907 29.5392C34.2313 29.5082 34.1654 29.4616 34.0857 29.4122C34.0461 29.3882 34.0079 29.3562 33.965 29.3261C33.9245 29.2937 33.8778 29.2641 33.835 29.225C33.7916 29.1879 33.7463 29.1479 33.6992 29.1074C33.6549 29.0632 33.6097 29.0181 33.563 28.9706C33.5163 28.924 33.4739 28.8704 33.4282 28.8172C33.382 28.7646 33.3424 28.7053 33.2981 28.6479C33.2562 28.5887 33.2185 28.5252 33.1775 28.4621C33.1407 28.3968 33.1035 28.3309 33.0681 28.2622C33.0012 28.1249 32.939 27.981 32.8914 27.8324C32.8711 27.7726 32.8532 27.7129 32.8367 27.6522C32.8423 27.7533 32.8508 27.8559 32.8631 27.9598C32.8843 28.1132 32.9116 28.2674 32.9526 28.4198L32.9828 28.5341L33.0196 28.646C33.0422 28.7213 33.0733 28.7928 33.1011 28.8652C33.1298 28.9376 33.1666 29.0058 33.1977 29.075C33.2345 29.1418 33.2708 29.2081 33.3075 29.2725C33.3485 29.3337 33.3867 29.3967 33.4291 29.455C33.473 29.5119 33.514 29.5684 33.5578 29.622C33.6031 29.6732 33.6474 29.7231 33.6903 29.7711C33.7364 29.8162 33.7812 29.8604 33.8241 29.9023C33.8656 29.9456 33.9123 29.9794 33.9542 30.0156C33.9971 30.05 34.0343 30.0862 34.0758 30.1135C34.1559 30.1694 34.2229 30.2231 34.2837 30.2597C34.3817 30.3195 34.4463 30.3585 34.4665 30.3717C34.4453 30.3618 34.3784 30.3265 34.2747 30.2739C34.2115 30.2419 34.1399 30.1939 34.0541 30.1431C34.0108 30.1182 33.9702 30.0848 33.924 30.0528C33.8797 30.0194 33.8288 29.9884 33.784 29.9479C33.7364 29.9084 33.6874 29.867 33.637 29.8242C33.5894 29.7781 33.5404 29.7302 33.4899 29.6812C33.4414 29.63 33.3947 29.5749 33.3452 29.5194C33.2976 29.4621 33.2533 29.4004 33.2053 29.3393C33.1614 29.2758 33.1185 29.2104 33.0752 29.1427C33.037 29.0726 32.9932 29.0044 32.9583 28.9311C32.9234 28.8572 32.8843 28.7843 32.8546 28.7072L32.807 28.5919L32.7655 28.4744C32.7608 28.4621 32.7575 28.4485 32.7533 28.4353C32.7594 28.5233 32.7688 28.6117 32.7792 28.7011C32.8018 28.868 32.8306 29.0374 32.8734 29.2038L32.906 29.329L32.9441 29.4508C32.9672 29.5331 33.0012 29.6116 33.0304 29.6916C33.0601 29.7711 33.0983 29.8454 33.1308 29.9225C33.169 29.9964 33.2081 30.0688 33.2463 30.1403C33.2892 30.2089 33.3297 30.2781 33.3731 30.3425C33.4192 30.4065 33.4626 30.4686 33.5069 30.5283C33.5555 30.5857 33.6012 30.6417 33.6464 30.6953C33.694 30.7475 33.7421 30.7955 33.7864 30.843C33.8307 30.8919 33.8797 30.9314 33.9236 30.9718C33.9688 31.0109 34.0084 31.0518 34.0513 31.0828C34.1371 31.1473 34.2078 31.2079 34.2723 31.2498C34.3845 31.3246 34.4538 31.3716 34.4703 31.382C34.4533 31.3725 34.3798 31.3316 34.2629 31.2639C34.195 31.2267 34.1196 31.1708 34.0291 31.1115C33.9839 31.0828 33.941 31.0447 33.8929 31.008C33.8453 30.9699 33.7935 30.9333 33.7449 30.8867C33.6959 30.8415 33.6436 30.7964 33.5913 30.747C33.5413 30.6948 33.4899 30.6412 33.4372 30.5862C33.3872 30.5278 33.3382 30.4667 33.2859 30.4041C33.2368 30.3406 33.1902 30.2729 33.1412 30.2042C33.0959 30.1342 33.0507 30.0613 33.0064 29.9874C32.9668 29.9103 32.9215 29.835 32.8848 29.7551C32.848 29.6742 32.8075 29.5942 32.7773 29.51L32.7283 29.3849L32.6854 29.2565C32.6543 29.1625 32.6269 29.067 32.6029 28.9706C32.7165 29.9757 33.1138 30.8227 33.6662 31.3838C34.6984 32.4331 34.0169 34.2594 34.0169 34.2594C35.3319 34.2773 35.4478 32.8433 35.4573 32.6645C35.4299 33.2967 36.0031 33.735 36.0031 33.735C36.3537 33.521 36.5484 32.7831 36.4122 32.3358C36.276 31.889 35.2046 31.1308 35.1462 30.684C35.0877 30.2372 35.3993 30.0429 35.7108 30.2955C36.0224 30.5481 35.847 31.2474 36.3146 31.753C36.7822 32.2582 37.697 32.1806 38.2814 31.4031C38.8659 30.6257 39.6638 30.3538 39.6638 30.3538C38.6717 29.1935 37.7564 29.5627 37.7564 29.5627Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M18.4528 25.8202C18.3364 25.8089 18.2148 25.8658 18.2148 25.8658C18.2459 26.0182 18.3491 26.0704 18.3854 26.085C18.1592 26.0361 18.1804 25.8362 18.1804 25.8362C18.3482 25.7595 18.4528 25.8202 18.4528 25.8202Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M18.9666 25.8006C18.8926 25.8495 18.8271 25.912 18.7696 25.8904C18.7663 25.889 18.763 25.8871 18.7616 25.8871C18.8257 25.8674 18.8337 25.8034 18.919 25.7625C19.0585 25.7037 19.0698 25.8363 19.0698 25.8363V25.8739C19.0698 25.8739 19.0684 25.8739 19.0684 25.8706C19.0651 25.8561 19.0552 25.8086 19.0255 25.7921C19.034 25.8151 19.0401 25.8495 19.0241 25.8754C19.0161 25.8885 19.0043 25.8984 18.9845 25.905C18.9746 25.9083 18.9647 25.9097 18.9534 25.9116C18.9534 25.9116 19.0387 25.8594 18.9666 25.8006Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M13.3173 24.2709V25.7675C13.3173 30.4751 17.1553 34.3031 21.8727 34.3031H22.1419V24.2709H13.3173ZM20.6449 28.376C20.6534 28.3219 20.5959 28.2829 20.5959 28.2829C20.619 28.3812 20.5021 28.4776 20.5021 28.4776L20.4498 28.3939C20.4286 28.5218 20.34 28.566 20.34 28.566C20.3697 28.535 20.34 28.4512 20.34 28.4512C20.2957 28.4414 20.2283 28.3398 20.2283 28.3398C20.1972 28.3807 20.0247 28.3628 20.0247 28.3628L20.069 28.4202C20.0167 28.4249 19.8654 28.3581 19.7867 28.3398C19.7065 28.3233 19.3045 28.5119 19.3045 28.5119C19.255 28.6497 18.919 28.8755 18.919 28.8755L18.9223 28.7838V28.7824C19.0307 28.6841 19.2027 28.5336 19.2126 28.5237C19.1537 28.5467 18.9651 28.6906 18.8582 28.7744C18.7483 28.8237 18.6102 28.9202 18.6008 28.9282C18.8747 28.8628 18.9849 29.0918 18.9849 29.0918C19.4101 29.1934 19.3215 30.1774 19.2376 30.1383C19.1914 30.1172 19.1523 30.0809 19.1259 30.0546C19.3064 29.4977 18.9911 29.1981 18.975 29.1854C19.2621 29.5556 19.0915 30.0142 19.0915 30.0142V30.0174C19.0571 30.1303 18.8487 30.2009 18.8747 30.2893C18.901 30.3777 19.1584 30.682 19.3045 30.6985C19.4506 30.7164 19.3964 30.6016 19.5684 30.5706C19.7424 30.5395 19.7636 30.7554 19.7636 30.7554C19.7636 30.7554 19.8602 30.7159 19.8885 30.8669C19.9149 31.0174 19.7065 31.1274 19.7065 31.1274L19.7376 31.0178C19.7197 31.0785 19.6179 31.1636 19.6179 31.1636V31.0832C19.6047 31.1326 19.5378 31.1636 19.5378 31.1636C19.5609 31.0785 19.4506 30.9868 19.4506 30.9868C19.4011 31.0752 19.2767 31.0033 19.2767 31.0033L18.6993 30.6185C18.7455 30.6547 19.1146 30.9313 19.2423 31.0804C19.206 31.1246 19.1537 31.1589 19.1537 31.1589C19.1273 31.0889 18.8699 30.9595 18.8171 30.8988C18.7648 30.8368 18.7776 30.7088 18.6498 30.642C18.3133 30.5668 18.4236 30.2804 18.4236 30.2804C18.5777 30.095 18.4891 29.8956 18.4891 29.8956C18.4566 29.8778 18.4203 29.8533 18.3873 29.8303C18.4316 29.7367 18.466 29.6337 18.4825 29.5307C18.5023 29.398 18.4429 29.2673 18.3331 29.1901C18.1672 29.074 18.0527 28.9757 17.9739 28.8985C17.8934 28.82 17.849 28.7626 17.8245 28.7231C17.8212 28.7184 17.8198 28.7132 17.8179 28.7099C17.8047 28.6822 17.7967 28.661 17.7915 28.6493C17.793 28.654 17.793 28.6605 17.7963 28.6671V28.6685C17.7963 28.6699 17.7977 28.6751 17.801 28.6798C17.8024 28.6878 17.8076 28.6996 17.8109 28.7109C17.8274 28.7551 17.8533 28.819 17.8943 28.8891L17.8962 28.891C17.9174 28.9267 17.9419 28.9644 17.9716 29.002C18.0013 29.0396 18.0357 29.0758 18.0748 29.1102C18.0946 29.1266 18.1158 29.1431 18.1389 29.1591C18.162 29.1723 18.1832 29.1887 18.2096 29.1986L18.2487 29.2165C18.2586 29.2216 18.2732 29.2263 18.2831 29.2329C18.2916 29.2376 18.2996 29.2442 18.3076 29.2508C18.319 29.2593 18.3289 29.2706 18.3388 29.2818C18.3534 29.3016 18.3651 29.3246 18.3717 29.3491C18.3783 29.3736 18.3816 29.398 18.3816 29.4244C18.3831 29.4766 18.3732 29.5274 18.3618 29.5767C18.3439 29.6421 18.2831 29.786 18.2765 29.8044V29.8077C18.2765 29.8077 18.2747 29.8077 18.2747 29.8096C18.2747 29.811 18.2732 29.8129 18.2714 29.8161C18.2714 29.8176 18.2714 29.8194 18.2699 29.8227V29.8241C18.2567 29.8538 18.2402 29.8862 18.219 29.921C18.2157 29.9257 18.2124 29.9323 18.2091 29.9389C18.2058 29.9422 18.2044 29.9455 18.2007 29.9502C18.1959 29.9587 18.1908 29.9648 18.186 29.9732C18.1846 29.9746 18.1827 29.9779 18.1813 29.9798C18.1799 29.9812 18.1799 29.9831 18.178 29.9831C18.1747 29.9878 18.1714 29.9944 18.1681 29.9996L18.1667 30.001C18.1521 30.0207 18.137 30.0419 18.1224 30.0617C18.1224 30.0631 18.121 30.0631 18.121 30.0631V30.0649H18.1196V30.0664C17.9834 30.2432 17.8175 30.4069 17.8175 30.4069C17.7685 30.3053 17.7944 30.2037 17.7944 30.2037C17.7581 30.2578 17.4974 30.3147 17.4498 30.3462C17.4008 30.3773 17.4135 30.7244 17.4894 30.7554C17.5648 30.7864 17.5389 30.69 17.7062 30.659C17.8736 30.6279 17.8915 30.849 17.8915 30.849C17.8915 30.849 18.0211 30.8095 18.0244 30.9473C18.0296 31.0832 17.8439 31.1796 17.8439 31.1796L17.8519 31.0959C17.8472 31.1481 17.7289 31.2417 17.7454 31.2154C17.7633 31.189 17.7501 31.1185 17.7501 31.1185C17.7421 31.1627 17.6615 31.2154 17.6615 31.2154C17.6666 31.0776 17.5597 31.0597 17.5597 31.0597C17.4663 31.158 17.3612 31.0743 17.3612 31.0743C17.3202 31.0987 17.2825 31.079 17.2627 31.0663L17.1378 30.6764C17.1444 30.7126 17.1986 30.9957 17.2165 31.102C17.1736 31.1397 17.1081 31.1627 17.1081 31.1627C17.126 31.0512 17.0242 30.6943 17.0242 30.6943L17.0897 30.588L16.9488 30.2705C16.9309 30.128 17.2278 29.9822 17.2278 29.9822C17.2934 29.8858 17.4395 29.7498 17.4395 29.7498C17.3165 29.6614 17.2721 29.3994 17.2721 29.3994L17.2047 29.4305C17.2047 29.4305 16.8734 29.6087 16.6632 29.239C16.6698 29.2602 16.7862 29.6224 17.208 29.5288C17.2326 29.6059 17.2901 29.6873 17.2901 29.6873C17.2901 29.6873 17.1963 29.771 16.9092 29.6873C16.6208 29.604 16.5322 29.2405 16.6255 28.8656C16.7188 28.4907 17.0634 28.0849 17.0242 27.8506C16.9846 27.6164 16.8206 27.6559 16.8206 27.6559C16.8861 27.6658 16.9615 27.8426 16.7763 27.8328C16.5892 27.8243 16.6255 27.6559 16.6255 27.6559C16.5548 27.6427 16.4714 27.559 16.4714 27.559C16.5237 27.5722 16.5944 27.4758 16.5944 27.4758V27.4297C16.798 27.3366 16.9356 27.4311 16.9587 27.4476C16.8404 27.2345 16.8027 27.0774 16.8027 26.9579C16.8027 26.8008 16.8682 26.7171 16.9059 26.6814C16.9172 26.6767 16.9304 26.6734 16.9436 26.6715C17.1388 26.6405 17.1883 26.8563 17.0718 26.8926C16.9568 26.9269 16.9309 26.8206 16.9309 26.8206C16.8979 26.8926 16.8979 26.9711 16.913 27.0431C16.9328 27.1334 16.9752 27.2152 17.0016 27.2594C17.1227 27.5952 17.2905 28.2288 16.9653 28.5331H16.9667C16.9846 28.5284 17.2128 28.4889 17.3424 28.6968C17.3311 28.7706 17.3193 28.8129 17.3193 28.8129L17.2142 28.7588C17.209 28.8308 17.045 28.9093 17.0106 28.7998C16.9743 28.6883 17.0945 28.6718 17.0945 28.6718C17.0765 28.6177 17.019 28.6177 17.019 28.6177C16.8729 28.662 16.8107 28.8468 16.7975 28.9794C16.7843 29.1121 16.8418 29.3251 17.0553 29.3068C17.267 29.2889 17.1963 29.0236 17.3919 28.8614C17.5856 28.6977 17.8198 28.321 17.9315 28.123C17.989 28.0181 17.9791 27.9198 17.9579 27.8511V27.8497C18.1926 27.6597 18.6423 27.671 18.729 27.6743C18.2172 27.6004 17.9923 27.6888 17.8985 27.7561C17.8754 27.766 17.8146 27.7824 17.7623 27.725C17.6968 27.655 17.628 27.4386 17.5983 27.3977C17.7312 27.3615 17.9428 27.3304 18.2219 27.3337C18.6795 27.3403 18.8011 27.2044 18.8077 27.1959C18.7997 27.2006 18.6206 27.3121 18.2219 27.2712C17.8217 27.2303 17.4475 27.353 17.4277 27.3582C17.4932 27.306 17.4701 27.2044 17.4701 27.2044C17.4404 27.0454 17.4489 26.9278 17.4588 26.8606C17.5507 26.8474 17.6935 26.8375 17.8886 26.8606C18.1922 26.8949 18.4778 26.8507 18.5631 26.8342C18.4957 26.8427 18.2874 26.8587 17.8886 26.8065C17.472 26.7524 17.3702 26.7886 17.3471 26.8032C17.4456 26.7232 17.4602 26.5055 17.4621 26.4006C17.6605 26.4316 17.956 26.4429 18.1219 26.4467C17.825 26.4283 17.3867 26.3221 17.3867 26.3221C17.5083 26.2482 17.5771 26.0521 17.6049 25.9618C17.8146 26.0667 18.1493 26.1109 18.212 26.1175C17.9037 26.0422 17.7015 25.9571 17.6063 25.9096C17.562 25.8898 17.5408 25.8766 17.5408 25.8766C17.5408 25.8766 17.6082 25.8536 17.718 25.7882C17.8769 25.5935 18.0117 25.5295 18.0725 25.5098C18.1531 25.6476 18.3317 25.6946 18.3661 25.7012C18.13 25.6274 18.1083 25.4604 18.1083 25.4604C18.1606 25.4966 18.3378 25.4656 18.3378 25.4656C18.6248 25.4345 18.8073 25.5836 18.8073 25.5836C18.8073 25.5836 18.8549 25.633 18.9614 25.6297C19.0679 25.6245 19.0764 25.7261 19.0764 25.7261L19.4487 25.9162C19.5194 26.0126 19.4256 26.0488 19.4256 26.0488C19.4435 26.101 19.4204 26.1715 19.3601 26.2468C19.3356 26.2764 19.3012 26.2962 19.2762 26.3108C19.2484 26.2976 19.189 26.2698 19.1268 26.2647C19.0938 26.2633 19.0627 26.268 19.0335 26.283H19.0321C18.9383 26.3141 18.9383 26.4124 18.9383 26.4124C18.9383 26.4124 18.9859 26.3239 19.0731 26.3075C19.1782 26.2877 19.2159 26.4072 19.3111 26.3564H19.3125C19.4096 26.3366 19.5274 26.1847 19.5274 26.1847C19.5472 26.4895 19.28 26.5219 19.2173 26.5252C19.2159 26.5055 19.2074 26.4796 19.1862 26.45C19.1862 26.45 19.1782 26.4989 19.1537 26.5219C19.1075 26.5168 19.0354 26.5008 18.9779 26.45C18.9892 26.4613 19.0712 26.5549 19.2041 26.5859C19.1975 26.6057 19.1876 26.6301 19.1697 26.6612C19.1108 26.7628 18.9562 26.735 18.9402 26.7331C19.2781 26.8493 19.4421 27.1997 19.452 27.2209V27.2227C19.452 27.2227 19.5194 27.3455 19.5406 27.4452C19.5406 27.4452 19.5359 27.3093 19.4949 27.1931C19.616 27.0835 19.7754 26.7642 19.8508 26.6969C19.9347 26.6217 19.8244 26.4937 19.8244 26.3926C19.8244 26.291 19.9031 26.1504 20.0412 26.1142C20.1788 26.0779 20.3249 26.268 20.3249 26.268L20.2132 26.2647C20.3249 26.268 20.3673 26.4006 20.3673 26.4006L20.2853 26.4053C20.3706 26.4053 20.4479 26.5379 20.4263 26.5248C20.4032 26.5116 20.2179 26.5431 20.2391 26.6969C20.2622 26.8507 20.1736 26.8817 20.1736 26.8817L20.1689 27.0111C20.0407 27.0948 19.9078 27.337 19.9078 27.337C19.798 27.7429 19.5666 27.8939 19.5666 27.8939L19.5453 27.9362C19.1928 27.9447 19.0712 28.1117 19.058 28.1328C19.2187 27.9983 19.4534 28.0002 19.5109 28.0021L19.5095 28.0035H19.5227H19.5241V28.0021C19.5571 27.9988 19.6373 27.9856 19.7277 27.9381C19.8428 27.876 19.9705 27.9329 20.0492 27.9823C20.1298 28.0312 20.1345 27.9593 20.356 27.9249C20.5757 27.8887 20.5596 28.0167 20.5596 28.0167C20.5596 28.0167 20.5629 27.9724 20.6435 28.0134C20.783 28.1027 20.6449 28.376 20.6449 28.376ZM17.3636 28.5317C17.3061 28.502 17.2175 28.4696 17.1209 28.4795C17.2062 28.3765 17.3589 28.0585 17.0388 27.3088C17.3834 27.6442 17.3947 28.1977 17.3636 28.5317Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M26.9032 16.7979C26.8443 16.8191 26.7802 16.757 26.7048 16.7081C26.6341 16.7669 26.7194 16.8196 26.7194 16.8196C26.7081 16.8182 26.6963 16.8163 26.6883 16.813C26.6685 16.8064 26.6553 16.7965 26.6487 16.7852C26.6402 16.7721 26.6374 16.7589 26.6374 16.7443C26.6374 16.7279 26.6407 16.7114 26.6459 16.7001C26.6181 16.7166 26.6063 16.7655 26.6049 16.7786C26.6035 16.7819 26.6035 16.7833 26.6035 16.7833V16.7438C26.6035 16.7438 26.6148 16.6112 26.7543 16.67C26.8396 16.7123 26.8476 16.7749 26.9117 16.7946C26.9098 16.7946 26.9065 16.7965 26.9032 16.7979Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M27.2199 16.7292C27.2199 16.7292 27.3232 16.6686 27.4924 16.7438C27.4924 16.7438 27.5136 16.9451 27.2873 16.9926C27.3236 16.978 27.4268 16.9254 27.458 16.7734C27.458 16.7734 27.3349 16.7161 27.2199 16.7292Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M22.6075 23.8044H31.6042V14.8724H22.6075V23.8044ZM29.0708 18.175C29.0133 18.1765 28.9426 18.1863 28.8757 18.2174C28.9266 18.0669 29.0006 17.7508 28.7857 17.597C28.9247 17.661 29.043 17.8722 29.0708 18.175ZM28.8955 18.7399C28.7103 18.7498 28.7857 18.5729 28.8512 18.5631C28.8512 18.5631 28.6872 18.524 28.6476 18.7578C28.608 18.992 28.953 19.3979 29.0463 19.7732C29.1382 20.1481 29.0496 20.5117 28.7626 20.5954C28.4755 20.6786 28.3817 20.5954 28.3817 20.5954C28.3817 20.5954 28.4392 20.5135 28.4638 20.4383C28.8856 20.53 29.002 20.1683 29.0072 20.1486C28.7989 20.5187 28.4656 20.34 28.4656 20.34L28.4001 20.3089C28.4001 20.3089 28.3558 20.569 28.2328 20.6575C28.2328 20.6575 28.3775 20.7934 28.4444 20.8917C28.4444 20.8917 28.7414 21.0375 28.7235 21.1781L28.5806 21.4956L28.648 21.6019C28.648 21.6019 28.5462 21.9589 28.5646 22.0703C28.5646 22.0703 28.4991 22.0492 28.4562 22.0097C28.4727 21.9034 28.5269 21.6216 28.5349 21.584L28.41 21.9739C28.3902 21.9871 28.3525 22.0068 28.3115 21.9819C28.3115 21.9819 28.205 22.0656 28.1131 21.9687C28.1131 21.9687 28.0066 21.9852 28.0113 22.1225C28.0113 22.1225 27.9312 22.0703 27.9227 22.0261C27.9227 22.0261 27.9095 22.0962 27.926 22.1225C27.9439 22.1489 27.8242 22.0572 27.8209 22.0031L27.8289 22.0882C27.8289 22.0882 27.6437 21.9899 27.6484 21.854C27.6517 21.7162 27.7799 21.7557 27.7799 21.7557C27.7799 21.7557 27.7978 21.5365 27.967 21.5657C28.1343 21.5967 28.1079 21.695 28.1838 21.664C28.2592 21.6329 28.2724 21.2839 28.2229 21.2529C28.1734 21.2219 27.9128 21.1645 27.8784 21.1123C27.8784 21.1123 27.9048 21.2139 27.8553 21.3136C27.8553 21.3136 27.6894 21.1499 27.5532 20.973V20.9716H27.5517C27.5517 20.9702 27.5503 20.9702 27.5503 20.9683C27.5357 20.9486 27.5206 20.9293 27.506 20.9081C27.5046 20.9081 27.5046 20.9063 27.5046 20.9063C27.5013 20.9016 27.498 20.8964 27.4947 20.8898C27.4933 20.8898 27.4914 20.8884 27.4914 20.8865C27.49 20.8851 27.4881 20.8832 27.4867 20.8799C27.482 20.8715 27.4768 20.8653 27.4721 20.8569C27.4688 20.8517 27.4674 20.8484 27.4641 20.8456C27.4608 20.839 27.4575 20.8343 27.4542 20.8277C27.433 20.7934 27.4165 20.7623 27.4033 20.7313V20.7294C27.4014 20.728 27.4014 20.7261 27.4 20.7247C27.4 20.7214 27.3986 20.7181 27.3986 20.7167L27.3972 20.7153V20.712C27.3906 20.6941 27.3297 20.5498 27.3118 20.4844C27.3005 20.4355 27.2906 20.3847 27.2906 20.332C27.292 20.3056 27.2953 20.2812 27.3019 20.2567C27.3085 20.2323 27.3199 20.2092 27.3345 20.1895C27.3429 20.1782 27.3543 20.1664 27.3656 20.1584C27.3722 20.1519 27.3802 20.1471 27.3901 20.142C27.4 20.1354 27.4146 20.1288 27.4245 20.1241L27.4622 20.1076C27.4886 20.0964 27.5112 20.0799 27.5343 20.0667C27.5574 20.0521 27.5786 20.0357 27.5984 20.0173C27.6375 19.983 27.6724 19.9473 27.7016 19.9092C27.7313 19.8715 27.7558 19.8339 27.777 19.7977C27.777 19.7977 27.777 19.7963 27.7785 19.7963C27.8195 19.7257 27.844 19.6618 27.8623 19.6176C27.8656 19.6063 27.8689 19.5964 27.8722 19.5865C27.8737 19.5818 27.8755 19.5785 27.8774 19.5752V19.5738C27.8821 19.5606 27.884 19.5508 27.884 19.5475C27.8826 19.5541 27.8727 19.5785 27.8562 19.6161C27.8548 19.6194 27.851 19.6246 27.8496 19.6293C27.8001 19.7064 27.671 19.8635 27.3411 20.0959C27.2312 20.173 27.1719 20.3038 27.1917 20.4364C27.2063 20.5394 27.2426 20.6429 27.2869 20.736C27.2539 20.7605 27.218 20.7835 27.1836 20.8033C27.1836 20.8033 27.095 21.0013 27.251 21.1866C27.251 21.1866 27.3609 21.4749 27.0243 21.5483C26.8961 21.6155 26.9093 21.743 26.857 21.8051C26.8028 21.8671 26.5469 21.9951 26.5205 22.0656C26.5205 22.0656 26.4682 22.0313 26.4305 21.9871C26.5436 21.8563 26.8424 21.6268 26.9442 21.5483L26.3961 21.9118C26.3961 21.9118 26.273 21.9824 26.224 21.894C26.224 21.894 26.1142 21.9857 26.1354 22.0708C26.1354 22.0708 26.0699 22.0398 26.0567 21.9908V22.0708C26.0567 22.0708 25.9549 21.9857 25.937 21.925L25.9681 22.0346C25.9681 22.0346 25.7598 21.925 25.7857 21.7745C25.8121 21.624 25.9106 21.6649 25.9106 21.6649C25.9106 21.6649 25.9318 21.4486 26.1043 21.4782C26.2782 21.5092 26.224 21.624 26.3701 21.6075C26.5162 21.5897 26.7736 21.2849 26.8 21.1965C26.8264 21.108 26.6181 21.038 26.5832 20.9246V20.9232C26.5832 20.9232 26.4126 20.4646 26.6996 20.0931C26.6831 20.1076 26.3682 20.4058 26.5488 20.9627C26.5224 20.989 26.4832 21.0248 26.4371 21.046C26.3518 21.0855 26.2631 20.1011 26.6883 19.9995C26.6883 19.9995 26.8 19.7704 27.0738 19.8358C27.0639 19.8278 26.9263 19.7309 26.8165 19.682C26.71 19.5987 26.521 19.4543 26.462 19.4332C26.4668 19.4384 26.5129 19.4774 26.5704 19.5282C26.6279 19.579 26.6986 19.6411 26.7524 19.6919L26.7557 19.7836C26.7557 19.7836 26.4192 19.5574 26.3701 19.4219C26.3701 19.4219 25.9681 19.2319 25.8875 19.2498C25.8088 19.2662 25.658 19.3335 25.6052 19.3283L25.6495 19.2709C25.6495 19.2709 25.4756 19.2888 25.4459 19.2498C25.4459 19.2498 25.3785 19.3495 25.3342 19.3593C25.3342 19.3593 25.3031 19.4431 25.3342 19.4741C25.3342 19.4741 25.2456 19.4299 25.2243 19.3024L25.1701 19.3857C25.1701 19.3857 25.0551 19.2893 25.0782 19.191C25.0782 19.191 25.0207 19.2319 25.0292 19.2841C25.0292 19.2841 24.8897 19.0104 25.0273 18.9219C25.1093 18.8829 25.1126 18.9271 25.1126 18.9271C25.1126 18.9271 25.0947 18.7978 25.3163 18.834C25.5378 18.8702 25.5425 18.9403 25.6212 18.8914C25.7018 18.842 25.8295 18.7851 25.9445 18.8471C26.0346 18.8947 26.1151 18.9078 26.1481 18.9125H26.1496H26.1609C26.2184 18.9092 26.4531 18.9092 26.6138 19.0419C26.6006 19.0207 26.479 18.8537 26.1265 18.8453L26.1034 18.8029C26.1034 18.8029 25.8738 18.6524 25.7635 18.2461C25.7635 18.2461 25.6306 18.0038 25.5029 17.9201L25.4977 17.7922C25.4977 17.7922 25.4091 17.7612 25.4303 17.6055C25.4534 17.4517 25.2677 17.4202 25.2446 17.4333C25.2234 17.4465 25.3007 17.3139 25.3874 17.3139L25.3021 17.3106C25.3021 17.3106 25.3464 17.1779 25.4581 17.1728L25.3464 17.1775C25.3464 17.1775 25.4925 16.9875 25.6302 17.0218C25.7664 17.058 25.847 17.1986 25.847 17.3002C25.847 17.4018 25.7371 17.5293 25.8206 17.605C25.8946 17.6723 26.0553 17.9911 26.1769 18.1012C26.1345 18.2193 26.1293 18.3533 26.1293 18.3533C26.1524 18.255 26.2179 18.1308 26.2179 18.1308H26.2193C26.2292 18.1078 26.3932 17.7574 26.7312 17.6412C26.7147 17.6445 26.5605 17.6708 26.5016 17.5707C26.4837 17.5382 26.4719 17.5133 26.4672 17.4935C26.5983 17.4639 26.6822 17.3708 26.692 17.3595C26.6345 17.4084 26.5638 17.4249 26.5181 17.4315C26.4936 17.407 26.4851 17.3576 26.4851 17.3576C26.462 17.3872 26.4554 17.4131 26.454 17.4329C26.3918 17.4296 26.1241 17.3966 26.1439 17.0923C26.1439 17.0923 26.1736 17.13 26.2146 17.1709C26.2556 17.2118 26.3098 17.2546 26.3588 17.2645C26.454 17.3153 26.4936 17.1958 26.5968 17.2151C26.6854 17.2316 26.7331 17.3214 26.7331 17.3214C26.7331 17.3214 26.7331 17.2217 26.6378 17.1906C26.6082 17.1761 26.577 17.1709 26.5445 17.1728C26.4823 17.1775 26.4215 17.2057 26.3951 17.2189C26.3687 17.2043 26.3362 17.1845 26.3117 17.1549C26.2495 17.0796 26.2278 17.0091 26.2462 16.9569C26.2462 16.9569 26.1529 16.9207 26.2231 16.8243L26.5954 16.6342C26.5954 16.6342 26.6039 16.5326 26.7104 16.5378C26.817 16.5411 26.8646 16.4936 26.8646 16.4936C26.8646 16.4936 27.0465 16.3431 27.3335 16.3741C27.3335 16.3741 27.5107 16.4052 27.5631 16.3694C27.5631 16.3694 27.5418 16.5364 27.3057 16.6117C27.3401 16.6037 27.5192 16.5562 27.5993 16.4184C27.6602 16.4381 27.7945 16.5016 27.9538 16.6968C28.0636 16.7622 28.1296 16.7852 28.1296 16.7852C28.1296 16.7852 28.1084 16.7984 28.0655 16.8195C27.9703 16.8656 27.7686 16.9508 27.4603 17.026C27.5225 17.0194 27.8572 16.9766 28.0674 16.8703C28.0938 16.9602 28.164 17.1568 28.2856 17.2306C28.2856 17.2306 27.8477 17.3369 27.5508 17.3548C27.7167 17.3515 28.0103 17.3402 28.2102 17.3092C28.2102 17.414 28.2267 17.6318 28.3233 17.7118C28.3021 17.6986 28.1984 17.6624 27.7836 17.7165C27.4113 17.764 27.2044 17.7527 27.1238 17.7461C27.2237 17.764 27.4947 17.8016 27.7836 17.7691C27.9788 17.7461 28.1216 17.756 28.2116 17.7691C28.2229 17.8364 28.2314 17.954 28.2017 18.113C28.2017 18.113 28.1786 18.2146 28.2441 18.2686C28.2243 18.2621 27.8487 18.1393 27.4499 18.1802C27.0512 18.2211 26.8726 18.1116 26.8627 18.105C26.8712 18.113 26.9923 18.2489 27.4499 18.2442C27.729 18.239 27.9406 18.2705 28.0721 18.3063C28.0443 18.3486 27.975 18.5631 27.9095 18.6355C27.8572 18.6915 27.7964 18.675 27.7733 18.6651C27.6781 18.5979 27.4499 18.508 26.9282 18.5852C26.9282 18.5852 26.9626 18.5838 27.0168 18.5838C27.1775 18.5838 27.5188 18.6035 27.7144 18.7606C27.6913 18.8293 27.6814 18.9276 27.7407 19.0325C27.8525 19.2324 28.0853 19.6072 28.2804 19.7709C28.4755 19.9331 28.4053 20.1979 28.6169 20.2163C28.8304 20.2342 28.8875 20.0216 28.8729 19.8889C28.8597 19.7577 28.7989 19.5715 28.6532 19.5268C28.6532 19.5268 28.5957 19.5268 28.5778 19.5809C28.5778 19.5809 28.6975 19.5973 28.6612 19.7088C28.625 19.8184 28.4628 19.7398 28.4576 19.6693L28.3511 19.7215C28.3511 19.7215 28.3412 19.6792 28.3299 19.6053C28.4581 19.3974 28.6876 19.4384 28.7055 19.4416H28.707C28.566 19.3104 28.5165 19.1171 28.5165 18.9144C28.5165 18.6458 28.6019 18.3594 28.6707 18.168C28.6971 18.1238 28.7395 18.0434 28.7579 17.9516C28.7744 17.8797 28.7744 17.8011 28.7414 17.7306C28.7414 17.7306 28.7136 17.8355 28.5986 17.8011C28.4836 17.7649 28.533 17.549 28.7282 17.5801C28.7395 17.5815 28.7527 17.5848 28.7659 17.59C28.8036 17.6257 28.8691 17.7094 28.8691 17.8665C28.8691 17.986 28.8314 18.1464 28.7098 18.3594C28.7112 18.358 28.7112 18.358 28.7131 18.3561C28.7362 18.3397 28.8738 18.2447 29.0774 18.3383V18.3843C29.0774 18.3843 29.1477 18.4808 29.2004 18.4676C29.2004 18.4676 29.117 18.5513 29.0463 18.564C29.0463 18.5631 29.0807 18.7319 28.8955 18.7399ZM28.6344 18.216C28.3129 18.9661 28.4671 19.2836 28.5524 19.3866C28.4539 19.3782 28.3653 19.4097 28.3096 19.4388C28.2785 19.1049 28.2898 18.5532 28.6344 18.216Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M12.3737 13.9604V26.1768C12.3737 31.287 16.5251 35.4316 21.6479 35.4316H23.274C28.395 35.4316 32.5483 31.2875 32.5483 26.1768V13.9604H12.3737ZM31.9935 25.7677C31.9935 30.6897 27.9802 34.6931 23.0492 34.6931H21.8728C16.9404 34.6931 12.9266 30.6897 12.9266 25.7677V14.4844H31.9935V25.7677Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M22.6075 24.2709V34.3031H23.0492C27.7667 34.3031 31.6047 30.4751 31.6047 25.7675V24.2709H22.6075ZM25.2545 27.5651C25.3068 27.5651 25.3478 27.6079 25.3478 27.6601C25.3478 27.7123 25.3068 27.7552 25.2545 27.7552H25.1051C25.1051 27.7552 25.1183 27.9776 25.443 28.099C25.443 28.099 25.2545 28.2269 25.0231 28.058C25.0231 28.058 25.0839 28.4771 24.8822 28.5919C24.6785 28.4771 24.7393 28.058 24.7393 28.058C24.5098 28.2264 24.3194 28.099 24.3194 28.099C24.6441 27.9776 24.6573 27.7552 24.6573 27.7552H24.5098C24.4575 27.7552 24.4146 27.7123 24.4146 27.6601C24.4146 27.6079 24.4575 27.5651 24.5098 27.5651H24.5296C24.5296 27.362 24.3736 26.9579 24.1441 27.0445C23.9277 27.187 24.1031 27.4438 24.1031 27.4438C23.3042 27.2147 23.5271 26.3352 24.1031 26.4566C24.6724 26.5779 24.6757 27.5435 24.6757 27.5651H24.7643C24.7643 27.5651 24.7775 27.3718 24.7101 27.0722C24.646 26.7905 24.4688 26.6663 24.4688 26.1734C24.4688 25.6805 24.8822 25.3499 24.8822 25.3499C24.8822 25.3499 25.2941 25.6805 25.2941 26.1734C25.2941 26.6663 25.1169 26.7905 25.0528 27.0722C24.9854 27.3718 24.9986 27.5651 24.9986 27.5651H25.0886C25.0886 27.5651 25.0839 26.5793 25.6598 26.4566C26.2358 26.3352 26.4587 27.2147 25.6598 27.4438C25.6598 27.4438 25.8371 27.1865 25.6188 27.0445C25.3893 26.9575 25.2333 27.362 25.2333 27.5651H25.2545ZM27.6861 30.714C27.6861 30.714 27.8619 30.4572 27.6451 30.3147C27.4155 30.2277 27.2595 30.6322 27.2595 30.8354H27.2793C27.3316 30.8354 27.3745 30.8777 27.3745 30.9304C27.3745 30.9826 27.3321 31.0254 27.2793 31.0254H27.1299C27.1299 31.0254 27.1445 31.2478 27.4697 31.3692C27.4697 31.3692 27.2793 31.4985 27.0498 31.3283C27.0498 31.3283 27.1106 31.7473 26.907 31.8621C26.7034 31.7473 26.7642 31.3283 26.7642 31.3283C26.5346 31.4985 26.3456 31.3692 26.3456 31.3692C26.6704 31.2483 26.6836 31.0254 26.6836 31.0254H26.5342C26.4818 31.0254 26.4389 30.9826 26.4389 30.9304C26.4389 30.8782 26.4814 30.8354 26.5342 30.8354H26.5554C26.5554 30.6322 26.3994 30.2277 26.1684 30.3147C25.9516 30.4572 26.1288 30.714 26.1288 30.714C25.3294 30.485 25.5529 29.6054 26.1288 29.7268C26.6963 29.8477 26.7001 30.8123 26.7001 30.8354H26.7901C26.7901 30.8354 26.8033 30.642 26.7359 30.3424C26.6718 30.0607 26.4931 29.9365 26.4931 29.4436C26.4931 28.9507 26.9065 28.6201 26.9065 28.6201C26.9065 28.6201 27.3199 28.9507 27.3199 29.4436C27.3199 29.9365 27.1412 30.0612 27.0785 30.3424C27.0097 30.642 27.0243 30.8354 27.0243 30.8354H27.1129C27.1129 30.8142 27.1162 29.8477 27.6856 29.7268C28.2601 29.6054 28.485 30.485 27.6861 30.714ZM29.7109 27.4443C29.7109 27.4443 29.8867 27.187 29.6699 27.045C29.4403 26.9579 29.2843 27.3624 29.2843 27.5656H29.3055C29.3565 27.5656 29.3993 27.6084 29.3993 27.6606C29.3993 27.7128 29.3565 27.7556 29.3055 27.7556H29.1561C29.1561 27.7556 29.1693 27.9781 29.4941 28.0994C29.4941 28.0994 29.3055 28.2274 29.0741 28.0585C29.0741 28.0585 29.1349 28.4776 28.9332 28.5923C28.7296 28.4776 28.7904 28.0585 28.7904 28.0585C28.5609 28.2269 28.3704 28.0994 28.3704 28.0994C28.6952 27.9781 28.7084 27.7556 28.7084 27.7556H28.5609C28.5085 27.7556 28.4656 27.7128 28.4656 27.6606C28.4656 27.6084 28.5081 27.5656 28.5609 27.5656H28.5806C28.5806 27.3624 28.4246 26.9584 28.1951 27.045C27.9788 27.1875 28.1541 27.4443 28.1541 27.4443C27.3552 27.2152 27.5781 26.3357 28.1541 26.457C28.7235 26.5784 28.7268 27.544 28.7268 27.5656H28.8154C28.8154 27.5656 28.8286 27.3723 28.7612 27.0727C28.6971 26.791 28.5198 26.6668 28.5198 26.1739C28.5198 25.681 28.9332 25.3503 28.9332 25.3503C28.9332 25.3503 29.3451 25.681 29.3451 26.1739C29.3451 26.6668 29.1679 26.791 29.1038 27.0727C29.0364 27.3723 29.0496 27.5656 29.0496 27.5656H29.1382C29.1382 27.5444 29.1415 26.5784 29.7109 26.457C30.2868 26.3357 30.5098 27.2152 29.7109 27.4443Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M13.3173 23.8044H22.1419V14.8724H13.3173V23.8044ZM16.4822 21.1537C16.4822 21.1537 16.658 20.8964 16.4412 20.7558C16.2117 20.6673 16.0557 21.0718 16.0557 21.2745H16.0755C16.1278 21.2745 16.1707 21.3173 16.1707 21.3695C16.1707 21.4217 16.1278 21.4645 16.0755 21.4645H15.926C15.926 21.4645 15.9407 21.687 16.2659 21.8084C16.2659 21.8084 16.0755 21.9377 15.8459 21.7689C15.8459 21.7689 15.9067 22.1865 15.7031 22.3027C15.5014 22.1865 15.5622 21.7689 15.5622 21.7689C15.3308 21.9377 15.1422 21.8084 15.1422 21.8084C15.467 21.687 15.4802 21.4645 15.4802 21.4645H15.3308C15.2784 21.4645 15.2374 21.4217 15.2374 21.3695C15.2374 21.3173 15.2784 21.2745 15.3308 21.2745H15.352C15.352 21.0713 15.196 20.6673 14.9664 20.7558C14.7482 20.8964 14.9254 21.1537 14.9254 21.1537C14.1265 20.9246 14.3495 20.0451 14.9254 20.1678C15.5014 20.2887 15.4967 21.2745 15.4967 21.2745H15.5867C15.5867 21.2745 15.5999 21.0812 15.5325 20.7816C15.4684 20.4999 15.2912 20.3757 15.2912 19.8828C15.2912 19.3899 15.7031 19.0593 15.7031 19.0593C15.7031 19.0593 16.1165 19.3899 16.1165 19.8828C16.1165 20.3757 15.9392 20.4999 15.8751 20.7816C15.8077 21.0812 15.8209 21.2745 15.8209 21.2745H15.9095C15.9095 21.2534 15.9128 20.2873 16.4822 20.1678C17.0582 20.0451 17.2816 20.9241 16.4822 21.1537ZM18.1017 18.2635C18.154 18.2635 18.195 18.3058 18.195 18.3585C18.195 18.4107 18.154 18.4521 18.1017 18.4521H17.9523C17.9523 18.4521 17.9655 18.6764 18.2902 18.7978C18.2902 18.7978 18.1017 18.9252 17.8703 18.7568C17.8703 18.7568 17.9325 19.1759 17.7293 19.2907C17.5257 19.1759 17.5865 18.7568 17.5865 18.7568C17.357 18.9252 17.1666 18.7978 17.1666 18.7978C17.4913 18.6764 17.5064 18.4521 17.5064 18.4521H17.357C17.3047 18.4521 17.2618 18.4112 17.2618 18.3585C17.2618 18.3063 17.3047 18.2635 17.357 18.2635H17.3768C17.3768 18.0603 17.2208 17.6544 16.9912 17.7428C16.7744 17.8853 16.9502 18.1421 16.9502 18.1421C16.1509 17.9112 16.3743 17.0335 16.9502 17.1549C17.5196 17.2744 17.5229 18.2404 17.5229 18.2635H17.6115C17.6115 18.2635 17.6247 18.0702 17.5573 17.7706C17.4932 17.4888 17.316 17.3647 17.316 16.8718C17.316 16.3774 17.7293 16.0463 17.7293 16.0463C17.7293 16.0463 18.1413 16.377 18.1413 16.8718C18.1413 17.3647 17.9641 17.4888 17.9 17.7706C17.8326 18.0702 17.8457 18.2635 17.8457 18.2635H17.9358C17.9358 18.2404 17.9391 17.2744 18.5065 17.1549C19.0825 17.0335 19.3059 17.9112 18.5065 18.1421C18.5065 18.1421 18.6838 17.8853 18.467 17.7428C18.2355 17.6544 18.08 18.0603 18.08 18.2635H18.1017ZM20.5337 21.1537C20.5337 21.1537 20.7095 20.8964 20.4927 20.7558C20.2632 20.6673 20.1072 21.0718 20.1072 21.2745H20.127C20.1793 21.2745 20.2222 21.3173 20.2222 21.3695C20.2222 21.4217 20.1793 21.4645 20.127 21.4645H19.9776C19.9776 21.4645 19.9922 21.687 20.3174 21.8084C20.3174 21.8084 20.127 21.9377 19.8974 21.7689C19.8974 21.7689 19.9582 22.1865 19.7546 22.3027C19.551 22.1865 19.6137 21.7689 19.6137 21.7689C19.3823 21.9377 19.1937 21.8084 19.1937 21.8084C19.5185 21.687 19.5317 21.4645 19.5317 21.4645H19.3823C19.33 21.4645 19.2871 21.4217 19.2871 21.3695C19.2871 21.3173 19.3295 21.2745 19.3823 21.2745H19.4035C19.4035 21.0713 19.2475 20.6673 19.0165 20.7558C18.7997 20.8964 18.9774 21.1537 18.9774 21.1537C18.178 20.9246 18.4014 20.0451 18.9774 20.1678C19.5449 20.2873 19.5482 21.252 19.5482 21.2745H19.6382C19.6382 21.2745 19.6514 21.0812 19.584 20.7816C19.5199 20.4999 19.3413 20.3757 19.3413 19.8828C19.3413 19.3899 19.7546 19.0593 19.7546 19.0593C19.7546 19.0593 20.168 19.3899 20.168 19.8828C20.168 20.3757 19.9907 20.4999 19.9266 20.7816C19.8578 21.0812 19.8724 21.2745 19.8724 21.2745H19.9611C19.9611 21.2534 19.9644 20.2873 20.5337 20.1678C21.1097 20.0451 21.3326 20.9241 20.5337 21.1537Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M40.4289 11.4752C40.4408 11.4761 40.4549 11.4766 40.471 11.4775C40.446 11.4775 40.4209 11.4761 40.3958 11.4728C40.4034 11.4733 40.4143 11.4747 40.4289 11.4752Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M39.8189 8.5064C39.8477 8.50499 39.8882 8.49935 39.9434 8.50875C39.9707 8.51205 40.0027 8.51487 40.0339 8.52522C40.065 8.53462 40.1017 8.54168 40.1366 8.55861C40.2073 8.5873 40.2869 8.62916 40.3609 8.68842L40.4194 8.73263C40.4373 8.75003 40.4562 8.76697 40.4745 8.7839C40.5137 8.81823 40.5462 8.85915 40.5829 8.8996C40.6188 8.94052 40.6508 8.98567 40.6857 9.03082C40.7168 9.07832 40.7493 9.1263 40.7776 9.17757C40.8063 9.22883 40.836 9.28104 40.861 9.33513C40.8893 9.38968 40.9124 9.44565 40.935 9.50303C40.9793 9.61732 41.017 9.73632 41.0481 9.85766C41.0769 9.97901 41.0986 10.1018 41.1103 10.2245C41.1226 10.3473 41.1235 10.4696 41.116 10.5867C41.1122 10.7047 41.0877 10.819 41.0609 10.9248C41.0288 11.0307 40.9892 11.1294 40.9331 11.2103C40.9213 11.232 40.9053 11.2498 40.8898 11.2687C40.8752 11.2865 40.8615 11.3063 40.8445 11.3209C40.8096 11.3496 40.7804 11.3815 40.7441 11.3994C40.7272 11.4093 40.7107 11.4196 40.6942 11.429C40.6786 11.4375 40.6607 11.4422 40.6442 11.4479C40.6287 11.4535 40.6131 11.4587 40.598 11.4634C40.5834 11.4681 40.5683 11.469 40.5542 11.4714C40.5302 11.4742 40.5099 11.4784 40.491 11.4789C41.3149 11.4789 42.1392 10.415 41.5722 9.24059C41.0302 8.11744 39.587 8.49982 39.587 8.49982C39.6516 8.49747 39.7148 8.50123 39.7756 8.51017C39.7756 8.50922 39.7902 8.50875 39.8189 8.5064Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M41.6703 11.2C41.1057 11.7244 40.385 11.4719 40.385 11.4719C40.385 11.4719 40.4001 11.4681 40.4269 11.462C40.4411 11.4587 40.4571 11.4549 40.4774 11.4502C40.4967 11.4455 40.517 11.4347 40.5415 11.4262C40.5533 11.4211 40.5655 11.4168 40.5782 11.4098C40.5891 11.4027 40.6018 11.3952 40.6141 11.3863C40.6263 11.3778 40.6405 11.3717 40.6522 11.3613C40.664 11.3505 40.6763 11.3397 40.689 11.3279C40.7163 11.3077 40.7343 11.2753 40.7583 11.247C40.7771 11.2146 40.7998 11.1826 40.8158 11.1445C40.8238 11.1252 40.8313 11.1055 40.8398 11.0862C40.8478 11.066 40.8521 11.0434 40.8587 11.0227C40.8733 10.9808 40.8799 10.9333 40.8907 10.8868C40.903 10.7903 40.9124 10.6888 40.9105 10.5806C40.9119 10.5279 40.9068 10.4724 40.9044 10.4174C40.8983 10.3623 40.8936 10.3068 40.8855 10.2504C40.87 10.1385 40.8488 10.0251 40.821 9.91223C40.7955 9.79982 40.7635 9.68835 40.7244 9.58206C40.7121 9.54773 40.6984 9.51292 40.6862 9.47953C40.6791 9.80923 40.4189 10.0895 39.7817 10.0731C38.3149 10.0359 37.6475 10.5053 37.6032 10.5378C38.4182 9.81581 38.0868 7.56575 37.6009 6.76948C37.114 5.97273 36.1162 5.37024 36.1162 5.37024C35.5539 5.52733 35.8933 6.8706 35.9706 7.14715C35.9192 6.98301 35.7222 6.44777 35.2254 6.08938C33.2977 5.17599 32.8108 6.76948 32.8108 6.76948C33.8232 6.53619 34.3101 7.3588 34.3101 7.3588C34.3101 7.3588 32.8886 6.86683 32.6548 8.24632C32.421 9.6258 33.6672 10.0731 33.6672 10.0731C33.3948 9.89812 33.0441 8.51864 34.4463 8.51864C36.0323 8.51864 35.8311 9.95832 35.7868 10.2029C35.7995 10.1479 35.8273 10.0406 35.8612 9.96961C35.725 10.5284 35.3649 11.1929 34.4458 11.4911C32.7128 12.0546 31.4473 11.4135 31.0382 10.8501L30.5305 10.8477C30.564 10.8886 30.5998 10.9314 30.6399 10.9742C30.6865 11.0288 30.7412 11.0815 30.795 11.1384C30.852 11.192 30.9095 11.2494 30.9726 11.303C31.0349 11.3566 31.098 11.4126 31.1659 11.4629L31.2663 11.5401C31.3012 11.564 31.3356 11.5876 31.37 11.6115C31.4378 11.6605 31.5085 11.7018 31.5764 11.7437C31.6433 11.7865 31.7126 11.8213 31.7772 11.8556C31.8097 11.873 31.8413 11.89 31.8724 11.9055C31.9035 11.9205 31.9341 11.9337 31.9634 11.9469C32.0218 11.9728 32.0755 11.9991 32.1236 12.0174C32.1726 12.0362 32.2155 12.0518 32.2513 12.0649C32.3121 12.0875 32.3508 12.1016 32.3602 12.1054C32.3517 12.104 32.3103 12.0955 32.2466 12.0814C32.2094 12.0729 32.1642 12.0635 32.1128 12.0518C32.0614 12.0395 32.0044 12.0217 31.9417 12.0033C31.9106 11.9949 31.8776 11.9845 31.8441 11.9756C31.8107 11.9638 31.7763 11.9516 31.7414 11.938C31.6707 11.913 31.5948 11.8876 31.5208 11.8533C31.4454 11.8208 31.3657 11.7879 31.2894 11.7475L31.1725 11.6891L31.057 11.6238C30.9792 11.5819 30.9057 11.533 30.8317 11.486C30.7587 11.4385 30.6894 11.3872 30.6206 11.3392C30.555 11.288 30.4895 11.24 30.432 11.1892C30.3726 11.1403 30.3184 11.0914 30.2694 11.0453C30.1893 10.97 30.1228 10.9023 30.0724 10.8449L29.7887 10.844C29.7948 10.8538 29.8009 10.8651 29.808 10.875C29.833 10.9154 29.8631 10.955 29.8938 10.9978C29.9272 11.0382 29.9593 11.0824 29.9984 11.1229C30.0352 11.1657 30.0748 11.2071 30.1162 11.2466C30.1558 11.2884 30.2001 11.3251 30.2426 11.3641C30.2855 11.4022 30.3307 11.4366 30.3726 11.4714C30.4155 11.5057 30.4594 11.5358 30.4999 11.5664C30.5404 11.5974 30.5814 11.6224 30.6182 11.6473C30.6908 11.6976 30.7554 11.7343 30.7997 11.7616C30.8388 11.7856 30.8628 11.8006 30.868 11.8034C30.8624 11.802 30.8355 11.7917 30.7926 11.7771C30.7436 11.7592 30.6719 11.7357 30.5895 11.7009C30.548 11.684 30.5013 11.6675 30.4556 11.6449C30.4089 11.6233 30.358 11.6012 30.3076 11.5758C30.2572 11.5495 30.2039 11.5236 30.1521 11.4935C30.1007 11.4624 30.046 11.4342 29.9956 11.3994C29.9433 11.366 29.8928 11.3308 29.8438 11.2945C29.7934 11.2588 29.7481 11.2183 29.702 11.1812C29.6586 11.1417 29.6148 11.1036 29.5775 11.0631C29.5379 11.0241 29.5035 10.9846 29.4715 10.9474C29.4404 10.9103 29.413 10.875 29.3904 10.8425L29.0968 10.8416C29.1067 10.8632 29.118 10.8853 29.1293 10.9079C29.1552 10.9615 29.1887 11.0152 29.2221 11.0721C29.258 11.1266 29.2938 11.1849 29.3357 11.24C29.3763 11.2974 29.4215 11.3519 29.4672 11.4069C29.5115 11.462 29.5639 11.5128 29.6105 11.5654C29.6605 11.6158 29.7118 11.6633 29.7609 11.7108C29.8108 11.7564 29.8613 11.7987 29.9089 11.8397C29.9555 11.8815 30.0045 11.9149 30.0474 11.9492C30.0913 11.9826 30.1299 12.0156 30.1671 12.0395C30.2044 12.0654 30.2364 12.087 30.2628 12.1059C30.309 12.1378 30.3382 12.1581 30.3444 12.1628C30.3373 12.1595 30.3052 12.1449 30.2543 12.12C30.2256 12.1068 30.1898 12.0899 30.1492 12.0711C30.1082 12.0522 30.0635 12.0273 30.0144 12.001C29.9664 11.9737 29.9107 11.9483 29.8565 11.914C29.8028 11.8806 29.7439 11.8462 29.6855 11.8081C29.628 11.7686 29.5662 11.7282 29.5073 11.6844C29.4488 11.6388 29.3866 11.5951 29.3305 11.5448C29.273 11.4949 29.2151 11.4455 29.1623 11.3914C29.1071 11.3402 29.0581 11.2832 29.0082 11.2306C28.962 11.1746 28.9153 11.1219 28.8767 11.0674C28.8361 11.0137 28.8012 10.9611 28.7683 10.9112C28.7527 10.8872 28.7386 10.8628 28.7249 10.8407L28.4954 10.8393C28.51 10.8647 28.5255 10.8915 28.543 10.9192C28.5774 10.9785 28.6203 11.0406 28.6646 11.1064C28.7122 11.1699 28.7602 11.239 28.8163 11.3063C28.8715 11.3745 28.9299 11.4441 28.994 11.5109C29.0548 11.581 29.1241 11.6445 29.192 11.7108C29.2589 11.7766 29.3338 11.8349 29.4031 11.898C29.4748 11.9572 29.5497 12.0113 29.6204 12.0664C29.6921 12.119 29.7656 12.1651 29.833 12.2117C29.8999 12.2601 29.9692 12.2959 30.0309 12.333C30.0931 12.3688 30.1492 12.4055 30.2025 12.4304C30.2548 12.4577 30.3001 12.4802 30.3382 12.4995C30.4038 12.5329 30.4448 12.5541 30.4542 12.5593C30.4448 12.5555 30.4005 12.54 30.3312 12.515C30.2916 12.5005 30.243 12.4831 30.1869 12.4628C30.1309 12.445 30.071 12.4153 30.0041 12.3876C29.9381 12.3575 29.8631 12.3302 29.7891 12.2902C29.7151 12.2521 29.635 12.214 29.5549 12.1698C29.4762 12.1233 29.3923 12.0772 29.3112 12.0254C29.232 11.9709 29.1467 11.9196 29.068 11.8599C28.9893 11.8006 28.9092 11.7423 28.8361 11.6779C28.7598 11.6167 28.6891 11.5513 28.6212 11.4869C28.5533 11.4229 28.4921 11.3557 28.4327 11.2931C28.3756 11.2277 28.3214 11.1671 28.2743 11.1073C28.1928 11.0048 28.1277 10.9117 28.0811 10.8378H28.0806L27.8525 10.8364C27.8742 10.9178 27.9048 11.0105 27.942 11.1022C27.9703 11.1704 28.0014 11.2381 28.0339 11.3011C28.0665 11.3623 28.0994 11.4206 28.1296 11.469C28.1593 11.5179 28.1871 11.556 28.2069 11.5843C28.2262 11.612 28.2371 11.6275 28.2371 11.6275C28.2371 11.6275 28.2215 11.6158 28.1942 11.5955C28.1678 11.5753 28.1282 11.5466 28.0834 11.5085C28.0382 11.4719 27.9882 11.4253 27.935 11.374C27.8822 11.3218 27.8275 11.2644 27.7761 11.2028C27.6724 11.081 27.58 10.9465 27.5192 10.8374C27.5183 10.8369 27.5178 10.835 27.5178 10.835L27.4363 10.8341C27.4372 10.8435 27.4372 10.8529 27.4377 10.8623C27.4424 10.9493 27.4523 11.0518 27.4674 11.1614C27.482 11.2715 27.5032 11.3886 27.5287 11.5048C27.5405 11.5631 27.557 11.6205 27.5706 11.6783C27.5848 11.7357 27.6031 11.7903 27.6182 11.8448C27.6338 11.8994 27.654 11.9497 27.6705 11.9996C27.6861 12.0485 27.7049 12.0936 27.7219 12.1364C27.754 12.2211 27.786 12.2902 27.8082 12.3387C27.827 12.3805 27.8393 12.4078 27.8416 12.4135C27.8369 12.4073 27.82 12.3838 27.7931 12.3471C27.761 12.3039 27.7158 12.2423 27.6668 12.1637C27.6418 12.1256 27.614 12.0838 27.5881 12.0377C27.5617 11.9916 27.531 11.9445 27.5046 11.8933C27.4782 11.842 27.4476 11.7898 27.4222 11.7338C27.3958 11.6788 27.367 11.6233 27.3434 11.5659C27.2921 11.4526 27.2468 11.3359 27.2077 11.2245C27.1686 11.1135 27.137 11.0076 27.1125 10.915C27.1045 10.8863 27.0979 10.8581 27.0913 10.8327L26.9669 10.8317C26.9405 10.9187 26.9164 11.0222 26.899 11.128C26.8872 11.2009 26.8797 11.2748 26.8749 11.3458C26.8712 11.4159 26.8688 11.4827 26.8702 11.5391C26.8702 11.596 26.874 11.6435 26.8764 11.6774C26.8787 11.7108 26.8797 11.7301 26.8797 11.7301C26.8797 11.7301 26.8726 11.7122 26.8603 11.6802C26.8481 11.6492 26.8292 11.605 26.8104 11.549C26.791 11.494 26.7722 11.4286 26.7529 11.3571C26.734 11.2856 26.718 11.208 26.7043 11.1295C26.6878 11.0283 26.6784 10.9249 26.6746 10.8313L26.5625 10.8303C26.5629 10.8383 26.5648 10.8449 26.5653 10.8529C26.5832 10.9851 26.602 11.1614 26.6119 11.3387C26.6167 11.4272 26.619 11.5161 26.62 11.5988C26.619 11.6821 26.6162 11.7588 26.6115 11.8251C26.6044 11.8909 26.5997 11.9455 26.5912 11.9836C26.5851 12.0207 26.5813 12.0428 26.5813 12.0428C26.5813 12.0428 26.579 12.0212 26.5752 11.9831C26.5719 11.9459 26.5629 11.8923 26.5511 11.8293C26.5379 11.7658 26.52 11.6934 26.4984 11.6158C26.4757 11.5386 26.4503 11.4573 26.4211 11.3764C26.365 11.2146 26.3004 11.057 26.249 10.9394C26.2302 10.8966 26.2132 10.8595 26.2 10.8289L26.1274 10.828L25.945 12.8386L25.7683 10.8877C25.7612 10.9032 25.7541 10.9187 25.7471 10.9361C25.6957 11.0537 25.6311 11.2122 25.575 11.3731C25.5463 11.454 25.5204 11.5353 25.4977 11.6125C25.476 11.6901 25.4581 11.7625 25.4449 11.8265C25.4332 11.8895 25.4237 11.9431 25.4209 11.9803C25.4171 12.0184 25.4148 12.04 25.4148 12.04C25.4148 12.04 25.411 12.0184 25.4049 11.9808C25.3964 11.9427 25.3917 11.8881 25.3846 11.8222C25.3799 11.7564 25.3766 11.6793 25.3761 11.596C25.3766 11.5128 25.379 11.4243 25.3841 11.3355C25.394 11.1581 25.4129 10.9818 25.4308 10.8496C25.4322 10.8411 25.4332 10.8327 25.4341 10.8247H25.3757C25.3676 10.8341 25.3587 10.8449 25.3493 10.8557C25.3073 10.907 25.2517 10.9785 25.1999 11.0523C25.1485 11.1262 25.0995 11.2038 25.066 11.264C25.0316 11.3237 25.0113 11.3656 25.0113 11.3656C25.0113 11.3656 25.0076 11.319 25.0066 11.2489C25.0061 11.1784 25.009 11.0834 25.0165 10.9879C25.0203 10.931 25.0269 10.8745 25.0339 10.8233L24.6772 10.8219C24.6842 10.8416 24.6918 10.8623 24.6988 10.8835C24.713 10.9225 24.7252 10.9658 24.738 11.0109C24.7512 11.057 24.7606 11.1059 24.7714 11.1553C24.7903 11.2564 24.8011 11.3637 24.8049 11.4709C24.8063 11.5781 24.7992 11.684 24.786 11.7818C24.778 11.8307 24.7719 11.8773 24.761 11.9215C24.7507 11.9652 24.7417 12.0061 24.7299 12.0433C24.72 12.0805 24.7083 12.1139 24.6974 12.1435C24.6875 12.1731 24.6772 12.1985 24.6677 12.2187C24.6508 12.2601 24.6404 12.2832 24.6404 12.2832C24.6404 12.2832 24.6442 12.2582 24.6522 12.214C24.6559 12.1924 24.6592 12.1656 24.6625 12.135C24.6658 12.1049 24.6687 12.0706 24.6706 12.0334C24.6729 11.9953 24.6729 11.9549 24.6715 11.9121C24.672 11.8693 24.6668 11.8251 24.6635 11.779C24.6541 11.6863 24.6361 11.5904 24.6121 11.4968C24.5857 11.4037 24.5537 11.3134 24.5169 11.2325C24.5013 11.2005 24.4867 11.1694 24.4707 11.1398C24.4387 11.2955 24.4038 11.47 24.3717 11.6463C24.3241 11.9036 24.2812 12.1623 24.2548 12.357C24.2285 12.5522 24.219 12.6825 24.219 12.6825C24.219 12.6825 24.2044 12.5522 24.194 12.3547C24.1841 12.1571 24.1785 11.8928 24.1775 11.6294C24.1771 11.3867 24.1799 11.1459 24.1837 10.955C24.1827 10.9559 24.1813 10.9564 24.1804 10.9573C24.178 10.9587 24.1733 10.963 24.1733 10.963L24.1625 10.9747C24.1573 10.9794 24.153 10.9827 24.1479 10.9893C24.1252 11.0142 24.1036 11.0443 24.0833 11.0801C24.0621 11.1149 24.0427 11.1572 24.0239 11.1991C24.0046 11.2466 23.9871 11.287 23.9711 11.3345C23.9042 11.517 23.8651 11.7131 23.8505 11.8622C23.8424 11.937 23.8396 12 23.8382 12.0442C23.8382 12.0885 23.8373 12.1143 23.8373 12.1143C23.8373 12.1143 23.8321 12.0894 23.8217 12.0461C23.8123 12.0024 23.8 11.9403 23.7896 11.8641C23.768 11.7117 23.7576 11.5029 23.7812 11.2927C23.7859 11.2404 23.7944 11.184 23.8019 11.1365C23.8113 11.0829 23.8212 11.0326 23.8363 10.9804C23.8519 10.9281 23.8707 10.8769 23.8962 10.8289C23.8976 10.8256 23.899 10.8219 23.9018 10.8181L23.3457 10.8157C23.3937 10.8835 23.4446 10.9634 23.4856 11.049C23.5144 11.1097 23.5403 11.1718 23.5573 11.2315C23.5743 11.2912 23.5856 11.3491 23.5884 11.3971C23.5931 11.446 23.5907 11.4864 23.5875 11.5137C23.5842 11.541 23.5818 11.5565 23.5818 11.5565C23.5818 11.5565 23.578 11.5419 23.571 11.5156C23.5629 11.4897 23.5507 11.4535 23.5299 11.414C23.5097 11.3745 23.4809 11.3298 23.4475 11.287C23.4131 11.2442 23.3711 11.2033 23.3292 11.1643C23.2707 11.113 23.2085 11.0688 23.151 11.0321C23.1765 11.1309 23.2024 11.2381 23.2226 11.3472C23.2406 11.4427 23.2552 11.5377 23.2646 11.6271C23.2684 11.6722 23.2745 11.7141 23.2764 11.7559C23.2778 11.7969 23.2811 11.8349 23.2811 11.8712C23.2811 11.9427 23.2801 12.0019 23.2764 12.0428C23.2735 12.0842 23.2717 12.1073 23.2717 12.1073C23.2717 12.1073 23.2669 12.0847 23.2594 12.0442C23.2533 12.0038 23.2391 11.9469 23.2212 11.8796C23.2118 11.8462 23.1996 11.8105 23.1878 11.7733C23.176 11.7352 23.1595 11.6962 23.1449 11.6558C23.1147 11.5749 23.077 11.4902 23.0379 11.4079C22.9733 11.2743 22.9026 11.1459 22.8395 11.0401L22.6745 12.9562L22.4907 10.8124H22.4714H22.4544H22.4351L22.2512 12.9562L22.0863 11.0401C22.0231 11.1459 21.9524 11.2743 21.8879 11.4079C21.8487 11.4902 21.8115 11.5749 21.7813 11.6558C21.7667 11.6962 21.7502 11.7348 21.7384 11.7733C21.7267 11.8105 21.7144 11.8462 21.705 11.8796C21.6871 11.9474 21.6729 12.0043 21.6668 12.0442C21.6588 12.0847 21.6545 12.1073 21.6545 12.1073C21.6545 12.1073 21.6531 12.0842 21.6498 12.0428C21.6461 12.0019 21.6451 11.9427 21.6451 11.8712C21.6451 11.8354 21.6484 11.7973 21.6498 11.7559C21.6512 11.7141 21.6578 11.6717 21.6616 11.6271C21.671 11.5377 21.6857 11.4427 21.7036 11.3472C21.7238 11.2386 21.7498 11.1309 21.7752 11.0321C21.7177 11.0688 21.655 11.113 21.5966 11.1643C21.5546 11.2033 21.5122 11.2442 21.4783 11.287C21.4448 11.3298 21.4161 11.374 21.3958 11.414C21.3746 11.4535 21.3623 11.4902 21.3543 11.5156C21.3472 11.5419 21.3435 11.5565 21.3435 11.5565C21.3435 11.5565 21.3411 11.541 21.3378 11.5137C21.3345 11.4864 21.3322 11.446 21.3369 11.3971C21.3402 11.3491 21.351 11.2912 21.368 11.2315C21.3849 11.1718 21.4109 11.1092 21.4396 11.049C21.4811 10.9634 21.5315 10.8835 21.5796 10.8157L21.0234 10.8181C21.0258 10.8219 21.0272 10.8261 21.0291 10.8289C21.055 10.8769 21.0734 10.9281 21.089 10.9804C21.1036 11.0326 21.1139 11.0829 21.1234 11.1365C21.1309 11.184 21.1399 11.2409 21.1441 11.2927C21.1677 11.5024 21.1573 11.7117 21.1356 11.8641C21.1257 11.9403 21.113 12.0024 21.1036 12.0461C21.0932 12.0894 21.088 12.1143 21.088 12.1143C21.088 12.1143 21.0871 12.0885 21.0871 12.0442C21.0857 12 21.0824 11.937 21.0748 11.8622C21.0602 11.7131 21.0211 11.517 20.9542 11.3345C20.9377 11.287 20.9207 11.2466 20.9014 11.1991C20.8825 11.1572 20.8632 11.1153 20.842 11.0801C20.8217 11.0443 20.8 11.0137 20.7774 10.9893C20.7718 10.9822 20.768 10.9794 20.7628 10.9747L20.752 10.963C20.752 10.963 20.7472 10.9592 20.7449 10.9573C20.7439 10.9564 20.7425 10.9559 20.7416 10.955C20.7454 11.1459 20.7487 11.3872 20.7477 11.6294C20.7472 11.8928 20.7416 12.1571 20.7312 12.3547C20.7213 12.5522 20.7062 12.6825 20.7062 12.6825C20.7062 12.6825 20.6968 12.5522 20.6704 12.357C20.644 12.1628 20.6011 11.9036 20.5535 11.6463C20.5215 11.47 20.4866 11.295 20.4546 11.1398C20.439 11.1694 20.4244 11.2005 20.4088 11.2325C20.3721 11.3134 20.34 11.4037 20.3136 11.4968C20.2896 11.5899 20.2717 11.6863 20.2623 11.779C20.259 11.8251 20.2538 11.8693 20.2542 11.9121C20.2528 11.9549 20.2528 11.9953 20.2552 12.0334C20.2566 12.0706 20.2599 12.1049 20.2632 12.135C20.2665 12.1661 20.2693 12.1924 20.2736 12.214C20.2816 12.2582 20.2853 12.2832 20.2853 12.2832C20.2853 12.2832 20.2754 12.2601 20.258 12.2187C20.2486 12.1985 20.2387 12.1731 20.2283 12.1435C20.2175 12.1139 20.2057 12.0805 20.1958 12.0433C20.184 12.0061 20.1746 11.9648 20.1647 11.9215C20.1538 11.8773 20.1477 11.8307 20.1397 11.7818C20.1265 11.684 20.1194 11.5781 20.1209 11.4709C20.1246 11.3637 20.1355 11.2564 20.1543 11.1553C20.1652 11.1055 20.1746 11.0565 20.1878 11.0109C20.2 10.9658 20.2128 10.922 20.2269 10.8835C20.234 10.8623 20.2415 10.8416 20.2486 10.8219L19.8918 10.8233C19.8989 10.8745 19.905 10.9314 19.9088 10.9879C19.9168 11.0834 19.9196 11.1784 19.9187 11.2489C19.9182 11.319 19.9139 11.3656 19.9139 11.3656C19.9139 11.3656 19.8937 11.3237 19.8593 11.264C19.8258 11.2042 19.7768 11.1262 19.7254 11.0523C19.6731 10.9785 19.618 10.907 19.576 10.8557C19.5666 10.8449 19.5572 10.8341 19.5496 10.8247H19.4912C19.4921 10.8327 19.4926 10.8411 19.4945 10.8496C19.5124 10.9818 19.5312 11.1581 19.5411 11.3355C19.5458 11.4239 19.5482 11.5128 19.5491 11.596C19.5487 11.6793 19.5454 11.7559 19.5407 11.8222C19.5336 11.8886 19.5289 11.9427 19.5204 11.9808C19.5143 12.0179 19.5105 12.04 19.5105 12.04C19.5105 12.04 19.5081 12.0184 19.5044 11.9803C19.5011 11.9431 19.4921 11.8895 19.4803 11.8265C19.4671 11.7625 19.4492 11.6906 19.4275 11.6125C19.4049 11.5353 19.379 11.454 19.3502 11.3731C19.2942 11.2122 19.2296 11.0537 19.1782 10.9361C19.1711 10.9192 19.1641 10.9037 19.157 10.8877L18.9803 12.8386L18.7978 10.828L18.7253 10.8289C18.7121 10.859 18.6951 10.8966 18.6762 10.9394C18.6249 11.057 18.5603 11.2146 18.5042 11.3764C18.4755 11.4573 18.4495 11.5386 18.4269 11.6158C18.4052 11.6934 18.3873 11.7658 18.3741 11.8293C18.3623 11.8923 18.3529 11.9459 18.3501 11.9831C18.3463 12.0212 18.344 12.0428 18.344 12.0428C18.344 12.0428 18.3402 12.0212 18.3341 11.9836C18.3256 11.9455 18.3209 11.8909 18.3138 11.8251C18.3091 11.7588 18.3058 11.6821 18.3053 11.5988C18.3063 11.5156 18.3086 11.4272 18.3133 11.3387C18.3237 11.1614 18.3421 10.9851 18.36 10.8529C18.3605 10.8449 18.3623 10.8383 18.3628 10.8303L18.2506 10.8313C18.2469 10.9253 18.2374 11.0288 18.2209 11.1295C18.2077 11.208 18.1913 11.2856 18.1724 11.3571C18.1531 11.4286 18.1342 11.494 18.1149 11.549C18.096 11.605 18.0777 11.6492 18.0649 11.6802C18.0527 11.7122 18.0456 11.7301 18.0456 11.7301C18.0456 11.7301 18.0466 11.7108 18.0489 11.6774C18.0513 11.6431 18.055 11.596 18.055 11.5391C18.0565 11.4822 18.0546 11.4154 18.0503 11.3458C18.0456 11.2753 18.0381 11.2014 18.0263 11.128C18.0093 11.0222 17.9848 10.9192 17.9584 10.8317L17.834 10.8327C17.8279 10.8585 17.8208 10.8863 17.8128 10.915C17.7887 11.0076 17.7567 11.113 17.7176 11.2245C17.6785 11.3355 17.6332 11.4521 17.5818 11.5659C17.5583 11.6233 17.5295 11.6788 17.5031 11.7338C17.4777 11.7898 17.447 11.842 17.4206 11.8933C17.3942 11.9445 17.3636 11.992 17.3372 12.0377C17.3113 12.0838 17.2835 12.1256 17.2585 12.1637C17.2095 12.2423 17.1642 12.3034 17.1322 12.3471C17.1058 12.3838 17.0888 12.4069 17.0841 12.4135C17.0865 12.4078 17.0987 12.381 17.1176 12.3387C17.1402 12.2902 17.1722 12.2211 17.2043 12.1364C17.2213 12.0936 17.2401 12.0485 17.2557 11.9996C17.2722 11.9497 17.2924 11.8994 17.308 11.8448C17.3231 11.7903 17.3415 11.7362 17.3556 11.6783C17.3697 11.6209 17.3858 11.5631 17.3975 11.5048C17.423 11.3881 17.4442 11.2715 17.4588 11.1614C17.4734 11.0518 17.4838 10.9493 17.4885 10.8623C17.4894 10.8529 17.4894 10.8435 17.4899 10.8341H17.4079C17.4079 10.8341 17.4074 10.8364 17.4065 10.8374C17.3457 10.946 17.2528 11.0805 17.1496 11.2028C17.0982 11.2644 17.0436 11.3218 16.9908 11.374C16.9371 11.4253 16.8871 11.4719 16.8418 11.5085C16.7975 11.5466 16.758 11.5753 16.7316 11.5955C16.7042 11.6158 16.6887 11.6275 16.6887 11.6275C16.6887 11.6275 16.6995 11.612 16.7188 11.5843C16.7382 11.556 16.7664 11.5179 16.7961 11.469C16.8263 11.4206 16.8593 11.3623 16.8918 11.3011C16.9243 11.2381 16.9554 11.1704 16.9837 11.1022C17.021 11.0105 17.0516 10.9178 17.0733 10.8364L16.8451 10.8378H16.8447C16.798 10.9117 16.7334 11.0048 16.6514 11.1073C16.6048 11.1671 16.5501 11.2277 16.4931 11.2931C16.4337 11.3552 16.3724 11.4229 16.3045 11.4869C16.2367 11.5513 16.166 11.6167 16.0896 11.6779C16.0166 11.7423 15.936 11.8006 15.8577 11.8599C15.779 11.9196 15.6942 11.9709 15.6145 12.0254C15.5335 12.0776 15.4496 12.1233 15.3708 12.1698C15.2907 12.214 15.2106 12.2521 15.1366 12.2902C15.0626 12.3297 14.9877 12.357 14.9217 12.3876C14.8547 12.4158 14.7944 12.445 14.7388 12.4628C14.6827 12.4831 14.6342 12.5 14.5946 12.515C14.5253 12.54 14.481 12.5555 14.4716 12.5593C14.481 12.5536 14.522 12.5329 14.5875 12.4995C14.6257 12.4802 14.6709 12.4577 14.7232 12.4304C14.776 12.4055 14.8321 12.3688 14.8943 12.333C14.9561 12.2959 15.0254 12.2601 15.0923 12.2117C15.1602 12.1651 15.2332 12.119 15.3049 12.0664C15.3756 12.0113 15.4505 11.9568 15.5221 11.898C15.5914 11.8349 15.6664 11.7766 15.7333 11.7108C15.8012 11.6445 15.8704 11.581 15.9312 11.5109C15.9953 11.4441 16.0538 11.375 16.1089 11.3063C16.165 11.2395 16.2131 11.1704 16.2607 11.1064C16.305 11.0401 16.3479 10.978 16.3823 10.9192C16.3997 10.891 16.4148 10.8647 16.4299 10.8393L16.2004 10.8407C16.1862 10.8632 16.1721 10.8872 16.157 10.9112C16.1245 10.9611 16.0891 11.0137 16.0486 11.0674C16.0095 11.1219 15.9628 11.1746 15.9171 11.2306C15.8671 11.2832 15.8181 11.3402 15.763 11.3914C15.7102 11.445 15.6522 11.4949 15.5947 11.5448C15.5386 11.5951 15.4764 11.6388 15.418 11.6844C15.3586 11.7282 15.2973 11.7686 15.2398 11.8081C15.1814 11.8462 15.122 11.8806 15.0683 11.914C15.0136 11.9483 14.9584 11.9737 14.9104 12.001C14.8613 12.0273 14.817 12.0522 14.7756 12.0711C14.735 12.0899 14.6992 12.1068 14.6705 12.12C14.6191 12.1449 14.587 12.1595 14.58 12.1628C14.5861 12.1581 14.6158 12.1378 14.662 12.1059C14.6884 12.087 14.7204 12.0654 14.7576 12.0395C14.7949 12.0156 14.834 11.9826 14.8774 11.9492C14.9203 11.9149 14.9693 11.8815 15.0159 11.8397C15.0635 11.7983 15.114 11.7564 15.1639 11.7108C15.213 11.6633 15.2643 11.6158 15.3143 11.5654C15.3609 11.5128 15.4133 11.462 15.4576 11.4069C15.5038 11.3519 15.5485 11.2974 15.5891 11.24C15.631 11.1849 15.6668 11.1266 15.7027 11.0721C15.7361 11.0152 15.7696 10.9615 15.7955 10.9079C15.8073 10.8853 15.8181 10.8637 15.828 10.8416L15.5344 10.8425C15.5118 10.875 15.4844 10.9103 15.4533 10.9474C15.4213 10.9846 15.3873 11.0246 15.3473 11.0631C15.31 11.1036 15.2662 11.1417 15.2228 11.1812C15.1767 11.2188 15.1319 11.2588 15.081 11.2945C15.032 11.3312 14.9815 11.366 14.9292 11.3994C14.8788 11.4342 14.8241 11.4624 14.7727 11.4935C14.7204 11.5236 14.6676 11.5495 14.6172 11.5758C14.5668 11.6017 14.5159 11.6233 14.4692 11.6449C14.423 11.6675 14.3763 11.684 14.3353 11.7009C14.2529 11.7357 14.1812 11.7592 14.1322 11.7771C14.0893 11.7917 14.062 11.802 14.0568 11.8034C14.062 11.8006 14.0865 11.7856 14.1251 11.7616C14.1694 11.7343 14.234 11.6981 14.3066 11.6473C14.3434 11.6224 14.3844 11.5974 14.4249 11.5664C14.4654 11.5363 14.5093 11.5057 14.5522 11.4714C14.5941 11.4366 14.6393 11.4022 14.6822 11.3641C14.7242 11.3251 14.7685 11.2889 14.8086 11.2466C14.85 11.2071 14.8896 11.1657 14.9264 11.1229C14.9655 11.0824 14.9971 11.0382 15.031 10.9978C15.0612 10.955 15.0918 10.9154 15.1168 10.875C15.1239 10.8647 15.13 10.8538 15.1361 10.844L14.8524 10.8449C14.802 10.9023 14.7355 10.97 14.6554 11.0453C14.6064 11.0909 14.5517 11.1403 14.4928 11.1892C14.4353 11.2395 14.3697 11.288 14.3042 11.3392C14.2354 11.3877 14.1661 11.4385 14.0931 11.486C14.0191 11.5325 13.946 11.5814 13.8678 11.6238L13.7523 11.6891L13.6354 11.7475C13.5591 11.7879 13.4794 11.8204 13.404 11.8533C13.33 11.8876 13.2546 11.913 13.1834 11.938C13.1485 11.9511 13.1141 11.9638 13.0807 11.9756C13.0472 11.985 13.0147 11.9949 12.9831 12.0033C12.92 12.0212 12.8634 12.0391 12.812 12.0518C12.7606 12.0635 12.7154 12.0729 12.6782 12.0814C12.6145 12.0955 12.5731 12.104 12.5646 12.1054C12.574 12.1016 12.6127 12.0875 12.6735 12.0649C12.7093 12.0518 12.7522 12.0362 12.8012 12.0174C12.8497 11.9986 12.903 11.9723 12.9614 11.9469C12.9911 11.9337 13.0213 11.9205 13.0524 11.9055C13.0835 11.89 13.1146 11.873 13.1476 11.8556C13.2122 11.8213 13.2815 11.7865 13.3484 11.7437C13.4163 11.7018 13.487 11.6605 13.5548 11.6115C13.5892 11.5876 13.6232 11.564 13.6585 11.5401L13.7589 11.4629C13.8268 11.4126 13.8899 11.3562 13.9522 11.303C14.0153 11.2494 14.0728 11.192 14.1298 11.1384C14.1836 11.0815 14.2382 11.0288 14.2849 10.9742C14.3245 10.9314 14.3603 10.8886 14.3938 10.8477L13.8862 10.8501C13.4771 11.4135 12.2116 12.0551 10.4785 11.4911C9.55988 11.1925 9.19932 10.5279 9.0631 9.96961C9.09751 10.0406 9.12485 10.1479 9.13757 10.2029C9.09327 9.95785 8.89201 8.51864 10.478 8.51864C11.8802 8.51864 11.5295 9.89812 11.2571 10.0731C11.2571 10.0731 12.5033 9.62627 12.2695 8.24632C12.0357 6.86683 10.6142 7.3588 10.6142 7.3588C10.6142 7.3588 11.1011 6.53666 12.1135 6.76948C12.1135 6.76948 11.6266 5.17599 9.69892 6.08938C9.20214 6.44777 9.00513 6.98348 8.95328 7.14715C9.03058 6.8706 9.36994 5.52733 8.80764 5.37024C8.80764 5.37024 7.80985 5.97273 7.32297 6.76948C6.83704 7.56528 6.50617 9.81534 7.32062 10.5378C7.27631 10.5053 6.60891 10.0355 5.14215 10.0731C4.50492 10.0895 4.24475 9.80876 4.23768 9.47953C4.22542 9.51292 4.21176 9.54773 4.1995 9.58206C4.16038 9.68835 4.1288 9.79982 4.10288 9.91223C4.07507 10.0251 4.05386 10.1385 4.03831 10.2504C4.0303 10.3073 4.02605 10.3623 4.01946 10.4174C4.0171 10.4724 4.01144 10.5279 4.01333 10.5806C4.01097 10.6888 4.0204 10.7903 4.03312 10.8868C4.04396 10.9333 4.05009 10.9808 4.06517 11.0227C4.0713 11.0439 4.07601 11.066 4.08403 11.0862C4.09251 11.1059 4.10052 11.1252 4.10806 11.1445C4.12456 11.1826 4.14718 11.2146 4.16557 11.247C4.1896 11.2753 4.20751 11.3077 4.23485 11.3279C4.24711 11.3397 4.25983 11.3505 4.27161 11.3613C4.2834 11.3712 4.29754 11.3778 4.30979 11.3863C4.32205 11.3947 4.33477 11.4027 4.34561 11.4098C4.35787 11.4168 4.37059 11.4206 4.38238 11.4262C4.40641 11.4347 4.42668 11.4455 4.44648 11.4502C4.46674 11.4549 4.48324 11.4587 4.49691 11.462C4.52424 11.4681 4.53886 11.4719 4.53886 11.4719C4.53886 11.4719 3.8182 11.7244 3.25355 11.2C2.68891 10.6756 1.1505 11.4333 0.799835 12.3269C0.799835 12.3269 1.63691 13.6095 3.35065 13.3179C4.26596 13.1044 4.73304 12.2883 5.14215 12.23C5.55079 12.1717 5.9599 12.9101 4.77216 13.221C3.58442 13.5319 2.82512 14.387 2.82512 15.5332C2.82512 16.6794 2.786 16.9903 2.786 16.9903C2.786 16.9903 4.24616 16.4658 4.53838 15.4941C4.83061 14.5224 5.31748 14.5224 5.31748 14.5224C5.31748 14.5224 3.70131 16.4268 5.14215 17.2038C5.14215 17.2038 4.77216 15.4946 6.91339 14.1537C6.89548 14.2106 6.20122 16.3967 8.25761 17.0871C8.25761 17.0871 7.30977 14.0168 10.1467 12.754C10.1457 12.753 10.1457 12.753 10.1453 12.753C10.0906 12.7446 10.0274 12.7385 9.95626 12.7352C9.91243 12.7323 9.8653 12.7361 9.81534 12.7352C9.76632 12.7385 9.71353 12.7422 9.65886 12.7474C9.55045 12.7639 9.43309 12.7845 9.31243 12.825C9.28227 12.8349 9.25163 12.8452 9.22053 12.8551C9.19036 12.8659 9.15972 12.881 9.12862 12.8941C9.09845 12.9073 9.06687 12.9205 9.03529 12.9346C9.0056 12.951 8.97449 12.968 8.94433 12.9844C8.91416 13.0023 8.88117 13.0169 8.85148 13.0366C8.82131 13.0569 8.79162 13.0771 8.76146 13.0973C8.73129 13.1185 8.69924 13.1364 8.67049 13.1594C8.64174 13.1829 8.61299 13.206 8.58329 13.2295L8.49751 13.2996C8.46876 13.3259 8.43765 13.3532 8.41126 13.3795C8.35894 13.4308 8.30521 13.4868 8.25525 13.5451C8.05447 13.7765 7.89375 14.0455 7.78298 14.3155C7.7269 14.45 7.68259 14.585 7.64819 14.7143C7.61331 14.8474 7.58833 14.9702 7.569 15.0873C7.53224 15.3206 7.52706 15.5186 7.53413 15.6564C7.53978 15.7777 7.55345 15.853 7.55722 15.8695C7.55204 15.8516 7.53177 15.7787 7.51763 15.6583C7.49972 15.52 7.49029 15.3201 7.50915 15.0807C7.51904 14.9617 7.53554 14.8295 7.56052 14.696C7.5855 14.5591 7.62038 14.4175 7.66798 14.2731C7.7613 13.9848 7.90694 13.6885 8.10349 13.4242C8.15203 13.3574 8.20388 13.2944 8.25949 13.2304C8.28777 13.1984 8.31417 13.1721 8.3415 13.1425C8.37261 13.1105 8.40136 13.0856 8.43106 13.0569C8.46075 13.0286 8.49044 13.0009 8.51967 12.9736C8.54936 12.9454 8.58282 12.9224 8.61393 12.8974C8.64598 12.8725 8.67709 12.8476 8.7082 12.8226C8.74025 12.7987 8.77418 12.7794 8.80717 12.7573C8.84064 12.7356 8.87316 12.7145 8.90615 12.6938C8.94056 12.675 8.97402 12.6571 9.00796 12.6392C9.04142 12.6218 9.07442 12.6025 9.10835 12.588C9.11071 12.587 9.11212 12.5865 9.11448 12.5856C9.02163 12.6002 8.92359 12.6204 8.8199 12.6425C8.70442 12.6721 8.58 12.6985 8.45604 12.7399C8.39382 12.7596 8.32878 12.777 8.26515 12.7991C8.20199 12.8222 8.13742 12.8466 8.07285 12.8706L7.97529 12.9064L7.87961 12.9473C7.81551 12.9755 7.75093 13.0042 7.68636 13.0319C7.55863 13.0903 7.43562 13.1594 7.31166 13.2215C7.191 13.2906 7.07458 13.3635 6.96099 13.4313C6.85023 13.5042 6.74607 13.5803 6.64521 13.6495C6.62023 13.6664 6.59619 13.6843 6.57215 13.7017C6.54858 13.7205 6.52596 13.7384 6.50334 13.7567C6.45903 13.7925 6.41614 13.8273 6.37467 13.8611C6.29218 13.9293 6.21253 13.9877 6.15126 14.0493C6.0881 14.1085 6.03296 14.1603 5.98771 14.2031C5.90758 14.2779 5.85762 14.3244 5.84584 14.3343C5.85574 14.3225 5.90193 14.2722 5.97498 14.1913C6.01693 14.1447 6.06783 14.0878 6.12628 14.0234C6.18331 13.9557 6.25683 13.8912 6.33413 13.816C6.37231 13.7788 6.41284 13.7398 6.45479 13.6993C6.476 13.6791 6.49674 13.6589 6.51889 13.6382C6.54199 13.6189 6.56555 13.5992 6.58912 13.5789C6.68433 13.5004 6.78283 13.4148 6.88888 13.3311C6.9987 13.2516 7.11088 13.1679 7.22824 13.087C7.34889 13.0122 7.46955 12.9308 7.59587 12.8593C7.6595 12.825 7.7236 12.7902 7.78723 12.7549L7.88291 12.7037L7.98047 12.6576C8.04504 12.6275 8.10961 12.5969 8.17371 12.5673C8.23828 12.5386 8.3038 12.5146 8.36696 12.4882C8.49327 12.4346 8.621 12.3956 8.74025 12.3537C8.85808 12.3189 8.96931 12.2846 9.07442 12.2597C9.05179 12.2582 9.03011 12.2568 9.0056 12.2559C8.8972 12.2545 8.78314 12.2512 8.66389 12.2582C8.54465 12.2597 8.42257 12.2747 8.2972 12.2869C8.1723 12.2987 8.0474 12.326 7.92014 12.3443C7.79571 12.3725 7.67034 12.4012 7.54685 12.4313C7.42619 12.4685 7.306 12.5052 7.191 12.54C7.07788 12.5837 6.96806 12.6256 6.86484 12.6651C6.76021 12.7046 6.66783 12.7544 6.57828 12.794C6.49014 12.8353 6.40766 12.8711 6.33979 12.9115C6.2705 12.9496 6.2097 12.984 6.15974 13.0112C6.07255 13.0592 6.01787 13.0898 6.00562 13.0968C6.0174 13.0889 6.06878 13.054 6.15126 12.9976C6.19886 12.9652 6.25542 12.9261 6.32188 12.881C6.38645 12.8335 6.46516 12.7907 6.55 12.7413C6.63578 12.6928 6.72533 12.634 6.82667 12.5842C6.928 12.5339 7.03452 12.4807 7.14528 12.4262C7.25981 12.3796 7.37812 12.3307 7.49878 12.2808C7.62179 12.239 7.74716 12.1962 7.87442 12.1557C8.00309 12.1237 8.13082 12.0842 8.25997 12.0593C8.36413 12.0391 8.46735 12.0179 8.56915 12.0033C8.51778 11.9935 8.46546 11.9831 8.41267 11.9751C8.34952 11.9652 8.28636 11.9544 8.2232 11.9441C8.15957 11.9347 8.09547 11.9285 8.0309 11.9205C7.96727 11.9135 7.90317 11.9041 7.8386 11.8989C7.7745 11.8942 7.71087 11.8904 7.64677 11.8857C7.51999 11.874 7.39461 11.874 7.27301 11.8712C7.15094 11.8665 7.03405 11.8735 6.92187 11.8768C6.86579 11.8792 6.81206 11.8806 6.75927 11.8829C6.70695 11.8876 6.65652 11.8928 6.60797 11.8975C6.51041 11.9069 6.42086 11.913 6.34214 11.9238C6.26343 11.937 6.19509 11.9478 6.13806 11.9572C6.03908 11.9728 5.97781 11.9831 5.96367 11.9855C5.97687 11.9817 6.03861 11.9662 6.13476 11.9412C6.18991 11.9267 6.25778 11.9093 6.33507 11.889C6.41284 11.8712 6.50239 11.8566 6.59902 11.8368C6.64756 11.8274 6.698 11.818 6.74984 11.8081C6.80263 11.8011 6.8573 11.794 6.91339 11.7874C7.02557 11.7733 7.14387 11.755 7.26783 11.7484C7.39084 11.7399 7.51951 11.7272 7.6496 11.7272C7.71417 11.7268 7.78063 11.7249 7.84614 11.7235C7.91213 11.7221 7.97858 11.7258 8.04457 11.7268C8.11103 11.7291 8.17701 11.7296 8.243 11.7329C8.30945 11.7376 8.3745 11.7423 8.44001 11.7461C8.47583 11.7484 8.51165 11.7508 8.54747 11.7541C8.47678 11.724 8.40513 11.6924 8.32878 11.6637C8.22226 11.6224 8.11197 11.58 7.99791 11.5424C7.88479 11.5015 7.76743 11.4662 7.6496 11.4323C7.53271 11.3942 7.41347 11.3684 7.29658 11.3383C7.17875 11.3063 7.06233 11.288 6.94921 11.263C6.83609 11.2381 6.7258 11.2263 6.62117 11.2085C6.51606 11.1897 6.41614 11.1812 6.32423 11.1718C6.23233 11.1633 6.14749 11.1516 6.07255 11.1478C5.99713 11.1445 5.93162 11.1417 5.87695 11.1393C5.76854 11.1337 5.70633 11.1313 5.70633 11.1313C5.70633 11.1313 5.76854 11.1276 5.87695 11.1219C5.93162 11.1196 5.99666 11.1158 6.07255 11.112C6.1489 11.1083 6.23374 11.1111 6.32706 11.1111C6.42038 11.1111 6.52172 11.1102 6.62918 11.1182C6.73617 11.1262 6.84976 11.1266 6.96571 11.1417C7.08165 11.1548 7.20326 11.1628 7.32486 11.1826C7.44646 11.2024 7.57183 11.2169 7.6939 11.2433C7.81786 11.2668 7.94088 11.2908 8.0606 11.3209C8.07521 11.3242 8.08935 11.3279 8.10396 11.3308C8.08982 11.3152 8.07568 11.2997 8.06107 11.2842C8.0177 11.2381 7.97858 11.1868 7.93899 11.1356C7.85793 11.033 7.78487 10.9197 7.71794 10.8012C7.68448 10.7419 7.65573 10.6798 7.62462 10.6187C7.59823 10.5552 7.56853 10.4936 7.54591 10.4291C7.49689 10.3007 7.45871 10.1695 7.42808 10.0397C7.39838 9.90894 7.3767 9.78007 7.36351 9.65402C7.34889 9.52797 7.34465 9.4071 7.34182 9.29186C7.3423 9.17616 7.34418 9.06799 7.35266 8.96781C7.38094 8.59295 7.44929 8.34509 7.45777 8.31593C7.45541 8.33004 7.44457 8.39212 7.43373 8.49324C7.42195 8.60847 7.4097 8.77309 7.41347 8.97063C7.41441 9.06846 7.42195 9.17522 7.43232 9.28669C7.44552 9.39863 7.45966 9.51574 7.48511 9.63568C7.50914 9.75514 7.54119 9.87649 7.58079 9.99689C7.62038 10.1173 7.66798 10.2372 7.72407 10.352C7.75046 10.4103 7.78393 10.4649 7.81362 10.5204C7.8254 10.5392 7.83624 10.5571 7.84708 10.5754C7.82352 10.4743 7.79854 10.3741 7.791 10.2706C7.78487 10.2156 7.7778 10.1601 7.77167 10.106C7.76837 10.051 7.76932 9.99642 7.76837 9.94186C7.7679 9.88825 7.76696 9.83463 7.76602 9.78195C7.76696 9.72927 7.77403 9.67707 7.77686 9.62627C7.78157 9.57594 7.78534 9.52515 7.78911 9.47623C7.79241 9.42779 7.7976 9.37982 7.80702 9.33467C7.82258 9.24295 7.83813 9.15688 7.85227 9.07645C7.86311 8.9965 7.88479 8.92501 7.90129 8.86104C7.91778 8.79802 7.93239 8.74299 7.94418 8.6969C7.96539 8.61741 7.97858 8.56849 7.98094 8.55721C7.97953 8.56897 7.97246 8.61929 7.96067 8.70113C7.95455 8.74722 7.94606 8.80366 7.93664 8.8681C7.92815 8.93253 7.91496 9.00496 7.9126 9.08492C7.90789 9.16393 7.9027 9.25048 7.89705 9.34219C7.89327 9.38734 7.89375 9.43391 7.8961 9.48188C7.89705 9.52938 7.89846 9.5783 7.89987 9.62721C7.90223 9.67707 7.90129 9.72692 7.906 9.77725C7.91307 9.82757 7.9192 9.87837 7.92532 9.92963C7.93239 9.97996 7.93758 10.0322 7.94653 10.083C7.95832 10.1333 7.9701 10.1841 7.98236 10.2344C8.00121 10.3365 8.03939 10.4319 8.07285 10.5265C8.08699 10.5749 8.11008 10.6191 8.13129 10.6624C8.13224 10.6634 8.13224 10.6638 8.13271 10.6648C8.12564 10.63 8.12281 10.5933 8.11621 10.5575C8.10443 10.486 8.10066 10.4131 8.09689 10.3393C8.09123 10.2664 8.09689 10.1926 8.09594 10.1187C8.10301 10.0449 8.10537 9.97102 8.11621 9.89812C8.13506 9.75185 8.16523 9.60887 8.20199 9.47059C8.23923 9.33231 8.28353 9.19874 8.33302 9.07269C8.3811 8.94617 8.43577 8.82765 8.4895 8.71665C8.54417 8.60565 8.59838 8.50265 8.65211 8.40952C8.86656 8.03702 9.04849 7.81643 9.04849 7.81643C9.04849 7.81643 8.88589 8.05207 8.70631 8.43774C8.66106 8.53416 8.61582 8.63998 8.57151 8.75239C8.52862 8.86574 8.48526 8.98568 8.44944 9.1122C8.4122 9.23825 8.38062 9.36994 8.35612 9.50492C8.33302 9.63991 8.31558 9.77772 8.3104 9.91458C8.30568 9.98372 8.30945 10.0524 8.30945 10.1196C8.31558 10.1874 8.31558 10.2551 8.32736 10.321C8.33679 10.3863 8.34528 10.4517 8.36177 10.5143C8.36978 10.5453 8.37497 10.5773 8.3844 10.6074C8.39382 10.6375 8.40325 10.6681 8.41267 10.6977C8.43388 10.7621 8.45886 10.8228 8.48573 10.8821C8.47866 10.827 8.47395 10.7711 8.46923 10.7151C8.46122 10.6196 8.46688 10.5218 8.46593 10.4254C8.4763 10.328 8.48149 10.2321 8.49563 10.1385C8.51448 10.0458 8.52815 9.95409 8.5503 9.86708C8.57528 9.78148 8.59932 9.69917 8.62194 9.62063C8.64834 9.54349 8.67897 9.47294 8.70395 9.4071C8.72893 9.34078 8.75297 9.28105 8.78031 9.23072C8.80623 9.17946 8.82791 9.1343 8.84676 9.09809C8.87787 9.03412 8.89814 8.99367 8.90285 8.98521C8.90002 8.99461 8.88589 9.03647 8.86185 9.10467C8.84865 9.14277 8.8331 9.18933 8.81424 9.24295C8.79398 9.29563 8.77842 9.35818 8.76193 9.42544C8.74637 9.49411 8.72516 9.56607 8.70961 9.6432C8.69783 9.72175 8.68557 9.80406 8.67237 9.88966C8.66248 9.97432 8.66059 10.0637 8.65446 10.1521C8.65211 10.2415 8.65918 10.3322 8.66153 10.4216C8.67473 10.511 8.68039 10.6003 8.69971 10.6859C8.71856 10.772 8.73459 10.8562 8.76287 10.9347C8.78455 11.0137 8.81754 11.0871 8.84535 11.1563C8.85525 11.1779 8.86562 11.2 8.87552 11.2207C8.84205 11.0575 8.82791 10.8788 8.84111 10.6859C9.28887 12.5771 11.3919 12.4798 11.3919 12.4798C10.3211 13.1208 10.5935 14.1509 10.5935 14.1509C10.5935 14.1509 11.3919 14.0925 11.9957 13.49C12.8912 12.4407 13.7481 12.2272 13.7481 12.2272C13.4559 12.674 12.7743 13.0047 12.7743 13.0047C12.7743 13.0047 13.125 13.5291 14.6827 13.4124C16.2404 13.2958 16.7664 12.2272 16.7664 12.2272C16.7273 12.7516 16.2796 13.1406 16.2796 13.1406C16.2796 13.1406 16.2989 13.3546 16.864 13.3348C17.6539 13.3348 17.8345 12.5094 17.8693 12.2841C17.8528 12.445 17.8288 12.8965 18.0517 13.0239C18.3246 13.1796 19.0255 13.6457 19.0255 13.6457C19.0255 13.6457 19.1424 13.5098 19.5124 13.3156C19.9455 13.0319 20.0398 12.6166 20.0568 12.3899C20.0846 13.3833 20.7001 13.6457 20.7001 13.6457C21.1469 13.2384 21.2124 12.7342 21.2073 12.4497C21.3581 13.2657 22.3168 13.5968 22.4549 13.6406V13.6457C22.4549 13.6457 22.4582 13.6448 22.4633 13.6434C22.4685 13.6448 22.4718 13.6457 22.4718 13.6457V13.6406C22.6099 13.5968 23.5686 13.2657 23.7194 12.4497C23.7138 12.7342 23.7793 13.2384 24.2266 13.6457C24.2266 13.6457 24.8416 13.3828 24.8699 12.3899C24.8869 12.6171 24.9812 13.0319 25.4143 13.3156C25.7843 13.5098 25.9012 13.6457 25.9012 13.6457C25.9012 13.6457 26.602 13.1796 26.8749 13.0239C27.0979 12.8965 27.0734 12.445 27.0573 12.2841C27.0922 12.5094 27.2732 13.3348 28.0627 13.3348C28.6273 13.3541 28.6471 13.1406 28.6471 13.1406C28.6471 13.1406 28.1994 12.7521 28.1602 12.2272C28.1602 12.2272 28.6858 13.2958 30.244 13.4124C31.8017 13.5291 32.1524 13.0047 32.1524 13.0047C32.1524 13.0047 31.4708 12.6745 31.1786 12.2272C31.1786 12.2272 32.0355 12.4407 32.931 13.49C33.5348 14.0925 34.3332 14.1509 34.3332 14.1509C34.3332 14.1509 34.6056 13.1208 33.5348 12.4798C33.5348 12.4798 35.6378 12.5771 36.0856 10.6859C36.0988 10.8788 36.0846 11.0575 36.0512 11.2207C36.0615 11.1995 36.0714 11.1779 36.0813 11.1563C36.1091 11.0871 36.1421 11.0142 36.1638 10.9347C36.1916 10.8562 36.2081 10.7725 36.227 10.6859C36.2463 10.6003 36.252 10.511 36.2651 10.4216C36.2675 10.3322 36.2746 10.2415 36.2722 10.1521C36.2661 10.0637 36.2642 9.97432 36.2543 9.88966C36.2411 9.80406 36.2284 9.72175 36.2171 9.6432C36.2015 9.56607 36.1803 9.49411 36.1648 9.42544C36.1483 9.35771 36.1327 9.29563 36.1124 9.24295C36.0936 9.18933 36.078 9.14277 36.0648 9.10467C36.0408 9.036 36.0267 8.99414 36.0238 8.98521C36.0285 8.99367 36.0488 9.03412 36.0799 9.09809C36.0988 9.13477 36.1204 9.17946 36.1464 9.23072C36.1737 9.28105 36.1978 9.34125 36.2227 9.4071C36.2477 9.47294 36.2779 9.54396 36.3047 9.62063C36.3274 9.69917 36.3514 9.78148 36.3764 9.86708C36.3981 9.95409 36.4122 10.0458 36.4311 10.1385C36.4452 10.2316 36.4509 10.328 36.4608 10.4254C36.4603 10.5218 36.4655 10.6196 36.4579 10.7151C36.4532 10.7711 36.4485 10.827 36.4414 10.8821C36.4688 10.8228 36.4937 10.7626 36.5145 10.6977C36.5239 10.6681 36.5333 10.638 36.5428 10.6074C36.5522 10.5773 36.5574 10.5453 36.5654 10.5143C36.5819 10.4512 36.5904 10.3859 36.5998 10.321C36.6116 10.2546 36.6116 10.1874 36.6177 10.1196C36.6177 10.0519 36.6215 9.98372 36.6168 9.91458C36.6111 9.77772 36.5941 9.63991 36.571 9.50492C36.5461 9.37041 36.5149 9.23825 36.4777 9.1122C36.4419 8.98521 36.3985 8.86574 36.3556 8.75239C36.3113 8.63951 36.2661 8.53416 36.2208 8.43774C36.0417 8.05207 35.8787 7.81643 35.8787 7.81643C35.8787 7.81643 36.0611 8.03702 36.275 8.40952C36.3288 8.50265 36.3835 8.60518 36.4377 8.71665C36.4914 8.82765 36.5461 8.9457 36.5941 9.07269C36.6432 9.19874 36.6875 9.33231 36.7252 9.47059C36.7619 9.60887 36.7921 9.75185 36.8109 9.89812C36.8218 9.97102 36.8241 10.0449 36.8312 10.1187C36.8303 10.1926 36.8359 10.2664 36.8303 10.3393C36.8265 10.4131 36.8223 10.4865 36.8109 10.5575C36.8048 10.5933 36.8015 10.63 36.7944 10.6648C36.7954 10.6638 36.7954 10.6634 36.7959 10.6624C36.8166 10.6187 36.8402 10.5745 36.8543 10.5265C36.8878 10.4315 36.9259 10.336 36.9448 10.2344C36.9571 10.1841 36.9688 10.1333 36.9806 10.083C36.9891 10.0326 36.9948 9.98043 37.0014 9.92963C37.0075 9.87837 37.0141 9.82804 37.0212 9.77725C37.0259 9.72692 37.0249 9.67707 37.0273 9.62721C37.0287 9.5783 37.0306 9.52938 37.0311 9.48188C37.0334 9.43343 37.0344 9.38687 37.0301 9.34219C37.0245 9.25048 37.0193 9.16393 37.0146 9.08492C37.0122 9.00496 36.999 8.93253 36.9905 8.8681C36.9811 8.80366 36.9726 8.74675 36.9665 8.70113C36.9547 8.61976 36.9476 8.56897 36.9462 8.55721C36.9486 8.56897 36.9618 8.61788 36.983 8.6969C36.9948 8.74252 37.0094 8.79802 37.0259 8.86104C37.0424 8.92501 37.064 8.9965 37.0749 9.07645C37.089 9.15641 37.1046 9.24295 37.1201 9.33467C37.1296 9.37982 37.1347 9.42779 37.138 9.47623C37.1418 9.52515 37.1461 9.57547 37.1503 9.62627C37.1536 9.6766 37.1602 9.7288 37.1611 9.78195C37.1602 9.83463 37.1597 9.88825 37.1588 9.94186C37.1578 9.99642 37.1588 10.0505 37.1555 10.106C37.1494 10.1606 37.1423 10.2156 37.1362 10.2706C37.1281 10.3741 37.1036 10.4743 37.0801 10.5754C37.0909 10.5566 37.1017 10.5387 37.1135 10.5204C37.1432 10.4644 37.1767 10.4098 37.2031 10.352C37.2592 10.2368 37.3068 10.1173 37.3464 9.99689C37.386 9.87649 37.418 9.75514 37.442 9.63568C37.468 9.51574 37.4816 9.39863 37.4948 9.28669C37.5047 9.17475 37.5127 9.06846 37.5137 8.97063C37.5175 8.77309 37.5052 8.60847 37.4934 8.49324C37.4826 8.39212 37.4717 8.33004 37.4694 8.31593C37.4779 8.34556 37.5467 8.59342 37.5745 8.96781C37.583 9.06799 37.5844 9.17616 37.5853 9.29186C37.5825 9.4071 37.5783 9.52797 37.5636 9.65402C37.5504 9.78007 37.5288 9.90894 37.4991 10.0397C37.4689 10.1695 37.4303 10.3007 37.3812 10.4291C37.3586 10.4936 37.3289 10.5552 37.3025 10.6187C37.2714 10.6798 37.2427 10.7424 37.2092 10.8012C37.1423 10.9192 37.0688 11.0326 36.9882 11.1356C36.9486 11.1868 36.9095 11.2381 36.8661 11.2842C36.8515 11.2997 36.8373 11.3152 36.8232 11.3308C36.8378 11.3275 36.8519 11.3237 36.8666 11.3209C36.9863 11.2908 37.1098 11.2663 37.2332 11.2433C37.3553 11.2169 37.4812 11.2024 37.6023 11.1826C37.7239 11.1624 37.8455 11.1548 37.9614 11.1417C38.0774 11.1271 38.191 11.1262 38.298 11.1182C38.4054 11.1102 38.5068 11.1111 38.6001 11.1111C38.6934 11.1111 38.7783 11.1078 38.8546 11.112C38.93 11.1158 38.9955 11.12 39.0502 11.1219C39.1586 11.1276 39.2208 11.1313 39.2208 11.1313C39.2208 11.1313 39.1586 11.1337 39.0502 11.1393C38.9955 11.1417 38.9305 11.145 38.8546 11.1478C38.7797 11.1516 38.6948 11.1633 38.6029 11.1718C38.511 11.1812 38.4111 11.1897 38.306 11.2085C38.2018 11.2263 38.0911 11.2381 37.9779 11.263C37.8648 11.288 37.7484 11.3063 37.6306 11.3383C37.5137 11.3684 37.3944 11.3942 37.2776 11.4323C37.1597 11.4667 37.0424 11.5015 36.9292 11.5424C36.8147 11.58 36.7049 11.6224 36.5984 11.6637C36.522 11.6924 36.4504 11.7235 36.3797 11.7541C36.4155 11.7508 36.4513 11.7484 36.4871 11.7461C36.5527 11.7423 36.6177 11.7376 36.6842 11.7329C36.7501 11.7296 36.8166 11.7291 36.8826 11.7268C36.949 11.7258 37.015 11.7221 37.081 11.7235C37.1465 11.7249 37.2125 11.7268 37.2776 11.7272C37.4076 11.7272 37.5363 11.7395 37.6593 11.7484C37.7833 11.7545 37.9016 11.7733 38.0138 11.7874C38.0699 11.7945 38.1245 11.8016 38.1773 11.8081C38.2296 11.8185 38.2801 11.8274 38.3281 11.8368C38.4248 11.8561 38.5143 11.8712 38.5921 11.889C38.6694 11.9093 38.7368 11.9262 38.7924 11.9412C38.889 11.9662 38.9503 11.9817 38.9635 11.9855C38.9493 11.9831 38.8881 11.9732 38.7891 11.9572C38.7321 11.9478 38.6637 11.937 38.585 11.9238C38.5063 11.913 38.4167 11.9069 38.3197 11.8975C38.2711 11.8928 38.2207 11.8876 38.1684 11.8829C38.1156 11.8806 38.0618 11.8792 38.0058 11.8768C37.8936 11.8735 37.7767 11.8669 37.6546 11.8712C37.533 11.8745 37.4076 11.8745 37.2809 11.8857C37.2168 11.8904 37.1531 11.8942 37.089 11.8989C37.0245 11.9041 36.9604 11.9135 36.8967 11.9205C36.8322 11.9285 36.7681 11.9347 36.7044 11.9441C36.6413 11.9539 36.5781 11.9648 36.5149 11.9751C36.4622 11.9831 36.4098 11.993 36.3585 12.0033C36.4603 12.0179 36.5635 12.0391 36.6677 12.0593C36.7968 12.0842 36.925 12.1237 37.0532 12.1557C37.1805 12.1962 37.3058 12.239 37.4288 12.2808C37.5495 12.3307 37.6678 12.3796 37.7823 12.4262C37.8931 12.4807 37.9996 12.5334 38.101 12.5842C38.2023 12.634 38.2918 12.6928 38.3776 12.7413C38.4625 12.7911 38.5412 12.8339 38.6058 12.881C38.6722 12.9261 38.7288 12.9647 38.7764 12.9976C38.8589 13.0545 38.9102 13.0893 38.922 13.0968C38.9098 13.0898 38.8551 13.0597 38.7679 13.0112C38.7179 12.984 38.6571 12.9496 38.5878 12.9115C38.52 12.8711 38.4375 12.8353 38.3493 12.794C38.2598 12.7544 38.1669 12.7046 38.0628 12.6651C37.9591 12.6256 37.8493 12.5837 37.7366 12.54C37.6212 12.5052 37.5014 12.4685 37.3808 12.4313C37.2578 12.4012 37.1324 12.3721 37.0075 12.3443C36.8802 12.3255 36.7553 12.2987 36.6304 12.2869C36.5051 12.2742 36.3825 12.2597 36.2637 12.2582C36.1445 12.2512 36.03 12.2545 35.9216 12.2559C35.8975 12.2568 35.8758 12.2582 35.8532 12.2597C35.9583 12.2846 36.0695 12.3189 36.1874 12.3537C36.3066 12.3956 36.4344 12.4346 36.5607 12.4882C36.6238 12.5146 36.6893 12.5386 36.7539 12.5673C36.818 12.5969 36.8826 12.627 36.9472 12.6576L37.0447 12.7037L37.1404 12.7549C37.204 12.7897 37.2681 12.825 37.3318 12.8593C37.4581 12.9308 37.5787 13.0122 37.6994 13.087C37.8167 13.1679 37.9289 13.2516 38.0387 13.3311C38.1448 13.4148 38.2438 13.5004 38.3385 13.5789C38.3621 13.5992 38.3852 13.6184 38.4087 13.6382C38.4304 13.6589 38.4516 13.6791 38.4728 13.6993C38.5148 13.7398 38.5553 13.7788 38.5935 13.816C38.6708 13.8912 38.7448 13.9557 38.8013 14.0234C38.8598 14.0878 38.9102 14.1447 38.9526 14.1913C39.0257 14.2722 39.0719 14.3225 39.0818 14.3343C39.07 14.3244 39.0205 14.2774 38.9399 14.2031C38.8947 14.1603 38.8395 14.1081 38.7764 14.0493C38.7151 13.9881 38.6354 13.9298 38.553 13.8611C38.5115 13.8277 38.4686 13.7925 38.4243 13.7567C38.4017 13.7379 38.379 13.72 38.3555 13.7017C38.3314 13.6848 38.3074 13.6669 38.2824 13.6495C38.182 13.5803 38.0774 13.5042 37.9671 13.4313C37.8535 13.3635 37.7371 13.2906 37.6164 13.2215C37.4925 13.1594 37.3695 13.0903 37.2417 13.0319C37.1772 13.0042 37.1126 12.975 37.0485 12.9473L36.9528 12.9064L36.8552 12.8706C36.7907 12.8466 36.7261 12.8222 36.6629 12.7991C36.5993 12.7775 36.5343 12.7596 36.4721 12.7399C36.3481 12.6989 36.2237 12.6721 36.1082 12.6425C36.0045 12.6209 35.9065 12.6006 35.8136 12.5856C35.816 12.5865 35.8174 12.587 35.8197 12.588C35.8542 12.6025 35.8867 12.6223 35.9201 12.6392C35.9545 12.6571 35.988 12.675 36.0219 12.6938C36.0545 12.7145 36.0875 12.7356 36.1209 12.7573C36.1534 12.7789 36.1879 12.7987 36.2199 12.8226C36.251 12.8476 36.2821 12.8725 36.3142 12.8974C36.3453 12.9224 36.3787 12.9459 36.4084 12.9736C36.4381 13.0009 36.4678 13.0286 36.497 13.0569C36.5267 13.0856 36.5555 13.1105 36.5866 13.1425C36.6139 13.1721 36.6403 13.1984 36.6686 13.2304C36.7237 13.2944 36.7761 13.3569 36.8241 13.4242C37.0207 13.6885 37.1663 13.9844 37.2596 14.2731C37.3073 14.4175 37.3421 14.5591 37.3671 14.696C37.3921 14.8295 37.4081 14.9617 37.4185 15.0807C37.4373 15.3201 37.4279 15.52 37.41 15.6583C37.3959 15.7787 37.3756 15.8516 37.3704 15.8695C37.3742 15.853 37.3883 15.7777 37.394 15.6564C37.401 15.5186 37.3954 15.3206 37.3591 15.0873C37.3398 14.9697 37.3148 14.847 37.2799 14.7143C37.2455 14.5854 37.2012 14.45 37.1451 14.3155C37.0344 14.046 36.8741 13.7769 36.6728 13.5451C36.6229 13.4868 36.5692 13.4308 36.5168 13.3795C36.4904 13.3532 36.4593 13.3259 36.4306 13.2996L36.3448 13.2295C36.3151 13.2064 36.2864 13.1829 36.2576 13.1594C36.2289 13.1364 36.1968 13.1185 36.1666 13.0973C36.1365 13.0771 36.1068 13.0569 36.0761 13.0366C36.0465 13.0169 36.0139 13.0023 35.9838 12.9844C35.9536 12.968 35.922 12.951 35.8928 12.9346C35.8608 12.9205 35.8296 12.9073 35.7995 12.8941C35.7684 12.881 35.7382 12.8659 35.7076 12.8551C35.6765 12.8452 35.6458 12.8349 35.6157 12.825C35.495 12.7845 35.3772 12.7639 35.2688 12.7474C35.2141 12.7422 35.1613 12.738 35.1123 12.7352C35.0623 12.7361 35.0147 12.7323 34.9714 12.7352C34.8997 12.7385 34.8366 12.7446 34.7819 12.753C34.7814 12.753 34.7814 12.753 34.7805 12.754C37.6174 14.0168 36.6695 17.0871 36.6695 17.0871C38.7259 16.3967 38.0317 14.2106 38.0138 14.1537C40.155 15.4946 39.785 17.2038 39.785 17.2038C41.2258 16.4263 39.6097 14.5224 39.6097 14.5224C39.6097 14.5224 40.0965 14.5224 40.3888 15.4941C40.681 16.4658 42.1412 16.9903 42.1412 16.9903C42.1412 16.9903 42.102 16.6794 42.102 15.5332C42.102 14.387 41.3427 13.5319 40.155 13.221C38.9673 12.9101 39.3759 12.1717 39.785 12.23C40.1941 12.2883 40.6612 13.1044 41.5765 13.3179C43.2902 13.6095 44.1273 12.3269 44.1273 12.3269C43.7734 11.4333 42.2349 10.6756 41.6703 11.2Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M27.2035 9.70618H30.441C30.1342 9.52463 29.9291 9.1921 29.9291 8.81208C29.9291 8.43205 30.1342 8.09811 30.4396 7.91656H27.2039C27.5108 8.09858 27.7158 8.43064 27.7158 8.81208C27.7158 9.1921 27.5089 9.52463 27.2035 9.70618ZM28.8215 8.05249C29.2415 8.05249 29.5827 8.39301 29.5827 8.81208C29.5827 9.22973 29.2415 9.57025 28.8215 9.57025C28.4016 9.57025 28.0603 9.22973 28.0603 8.81208C28.0603 8.39301 28.4016 8.05249 28.8215 8.05249Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M23.044 9.70618H26.1401C25.8347 9.52463 25.6283 9.1921 25.6283 8.81208C25.6283 8.43205 25.8333 8.09811 26.1387 7.91656H22.9818C23.2985 8.09858 23.5101 8.4391 23.5101 8.83042C23.5101 9.1954 23.3263 9.51616 23.044 9.70618ZM24.5225 8.05249C24.9425 8.05249 25.2837 8.39301 25.2837 8.81208C25.2837 9.22973 24.9425 9.57025 24.5225 9.57025C24.104 9.57025 23.7628 9.22973 23.7628 8.81208C23.7628 8.39301 24.104 8.05249 24.5225 8.05249Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M40.5391 34.9555C39.1016 34.4212 36.9886 35.7936 36.1982 36.366C36.3146 36.5128 36.4226 36.651 36.5239 36.7841C36.5852 36.7376 36.6625 36.6816 36.7534 36.6228C36.9896 36.4634 37.3176 36.2828 37.6537 36.1318C37.9911 35.9808 38.3352 35.8552 38.5954 35.7729C38.8249 35.7 38.988 35.6549 39.0238 35.6464C38.9899 35.6624 38.8376 35.7372 38.627 35.8491C38.388 35.9761 38.0769 36.1595 37.7838 36.3622C37.4906 36.565 37.2168 36.7888 37.0315 36.9704C36.9424 37.055 36.8736 37.1298 36.8251 37.1849C36.9184 37.3118 37.0051 37.4308 37.0843 37.5437C37.1371 37.5099 37.1965 37.4722 37.2629 37.4299C37.5146 37.2705 37.8578 37.0659 38.2122 36.8853C38.5666 36.7037 38.9338 36.5504 39.2161 36.4601C39.3556 36.4126 39.4763 36.3796 39.5588 36.3599C39.6318 36.3406 39.6775 36.3303 39.6879 36.3284C39.6785 36.3326 39.6351 36.3505 39.5663 36.3811C39.4871 36.4159 39.3768 36.4667 39.2477 36.5363C38.9885 36.6703 38.6604 36.8796 38.3503 37.1096C38.0416 37.341 37.7475 37.5922 37.5316 37.7864C37.4651 37.8466 37.4058 37.8993 37.3558 37.9459C37.4562 38.1011 37.5401 38.2403 37.6117 38.3659C37.6669 38.3343 37.7291 38.2981 37.7979 38.2582C38.0647 38.1062 38.4219 37.9035 38.7872 37.7144C39.152 37.5244 39.5258 37.3504 39.8114 37.2361C39.9542 37.1778 40.0749 37.1336 40.1597 37.104C40.2328 37.0786 40.2789 37.063 40.2898 37.0597C40.2804 37.0649 40.2379 37.0884 40.1682 37.1251C40.0899 37.1684 39.9787 37.2295 39.85 37.31C39.5885 37.4671 39.2533 37.6952 38.9286 37.9369C38.6039 38.1796 38.2876 38.4331 38.0505 38.6255C37.9657 38.6951 37.8917 38.7553 37.8304 38.8051C37.953 39.1029 37.9638 39.2854 37.9322 39.4185C37.9355 39.4481 37.9384 39.4777 37.9384 39.5074C38.2537 39.3004 38.6411 39.0629 39.0323 38.832C39.9556 38.2859 40.8954 37.7732 40.8954 37.7732C40.8954 37.7732 40.0258 38.3983 39.1803 39.0507C38.758 39.3771 38.3423 39.7105 38.0463 39.9702C37.9732 40.0355 37.9035 40.0939 37.8474 40.1475C37.7922 40.2016 37.7437 40.2491 37.7032 40.2867C37.7022 40.2876 37.7017 40.289 37.7008 40.29C37.5783 40.4983 37.4265 40.6761 37.271 40.8398C37.0584 41.0585 36.8307 41.2485 36.5937 41.4249C36.8326 41.2706 37.0655 41.1206 37.2931 40.9738C37.7489 40.6813 38.1773 40.4005 38.5798 40.1494C38.9819 39.8973 39.35 39.6659 39.6771 39.4613C40.0042 39.2585 40.2959 39.0897 40.5363 38.9514C40.7762 38.8131 40.968 38.7097 41.1 38.6434C41.2343 38.5789 41.3064 38.5451 41.3064 38.5451C41.3064 38.5451 41.2409 38.5893 41.1184 38.673C40.9987 38.7595 40.8233 38.886 40.6032 39.053C40.3855 39.2219 40.1206 39.4279 39.8171 39.663C39.5145 39.9006 39.1737 40.1677 38.8013 40.4602C38.4309 40.7547 38.0246 41.0674 37.5943 41.4C37.3808 41.5655 37.1564 41.7334 36.9278 41.9046C36.8114 41.9902 36.6974 42.0768 36.5767 42.1633C36.5173 42.2056 36.457 42.2489 36.3966 42.2931C36.3321 42.3373 36.2666 42.382 36.202 42.4272C36.1341 42.4747 36.071 42.5071 36.0031 42.5401C35.9183 42.5824 35.8414 42.6054 35.7542 42.6289C35.6675 42.6511 35.5798 42.668 35.4865 42.6797C35.4399 42.6863 35.3913 42.6915 35.3395 42.6924C35.2876 42.6934 35.2315 42.6934 35.1627 42.6807C35.1278 42.6746 35.0887 42.6647 35.043 42.6426C34.9996 42.6205 34.9454 42.5824 34.9063 42.5222C34.8672 42.462 34.8526 42.3914 34.8535 42.3373C34.8545 42.2837 34.8653 42.2414 34.8757 42.2056C34.8988 42.137 34.9285 42.0885 34.9558 42.0443C34.9831 42.0011 35.0119 41.963 35.0406 41.9272C35.1571 41.7856 35.2768 41.6704 35.4026 41.5632C35.5294 41.4564 35.6637 41.3656 35.7995 41.2772C35.9305 41.1916 36.0535 41.1102 36.1761 41.0204C36.4202 40.844 36.6521 40.6521 36.8562 40.4428C37.057 40.234 37.2318 40.0017 37.3134 39.7684C37.3977 39.5342 37.3695 39.3343 37.2318 39.1541C37.2149 39.132 37.1937 39.1099 37.1757 39.0873L37.1102 39.0239L37.0438 38.9679L36.9604 38.9077C36.8788 38.8536 36.7944 38.8296 36.6893 38.8305C36.4787 38.8324 36.2194 38.9434 35.9805 39.0756C35.4969 39.3479 35.0439 39.6974 34.6146 40.0205C34.1842 40.3464 33.7766 40.6615 33.3938 40.9442C33.3029 41.0105 33.2128 41.0759 33.1252 41.1408C33.3429 41.4489 33.6413 41.8651 33.909 42.208C34.2592 42.6567 34.5203 43.017 35.0689 43.1266C35.5002 43.2126 35.9484 43.1026 36.3137 42.8585C38.7047 41.2579 40.2606 40.322 41.0948 39.8432C41.0948 39.8432 41.0958 39.8422 41.0967 39.8422C41.2056 39.7642 41.3441 39.6682 41.5096 39.5647C41.7203 39.4326 41.9729 39.2872 42.2609 39.1593C42.5489 39.0337 42.8736 38.9166 43.229 38.9049C43.4048 38.8997 43.5909 38.9279 43.7517 39.0107C43.8181 39.0422 43.9049 39.093 43.9694 39.1438C44.0364 39.1946 44.0976 39.2534 44.1481 39.3202C44.2517 39.45 44.3111 39.6061 44.3257 39.7543C44.3404 39.9029 44.314 40.0435 44.2654 40.1606C44.2169 40.2778 44.1438 40.3728 44.0604 40.4353C43.977 40.4965 43.8836 40.52 43.8106 40.5125C43.7375 40.5049 43.688 40.4734 43.655 40.4555C43.632 40.4386 43.6169 40.4283 43.6117 40.4226C43.6183 40.4269 43.6338 40.4353 43.6583 40.4504C43.6923 40.4649 43.7432 40.4903 43.812 40.4894C43.8808 40.4894 43.9609 40.4598 44.0298 40.3977C44.0986 40.3342 44.1556 40.2425 44.1886 40.1329C44.2211 40.0242 44.231 39.8973 44.2046 39.7731C44.1792 39.6485 44.1169 39.5271 44.0217 39.4298C43.9751 39.3804 43.9204 39.3366 43.8601 39.3009C43.8304 39.2821 43.7997 39.2637 43.7682 39.2515C43.7394 39.2369 43.7036 39.2219 43.6654 39.2082C43.566 39.1701 43.459 39.1565 43.3492 39.1617C43.4085 39.1871 43.4689 39.2176 43.525 39.2557C43.5745 39.2882 43.6211 39.3277 43.6616 39.3719C43.7017 39.4152 43.7347 39.465 43.7602 39.5135C43.7847 39.5629 43.8012 39.6146 43.812 39.6621C43.8214 39.7115 43.8247 39.7571 43.8257 39.7994C43.8238 39.8418 43.8238 39.8794 43.8181 39.9133C43.8115 39.9462 43.8096 39.9753 43.8035 39.9989C43.795 40.0337 43.7889 40.0572 43.7865 40.0666C43.7865 40.0562 43.7889 40.0318 43.7898 39.997C43.7917 39.9739 43.7898 39.9452 43.7889 39.9123C43.7889 39.8794 43.7823 39.8427 43.7762 39.8046C43.7686 39.7656 43.7583 39.7246 43.7413 39.6833C43.7243 39.6433 43.7031 39.6019 43.6744 39.5652C43.6456 39.5295 43.6131 39.4947 43.574 39.466C43.5358 39.4363 43.4939 39.4119 43.4481 39.3931C43.2671 39.314 43.0569 39.3075 42.9052 39.315C42.8288 39.3183 42.7657 39.3267 42.7223 39.3329C42.719 39.3338 42.7171 39.3338 42.7138 39.3338C42.6144 39.3794 42.5168 39.4312 42.4249 39.4824C42.3023 39.553 42.1869 39.6273 42.0789 39.7021C42.5159 40.2002 43.4467 41.2147 43.8554 41.2941C44.4978 41.2476 44.7716 40.8252 44.8772 40.3704C45.0191 39.758 44.8093 39.1174 44.3587 38.6782L40.5391 34.9555Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM34.4774 35.1122C34.2658 34.8667 33.926 34.7698 33.6144 34.8601C33.0319 35.0369 32.0279 35.9113 30.4707 36.915C24.3109 40.8855 19.7542 40.108 14.5955 37.1605C12.986 36.2419 11.8863 35.0369 11.3038 34.8601C10.9955 34.7698 10.6557 34.8667 10.4422 35.1122C9.31009 36.4155 8.46641 37.5207 7.97906 38.277C8.06626 38.2559 8.15298 38.2474 8.23499 38.2493C8.43531 38.2526 8.61394 38.3015 8.77466 38.3608C8.93727 38.4196 9.08149 38.4915 9.21959 38.5701C9.76444 38.8814 10.2174 39.2365 10.6505 39.5658C11.0837 39.8983 11.4876 40.2092 11.8614 40.4895C12.6131 41.0576 13.2593 41.4899 13.7222 41.7815C13.9517 41.924 14.1374 42.0336 14.2618 42.1074C14.3193 42.1404 14.3636 42.1667 14.398 42.186C14.3995 42.1893 14.4061 42.1911 14.4094 42.1944C16.1386 43.0655 18.828 43.9958 22.4478 44.0005H22.4723C26.0921 43.9958 28.7815 43.0655 30.5093 42.1944C30.5141 42.1911 30.5178 42.1897 30.5225 42.186C30.5536 42.1662 30.5998 42.1404 30.6587 42.1074C30.7836 42.0336 30.9656 41.924 31.1984 41.7815C31.6594 41.4899 32.306 41.0576 33.0559 40.4895C33.4334 40.2096 33.8369 39.8983 34.2667 39.5658C34.7032 39.2365 35.1528 38.8814 35.6991 38.5701C35.8367 38.4915 35.9828 38.4196 36.1436 38.3608C36.3029 38.3015 36.4815 38.2526 36.6818 38.2493C36.7657 38.2479 36.8543 38.2559 36.941 38.277C36.4532 37.5207 35.61 36.4155 34.4774 35.1122ZM16.7316 39.4971L16.5972 39.7736L15.895 39.4312L15.6782 39.8734L16.2753 40.1664L16.1391 40.4429L15.5419 40.1499L15.294 40.6541L15.9982 40.9979L15.862 41.2749L14.8104 40.7609L15.6833 38.9825L16.7316 39.4971ZM14.2821 38.3692C14.4494 38.3198 14.6167 38.3448 14.7892 38.4464C14.9716 38.5527 15.0796 38.6806 15.1159 38.833C15.1503 38.9835 15.1145 39.1556 15.006 39.3471L14.998 39.3518L14.6766 39.1636C14.7473 39.054 14.7798 38.9637 14.7737 38.8936C14.7685 38.825 14.7214 38.7629 14.6342 38.7121C14.5588 38.6679 14.4833 38.6627 14.4094 38.6989C14.3339 38.7333 14.2618 38.8118 14.1925 38.9299L13.8904 39.4425C13.8202 39.5634 13.7872 39.665 13.7952 39.7487C13.8032 39.8324 13.8494 39.8992 13.9314 39.9467C14.0116 39.9942 14.0823 40.0041 14.1412 39.9764C14.2001 39.9486 14.2609 39.8766 14.3231 39.7619L14.6445 39.95L14.6431 39.9599C14.5347 40.148 14.407 40.2628 14.2609 40.3056C14.1134 40.3479 13.9508 40.3169 13.7754 40.2139C13.5982 40.109 13.4884 39.9731 13.4455 39.8028C13.4045 39.6325 13.4422 39.4477 13.5586 39.2497L13.8588 38.7403C13.9753 38.5409 14.1162 38.4181 14.2821 38.3692ZM12.7955 37.4112C12.9728 37.3717 13.1481 37.4093 13.322 37.524C13.4959 37.6402 13.5991 37.7879 13.6303 37.968C13.6632 38.1482 13.6156 38.3349 13.486 38.5263L13.1778 38.9882C13.0482 39.1815 12.8955 39.2958 12.7182 39.3353C12.541 39.3748 12.3638 39.3353 12.1899 39.2191C12.016 39.1029 11.9127 38.9553 11.8816 38.777C11.8486 38.6002 11.8981 38.4134 12.0277 38.222L12.336 37.7601C12.4637 37.5683 12.6183 37.4521 12.7955 37.4112ZM11.2397 36.2062L11.745 36.5269C11.9175 36.6351 12.0174 36.7889 12.0471 36.9902C12.0768 37.1915 12.0259 37.3928 11.8962 37.5979L11.7176 37.8796C11.588 38.0828 11.4254 38.2154 11.2321 38.2728C11.0384 38.3316 10.8546 38.3071 10.6826 38.1976L10.1773 37.8768L11.2397 36.2062ZM17.0502 42.6968C16.9418 42.6657 16.8056 42.6314 16.6562 42.582C16.5067 42.5312 16.3361 42.471 16.1542 42.4051C15.9723 42.3398 15.78 42.2528 15.5749 42.1643C15.368 42.0792 15.1564 41.9743 14.9368 41.8666C14.7185 41.7617 14.4984 41.639 14.2755 41.5143C14.0507 41.3949 13.8291 41.2542 13.6076 41.123C13.3875 40.9852 13.1726 40.8432 12.9577 40.7007C12.746 40.5582 12.541 40.4142 12.3473 40.2698C12.1522 40.1273 11.9651 39.9815 11.7911 39.8423C11.6139 39.7083 11.4532 39.5738 11.3071 39.4463C11.0102 39.1956 10.7721 38.9745 10.6095 38.8175C10.5256 38.7389 10.4667 38.6749 10.4243 38.6326C10.3946 38.6016 10.3748 38.5832 10.3668 38.5719C10.4243 38.6096 10.8296 38.8946 11.4155 39.3024C11.5762 39.4105 11.7487 39.5314 11.9307 39.6561C12.1145 39.7769 12.3082 39.9067 12.508 40.0408C12.7032 40.1767 12.9181 40.3046 13.1283 40.4467C13.3418 40.5826 13.5548 40.7199 13.7731 40.8545C13.9946 40.9871 14.2081 41.1277 14.4263 41.2505C14.6478 41.3718 14.8581 41.511 15.0697 41.6188C15.2813 41.7349 15.4797 41.8544 15.6767 41.9527C15.7734 42.0035 15.8686 42.0524 15.9605 42.1004C16.0524 42.1512 16.141 42.1968 16.2296 42.2382C16.4021 42.32 16.5595 42.3986 16.7005 42.4691C16.8433 42.5364 16.9677 42.5886 17.0695 42.6361C17.2467 42.7165 17.3584 42.7687 17.3862 42.7838C17.3603 42.7786 17.242 42.749 17.0502 42.6968ZM17.3108 41.8422L17.176 40.4457H17.168L16.7349 41.631L16.3686 41.4984L17.0478 39.6401L17.4136 39.7727L17.5484 41.1677H17.5583L17.99 39.9825L18.3525 40.1132L17.6733 41.9734L17.3108 41.8422ZM19.864 41.3116L19.7933 41.6376C19.741 41.8732 19.6345 42.0533 19.4733 42.1747C19.3107 42.2956 19.1301 42.3351 18.9317 42.2927L18.3459 42.1648L18.7658 40.2313L19.3517 40.3592C19.5501 40.4015 19.6981 40.513 19.7947 40.6898C19.8918 40.8676 19.9149 41.0755 19.864 41.3116ZM21.7022 41.3836L21.6546 41.9353C21.6366 42.1662 21.5575 42.3431 21.4217 42.4625C21.2836 42.5806 21.1116 42.6328 20.9033 42.6149C20.6931 42.597 20.5323 42.5185 20.4178 42.3774C20.3047 42.2382 20.2571 42.0515 20.2769 41.8205L20.3226 41.2669C20.3424 41.0379 20.4192 40.8625 20.5554 40.7416C20.6916 40.6202 20.8637 40.568 21.072 40.5859C21.2789 40.6024 21.441 40.6828 21.5575 40.8248C21.6725 40.9659 21.7201 41.1527 21.7022 41.3836ZM31.5552 37.5076L32.3084 38.626C32.3758 38.7257 32.4465 38.7864 32.5186 38.8062C32.5926 38.8259 32.6661 38.8095 32.7415 38.7587C32.8202 38.7065 32.8631 38.6439 32.8744 38.5719C32.8843 38.5 32.8547 38.4116 32.7844 38.3067L32.0312 37.1882L32.3513 36.9738L33.1045 38.0922C33.2228 38.2676 33.2619 38.4379 33.2228 38.6016C33.1832 38.7652 33.0818 38.9045 32.9145 39.0159C32.7486 39.1274 32.5813 39.1697 32.414 39.1439C32.2466 39.1161 32.1057 39.0159 31.9874 38.841L31.2357 37.7225L31.5552 37.5076ZM29.8207 38.6246L30.8921 39.6711L30.8987 39.6678L30.4358 38.2432L30.8642 37.9779L31.9111 39.6579L31.583 39.8611L31.2795 39.3734L30.9005 38.7022L30.8939 38.7055L31.2828 40.0483L31.0646 40.1842L30.0408 39.2478L30.0342 39.2525L30.4641 39.8795L30.7676 40.3672L30.441 40.5704L29.3942 38.8885L29.8207 38.6246ZM28.9643 39.1189L29.9046 40.8611L29.5653 41.0426L28.625 39.3005L28.9643 39.1189ZM24.1568 42.3694C24.0305 42.5284 23.8665 42.6116 23.6629 42.6215L23.0657 42.6493L22.9738 40.6715L23.5729 40.6452C23.7765 40.6353 23.9471 40.704 24.088 40.8516C24.2261 40.9989 24.3015 41.194 24.3128 41.4363L24.3274 41.7688C24.3388 42.0091 24.2813 42.2104 24.1568 42.3694ZM24.9854 42.518L24.721 40.5563L25.1032 40.5055L25.3658 42.4672L24.9854 42.518ZM27.087 41.9715C27.0017 42.0943 26.8674 42.1794 26.6831 42.2269C26.4993 42.2744 26.3273 42.2631 26.1666 42.1907C26.0039 42.1187 25.8993 41.9828 25.8512 41.7829L25.8526 41.7749L26.217 41.6799C26.2481 41.798 26.2957 41.8765 26.3598 41.9155C26.422 41.9532 26.5045 41.9597 26.6058 41.9334C26.6845 41.9122 26.7387 41.876 26.7651 41.8252C26.7929 41.7726 26.7962 41.7105 26.7783 41.6385C26.7585 41.5647 26.7241 41.5106 26.6732 41.4762C26.6242 41.4433 26.545 41.4189 26.4371 41.401C26.2189 41.3845 26.0483 41.3436 25.9266 41.2815C25.8036 41.2194 25.7216 41.1099 25.6787 40.9509C25.6377 40.7938 25.6622 40.6513 25.7527 40.5219C25.8428 40.394 25.979 40.3056 26.1595 40.2581C26.3414 40.2106 26.504 40.227 26.6468 40.3075C26.7896 40.3893 26.8816 40.5121 26.9226 40.6809L26.9211 40.6908L26.5582 40.7839C26.5351 40.6974 26.4941 40.6315 26.4371 40.5892C26.3782 40.545 26.3089 40.5351 26.2288 40.5549C26.1548 40.5746 26.1025 40.6122 26.0728 40.6677C26.0431 40.7251 26.0365 40.7872 26.0548 40.8545C26.0713 40.9184 26.1072 40.9641 26.1647 40.9923C26.2222 41.0219 26.3141 41.0464 26.4437 41.0661C26.6407 41.0807 26.7981 41.1216 26.9145 41.1922C27.031 41.2641 27.1097 41.3789 27.1526 41.5393C27.1955 41.7044 27.1742 41.8483 27.087 41.9715ZM27.2954 40.0982C27.3548 39.9345 27.474 39.8131 27.6564 39.7346C27.8501 39.6509 28.0174 39.6377 28.1617 39.6984C28.3045 39.7591 28.4228 39.8898 28.5147 40.0897L28.5133 40.0996L28.172 40.2468C28.1244 40.1255 28.0702 40.0469 28.0113 40.0112C27.9505 39.9749 27.8732 39.9768 27.7799 40.0177C27.6998 40.0521 27.6517 40.1095 27.6371 40.1894C27.6225 40.2713 27.6423 40.3743 27.696 40.5003L27.934 41.0454C27.9896 41.1748 28.0537 41.2599 28.1277 41.3022C28.1998 41.345 28.2804 41.3464 28.3672 41.3088C28.4525 41.2712 28.5015 41.2223 28.5133 41.1564C28.5265 41.0925 28.5034 41.0026 28.4478 40.8846L28.7909 40.7355L28.7975 40.7421C28.8861 40.9401 28.904 41.1103 28.8517 41.2547C28.7994 41.3972 28.6792 41.5101 28.4907 41.5919C28.3021 41.6738 28.1263 41.6804 27.9637 41.615C27.8016 41.5477 27.6748 41.4104 27.5829 41.1992L27.3468 40.6574C27.2544 40.4472 27.2379 40.2604 27.2954 40.0982ZM34.4972 38.6326C34.4543 38.6749 34.3921 38.7389 34.3101 38.8175C34.1475 38.9745 33.9114 39.1956 33.6144 39.4463C33.465 39.5742 33.3043 39.7083 33.129 39.8423C32.955 39.9815 32.7698 40.1273 32.5742 40.2698C32.3772 40.4138 32.1722 40.5582 31.962 40.7007C31.7485 40.8432 31.5321 40.9857 31.312 41.123C31.0891 41.2538 30.8708 41.3949 30.646 41.5143C30.4193 41.639 30.2011 41.7617 29.9815 41.8666C29.7632 41.9748 29.553 42.0797 29.3466 42.1643C29.1416 42.2528 28.9497 42.3398 28.764 42.4051C28.5821 42.4705 28.4129 42.5312 28.2635 42.582C28.1141 42.6314 27.9779 42.6657 27.8713 42.6968C27.6762 42.749 27.5579 42.7786 27.5315 42.7838C27.5612 42.7692 27.6724 42.7165 27.8482 42.6361C27.95 42.5886 28.0778 42.5364 28.2173 42.4691C28.3582 42.399 28.5156 42.32 28.69 42.2382C28.7772 42.1973 28.8672 42.1512 28.9573 42.1004C29.0492 42.0529 29.1458 42.0035 29.2429 41.9527C29.4399 41.8544 29.6383 41.7349 29.85 41.6188C30.0635 41.5106 30.2699 41.3714 30.4914 41.2505C30.7111 41.1277 30.9265 40.9871 31.1447 40.8545C31.3629 40.7204 31.5797 40.5826 31.7928 40.4467C32.0011 40.3042 32.2146 40.1762 32.413 40.0408C32.6133 39.9067 32.8052 39.7769 32.9904 39.6561C33.1709 39.5314 33.3448 39.4105 33.5023 39.3024C34.0881 38.8946 34.4935 38.6096 34.5524 38.5719C34.5434 38.5837 34.5236 38.6016 34.4972 38.6326ZM34.7305 37.675C34.6843 37.8175 34.5811 37.9403 34.4204 38.0405C34.2597 38.1402 34.0924 38.1797 33.9165 38.1599C33.7412 38.1402 33.5998 38.0405 33.4947 37.8636L33.4914 37.8556L33.8114 37.6557C33.877 37.7606 33.9462 37.8213 34.0184 37.8392C34.0905 37.857 34.1711 37.8392 34.2597 37.7832C34.3285 37.739 34.3681 37.6901 34.3794 37.6308C34.3893 37.5734 34.3747 37.5128 34.3351 37.4507C34.2941 37.3853 34.2451 37.3444 34.1871 37.326C34.1296 37.3096 34.0462 37.3096 33.9378 37.326C33.7247 37.3735 33.5508 37.3867 33.4141 37.3637C33.2798 37.3406 33.1681 37.2607 33.0809 37.1214C32.9937 36.9836 32.9744 36.8397 33.022 36.6906C33.0696 36.5401 33.1728 36.4173 33.3302 36.3172C33.4909 36.2175 33.6517 36.1845 33.811 36.2189C33.9717 36.2532 34.0966 36.3449 34.1852 36.4921L34.1866 36.502L33.8685 36.7C33.8209 36.6229 33.762 36.5721 33.6946 36.5495C33.6257 36.5265 33.5565 36.5363 33.4862 36.5791C33.4207 36.6201 33.383 36.6723 33.3712 36.7348C33.358 36.7969 33.3712 36.8576 33.4089 36.9183C33.4433 36.9738 33.4928 37.0067 33.5565 37.0166C33.6187 37.0264 33.7139 37.0231 33.8435 37.0034C34.0353 36.9578 34.1979 36.9512 34.3308 36.9836C34.4623 37.0166 34.5736 37.1031 34.6608 37.2423C34.7532 37.3881 34.7762 37.5325 34.7305 37.675ZM23.8217 41.0821C23.7576 40.9923 23.6723 40.9476 23.5658 40.9528L23.3754 40.9626L23.4376 42.3233L23.628 42.3134C23.7345 42.3083 23.8165 42.2575 23.8707 42.1629C23.9249 42.0665 23.948 41.9405 23.9414 41.7848L23.9249 41.449C23.9188 41.2952 23.8844 41.1724 23.8217 41.0821ZM21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0967 21.2657 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894ZM19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.519 41.0755 19.5176 40.9476 19.4799 40.8446C19.4426 40.7416 19.37 40.6776 19.2654 40.655ZM12.3619 38.9618C12.4439 39.0173 12.5278 39.0305 12.6112 38.9995C12.6951 38.9684 12.7772 38.8932 12.8573 38.7751L13.1674 38.3104C13.2461 38.1924 13.2838 38.0875 13.2805 37.9991C13.2772 37.9092 13.2329 37.8368 13.149 37.7813C13.0656 37.7258 12.9817 37.7126 12.8997 37.7437C12.8177 37.7766 12.7357 37.85 12.657 37.9699L12.3454 38.4351C12.2667 38.5545 12.2271 38.6575 12.2304 38.746C12.2342 38.8339 12.2785 38.9063 12.3619 38.9618ZM11.1167 37.9403C11.2166 37.8928 11.3085 37.8025 11.3905 37.6717L11.571 37.3886C11.6545 37.2578 11.6959 37.1379 11.6973 37.0283C11.6973 36.9168 11.6516 36.8336 11.5611 36.7762L11.4004 36.6746L10.6703 37.8241L10.8292 37.9257C10.9215 37.9826 11.0168 37.9873 11.1167 37.9403ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM23.9254 41.449C23.9188 41.2952 23.8844 41.1724 23.8222 41.0821C23.7581 40.9923 23.6728 40.9476 23.5663 40.9528L23.3758 40.9626L23.4381 42.3233L23.6285 42.3134C23.735 42.3083 23.817 42.2575 23.8712 42.1629C23.9254 42.0665 23.9485 41.9405 23.9419 41.7848L23.9254 41.449ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM21.2652 41.02C21.2195 40.9448 21.1455 40.902 21.0456 40.894C20.9438 40.8841 20.8651 40.9137 20.8076 40.9824C20.752 41.0497 20.7176 41.1545 20.7058 41.2952L20.6582 41.8535C20.6469 41.996 20.6629 42.1055 20.7091 42.1808C20.7553 42.2561 20.8274 42.2989 20.9273 42.3069C21.0272 42.3153 21.1059 42.2857 21.1653 42.2184C21.2242 42.1512 21.2586 42.0463 21.2704 41.9042L21.318 41.3474C21.3293 41.2049 21.3114 41.0972 21.2652 41.02ZM19.4803 40.8451C19.4426 40.7421 19.3705 40.6781 19.2654 40.655L19.0802 40.6155L18.7913 41.9466L18.9765 41.9861C19.0816 42.0087 19.1735 41.9809 19.2503 41.901C19.3276 41.8224 19.3818 41.7062 19.4144 41.5553L19.4865 41.226C19.5195 41.0755 19.518 40.9481 19.4803 40.8451ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM13.15 37.7813C13.0665 37.7258 12.9827 37.7126 12.9006 37.7437C12.8186 37.7766 12.7366 37.85 12.6579 37.9699L12.3464 38.4351C12.2677 38.5545 12.2281 38.6575 12.2314 38.746C12.2347 38.8344 12.279 38.9063 12.3624 38.9623C12.4444 39.0178 12.5283 39.031 12.6117 38.9999C12.6956 38.9689 12.7776 38.8936 12.8577 38.7756L13.1679 38.3109C13.2466 38.1929 13.2843 38.088 13.281 37.9995C13.2777 37.9092 13.2334 37.8368 13.15 37.7813ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757ZM11.5616 36.7757L11.4009 36.6742L10.6708 37.8236L10.8296 37.9252C10.9215 37.9826 11.0168 37.9873 11.1167 37.9398C11.2166 37.8923 11.3085 37.802 11.3905 37.6713L11.571 37.3881C11.6545 37.2574 11.6959 37.1374 11.6973 37.0278C11.6973 36.9168 11.6516 36.8331 11.5616 36.7757Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M13.9602 1.96179C13.9602 1.31838 13.4365 0.795837 12.7918 0.795837C12.1451 0.795837 11.6234 1.31838 11.6234 1.96179C11.6234 2.6052 12.1451 3.12727 12.7918 3.12727C12.8116 3.12727 12.8314 3.12727 12.8512 3.12586H12.8578C12.8658 3.12398 12.8757 3.12257 12.8841 3.12069C12.927 3.11081 12.9713 3.10423 13.0138 3.09106C13.0581 3.07977 13.1024 3.0713 13.1434 3.05484C13.1858 3.04355 13.2268 3.02521 13.2683 3.01063C13.3093 2.99746 13.347 2.973 13.388 2.95654C13.4276 2.94196 13.462 2.91703 13.4997 2.89916C13.5044 2.89587 13.511 2.89258 13.5176 2.88928L13.511 2.87753C13.783 2.66588 13.9602 2.33476 13.9602 1.96179ZM12.7149 2.82955C12.6673 2.83943 12.5966 2.84742 12.508 2.84413C12.4656 2.84084 12.4161 2.83567 12.3671 2.82297C12.3181 2.81168 12.2653 2.79193 12.2144 2.76559C12.188 2.7543 12.1621 2.73925 12.1371 2.72138C12.1107 2.7068 12.0876 2.68704 12.065 2.66729C12.0174 2.62778 11.9764 2.58028 11.9401 2.52807C11.8694 2.42648 11.827 2.30889 11.8091 2.19884C11.7893 2.08925 11.7944 1.98766 11.8058 1.90253C11.8171 1.8174 11.8387 1.74873 11.8567 1.70264C11.8746 1.65701 11.8897 1.63068 11.8897 1.63068C11.8897 1.63068 11.8944 1.65843 11.9028 1.70734C11.9109 1.75484 11.9226 1.8221 11.9406 1.89735C11.975 2.05115 12.0277 2.24587 12.1343 2.39685C12.1588 2.43447 12.1885 2.46881 12.2196 2.50173C12.2507 2.53277 12.2851 2.5624 12.3195 2.58827C12.3558 2.61461 12.3935 2.63719 12.4293 2.65882C12.4472 2.6687 12.467 2.67858 12.4849 2.68657C12.5028 2.69504 12.5193 2.70444 12.5391 2.71103C12.5735 2.72561 12.6079 2.74207 12.6391 2.75195C12.6688 2.76371 12.6947 2.7764 12.7192 2.78299C12.7635 2.79757 12.7913 2.81074 12.7913 2.81074C12.7913 2.81074 12.764 2.81967 12.7149 2.82955Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M22.4699 0C21.8233 0 21.3015 0.522539 21.3015 1.16595C21.3015 1.64099 21.5853 2.04829 21.9939 2.23031H21.9958C21.9972 2.23031 22.0005 2.23031 22.0024 2.23172C22.0434 2.24301 22.0858 2.24819 22.1287 2.25947C22.1711 2.26418 22.214 2.27594 22.2597 2.28064C22.304 2.28534 22.3483 2.29381 22.3926 2.29381C22.4369 2.30039 22.4812 2.29851 22.5237 2.30039C22.5698 2.30368 22.6123 2.29569 22.6547 2.2971C22.699 2.2971 22.7386 2.28722 22.781 2.28393H22.7942C22.7956 2.28393 22.7956 2.28393 22.7956 2.28252C22.797 2.28393 22.797 2.28393 22.797 2.28252C23.2825 2.14189 23.6374 1.69461 23.6374 1.16595C23.6379 0.522539 23.1147 0 22.4699 0ZM22.4713 1.98104C22.4219 1.99091 22.3516 1.99891 22.2644 1.99562C22.2201 1.99091 22.1725 1.98715 22.1235 1.97257C22.074 1.96128 22.0203 1.94294 21.9694 1.91707C21.943 1.90578 21.9185 1.89073 21.894 1.87286C21.8676 1.85828 21.8431 1.83853 21.82 1.81736C21.7738 1.77832 21.7328 1.73035 21.697 1.67955C21.6263 1.57655 21.5838 1.46038 21.5659 1.35032C21.5461 1.24073 21.5494 1.13914 21.5607 1.05401C21.5739 0.968883 21.5951 0.900215 21.6131 0.854122C21.6296 0.806619 21.6442 0.782162 21.6442 0.782162C21.6442 0.782162 21.6489 0.809911 21.6588 0.859296C21.6668 0.906799 21.6786 0.972176 21.6951 1.04931C21.7295 1.2017 21.7823 1.39783 21.8888 1.54692C21.9133 1.58455 21.943 1.62076 21.9741 1.6518C22.0071 1.68426 22.0396 1.71389 22.0759 1.73835C22.1103 1.7661 22.148 1.78914 22.1857 1.8089C22.2036 1.82018 22.222 1.83006 22.2413 1.83853C22.2592 1.84652 22.2757 1.8564 22.2937 1.86298C22.3299 1.87756 22.3625 1.89403 22.3936 1.9039C22.4247 1.91519 22.4511 1.92695 22.4737 1.93494C22.5199 1.94952 22.5458 1.96128 22.5458 1.96128C22.5458 1.96128 22.5208 1.96975 22.4713 1.98104Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M16.9583 0.0964355C16.3135 0.0964355 15.7899 0.618974 15.7899 1.26239C15.7899 1.74683 16.0868 2.16119 16.5067 2.33663C16.5181 2.33663 16.5279 2.33804 16.5378 2.33804C16.5756 2.34133 16.6151 2.3465 16.6576 2.34791C16.6972 2.35262 16.7415 2.35121 16.7839 2.3545C16.8282 2.3545 16.8739 2.35779 16.9187 2.3545C16.963 2.35309 17.0087 2.3545 17.053 2.34791C17.0959 2.3465 17.1402 2.33663 17.1845 2.33145C17.2269 2.32816 17.2698 2.31358 17.3127 2.30699C17.3551 2.30182 17.3928 2.28395 17.4343 2.27595C17.4734 2.26608 17.5097 2.2515 17.546 2.23974C17.5785 2.22845 17.6115 2.21998 17.6379 2.21011C17.6393 2.2087 17.6393 2.20869 17.6412 2.20869C17.9349 1.99611 18.1267 1.65182 18.1267 1.26239C18.1267 0.618974 17.6045 0.0964355 16.9583 0.0964355ZM16.9597 2.15461C16.9102 2.16448 16.84 2.17295 16.7514 2.16778C16.7089 2.16448 16.6613 2.16119 16.6118 2.14661C16.5609 2.13532 16.5086 2.11698 16.4577 2.09111C16.4313 2.07794 16.4068 2.06336 16.3823 2.0469C16.3559 2.03044 16.3328 2.01257 16.3083 1.99281C16.2607 1.9533 16.2197 1.90439 16.1834 1.85359C16.1127 1.75059 16.0717 1.63254 16.0538 1.52436C16.034 1.41478 16.0373 1.3113 16.0486 1.22805C16.0618 1.14292 16.0816 1.07426 16.0995 1.02816C16.1174 0.980659 16.1339 0.956202 16.1339 0.956202C16.1339 0.956202 16.1372 0.983951 16.1452 1.03145C16.1532 1.07896 16.1664 1.14622 16.1829 1.22288C16.2173 1.37668 16.2701 1.5714 16.3767 1.72237C16.4012 1.76 16.4309 1.79433 16.462 1.82726C16.495 1.8583 16.5261 1.88793 16.5638 1.91427C16.5982 1.93872 16.6359 1.96318 16.6736 1.98294C16.6915 1.99422 16.7099 2.00269 16.7278 2.01257C16.7476 2.02103 16.7641 2.03044 16.782 2.03702C16.8183 2.0516 16.8508 2.06807 16.8819 2.07794C16.913 2.08923 16.9394 2.10099 16.962 2.10757C17.0082 2.12404 17.0342 2.13532 17.0342 2.13532C17.0342 2.13532 17.0092 2.14332 16.9597 2.15461Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M27.9618 0.0964355C27.317 0.0964355 26.7934 0.618974 26.7934 1.26239C26.7934 1.65229 26.9852 1.99611 27.2807 2.20869C27.2807 2.20869 27.2822 2.2087 27.2822 2.21011C27.3086 2.21998 27.343 2.22845 27.3741 2.23974C27.4104 2.25102 27.4462 2.26608 27.4872 2.27595C27.5268 2.28395 27.5645 2.30229 27.6088 2.30699C27.6498 2.31358 27.6908 2.32816 27.7365 2.33145C27.7794 2.33615 27.8237 2.34603 27.868 2.34791C27.9123 2.3545 27.9566 2.35262 28.0009 2.3545C28.0471 2.35779 28.091 2.3545 28.1357 2.3545C28.1781 2.35121 28.2229 2.35309 28.2639 2.34791C28.3049 2.34603 28.3441 2.34133 28.3822 2.33804C28.3921 2.33804 28.4034 2.33663 28.4133 2.33663C28.8333 2.16119 29.1302 1.7473 29.1302 1.26239C29.1302 0.618974 28.6066 0.0964355 27.9618 0.0964355ZM28.7362 1.85359C28.6999 1.90439 28.6589 1.9533 28.6113 1.99281C28.5882 2.0121 28.5651 2.03044 28.5392 2.0469C28.5147 2.06336 28.4883 2.07794 28.4619 2.09111C28.411 2.11745 28.3587 2.13532 28.3092 2.14661C28.2602 2.16119 28.2107 2.16448 28.1683 2.16778C28.0796 2.17295 28.0089 2.16448 27.9613 2.15461C27.9119 2.14332 27.884 2.13485 27.884 2.13485C27.884 2.13485 27.9119 2.12356 27.9562 2.1071C27.9807 2.10052 28.0071 2.08923 28.0382 2.07747C28.0679 2.0676 28.1004 2.05113 28.1367 2.03655C28.1546 2.02997 28.173 2.02009 28.1909 2.0121C28.2107 2.00222 28.2286 1.99422 28.2465 1.98247C28.2842 1.96271 28.3205 1.93825 28.3549 1.9138C28.3926 1.88746 28.4256 1.85783 28.4567 1.82679C28.4878 1.79433 28.5175 1.75953 28.542 1.7219C28.6485 1.5714 28.7013 1.37621 28.7357 1.22241C28.7522 1.14528 28.7654 1.07849 28.7734 1.03098C28.7819 0.983481 28.7866 0.955732 28.7866 0.955732C28.7866 0.955732 28.8012 0.980189 28.8196 1.02769C28.8375 1.07331 28.8587 1.14245 28.8719 1.22758C28.8818 1.3113 28.8866 1.4143 28.8668 1.52389C28.8493 1.63254 28.8069 1.75059 28.7362 1.85359Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M32.1298 0.795837C31.4831 0.795837 30.9614 1.31838 30.9614 1.96179C30.9614 2.33523 31.1372 2.66588 31.4091 2.87847L31.4025 2.88975C31.4091 2.89305 31.4157 2.89634 31.4223 2.89963C31.46 2.9175 31.493 2.94196 31.534 2.95701C31.5731 2.97347 31.6113 2.99793 31.6523 3.0111C31.6933 3.02615 31.7343 3.04402 31.7786 3.05531C31.8196 3.07177 31.8639 3.07977 31.9068 3.09153C31.9511 3.1047 31.994 3.11128 32.0365 3.12116C32.0445 3.12304 32.0544 3.12445 32.0628 3.12633H32.0694C32.0892 3.12774 32.109 3.12774 32.1302 3.12774C32.775 3.12774 33.2987 2.6052 33.2987 1.96179C33.2977 1.31791 32.7745 0.795837 32.1298 0.795837ZM32.9796 2.52807C32.9433 2.58028 32.9023 2.62778 32.8566 2.66729C32.832 2.68704 32.809 2.70679 32.7826 2.72138C32.758 2.73972 32.7335 2.7543 32.7071 2.76559C32.6562 2.79192 32.602 2.81168 32.553 2.82297C32.5035 2.83614 32.4564 2.84084 32.4121 2.84413C32.3249 2.84742 32.2547 2.83943 32.2052 2.82955C32.1557 2.81967 32.1298 2.81168 32.1298 2.81168C32.1298 2.81168 32.1562 2.79851 32.2019 2.78393C32.225 2.77734 32.2509 2.76418 32.282 2.75289C32.3131 2.74301 32.3461 2.72655 32.3819 2.71197C32.3984 2.70538 32.4163 2.69551 32.4343 2.68751C32.454 2.67952 32.472 2.66964 32.4899 2.65976C32.5276 2.6386 32.5653 2.61555 32.5997 2.58921C32.636 2.56287 32.6685 2.53371 32.7015 2.5022C32.7326 2.46928 32.7623 2.43494 32.7868 2.39732C32.8919 2.24681 32.9461 2.05209 32.9805 1.89782C32.997 1.82257 33.0083 1.75531 33.0168 1.70781C33.0267 1.6589 33.03 1.63068 33.03 1.63068C33.03 1.63068 33.0446 1.65701 33.063 1.70264C33.0809 1.74826 33.1021 1.8174 33.1153 1.90253C33.1266 1.98766 33.1299 2.08925 33.1101 2.19884C33.0927 2.30889 33.0503 2.42648 32.9796 2.52807Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M31.6834 3.35018C31.6556 3.34031 31.6278 3.33372 31.5995 3.32055C31.5731 3.30927 31.5486 3.29421 31.5222 3.28293C31.4958 3.26976 31.4713 3.25659 31.4482 3.23872C31.4251 3.22084 31.402 3.20579 31.3808 3.18792C31.3445 3.16346 31.3186 3.13054 31.2908 3.10091L31.0791 3.49411C30.9938 3.65308 30.9085 3.81017 30.8199 3.96585C30.7346 4.12153 30.6441 4.27345 30.5527 4.42254C30.4627 4.57164 30.3689 4.71744 30.2722 4.85478C30.177 4.99258 30.0738 5.12004 29.972 5.23151C29.8735 5.3411 29.7618 5.42811 29.6916 5.45915C29.6883 5.46244 29.6835 5.46385 29.6784 5.46715C29.6798 5.46715 29.6817 5.46856 29.6835 5.46856C29.685 5.46856 29.6869 5.46856 29.6883 5.46997C29.6869 5.47185 29.685 5.47185 29.6835 5.47185L29.6491 5.47514L29.6293 5.47655C29.6261 5.47514 29.6209 5.47326 29.6129 5.46856C29.5619 5.44081 29.4667 5.33922 29.3894 5.21646C29.3093 5.09182 29.2334 4.94649 29.1646 4.7941C29.0265 4.48792 28.9087 4.15398 28.7989 3.81628C28.7447 3.64602 28.6919 3.47388 28.6415 3.30221L28.4906 2.78155L28.4166 2.52475C28.3888 2.54121 28.3577 2.55767 28.3247 2.57226C28.2804 2.5953 28.2314 2.60988 28.1805 2.62634C28.1541 2.63434 28.1282 2.63763 28.1004 2.64422C28.0726 2.64892 28.0448 2.6555 28.0165 2.6555C27.959 2.66021 27.9015 2.66209 27.8426 2.65739C27.8129 2.65409 27.7836 2.65221 27.7539 2.6461C27.7261 2.64139 27.6983 2.63293 27.6705 2.62634C27.6427 2.61976 27.6144 2.61176 27.5885 2.59859C27.5621 2.58731 27.5376 2.57743 27.5112 2.56614C27.4999 2.55956 27.4867 2.55485 27.4749 2.5478C27.4226 2.66256 27.3684 2.77873 27.3109 2.89161C27.2171 3.08633 27.1224 3.27963 27.022 3.46965C26.9202 3.65778 26.8184 3.84638 26.7104 4.02652C26.602 4.20807 26.4903 4.3835 26.3706 4.55047C26.2509 4.71603 26.126 4.87312 25.995 5.01234C25.8635 5.15297 25.7225 5.27102 25.5849 5.35286C25.5161 5.39236 25.4468 5.42482 25.3832 5.44598L25.3587 5.45398C25.3521 5.45398 25.3488 5.45539 25.3422 5.45539C25.3323 5.45868 25.3224 5.46009 25.3144 5.46527L25.3059 5.46856C25.3045 5.46856 25.3026 5.46997 25.2946 5.46997L25.2536 5.47185L25.1734 5.47844H25.1701L25.147 5.47514C25.1324 5.47326 25.1174 5.47185 25.1009 5.47185C25.0712 5.46856 25.0401 5.4568 25.009 5.45351C24.976 5.44222 24.9449 5.42717 24.9123 5.41729C24.8793 5.40083 24.8468 5.38108 24.8138 5.3665C24.679 5.28936 24.5466 5.1699 24.4184 5.03256C24.2902 4.89334 24.1723 4.73625 24.0573 4.56928C23.9456 4.40091 23.8377 4.22406 23.7359 4.04016C23.5342 3.6733 23.3504 3.28716 23.1764 2.89255C23.1109 2.75004 23.0501 2.60424 22.9912 2.45844C22.9568 2.48148 22.9205 2.49935 22.8814 2.51911C22.8583 2.5304 22.8324 2.53886 22.806 2.55015C22.7796 2.55862 22.7537 2.5699 22.7259 2.57461C22.6702 2.58919 22.6142 2.60095 22.5533 2.60424C22.5533 2.60283 22.5548 2.60095 22.5548 2.59953C22.5515 2.59953 22.5482 2.60095 22.5449 2.60095C22.5185 2.60283 22.4907 2.60612 22.4643 2.60753H22.4577C22.4313 2.60612 22.4035 2.60283 22.3771 2.60095C22.3738 2.60095 22.3705 2.59953 22.3672 2.59953C22.3672 2.60095 22.3686 2.60283 22.3686 2.60424C22.3097 2.60095 22.2522 2.58966 22.198 2.57461C22.1683 2.5699 22.1424 2.55815 22.116 2.55015C22.0896 2.53886 22.0651 2.53087 22.0405 2.51911C22.0028 2.49935 21.9651 2.48148 21.9321 2.45844C21.8713 2.60424 21.8105 2.75004 21.745 2.89255C21.5725 3.28716 21.3887 3.6733 21.1856 4.04016C21.0838 4.22359 20.9772 4.40043 20.8641 4.56928C20.751 4.73625 20.6313 4.89334 20.5031 5.03256C20.3768 5.1699 20.2424 5.28936 20.1076 5.3665C20.0747 5.38108 20.0421 5.40083 20.0091 5.41729C19.978 5.42717 19.945 5.44175 19.9139 5.45351C19.8809 5.4568 19.8517 5.46809 19.8201 5.47185C19.8055 5.47185 19.789 5.47326 19.7744 5.47514L19.7513 5.47844H19.7494L19.6693 5.47185L19.6283 5.46997C19.6184 5.46997 19.6184 5.46856 19.6151 5.46856L19.6085 5.46527C19.5986 5.46009 19.5887 5.45868 19.5788 5.45539C19.5741 5.45539 19.5689 5.45398 19.5642 5.45398L19.5397 5.44598C19.4742 5.42482 19.4068 5.39189 19.3361 5.35286C19.1985 5.27102 19.0589 5.15297 18.926 5.01234C18.7945 4.87312 18.6701 4.71603 18.5504 4.55047C18.4321 4.3835 18.319 4.20807 18.2124 4.02652C18.1026 3.84638 18.0008 3.65825 17.9009 3.46965C17.801 3.27963 17.7058 3.08633 17.6106 2.89161C17.5549 2.77873 17.5007 2.66256 17.4465 2.5478C17.4352 2.55438 17.4234 2.55909 17.4103 2.56614C17.3839 2.57743 17.3593 2.58731 17.3348 2.59859C17.3084 2.61176 17.2806 2.61976 17.2528 2.62634C17.225 2.63293 17.1972 2.64092 17.1675 2.6461C17.1378 2.65268 17.1086 2.65456 17.0803 2.65739C17.0214 2.66209 16.962 2.66068 16.905 2.6555C16.8772 2.6555 16.8489 2.64892 16.8211 2.64422C16.7947 2.63763 16.7669 2.63434 16.7405 2.62634C16.6896 2.60988 16.6406 2.5953 16.5977 2.57226C16.5633 2.55767 16.5322 2.54121 16.5044 2.52475L16.4323 2.78155L16.2814 3.30221C16.2291 3.47388 16.1782 3.64602 16.1221 3.81628C16.0137 4.15351 15.894 4.48745 15.7564 4.7941C15.689 4.94649 15.6136 5.09182 15.533 5.21646C15.4543 5.33922 15.359 5.44081 15.3081 5.46856C15.3015 5.47326 15.2968 5.47514 15.2916 5.47655L15.2737 5.47514L15.2393 5.47185C15.2379 5.47185 15.236 5.47185 15.2341 5.46997C15.236 5.46856 15.236 5.46856 15.2374 5.46856C15.2389 5.46856 15.2407 5.46715 15.2422 5.46715C15.2389 5.46385 15.2323 5.46244 15.229 5.45915C15.1601 5.42811 15.047 5.3411 14.9485 5.23151C14.8467 5.12004 14.7449 4.99258 14.6497 4.85478C14.5512 4.71697 14.4593 4.57164 14.3674 4.42254C14.2774 4.27345 14.1869 4.12106 14.1001 3.96585C14.0129 3.81017 13.9262 3.65308 13.8409 3.49411L13.6293 3.10091C13.6029 3.13054 13.5751 3.16299 13.5393 3.18792C13.5195 3.20579 13.495 3.22084 13.4737 3.23872C13.4507 3.25659 13.4261 3.26976 13.3983 3.28293C13.3738 3.29421 13.3474 3.30927 13.321 3.32055C13.2946 3.33372 13.2654 3.34031 13.239 3.35018C13.1867 3.36806 13.1339 3.37981 13.0816 3.3864C13.1179 3.51433 13.1556 3.64179 13.198 3.76784C13.313 4.12623 13.4507 4.47992 13.618 4.8275C13.7 5.00246 13.7952 5.17319 13.897 5.34486C14.0035 5.51371 14.1171 5.68397 14.2594 5.84576C14.4041 6.00803 14.5696 6.17641 14.8321 6.30434C14.8684 6.31939 14.8962 6.33397 14.9372 6.34855C14.9848 6.36313 15.0338 6.37818 15.0833 6.38947L15.121 6.39605C15.1342 6.39934 15.1474 6.40123 15.1507 6.40123L15.1837 6.40452L15.2181 6.40781L15.236 6.40922H15.2393L15.2883 6.41251H15.2916L15.3096 6.4111C15.4981 6.40593 15.6753 6.33914 15.8035 6.25401C16.0646 6.08187 16.1956 5.88057 16.3107 5.69244C16.4224 5.50242 16.5025 5.3157 16.5732 5.12898C16.6439 4.94085 16.6981 4.75412 16.7504 4.5674C16.7999 4.38256 16.8423 4.19584 16.8786 4.01053C16.913 3.82381 16.946 3.63709 16.9705 3.45036C16.9884 3.32102 17.0035 3.19309 17.0167 3.06234C17.0214 3.08021 17.0266 3.09668 17.0313 3.11455C17.0968 3.3309 17.1661 3.54678 17.2481 3.75984C17.3268 3.9729 17.414 4.18549 17.5125 4.39526C17.7095 4.81292 17.9424 5.22399 18.2643 5.60684C18.425 5.79685 18.6173 5.97699 18.8516 6.13079C18.9699 6.20604 19.1009 6.2733 19.2456 6.32409L19.2979 6.34385L19.3653 6.35843C19.4082 6.36971 19.4525 6.37818 19.4963 6.38806L19.5307 6.39276C19.5406 6.39605 19.5538 6.39793 19.5586 6.39793L19.5996 6.40123L19.6816 6.40781L19.7028 6.4111H19.7061L19.7452 6.41251H19.7499L19.7645 6.4111L19.8239 6.40781L19.9436 6.39793C20.0223 6.38806 20.0977 6.36689 20.1732 6.35043C20.2486 6.32738 20.3193 6.29963 20.39 6.27188C20.4574 6.23896 20.521 6.20463 20.5851 6.17029C20.8311 6.0212 21.0263 5.83777 21.1922 5.64634C21.3562 5.45304 21.4976 5.25315 21.622 5.04855C21.7431 4.84208 21.8515 4.63419 21.9486 4.42301C22.1405 4.00065 22.2932 3.56983 22.4181 3.1343C22.4327 3.08021 22.4459 3.02613 22.4605 2.97204C22.4751 3.02613 22.4902 3.08021 22.5048 3.1343C22.6278 3.56983 22.7819 4.00065 22.9724 4.42301C23.0709 4.63419 23.1774 4.84208 23.3004 5.04855C23.4234 5.25315 23.5648 5.45304 23.7288 5.64634C23.8962 5.83777 24.0899 6.0212 24.3359 6.17029C24.4 6.20463 24.4655 6.23896 24.5329 6.27188C24.6036 6.29963 24.6738 6.32738 24.7478 6.35043C24.8232 6.36689 24.8987 6.38806 24.9793 6.39793L25.0976 6.40781L25.1584 6.4111L25.173 6.41251H25.1763L25.214 6.4111H25.2187L25.2399 6.40781L25.3219 6.40123L25.3643 6.39793C25.3676 6.39793 25.3808 6.39605 25.3921 6.39276L25.4251 6.38806C25.4694 6.37818 25.5137 6.37018 25.558 6.35843L25.6236 6.34385L25.6759 6.32409C25.8201 6.2733 25.9516 6.20604 26.0699 6.13079C26.306 5.97699 26.4983 5.79685 26.6591 5.60684C26.9805 5.22352 27.2119 4.81245 27.4089 4.39526C27.5074 4.18549 27.5946 3.9729 27.6748 3.75984C27.7549 3.54678 27.8256 3.3309 27.8916 3.11455C27.8949 3.09668 27.9001 3.08021 27.9048 3.06234C27.918 3.19309 27.9326 3.32102 27.9524 3.45036C27.9769 3.63709 28.0085 3.82381 28.0443 4.01053C28.0801 4.19537 28.1216 4.38209 28.1725 4.5674C28.2234 4.75412 28.2776 4.94085 28.3497 5.12898C28.4185 5.3157 28.5005 5.50242 28.6122 5.69244C28.7253 5.88057 28.8583 6.08187 29.1175 6.25401C29.2457 6.33914 29.4243 6.4064 29.6129 6.4111L29.6293 6.41251H29.6341L29.6817 6.40922H29.6868L29.7033 6.40781L29.7378 6.40452L29.7722 6.40123C29.7755 6.40123 29.7887 6.39981 29.8 6.39605L29.8377 6.38947C29.8867 6.37818 29.9362 6.36313 29.9838 6.34855C30.0248 6.33397 30.0545 6.31892 30.0889 6.30434C30.3533 6.17641 30.5173 6.00803 30.6615 5.84576C30.8044 5.6835 30.9175 5.51324 31.024 5.34486C31.1258 5.17319 31.221 5.00246 31.303 4.8275C31.4718 4.48039 31.6084 4.1267 31.7249 3.76784C31.7659 3.64179 31.8036 3.51433 31.8399 3.3864C31.7866 3.37981 31.7343 3.36806 31.6834 3.35018ZM16.42 4.8924C16.3988 4.9954 16.3677 5.1445 16.3069 5.31664C16.2758 5.40506 16.2395 5.49819 16.1905 5.59178C16.1429 5.6882 16.0839 5.78838 16.0081 5.88151C15.9326 5.97463 15.8407 6.06635 15.729 6.1369C15.6734 6.17123 15.6126 6.20228 15.5485 6.22532C15.5174 6.23661 15.4797 6.24649 15.4453 6.25495L15.4029 6.26483L15.3916 6.26671L15.3732 6.27L15.3468 6.2733C15.2026 6.28646 15.0598 6.25213 14.9415 6.19804C14.8203 6.14254 14.7199 6.06541 14.6313 5.98686C14.5413 5.90832 14.4673 5.82319 14.3999 5.74135C14.3344 5.6581 14.2769 5.57579 14.2279 5.49913C14.1308 5.34345 14.0638 5.20752 14.021 5.10922C13.9832 5.02409 13.9653 4.97001 13.962 4.95872C13.9719 4.97189 14.0063 5.0161 14.0605 5.08618C14.1261 5.16802 14.218 5.28607 14.3349 5.4187C14.3938 5.48596 14.4593 5.55463 14.53 5.62518C14.5988 5.69573 14.6794 5.7644 14.7628 5.82977C14.8448 5.89515 14.9386 5.95112 15.0319 5.99204C15.129 6.03437 15.2271 6.05412 15.3223 6.04095L15.3407 6.03954C15.3421 6.03954 15.3473 6.03813 15.3473 6.03813H15.3572L15.4015 6.02825C15.426 6.02167 15.4458 6.01696 15.4722 6.00709C15.5198 5.99251 15.5674 5.97087 15.6117 5.945C15.7003 5.89092 15.7823 5.82366 15.853 5.74699C15.9218 5.67174 15.984 5.5899 16.0401 5.50618C16.0943 5.42435 16.1419 5.34251 16.1829 5.26396C16.2668 5.10828 16.3309 4.97424 16.3766 4.87923C16.4209 4.78281 16.4473 4.72873 16.4473 4.72873C16.4473 4.72873 16.4398 4.78752 16.42 4.8924ZM21.4424 4.84019C21.4311 4.86983 21.416 4.91545 21.3929 4.97142C21.3468 5.08242 21.2699 5.23998 21.1502 5.41165C21.0913 5.49678 21.0206 5.58849 20.9367 5.67503C20.8566 5.76534 20.7628 5.85329 20.6544 5.93372C20.5493 6.01555 20.4314 6.09269 20.2999 6.15148C20.2344 6.17923 20.1656 6.20557 20.0949 6.22673C20.0586 6.23661 20.0242 6.24649 19.9851 6.25307C19.9441 6.26107 19.921 6.26624 19.8753 6.26953C19.7245 6.28458 19.5717 6.26624 19.4304 6.22532C19.2894 6.1877 19.1631 6.12044 19.0481 6.04989C18.9331 5.97981 18.8332 5.89938 18.7427 5.81754C18.6541 5.73571 18.5754 5.65387 18.508 5.57344C18.3718 5.41447 18.2784 5.26867 18.2157 5.16566C18.163 5.07583 18.1337 5.01516 18.1271 5.00199C18.137 5.01328 18.1813 5.06266 18.2535 5.13791C18.3355 5.22446 18.4538 5.3458 18.6027 5.48032C18.7535 5.61295 18.9373 5.75875 19.149 5.87304C19.2574 5.93042 19.3724 5.97605 19.4902 6.00897C19.6085 6.04001 19.7315 6.05177 19.8512 6.0386C19.8725 6.03719 19.9186 6.03013 19.9446 6.02543C19.9724 6.02073 20.0021 6.01226 20.0318 6.00568C20.0926 5.98922 20.1515 5.96805 20.209 5.945C20.3221 5.89421 20.4338 5.83683 20.5337 5.76816C20.6336 5.69949 20.7307 5.62753 20.8142 5.55181C20.8995 5.47467 20.9768 5.39942 21.0437 5.32746C21.1799 5.18024 21.2817 5.04573 21.3505 4.94743C21.4113 4.8623 21.4457 4.8068 21.4537 4.79504C21.4542 4.80257 21.4509 4.81715 21.4424 4.84019ZM26.7048 5.16613C26.6426 5.26914 26.5474 5.41494 26.4111 5.57391C26.3437 5.65387 26.2669 5.73618 26.1764 5.81801C26.0878 5.89985 25.986 5.98028 25.871 6.05036C25.756 6.12091 25.6297 6.18817 25.4888 6.22579C25.3492 6.26671 25.1965 6.28458 25.0443 6.27C24.9981 6.26671 24.9769 6.26201 24.9359 6.25354C24.8963 6.24696 24.8605 6.23708 24.8242 6.2272C24.754 6.20604 24.6866 6.1797 24.6192 6.15195C24.4881 6.09316 24.3712 6.01602 24.2647 5.93419C24.1563 5.85376 24.0644 5.76581 23.9824 5.6755C23.8985 5.58896 23.8283 5.49725 23.7689 5.41212C23.6492 5.23998 23.5738 5.08289 23.5276 4.97189C23.5031 4.91639 23.4899 4.8703 23.4781 4.84067C23.4715 4.81762 23.4668 4.80304 23.4649 4.79645C23.4729 4.80774 23.5078 4.86371 23.5667 4.94884C23.6355 5.04714 23.7373 5.18119 23.8735 5.32887C23.9423 5.40083 24.0196 5.47655 24.1049 5.55322C24.1884 5.62847 24.2836 5.70043 24.384 5.76957C24.4839 5.83824 24.5956 5.89562 24.7087 5.94642C24.7662 5.96946 24.827 5.99063 24.8859 6.00709C24.9156 6.01367 24.9467 6.02167 24.9745 6.02684C24.9991 6.03154 25.0452 6.03813 25.0679 6.04001C25.1876 6.05318 25.3092 6.04142 25.427 6.01038C25.5467 5.97746 25.6599 5.93183 25.7668 5.87445C25.9818 5.75969 26.1637 5.61436 26.315 5.48173C26.4644 5.34721 26.5841 5.22634 26.6661 5.13933C26.7382 5.06407 26.7811 5.01469 26.791 5.0034C26.7854 5.01516 26.7571 5.07583 26.7048 5.16613ZM30.8986 5.10875C30.8562 5.20705 30.7902 5.34298 30.6917 5.49866C30.6422 5.57579 30.5866 5.65763 30.5192 5.74088C30.4537 5.82272 30.3783 5.90785 30.2897 5.98639C30.1997 6.06494 30.0993 6.14207 29.9795 6.19757C29.8598 6.25166 29.7189 6.28599 29.5728 6.27283L29.5464 6.26953L29.5285 6.26624L29.5186 6.26436L29.4743 6.25448C29.4413 6.24649 29.4022 6.23661 29.3725 6.22485C29.3084 6.20181 29.2476 6.17076 29.192 6.13643C29.0788 6.06588 28.9869 5.97416 28.9115 5.88104C28.8361 5.78791 28.7786 5.68773 28.7296 5.59131C28.6806 5.49819 28.6443 5.40459 28.6132 5.31617C28.5524 5.14403 28.5213 4.9954 28.5015 4.89193C28.4817 4.78705 28.4751 4.72637 28.4751 4.72637C28.4751 4.72637 28.4996 4.78046 28.5458 4.87688C28.5901 4.97189 28.6542 5.10593 28.7376 5.26161C28.78 5.34016 28.8276 5.422 28.8818 5.50383C28.936 5.58755 28.9982 5.66939 29.0689 5.74464C29.1378 5.82178 29.2217 5.88856 29.3103 5.94265C29.3546 5.96899 29.4003 5.99016 29.4498 6.00474C29.4743 6.01461 29.4955 6.01932 29.5205 6.0259L29.5648 6.03578H29.5733L29.5799 6.03719L29.5978 6.0386C29.693 6.05177 29.7929 6.03202 29.8881 5.98969C29.9833 5.94877 30.0752 5.8928 30.1586 5.82742C30.2407 5.76205 30.3213 5.69338 30.3901 5.62283C30.4608 5.55228 30.5263 5.48361 30.5852 5.41635C30.7016 5.28372 30.7949 5.16566 30.859 5.08383C30.9132 5.01375 30.9476 4.96954 30.959 4.95637C30.9561 4.96954 30.9363 5.02362 30.8986 5.10875Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M31.3049 6.98346H22.5467H22.3733H13.6151V7.73505H22.3733H22.5467H31.3049V6.98346Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M22.5467 10.6888H31.3049V9.93719H22.5467H22.3733H13.6151V10.6888H22.3733H22.5467Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M31.7904 8.81074C31.7904 8.35969 31.4237 7.99377 30.9717 7.99377C30.5197 7.99377 30.153 8.35922 30.153 8.81074C30.153 9.26179 30.5197 9.62771 30.9717 9.62771C31.4237 9.62771 31.7904 9.26226 31.7904 8.81074Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M27.4867 8.80458C27.4867 8.35353 27.1201 7.98761 26.6681 7.98761C26.2161 7.98761 25.8494 8.35306 25.8494 8.80458C25.8494 9.25563 26.2161 9.62154 26.6681 9.62154C27.1205 9.62154 27.4867 9.25563 27.4867 8.80458Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M28.8215 8.26843C28.5213 8.26843 28.2776 8.51159 28.2776 8.8112C28.2776 9.1108 28.5213 9.35396 28.8215 9.35396C29.1217 9.35396 29.3654 9.1108 29.3654 8.8112C29.3654 8.51112 29.1217 8.26843 28.8215 8.26843Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M24.5244 8.26843C24.2242 8.26843 23.9805 8.51159 23.9805 8.8112C23.9805 9.1108 24.2242 9.35396 24.5244 9.35396C24.8247 9.35396 25.0683 9.1108 25.0683 8.8112C25.0683 8.51112 24.8247 8.26843 24.5244 8.26843Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M23.2962 8.83046C23.2962 8.36483 22.9186 7.9881 22.4511 7.9881C21.9845 7.9881 21.6069 8.36483 21.6069 8.83046C21.6069 9.29609 21.9845 9.67377 22.4511 9.67377C22.9182 9.67377 23.2962 9.29609 23.2962 8.83046Z'
                      fill='#0050B1'
                    />
                    <path
                      d='M51.7534 8.91895V11.5834C51.7534 12.5871 51.7345 13.413 51.6779 14.2572L51.6968 14.2671C52.0163 13.61 52.4113 12.9257 52.8718 12.1746L54.9211 8.91895H55.7389V15.2426H54.9678V12.5499C54.9678 11.5279 54.9772 10.7768 55.0427 9.97954L55.0144 9.97061C54.7043 10.6648 54.2716 11.3967 53.8394 12.1003L51.8556 15.243H50.9813V8.91895H51.7534Z'
                      fill='black'
                    />
                    <path
                      d='M57.9423 10.702V12.5316H60.1043V10.702H60.922V15.2425H60.1043V13.1877H57.9423V15.2425H57.1245V10.702H57.9423Z'
                      fill='black'
                    />
                    <path
                      d='M65.5226 15.0738C65.3063 15.1862 64.8269 15.3367 64.2161 15.3367C62.8436 15.3367 61.9504 14.4078 61.9504 13.0189C61.9504 11.6211 62.9096 10.608 64.3947 10.608C64.8835 10.608 65.3162 10.7303 65.5415 10.8427L65.3534 11.4804C65.1559 11.368 64.8458 11.265 64.3943 11.265C63.3507 11.265 62.7866 12.0345 62.7866 12.9813C62.7866 14.0325 63.4634 14.6792 64.366 14.6792C64.8359 14.6792 65.146 14.5569 65.3812 14.4539L65.5226 15.0738Z'
                      fill='black'
                    />
                    <path
                      d='M69.7178 10.702V11.3591H68.2982V15.2426H67.4805V11.3586H66.0609V10.7015H69.7178V10.702Z'
                      fill='black'
                    />
                    <path
                      d='M71.2054 10.702V12.6153C71.2054 13.3377 71.196 13.7879 71.1587 14.4355L71.187 14.4444C71.4599 13.8913 71.6197 13.572 71.9204 13.0466L73.34 10.7015H74.3081V15.2421H73.5186V13.3185C73.5186 12.5777 73.5375 12.1934 73.5752 11.4616H73.5469C73.2556 12.0429 73.0581 12.4088 72.7947 12.8688C72.3625 13.5724 71.8638 14.4449 71.3751 15.2421H70.4254V10.7015H71.2054V10.702Z'
                      fill='black'
                    />
                    <path
                      d='M78.7009 10.702V11.3591H77.2812V15.2426H76.4635V11.3586H75.0439V10.7015H78.7009V10.702Z'
                      fill='black'
                    />
                    <path
                      d='M79.9249 10.702L80.9213 13.3847C81.025 13.6848 81.1376 14.0418 81.2126 14.3136H81.2314C81.3162 14.0418 81.41 13.6947 81.5227 13.3664L82.4253 10.702H83.2996L82.0586 13.9388C81.4661 15.4965 81.0617 16.2937 80.498 16.781C80.0936 17.1375 79.6892 17.2781 79.4828 17.3158L79.2759 16.6216C79.4828 16.5557 79.7557 16.4245 79.9998 16.218C80.2256 16.0402 80.5075 15.7209 80.6955 15.299C80.7332 15.2143 80.7615 15.1485 80.7615 15.1019C80.7615 15.0544 80.7426 14.989 80.7054 14.8856L79.0223 10.702H79.9249Z'
                      fill='black'
                    />
                    <path
                      d='M87.3355 10.702V11.3591H85.9159V15.2426H85.0982V11.3586H83.6785V10.7015H87.3355V10.702Z'
                      fill='black'
                    />
                    <path
                      d='M55.5607 20.1833V26.507H54.743V20.8682H51.8005V26.5065H50.9827V20.1833H55.5607Z'
                      fill='black'
                    />
                    <path
                      d='M56.9648 23.448C56.9648 22.8667 56.9459 22.3977 56.9271 21.966H57.6699L57.7076 22.7444H57.7264C58.0648 22.1913 58.6007 21.863 59.3435 21.863C60.4431 21.863 61.2708 22.7919 61.2708 24.1709C61.2708 25.8034 60.2744 26.61 59.2026 26.61C58.6007 26.61 58.0743 26.3471 57.8018 25.8975H57.783V28.3649H56.9652V23.448H56.9648ZM57.7825 24.6586C57.7825 24.78 57.8014 24.8933 57.8202 24.9963C57.9706 25.5683 58.4688 25.9629 59.0612 25.9629C59.9355 25.9629 60.4431 25.2494 60.4431 24.2081C60.4431 23.2984 59.9638 22.5191 59.0895 22.5191C58.5253 22.5191 57.9989 22.9231 57.8391 23.5421C57.8108 23.6451 57.7825 23.7674 57.7825 23.8798V24.6586Z'
                      fill='black'
                    />
                    <path
                      d='M66.4346 24.1991C66.4346 25.8782 65.2686 26.61 64.169 26.61C62.9374 26.61 61.9877 25.7094 61.9877 24.2739C61.9877 22.7547 62.984 21.863 64.2439 21.863C65.5509 21.863 66.4346 22.8102 66.4346 24.1991ZM62.8247 24.2457C62.8247 25.2404 63.3983 25.9911 64.2067 25.9911C64.9966 25.9911 65.5886 25.2494 65.5886 24.2273C65.5886 23.4579 65.203 22.4819 64.225 22.4819C63.248 22.4819 62.8247 23.3822 62.8247 24.2457Z'
                      fill='black'
                    />
                    <path
                      d='M70.1887 19.8457V21.8813C71.5146 21.9754 72.4732 22.8102 72.4732 24.2273C72.4732 25.7183 71.458 26.5065 70.1887 26.5917V28.3648H69.4365V26.6011C68.1205 26.5164 67.152 25.6915 67.152 24.2743C67.152 22.7735 68.1578 21.9848 69.4365 21.8818V19.8462H70.1887V19.8457ZM69.4365 22.4443C68.515 22.5666 67.9702 23.3168 67.9702 24.2457C67.9702 25.1835 68.5344 25.9153 69.4365 26.0287V22.4443ZM70.1887 26.0287C71.1007 25.9064 71.6555 25.1562 71.6555 24.2273C71.6555 23.2895 71.1007 22.576 70.1887 22.4443V26.0287Z'
                      fill='black'
                    />
                    <path
                      d='M73.9711 24.3863C73.99 25.5033 74.7045 25.9628 75.5317 25.9628C76.1241 25.9628 76.4814 25.8598 76.7915 25.7281L76.9325 26.3184C76.6412 26.4496 76.1425 26.6001 75.4186 26.6001C74.0178 26.6001 73.1812 25.6806 73.1812 24.3106C73.1812 22.941 73.99 21.8625 75.3153 21.8625C76.801 21.8625 77.1954 23.1662 77.1954 24.0016C77.1954 24.1704 77.1766 24.3016 77.1672 24.3858H73.9711V24.3863ZM76.397 23.7955C76.4065 23.2702 76.1807 22.4532 75.2498 22.4532C74.4132 22.4532 74.0465 23.2232 73.9805 23.7955H76.397Z'
                      fill='black'
                    />
                    <path
                      d='M81.4666 26.3377C81.2503 26.4502 80.771 26.6007 80.1601 26.6007C78.7876 26.6007 77.8945 25.6718 77.8945 24.2829C77.8945 22.885 78.8531 21.8719 80.3388 21.8719C80.8275 21.8719 81.2602 21.9942 81.486 22.1066L81.2979 22.7444C81.1004 22.632 80.7903 22.529 80.3388 22.529C79.2952 22.529 78.7311 23.2985 78.7311 24.2452C78.7311 25.2964 79.4079 25.9431 80.3105 25.9431C80.7804 25.9431 81.0905 25.8209 81.3257 25.7179L81.4666 26.3377Z'
                      fill='black'
                    />
                    <path
                      d='M85.6242 26.3377C85.4078 26.4502 84.9285 26.6007 84.3177 26.6007C82.9452 26.6007 82.052 25.6718 82.052 24.2829C82.052 22.885 83.0111 21.8719 84.4963 21.8719C84.9851 21.8719 85.4177 21.9942 85.643 22.1066L85.455 22.7444C85.2575 22.632 84.9473 22.529 84.4958 22.529C83.4523 22.529 82.8881 23.2985 82.8881 24.2452C82.8881 25.2964 83.565 25.9431 84.4675 25.9431C84.9375 25.9431 85.2476 25.8209 85.4828 25.7179L85.6242 26.3377Z'
                      fill='black'
                    />
                    <path
                      d='M87.3563 21.966V23.8793C87.3563 24.6017 87.3469 25.0518 87.3096 25.6995L87.3379 25.7084C87.6108 25.1553 87.7706 24.836 88.0713 24.3106L89.4909 21.9655H90.459V26.5061H89.6695V24.5824C89.6695 23.8417 89.6884 23.4574 89.7261 22.7256H89.6978C89.4065 23.3069 89.2091 23.6728 88.9456 24.1328C88.5134 24.8364 88.0147 25.7089 87.526 26.5061H86.5762V21.9655H87.3563V21.966Z'
                      fill='black'
                    />
                    <path
                      d='M95.9235 24.1991C95.9235 25.8782 94.7575 26.61 93.6579 26.61C92.4263 26.61 91.4766 25.7094 91.4766 24.2739C91.4766 22.7547 92.473 21.863 93.7328 21.863C95.0398 21.863 95.9235 22.8102 95.9235 24.1991ZM92.3137 24.2457C92.3137 25.2404 92.8868 25.9911 93.6956 25.9911C94.4855 25.9911 95.0775 25.2494 95.0775 24.2273C95.0775 23.4579 94.692 22.4819 93.7144 22.4819C92.7364 22.4819 92.3137 23.3822 92.3137 24.2457Z'
                      fill='black'
                    />
                    <path
                      d='M97.7693 21.966V23.7956H99.9317V21.966H100.749V26.5066H99.9317V24.4517H97.7693V26.5066H96.9515V21.966H97.7693Z'
                      fill='black'
                    />
                    <path
                      d='M104.625 26.5065L104.559 25.9346H104.531C104.277 26.2911 103.788 26.61 103.14 26.61C102.218 26.61 101.748 25.9628 101.748 25.3062C101.748 24.2085 102.726 23.6083 104.484 23.6173V23.5241C104.484 23.1484 104.381 22.473 103.45 22.473C103.027 22.473 102.585 22.6042 102.266 22.8107L102.078 22.2669C102.454 22.0233 102.999 21.8634 103.573 21.8634C104.964 21.8634 105.302 22.8107 105.302 23.7203V25.4182C105.302 25.8123 105.321 26.1975 105.378 26.5065H104.625ZM104.503 24.1897C103.6 24.1704 102.576 24.3303 102.576 25.2117C102.576 25.7465 102.933 26 103.356 26C103.949 26 104.325 25.6251 104.456 25.2399C104.484 25.1557 104.503 25.0621 104.503 24.977V24.1897Z'
                      fill='black'
                    />
                    <path
                      d='M110.109 21.966V26.5066H109.291V22.6132H107.73V23.7956C107.73 25.0711 107.608 25.9253 107.016 26.3095C106.79 26.4873 106.536 26.5913 106.113 26.5913L106.029 25.9436C106.188 25.9154 106.367 25.8495 106.48 25.7564C106.903 25.4465 106.95 24.8082 106.95 23.7956V21.966H110.109Z'
                      fill='black'
                    />
                    <path
                      d='M112.264 21.966V23.5045C112.452 23.4668 112.772 23.4579 113.016 23.4579C114.041 23.4579 115.122 23.7763 115.122 24.9865C115.122 25.4554 114.934 25.7842 114.642 26.0283C114.144 26.4502 113.336 26.5532 112.668 26.5532C112.207 26.5532 111.784 26.5259 111.446 26.4873V21.966H112.264ZM112.264 25.9347C112.424 25.953 112.602 25.9723 112.875 25.9723C113.495 25.9723 114.294 25.7658 114.294 25.0058C114.294 24.2175 113.467 24.0486 112.856 24.0486C112.64 24.0486 112.452 24.0679 112.263 24.0961V25.9347H112.264Z'
                      fill='black'
                    />
                    <path
                      d='M116.948 21.966V23.7956H119.111V21.966H119.929V26.5066H119.111V24.4517H116.948V26.5066H116.131V21.966H116.948Z'
                      fill='black'
                    />
                    <path
                      d='M125.403 24.1991C125.403 25.8782 124.237 26.61 123.137 26.61C121.906 26.61 120.956 25.7094 120.956 24.2739C120.956 22.7547 121.952 21.863 123.212 21.863C124.519 21.863 125.403 22.8102 125.403 24.1991ZM121.793 24.2457C121.793 25.2404 122.366 25.9911 123.175 25.9911C123.965 25.9911 124.557 25.2494 124.557 24.2273C124.557 23.4579 124.171 22.4819 123.193 22.4819C122.216 22.4819 121.793 23.3822 121.793 24.2457Z'
                      fill='black'
                    />
                    <path
                      d='M129.223 21.966V22.632H127.248V26.5066H126.431V21.966H129.223Z'
                      fill='black'
                    />
                    <path
                      d='M134 24.1991C134 25.8782 132.834 26.61 131.734 26.61C130.503 26.61 129.553 25.7094 129.553 24.2739C129.553 22.7547 130.549 21.863 131.809 21.863C133.116 21.863 134 22.8102 134 24.1991ZM130.39 24.2457C130.39 25.2404 130.964 25.9911 131.772 25.9911C132.562 25.9911 133.154 25.2494 133.154 24.2273C133.154 23.4579 132.768 22.4819 131.79 22.4819C130.813 22.4819 130.39 23.3822 130.39 24.2457Z'
                      fill='black'
                    />
                    <path
                      d='M56.3973 34.5436C56.3973 36.7198 55.0719 37.874 53.4548 37.874C51.7816 37.874 50.6066 36.5792 50.6066 34.6658C50.6066 32.6585 51.857 31.3444 53.5491 31.3444C55.2788 31.3444 56.3973 32.6674 56.3973 34.5436ZM51.4804 34.6466C51.4804 35.9978 52.2138 37.208 53.5019 37.208C54.7995 37.208 55.5324 36.0162 55.5324 34.5812C55.5324 33.3245 54.8744 32.0108 53.5109 32.0108C52.1573 32.0103 51.4804 33.2586 51.4804 34.6466Z'
                      fill='black'
                    />
                    <path
                      d='M60.8758 31.6919C60.6406 31.7761 60.2273 31.8513 59.9261 31.8983C59.1927 32.0108 58.6568 32.2549 58.309 32.7525C58.0177 33.1649 57.8485 33.7745 57.8108 34.2533H57.8391C58.1304 33.5962 58.7699 33.2303 59.4185 33.2303C60.5369 33.2303 61.3552 34.028 61.3552 35.4724C61.3552 36.9549 60.5841 37.8739 59.2493 37.8739C57.651 37.8739 57.1245 36.3444 57.1245 34.8346C57.1245 33.8027 57.3409 32.9585 57.8296 32.3207C58.2717 31.6919 58.9014 31.4012 59.7852 31.2512C60.1519 31.1947 60.6029 31.1199 60.9135 31.0066L60.8758 31.6919ZM59.2493 33.8399C58.7605 33.8399 58.4127 34.0934 58.2246 34.4593C58.0743 34.7311 57.9989 35.0599 57.9989 35.4258C57.9989 36.176 58.3655 37.2554 59.2681 37.2554C60.1801 37.2554 60.5186 36.3731 60.5186 35.5382C60.5186 34.797 60.2273 33.8399 59.2493 33.8399Z'
                      fill='black'
                    />
                    <path
                      d='M62.4015 34.7124C62.4015 34.1311 62.3827 33.6621 62.3638 33.2304H63.1061L63.1438 34.0088H63.1627C63.5011 33.4557 64.037 33.1274 64.7798 33.1274C65.8794 33.1274 66.707 34.0563 66.707 35.4353C66.707 37.0678 65.7107 37.8744 64.6389 37.8744C64.037 37.8744 63.5105 37.6115 63.2381 37.1619H63.2193V39.6292H62.4015V34.7124ZM63.2197 35.923C63.2197 36.0444 63.2386 36.1577 63.2574 36.2607C63.4078 36.8326 63.906 37.2273 64.4984 37.2273C65.3727 37.2273 65.8803 36.5138 65.8803 35.4725C65.8803 34.5628 65.401 33.7835 64.5267 33.7835C63.9625 33.7835 63.4361 34.1875 63.2763 34.8065C63.248 34.9095 63.2197 35.0317 63.2197 35.1442V35.923Z'
                      fill='black'
                    />
                    <path
                      d='M70.2736 37.771L70.2076 37.1991H70.1793C69.9257 37.5556 69.4365 37.8745 68.7879 37.8745C67.8665 37.8745 67.3966 37.2273 67.3966 36.5707C67.3966 35.4729 68.3741 34.8728 70.1326 34.8817V34.7886C70.1326 34.4128 70.0289 33.7374 69.0985 33.7374C68.6753 33.7374 68.2337 33.8686 67.9141 34.0751L67.726 33.5314C68.1022 33.2878 68.6475 33.1279 69.2211 33.1279C70.6125 33.1279 70.9509 34.0751 70.9509 34.9847V36.6826C70.9509 37.0768 70.9697 37.462 71.0263 37.771H70.2736ZM70.151 35.4541C69.2484 35.4348 68.2238 35.5948 68.2238 36.4762C68.2238 37.0109 68.581 37.2644 69.0043 37.2644C69.5967 37.2644 69.9729 36.8896 70.1039 36.5044C70.1322 36.4202 70.151 36.3266 70.151 36.2415V35.4541Z'
                      fill='black'
                    />
                    <path
                      d='M72.6637 35.1348H73.0586C73.7543 35.1348 74.2247 34.8155 74.2247 34.394C74.2247 33.9905 73.858 33.737 73.341 33.737C72.9743 33.737 72.5609 33.8593 72.2409 34.0563L72.034 33.5493C72.4945 33.2681 73.0209 33.1368 73.5474 33.1368C74.2431 33.1368 75.0891 33.4463 75.0891 34.3287C75.0891 34.8916 74.5721 35.2576 74.0645 35.3606V35.3789C74.7413 35.4354 75.3055 35.8478 75.3055 36.5138C75.3055 37.4992 74.2996 37.8651 73.3405 37.8651C72.8046 37.8651 72.2687 37.7245 71.8648 37.4992L72.0806 36.9451C72.4096 37.1238 72.8517 37.2551 73.2839 37.2551C73.9702 37.2551 74.4029 36.9268 74.4029 36.4757C74.4029 35.8662 73.7637 35.6973 73.0775 35.6973H72.6637V35.1348Z'
                      fill='black'
                    />
                    <path
                      d='M80.4594 35.4631C80.4594 37.1422 79.2933 37.874 78.1937 37.874C76.9622 37.874 76.0125 36.9733 76.0125 35.5379C76.0125 34.0187 77.0088 33.127 78.2687 33.127C79.5757 33.1274 80.4594 34.0747 80.4594 35.4631ZM76.8495 35.5097C76.8495 36.5044 77.4231 37.2551 78.2314 37.2551C79.0214 37.2551 79.6134 36.5133 79.6134 35.4913C79.6134 34.7218 79.2278 33.7459 78.2498 33.7459C77.2728 33.7459 76.8495 34.6466 76.8495 35.5097Z'
                      fill='black'
                    />
                    <path
                      d='M81.4868 33.2868C81.8064 33.2304 82.3988 33.1829 82.9347 33.1829C83.6964 33.1829 84.9563 33.3051 84.9563 34.3178C84.9563 34.8808 84.5236 35.2283 84.0065 35.3407V35.36C84.6739 35.4541 85.1632 35.8289 85.1632 36.4851C85.1632 37.6769 83.6592 37.8274 82.766 37.8274C82.2584 37.8274 81.7319 37.7898 81.4873 37.7709V33.2868H81.4868ZM82.2673 37.2272C82.5025 37.2555 82.6717 37.2649 82.9347 37.2649C83.4895 37.2649 84.3167 37.1336 84.3167 36.4766C84.3167 35.8205 83.6587 35.6789 82.8688 35.6789H82.2669V37.2272H82.2673ZM82.2768 35.1347H82.8975C83.5083 35.1347 84.1385 34.957 84.1385 34.4222C84.1385 33.9716 83.7435 33.7562 82.9164 33.7562C82.6435 33.7562 82.4743 33.7745 82.2768 33.7938V35.1347Z'
                      fill='black'
                    />
                    <path
                      d='M88.7288 37.771L88.6628 37.1991H88.6345C88.3809 37.5556 87.8922 37.8745 87.2431 37.8745C86.3217 37.8745 85.8518 37.2273 85.8518 36.5707C85.8518 35.4729 86.8293 34.8728 88.5878 34.8817V34.7886C88.5878 34.4128 88.4841 33.7374 87.5537 33.7374C87.1305 33.7374 86.6889 33.8686 86.3693 34.0751L86.1813 33.5314C86.5574 33.2878 87.1027 33.1279 87.6763 33.1279C89.0676 33.1279 89.406 34.0751 89.406 34.9847V36.6826C89.406 37.0768 89.4249 37.462 89.4815 37.771H88.7288ZM88.6062 35.4541C87.7036 35.4348 86.679 35.5948 86.679 36.4762C86.679 37.0109 87.0362 37.2644 87.4595 37.2644C88.0519 37.2644 88.428 36.8896 88.5591 36.5044C88.5874 36.4202 88.6062 36.3266 88.6062 36.2415V35.4541Z'
                      fill='black'
                    />
                    <path
                      d='M91.5421 33.2305V35.0601H93.7045V33.2305H94.5223V37.7711H93.7045V35.7162H91.5421V37.7711H90.7243V33.2305H91.5421Z'
                      fill='black'
                    />
                    <path
                      d='M96.6404 33.2304V35.1437C96.6404 35.8661 96.631 36.3162 96.5938 36.9639L96.622 36.9728C96.8949 36.4197 97.0547 36.1004 97.3554 35.575L98.775 33.2299H99.7431V37.7705H98.9537V35.8468C98.9537 35.1061 98.9725 34.7218 99.0102 33.99H98.982C98.6907 34.5713 98.4932 34.9372 98.2297 35.3972C97.7975 36.1008 97.2989 36.9733 96.8101 37.7705H95.8604V33.2299H96.6404V33.2304Z'
                      fill='black'
                    />
                    <path
                      d='M104.446 37.771H103.628V35.8666H103.017C102.67 35.8666 102.434 35.9607 102.256 36.1196C101.917 36.3924 101.795 36.9554 101.617 37.3961C101.56 37.5367 101.495 37.659 101.429 37.771H100.545C100.649 37.6214 100.742 37.4516 100.827 37.2555C101.024 36.8138 101.137 36.2236 101.541 35.8849C101.682 35.7636 101.851 35.6606 102.058 35.623V35.5947C101.466 35.5289 100.855 35.163 100.855 34.4688C100.855 33.9999 101.109 33.6805 101.457 33.4834C101.833 33.268 102.388 33.174 102.98 33.174C103.525 33.174 104.052 33.2215 104.446 33.268V37.771ZM103.628 33.7741C103.421 33.7459 103.233 33.7275 102.942 33.7275C102.378 33.7275 101.71 33.887 101.71 34.5149C101.71 35.0971 102.434 35.3031 102.923 35.3031C103.262 35.3031 103.44 35.3031 103.628 35.3031V33.7741Z'
                      fill='black'
                    />
                  </svg>
                </div>
              </div>
              <div className='content__img-wrapper'>
                <div className='img-wrapper__img'>
                  {/*  <div className="img__roc-hoy"></div>  */}
                  <svg
                    width='72'
                    height='45'
                    viewBox='0 0 52 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M17.6313 9.15551C17.5562 9.16618 17.5056 9.16156 17.467 9.18111C17.3877 9.22128 17.3587 9.27033 17.4263 9.36241C17.5077 9.47332 17.5761 9.59845 17.6267 9.72678C17.6621 9.81671 17.6352 9.88781 17.5031 9.86293C17.1626 9.79859 16.8198 9.74562 16.4782 9.68554C15.9574 9.59418 15.437 9.50104 14.9165 9.40897C14.9048 9.40684 14.8924 9.40649 14.8818 9.40151C14.5996 9.26749 14.3114 9.1971 13.9903 9.19248C13.6781 9.18822 13.6437 9.10823 13.6264 8.78652C13.6122 8.52737 13.6129 8.26609 13.5789 8.00979C13.5591 7.86226 13.4833 7.7222 13.4327 7.57858C13.4288 7.56756 13.4178 7.55725 13.4178 7.54659C13.4186 7.29526 13.2702 7.12712 13.0684 6.97213C13.13 6.93374 13.1672 6.90921 13.2058 6.88681C13.3962 6.77519 13.4288 6.62375 13.2723 6.46947C12.9696 6.17087 12.6071 5.96326 12.1957 5.86088C11.8884 5.78445 11.6512 5.96788 11.5414 6.33474C11.5244 6.39127 11.5142 6.45028 11.5067 6.50893C11.4756 6.76026 11.4352 6.81678 11.1789 6.80221C10.9261 6.78763 10.7816 6.89108 10.6829 7.11148C10.588 7.32299 10.4241 7.46518 10.2145 7.57219C10.0941 7.63368 9.99779 7.74993 9.90362 7.85337C9.81546 7.95042 9.74819 8.01832 9.59348 7.95611C8.98948 7.71225 8.37522 7.49433 7.77122 7.25083C7.30388 7.06242 6.84469 6.85375 6.3855 6.64615C6.13023 6.53097 5.88134 6.40122 5.63174 6.27396C5.58713 6.2512 5.55208 6.2089 5.49402 6.15984C5.70149 5.99952 5.89019 5.8424 6.09023 5.70163C6.39789 5.48514 6.71051 5.27611 7.02596 5.07135C7.3708 4.84775 7.71528 4.62237 8.07109 4.4169C8.54303 4.1446 9.01816 3.87515 9.50603 3.63342C10.052 3.36289 10.6124 3.12187 11.169 2.8741C11.4897 2.7312 11.8126 2.5922 12.1401 2.46636C12.5126 2.32346 12.89 2.19264 13.2691 2.06822C13.329 2.04867 13.4224 2.07248 13.4787 2.10981C14.013 2.46352 14.5281 2.84957 15.0787 3.17484C15.5056 3.42688 15.9719 3.61315 16.4276 3.814C16.7444 3.95371 17.0691 4.07848 17.3962 4.19117C17.8228 4.33834 18.253 4.47734 18.6871 4.60069C19.1165 4.72298 19.5516 4.82571 19.986 4.92845C20.2087 4.98106 20.4343 5.02478 20.6605 5.05642C21.3597 5.15382 22.0583 5.26438 22.7603 5.33121C23.5753 5.40835 24.3939 5.44603 25.211 5.49722C25.4907 5.51464 25.5003 5.52211 25.4999 5.79441C25.4985 6.74213 25.4971 7.69021 25.5013 8.63793C25.502 8.76128 25.4748 8.83913 25.3643 8.91414C25.1172 9.08228 24.8786 9.26571 24.6541 9.46301C24.5932 9.51669 24.5702 9.64182 24.5709 9.73353C24.5748 10.1772 24.5465 10.2035 24.0961 10.1569C23.8911 10.1356 23.684 10.1288 23.478 10.1228C23.3427 10.1189 23.2202 10.1398 23.176 10.3066C23.1664 10.3421 23.086 10.3798 23.0379 10.3802C22.8315 10.3819 22.6247 10.3755 22.419 10.3595C22.3606 10.3549 22.2958 10.3187 22.2509 10.2781C22.0257 10.0741 21.9566 10.073 21.7591 10.2909C21.6157 10.2728 21.5916 10.2028 21.6231 10.0606C21.6479 9.94789 21.6377 9.81458 21.6012 9.70438C21.5488 9.54548 21.4263 9.52024 21.2956 9.6212C21.165 9.72216 21.0478 9.83698 20.8609 9.83236C20.8255 9.83165 20.7685 9.92692 20.7543 9.98628C20.6991 10.2145 20.6191 10.2572 20.3918 10.2216C20.0781 10.1729 19.7598 10.1519 19.444 10.1157C19.187 10.0862 18.9306 10.0496 18.6733 10.0204C18.5794 10.0097 18.5295 9.97597 18.5107 9.87253C18.4736 9.66741 18.4601 9.47474 18.6095 9.30304C18.7632 9.12636 18.9087 8.94222 19.0648 8.76768C19.1006 8.72787 19.1657 8.71471 19.2167 8.68805C19.3187 8.63473 19.438 8.59918 19.5176 8.52275C19.6823 8.36456 19.8476 8.23516 20.082 8.18291C20.2863 8.13741 20.4743 8.02365 20.675 7.95753C20.817 7.91061 20.9678 7.87257 21.1161 7.8651C21.4433 7.84875 21.7782 7.91878 22.0908 7.76521C22.18 7.72149 22.2749 7.68239 22.3518 7.62124C22.5337 7.47692 22.635 7.19288 22.5592 7.07735C22.3797 6.80469 22.123 6.73573 21.8455 6.84238C21.592 6.93942 21.3268 6.99914 21.0708 6.81394C21.022 6.77874 20.9285 6.7919 20.8588 6.80256C20.7469 6.81927 20.6382 6.85517 20.527 6.87721C20.4134 6.89996 20.299 6.91774 20.1843 6.93516C20.1404 6.94191 20.0937 6.9508 20.0508 6.94298C19.8802 6.91241 19.6823 7.0155 19.5807 7.15911C19.4274 7.37525 19.2716 7.5896 18.9576 7.59707C18.8779 7.59885 18.7625 7.69589 18.7317 7.77588C18.6825 7.90385 18.6198 7.91843 18.4952 7.94651C18.31 7.98775 18.0848 8.01938 18.0045 8.25329C17.9669 8.36243 17.8929 8.41753 17.775 8.40224C17.6253 8.38305 17.4677 8.4353 17.4323 8.5615C17.398 8.6845 17.4614 8.83949 17.4985 8.97564C17.5148 9.03181 17.5725 9.07766 17.6313 9.15551Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M11.9107 23.5217C12.2357 23.5729 12.4439 23.5174 12.6269 23.3411C12.6984 23.2721 12.8128 23.2359 12.9141 23.212C13.3375 23.1132 13.7638 23.0258 14.1883 22.9323C14.6358 22.8338 15.0815 22.7286 15.5301 22.6354C15.7772 22.5839 16.0264 22.5391 16.2771 22.5121C16.5384 22.4836 16.7381 22.7012 16.7289 22.971C16.7275 23.0115 16.7554 23.0617 16.7852 23.0929C16.9108 23.2248 17.0564 23.3197 17.25 23.3055C17.3764 23.2963 17.4426 23.3357 17.4497 23.4822C17.4639 23.7726 17.6593 23.977 18.0406 23.9006C18.218 23.8651 18.3929 23.8171 18.5685 23.773C18.714 23.7364 18.8336 23.8011 18.886 23.9507C18.8995 23.9895 18.8921 24.0449 18.9168 24.0691C19.2135 24.3563 19.0981 24.7648 19.222 25.1025C19.2829 25.2678 19.3325 25.4381 19.3767 25.6087C19.4196 25.7737 19.4628 25.9404 19.4812 26.1089C19.512 26.3922 19.6249 26.491 19.9029 26.4285C20.0377 26.3979 20.1107 26.3972 20.1567 26.5653C20.1815 26.656 20.3189 26.7537 20.4212 26.7765C20.5837 26.8127 20.7596 26.7889 20.9299 26.79C21.0241 26.7907 21.1197 26.7804 21.2121 26.7942C21.2518 26.8003 21.3081 26.8508 21.3134 26.8874C21.319 26.9265 21.2829 26.9844 21.2479 27.0136C21.2149 27.041 21.1604 27.0449 21.114 27.0534C20.6233 27.1451 20.127 27.2134 19.6426 27.3317C19.0047 27.4878 18.3745 27.6762 17.745 27.8646C17.3969 27.9688 17.0546 28.0939 16.7147 28.2226C15.9443 28.5148 15.2065 28.876 14.514 29.3242C14.2584 29.4899 14.0027 29.6605 13.7719 29.8585C13.5874 30.0167 13.4016 30.0288 13.2001 29.9502C12.4131 29.6427 11.62 29.3491 10.8472 29.0093C10.149 28.7021 9.46179 28.3641 8.7923 27.9986C8.14475 27.6449 7.51916 27.2486 6.89605 26.8522C6.49987 26.6002 6.12671 26.3115 5.74045 26.0431C5.61547 25.9564 5.6176 25.9102 5.76099 25.8444C6.34232 25.5788 6.91375 25.2905 7.49969 25.0364C8.12988 24.763 8.76681 24.5021 9.41187 24.2664C9.94577 24.0712 10.4959 23.9216 11.0387 23.7506C11.1679 23.7101 11.2943 23.6589 11.4253 23.6258C11.6105 23.5792 11.7988 23.5451 11.9107 23.5217Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M29.6288 9.88812C29.7541 9.67483 29.8692 9.48145 29.9817 9.287C30.0954 9.09077 30.0947 8.90094 29.9686 8.70472C29.7806 8.4118 29.6068 8.11426 29.308 7.90879C29.0673 7.74349 28.8378 7.77406 28.5868 7.86649C28.4944 7.80001 28.3928 7.72678 28.283 7.64786C28.3542 7.36916 28.3284 7.33859 27.8384 7.19711C27.9258 7.1349 27.9949 7.0894 28.06 7.03856C28.1836 6.94187 28.31 6.84767 28.4261 6.74244C28.5199 6.65748 28.4951 6.57039 28.4112 6.48223C28.2859 6.35035 28.1772 6.20211 28.0476 6.0752C27.9811 6.01015 27.883 5.93976 27.8012 5.94225C27.7463 5.94403 27.6932 6.06809 27.6444 6.14132C27.6199 6.17794 27.6075 6.22273 27.5898 6.26396C27.5728 6.26361 27.5555 6.26361 27.5385 6.26325C27.5325 6.18327 27.5031 6.09653 27.5247 6.02508C27.61 5.7414 27.6157 5.74318 27.5399 5.45488C27.6514 5.44457 27.7594 5.4364 27.8667 5.42466C28.505 5.3557 29.1434 5.28994 29.781 5.21528C30.1311 5.1744 30.4816 5.13032 30.8279 5.06563C31.2952 4.97818 31.7594 4.87402 32.2232 4.76844C32.5953 4.68384 32.9677 4.59781 33.3342 4.49223C33.7066 4.38487 34.0766 4.26436 34.4398 4.12821C34.9164 3.9494 35.3922 3.76455 35.8553 3.5534C36.2072 3.39307 36.5506 3.20609 36.8771 2.99777C37.2874 2.73614 37.7009 2.46917 38.0649 2.14959C38.2769 1.96332 38.414 1.92954 38.6706 2.04508C39.1022 2.23917 39.5653 2.36146 40.0072 2.53493C40.4423 2.70592 40.8678 2.90215 41.2969 3.08842C41.4718 3.16414 41.6453 3.24306 41.8383 3.32909C41.7915 3.39378 41.7717 3.43786 41.7384 3.46524C41.5182 3.64404 41.4265 3.90497 41.31 4.14777C41.2307 4.31307 41.4169 4.57897 41.6177 4.60278C41.7197 4.61487 41.823 4.61558 41.9562 4.62269C41.7986 4.81394 41.6074 4.82923 41.4368 4.79013C41.1036 4.7137 40.9588 4.88077 40.9496 5.21706C40.9425 5.4819 40.7552 5.61165 40.6147 5.77624C40.3966 6.03183 40.3831 6.11324 40.5729 6.39158C40.5963 6.42571 40.6193 6.46019 40.6398 6.49574C40.6444 6.50356 40.6395 6.51742 40.637 6.55653C40.5637 6.51671 40.5003 6.48223 40.437 6.44846C40.3194 6.38554 40.2093 6.29134 40.0603 6.37878C40.039 6.39123 39.9831 6.36847 39.9572 6.34572C39.5933 6.02472 39.0346 6.06702 38.7521 6.46197C38.6452 6.61092 38.5846 6.79754 38.523 6.97386C38.4387 7.21417 38.3602 7.27958 38.1056 7.29167C37.9247 7.3002 37.7441 7.32544 37.5632 7.33219C37.5186 7.33397 37.4609 7.3034 37.4283 7.26927C37.2481 7.08051 36.9684 7.08122 36.8102 7.30233C36.7238 7.4232 36.6901 7.58245 36.6232 7.74704C36.5574 7.70047 36.4823 7.6116 36.3945 7.59596C36.3106 7.58139 36.2132 7.64324 36.1208 7.67168C36.1424 7.3066 35.8135 7.0798 35.474 7.21524C35.4294 7.23301 35.3635 7.19604 35.3072 7.18573C35.2541 7.17614 35.1925 7.14841 35.1493 7.16583C35.1122 7.18076 35.0697 7.25399 35.0778 7.2906C35.0874 7.33326 35.1451 7.38765 35.1893 7.39582C35.3186 7.42 35.3671 7.49181 35.3727 7.61587C35.3837 7.86115 35.3862 7.86115 35.6432 7.88213C35.4389 7.88924 35.395 8.01934 35.3735 8.18998C35.3593 8.30266 35.298 8.40895 35.2641 8.51987C35.2124 8.68694 35.2708 8.79963 35.4283 8.87962C35.6379 8.98626 35.6262 8.98484 35.4662 9.14623C35.4085 9.20453 35.4 9.31224 35.3657 9.40715C35.338 9.40395 35.3012 9.40751 35.2715 9.39471C35.1239 9.33001 35.0038 9.36983 34.9128 9.49389C34.8042 9.64177 34.6724 9.70718 34.4869 9.6631C34.3832 9.63857 34.3025 9.6727 34.2334 9.77366C34.118 9.94251 33.7643 9.93718 33.6482 9.7669C33.5562 9.63146 33.4914 9.47754 33.4099 9.33428C33.3119 9.16116 33.115 9.09433 32.9274 9.14658C32.6714 9.21804 32.4314 9.36023 32.146 9.31046C32.0164 9.28771 31.9481 9.36734 31.9612 9.50313C31.9676 9.56783 31.9764 9.63217 31.9853 9.69652C32.0111 9.88421 31.9353 9.98304 31.7459 10.0065C31.6404 10.0197 31.5349 10.0388 31.4294 10.0399C31.3774 10.0403 31.2981 10.0214 31.2772 9.98482C31.109 9.68834 30.8559 9.76655 30.6265 9.84938C30.2883 9.97273 29.9573 9.9219 29.6288 9.88812ZM34.0819 6.89637C33.9973 6.88037 33.9753 6.87682 33.9534 6.8722C33.8858 6.85691 33.8181 6.84127 33.7502 6.82563C33.7615 6.90241 33.7562 6.98773 33.7891 7.05385C33.8132 7.10255 33.8833 7.13348 33.9389 7.15943C34.0295 7.20173 34.1308 7.2227 34.2168 7.27141C34.4912 7.42675 34.6009 7.41467 34.8381 7.20422C35.0006 7.05989 35.1741 6.92836 35.3366 6.78439C35.3819 6.74422 35.4209 6.68379 35.4375 6.62585C35.5158 6.34857 35.6032 6.27001 35.8822 6.22557C36.1492 6.18327 36.3687 6.05672 36.5248 5.83027C36.6027 5.71723 36.5931 5.61165 36.499 5.50891C36.3258 5.32015 35.9927 5.32015 35.7615 5.51105C35.6815 5.57717 35.6308 5.70514 35.4853 5.64826C35.4751 5.64435 35.4223 5.70194 35.4202 5.73287C35.4067 5.91879 35.3313 5.86582 35.2297 5.7965C34.9914 5.63369 34.5383 5.79224 34.4607 6.06845C34.4289 6.18149 34.3662 6.19891 34.278 6.16158C34.1509 6.10791 34.0228 6.12497 33.9661 6.23623C33.9226 6.32155 33.9421 6.44917 33.9605 6.55333C33.9785 6.65677 34.0302 6.75489 34.0819 6.89637Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M47.4803 15.0419C47.3497 15.1536 47.2084 15.2556 47.0898 15.3789C46.7092 15.7749 46.3513 16.1941 45.9576 16.5755C45.531 16.9889 45.082 17.381 44.6267 17.7628C44.1665 18.1485 43.691 18.5161 43.212 18.878C43.0598 18.9928 42.8817 19.0866 42.7011 19.1457C42.5921 19.1812 42.4327 19.1698 42.3354 19.1122C42.0787 18.9604 41.788 18.7898 41.7937 18.4475C41.7979 18.2022 41.8741 17.9455 41.97 17.7162C42.3177 16.8862 42.7811 16.1173 43.2814 15.3733C43.8801 14.4828 44.5099 13.6129 45.1058 12.7203C45.3929 12.2898 45.634 11.8284 45.8932 11.3794C45.925 11.3239 45.9537 11.2589 45.9576 11.1967C45.964 11.09 45.9859 10.9187 45.9349 10.8888C45.8432 10.8351 45.6889 10.8295 45.5841 10.8678C45.2371 10.9951 44.8916 11.133 44.562 11.2998C44.0178 11.5753 43.4818 11.8682 42.9507 12.1693C42.3577 12.5056 41.7742 12.8596 41.1862 13.2048C41.0304 13.2965 40.8721 13.3843 40.6955 13.4849C40.6813 13.4344 40.6629 13.3936 40.659 13.3516C40.6073 12.8045 40.7117 12.2869 40.9348 11.7864C41.0491 11.5298 41.2417 11.3605 41.4694 11.2226C41.9452 10.934 42.4158 10.6357 42.905 10.3719C43.3391 10.138 43.7916 9.93719 44.243 9.73776C44.6671 9.55042 45.0951 9.36912 45.531 9.21164C46.0511 9.02395 46.585 8.87749 47.1401 8.84016C47.2654 8.83163 47.406 8.85367 47.5182 8.90699C47.606 8.94859 47.703 9.05132 47.7225 9.14304C47.8029 9.51985 47.7221 9.88173 47.5554 10.2248C47.1596 11.0395 46.642 11.7775 46.1321 12.5216C45.5359 13.3921 44.945 14.267 44.3623 15.1468C44.1807 15.4212 44.0298 15.7167 43.8709 16.006C43.8379 16.0661 43.8259 16.1404 43.8139 16.2097C43.7498 16.573 43.8985 16.6939 44.277 16.621C44.5556 16.5673 44.8501 16.4472 45.0718 16.2723C45.5933 15.8606 46.096 15.4195 46.5694 14.9527C47.6421 13.8948 48.6933 12.8148 49.7522 11.7427C49.8935 11.5998 50.0323 11.4544 50.1675 11.3058C50.2727 11.1903 50.4029 11.1892 50.4943 11.2823C50.6193 11.4096 50.7248 11.5635 50.8097 11.7217C50.899 11.8877 50.802 12.0356 50.7134 12.1803C50.3045 12.8486 49.8906 13.5144 49.4962 14.1916C49.1734 14.7462 48.8668 15.311 48.569 15.8798C48.1293 16.7209 47.7062 17.5709 47.2718 18.4148C46.9351 19.0689 46.625 19.7397 46.2422 20.366C45.8188 21.0585 45.3359 21.7151 44.8615 22.3749C44.5241 22.8438 44.1711 23.3027 43.8015 23.7463C43.4311 24.191 43.0208 24.6038 42.5266 24.9102C42.2642 25.0726 41.9753 25.2017 41.6843 25.3051C41.2683 25.453 40.8728 25.1843 40.7518 24.7577C40.6597 24.4328 40.6431 24.11 40.6416 23.7794C40.6399 23.2618 40.7925 22.7762 40.9419 22.2913C41.0141 22.0567 41.1253 21.8342 41.2198 21.607C41.3671 21.2537 41.8259 20.8985 42.3106 20.7819C42.2911 20.8836 42.2823 20.9725 42.2571 21.0564C42.1038 21.5644 41.9445 22.0706 41.7926 22.5793C41.7661 22.6689 41.7544 22.7655 41.7533 22.8594C41.7505 23.1242 41.9474 23.2391 42.2023 23.1438C42.5099 23.0286 42.716 22.7887 42.9281 22.5619C43.5859 21.8591 44.2115 21.1261 44.7369 20.3177C45.0215 19.8797 45.2378 19.3973 45.4949 18.9405C45.902 18.2157 46.3212 17.4976 46.728 16.7728C46.9666 16.3473 47.1974 15.9168 47.4187 15.482C47.481 15.3597 47.4977 15.214 47.5349 15.0789C47.5171 15.0658 47.4987 15.0537 47.4803 15.0419Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M31.6942 16.0135C31.5608 16.2716 31.4439 16.5023 31.3228 16.7302C31.1795 17 31.0286 17.2659 30.8888 17.5378C30.818 17.675 30.7408 17.7376 30.5641 17.7376C30.0816 17.7379 29.599 17.7763 29.1172 17.8083C29.0602 17.8122 28.9886 17.8563 28.9547 17.9036C28.6477 18.3359 28.3199 18.7568 28.0543 19.2139C27.8592 19.5499 27.7775 19.9423 27.8132 20.3419C27.8292 20.5175 27.7814 20.6266 27.6121 20.7073C27.3696 20.8232 27.1423 20.9714 26.909 21.1069C26.6913 21.2331 26.6116 21.1854 26.5854 20.9295C26.5503 20.5896 26.6399 20.2722 26.7461 19.9583C26.9741 19.285 27.3558 18.6985 27.7785 18.1354C27.8164 18.0853 27.8196 18.0088 27.8391 17.9448C27.7757 17.926 27.7105 17.8862 27.6493 17.8915C26.8106 17.9669 25.9722 18.0476 25.1342 18.1311C25.0871 18.1357 25.0343 18.1681 24.9993 18.2026C24.3188 18.8755 23.6281 19.541 23.1041 20.3504C22.9352 20.6113 22.7253 20.8755 22.8223 21.2345C22.3475 21.1492 21.8989 20.7542 22.1156 20.3326C22.2466 20.0774 22.419 19.8389 22.5996 19.6149C22.9034 19.2385 23.2287 18.8798 23.5445 18.5129C23.587 18.4639 23.6316 18.4155 23.6667 18.3611C23.7548 18.2235 23.7187 18.1492 23.5583 18.1432C23.364 18.1361 23.1692 18.1372 22.9749 18.1332C22.9225 18.1322 22.8679 18.1336 22.8177 18.1208C22.4587 18.0291 22.384 17.9232 22.3755 17.5474C22.368 17.2197 22.5302 16.9591 22.6881 16.6957C22.7515 16.5901 22.8265 16.4916 22.9065 16.3747C23.2326 16.7309 23.6614 16.6754 24.0728 16.6818C24.4728 16.6878 24.8761 16.706 25.2606 16.5648C25.3732 16.5236 25.4946 16.4671 25.5746 16.3821C26.3362 15.5745 27.1019 14.7704 27.8394 13.941C28.1786 13.5596 28.5022 13.154 28.7008 12.6712C28.8467 12.3168 28.6442 11.9937 28.2583 11.999C27.901 12.004 27.5438 12.0488 27.188 12.0897C26.8669 12.1266 26.5447 12.1661 26.2289 12.2326C25.8267 12.3172 25.4266 12.4174 25.0326 12.5351C24.6679 12.6442 24.3047 12.7658 23.9563 12.9183C23.701 13.0299 23.4695 13.1973 23.2312 13.3466C23.1006 13.4284 23.0605 13.5571 23.0482 13.7107C23.0418 13.7874 22.9816 13.893 22.9161 13.9272C22.2264 14.2837 21.529 14.6253 20.8375 14.9787C20.6945 15.0519 20.5274 15.0316 20.4775 14.7305C20.4304 14.4447 20.4431 14.1369 20.4937 13.8497C20.5815 13.3506 20.8248 12.9176 21.187 12.56C21.473 12.2777 21.8295 12.1049 22.1935 11.9546C22.606 11.7843 23.0244 11.6272 23.4472 11.4846C23.7247 11.3911 24.0129 11.3286 24.2983 11.2614C24.6707 11.1736 25.0421 11.0758 25.4192 11.0179C25.878 10.9471 26.3415 10.886 26.8049 10.87C27.5349 10.8444 28.266 10.8526 28.9968 10.86C29.5257 10.8654 29.7396 11.1156 29.8249 11.582C29.8936 11.9571 29.9166 12.3442 29.7399 12.6958C29.6249 12.9247 29.4684 13.138 29.302 13.3342C28.8435 13.8742 28.3705 14.4017 27.9031 14.9339C27.5877 15.2933 27.2676 15.6488 26.9596 16.0142C26.9083 16.0753 26.9062 16.1784 26.881 16.262C26.9575 16.2723 27.0361 16.2986 27.1108 16.2901C27.6773 16.2257 28.2423 16.1489 28.8095 16.0885C29.0131 16.0668 29.1469 15.9811 29.2736 15.8151C29.5597 15.4401 29.8702 15.0832 30.1804 14.7273C30.7581 14.0637 31.3405 13.4035 31.9258 12.7466C32.0826 12.5703 32.2554 12.4078 32.4264 12.245C32.4639 12.2091 32.5262 12.1991 32.5769 12.1771C32.596 12.2297 32.6261 12.2813 32.6328 12.3356C32.6838 12.7409 32.4197 13.0068 32.203 13.2905C31.6018 14.0782 30.9943 14.861 30.3963 15.6513C30.3344 15.733 30.3202 15.8514 30.2837 15.9531C30.3832 15.973 30.4823 16.0082 30.5822 16.0099C30.9405 16.0178 31.2977 16.0135 31.6942 16.0135Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M2.07187 13.8035C2.1494 13.4153 2.29881 13.0922 2.47619 12.7808C2.77039 12.2642 3.14674 11.8263 3.66966 11.5277C4.00282 11.3371 4.35403 11.1942 4.72683 11.1054C6.1207 10.7726 7.53722 10.8107 8.94844 10.897C9.66396 10.9408 10.365 11.1373 10.9626 11.5789C11.3039 11.8309 11.5634 12.1494 11.7429 12.5422C12.041 13.1938 12.1493 13.8739 12.0753 14.5802C12.0307 15.004 11.8909 15.4049 11.6958 15.7871C11.3141 16.5354 10.7374 17.1177 10.0984 17.6331C9.74928 17.9147 9.34461 18.1311 8.95198 18.3537C8.33276 18.7045 7.65618 18.9196 6.9619 19.0341C6.48359 19.113 5.98616 19.0949 5.49758 19.087C5.11593 19.0806 4.73462 19.0277 4.35438 18.9864C3.99184 18.9473 3.96741 18.9566 3.79075 19.2676C3.68878 19.4468 3.56062 19.6139 3.48237 19.8023C3.42431 19.942 3.39386 20.1108 3.41121 20.2594C3.42998 20.4198 3.43635 20.552 3.34359 20.6956C3.0685 21.1208 2.80792 21.5552 2.53885 21.9842C2.50168 22.0436 2.45317 22.0984 2.40113 22.1453C2.21419 22.3134 1.9869 22.2558 1.886 22.0269C1.76456 21.7518 1.82723 21.4766 1.93769 21.2349C2.27119 20.5054 2.67941 19.8161 3.1471 19.1638C3.18852 19.1062 3.22711 19.0465 3.26393 18.9861C3.39988 18.7628 3.38006 18.7376 3.14037 18.6146C2.97078 18.5275 2.80757 18.4162 2.66631 18.2879C2.35475 18.005 2.39192 17.605 2.63763 17.2819C2.81784 17.0448 3.0731 16.9161 3.33934 16.797C3.76242 16.6075 4.20745 16.513 4.65815 16.4227C4.78242 16.3978 4.912 16.272 4.98883 16.1579C5.50714 15.3914 6.01165 14.6154 6.52148 13.8429C6.68646 13.593 6.85817 13.3474 7.01643 13.0932C7.05537 13.0307 7.08122 12.9304 7.05785 12.8689C7.04227 12.828 6.92827 12.8106 6.85782 12.8081C6.2825 12.7889 5.71957 12.8902 5.15806 12.9997C4.72011 13.0854 4.27862 13.1586 3.84633 13.2681C3.39103 13.3837 2.94494 13.5351 2.49495 13.6712C2.36254 13.7111 2.23083 13.7537 2.07187 13.8035ZM8.48464 12.8184C8.48393 12.8227 8.48322 12.8266 8.48252 12.8309C8.3586 12.8309 8.2315 12.8135 8.11219 12.8366C8.02262 12.854 7.92207 12.9048 7.86365 12.9731C7.76133 13.0932 7.68805 13.2383 7.60201 13.3726C7.04121 14.2468 6.4797 15.1206 5.92137 15.9961C5.88951 16.0462 5.88384 16.1131 5.86614 16.1721C5.92562 16.187 5.98475 16.2147 6.04423 16.2151C6.27966 16.2162 6.51581 16.2016 6.75089 16.2098C6.80471 16.2115 6.89995 16.2801 6.89924 16.3168C6.89818 16.3854 6.85675 16.4728 6.80294 16.5158C6.74912 16.5588 6.66026 16.5681 6.58556 16.5716C6.42659 16.5795 6.26656 16.5645 6.10831 16.5763C5.94509 16.5883 5.78011 16.609 5.6215 16.6484C5.45156 16.6907 5.3804 16.8393 5.35809 16.995C5.33862 17.1315 5.4204 17.2385 5.55034 17.2798C5.77692 17.3519 6.01201 17.4721 6.23753 17.46C6.76399 17.4316 7.28939 17.3526 7.81019 17.2648C8.38728 17.1674 8.9325 16.9627 9.45366 16.6946C10.2219 16.2993 10.8263 15.754 11.0373 14.8767C11.1789 14.288 11.1184 13.8013 10.7048 13.4391C10.4074 13.1782 10.0488 13.0385 9.67635 12.9617C9.28619 12.8806 8.88258 12.8632 8.48464 12.8184Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M26.1138 2.39805C26.1138 1.65189 26.1145 0.905731 26.1131 0.159924C26.1128 0.0397704 26.156 -0.00466517 26.2831 0.000311615C27.1671 0.0358601 28.0522 0.0493685 28.9352 0.0998473C29.4932 0.131841 30.0479 0.21538 30.6045 0.275812C30.6983 0.286121 30.7921 0.293586 30.8856 0.306384C31.422 0.379969 31.9587 0.448933 32.4937 0.530339C33.0392 0.613522 33.5852 0.698483 34.1269 0.802996C34.5418 0.88298 34.9511 0.992469 35.3621 1.09236C35.7218 1.17981 36.0812 1.26904 36.4391 1.36288C36.751 1.44465 37.0615 1.53067 37.3706 1.62168C37.5147 1.66433 37.469 1.75143 37.388 1.81186C37.1992 1.95228 37.0112 2.09731 36.8073 2.21285C36.3333 2.48195 35.8656 2.77096 35.3667 2.98496C34.6873 3.2761 33.987 3.52067 33.2853 3.75458C32.784 3.92202 32.2667 4.04288 31.7548 4.1769C31.5448 4.23164 31.3306 4.27217 31.1164 4.30807C30.7748 4.36531 30.4317 4.41365 30.0894 4.46555C29.6585 4.53096 29.2287 4.60419 28.7964 4.65822C28.5691 4.68666 28.3372 4.67742 28.1078 4.69235C27.8904 4.70657 27.6716 4.71937 27.4567 4.75385C27.3179 4.77625 27.2294 4.73039 27.1561 4.62445C27.1395 4.60028 27.1235 4.57504 27.1055 4.55194C26.9132 4.30807 26.749 4.31269 26.5858 4.58073C26.5057 4.7119 26.441 4.83419 26.2533 4.79793C26.1542 4.77873 26.1096 4.73928 26.1099 4.63583C26.1121 3.88967 26.111 3.14386 26.111 2.3977C26.1121 2.39805 26.1128 2.39805 26.1138 2.39805Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M14.2382 1.73082C14.5193 1.65226 14.8001 1.57334 15.0815 1.49513C15.4384 1.39595 15.7949 1.29464 16.1532 1.20008C16.4024 1.13432 16.6542 1.07673 16.9059 1.02021C17.1466 0.965818 17.3885 0.914628 17.6306 0.866282C18.0041 0.791986 18.378 0.716979 18.7529 0.651214C19.3555 0.54528 19.9577 0.436146 20.5632 0.34763C21.0057 0.282932 21.4514 0.234231 21.8975 0.205437C22.9972 0.134695 24.0976 0.0774622 25.1979 0.0191628C25.4989 0.00316595 25.4989 0.0106311 25.4989 0.319547C25.4989 1.74113 25.4971 3.16271 25.5028 4.58429C25.5035 4.74248 25.4684 4.81287 25.2978 4.80221C24.4682 4.75066 23.6373 4.72044 22.8096 4.65326C22.3415 4.61522 21.8756 4.53417 21.4136 4.44708C20.6814 4.30879 19.9496 4.16589 19.2249 3.99312C18.6726 3.86124 18.1234 3.70447 17.5888 3.51393C17.0588 3.32517 16.5377 3.10299 16.0328 2.85451C15.5195 2.60211 15.0291 2.30244 14.532 2.01699C14.4226 1.95406 14.3292 1.86413 14.2283 1.78663C14.2315 1.76779 14.2346 1.74931 14.2382 1.73082Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M26.1088 30.0096C26.1088 29.4291 26.1127 28.8486 26.1064 28.2684C26.1046 28.1067 26.1595 28.0463 26.3227 28.0537C26.5581 28.0644 26.795 28.0637 27.0301 28.0523C27.3253 28.0377 27.5732 27.9407 27.6596 27.6154C27.6946 27.4843 27.7796 27.4519 27.912 27.4555C28.5971 27.4739 29.2733 27.566 29.9477 27.678C30.5206 27.7729 31.0984 27.8458 31.6655 27.9688C32.1867 28.0815 32.6994 28.2375 33.2099 28.3936C33.7144 28.5479 34.2253 28.6943 34.7089 28.9012C35.3161 29.1614 35.9027 29.4714 36.4897 29.7768C36.7546 29.9147 36.9989 30.0924 37.2495 30.2563C37.2892 30.2823 37.3139 30.3303 37.3458 30.3679C37.3037 30.3903 37.264 30.4213 37.2194 30.4341C36.8693 30.5329 36.5191 30.6303 36.1676 30.7238C35.9296 30.7871 35.69 30.8446 35.4506 30.9029C35.2393 30.9545 35.029 31.0099 34.8158 31.0522C34.2391 31.1671 33.6609 31.2762 33.0835 31.3868C32.7425 31.4522 32.4027 31.525 32.0596 31.578C31.6822 31.6363 31.3023 31.6818 30.9224 31.7216C30.1906 31.7981 29.4592 31.8802 28.7256 31.9335C28.2204 31.9705 27.7119 31.963 27.205 31.9751C26.9161 31.9822 26.6268 31.984 26.3383 31.9982C26.1913 32.0053 26.1198 31.963 26.1209 31.8027C26.1255 31.2048 26.1227 30.6068 26.1227 30.0085C26.1184 30.0096 26.1134 30.0096 26.1088 30.0096Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M14.3508 30.2752C14.5777 30.1234 14.7866 29.9638 15.0132 29.8369C15.4324 29.6026 15.8533 29.3669 16.2902 29.1696C16.7381 28.9674 17.2026 28.8014 17.666 28.6364C18.0923 28.4846 18.5228 28.3421 18.9583 28.2212C19.3537 28.1114 19.7584 28.0342 20.1599 27.9468C20.4814 27.8771 20.8082 27.8295 21.125 27.7434C21.4465 27.6563 21.7202 27.7424 21.9892 27.9041C22.1744 28.0154 22.3592 28.1284 22.5525 28.2237C22.6247 28.2592 22.7257 28.2699 22.805 28.2525C23.3948 28.1231 23.9404 27.8839 24.4622 27.5792C24.5915 27.5038 24.7589 27.4861 24.9122 27.4626C25.0453 27.4423 25.1841 27.4615 25.3183 27.4448C25.4684 27.4263 25.501 27.4942 25.5006 27.6268C25.4989 29.0246 25.4999 30.4227 25.5024 31.8205C25.5028 31.9374 25.4677 31.995 25.3388 31.9904C24.6552 31.9669 23.9712 31.9566 23.2879 31.9257C22.788 31.903 22.2873 31.8692 21.7899 31.8155C21.2578 31.7583 20.7271 31.6829 20.1988 31.5962C19.3753 31.4611 18.5522 31.3196 17.7326 31.1625C17.1261 31.0462 16.5221 30.9129 15.9231 30.7633C15.4161 30.6364 14.9176 30.4753 14.4156 30.3282C14.401 30.3246 14.3897 30.3079 14.3508 30.2752Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M32.0178 18.2882C32.0862 17.3817 32.3085 16.5275 32.762 15.7259C33.3345 14.7138 34.1247 13.9048 35.0102 13.1828C35.4559 12.8195 35.9335 12.4892 36.4267 12.1935C37.0519 11.8184 37.708 11.4921 38.4101 11.2827C38.654 11.2098 38.9181 11.1217 39.1709 11.2347C39.326 11.304 39.4902 11.4021 39.5911 11.5333C39.7834 11.7836 39.9402 12.0626 40.0974 12.3381C40.1721 12.4697 40.1123 12.5297 39.9678 12.5667C39.6966 12.6357 39.4286 12.7199 39.1649 12.8141C39.1181 12.8308 39.0792 12.9247 39.0756 12.9848C39.0742 13.0114 39.1695 13.0658 39.2233 13.0694C39.6141 13.0957 39.9431 13.2418 40.1803 13.5599C40.3714 13.8166 40.4635 14.1145 40.4791 14.4319C40.5049 14.9616 40.4143 15.4721 40.2638 15.9829C40.0971 16.5499 39.8563 17.0785 39.5504 17.5751C39.087 18.327 38.5297 19.0024 37.862 19.5879C37.4124 19.9821 36.9358 20.3312 36.4122 20.6159C35.7413 20.9807 35.0304 21.2082 34.2624 21.2164C33.6666 21.2224 33.1748 20.9736 32.8052 20.5168C32.2572 19.8403 32.072 19.1368 32.0178 18.2882ZM39.4885 14.5187C39.486 14.465 39.4839 14.3761 39.4778 14.2876C39.4499 13.8955 39.1734 13.6342 38.7829 13.6332C38.2175 13.6317 37.7317 13.8802 37.2693 14.1611C36.4306 14.6705 35.7133 15.3285 35.0789 16.0768C34.9911 16.1802 34.9004 16.2232 34.7914 16.1457C34.659 16.0515 34.5811 16.1059 34.494 16.2097C34.1612 16.6064 33.8882 17.0444 33.7077 17.5261C33.5303 17.9992 33.3933 18.4898 33.2701 18.9807C33.1961 19.2747 33.2187 19.5808 33.3349 19.8716C33.4744 20.221 33.8344 20.5783 34.2975 20.477C34.4635 20.4407 34.6285 20.3895 34.7854 20.3244C35.4464 20.0507 36.0171 19.6298 36.5503 19.1641C37.5111 18.3241 38.3541 17.3789 38.968 16.2467C39.2541 15.7184 39.4902 15.1724 39.4885 14.5187Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M33.3367 27.6083C33.4563 27.5468 33.5948 27.5062 33.6918 27.4195C33.9056 27.2282 34.0943 27.0093 34.3028 26.8116C34.3517 26.7654 34.4445 26.7291 34.5071 26.7412C34.6742 26.7729 34.8233 26.7807 34.9851 26.6961C35.1391 26.6154 35.3133 26.6136 35.479 26.7014C35.6822 26.8095 35.9792 26.77 36.1534 26.6147C36.2986 26.4853 36.442 26.3538 36.5839 26.2204C36.7712 26.0448 36.7801 25.9105 36.6006 25.7224C36.5064 25.6236 36.4869 25.5233 36.5234 25.3993C36.62 25.0715 36.7171 24.7441 36.8077 24.4146C36.8551 24.2418 36.7953 24.1405 36.6215 24.0644C36.5262 24.0228 36.432 23.9788 36.289 23.9137C36.6292 23.726 36.847 23.4381 37.2024 23.3638C37.4152 23.3193 37.6259 23.2415 37.8397 23.2326C38.0189 23.2255 38.2267 23.2543 38.3761 23.3439C38.5559 23.4519 38.6884 23.64 38.8388 23.7957C39.0389 24.0026 39.2485 24.2017 39.4318 24.4228C39.5628 24.5806 39.7045 24.7555 39.759 24.9464C39.9403 25.5816 40.2975 26.0537 40.9273 26.2624C41.2807 26.3794 41.6563 26.3701 42.0206 26.251C42.3952 26.1287 42.7591 25.9855 43.0856 25.758C43.3224 25.5927 43.3299 25.593 43.3957 25.8795C43.4198 25.9841 43.4251 26.101 43.4046 26.2055C43.3854 26.3026 43.3192 26.3641 43.1932 26.3769C42.8597 26.4106 42.7312 26.6506 42.6873 26.93C42.672 27.027 42.7715 27.1515 42.8377 27.2506C42.951 27.4202 43.0884 27.5741 43.1981 27.7458C43.2636 27.8482 43.2881 27.9577 43.1302 28.0341C42.7821 28.203 42.444 28.3925 42.0971 28.5638C41.8075 28.7067 41.5133 28.8404 41.2169 28.9694C40.8027 29.15 40.3885 29.3327 39.9675 29.4962C39.4588 29.6939 38.9426 29.872 38.4303 30.06C38.2936 30.1102 38.1874 30.1038 38.0614 29.9978C37.4871 29.5154 36.8626 29.1091 36.1778 28.7981C35.9052 28.6744 35.6468 28.519 35.3728 28.3985C35.127 28.2904 34.8697 28.2097 34.6169 28.118C34.3471 28.0199 34.0777 27.9214 33.8068 27.8258C33.6493 27.7704 33.4896 27.7206 33.331 27.6683C33.3335 27.6481 33.3349 27.6282 33.3367 27.6083Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M50.7187 16.397C51.0844 16.397 51.4501 16.4002 51.8159 16.3956C51.9653 16.3938 52.017 16.4536 51.9946 16.6014C51.9143 17.1386 51.8697 17.6835 51.7532 18.2125C51.6498 18.6824 51.4689 19.1353 51.3223 19.5957C51.1018 20.2892 50.7654 20.9302 50.3933 21.5491C49.6116 22.8487 48.6312 23.9855 47.5072 24.9987C47.3234 25.1643 47.1269 25.3168 46.946 25.4853C46.8458 25.5785 46.7559 25.5792 46.6433 25.5191C46.297 25.3339 45.9469 25.1565 45.6024 24.9677C45.5493 24.9386 45.4803 24.8615 45.4856 24.8149C45.5189 24.538 45.465 24.276 45.3861 24.0154C45.2664 23.6208 45.3964 23.302 45.6396 22.9849C46.0988 22.3866 46.5495 21.7791 46.963 21.1484C47.2388 20.7275 47.447 20.2615 47.6803 19.8129C47.8952 19.3994 48.1027 18.9825 48.3133 18.5669C48.5296 18.141 48.7424 17.7137 48.9633 17.2904C49.1021 17.0241 49.2469 16.7603 49.4038 16.5047C49.4378 16.4493 49.5344 16.4052 49.6038 16.4031C49.9752 16.3931 50.3469 16.3985 50.7187 16.3985C50.7187 16.3981 50.7187 16.3977 50.7187 16.397Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M17.8806 20.6529C18.3727 20.6305 18.8089 20.4634 19.2107 20.206C19.6009 19.9565 19.9776 19.6852 20.361 19.4247C20.3943 19.4019 20.4318 19.3742 20.469 19.3714C20.5115 19.3682 20.5561 19.3898 20.6 19.4009C20.5886 19.4425 20.5893 19.4936 20.5646 19.5235C20.3879 19.7368 20.2247 19.9668 20.0215 20.152C19.6125 20.5246 19.193 20.8879 18.7547 21.2252C18.39 21.506 17.9893 21.7261 17.5067 21.7528C16.959 21.7833 16.578 21.5075 16.3076 21.0795C16.1479 20.8267 16.0555 20.5274 15.9574 20.2405C15.8753 20.0006 15.8147 19.9565 15.5991 20.0717C15.2737 20.2455 14.9385 20.3699 14.5611 20.3784C14.4662 20.3806 14.3571 20.4659 14.2824 20.5409C14.0335 20.7912 13.7985 21.0503 13.4724 21.2121C12.9318 21.4797 12.1277 21.5594 11.6561 21.0393C11.3694 20.7229 11.2061 20.3379 11.1201 19.9231C10.9693 19.1957 11.1877 18.5633 11.6119 17.9757C11.9896 17.4528 12.4322 17.0017 12.9626 16.6384C13.3778 16.354 13.8179 16.1197 14.32 16.0319C14.662 15.9722 14.9767 16.0373 15.2281 16.2911C15.2716 16.3352 15.2939 16.4418 15.2734 16.5012C15.2171 16.6643 15.2419 16.7525 15.3931 16.8677C15.5233 16.9669 15.6342 17.1553 15.6593 17.3188C15.7513 17.9238 15.5343 18.4698 15.2667 18.9977C15.2132 19.103 15.153 19.2046 15.1042 19.312C15.0079 19.5242 15.078 19.6838 15.2932 19.7578C15.5513 19.8466 15.8101 19.6764 15.8406 19.4051C15.8979 18.8932 16.1231 18.4546 16.4123 18.0362C16.8694 17.3757 17.4362 16.8321 18.1093 16.4066C18.6099 16.0902 19.1427 15.8378 19.7609 15.8673C20.0735 15.8823 20.2452 16.0334 20.2148 16.284C20.2013 16.3942 20.1804 16.5129 20.1266 16.6071C19.8852 17.0308 19.6402 17.4532 19.3753 17.8623C19.2886 17.9963 19.1424 18.093 19.0167 18.1993C18.9211 18.2804 18.8722 18.2398 18.8251 18.1289C18.7749 18.0098 18.708 17.8851 18.6145 17.8001C18.4456 17.6465 18.2516 17.7304 18.087 17.82C17.4855 18.1485 17.0291 18.6302 16.7211 19.2391C16.4095 19.8552 16.7444 20.366 17.295 20.5423C17.483 20.6017 17.6851 20.617 17.8806 20.6529ZM11.9865 19.9081C11.9652 20.4001 12.1932 20.6294 12.725 20.6184C13.2058 20.6081 13.5701 20.355 13.91 20.0532C13.9471 20.0201 13.9716 19.9259 13.9518 19.8833C13.79 19.5303 13.836 19.1687 13.9387 18.8243C14.0647 18.4019 14.2378 17.9931 14.3978 17.5815C14.4612 17.418 14.4209 17.3181 14.2435 17.3213C14.1139 17.3234 13.9695 17.3543 13.8586 17.419C13.4186 17.6757 13.0263 17.9971 12.6839 18.3767C12.3008 18.8012 11.9889 19.2601 11.9865 19.9081Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M1.89734 15.7877C1.34361 15.7877 0.789891 15.7881 0.236168 15.7877C0.0177241 15.7877 -0.00493464 15.7607 0.000730041 15.54C0.016662 14.9413 0.107297 14.3562 0.234398 13.7697C0.417438 12.9257 0.716604 12.1266 1.08941 11.3573C1.40026 10.7164 1.75359 10.0922 2.20712 9.53655C2.70668 8.9244 3.20057 8.30657 3.73092 7.72215C4.0708 7.34783 4.47016 7.02754 4.84934 6.69018C4.88616 6.65748 4.97998 6.65108 5.02778 6.67383C5.63036 6.96213 6.22515 7.26678 6.83057 7.54903C7.32339 7.77903 7.82507 7.9909 8.32781 8.19921C8.5767 8.3023 8.83551 8.38264 9.09183 8.46618C9.18105 8.49533 9.19805 8.52768 9.16477 8.61975C9.1283 8.72107 9.10777 8.83411 9.10847 8.94182C9.10989 9.10072 9.07378 9.20737 8.89322 9.22052C8.60184 9.24185 8.31082 9.28984 8.01979 9.28664C7.85552 9.28486 7.68664 9.21554 7.52945 9.15262C7.36659 9.08721 7.26993 9.12383 7.2147 9.28735C7.17505 9.40466 7.13681 9.52304 7.08972 9.6375C7.04299 9.75161 6.98068 9.81383 6.84862 9.71856C6.7194 9.62542 6.5799 9.63217 6.43262 9.71074C6.35155 9.75375 6.24533 9.74771 6.15116 9.76726C6.03539 9.79143 5.91926 9.81631 5.80526 9.84689C5.75569 9.86004 5.71214 9.90092 5.66293 9.90874C5.38395 9.95211 5.09682 9.96135 4.82633 10.0346C4.40856 10.148 3.99787 10.2916 3.59249 10.4445C3.08232 10.6371 2.66596 10.9727 2.28289 11.3566C1.88034 11.7601 1.56808 12.2311 1.3776 12.759C1.09012 13.5553 0.859637 14.3729 0.611453 15.1834C0.59623 15.2335 0.618888 15.3228 0.656771 15.3548C0.69607 15.3878 0.783872 15.3956 0.835562 15.3757C1.36132 15.1749 1.88353 14.9634 2.40857 14.7607C2.65428 14.6658 2.90282 14.5777 3.15383 14.498C3.21544 14.4785 3.29793 14.4881 3.35953 14.513C3.49938 14.5699 3.63427 14.6406 3.76633 14.7142C3.84492 14.7579 3.82935 14.9111 3.7419 14.9939C3.68206 15.0505 3.61727 15.1017 3.55532 15.1564C3.45017 15.2495 3.4183 15.3619 3.47991 15.4916C3.53549 15.6093 3.49548 15.6747 3.37476 15.6935C3.16021 15.7266 2.9453 15.7693 2.72934 15.781C2.45283 15.7959 2.17526 15.7845 1.89804 15.7845C1.89734 15.7856 1.89734 15.7867 1.89734 15.7877Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M6.08492 21.3768C6.23716 20.8734 6.60466 20.5741 7.05996 20.2808C7.05323 20.3864 7.05146 20.4411 7.04615 20.4955C7.0203 20.7636 7.24795 20.9324 7.49401 20.8226C7.56871 20.7892 7.63421 20.7358 7.70431 20.6928C7.86045 20.5972 8.0141 20.5183 8.21201 20.5179C8.46515 20.5176 8.70554 20.5037 8.88115 20.7362C8.91726 20.7842 8.98736 20.8244 9.04684 20.8329C9.27449 20.8659 9.33928 21.0519 9.42106 21.2186C9.51028 21.4006 9.54675 21.6114 9.74147 21.7312C9.77794 21.7536 9.78537 21.8354 9.79281 21.8912C9.80272 21.9669 9.78927 22.0469 9.8052 22.1208C9.83777 22.2701 9.90858 22.3849 10.0899 22.3753C10.3256 22.3629 10.5452 22.4073 10.7324 22.5666C10.7611 22.5908 10.8075 22.5975 10.8468 22.6046C10.9187 22.6178 11.0323 22.6007 11.0557 22.6398C11.1077 22.7266 11.1265 22.8396 11.1332 22.9438C11.1357 22.98 11.0691 23.0408 11.0228 23.0568C10.7342 23.1556 10.4418 23.242 10.1525 23.3383C9.84025 23.4425 9.53046 23.5538 9.21926 23.6604C8.9378 23.7567 8.65244 23.8421 8.37522 23.9491C8.05765 24.0714 7.74574 24.2086 7.43453 24.3461C6.95197 24.5591 6.46977 24.7731 5.99181 24.9956C5.73159 25.1168 5.47809 25.2523 5.22637 25.3909C5.089 25.4666 4.98102 25.4673 4.86277 25.3504C4.65317 25.1428 4.43721 24.9402 4.21204 24.75C4.08989 24.6469 4.06582 24.5356 4.13025 24.4069C4.2354 24.1968 4.3487 23.9903 4.46907 23.7887C4.55156 23.6508 4.5636 23.5179 4.51191 23.3668C4.49775 23.3248 4.52218 23.2356 4.55617 23.2164C4.87233 23.0369 5.1899 22.8947 5.57581 23.0252C5.86081 23.1219 6.07607 22.9907 6.2053 22.7202C6.31434 22.4916 6.43401 22.2751 6.41312 22.0021C6.39754 21.7995 6.34833 21.6306 6.18582 21.5069C6.13378 21.4674 6.07182 21.4415 6.01447 21.4095C6.03748 21.3988 6.0612 21.3878 6.08492 21.3768Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M1.06104 20.5932C0.954473 20.3657 0.824539 20.1463 0.746296 19.9096C0.54874 19.3116 0.355787 18.7112 0.196468 18.1023C0.0647645 17.6 0.00953385 17.0806 0.00811768 16.5595C0.00811768 16.5069 0.085653 16.4088 0.128492 16.4081C0.735321 16.3999 1.34215 16.4045 1.94898 16.4073C1.96385 16.4073 1.97872 16.423 2.01943 16.4454C1.34392 17.2559 1.20691 18.0973 1.92242 18.9828C1.83462 19.0102 1.76381 19.0283 1.69655 19.055C1.62645 19.0827 1.55953 19.119 1.48801 19.1531C1.42995 19.088 1.38357 19.0063 1.31347 18.9661C1.24408 18.9263 1.12654 18.8883 1.07449 18.921C1.00262 18.9661 0.949516 19.0735 0.930398 19.1631C0.913404 19.2434 0.954827 19.3358 0.968281 19.4233C1.0221 19.7738 1.07591 20.1243 1.1276 20.4751C1.1322 20.5075 1.12158 20.5423 1.11804 20.5757C1.09892 20.5814 1.0798 20.5875 1.06104 20.5932Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M51.5185 12.8916C51.6059 13.2559 51.7135 13.6168 51.7766 13.9854C51.8668 14.5136 51.9238 15.0476 51.9957 15.579C52.018 15.7436 51.9504 15.7927 51.7858 15.7898C51.191 15.7795 50.5955 15.7849 50.0003 15.7831C49.7996 15.7824 49.7766 15.7568 49.8729 15.5865C50.3622 14.7202 50.8575 13.8571 51.3524 12.994C51.3769 12.9513 51.4172 12.9182 51.4501 12.8806C51.4732 12.8841 51.4958 12.8877 51.5185 12.8916Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M50.1778 10.1142C49.8967 10.1053 49.7653 10.2802 49.617 10.4284C49.2619 10.7832 48.9085 11.1394 48.5513 11.4917C48.4964 11.5457 48.4571 11.6662 48.3407 11.5845C48.1725 11.4661 48.1183 11.3182 48.1902 11.1789C48.2766 11.0111 48.3669 10.8451 48.4515 10.6766C48.7276 10.1259 48.8186 9.53974 48.711 8.93861C48.6172 8.4157 48.2883 8.06803 47.7795 7.90878C47.4577 7.80817 47.236 7.52343 47.2261 7.15764C47.2233 7.05668 47.2463 6.95501 47.2576 6.8537C47.343 6.90951 47.4378 6.95466 47.5122 7.02255C48.3414 7.78045 49.1026 8.6009 49.7639 9.51201C49.8977 9.69544 50.0224 9.88669 50.1778 10.1142Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M26.2052 5.5462C26.2176 5.58602 26.2265 5.62725 26.2431 5.66529C26.2658 5.71684 26.2824 5.79362 26.3224 5.81139C26.4835 5.88249 26.5366 6.02184 26.5759 6.17115C26.6393 6.41145 26.8287 6.53658 27.0199 6.65069C27.0755 6.68375 27.1813 6.66811 27.2475 6.6379C27.341 6.59524 27.4192 6.51845 27.5375 6.47117C27.4854 6.61515 27.4207 6.75627 27.386 6.90415C27.359 7.01898 27.3601 7.14375 27.3714 7.26177C27.3739 7.28701 27.4738 7.31474 27.5304 7.31829C27.5775 7.32114 27.6263 7.29057 27.6745 7.27457C27.6862 7.28594 27.6979 7.29768 27.7095 7.30905C27.6391 7.41072 27.5587 7.50706 27.5007 7.61548C27.4355 7.73741 27.3729 7.8661 27.3431 7.99976C27.3166 8.11778 27.2589 8.17288 27.1526 8.20096C27.0195 8.23615 26.8953 8.26459 26.9119 8.46153C26.9215 8.57422 26.7901 8.59413 26.6803 8.5472C26.5862 8.50668 26.4704 8.50419 26.3645 8.50739C26.144 8.51414 26.1234 8.5081 26.1224 8.29303C26.1195 7.65423 26.1227 7.01578 26.1231 6.37697C26.1231 6.1523 26.1199 5.92764 26.1227 5.70297C26.1234 5.65072 26.1429 5.59846 26.1535 5.5462C26.1709 5.54656 26.1879 5.5462 26.2052 5.5462Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M19.8792 10.7712C19.8792 10.9525 19.9089 11.1 19.8714 11.228C19.8282 11.3751 19.7266 11.5056 19.6476 11.6421C19.6066 11.7135 19.5531 11.7782 19.517 11.8518C19.4557 11.9766 19.4377 12.0992 19.5655 12.202C19.7174 12.3243 19.7099 12.5034 19.7188 12.673C19.7206 12.7089 19.6813 12.7469 19.6611 12.7839C19.6197 12.7594 19.5566 12.7445 19.5407 12.7085C19.4596 12.5255 19.3832 12.3396 19.3191 12.1501C19.2284 11.8817 19.061 11.678 18.8369 11.512C18.719 11.4245 18.5997 11.3346 18.5016 11.2269C18.4403 11.1597 18.4159 11.0577 18.3784 10.9699C18.3607 10.9279 18.3511 10.8824 18.3377 10.8383C18.3221 10.7861 18.3065 10.7335 18.2913 10.6812C18.3458 10.6688 18.4018 10.6414 18.4545 10.6467C18.8047 10.6841 19.1537 10.7328 19.5042 10.769C19.6345 10.7822 19.7669 10.7712 19.8792 10.7712Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M17.9039 10.554C17.8451 10.7399 17.8901 10.8771 17.9421 11.035C17.9984 11.2056 17.9652 11.4153 17.9344 11.6019C17.9202 11.6862 17.7934 11.7182 17.7485 11.6119C17.6833 11.4583 17.5651 11.4267 17.427 11.4068C17.3806 11.4 17.3325 11.3933 17.2893 11.3759C17.0864 11.2941 17.067 11.142 17.239 11.0033C17.2712 10.9774 17.3084 10.9546 17.3314 10.9219C17.3686 10.8693 17.4366 10.7854 17.4199 10.7573C17.382 10.6933 17.2996 10.6119 17.2376 10.6137C16.8942 10.6237 16.5493 10.452 16.2098 10.6101C16.0349 10.6916 15.9291 10.5462 15.7634 10.4626C15.8551 10.4129 15.9443 10.3286 16.0395 10.3211C16.2063 10.308 16.3776 10.3343 16.5451 10.3581C16.9462 10.4146 17.3463 10.4797 17.7471 10.5405C17.7917 10.5469 17.8373 10.5483 17.9039 10.554Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M11.7075 10.4516C11.6678 10.2845 11.6282 10.1174 11.5889 9.95036C11.5783 9.9045 11.5765 9.85473 11.5574 9.81278C11.4172 9.50245 11.2603 9.43704 11.0631 9.73316C11.027 9.78719 10.9973 9.84549 10.9647 9.90166C10.9332 9.88104 10.9017 9.86077 10.8702 9.84016C10.8992 9.74986 10.9127 9.64962 10.9612 9.57177C11.0125 9.48929 11.0929 9.42282 11.1683 9.35812C11.3616 9.19353 11.7422 9.22943 11.9121 9.41535C12.0251 9.53906 12.1515 9.64997 12.2686 9.76977C12.2987 9.8007 12.3175 9.84265 12.3614 9.90948C12.0102 9.94396 11.8434 10.1576 11.785 10.4871C11.7592 10.4758 11.7333 10.4637 11.7075 10.4516Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M46.2408 26.0357C45.9406 26.2554 45.6634 26.4588 45.3401 26.6955C45.3468 26.5817 45.3507 26.5224 45.3539 26.4634C45.3677 26.2216 45.383 25.9803 45.3943 25.7385C45.3989 25.6372 45.4325 25.5871 45.5352 25.6433C45.7551 25.7638 45.9735 25.8868 46.2408 26.0357Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M15.0418 22.0731C14.172 22.2701 13.3021 22.4667 12.4326 22.6636C12.4988 22.4677 12.6538 22.4755 12.7908 22.4453C13.0486 22.3885 13.3102 22.3454 13.5623 22.2697C13.7276 22.2203 13.8749 22.1122 14.0381 22.0522C14.1709 22.0035 14.3157 21.9615 14.4548 21.9622C14.6503 21.9629 14.8453 22.0056 15.0404 22.0301C15.0408 22.0443 15.0411 22.0586 15.0418 22.0731Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M12.7016 9.97703C12.9318 9.93011 13.2341 9.8679 13.5365 9.80818C13.5733 9.80107 13.6236 9.79325 13.6483 9.81173C13.6717 9.82915 13.6798 9.88141 13.6777 9.91696C13.6724 10.0119 13.6579 10.1064 13.6441 10.2241C13.5149 10.27 13.3853 10.2579 13.2295 10.1672C13.0493 10.0627 12.8316 10.0215 12.7016 9.97703Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M14.7406 10.3286C14.8613 10.2457 14.8935 10.0264 15.1006 10.0836C15.1831 10.1064 15.2497 10.1871 15.3233 10.2415C15.2437 10.3168 15.1739 10.4341 15.0812 10.4565C14.9785 10.4811 14.8549 10.4192 14.7406 10.395C14.7406 10.3726 14.7406 10.3506 14.7406 10.3286Z'
                      fill='#233E6C'
                    />
                    <path
                      d='M27.6957 26.7235C27.9251 26.5049 28.0848 26.5131 28.3386 26.7235C28.1269 26.7235 27.9329 26.7235 27.6957 26.7235Z'
                      fill='#233E6C'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <svg
            className='section__waves section__waves--bottom mobile-only'
            width='375'
            height='30'
            viewBox='0 0 375 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M375 0H0V28.3984C167.971 -10.0255 243.803 39.2522 375 28.3984V0Z'
              fill='#F9FBFF'
            />
          </svg>
        </section>

        <section id='choose-from-many' className='section-choose-from-many'>
          <div className='container'>
            <div className='section__title mobile-only'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
              '>
                Огромный выбор специальностей
              </h2>
            </div>
            <div className='section__content'>
              <div className='content__icon'>
                <img
                  src='img/other/choose-from-many.png'
                  alt='Выбирайте'
                  className='mobile-only'
                  loading='lazy'
                />
                <img
                  src='img/other/choose-from-many-desktop.png'
                  alt='Выбирайте'
                  className='desktop-only'
                  loading='lazy'
                />
              </div>
              <div className='content__text'>
                <div className='text__title'>
                  <h2
                    className='
                    h1 h1--padding-bottom
                    text-highlight--color
                    text-highlight--uppercase--desktop
                    text-highlight--bold-mobile
                    desktop-only
                  '>
                    Огромный выбор специальностей
                  </h2>
                </div>
                <p className='text-highlight--fw-300'>
                  Инженерное дело, IT, экономика, психология, юриспруденция,
                  менеджмент, гуманитарные науки, бизнес образование
                </p>
              </div>
              <div className='content__btn'>
                <p className='text-highlight--fw-700'>
                  Узнайте о наличии своего направления
                </p>
                <a
                  id='js-popup-choose-from-many'
                  className='learn-more-btn btn btn-primary'>
                  УЗНАТЬ
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id='edu-levels' className='section-edu-levels'>
          <svg
            className='section__waves section__waves--top mobile-only'
            width='375'
            height='24'
            viewBox='0 0 375 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M375 24H0V1.28127C167.971 32.0204 243.803 -7.4018 375 1.28127V24Z'
              fill='#F9FBFF'
            />
          </svg>
          <div className='container'>
            <div className='section__title'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
                desktop-only
              '>
                Какие есть уровни образования
              </h2>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
                mobile-only
              '>
                Уровни образования
              </h2>
            </div>
            <div className='section__content desktop-only'>
              <div className='content__line-segment'>
                <div className='line-segment__line'></div>
                <ul className='line-segment__line-items'>
                  <li className='line-items__item'>
                    <svg
                      width='34'
                      height='34'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        cx='16.9302'
                        cy='16.9302'
                        r='16.4302'
                        fill='white'
                        stroke='#2874FF'
                      />
                      <circle
                        cx='16.9304'
                        cy='16.9304'
                        r='6.34884'
                        fill='#2874FF'
                      />
                    </svg>
                    <p className='text-highlight--color'>Колледж</p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <svg
                      width='34'
                      height='34'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        cx='16.9302'
                        cy='16.9302'
                        r='16.4302'
                        fill='white'
                        stroke='#2874FF'
                      />
                      <circle
                        cx='16.9304'
                        cy='16.9304'
                        r='6.34884'
                        fill='#2874FF'
                      />
                    </svg>
                    <p className='text-highlight--color'>Бакалавриат</p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <svg
                      width='34'
                      height='34'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        cx='16.9302'
                        cy='16.9302'
                        r='16.4302'
                        fill='white'
                        stroke='#2874FF'
                      />
                      <circle
                        cx='16.9304'
                        cy='16.9304'
                        r='6.34884'
                        fill='#2874FF'
                      />
                    </svg>
                    <p className='text-highlight--color'>Магистратура</p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <svg
                      width='34'
                      height='34'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        cx='16.9302'
                        cy='16.9302'
                        r='16.4302'
                        fill='white'
                        stroke='#2874FF'
                      />
                      <circle
                        cx='16.9304'
                        cy='16.9304'
                        r='6.34884'
                        fill='#2874FF'
                      />
                    </svg>
                    <p className='text-highlight--color'>Переподготовка</p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <svg
                      width='34'
                      height='34'
                      viewBox='0 0 34 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        cx='16.9302'
                        cy='16.9302'
                        r='16.4302'
                        fill='white'
                        stroke='#2874FF'
                      />
                      <circle
                        cx='16.9304'
                        cy='16.9304'
                        r='6.34884'
                        fill='#2874FF'
                      />
                    </svg>
                    <p className='text-highlight--color'>
                      Бизнес-образование (MBA)
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className='section__content mobile-only'>
              <div className='content__line-segment'>
                <ul className='line-segment__line-items'>
                  <li className='line-items__item'>
                    <img
                      src='img/svgs/check-icon.svg'
                      loading='lazy'
                      alt='Галочка'
                    />
                    <p className='text-highlight--color'>Колледж</p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <img
                      src='img/svgs/check-icon.svg'
                      loading='lazy'
                      alt='Галочка'
                    />
                    <p className='text-highlight--color'>Бакалавриат</p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <img
                      src='img/svgs/check-icon.svg'
                      loading='lazy'
                      alt='Галочка'
                    />
                    <p className='text-highlight--color'>
                      Переподготовка и MBA
                    </p>
                  </li>
                  <li className='line-items__item text-highlight--color'>
                    <img
                      src='img/svgs/check-icon.svg'
                      loading='lazy'
                      alt='Галочка'
                    />
                    <p className='text-highlight--color'>Магистратура</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <svg
            className='section__waves section__waves--bottom mobile-only'
            width='375'
            height='30'
            viewBox='0 0 375 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M375 0H0V28.3984C167.971 -10.0255 243.803 39.2522 375 28.3984V0Z'
              fill='#F9FBFF'
            />
          </svg>
        </section>

        <section id='price-info' className='section-price-info'>
          <svg
            className='section__waves section__waves--top desktop-only'
            width='1439'
            height='91'
            viewBox='0 0 1439 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M1440 91H0V4.85815C645.008 121.411 936.205 -28.0652 1440 4.85815V91Z'
              fill='#F9FBFF'
            />
          </svg>
          <div className='container'>
            <div className='section__title'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color text-highlight--uppercase--desktop
                desktop-only
              '>
                Сколько стоит обучение в вузах-партнерах?
              </h2>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                mobile-only
                text-highlight--fw-700
              '>
                Сколько стоит обучение?
              </h2>
              <h2 className='h5 text-headings__secondary'>
                <span className='text-highlight--bold'>
                  Стоимость обучения в наших вузах-партнерах в
                  <span className='text-highlight--color'>4 раза дешевле</span>,
                  чем у конкурентов!
                </span>
              </h2>
            </div>
            <div className='section__content'>
              <div className='content__card'>
                <div className='card__bg-icon'>
                  <svg
                    width='206'
                    height='201'
                    viewBox='0 0 206 201'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <mask
                      id='mask0'
                      mask-type='alpha'
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width='206'
                      height='201'>
                      <rect
                        width='206'
                        height='201'
                        rx='5'
                        transform='matrix(-1 0 0 1 206 0)'
                        fill='#C4C4C4'
                      />
                    </mask>
                    <g mask='url(#mask0)'>
                      <path
                        d='M107.167 29.6112L191.056 96.2779C192.723 97.6668 193.279 100.445 191.612 102.111C190.779 103.222 189.667 103.778 188.279 103.778C187.445 103.778 186.334 103.5 185.779 102.945L101.89 36.2779C100.223 34.889 99.6674 32.1112 101.334 30.4446C102.723 28.5001 105.223 28.2223 107.167 29.6112Z'
                        fill='#2874FF'
                        fillOpacity='0.07'
                      />
                      <path
                        d='M168.555 59.334C167.444 59.334 166.333 59.334 165.222 59.0562C153.833 57.3895 145.778 46.5562 147.722 34.8895C148.555 29.334 151.611 24.334 156.055 21.0006C160.5 17.6673 166.055 16.2784 171.611 17.1117C177.167 17.9451 182.167 21.0006 185.5 25.4451C188.833 29.8895 190.222 35.4451 189.389 41.0006C187.722 51.834 178.555 59.334 168.555 59.334ZM170.5 25.7228C169.944 25.7228 169.111 25.4451 168.555 25.4451C162.444 25.4451 156.889 29.8895 156.055 36.2784C154.944 43.2229 159.667 49.6117 166.611 50.7229C173.555 51.834 179.944 47.1117 181.055 40.1673C182.167 33.2229 177.167 26.834 170.5 25.7228Z'
                        fill='#2874FF'
                        fillOpacity='0.07'
                      />
                      <path
                        d='M124.111 73.2222C135.777 73.2222 145.222 82.6666 145.222 94.3333C145.222 106 135.777 115.444 124.111 115.444C112.444 115.444 102.999 106 102.999 94.3333C103.277 82.6666 112.722 73.2222 124.111 73.2222ZM124.111 106.833C131.055 106.833 136.888 101 136.888 94.0555C136.888 87.1111 131.055 81.2777 124.111 81.2777C117.166 81.2777 111.333 87.1111 111.333 94.0555C111.611 101.278 117.166 106.833 124.111 106.833Z'
                        fill='#2874FF'
                        fillOpacity='0.07'
                      />
                      <path
                        d='M20.2222 63.5C20.2222 63.2222 19.9444 62.6667 19.9444 62.3889C19.9444 50.4445 32.4444 44.3333 43.2778 39.0556C51.0555 35.1667 59.3889 31 61.6111 26C63.8333 20.7222 60.7778 12.1111 57.7222 4.05556C53.5555 -7.33333 49.3889 -19 57.1666 -26.7778C64.9444 -34.5556 76.0555 -31.7778 87.1666 -29.2778C94.9444 -27.6111 103 -25.6667 108.278 -27.8889C113.556 -30.1111 118 -37.0556 122.167 -43.7222C128.278 -53.1667 134.944 -64 146.611 -64C158.278 -64 164.944 -53.1667 170.778 -43.4444C174.944 -36.5 179.111 -29.5556 184.389 -27.3333C189.667 -25.1111 198 -27.0556 205.778 -29C216.889 -31.7778 228.278 -34.5556 235.778 -27.0555C243.556 -19.2778 239.667 -7.61111 236.056 3.77778C233.278 12.1111 230.778 20.4444 233 26C235.222 31.2778 243 35.1667 250.5 39.0556C261.056 44.6111 273 50.7222 273 62.3889C273 62.6667 273 63.2222 272.722 63.5C272.722 63.7778 273 64.3333 273 64.6111C273 76.2778 261.056 82.6667 250.5 87.9444C243 91.8333 235.222 95.7222 233 101C230.778 106.278 233.556 114.889 236.056 123.222C239.667 134.611 243.556 146.278 235.778 154.056C228 161.833 216.611 158.778 205.778 156C198 154.056 189.667 152.111 184.389 154.333C179.111 156.556 174.944 163.5 170.778 170.444C164.944 180.167 158.278 191 146.611 191C134.944 191 128 180.167 122.167 170.722C118 164.056 113.556 157.111 108.278 154.889C102.722 152.667 94.9444 154.333 87.1666 156.278C76.3333 158.778 64.9444 161.556 57.1666 153.778C49.3889 146 53.5555 134.333 57.7222 122.944C60.7778 114.611 63.8333 106.278 61.6111 101C59.3889 95.7222 51.3333 91.8333 43.2778 87.9444C32.4444 82.3889 19.9444 76.2778 19.9444 64.6111C19.9444 64.0556 20.2222 63.7778 20.2222 63.5ZM47.1667 80.4445C56.3333 85.1667 66.0555 89.8889 69.3889 97.9444C73 106.278 69.1111 116.278 65.7778 126C62.4444 135.167 59.1111 144.056 63.2778 147.944C67.7222 152.389 76.3333 150.444 85.5 148.222C94.6666 146 103.833 144.056 111.889 147.389C119.667 150.722 124.667 158.5 129.389 166.278C134.667 174.611 139.667 182.667 146.889 182.667C153.833 182.667 158.833 174.611 164.111 166C168.833 157.944 173.833 149.889 181.611 146.556C189.667 143.222 199.111 145.444 208.278 147.944C217.444 150.167 226.056 152.389 230.5 148.222C234.667 144.056 231.889 135.167 228.833 126C225.778 116.278 222.444 106.278 226.056 98.2222C229.389 90.1667 238.556 85.4444 247.444 81C256.611 76.2778 265.222 71.8333 265.222 64.8889C265.222 64.6111 265.222 64.0556 265.5 63.7778C265.5 63.5 265.222 62.9444 265.222 62.6667C265.222 56 256.611 51.5556 247.444 46.5556C238.556 42.1111 229.389 37.3889 226.056 29.3333C222.722 21 225.778 11 228.833 1.55556C231.889 -7.88889 234.667 -16.7778 230.5 -20.6667C226.056 -25.1111 217.444 -22.8889 208.278 -20.3889C199.111 -18.1667 189.667 -15.6667 181.611 -19C173.833 -22.3333 168.833 -30.3889 164.111 -38.4444C158.833 -47.0556 154.111 -55.1111 146.889 -55.1111C139.667 -55.1111 134.667 -47.0556 129.389 -38.7222C124.389 -30.9444 119.389 -23.1667 111.889 -19.8333C103.833 -16.5 94.6666 -18.7222 85.5 -20.6667C76.3333 -22.8889 67.7222 -24.8333 63.2778 -20.3889C59.1111 -16.5 62.4444 -7.61111 65.7778 1.55556C69.3889 11.2778 73 21.2778 69.3889 29.6111C66.0555 37.6667 56.3333 42.3889 47.1667 47.1111C37.4444 51.8333 28.5555 56.5556 28.5555 63.2222C28.5555 63.5 28.5555 64.0556 28.2778 64.3333C28.2778 64.6111 28.5555 65.1667 28.5555 65.4444C28.2777 71 37.4444 75.7222 47.1667 80.4445Z'
                        fill='#2874FF'
                        fillOpacity='0.07'
                      />
                    </g>
                  </svg>
                </div>
                <p className='card__title text-highlight--color text-highlight--bold'>
                  Почему дешевле?
                </p>
                <p className='card__subtitle'>
                  <span className='subtitle__number'>1</span>
                  За счет дистанционного формата обучения
                </p>
                <p className='card__subtitle'>
                  <span className='subtitle__number'>2</span>
                  За счет скидок, которые нам предоставляют вузы, как своим
                  партнерам
                </p>
                <p className='card__subtitle--info'>
                  Поэтому с нами Вы можете получить диплом московского вуза от
                  <span className='text-highlight--fw-500 price-discount'>
                    16700 рублей
                  </span>
                  за один семестр!
                </p>
              </div>
            </div>
          </div>
          <svg
            className='section__waves section__waves--bottom desktop-only'
            width='1439'
            height='91'
            viewBox='0 0 1439 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M1440 0H0V86C645.008 -30.3606 936.205 118.869 1440 86V0Z'
              fill='#F9FBFF'
            />
          </svg>
        </section>

        <section id='needed-docs' className='section-needed-docs'>
          <svg
            className='section__waves section__waves--top desktop-only'
            width='1440'
            height='91'
            viewBox='0 0 1440 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M0 90.8501H1440V4.8501C794.992 121.211 503.795 -28.019 0 4.8501V90.8501Z'
              fill='#2874FF'
            />
          </svg>

          <div className='container'>
            <div className='section__learn-more'>
              <div className='learn-more__learn-more-text'>
                <p className='learn-more-text__p'>Узнайте подробнее о вузах</p>
              </div>

              <a id='learn-more-btn' className='learn-more-btn btn btn-primary'>
                УЗНАТЬ
              </a>
            </div>
            <div className='section__section-steps'>
              <div className='section-steps__title'>
                <p className='desktop-only'>
                  Для поступления нужно минимум документов
                </p>
                <h3 className='mobile-only'>Что нужно для поступления</h3>
              </div>
              <div className='section-steps__steps'>
                <div className='steps__steps-step'>
                  <svg
                    width='67'
                    height='83'
                    viewBox='0 0 67 83'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M0 0V82.93H66.102V0H0ZM63.101 79.93H2.999V3H63.101V79.93Z'
                      fill='#2874FF'
                    />
                    <path
                      d='M42.6059 48.9971C43.9659 47.0831 44.7739 44.7521 44.7739 42.2311C44.7739 35.7661 39.5149 30.5061 33.0509 30.5061C26.5869 30.5061 21.3269 35.7661 21.3269 42.2311C21.3269 44.7531 22.1359 47.0851 23.4969 48.9991L15.8579 59.9311C15.5039 60.4381 15.4969 61.1101 15.8399 61.6241C16.1829 62.1371 16.8059 62.3861 17.4099 62.2551L23.2479 60.9651L24.3079 66.4211C24.4299 67.0451 24.9309 67.5251 25.5589 67.6181C25.6329 67.6291 25.7069 67.6351 25.7809 67.6351C26.3289 67.6351 26.8429 67.3341 27.1049 66.8391L33.0499 55.6471L38.9979 66.8391C39.2609 67.3341 39.7739 67.6351 40.3219 67.6351C40.3949 67.6351 40.4689 67.6301 40.5439 67.6181C41.1719 67.5241 41.6739 67.0451 41.7949 66.4211L42.8569 60.9651L48.6869 62.2541C49.2909 62.3861 49.9139 62.1371 50.2579 61.6231C50.6009 61.1091 50.5939 60.4371 50.2409 59.9301L42.6059 48.9971ZM33.0499 33.5061C37.8599 33.5061 41.7729 37.4201 41.7729 42.2311C41.7729 47.0391 37.8599 50.9501 33.0499 50.9501C28.2399 50.9501 24.3259 47.0391 24.3259 42.2311C24.3269 37.4211 28.2399 33.5061 33.0499 33.5061ZM26.4449 61.6881L25.9009 58.8831C25.8239 58.4861 25.5889 58.1371 25.2519 57.9151C24.9139 57.6931 24.5009 57.6181 24.1059 57.7041L20.5219 58.4961L25.5819 51.2551C27.0319 52.4561 28.7739 53.3161 30.6849 53.7091L26.4449 61.6881ZM42.0029 57.7051C41.6089 57.6191 41.1949 57.6941 40.8569 57.9151C40.5189 58.1371 40.2849 58.4861 40.2079 58.8831L39.6609 61.6921L35.4189 53.7101C37.3299 53.3171 39.0729 52.4561 40.5219 51.2551L45.5789 58.4971L42.0029 57.7051Z'
                      fill='black'
                    />
                    <path
                      d='M15.1982 18.136H50.4422C51.2712 18.136 51.9422 17.465 51.9422 16.636C51.9422 15.807 51.2712 15.136 50.4422 15.136H15.1982C14.3692 15.136 13.6982 15.807 13.6982 16.636C13.6982 17.465 14.3692 18.136 15.1982 18.136Z'
                      fill='black'
                    />
                  </svg>

                  <p>Аттестат</p>
                </div>

                <div className='steps__steps-step kz-uz-only'>
                  <svg
                    width='79'
                    height='71'
                    viewBox='0 0 79 71'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M77.031 18.2003H63.2027L53.5518 0.74983C53.2961 0.286757 52.8088 0 52.2808 0H26.1762C25.6434 0 25.1542 0.291601 24.8994 0.759518L15.419 18.2003H1.45316C0.650046 18.2003 0 18.8504 0 19.6535V69.2672C0 70.0694 0.650046 70.7204 1.45316 70.7204H77.031C77.8331 70.7204 78.4841 70.0694 78.4841 69.2672V19.6535C78.4841 18.8504 77.8331 18.2003 77.031 18.2003ZM75.5778 67.8141H2.90632V21.1066H16.2831C16.816 21.1066 17.3052 20.815 17.56 20.3471L27.0404 2.90632H51.4234L61.0743 20.3568C61.3301 20.8199 61.8174 21.1066 62.3454 21.1066H75.5769V67.8141H75.5778Z'
                      fill='#2874FF'
                    />
                    <path
                      d='M39.2491 15.8C26.3141 15.8 15.7913 26.3219 15.7913 39.256C15.7913 52.1881 26.3141 62.708 39.2491 62.708C52.1725 62.708 62.6857 52.1881 62.6857 39.256C62.6857 26.3219 52.1725 15.8 39.2491 15.8ZM39.2491 59.8017C27.9174 59.8017 18.6976 50.5848 18.6976 39.256C18.6976 27.9252 27.9174 18.7064 39.2491 18.7064C50.5702 18.7064 59.7793 27.9252 59.7793 39.256C59.7793 50.5848 50.5692 59.8017 39.2491 59.8017Z'
                      fill='black'
                    />
                    <path
                      d='M39.2399 24.6079C31.1652 24.6079 24.5959 31.1791 24.5959 39.2557C24.5959 47.3305 31.1652 53.8997 39.2399 53.8997C47.3069 53.8997 53.8703 47.3305 53.8703 39.2557C53.8703 31.1791 47.3069 24.6079 39.2399 24.6079ZM39.2399 50.9934C32.7675 50.9934 27.5023 45.7271 27.5023 39.2557C27.5023 32.7814 32.7685 27.5142 39.2399 27.5142C45.7045 27.5142 50.964 32.7814 50.964 39.2557C50.964 45.7271 45.7045 50.9934 39.2399 50.9934Z'
                      fill='black'
                    />
                  </svg>

                  <p>4 фото</p>
                </div>

                <div className='steps__steps-step ru-only'>
                  <svg
                    width='94'
                    height='85'
                    viewBox='0 0 94 85'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M91.5751 50.1886C90.01 48.6234 87.929 47.7615 85.7149 47.7615C85.6994 47.7615 85.6839 47.7615 85.6683 47.7626C85.5907 47.7593 78.6489 47.8591 75.3455 40.0987C74.4016 37.8802 74.0998 35.3832 74.0055 34.2207C76.0155 31.9689 77.1126 29.0982 77.1126 26.0577C77.1126 19.7781 72.3749 14.5935 66.2862 13.868V1.66389C66.2862 0.744315 65.5408 0 64.6223 0H1.66389C0.744315 0 0 0.744315 0 1.66389V83.0272C0 83.9456 0.744315 84.6911 1.66389 84.6911H64.6223C65.5408 84.6911 66.2862 83.9456 66.2862 83.0272V70.8519H89.5629C90.4814 70.8519 91.2268 70.1065 91.2268 69.188V64.173H92.3361C93.2546 64.173 94 63.4276 94 62.5091V56.0477C94.0022 53.8347 93.1403 51.7548 91.5751 50.1886ZM73.7848 26.0577C73.7848 28.4626 72.8419 30.7221 71.1303 32.4182C70.8053 32.741 70.6267 33.1814 70.6378 33.6395C70.6423 33.807 70.7532 37.8014 72.284 41.401C76.3893 51.0505 85.0837 51.0871 85.7293 51.0882C87.0482 51.0926 88.2895 51.6084 89.2213 52.5413C90.1575 53.4775 90.6733 54.7221 90.6722 56.0455V60.8441H89.9257C89.8092 60.8186 89.6883 60.802 89.5629 60.802C89.4376 60.802 89.3178 60.8186 89.2002 60.8441H38.9773V56.0455C38.9773 53.3278 41.1758 51.1126 43.888 51.0871C44.8663 51.1414 52.9262 51.2568 57.1814 41.6628C58.64 38.376 58.9429 33.8403 58.9551 33.6484C58.985 33.1736 58.8098 32.7077 58.4736 32.3705C56.7931 30.6811 55.868 28.4382 55.868 26.0566C55.868 21.117 59.8857 17.0993 64.8242 17.0993C69.7659 17.1004 73.7848 21.1181 73.7848 26.0577ZM62.9584 81.3633H3.32779V3.32779H62.9584V13.9301C57.0693 14.8342 52.5402 19.9201 52.5402 26.0577C52.5402 29.0582 53.6106 31.8979 55.5707 34.1364C55.4365 35.4276 55.056 38.2485 54.1387 40.3139C50.6855 48.1009 44.3217 47.7815 44.0632 47.7648C44.02 47.7615 43.9756 47.7593 43.9323 47.7593C39.3644 47.7593 35.6473 51.4764 35.6473 56.0455V62.508C35.6473 63.4265 36.3916 64.1719 37.3111 64.1719H38.6223L38.6633 69.2002C38.6711 70.1143 39.4132 70.8508 40.3272 70.8508H62.9562V81.3633H62.9584ZM87.9002 67.5241H65.0305C64.8996 67.4908 64.7643 67.4675 64.6223 67.4675C64.4803 67.4675 64.3461 67.4908 64.2141 67.5241H41.98L41.9523 64.173H87.9002V67.5241Z'
                      fill='#2874FF'
                    />
                    <path
                      d='M31.5606 17.2424H10.4036C9.48406 17.2424 8.73975 17.9867 8.73975 18.9063C8.73975 19.8259 9.48406 20.5702 10.4036 20.5702H31.5606C32.4802 20.5702 33.2245 19.8259 33.2245 18.9063C33.2245 17.9867 32.4802 17.2424 31.5606 17.2424Z'
                      fill='black'
                    />
                    <path
                      d='M31.5606 25.7659H10.4036C9.48406 25.7659 8.73975 26.5102 8.73975 27.4298C8.73975 28.3493 9.48406 29.0937 10.4036 29.0937H31.5606C32.4802 29.0937 33.2245 28.3493 33.2245 27.4298C33.2245 26.5102 32.4802 25.7659 31.5606 25.7659Z'
                      fill='black'
                    />
                    <path
                      d='M31.5606 34.5935H10.4036C9.48406 34.5935 8.73975 35.3378 8.73975 36.2574C8.73975 37.177 9.48406 37.9213 10.4036 37.9213H31.5606C32.4802 37.9213 33.2245 37.177 33.2245 36.2574C33.2245 35.3378 32.4802 34.5935 31.5606 34.5935Z'
                      fill='black'
                    />
                  </svg>

                  <p>
                    ЕГЭ или
                    <br />
                    диплом колледжа
                  </p>
                </div>

                <div className='steps__steps-step'>
                  <svg
                    width='57'
                    height='93'
                    viewBox='0 0 57 93'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M43.7855 15.7811C47.5167 15.7811 51.1329 15.7762 54.7479 15.7883C55.1207 15.7895 55.5092 15.8404 55.8629 15.9531C56.4492 16.1408 56.8809 16.5381 56.9192 17.197C56.9672 18.0206 56.9672 18.8467 56.9696 19.6728C56.9828 24.4753 56.996 29.2791 56.9984 34.0816C57.0032 41.3672 56.9996 48.6516 56.9996 55.9372C56.9996 63.2022 57.0032 70.4672 56.9984 77.7322C56.9948 82.0914 56.9432 86.4495 56.9852 90.8087C57.0008 92.4172 56.0727 93.0047 54.8042 93.0023C37.2618 92.9744 19.7194 92.9841 2.17692 92.9817C1.89876 92.9817 1.6098 92.9926 1.34362 92.9272C0.455171 92.7079 0.0247339 92.1096 0.015142 91.0364C-0.00284284 88.9785 0.00435111 86.9206 0.00794808 84.8615C0.012744 82.3591 0.0307289 79.8579 0.0331269 77.3555C0.0379228 73.9047 0.0379228 70.4539 0.0331269 67.0031C0.0271319 62.341 0.00794808 57.6802 0.0055501 53.0181C0.000754134 45.7531 0.000754134 38.4881 0.0055501 31.2231C0.00914707 26.7633 0.023535 22.3036 0.0355249 17.8438C0.0391218 16.4957 0.244149 16.2365 1.48151 15.7532C6.68992 13.7208 11.8923 11.6738 17.0984 9.63525C22.6761 7.45139 28.2574 5.2748 33.8351 3.09094C36.2906 2.13043 38.7353 1.13963 41.1993 0.203348C42.7651 -0.391369 43.7867 0.364443 43.7867 2.05048C43.7867 6.36975 43.7855 10.689 43.7855 15.0083C43.7855 15.2457 43.7855 15.4819 43.7855 15.7811ZM53.6832 19.181C53.3786 19.181 53.1808 19.181 52.9829 19.181C49.9459 19.1822 46.9089 19.1846 43.8718 19.1846C34.4609 19.1846 25.0501 19.1871 15.6392 19.1834C11.7029 19.1822 7.76781 19.1701 3.83153 19.1507C3.44306 19.1483 3.28959 19.2694 3.31237 19.6703C3.33874 20.1536 3.32196 20.6393 3.32196 21.1238C3.32196 43.7122 3.32436 66.3018 3.31117 88.8901C3.31117 89.457 3.44665 89.715 4.02816 89.6568C4.26556 89.6338 4.50656 89.6665 4.74636 89.6665C8.32295 89.6677 11.8983 89.6689 15.4749 89.6665C21.8883 89.6605 28.3017 89.6459 34.7151 89.6459C40.8084 89.6459 46.9029 89.6532 52.9961 89.6786C53.5537 89.6811 53.6963 89.5091 53.6963 88.9567C53.6832 65.9444 53.6844 42.9309 53.6844 19.9187C53.6832 19.6994 53.6832 19.4826 53.6832 19.181ZM40.4895 4.06356C30.5714 7.94679 20.7673 11.7864 10.9631 15.626C11.1753 15.7593 11.366 15.7811 11.5566 15.7811C20.9819 15.7835 30.406 15.7786 39.8312 15.7944C40.3636 15.7956 40.5051 15.6357 40.5015 15.1113C40.4799 11.6629 40.4895 8.21326 40.4895 4.76487C40.4895 4.57107 40.4895 4.37848 40.4895 4.06356Z'
                      fill='#2874FF'
                    />
                    <path
                      d='M9.00015 62.288C9.14173 51.6342 17.7676 42.9916 28.5412 43C39.2645 43.0084 48.0802 51.7465 47.9995 62.6195C47.9197 73.3814 39.2404 82.0366 28.4416 81.9999C17.5788 81.9632 8.9582 73.18 9.00015 62.288ZM27.0824 46.2921C27.031 46.2607 26.9797 46.2292 26.9272 46.1977C26.5748 46.4044 26.2015 46.5838 25.8732 46.824C24.2225 48.0295 23.2 49.729 22.4418 51.5556C21.8241 53.0443 21.3501 54.6106 20.9903 56.1822C20.6652 57.6016 20.5918 59.0767 20.3831 60.5245C20.3233 60.9399 20.4282 61.0826 20.8645 61.0794C22.7323 61.0648 24.6011 61.0658 26.4689 61.0983C26.9576 61.1067 27.0803 60.9598 27.0782 60.4804C27.0646 56.393 27.0772 52.3057 27.0824 48.2183C27.0835 47.5763 27.0824 46.9342 27.0824 46.2921ZM29.9811 46.1809C29.9549 46.3582 29.9318 46.4422 29.9318 46.5261C29.9287 49.5853 29.9266 52.6445 29.9266 55.7038C29.9266 57.3121 29.9266 58.9204 29.9329 60.5287C29.9339 60.7815 29.8836 61.0731 30.3021 61.0731C32.3114 61.0721 34.3208 61.0868 36.3302 61.0721C36.433 61.071 36.6343 60.8381 36.6217 60.7332C36.4445 59.1931 36.3396 57.6352 36.0177 56.1245C35.3916 53.1838 34.3953 50.3732 32.4383 48.0116C31.7923 47.2279 31.0152 46.5932 29.9811 46.1809ZM20.3674 63.9551C20.51 66.2873 20.8026 68.5429 21.4518 70.7408C22.1702 73.1726 23.1801 75.4576 24.9126 77.3554C25.4863 77.9839 26.1554 78.4969 27.0279 78.7791C27.0468 78.606 27.0667 78.5053 27.0667 78.4046C27.0678 73.7423 27.0615 69.079 27.073 64.4167C27.074 64.0075 26.9209 63.9246 26.5497 63.9278C24.6641 63.9393 22.7784 63.9267 20.8928 63.9257C20.7261 63.9246 20.5572 63.9446 20.3674 63.9551ZM29.9675 78.8934C30.5149 78.5462 31.0005 78.308 31.4011 77.9713C33.5185 76.193 34.5998 73.7759 35.4052 71.2255C36.09 69.059 36.4665 66.8255 36.6091 64.5499C36.6396 64.0631 36.5787 63.9131 36.0649 63.9204C34.2484 63.9477 32.431 63.9288 30.6146 63.9225C29.9287 63.9204 29.9266 63.9131 29.9266 64.6013C29.9266 69.1618 29.9277 73.7234 29.9298 78.2839C29.9298 78.4339 29.9476 78.5829 29.9675 78.8934ZM44.9875 61.071C45.256 56.4287 40.0941 48.9065 35.7691 47.634C35.8614 47.8008 35.9338 47.9298 36.0051 48.0609C36.3879 48.766 36.8178 49.451 37.144 50.1812C38.6059 53.4513 39.3222 56.8998 39.5068 60.4657C39.5246 60.8088 39.5152 61.0805 39.985 61.0763C41.642 61.0616 43.298 61.071 44.9875 61.071ZM12.0394 61.0857C13.7446 61.0857 15.4195 61.0826 17.0943 61.0889C17.3806 61.0899 17.4697 60.9829 17.5022 60.6923C17.6879 59.0494 17.8389 57.4002 18.1189 55.773C18.5835 53.0715 19.5211 50.5274 20.9369 48.169C21.0176 48.0347 21.0742 47.8878 21.1707 47.6875C16.8132 49.0209 11.5716 56.7329 12.0394 61.0857ZM21.1948 77.3418C20.8068 76.6295 20.4534 76.0346 20.1513 75.4146C18.4786 71.9777 17.7088 68.3162 17.5033 64.5226C17.4823 64.1439 17.4666 63.9016 16.9758 63.9225C16.1043 63.9582 15.2307 63.9257 14.3571 63.9236C13.5779 63.9215 12.7997 63.9236 12.0184 63.9236C12.2984 69.1293 15.7834 74.8155 21.1948 77.3418ZM44.9896 63.974C43.1522 63.974 41.3494 63.974 39.5362 63.974C39.4848 66.3554 39.1146 68.6457 38.5388 70.896C37.9652 73.1359 37.0916 75.2666 35.7859 77.3103C40.136 76.0273 45.1343 68.7149 44.9896 63.974Z'
                      fill='black'
                    />
                    <path
                      d='M28.4569 32.9847C24.8327 32.9847 21.2075 32.9803 17.5833 32.9891C16.9315 32.9901 16.4125 32.7701 16.1363 32.1309C15.699 31.1196 16.3623 30.0316 17.4368 30.013C18.8137 29.99 20.1905 30.0043 21.5674 30.0054C27.5101 30.0064 33.4528 30.0086 39.3965 30.0119C40.2283 30.0119 40.6876 30.3304 40.9293 31.0561C41.1992 31.865 40.6656 32.815 39.8527 32.9672C39.7334 32.9891 39.61 32.9989 39.4886 32.9989C35.8121 33 32.1345 33 28.458 33C28.4569 32.9945 28.4569 32.9891 28.4569 32.9847Z'
                      fill='black'
                    />
                    <path
                      d='M19.0601 38.9966C16.9405 38.9955 14.822 39.002 12.7023 38.9934C11.7432 38.989 11.1105 38.4676 11.0098 37.6356C10.9219 36.9064 11.4348 36.1436 12.1523 36.069C12.8857 35.9932 13.6297 36.0041 14.3694 36.0041C17.9187 35.9986 21.467 35.9965 25.0163 36.0116C25.4317 36.0138 25.8779 36.0463 26.2541 36.2042C26.8635 36.4595 27.1115 37.1725 26.9536 37.8974C26.8296 38.4611 26.1672 38.9696 25.4709 38.9869C24.5881 39.0085 23.7053 38.9966 22.8225 38.9977C21.5687 38.9977 20.3149 38.9966 19.0601 38.9966Z'
                      fill='black'
                    />
                    <path
                      d='M38.0303 38.9921C35.9773 38.9921 33.9243 38.9996 31.8724 38.9845C31.5399 38.9823 31.1923 38.9272 30.8802 38.8149C30.2216 38.5783 29.9234 37.9808 30.0167 37.2094C30.0843 36.6529 30.5884 36.117 31.1966 36.0641C31.9046 36.0025 32.62 36.0057 33.3322 36.0047C36.8301 35.9982 40.3279 36.0003 43.8258 36.0003C44.0757 36.0003 44.3245 36.023 44.5745 36.0284C45.5634 36.0511 46.0032 36.7815 46 37.5151C45.9968 38.3222 45.3371 38.9607 44.4565 38.9856C43.5115 39.0126 42.5644 38.9931 41.6183 38.9942C40.4223 38.9942 39.2263 38.9942 38.0303 38.9942C38.0303 38.9942 38.0303 38.9932 38.0303 38.9921Z'
                      fill='black'
                    />
                  </svg>

                  <p>Паспорт</p>
                </div>
              </div>
            </div>
          </div>
          <svg
            className='section__waves section__waves--bottom desktop-only'
            width='1439'
            height='91'
            viewBox='0 0 1439 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M1440 0H0V86C645.008 -30.3606 936.205 118.869 1440 86V0Z'
              fill='#2874FF'
            />
          </svg>
        </section>

        <section id='what-to-do' className='section-what-to-do ru-only'>
          <div className='container'>
            <div className='section__title mobile-only'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--uppercase--desktop text-highlight--bold-mobile
              '>
                Нет ЕГЭ или диплома колледжа?
                <br />
                Узнайте что делать!
              </h2>
            </div>
            <div className='section__content'>
              <div className='content__title desktop-only'>
                <h2 className='h2 h1--padding-bottom text-highlight--fw-700'>
                  Нет ЕГЭ или диплома колледжа?
                  <br />
                  Узнайте что делать!
                </h2>
              </div>
              <div className='content__icon'>
                <img
                  className='mobile-only'
                  src='img/other/what-to-do.png'
                  alt='Выбирайте'
                  loading='lazy'
                />
                <img
                  className='desktop-only'
                  src='img/other/what-to-do-desktop.png'
                  alt='Выбирайте'
                  loading='lazy'
                  width='411'
                  height='372'
                />
              </div>
              <div className='content__btn'>
                <a
                  id='js-popup-what-to-do'
                  className='learn-more-btn btn btn-primary'>
                  УЗНАТЬ
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className='hr-between-sections mobile-only' />

        <section
          id='are-there-questions'
          className='section-are-there-questions desktop-only'>
          <div className='bg-icon'>
            <svg
              width='466'
              height='466'
              viewBox='0 0 466 466'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.03' clipPath='url(#clip0)'>
                <path
                  d='M156.079 0C207.03 0 257.989 0 308.94 0C311.45 0.24864 313.976 0.441136 316.478 0.769983C324.7 1.84475 333.1 2.22172 341.097 4.21084C393.97 17.3487 431.598 48.8538 453.546 98.6059C460.803 115.064 465.855 132.229 465.936 150.451C466.024 170.495 466.016 190.539 465.96 210.574C465.944 215.106 466.032 219.718 465.284 224.161C457.528 269.887 435.46 306.966 397.261 333.852C375.265 349.332 350.928 359.574 324 362.59C311.643 363.977 299.148 364.202 286.71 364.675C283.331 364.803 281.079 365.982 278.818 368.413C253.218 395.94 227.577 423.426 201.784 450.769C195.855 457.057 189.877 463.546 181.027 466C177.005 466 172.982 466 168.959 466C167.471 465.447 165.983 464.877 164.486 464.356C153.858 460.65 146.167 449.879 146.167 438.674C146.167 415.285 146.167 391.889 146.167 368.501C146.167 366.937 146.167 365.373 146.167 363.881C137.631 362.028 129.481 360.881 121.717 358.475C55.3356 337.918 14.8034 293.973 1.68147 225.573C0.65167 220.255 0.539035 214.753 0 209.339C0 190.892 0 172.444 0 153.997C0.973482 146.882 1.35966 139.632 3.02503 132.686C19.3409 64.3818 61.6431 21.2868 129.932 3.9221C138.427 1.76454 147.35 1.26726 156.079 0ZM175.186 435.666C175.621 435.882 176.055 436.091 176.49 436.308C177.6 434.992 178.654 433.637 179.821 432.377C208.695 401.305 237.61 370.265 266.428 339.145C268.512 336.9 270.628 336.106 273.677 335.937C292.254 334.935 311.112 335.319 329.318 332.111C363.752 326.056 391.203 307.512 411.976 279.52C426.031 260.575 435.219 239.449 436.667 215.732C437.656 199.482 437.351 183.136 437.351 166.838C437.351 158.961 437.439 150.981 436.257 143.241C432.443 118.257 422.475 95.7827 405.886 76.6213C380.712 47.5384 349.512 30.1095 310.138 29.9491C261.344 29.7486 212.541 29.8288 163.738 29.8769C156.916 29.885 149.981 29.7245 143.287 30.8154C104.541 37.1356 74.4754 57.4439 52.206 89.1736C38.6818 108.439 30.4676 130.007 29.7435 153.764C29.2125 171.385 29.7918 189.047 29.6228 206.684C29.5021 218.988 31.4571 230.891 35.5522 242.464C51.7393 288.206 83.5344 317.666 130.181 330.483C143.198 334.06 157.149 334.349 170.713 335.785C174.06 336.138 174.897 337.156 174.889 340.34C174.865 358.78 175.09 377.219 175.162 395.667C175.227 408.997 175.186 422.336 175.186 435.666Z'
                  fill='#2874FF'
                />
                <path
                  d='M160.747 107.702C172.397 94.0504 186.725 85.1074 202.977 78.8192C219.092 72.5872 235.778 73.0684 252.552 74.071C262.834 74.6886 272.569 77.1268 281.917 81.5863C305.064 92.6228 314.268 112.618 313.318 136.833C312.538 156.772 302.932 171.498 285.506 181.203C280.244 184.13 274.87 186.873 269.705 189.961C252.359 200.332 250.291 205.329 247.331 218.643C238.079 218.643 228.77 218.643 219.518 218.643C214.908 196.955 223.911 175.316 242.318 163.95C248.69 160.02 255.384 156.612 261.852 152.834C270.75 147.636 273.735 140.995 271.981 130.978C270.742 123.903 266.173 119.733 259.873 117.166C248.022 112.346 235.834 112.458 223.541 115.073C211.481 117.639 201.762 124.417 192.671 132.293C190.659 134.041 188.616 135.75 186.218 137.795C177.65 127.689 169.243 117.743 160.747 107.702Z'
                  fill='#2874FF'
                />
                <path
                  d='M254.44 269.863C254.416 282.014 245.284 291.23 233.353 291.142C221.084 291.053 212.797 281.974 212.226 269.414C211.623 256.14 223.546 247.942 233.385 248.015C245.405 248.103 254.464 257.551 254.44 269.863Z'
                  fill='#2874FF'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='466' height='466' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='container'>
            <div className='section__content'>
              <div className='content__left'>
                <h2
                  className='
                  h2
                  text-highlight--fw-500
                  text-highlight--color
                  text-highlight--uppercase--desktop
                '>
                  ВОЗНИКЛИ ВОПРОСЫ? ПОМОЖЕМ!
                </h2>
                <p className='left__p'>
                  Подайте заявку на бесплатную консультацию, менеджер расскажет
                  о ВУЗах-партнерах, возможных скидках и подберет программу
                  обучения на основе Ваших предпочтений!
                </p>
              </div>
              <div className='content__right'>
                <div className='card--primary'>
                  <p className='contact-form__subtilte'>
                    Оставьте свои контакты, менеджер перезвонит и проведет
                    консультацию
                  </p>
                  <form className='contact-form'>
                    <input
                      type='text'
                      className='input-style-primary'
                      name='user-name-are-there-questions'
                      id='user-name-are-there-questions'
                      placeholder='Имя'
                    />

                    <input
                      type='tel'
                      className='input-style-primary'
                      name='phone-are-there-questions'
                      id='phone-are-there-questions'
                      placeholder='Номер телефона'
                    />

                    <input
                      id='submit-btn-contact-form-are-there-questions'
                      type='submit'
                      className='btn btn-primary btn-input'
                      value='Отправить'
                    />
                    <p
                      id='are-there-questions-form-is-submitted'
                      className='p text-highlight--color-success hidden mb-0'>
                      Спасибо за заявку! Мы скоро с Вами свяжемся!
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='trusted-by' className='section-trust-boost'>
          <div className='container'>
            <div className='section__title'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
              '>
                С нами
                <span className='desktop-only-initial'>обучаются и</span>{' '}
                сотрудничают
              </h2>
            </div>
            {/*  <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">0</li>
                <li className="glide__slide">1</li>
                <li className="glide__slide">2</li>
              </ul>
            </div>
          </div>  */}
            <div className='section__content'>
              <div id='content__img-group--1' className='content__img-group'>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__hh'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__rosneft'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__rzhd'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__rosseti'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__tomc'></div>
                </div>

                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__greenworks'></div>
                </div>

                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__tatehepro'></div>
                </div>

                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__business-partner'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__ramport'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__sberbank'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__mtcrob'></div>
                </div>
                <div className='img-group__img-wrapper'>
                  <div className='img-wrapper__img--trust-boost img__qayar'></div>
                </div>
              </div>
              <div className='nav-dots mobile-only'>
                <div className='nav-dots__dot'></div>
                <div className='nav-dots__dot'></div>
                <div className='nav-dots__dot'></div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-call-to-action--bottom mobile-only'>
          <svg
            className='section__waves section__waves--top mobile-only'
            width='375'
            height='24'
            viewBox='0 0 375 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'>
            <path
              d='M375 24H0V1.28127C167.971 32.0204 243.803 -7.4018 375 1.28127V24Z'
              fill='#F9FBFF'
            />
          </svg>
          <div className='container'>
            <div className='section__title'>
              <h2
                className='
                h1 h1--padding-bottom
                text-highlight--color
                text-highlight--uppercase--desktop
                text-highlight--bold-mobile
              '>
                Подайте заявку на консультацию сейчас!
              </h2>
            </div>
            <div className='section__subtitle'>
              <p className='text-highlight--fw-300'>
                Менеджер расскажет о ВУЗах-партнерах и подберет программу
                обучения.
              </p>
            </div>
            <div className='left__call-to-action'>
              <div className='call-to-action__btn-group'>
                <p className='btn-group__limited'>
                  <span className='text-highlight--bold text-highlight--color'>
                    *колличество мест со скидкой ограничено
                  </span>
                </p>

                {/*  id="cta-scroll-to-submit-application"  */}
                <a
                  id='show-pop-up-bottom-mobile'
                  href='#!'
                  className='btn-group__btn btn btn-primary'>
                  ПОДАТЬ ЗАЯВКУ
                </a>
              </div>

              <div className='call-to-action__discount'>
                <div className='discount__arrow-pointer'>
                  <svg
                    className='arrow-pointer__arrow-up'
                    width='25'
                    height='28'
                    viewBox='0 0 25 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='icon_path__counter'
                      d='M25 12.6301L13.9292 1.44405L12.5 0L11.0708 1.44405L0 12.6301L1.42918 14.0741L11.4895 3.91077V28H13.5105V3.91077L23.5708 14.0741L25 12.6301Z'
                      fill='#2874FF'
                    />
                  </svg>

                  <svg
                    className='arrow-pointer__left'
                    width='56'
                    height='26'
                    viewBox='0 0 56 26'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect
                      className='icon_path__counter'
                      x='14.0865'
                      y='2.39431'
                      width='17.5845'
                      height='2.3368'
                      transform='rotate(135 14.0865 2.39431)'
                      fill='#FF6600'
                    />
                    <rect
                      className='icon_path__counter'
                      x='1.65234'
                      y='11.5238'
                      width='17.5775'
                      height='2.3368'
                      transform='rotate(45 1.65234 11.5238)'
                      fill='#FF6600'
                    />
                    <rect
                      className='icon_path__counter'
                      x='3'
                      y='12.0001'
                      width='53'
                      height='2'
                      fill='#FF6600'
                    />
                  </svg>
                </div>

                <div className='discount__text-container text-highlight--bold'>
                  <p>
                    <span className='text-highlight--color'>
                      Скидка 30% на все программы до конца месяца!
                    </span>
                    Успейте получить!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='section-ask-questions' className='section-ask-questions'>
          <div className='container'>
            <div id='cta-ask-question' className='section-ask-questions__inner'>
              <p className='inner__text'>
                Задать <span id='one-more-question'></span> вопрос
              </p>

              <svg
                className='desktop-only'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0)'>
                  <path
                    d='M5.06722 0C5.36534 0.109829 5.47281 0.326558 5.46315 0.638472C5.4485 1.10678 5.46197 1.57568 5.45787 2.04428C5.45524 2.3395 5.27865 2.54657 5.01744 2.57556C4.72372 2.60807 4.46748 2.3972 4.46075 2.08734C4.44933 1.55547 4.45255 1.02331 4.4587 0.491155C4.46162 0.242209 4.62093 0.0972352 4.83295 0C4.91084 0 4.98903 0 5.06722 0Z'
                    fill='white'
                  />
                  <path
                    d='M11.8669 9.70144C12.3527 10.1873 12.8251 10.66 13.2977 11.1324C13.7914 11.6259 14.2863 12.118 14.7786 12.6126C15.0753 12.9108 15.0729 13.172 14.7748 13.4711C14.337 13.9101 13.8989 14.3485 13.4599 14.7861C13.1747 15.0702 12.9065 15.0714 12.6233 14.7884C11.6909 13.8571 10.759 12.9251 9.8281 11.9923C9.79032 11.9545 9.76279 11.9071 9.71535 11.8438C9.57625 12.0831 9.45648 12.2881 9.33788 12.4937C9.05733 12.9793 8.77972 13.4664 8.49654 13.9505C8.29828 14.2894 7.91027 14.3468 7.66604 14.0732C7.60922 14.0097 7.56852 13.9271 7.5366 13.8468C6.29524 10.7385 5.05534 7.62963 3.81602 4.52044C3.6532 4.11188 3.87196 3.73641 4.26612 3.75193C4.35134 3.75544 4.4389 3.78297 4.51943 3.8149C7.62914 5.05348 10.738 6.29381 13.8468 7.53473C14.2345 7.68937 14.3657 8.06484 14.1288 8.34835C14.0711 8.41717 13.9906 8.47165 13.9115 8.51763C13.3006 8.87348 12.6874 9.22552 12.0751 9.57873C12.0118 9.61534 11.9495 9.65282 11.8669 9.70144ZM8.11672 12.593C8.1586 12.5239 8.18437 12.4829 8.20838 12.441C8.51059 11.9176 8.81222 11.3934 9.11502 10.8703C9.33846 10.4843 9.68958 10.4377 10.0041 10.7523C10.974 11.7217 11.9433 12.6917 12.9129 13.6614C12.953 13.7016 12.9949 13.7399 13.0054 13.7502C13.2655 13.5001 13.5129 13.262 13.773 13.0115C13.7138 12.9579 13.65 12.9049 13.5914 12.8464C12.6455 11.9012 11.6994 10.9564 10.7552 10.0095C10.4325 9.68621 10.4806 9.34062 10.8768 9.111C11.3746 8.82281 11.8733 8.53638 12.3717 8.24877C12.4376 8.2107 12.5023 8.17086 12.5925 8.11727C10.1031 7.12412 7.63909 6.14122 5.14817 5.14749C6.14325 7.64339 7.12428 10.1039 8.11672 12.593Z'
                    fill='white'
                  />
                  <path
                    d='M3.45995 2.97183C3.45058 3.18065 3.35101 3.33499 3.16096 3.41817C2.95831 3.50662 2.76679 3.46796 2.60778 3.31625C2.40689 3.12471 2.21361 2.92526 2.01741 2.72874C1.85195 2.56355 1.68474 2.40013 1.5225 2.23172C1.29643 1.99742 1.28852 1.69781 1.4979 1.49133C1.70143 1.29042 2.00335 1.29657 2.22796 1.5171C2.58582 1.86856 2.93869 2.22557 3.29274 2.58113C3.39904 2.68832 3.46932 2.81309 3.45995 2.97183Z'
                    fill='white'
                  />
                  <path
                    d='M1.28265 5.46155C1.0434 5.46155 0.804147 5.4636 0.565187 5.46096C0.228418 5.45745 0.000585962 5.2539 2.75953e-07 4.96014C-0.000292567 4.66756 0.232518 4.4561 0.56343 4.45522C1.06126 4.45376 1.55939 4.45229 2.05722 4.45757C2.31697 4.4602 2.50351 4.60928 2.56384 4.8427C2.61684 5.04771 2.52782 5.28231 2.33601 5.38218C2.24493 5.42962 2.13336 5.44632 2.02911 5.45686C1.90348 5.46945 1.77551 5.46125 1.64871 5.46155C1.52659 5.46184 1.40477 5.46155 1.28265 5.46155Z'
                    fill='white'
                  />
                  <path
                    d='M8.50711 1.62697C8.44883 1.74002 8.41252 1.87416 8.32847 1.96261C7.96886 2.34071 7.59783 2.70856 7.22504 3.07407C7.01624 3.2785 6.70875 3.27997 6.51372 3.09106C6.30931 2.89308 6.30316 2.58907 6.51606 2.37058C6.88036 1.99658 7.2511 1.62902 7.6236 1.26321C7.78115 1.10858 7.9715 1.07109 8.17649 1.16041C8.36976 1.24476 8.46347 1.40057 8.50711 1.62697Z'
                    fill='white'
                  />
                  <path
                    d='M1.68707 8.47893C1.40799 8.46575 1.25454 8.37759 1.16728 8.19191C1.07181 7.98923 1.1008 7.79652 1.25337 7.6372C1.53011 7.34842 1.81651 7.06872 2.0994 6.7858C2.19603 6.68915 2.28974 6.58928 2.39136 6.49819C2.60191 6.30929 2.90383 6.31807 3.09038 6.51342C3.27633 6.70819 3.27926 7.01483 3.08481 7.21369C2.71964 7.58682 2.35329 7.95907 1.97552 8.31931C1.88328 8.40717 1.74593 8.44759 1.68707 8.47893Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect width='15' height='15' fill='white' />
                  </clipPath>
                </defs>
              </svg>

              <svg
                className='mobile-only'
                width='22'
                height='35'
                viewBox='0 0 22 35'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0)'>
                  <path
                    d='M6.06417 21.8696C6.07419 21.6907 6.092 21.5117 6.092 21.3328C6.09312 16.774 6.09089 12.2164 6.09312 7.6576C6.09312 6.08938 7.10288 5.00098 8.54016 5.00895C9.94292 5.01579 10.9493 6.11332 10.9516 7.63937C10.9538 9.14034 10.9527 10.6402 10.9527 12.1412C10.9527 12.3269 10.9527 12.5138 10.9527 12.727C11.3813 12.6552 11.7554 12.5708 12.1328 12.5355C12.754 12.4774 13.2895 12.7053 13.7805 13.0917C13.8885 13.176 14.159 13.217 14.2358 13.1441C15.4115 12.0386 17.4243 12.4078 18.1023 14.0182C18.1157 14.0501 18.1547 14.0695 18.158 14.0729C18.6033 13.9715 19.0264 13.8119 19.4561 13.7903C20.8065 13.7219 21.9432 14.7545 21.9532 16.1358C21.9822 19.8774 22.0534 23.6224 21.9288 27.3595C21.7851 31.6208 18.2816 34.943 14.1111 34.9818C13.0913 34.9909 12.0693 35.0182 11.0507 34.9818C7.61166 34.8564 5.14124 33.2244 3.73959 29.9728C3.10278 28.4958 2.33015 27.0575 1.89707 25.52C1.5141 24.1615 0.751485 23.0332 0.234912 21.767C-0.313947 20.4233 0.119128 19.0363 1.31927 18.414C2.54056 17.7815 3.84758 18.2283 4.58682 19.523C5.03993 20.3173 5.50195 21.1071 5.95952 21.8992C5.99515 21.8901 6.02966 21.8798 6.06417 21.8696ZM7.27879 15.7927C7.27879 18.5656 7.27545 21.3396 7.28324 24.1125C7.28435 24.4886 7.21978 24.8111 6.83346 24.9262C6.42934 25.0459 6.23228 24.7644 6.05304 24.4487C5.23031 23.0059 4.4009 21.5676 3.57037 20.1293C3.14732 19.3953 2.45484 19.1377 1.84475 19.4774C1.17231 19.8523 0.995298 20.5373 1.33931 21.343C2.46152 23.9689 3.59486 26.5902 4.69147 29.2274C5.95061 32.2556 8.18168 33.7919 11.4002 33.7931C12.2541 33.7931 13.1069 33.7942 13.9608 33.7908C17.8095 33.7748 20.7654 30.7569 20.7776 26.8261C20.7843 24.5274 20.7843 22.2286 20.7843 19.931C20.7843 18.7343 20.7865 17.5376 20.7765 16.3409C20.7698 15.5067 20.2722 14.9744 19.5274 14.9801C18.7803 14.9858 18.3094 15.5124 18.2983 16.3614C18.2938 16.7034 18.2972 17.0453 18.2972 17.3872C18.2972 18.4129 18.2994 19.4386 18.2972 20.4643C18.296 20.8781 18.1313 21.1926 17.6949 21.1949C17.2462 21.1972 17.1126 20.8632 17.1093 20.4564C17.1081 20.323 17.1081 20.1908 17.1081 20.0575C17.1093 18.4243 17.1148 16.79 17.1081 15.1568C17.1048 14.2655 16.6328 13.731 15.869 13.7208C15.1198 13.7105 14.6288 14.269 14.6277 15.1488C14.6244 16.8207 14.6266 18.4927 14.6266 20.1635C14.6266 20.2581 14.6255 20.3538 14.6277 20.4484C14.6411 20.8667 14.4796 21.1869 14.0488 21.1937C13.5834 21.2006 13.4298 20.8644 13.4309 20.4245C13.4354 18.6579 13.4365 16.8914 13.4342 15.1249C13.4331 14.2826 12.9577 13.7401 12.2219 13.7253C11.447 13.7105 10.9638 14.2336 10.956 15.1215C10.9471 16.1278 10.9527 17.1353 10.9527 18.1416C10.9527 18.8631 10.9549 19.5856 10.9538 20.3071C10.9527 20.9122 10.7434 21.2382 10.3471 21.1994C9.84384 21.1504 9.73473 20.7869 9.76257 20.339C9.77036 20.2068 9.76368 20.0734 9.76368 19.9401C9.76368 15.8372 9.76591 11.7343 9.76145 7.63025C9.76034 6.73673 9.2883 6.21247 8.51233 6.21817C7.73969 6.22387 7.2799 6.74927 7.2799 7.64393C7.27767 10.3598 7.27879 13.0768 7.27879 15.7927Z'
                    fill='white'
                  />
                  <path
                    d='M3.03486 5.00221C3.40448 5.00221 3.77298 4.99879 4.1426 5.00335C4.52223 5.00791 4.80501 5.16404 4.81615 5.58687C4.82617 5.97778 4.56231 6.18407 4.21719 6.19433C3.40559 6.21826 2.59065 6.23649 1.78351 6.17039C1.57977 6.1533 1.27918 5.83418 1.23799 5.61194C1.1723 5.25864 1.45508 5.0307 1.81691 5.01474C2.22215 4.99651 2.6285 5.01019 3.03486 5.01019C3.03486 5.00791 3.03486 5.00449 3.03486 5.00221Z'
                    fill='white'
                  />
                  <path
                    d='M9.09569 1.85773C9.09569 2.25549 9.11239 2.65438 9.09012 3.05099C9.07008 3.40772 8.89864 3.69378 8.51343 3.67669C8.15161 3.66073 7.94676 3.4157 7.94454 3.03504C7.93897 2.23953 7.93897 1.44289 7.94454 0.647379C7.94676 0.275839 8.11153 0.0171283 8.49673 0.0011726C8.8875 -0.0159228 9.06786 0.240508 9.08456 0.60749C9.10348 1.02348 9.08901 1.44061 9.08901 1.85773C9.09235 1.85773 9.09346 1.85773 9.09569 1.85773Z'
                    fill='white'
                  />
                  <path
                    d='M15.3046 6.15203C14.739 6.39136 14.4908 6.25916 13.0435 6.20445C12.7807 6.1942 12.5057 6.18622 12.3521 5.99019C12.2753 5.89332 12.2319 5.75997 12.2363 5.58104C12.2486 5.10579 12.6015 4.98954 13.0245 4.99866C13.7081 5.01461 14.3928 4.98726 15.0764 5.01119C15.2801 5.01803 15.6041 5.08527 15.6542 5.21406C15.7399 5.43288 15.6531 5.72236 15.6375 5.98221C15.5673 6.02438 15.4527 6.08934 15.3046 6.15203Z'
                    fill='white'
                  />
                  <path
                    d='M4.17378 1.20239C4.35413 1.27989 4.49664 1.30155 4.58236 1.3836C5.03881 1.82467 5.50974 2.25775 5.9083 2.7501C6.02186 2.89028 6.00182 3.32222 5.87936 3.43733C5.72684 3.58093 5.30712 3.66071 5.17241 3.55016C4.65584 3.12848 4.19048 2.63499 3.74849 2.1301C3.65164 2.02069 3.66834 1.72095 3.74293 1.56368C3.81752 1.4064 4.02905 1.31636 4.17378 1.20239Z'
                    fill='white'
                  />
                  <path
                    d='M13.4187 1.75628C13.3708 1.93407 13.373 2.05032 13.3185 2.10845C12.8453 2.60763 12.3855 3.12847 11.8611 3.56612C11.7342 3.67211 11.3123 3.57067 11.1575 3.42137C11.0406 3.30854 11.0373 2.88686 11.152 2.74326C11.5338 2.26345 11.9736 1.82466 12.4312 1.41893C12.567 1.29812 12.8631 1.25596 13.0357 1.31978C13.2038 1.38132 13.3096 1.62408 13.4187 1.75628Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect width='22' height='35' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/*  Question module  */}
        <section
          id='module-questions'
          className='module module-questions hidden'>
          <div
            id='module-questions__step-one'
            className='container container--module hidden'>
            <div className='module-questions__step module-questions__step-one'>
              <svg
                id='js-btn-horizontal-line-close'
                className='btn-horizontal-line'
                width='48'
                height='4'
                viewBox='0 0 48 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect width='48' height='4' rx='2' fill='#EEEEEE' />
              </svg>

              <div className='row step-one__step-one-row'>
                <textarea
                  className='step-one-row__input-ask-anything'
                  name='question-module__text-ask-anything'
                  id='js-text-input-ask-anything'
                  placeholder='Напишите вопрос...'></textarea>
              </div>
              <div className='row step-one__step-one-row'>
                <div className='step-one-row__row mt-18'>
                  <p>Куда ответить:</p>
                </div>
                <div className='step-one-row__row mt-11'>
                  <div className='sm-icons'>
                    <a
                      href='#!'
                      id='sm-icons__link--telegram'
                      className='sm-icons__link sm-icons__link--telegram'>
                      <svg
                        width='17'
                        height='15'
                        viewBox='0 0 17 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M17 0.67988C16.9273 1.06049 16.854 1.44668 16.7796 1.83221C16.2865 4.38898 15.7927 6.94607 15.2996 9.50283C14.9873 11.1217 14.6767 12.7408 14.3627 14.3597C14.2432 14.9753 13.7372 15.1802 13.2108 14.8281C11.8698 13.9305 10.5277 13.0339 9.19134 12.1298C9.06159 12.0419 8.98459 12.0507 8.86313 12.1386C8.18548 12.6297 7.50118 13.1116 6.81788 13.5952C6.32275 13.9456 5.82396 13.7722 5.66899 13.1946C5.30527 11.8393 4.94122 10.4844 4.58347 9.12747C4.55294 9.01207 4.49653 8.95765 4.38834 8.91732C3.10238 8.43541 1.81776 7.94956 0.533127 7.46404C0.117307 7.30701 -0.0662118 7.01459 0.0213992 6.64807C0.0831251 6.38908 0.266975 6.24615 0.505582 6.15239C1.74806 5.66523 2.98955 5.17577 4.2317 4.68796C8.14864 3.14944 12.0662 1.61453 15.9795 0.0681449C16.5059 -0.139701 16.8981 0.163872 16.9715 0.494983C16.9844 0.553009 16.99 0.613002 17 0.67988ZM15.2528 2.63802C15.2418 2.63278 15.2312 2.62753 15.2202 2.62229C12.7675 4.95285 10.3147 7.28341 7.84665 9.62839C9.63803 10.8279 11.4138 12.0173 13.2098 13.2201C13.8945 9.67396 14.5738 6.15599 15.2528 2.63802ZM13.3286 2.57705C13.3213 2.56951 13.3137 2.56164 13.3064 2.5541C9.72265 3.96214 6.1389 5.37018 2.52628 6.78936C2.61953 6.82641 2.68026 6.85132 2.74165 6.8746C3.57196 7.18866 4.40029 7.50797 5.23359 7.81417C5.52927 7.92268 5.7118 8.10594 5.78281 8.41213C5.85947 8.74161 5.95505 9.06649 6.04332 9.39334C6.05958 9.45333 6.08016 9.51234 6.09045 9.54512C6.19996 9.41006 6.29487 9.26253 6.41866 9.14418C8.64411 7.02442 10.8732 4.90859 13.1013 2.79178C13.1776 2.71998 13.2533 2.64851 13.3286 2.57705ZM6.24974 10.1621C6.41667 10.7856 6.57795 11.3879 6.74487 12.0111C7.11988 11.7442 7.47364 11.4928 7.84001 11.2321C7.29808 10.8676 6.7837 10.5214 6.24974 10.1621Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                    <a
                      href='#!'
                      id='sm-icons__link--whatsapp'
                      className='sm-icons__link sm-icons__link--whatsapp'>
                      <svg
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M0 17C0.210858 16.4151 0.414118 15.851 0.61765 15.2869C0.877356 14.5667 1.13489 13.8457 1.4003 13.1277C1.44344 13.0113 1.4372 12.9265 1.36909 12.8193C0.804084 11.9282 0.407605 10.9671 0.205431 9.93179C0.052104 9.1468 0.0227955 8.35586 0.106922 7.5579C0.255093 6.1556 0.719958 4.86915 1.52024 3.70853C2.67576 2.03322 4.23616 0.90231 6.19793 0.328212C7.06633 0.0741074 7.9559 -0.0312069 8.85904 0.00794842C10.5996 0.0832886 12.1804 0.627142 13.5755 1.6684C15.1571 2.84873 16.2125 4.3928 16.7216 6.29656C16.9588 7.18336 17.05 8.08717 16.9737 9.0053C16.7428 11.781 15.4478 13.9391 13.1381 15.4913C12.0887 16.1964 10.9174 16.6044 9.66095 16.7807C8.08399 17.0022 6.59197 16.73 5.16291 16.0578C4.9838 15.9736 4.81067 15.8761 4.62966 15.7956C4.57077 15.7694 4.49044 15.7584 4.42965 15.7751C2.99137 16.1726 1.55416 16.575 0.116691 16.976C0.0871114 16.9843 0.056446 16.9887 0 17ZM2.08742 15.0606C2.10913 15.0652 2.11835 15.0703 2.12568 15.0682C2.90507 14.8505 3.685 14.6339 4.46331 14.4125C4.54797 14.3885 4.61175 14.3923 4.68855 14.4398C5.62615 15.0239 6.63946 15.3909 7.74396 15.5134C8.69513 15.619 9.62812 15.541 10.5421 15.2712C12.1807 14.7879 13.4871 13.8427 14.4556 12.4391C15.146 11.4389 15.5381 10.3296 15.663 9.12735C15.7354 8.43093 15.6958 7.73721 15.5596 7.04888C15.3175 5.82508 14.7959 4.73332 13.9745 3.79359C12.6697 2.30137 11.0222 1.47344 9.03516 1.32087C7.95563 1.23797 6.91084 1.39567 5.90811 1.79073C4.36073 2.40074 3.16315 3.42823 2.32351 4.85916C1.77208 5.79915 1.46732 6.81638 1.38483 7.90301C1.33055 8.61698 1.38727 9.32016 1.54521 10.0166C1.77181 11.0154 2.21035 11.9163 2.82393 12.7348C2.87685 12.8053 2.88309 12.8644 2.85432 12.943C2.69014 13.3883 2.52922 13.8346 2.36775 14.2807C2.27358 14.5397 2.18104 14.7992 2.08742 15.0606Z'
                          fill='white'
                        />
                        <path
                          d='M5.60753 4.0061C5.62975 4.0061 5.65223 4.0061 5.67445 4.0061C6.05833 4.00663 6.16327 4.08067 6.29926 4.43616C6.52252 5.01939 6.73882 5.60555 6.97626 6.18316C7.09753 6.47825 6.96609 6.70384 6.82073 6.92595C6.69947 7.11118 6.55089 7.27931 6.40767 7.44957C6.26178 7.62331 6.24277 7.72408 6.35012 7.92027C6.90265 8.93035 7.63427 9.77578 8.63572 10.366C8.89137 10.5167 9.16202 10.6429 9.43052 10.7704C9.60532 10.8535 9.71562 10.8246 9.82939 10.6765C10.0676 10.3662 10.3035 10.0538 10.5348 9.73809C10.6625 9.56355 10.7671 9.51598 10.9684 9.60552C11.2648 9.73729 11.5558 9.88189 11.8443 10.03C12.1723 10.1984 12.4946 10.378 12.8206 10.5501C12.9497 10.6183 13 10.7214 13 10.8652C12.9997 11.2026 12.9392 11.5295 12.8198 11.8419C12.6793 12.2094 12.376 12.4342 12.0593 12.6387C11.419 13.0519 10.7251 13.0853 10.0213 12.867C9.04905 12.5655 8.13138 12.1466 7.33043 11.5011C6.71365 11.0042 6.14854 10.4539 5.67686 9.81988C5.27424 9.27863 4.88742 8.7216 4.54316 8.14212C4.18337 7.53644 3.97644 6.87036 4.00214 6.15162C4.02918 5.39252 4.32204 4.74916 4.86226 4.21752C5.07052 4.01278 5.33287 3.98445 5.60753 4.0061Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                    <a
                      href='#!'
                      id='sm-icons__link--viber'
                      className='sm-icons__link sm-icons__link--viber'>
                      <svg
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8.49044 0C9.87005 0.0222163 11.2342 0.158412 12.5838 0.406655C13.5627 0.5868 14.3657 1.11178 15.0722 1.7633C15.8097 2.44331 16.4173 3.21991 16.6332 4.21095C16.971 5.76175 17.1019 7.328 16.9135 8.90777C16.8396 9.52886 16.7571 10.1514 16.6302 10.7638C16.4293 11.7317 15.8392 12.4933 15.1262 13.1622C14.4386 13.8074 13.6636 14.3503 12.7032 14.5343C11.9152 14.6855 11.1132 14.798 10.3123 14.8516C9.37636 14.9144 8.43447 14.8902 7.49558 14.9168C7.37915 14.9202 7.23624 14.9776 7.1543 15.0573C6.59716 15.6002 6.0565 16.1585 5.50436 16.7062C5.11961 17.0882 4.57446 17.1051 4.29514 16.7134C4.17322 16.5424 4.12675 16.2971 4.11425 16.0817C4.08777 15.6325 4.09926 15.1805 4.10926 14.7299C4.11326 14.5584 4.0493 14.4865 3.8834 14.4189C2.22547 13.7417 0.980275 12.6445 0.437125 10.9584C0.198278 10.2166 0.130822 9.41439 0.0558702 8.63344C-0.085039 7.15944 0.0498741 5.6951 0.356177 4.24621C0.501083 3.56137 0.84836 2.96877 1.29757 2.43123C2.01661 1.57108 2.87006 0.867884 3.97534 0.532708C4.53299 0.363671 5.1241 0.275289 5.70773 0.212987C6.63213 0.114945 7.56253 0.0685807 8.49044 0ZM4.77533 14.6463C4.77533 15.1129 4.77033 15.5799 4.78033 16.046C4.78183 16.1223 4.83279 16.2193 4.89425 16.2638C4.92473 16.286 5.03866 16.2208 5.10062 16.1764C5.17357 16.1247 5.23104 16.0527 5.29499 15.9895C6.09648 15.194 6.89396 14.3952 7.70344 13.6075C7.79738 13.5162 7.95528 13.437 8.0842 13.4365C9.35838 13.4326 10.6241 13.3486 11.8822 13.1462C13.3973 12.9028 14.3991 12.0224 14.9937 10.715C15.2146 10.2292 15.2536 9.65684 15.3255 9.11786C15.5114 7.72064 15.4445 6.32826 15.1856 4.94216C14.9048 3.44111 13.9369 2.46263 12.5173 1.99367C11.6389 1.70341 10.66 1.65994 9.71964 1.59329C8.29106 1.49187 6.86498 1.58364 5.4419 1.76571C4.52649 1.88259 3.728 2.19458 3.06143 2.81422C2.4963 3.34017 2.0221 3.9149 1.8667 4.68957C1.60387 5.99888 1.49095 7.31785 1.63036 8.64552C1.69981 9.30621 1.75378 9.98864 1.97214 10.6097C2.38137 11.7756 3.2758 12.5464 4.45304 12.9956C4.69088 13.0864 4.79831 13.1815 4.78232 13.4399C4.75684 13.8407 4.77483 14.244 4.77533 14.6463Z'
                          fill='white'
                        />
                        <path
                          d='M8.89566 9.76449C8.98303 9.71761 9.10239 9.67452 9.19405 9.59827C9.29622 9.5135 9.37214 9.39795 9.46141 9.29708C9.72973 8.99447 10.0415 8.92297 10.3733 9.13986C10.8374 9.44294 11.29 9.76544 11.7302 10.1026C12.0424 10.3418 12.071 10.5852 11.881 10.9361C11.617 11.4234 11.2613 11.815 10.7066 11.9765C10.6077 12.0054 10.4826 12.0101 10.3871 11.9765C8.21532 11.2084 6.3777 9.99417 5.17076 7.99383C4.76494 7.32089 4.45891 6.58875 4.10466 5.88503C3.92562 5.52891 3.98817 5.19978 4.20206 4.88202C4.44268 4.52495 4.76351 4.26117 5.15214 4.07885C5.42714 3.94956 5.65058 3.9704 5.83773 4.20766C6.19914 4.66607 6.55196 5.13443 6.86468 5.62646C7.09719 5.99253 6.99549 6.3245 6.64936 6.60201C6.5935 6.64653 6.53573 6.68868 6.48178 6.73509C6.24784 6.93446 6.19914 7.07605 6.30513 7.36019C6.71524 8.45745 7.42661 9.27198 8.55669 9.68399C8.65122 9.71761 8.75434 9.73134 8.89566 9.76449Z'
                          fill='white'
                        />
                        <path
                          d='M12.981 7.47581C12.9859 7.54473 12.9946 7.61365 12.9957 7.68205C12.9978 7.84579 12.9408 7.97948 12.7503 7.99813C12.5619 8.01627 12.4648 7.9002 12.4414 7.73853C12.404 7.48307 12.3747 7.22553 12.3568 6.968C12.2558 5.52332 11.0415 4.10507 9.56336 3.74131C9.1557 3.6413 8.73121 3.60244 8.31377 3.5387C8.14061 3.51227 7.98536 3.46875 8.0011 3.2594C8.01739 3.04125 8.19435 2.99565 8.37077 3.00031C10.085 3.04229 11.7493 3.87292 12.5386 5.54612C12.6819 5.84977 12.7823 6.17674 12.8594 6.50216C12.9349 6.8198 12.9555 7.14884 13 7.47322C12.994 7.47426 12.9875 7.47529 12.981 7.47581Z'
                          fill='white'
                        />
                        <path
                          d='M12 7.60417C11.9968 7.61942 12.0057 7.72003 11.9576 7.77308C11.8695 7.87004 11.7461 8.00359 11.6416 7.99993C11.5409 7.99627 11.3889 7.85297 11.3604 7.74625C11.2958 7.50356 11.3122 7.24196 11.2622 6.99377C11.0026 5.70711 10.002 4.82719 8.64293 4.67474C8.5283 4.66193 8.41494 4.63754 8.30032 4.61986C8.08816 4.58693 7.97354 4.4668 8.0052 4.26252C8.03814 4.05458 8.20152 3.98873 8.40354 4.00153C9.17679 4.0497 9.88924 4.26801 10.5225 4.70767C11.5257 5.40344 11.9322 6.38947 12 7.60417Z'
                          fill='white'
                        />
                        <path
                          d='M10.6785 7.32641C10.6231 7.32172 10.5 7.3452 10.3848 7.29403C10.2096 7.2161 10.1549 7.09402 10.1735 6.99839C10.1819 6.95625 10.1891 6.91379 10.1943 6.87018C10.231 6.58893 10.0725 6.36025 9.62624 6.0529C9.57992 6.02087 9.50904 5.99135 9.48669 5.96127C9.41542 5.86575 9.29625 5.73633 9.31652 5.6838C9.35015 5.59648 9.51719 5.64484 9.69144 5.74619C10.4784 6.20196 10.9319 6.88414 10.6785 7.32641Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                    <a
                      href='#!'
                      id='sm-icons__link--vk'
                      className='sm-icons__link sm-icons__link--vk'>
                      <svg
                        width='21'
                        height='12'
                        viewBox='0 0 21 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M12.1098 3.00992C12.1098 3.7738 12.1115 4.53769 12.1089 5.30199C12.108 5.52953 12.1505 5.74206 12.3793 5.85375C12.6015 5.96252 12.8294 5.88376 12.9871 5.73915C13.3745 5.38409 13.7768 5.03277 14.0989 4.62687C15.0911 3.37457 15.8891 2.01224 16.5233 0.564074C16.7121 0.132749 16.8958 0.0173119 17.3914 0.0168951C18.1438 0.0164784 18.8959 0.0135612 19.6483 0.0198123C19.7842 0.0210625 19.9279 0.0389824 20.0541 0.084407C20.3951 0.206512 20.5432 0.561157 20.4213 0.910385C20.1396 1.72094 19.6965 2.45774 19.2254 3.17411C18.6798 4.00301 18.0842 4.80232 17.5141 5.61663C17.4094 5.76665 17.3125 5.92293 17.2266 6.08337C17.0824 6.35175 17.1074 6.60263 17.3322 6.82934C17.6377 7.13773 17.9436 7.4457 18.2394 7.76242C18.9129 8.48338 19.6027 9.19267 20.2404 9.94197C20.53 10.2824 20.7312 10.6967 20.9358 11.0943C21.1427 11.4968 20.8232 11.9861 20.3525 11.9923C19.3521 12.0057 18.3516 11.9977 17.3511 11.9969C17.1118 11.9965 16.9374 11.8877 16.8077 11.6998C16.0333 10.5796 15.0262 9.66525 13.9434 8.82469C13.7234 8.65382 13.4477 8.5313 13.1778 8.43879C12.7869 8.30501 12.5103 8.50505 12.5042 8.90095C12.4954 9.45646 12.4783 10.0132 12.5073 10.5675C12.5419 11.2239 12.0585 11.9736 11.0054 11.989C9.44444 12.0119 8.05743 11.5227 6.76595 10.7375C5.60682 10.0328 4.64314 9.12682 3.84819 8.06539C2.59615 6.39343 1.47865 4.64437 0.673175 2.7332C0.410234 2.11101 0.223984 1.45923 0.0285318 0.814118C-0.0989945 0.392378 0.215658 0.0110608 0.679749 0.00605991C1.50494 -0.00310836 2.33014 -0.000607921 3.15534 0.00522643C3.51075 0.00772687 3.6913 0.161921 3.83854 0.516566C4.26933 1.55466 4.67601 2.60276 5.15106 3.62253C5.602 4.59061 6.20764 5.4791 6.96053 6.26424C7.15204 6.46386 7.40183 6.62764 7.65382 6.75599C7.88871 6.8756 8.08679 6.77641 8.16348 6.53012C8.2244 6.333 8.26778 6.12213 8.26735 5.91793C8.26472 4.85649 8.26165 3.79464 8.22528 2.73362C8.20599 2.16644 8.05962 1.62384 7.66477 1.16585C7.5035 0.97873 7.35669 0.775778 7.23443 0.564074C7.17483 0.46114 7.131 0.289443 7.18228 0.205261C7.24012 0.109828 7.41191 0.0756554 7.53637 0.0189788C7.56003 0.00814361 7.59422 0.0173119 7.62314 0.0173119C8.84275 0.0173119 10.0624 0.0168951 11.282 0.0173119C11.8543 0.0177286 12.1089 0.259438 12.1094 0.801616C12.1102 1.53758 12.1098 2.27354 12.1098 3.00992Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                    <a
                      href='#!'
                      id='sm-icons__link--phone'
                      className='sm-icons__link sm-icons__link--phone'>
                      <svg
                        width='13'
                        height='13'
                        viewBox='0 0 13 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M2.59735 5.56254C3.7342 7.61619 5.26748 9.24824 7.36045 10.3304C7.83462 9.85442 8.3088 9.39395 8.76548 8.91794C9.07058 8.59931 9.4165 8.49633 9.83431 8.63622C10.6233 8.9024 11.4395 9.00343 12.2674 9.03257C12.7571 9.05006 13 9.31041 13 9.80391C13 10.6102 13 11.4165 13 12.2228C13 12.728 12.726 13.0019 12.2168 13C11.2471 12.9942 10.291 12.8756 9.34848 12.6464C7.74134 12.2578 6.27413 11.5681 4.95266 10.583C3.32221 9.37258 2.06682 7.84157 1.18649 6.01135C0.667619 4.93498 0.311989 3.80227 0.146806 2.61904C0.0593561 1.99731 0.0302061 1.36586 0.00105618 0.736362C-0.0203205 0.28755 0.284783 0.00194291 0.735635 0C1.55961 0 2.38358 0 3.20755 0C3.68173 0 3.94408 0.237035 3.96351 0.71499C3.99655 1.53101 4.09177 2.33537 4.29971 3.12419C4.30554 3.14557 4.30748 3.16888 4.31719 3.18831C4.5057 3.54192 4.35412 3.81004 4.10537 4.05873C3.60205 4.55612 3.10456 5.05544 2.59735 5.56254Z'
                          fill='white'
                        />
                        <path
                          d='M7 1.32355C7 0.878602 7 0.44086 7 0.00311826C10.0519 -0.103165 13.0462 2.51968 12.9995 6C12.5622 6 12.1249 6 11.675 6C11.6516 4.7228 11.2198 3.60593 10.311 2.69442C9.4041 1.78471 8.29382 1.34877 7 1.32355Z'
                          fill='white'
                        />
                        <path
                          d='M7 3.58748C7 3.04968 7 2.52485 7 2.00001C9.09164 1.99569 10.959 3.59396 11 6C10.4717 6 9.94124 6 9.41294 6C9.31806 4.47517 8.28733 3.64795 7 3.58748Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                    <a
                      href='#!'
                      id='sm-icons__link--email'
                      className='sm-icons__link sm-icons__link--email'>
                      <svg
                        width='17'
                        height='13'
                        viewBox='0 0 17 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8.50306 0.00159638C10.8256 0.00159638 13.147 0.000374151 15.4695 0.00159638C16.1895 0.00159638 16.7494 0.412265 16.9389 1.07838C16.9768 1.2116 16.9963 1.3546 16.9963 1.49394C17 4.80495 16.9988 8.11597 17 11.4258C17 12.3669 16.3778 12.9988 15.4402 12.9988C11.9001 12.9988 8.36003 12.9975 4.81872 12.9975C3.73078 12.9975 2.64284 12.9975 1.55368 13C0.640541 13.0024 0 12.3644 0 11.4514C0 8.13064 0.00122241 4.80862 0.00122241 1.48783C0.00122241 0.665266 0.642986 0.00892975 1.47422 0.00404084C2.76997 -0.00329253 4.06694 0.00159638 5.36392 0.00159638C6.4103 0.00159638 7.45668 0.00281861 8.50306 0.00159638ZM8.49939 1.00505C8.49939 1.00382 8.49939 1.00382 8.49939 1.0026C7.27576 1.0026 6.05335 1.0026 4.82973 1.0026C3.73078 1.0026 2.63306 1.00382 1.53412 1.00382C1.37154 1.00382 1.22485 1.0356 1.11483 1.17005C1.04393 1.2556 1.01949 1.32038 1.1185 1.41816C1.99863 2.28961 2.87143 3.16717 3.7479 4.0435C4.8554 5.15084 5.9629 6.25818 7.06917 7.36674C7.28554 7.58308 7.52758 7.76274 7.81606 7.86419C8.6473 8.15875 9.37341 7.96808 9.99072 7.35452C11.1826 6.16896 12.3683 4.97851 13.5565 3.78928C14.329 3.01683 15.1004 2.24194 15.8778 1.47438C15.9964 1.35827 15.9695 1.27271 15.8827 1.17005C15.7641 1.02949 15.6052 1.0026 15.4317 1.0026C13.1213 1.00505 10.8097 1.00505 8.49939 1.00505ZM11.5285 7.15285C11.2192 7.46941 10.9295 7.76641 10.6398 8.06341C9.50176 9.2282 7.60214 9.24775 6.4543 8.10375C6.14503 7.79575 5.84555 7.47919 5.53994 7.16507C5.48127 7.21885 5.44949 7.24452 5.42015 7.27385C4.40555 8.28953 3.39095 9.3052 2.37636 10.3221C1.9534 10.745 1.5329 11.1715 1.10505 11.5895C1.02315 11.669 1.0366 11.7277 1.09161 11.8022C1.20407 11.9562 1.36298 11.999 1.5439 11.999C3.3445 11.9978 5.14633 11.999 6.94693 11.999C9.76336 11.999 12.5798 11.999 15.3962 11.9978C15.494 11.9978 15.5955 11.9917 15.6884 11.9648C15.9585 11.889 16.0172 11.6604 15.8228 11.4661C14.697 10.3404 13.5699 9.21475 12.4453 8.08786C12.1458 7.78474 11.85 7.47919 11.5285 7.15285ZM1.04882 2.71005C1.03782 2.71983 1.02682 2.72961 1.01582 2.74061C1.01582 5.24251 1.01582 7.74563 1.01582 10.2121C2.2639 8.96786 3.52297 7.71386 4.74171 6.49774C3.51564 5.24007 2.28223 3.97506 1.04882 2.71005ZM12.3109 6.48307C13.5174 7.69186 14.7557 8.93242 15.9854 10.1644C15.9854 7.7163 15.9854 5.24984 15.9854 2.78217C15.9732 2.77361 15.9597 2.76505 15.9475 2.75528C14.7288 4.00562 13.51 5.25473 12.3109 6.48307Z'
                          fill='white'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id='module-questions__step-two'
            className='module-questions__step module-questions__step-two hidden'>
            <svg
              className='btn-horizontal-line'
              width='48'
              height='4'
              viewBox='0 0 48 4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                width='48'
                height='4'
                rx='2'
                fill='#2874FF'
                fillOpacity='0.3'
              />
            </svg>

            <div className='row step-two__step-two-row'>
              <div
                className='
                step_two-row__step-row-title
                step-two-row__step-two-row-title
              '>
                <svg
                  id='step-two-arrow-step-back'
                  className='arrow-step-back'
                  width='10'
                  height='17'
                  viewBox='0 0 10 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.65527 15.0647L2.84092 8.5L9.65527 1.93527C10.1149 1.49247 10.1149 0.77491 9.65527 0.332104C9.19562 -0.110701 8.45078 -0.110701 7.99114 0.332104L0.344732 7.69841C-0.114911 8.14122 -0.114911 8.85878 0.344732 9.30158L7.99114 16.6679C8.45078 17.1107 9.19562 17.1107 9.65527 16.6679C10.1149 16.2251 10.1149 15.5075 9.65527 15.0647Z'
                    fill='#2874FF'
                  />
                </svg>
                <p
                  id='module-step-two-title'
                  className='text-highlight--color text-highlight--font-14'></p>
              </div>
            </div>
            <div className='container container--module'>
              <div className='row row--center step-two__step-two-row'>
                <div
                  id='question-module__radio-call'
                  className='step-two-row__input-group'>
                  <input
                    className='square-radio'
                    type='radio'
                    name='question-module__radio-call-message'
                    id='js-input-radio-call'
                    value='Позвонить'
                  />
                  <svg
                    className='square-radio-check'
                    width='26'
                    height='21'
                    viewBox='0 0 26 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect
                      x='3.27393'
                      y='7.78162'
                      width='14.3784'
                      height='3.59459'
                      rx='1'
                      transform='rotate(48.3458 3.27393 7.78162)'
                      fill='white'
                    />
                    <rect
                      x='7.7771'
                      y='18.6627'
                      width='23.3648'
                      height='3.59459'
                      rx='1'
                      transform='rotate(-50.6589 7.7771 18.6627)'
                      fill='white'
                    />
                  </svg>

                  <label htmlFor='js-input-radio-call'>Позвонить</label>
                </div>

                <div
                  id='question-module__radio-message'
                  className='step-two-row__input-group'>
                  <input
                    className='square-radio'
                    type='radio'
                    name='question-module__radio-call-message'
                    id='js-input-radio-message'
                    value='Написать'
                  />
                  <svg
                    className='square-radio-check'
                    width='26'
                    height='21'
                    viewBox='0 0 26 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect
                      x='3.27393'
                      y='7.78162'
                      width='14.3784'
                      height='3.59459'
                      rx='1'
                      transform='rotate(48.3458 3.27393 7.78162)'
                      fill='white'
                    />
                    <rect
                      x='7.7771'
                      y='18.6627'
                      width='23.3648'
                      height='3.59459'
                      rx='1'
                      transform='rotate(-50.6589 7.7771 18.6627)'
                      fill='white'
                    />
                  </svg>

                  <label htmlFor='js-input-radio-message'>Написать</label>
                </div>
              </div>
            </div>
          </div>
          <div
            id='module-questions__step-three'
            className='module-questions__step module-questions__step-three hidden'>
            <svg
              className='btn-horizontal-line'
              width='48'
              height='4'
              viewBox='0 0 48 4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                width='48'
                height='4'
                rx='2'
                fill='#2874FF'
                fillOpacity='0.3'
              />
            </svg>

            <div className='row step-three__step-three-row'>
              <div
                className='
                step_two-row__step-row-title
                step-two-row__step-three-row-title
              '>
                <svg
                  id='step-three-arrow-step-back'
                  className='arrow-step-back'
                  width='10'
                  height='17'
                  viewBox='0 0 10 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.65527 15.0647L2.84092 8.5L9.65527 1.93527C10.1149 1.49247 10.1149 0.77491 9.65527 0.332104C9.19562 -0.110701 8.45078 -0.110701 7.99114 0.332104L0.344732 7.69841C-0.114911 8.14122 -0.114911 8.85878 0.344732 9.30158L7.99114 16.6679C8.45078 17.1107 9.19562 17.1107 9.65527 16.6679C10.1149 16.2251 10.1149 15.5075 9.65527 15.0647Z'
                    fill='#2874FF'
                  />
                </svg>
                <p
                  id='module-step-three-title'
                  className='text-highlight--color text-highlight--font-14'></p>
              </div>
            </div>
            <div className='container container--module'>
              <div className='row step-three-row__row'>
                <div className='step-three-row__input-group'>
                  <label
                    id='module-label-enter-contact-info'
                    htmlFor='js-text-input-enter-phone-number'
                    className='text-highlight--font-12'></label>
                  <input
                    id='module-input-contact-info'
                    type='tel'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    className='input-group__input-phone-number'
                    name='question-module__text-enter-phone-number'
                    placeholder='123-456-7890'
                  />
                  <a
                    href='!#'
                    id='module_questions-submit-btn'
                    className='btn btn--secondary btn-questions-module'>
                    Отправить
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id='module-questions__step-success'
            className='module-questions__step module-questions__step-success hidden'>
            <div className='container container--module'>
              <div className='row step-success__step-success-row'>
                <svg
                  className='success-check-icon'
                  id='question-is-send'
                  width='68'
                  height='68'
                  viewBox='0 0 68 68'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle
                    className='icon_path__counter'
                    cx='34'
                    cy='34'
                    r='34'
                    fill='#2874FF'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M29.2073 41.736C29.2535 41.9487 29.3691 42.1479 29.5505 42.2967L30.1248 42.7674L30.4799 43.1666C30.6603 43.3694 30.9046 43.4814 31.1555 43.4994C31.524 43.5993 31.9334 43.4825 32.1911 43.1681L32.7517 42.4842L33.0831 42.1893C33.2302 42.0585 33.3296 41.894 33.3799 41.7177L45.735 26.6448C46.0851 26.2177 46.0227 25.5876 45.5956 25.2375L44.3623 24.2266C43.9352 23.8765 43.3051 23.939 42.955 24.3661L31.2594 38.6345L24.9386 31.5288C24.5715 31.1161 23.9395 31.0792 23.5268 31.4463L22.3354 32.5061C21.9227 32.8731 21.8858 33.5052 22.2528 33.9179L29.2073 41.736Z'
                    fill='white'
                  />
                </svg>
                <p
                  className='
                  step-success-row__p
                  text-highlight--font-22
                  text-highlight--color
                  text-highlight--bold
                '>
                  Спасибо за заявку!
                </p>
                <p
                  className='
                  step-success-row__p
                  text-highlight--font-12
                  text-highlight--color
                  text-highlight--fw-300
                '>
                  Менеджер свяжется с Вами в ближайшее время
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer desktop-only'>
        <svg
          className='section__waves section__waves--top desktop-only'
          width='1440'
          height='91'
          viewBox='0 0 1440 91'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'>
          <path
            d='M0 90.8501H1440V4.8501C794.992 121.211 503.795 -28.019 0 4.8501V90.8501Z'
            fill='#2874ff'></path>
        </svg>
        <div className='footer__flex'>
          <div className='footer__left'>
            <div className='card--primary card--contact bg-transparent'>
              <h4 className='h2 mb-31 text-highlight--uppercase'>Контакты</h4>
              <div className='header-items__item-group-container mb-31'>
                <div className='item-group-container__row-wrapper'>
                  <div className='row-wrapper__icon mr-4'>
                    <svg
                      width='16'
                      height='24'
                      viewBox='0 0 16 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className=''
                        d='M8.22217 11.25C9.87902 11.25 11.2222 9.90685 11.2222 8.25C11.2222 6.59315 9.87902 5.25 8.22217 5.25C6.56531 5.25 5.22217 6.59315 5.22217 8.25C5.22217 9.90685 6.56531 11.25 8.22217 11.25Z'
                        stroke='#fff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'></path>
                      <path
                        className=''
                        d='M14.2222 11.25C11.9722 16.5 8.22217 22.5 8.22217 22.5C8.22217 22.5 4.47217 16.5 2.22217 11.25C-0.0278318 6 3.72217 1.5 8.22217 1.5C12.7222 1.5 16.4722 6 14.2222 11.25Z'
                        stroke='#fff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'></path>
                    </svg>
                  </div>
                  <div className='row-wrapper__text'>
                    <p>Москва, Дербеневская набережная 11</p>
                  </div>
                </div>
                <div className='item-group-container__row-wrapper mb-0'>
                  <div className='row-wrapper__icon mr-4'>
                    <svg
                      width='21'
                      height='20'
                      viewBox='0 0 21 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        className=''
                        d='M10.2222 0C4.70817 0 0.222168 4.486 0.222168 10C0.222168 15.514 4.70817 20 10.2222 20C15.7362 20 20.2222 15.514 20.2222 10C20.2222 4.486 15.7362 0 10.2222 0ZM10.2222 18C5.81117 18 2.22217 14.411 2.22217 10C2.22217 5.589 5.81117 2 10.2222 2C14.6332 2 18.2222 5.589 18.2222 10C18.2222 14.411 14.6332 18 10.2222 18Z'
                        fill='#fff'></path>
                      <path
                        className=''
                        d='M11.2222 5H9.22217V10.414L12.5152 13.707L13.9292 12.293L11.2222 9.586V5Z'
                        fill='#fff'></path>
                    </svg>
                  </div>
                  <div className='row-wrapper__text'>
                    <p>Приемная комиссия пн-пт с 9-00 до 19-00</p>
                  </div>
                </div>
              </div>
              <p className='h2'>+7 (499) 490-29-60</p>
              {/*  <div className="header-items__item-group-container">
              <div className="item-group-container__row-wrapper">
                <div className="row-wrapper__text row-wrapper__text--bigger mr-0">
                  <p>Свяжитесь с нами:</p>
                </div>
              </div>
              <div className="item-group-container__row-wrapper mb-0">
                <div className="row-wrapper__sm-icons">
                  <a href="sm-icons__link">
                    <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3567 1.10501C20.4967 0.640011 20.3567 0.299011 19.6947 0.299011H17.5017C16.9437 0.299011 16.6887 0.594012 16.5487 0.918012C16.5487 0.918012 15.4337 3.63701 13.8537 5.40001C13.3437 5.91301 13.1107 6.07501 12.8327 6.07501C12.6937 6.07501 12.4917 5.91301 12.4917 5.44801V1.10501C12.4917 0.547011 12.3307 0.299011 11.8657 0.299011H8.41971C8.07171 0.299011 7.86171 0.557011 7.86171 0.803011C7.86171 1.33101 8.65171 1.45301 8.73271 2.94101V6.16901C8.73271 6.87601 8.60571 7.00501 8.32571 7.00501C7.58271 7.00501 5.77471 4.27601 4.70171 1.15201C4.49271 0.545011 4.28171 0.300012 3.72171 0.300012H1.52971C0.90271 0.300012 0.77771 0.595012 0.77771 0.919012C0.77771 1.50101 1.52071 4.38101 4.23871 8.19001C6.05071 10.791 8.60171 12.201 10.9257 12.201C12.3187 12.201 12.4907 11.888 12.4907 11.348V9.38201C12.4907 8.75601 12.6237 8.63001 13.0647 8.63001C13.3887 8.63001 13.9467 8.79401 15.2477 10.047C16.7337 11.533 16.9797 12.2 17.8147 12.2H20.0067C20.6327 12.2 20.9457 11.887 20.7657 11.269C20.5687 10.654 19.8587 9.75901 18.9167 8.70001C18.4047 8.09601 17.6397 7.44601 17.4067 7.12101C17.0817 6.70201 17.1757 6.51701 17.4067 6.14501C17.4077 6.14601 20.0787 2.38401 20.3567 1.10501Z" fill="#4D76A1"></path>
                    </svg>
                  </a>
                  <a href="sm-icons__link">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6044 5.09C15.7244 0.65 9.84438 -0.67 5.28438 2.09C0.844377 4.85 -0.595623 10.85 2.28438 15.29L2.52438 15.65L1.56438 19.25L5.16438 18.29L5.52438 18.53C7.08438 19.37 8.76438 19.85 10.4444 19.85C12.2444 19.85 14.0444 19.37 15.6044 18.41C20.0444 15.53 21.3644 9.65 18.6044 5.09ZM16.0844 14.33C15.6044 15.05 15.0044 15.53 14.1644 15.65C13.6844 15.65 13.0844 15.89 10.6844 14.93C8.64438 13.97 6.96438 12.41 5.76438 10.61C5.04438 9.77 4.68438 8.69 4.56438 7.61C4.56438 6.65 4.92438 5.81 5.52438 5.21C5.76438 4.97 6.00438 4.85 6.24438 4.85H6.84438C7.08438 4.85 7.32438 4.85 7.44438 5.33C7.68438 5.93 8.28438 7.37 8.28438 7.49C8.40438 7.61 8.40438 7.85 8.28438 7.97C8.40438 8.21 8.28438 8.45 8.16438 8.57C8.04438 8.69 7.92438 8.93 7.80438 9.05C7.56438 9.17 7.44438 9.41 7.56438 9.65C8.04438 10.37 8.64438 11.09 9.24438 11.69C9.96438 12.29 10.6844 12.77 11.5244 13.13C11.7644 13.25 12.0044 13.25 12.1244 13.01C12.2444 12.77 12.8444 12.17 13.0844 11.93C13.3244 11.69 13.4444 11.69 13.6844 11.81L15.6044 12.77C15.8444 12.89 16.0844 13.01 16.2044 13.13C16.3244 13.49 16.3244 13.97 16.0844 14.33Z" fill="#3DBD2A"></path>
                    </svg>
                  </a>
                  <a href="sm-icons__link">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.1111 18.25C12.2328 18.25 14.2676 17.4071 15.7679 15.9069C17.2682 14.4066 18.1111 12.3717 18.1111 10.25C18.1111 8.12827 17.2682 6.09344 15.7679 4.59315C14.2676 3.09285 12.2328 2.25 10.1111 2.25C7.98935 2.25 5.95452 3.09285 4.45423 4.59315C2.95394 6.09344 2.11108 8.12827 2.11108 10.25C2.11108 12.3717 2.95394 14.4066 4.45423 15.9069C5.95452 17.4071 7.98935 18.25 10.1111 18.25ZM10.1111 20.25C4.58808 20.25 0.111084 15.773 0.111084 10.25C0.111084 4.727 4.58808 0.25 10.1111 0.25C15.6341 0.25 20.1111 4.727 20.1111 10.25C20.1111 15.773 15.6341 20.25 10.1111 20.25Z" fill="#7B519D"></path>
                      <path d="M13.7551 9.65403C13.7671 8.16203 12.5361 6.79403 11.0111 6.60503L10.9111 6.59003C10.8346 6.57484 10.757 6.56614 10.6791 6.56403C10.3661 6.56403 10.2831 6.79003 10.2611 6.92503C10.2486 6.98109 10.2475 7.03909 10.2578 7.0956C10.2681 7.1521 10.2896 7.20597 10.3211 7.25403C10.4251 7.39903 10.6071 7.42403 10.7531 7.44603C10.7961 7.45203 10.8371 7.45703 10.8701 7.46603C12.2411 7.78103 12.7031 8.27803 12.9281 9.68103C12.9341 9.71603 12.9361 9.75803 12.9381 9.80303C12.9481 9.97003 12.9691 10.319 13.3331 10.319C13.3631 10.319 13.3951 10.317 13.4291 10.311C13.7681 10.258 13.7571 9.93903 13.7521 9.78603C13.7495 9.74907 13.7495 9.71198 13.7521 9.67503C13.7532 9.66841 13.7538 9.66173 13.7541 9.65503L13.7551 9.65403Z" fill="#7B519D"></path>
                      <path d="M10.5911 6.05701C10.6311 6.06001 10.6711 6.06301 10.7021 6.06801C12.9521 6.42601 13.9881 7.52601 14.2751 9.86801C14.2801 9.90801 14.2801 9.95601 14.2811 10.008C14.2841 10.191 14.2901 10.571 14.6861 10.579H14.6981C14.7525 10.5819 14.8068 10.5731 14.8575 10.5533C14.9082 10.5335 14.9541 10.503 14.9921 10.464C15.1151 10.331 15.1071 10.134 15.1001 9.97401C15.0981 9.93601 15.0961 9.89901 15.0971 9.86701C15.1251 7.47201 13.1171 5.30001 10.7991 5.22001L10.7711 5.22101C10.7621 5.22233 10.7531 5.223 10.7441 5.22301C10.7211 5.22301 10.6921 5.22101 10.6621 5.21901C10.6222 5.21537 10.5822 5.21336 10.5421 5.21301C10.1731 5.21301 10.1031 5.48301 10.0941 5.64501C10.0741 6.01801 10.4231 6.04501 10.5911 6.05701ZM14.1661 12.894C14.1179 12.8563 14.0703 12.818 14.0231 12.779C13.7771 12.575 13.5151 12.387 13.2631 12.205C13.2104 12.1671 13.1577 12.1291 13.1051 12.091C12.7811 11.857 12.4901 11.742 12.2151 11.742C11.8451 11.742 11.5221 11.954 11.2551 12.371C11.1371 12.555 10.9931 12.645 10.8171 12.645C10.6942 12.6406 10.5738 12.6096 10.4641 12.554C9.41909 12.064 8.67209 11.314 8.24509 10.324C8.03909 9.84401 8.10509 9.53201 8.46909 9.27701C8.67509 9.13301 9.05909 8.86401 9.03209 8.34901C9.00209 7.76401 7.75109 6.00401 7.22409 5.80401C6.99928 5.71917 6.75138 5.71846 6.52609 5.80201C5.92109 6.01201 5.48609 6.38201 5.26909 6.86901C5.05909 7.34101 5.06909 7.89401 5.29709 8.47001C5.95409 10.136 6.87709 11.588 8.04309 12.786C9.18309 13.959 10.5851 14.919 12.2091 15.641C12.3551 15.706 12.5091 15.741 12.6211 15.767L12.7161 15.791C12.7291 15.7948 12.7426 15.7968 12.7561 15.797H12.7691C13.5331 15.797 14.4501 15.077 14.7321 14.255C14.9791 13.535 14.5281 13.18 14.1661 12.895V12.894ZM10.9291 7.96001C10.7991 7.96301 10.5261 7.97001 10.4301 8.25601C10.3861 8.39001 10.3911 8.50601 10.4461 8.60101C10.5271 8.74101 10.6831 8.78401 10.8241 8.80701C11.3361 8.89201 11.6001 9.18501 11.6521 9.72701C11.6771 9.98101 11.8421 10.157 12.0541 10.157C12.0701 10.1574 12.0861 10.1567 12.1021 10.155C12.3571 10.123 12.4801 9.93001 12.4691 9.58001C12.4731 9.21401 12.2881 8.80001 11.9731 8.47001C11.6571 8.13801 11.2761 7.95101 10.9291 7.96001Z" fill="#7B519D"></path>
                    </svg>
                  </a>
                  <a href="sm-icons__link">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.4427 0.967003L1.71274 7.804C0.502744 8.29 0.509744 8.965 1.49074 9.266L6.04274 10.686L16.5747 4.041C17.0727 3.738 17.5277 3.901 17.1537 4.233L8.62074 11.934H8.61874L8.62074 11.935L8.30674 16.627C8.76674 16.627 8.96974 16.416 9.22774 16.167L11.4387 14.017L16.0377 17.414C16.8857 17.881 17.4947 17.641 17.7057 16.629L20.7247 2.401C21.0337 1.162 20.2517 0.601003 19.4427 0.967003Z" fill="#32AADE"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>  */}
            </div>
          </div>
          <div className='footer__right'>
            <div className='card--primary'>
              <h4
                className='
                h2
                text-highlight--color
                text-highlight--bold
                text-highlight--uppercase
              '>
                Есть вопросы?
              </h4>
              <p className='p'>
                Оставьте свои контакты, менеджер перезвонит и проведет
                консультацию
              </p>
              <form className='contact-form'>
                <input
                  id='user-name-contact-from'
                  type='text'
                  className='input-style-primary'
                  name='user-name-footer'
                  placeholder='Имя'
                />

                <input
                  id='number-contact-form'
                  type='tel'
                  className='input-style-primary'
                  name='phone-footer'
                  placeholder='Номер телефона'
                />

                <input
                  id='submit-btn-contact-form'
                  type='submit'
                  className='btn btn-primary btn-input'
                  value='Отправить'
                />
                <p
                  id='footer-form-is-submitted'
                  className='p text-highlight--color-success hidden mb-0'>
                  Спасибо за заявку! Мы скоро с Вами свяжемся!
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className='below-footer'>
          <div className='container'>
            <div className='below-footer__left'>
              <p className='left__item'>
                © 2020 «ROSUCHEBA». ВСЕ ПРАВА ЗАЩИЩЕНЫ.
              </p>
              <a
                className='left__item'
                href='/Политика_в_отношении_обработки_персональных_данных.pdf'
                target='_blank'
                rel='noopener noreferrer'>
                ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
              </a>
            </div>
            <div className='below-footer__right'>
              <img
                className='edu-icons'
                src='img/other/rabo.png'
                alt='Российская ассоциация бизнес-образования'
                loading='lazy'
              />
              <img
                className='edu-icons'
                src='img/other/decm.png'
                alt='Департамент образования города Москвы'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </footer>

      <div id='module-popup-form' className='module-popup-form'>
        <form id='pop-up-form' className='contact-form'>
          <img
            id='cross-close-popup-form'
            className='close-popup-icon'
            src='img/svgs/close-icon.svg'
          />
          <h4 id='pop-up-form-title' className='contact-form__title'>
            ХОТИТЕ УЗНАТЬ ПОДРОБНЕЕ О ВУЗАХ?
          </h4>
          <p id='popup-form-info' className='contact-form__subtilte'>
            Оставьте свои контакты, менеджер перезвонит и проведет консультацию
          </p>
          <input
            id='pop-up-form-name'
            type='text'
            className='input-style-primary'
            name='user-name-footer-popup'
            placeholder='Имя'
          />

          <input
            id='pop-up-form-number'
            type='tel'
            className='input-style-primary'
            name='phone-footer-popup'
            placeholder='Номер телефона'
          />

          <input
            id='pop-up-form-submit'
            className='btn btn-primary btn-input'
            value='Отправить'
            data-form=''
          />
          <p
            id='module-popup-is-submitted'
            className='p text-highlight--color-success hidden mb-0'>
            Спасибо за заявку! Мы скоро с Вами свяжемся!
          </p>
        </form>
      </div>
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
