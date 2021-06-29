import IconClose from '@/components/icons/IconClose'

const PopupForm = () => {
  return (
    <div id='module-popup-form' className='module-popup-form'>
      <form id='pop-up-form' className='contact-form'>
        <div id='cross-close-popup-form' className='close-popup-icon'>
          <IconClose />
        </div>
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
          type='submit'
          className='btn btn-primary btn-input'
          value='Отправить'
          data-form=''
          readOnly
        />
        <p
          id='module-popup-is-submitted'
          className='p text-highlight--color-success hidden mb-0'>
          Спасибо за заявку! Мы скоро с Вами свяжемся!
        </p>
      </form>
    </div>
  )
}

export default PopupForm
