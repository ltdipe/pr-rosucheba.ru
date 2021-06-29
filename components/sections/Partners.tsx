import IconMoiLogo from '@/components/icons/partners/IconMoiLogo'
import IconSynergyLogo from '@/components/icons/partners/IconSynergyLogo'
import IconSBALogo from '@/components/icons/partners/IconSBALogo'
import IconTgudLogo from '@/components/icons/partners/IconTgudLogo'
import IconIpeLogo from '@/components/icons/partners/IconIpeLogo'
import IconRocHoyLogo from '@/components/icons/partners/IconRocHoyLogo'

const Partners = () => {
  return (
    <section id='partners' className='section-partners'>
      <div className='container'>
        <div className='section__title'>
          <h2 className='h1 h1--padding-bottom text-highlight--color text-highlight--uppercase--desktop text-highlight--bold-mobile'>
            ВУЗы-партнеры
          </h2>
        </div>
        <div className='section__content'>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
              <IconMoiLogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
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
              <IconTgudLogo />
            </div>
          </div>
          <div className='content__img-wrapper'>
            <div className='img-wrapper__img'>
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
    </section>
  )
}

export default Partners
