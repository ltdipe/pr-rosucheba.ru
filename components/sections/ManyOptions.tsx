import Image from 'next/image'
import PersonStuffImg from '@/public/assets/images/other/choose-from-many.png'

const ManyOptions = () => {
  return (
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
            <Image
              src={PersonStuffImg}
              alt='Выбирайте'
              placeholder='blur'
              width={430}
              height={370}
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
  )
}

export default ManyOptions
