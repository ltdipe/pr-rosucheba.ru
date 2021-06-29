import Image from 'next/image'
import IconLocation from '@/components/icons/IconLocation'
import IconClock from '@/components/icons/IconClock'
import ImgRaboLogo from '@/public/assets/images/other/rabo.png'
import ImgDecmLogo from '@/public/assets/images/other/decm.png'

const Footer = () => {
  return (
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
                  <IconLocation light />
                </div>
                <div className='row-wrapper__text'>
                  <p>Москва, Дербеневская набережная 11</p>
                </div>
              </div>
              <div className='item-group-container__row-wrapper mb-0'>
                <div className='row-wrapper__icon mr-4'>
                  <IconClock light />
                </div>
                <div className='row-wrapper__text'>
                  <p>Приемная комиссия пн-пт с 9-00 до 19-00</p>
                </div>
              </div>
            </div>
            <p className='h2'>+7 (499) 490-29-60</p>
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
                readOnly
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
              href='/doc-1.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
            </a>
          </div>
          <div className='below-footer__right'>
            <div className='edu-icons'>
              <Image
                src={ImgRaboLogo}
                alt='Российская ассоциация бизнес-образования'
                placeholder='blur'
              />
            </div>
            <div className='edu-icons'>
              <Image
                src={ImgDecmLogo}
                alt='Департамент образования города Москвы'
                placeholder='blur'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
