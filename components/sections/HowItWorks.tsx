import IconArrowUp from '@/components/icons/IconArrowUp'
import IconArrowDown from '@/components/icons/IconArrowDown'

const HowItWorks = () => {
  return (
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
                  <div className='icon-retractable-arrows__up'>
                    <IconArrowUp />
                  </div>

                  <div className='icon-retractable-arrows__down'>
                    <IconArrowDown />
                  </div>
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
                  <div className='icon-retractable-arrows__up'>
                    <IconArrowUp />
                  </div>
                  <div className='icon-retractable-arrows__down'>
                    <IconArrowDown />
                  </div>
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
                  Наши менеджеры связываются с Вами, уточняют текущий уровень
                  образования и Ваши предпочтения
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
                  <div className='icon-retractable-arrows__up'>
                    <IconArrowUp />
                  </div>
                  <div className='icon-retractable-arrows__down'>
                    <IconArrowDown />
                  </div>
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
                  На основе уровня образования и предпочтений подбирают Вам ВУЗ
                  из 6 наших вузов-партнеров
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
                  <div className='icon-retractable-arrows__up'>
                    <IconArrowUp />
                  </div>
                  <div className='icon-retractable-arrows__down'>
                    <IconArrowDown />
                  </div>
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
                  <div className='icon-retractable-arrows__up'>
                    <IconArrowUp />
                  </div>
                  <div className='icon-retractable-arrows__down'>
                    <IconArrowDown />
                  </div>
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
                  Вы подаете документы и уже в следующем месяце приступаете к
                  дистанционному обучению из своей страны / города. Да,
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
                  <div className='icon-retractable-arrows__up'>
                    <IconArrowUp />
                  </div>
                  <div className='icon-retractable-arrows__down'>
                    <IconArrowDown />
                  </div>
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
                  Смотрите лекции, дистанционно закрываете сессии, общаетесь с
                  преподавателями и в итоге получаете диплом об образовании гос.
                  образца от аккредитованного ВУЗа
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
