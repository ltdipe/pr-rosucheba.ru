const ThankyouPopupAlt = () => {
  return (
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
  )
}

export default ThankyouPopupAlt
