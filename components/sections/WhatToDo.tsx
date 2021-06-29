import Image from 'next/image'
import PersonThinking from '@/public/assets/images/other/what-to-do.png'

const WhatToDo = () => {
  return (
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
            <Image
              src={PersonThinking}
              alt='Выбирайте'
              placeholder='blur'
              width={411}
              height={372}
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
  )
}

export default WhatToDo
