import IconLocation from '@/components/icons/IconLocation'
import IconClock from '@/components/icons/IconClock'

const Footer = () => {
  return (
    <footer className='footer desktop-only'>
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
          <h4 className='h2 text-highlight--color text-highlight--bold text-highlight--uppercase'>
            Есть вопросы?
          </h4>
          <p className='p'>
            Оставьте свои контакты, менеджер перезвонит и проведет консультацию
          </p>
          <form className='contact-form'>
            <input
              id='user-name-contact-from'
              type='text'
              className='input-style-primary'
              name='user-name-footer-name'
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
              className='p text-highlight--color-success hidden'>
              Спасибо за заявку! Мы скоро с Вами свяжемся!
            </p>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
