import IconMoiLogo from '@/components/icons/partners/IconMoiLogo'
import IconSynergyLogo from '@/components/icons/partners/IconSynergyLogo'
import IconSBALogo from '@/components/icons/partners/IconSBALogo'
import IconTgudLogo from '@/components/icons/partners/IconTgudLogo'
import IconIpeLogo from '@/components/icons/partners/IconIpeLogo'
import IconRocHoyLogo from '@/components/icons/partners/IconRocHoyLogo'
import IconMituLogo from '@/components/icons/partners/IconMituLogo'

const Partners = () => {
  return (
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
              <IconMituLogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
              <span className='img__promo desktop-only'>-30% с ROSUCHEBA</span>
              <IconSynergyLogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
              <IconSBALogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
              <IconMoiLogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
              <span className='img__promo desktop-only'>-30% с ROSUCHEBA</span>
              <IconIpeLogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
              <IconRocHoyLogo />
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
  )
}

export default Partners
