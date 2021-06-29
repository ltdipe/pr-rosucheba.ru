// CTA btns
const ctaSubmitBtn = document.getElementById('cta-submit-application')

const btnAskQuestion = document.getElementById('section-ask-questions')
const moduleQuestions = document.getElementById('module-questions')
const moduleQuestionTextarea = document.getElementById(
  'js-text-input-ask-anything'
)

const sectionAskQuestionsInner = document.getElementById('cta-ask-question')

const oneMoreQuestionText = document.getElementById('one-more-question')

const moduleHorizontalCloseBtn = document.getElementById(
  'js-btn-horizontal-line-close'
)

const menuToggler = document.getElementById('menu-toggle')

const inputSelectChooseUni = document.getElementById('input-select-choose-uni')

const inputSelectChooseUniInnerText = document.getElementById(
  'input-select-choose-uni-inner-text'
)

const inputSelectChooseProgramm = document.getElementById(
  'input-select-choose-programm'
)

const inputSelectChooseProgrammInnerText = document.getElementById(
  'input-select-choose-programm-inner-text'
)

const inputSelectChooseUniDropdown = document.getElementById(
  'input-select-choose-uni-dropdown'
)

const inputSelectChooseProgrammDropdown = document.getElementById(
  'input-select-choose-programm-dropdown'
)

const inputSelectChooseProgrammDropdownStepTwo = document.getElementById(
  'input-select-choose-programm-dropdown--step-two'
)

const dropDownUniItems = document.querySelectorAll(
  '.input-select-choose-uni-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item'
)

const dropDownUniItemsP = document.querySelectorAll(
  '.input-select-choose-uni-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p'
)

const dropDownProgrammItems = document.querySelectorAll(
  '.input-select-choose-programm-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item'
)

const dropDownProgrammItemsP = document.querySelectorAll(
  '.input-select-choose-programm-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p'
)

const dropDownProgrammItemsStepTwo = document.querySelectorAll(
  '.input-select-choose-programm-dropdown--step-two .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item'
)

const dropDownProgrammItemsPStepTwo = document.querySelectorAll(
  '.input-select-choose-programm-dropdown--step-two .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p'
)

const selectedItemFromTheFirstStep = document.getElementById(
  'inner-dropdown-items__item--selected'
)

const phoneInputInnerText = document.getElementById('phone-number')

const userInputNameText = document.getElementById('user-name')

const navItemLinks = document.querySelectorAll('.nav-item__link')
const navItemLinksArr = Array.from(navItemLinks)

const dropDownItemUniIcons = document.querySelectorAll(
  '.inner-dropdown-items__item-uni__icon'
)
const dropDownItemUniIconsArr = Array.from(dropDownItemUniIcons)

const dropDownItemProgrammIcons = document.querySelectorAll(
  '.inner-dropdown-items__item-programm__icon'
)
const dropDownItemProgrammIconsArr = Array.from(dropDownItemProgrammIcons)

// Module Ask Question -> Steps
const moduleStepOne = document.getElementById('module-questions__step-one')
const moduleStepTwo = document.getElementById('module-questions__step-two')
const moduleStepThree = document.getElementById('module-questions__step-three')
const moduleStepSuccess = document.getElementById(
  'module-questions__step-success'
)

// Module Ask Question -> Step 1 -> SM Buttons
const telegramBtn = document.getElementById('sm-icons__link--telegram')
const whatsappBtn = document.getElementById('sm-icons__link--whatsapp')
const viberBtn = document.getElementById('sm-icons__link--viber')
const vkBtn = document.getElementById('sm-icons__link--vk')
const phoneBtn = document.getElementById('sm-icons__link--phone')
const emailBtn = document.getElementById('sm-icons__link--email')

// Module Ask Question -> Step 2 -> Btns
const moduleBtnCall = document.getElementById('question-module__radio-call')
const moduleBtnMessage = document.getElementById(
  'question-module__radio-message'
)

// Module Ask Question -> Step 2, Step 3 -> Titles
const moduleStepTwoTitle = document.getElementById('module-step-two-title')
const moduleStepThreeTitle = document.getElementById('module-step-three-title')

// Module Ask Question -> Step 2, Step 3 -> Arrows Back
const moduleStepTwoArrowBack = document.getElementById(
  'step-two-arrow-step-back'
)
const moduleStepThreeArrowBack = document.getElementById(
  'step-three-arrow-step-back'
)

// Module Ask Question -> Step 3 -> Contact input
const moduleLabelEnterContactInfo = document.getElementById(
  'module-label-enter-contact-info'
)
const moduleInputContactInfo = document.getElementById(
  'module-input-contact-info'
)

// Module Ask Question -> Step Success -> Submit
const moduleBtnSubmit = document.getElementById('module_questions-submit-btn')

const carouselBtnLeft = document.getElementById('carrousel-arrow-left-btn')
const carouselBtnRight = document.getElementById('carrousel-arrow-right-btn')

const carouselImgGroupOne = document.getElementById('content__img-group--1')
const carouselImgGroupTwo = document.getElementById('content__img-group--2')
const carouselImgGroupThree = document.getElementById('content__img-group--3')

const svgCheckMark = `<svg
      class="inner-dropdown-items-programm__item__icon"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
        fill="#fff"
      />
    </svg>`

const scrollToTheApplicationBtn = document.getElementById(
  'cta-scroll-to-submit-application'
)

const fillInTheFieldsBelow = document.getElementById('fill-in-fields')

const userNameInput = document.getElementById('container-input--user-name')

const insertAfterLiStepTwo = document.getElementById(
  'js-insert-after--step-two'
)

const numValidation = /^[0-9()-.+ ]+$/

const locationDependedHeading = document.getElementById(
  'location-depended-heading'
)

const customizedCountryText = document.getElementById('customizedCountryText')

const userDevice = window.navigator.userAgent

// UTM PARAMS
const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)

const utmSource = urlParams.get('utm_source')
const utmMedium = urlParams.get('utm_medium')
const utmCampaign = urlParams.get('utm_campaign')
const utmContent = urlParams.get('utm_content')
const utmTerm = urlParams.get('utm_term')

// Convert price
const convertPriceTo = cntr => {
  const regularPrices = document.querySelectorAll('.price-regular')
  const discountPrices = document.querySelectorAll('.price-discount')
  let currencySign = 'р.'

  if (cntr === 'kz') {
    currencySign = '₸'
    regularPrices.forEach(price => {
      price.innerHTML = `205 000 ${currencySign}`
    })
    discountPrices.forEach(price => {
      price.innerHTML = `110 000 ${currencySign}`
    })
  }
}

const locationUrlAPI = 'https://ipinfo.io?token=b16e76b622236e'

let userCity
let userCountry
let userCountryCode // KZ, RU, UZ
fetch(locationUrlAPI)
  .then(data => data.json())
  .then(data => {
    // console.log(data);
    userCity = data.city
    userCountry = data.country
    userCountryCode = data.country
    if (userCountry === 'RU') {
      userCountry = 'Russia'
    } else if (userCountry === 'KZ') {
      userCountry = 'Kazakhstan'
      convertPriceTo('kz')
    } else if (userCountry == 'UZ') {
      userCountry = 'Uzbekistan'
    }

    // console.log(data);
    // // console.log(locationDependedHeading);
    // // console.log(userCountryCode);
    changeLocationDependedHeading(
      locationDependedHeading,
      'дистанционно в вузах Москвы',
      'дистанционно в вузах Москвы без ЕГЭ и ЕНТ',
      'дистанционно в вузах Москвы без ЕГЭ',
      'дистанционно в вузах Москвы'
    )

    changeCustomizedCountryText('', 'из Казахстана', 'из Узбекистана', '')

    // Docs steps
    const kzUzEls = document.querySelectorAll('.kz-uz-only')
    const kzUzElsArr = Array.from(kzUzEls)
    const ruEls = document.querySelectorAll('.ru-only')
    const ruElsArr = Array.from(ruEls)
    if (userCountryCode === 'RU') {
      ruElsArr.forEach(el => {
        el.classList.add('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.remove('show')
      })
    } else if (userCountryCode === 'KZ') {
      ruElsArr.forEach(el => {
        el.classList.remove('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.show('show')
      })
    } else if (userCountryCode === 'UZ') {
      ruElsArr.forEach(el => {
        el.classList.remove('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.show('show')
      })
    } else {
      ruElsArr.forEach(el => {
        el.classList.add('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.remove('show')
      })
    }
    // /Docs needed
  })
  .catch(error => {
    // `Can't access ${locationUrlAPI} :(`;
    changeLocationDependedHeading(
      locationDependedHeading,
      'дистанционно в вузах Москвы',
      'дистанционно в вузах Москвы без ЕГЭ и ЕНТ',
      'дистанционно в вузах Москвы без ЕГЭ',
      'дистанционно в вузах Москвы'
    )

    changeCustomizedCountryText('', 'из Казахстана', 'из Узбекистана', '')

    // Docs steps
    const kzUzEls = document.querySelectorAll('.kz-uz-only')
    const kzUzElsArr = Array.from(kzUzEls)
    const ruEls = document.querySelectorAll('.ru-only')
    const ruElsArr = Array.from(ruEls)
    if (userCountryCode === 'RU') {
      ruElsArr.forEach(el => {
        el.classList.add('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.remove('show')
      })
    } else if (userCountryCode === 'KZ') {
      ruElsArr.forEach(el => {
        el.classList.remove('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.show('show')
      })
    } else if (userCountryCode === 'UZ') {
      ruElsArr.forEach(el => {
        el.classList.remove('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.show('show')
      })
    } else {
      ruElsArr.forEach(el => {
        el.classList.add('show')
      })
      kzUzElsArr.forEach(el => {
        el.classList.remove('show')
      })
    }
    // /Docs needed

    return
  })

function changeLocationDependedHeading(
  textBefore = '',
  textAfterRU = '',
  textAfterKZ = '',
  textAfterUZ = '',
  textFallback = ''
) {
  if (userCountryCode === 'RU') {
    textBefore.innerText = textAfterRU
  } else if (userCountryCode === 'KZ') {
    textBefore.innerText = textAfterKZ
  } else if (userCountryCode === 'UZ') {
    textBefore.innerText = textAfterUZ
  } else {
    textBefore.innerText = textFallback
  }
}

function changeCustomizedCountryText(
  textAfterRU = '',
  textAfterKZ = '',
  textAfterUZ = '',
  textFallback = ''
) {
  if (userCountryCode === 'RU') {
    customizedCountryText.innerText = textAfterRU
  } else if (userCountryCode === 'KZ') {
    customizedCountryText.innerText = textAfterKZ
  } else if (userCountryCode === 'UZ') {
    customizedCountryText.innerText = textAfterUZ
  } else {
    customizedCountryText.innerText = textFallback
  }
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

let isSumbitted = false

function checkForUniqueUserNum() {
  const userNum = document.getElementById('pop-up-form-number').value
  const userNum2 = document.getElementById('phone-are-there-questions').value
  const userNum3 = document.getElementById('number-contact-form').value
  const userNum4 = document.getElementById('module-input-contact-info').value
  const numArr = [userNum, userNum2, userNum3, userNum4]
  const localStorageNum = JSON.parse(localStorage.getItem('userNum'))
  let userNumCur
  let output

  numArr.forEach(num => {
    if (num !== '') {
      userNumCur = num
    }
  })

  if (
    localStorageNum === null ||
    localStorageNum.toString() !== userNumCur.toString()
  ) {
    localStorage.setItem('userNum', JSON.stringify(userNumCur))
    // console.log(userNumCur)
    output = 'Нет'
  } else if (localStorageNum.toString() === userNumCur.toString()) {
    output = 'Да'
  }

  return output
}

// Send to email
async function sumbitData(data) {
  if (isSumbitted === false) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const content = await res.json()
    isSumbitted = true

    // Prevent spamming
    setTimeout(() => {
      isSumbitted = false
    }, 5000)
  } else {
    return
  }
}

// Menu
menuToggler.addEventListener('click', () => {
  if (menuToggler.checked === true) {
    btnAskQuestion.classList.add('hidden')
  } else {
    btnAskQuestion.classList.remove('hidden')
  }
})

navItemLinks[0].addEventListener('click', e => {
  // window.location = "#about";
  const aboutSection = document.getElementById('about')
  aboutSection.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

navItemLinks[1].addEventListener('click', e => {
  // window.location = "#partners";
  const partnersSection = document.getElementById('partners')
  partnersSection.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

navItemLinks[2].addEventListener('click', e => {
  // window.location = "#trusted-by";
  const chooseFromMany = document.getElementById('choose-from-many')
  chooseFromMany.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

navItemLinks[3].addEventListener('click', e => {
  // window.location = "#trusted-by";
  const whatToDo = document.getElementById('what-to-do')
  whatToDo.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

// Ask question clicked
btnAskQuestion.addEventListener('click', e => {
  // window.removeEventListener("scroll", showQuestionBtn);
  btnAskQuestion.classList.add('hidden')
  moduleQuestions.classList.remove('hidden')
  moduleStepOne.classList.remove('hidden')
  document.body.classList.add('dark-overlay')
  moduleQuestionTextarea.focus()

  document.body.addEventListener('click', function closeQuestionModule(e) {
    // moduleHorizontalCloseBtn
    if (
      (!btnAskQuestion.contains(e.target) &&
        e.target !== btnAskQuestion &&
        !moduleQuestions.contains(e.target) &&
        e.target !== moduleQuestions) ||
      (e.target === btnAskQuestion && btnAskQuestion.contains(e.target))
    ) {
      // Close question module
      btnAskQuestion.classList.remove('hidden')
      moduleQuestions.classList.add('hidden')
      moduleStepOne.classList.add('hidden')
      document.body.classList.remove('dark-overlay')
      document.body.removeEventListener('click', closeQuestionModule)
    }

    e.preventDefault()
  })

  // Telegram clicked
  telegramBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')

      moduleStepTwoTitle.innerHTML = 'Telegram'
    }

    // Telegram -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Telegram / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Telegram -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Telegram / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Whatsapp clicked
  whatsappBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')
      moduleStepTwoTitle.innerHTML = 'Whats App'
    }

    // Whatsapp -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Whatsapp / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Whatsapp -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Whatsapp / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Viber clicked
  viberBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')
      moduleStepTwoTitle.innerHTML = 'Viber'
    }

    // Viber -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Viber / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Viber -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Viber / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Vk clicked
  vkBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')
      moduleStepTwoTitle.innerHTML = 'VK'
    }

    // VK -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'VK / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // VK -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'VK / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Phone button clicked
  phoneBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.remove('hidden')
      moduleStepThreeTitle.innerHTML = 'Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()
    }

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Email button clicked
  emailBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.remove('hidden')
      moduleStepThreeTitle.innerHTML = 'Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой e-mail'
      moduleInputContactInfo.placeholder = 'example@gmail.com'
      moduleInputContactInfo.type = 'email'
      moduleInputContactInfo.focus()
    }

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')
      moduleStepThree.classList.add('hidden')

      e.preventDefault()
    })

    e.preventDefault()
  })

  // Submit btn clicked
  moduleBtnSubmit.addEventListener('click', function submitQuestionModule(e) {
    if (moduleInputContactInfo.type === 'email') {
      // todo: validate email
      if (moduleInputContactInfo.value === '') {
        moduleInputContactInfo.classList.add('bg-danger')
        setTimeout(() => {
          moduleInputContactInfo.classList.remove('bg-danger')
        }, 1500)
      } else {
        moduleStepThree.classList.add('hidden')
        moduleStepTwo.classList.add('hidden')
        moduleStepOne.classList.add('hidden')
        moduleStepSuccess.classList.remove('hidden')
        window.history.pushState({ page_id: 6 }, '', '?thankyou=question')

        // Submit
        const question = moduleQuestionTextarea.value.trim()
        const contactWay = moduleStepThreeTitle.innerText.trim()
        const contact = moduleInputContactInfo.value.trim()

        // const googleClientId = ga.getAll()[0].get('clientId');
        const googleClientId = '-'

        let number

        let double = checkForUniqueUserNum()

        const data = {
          number,
          question,
          contactWay,
          contact,
          userCity,
          userCountry,
          googleClientId,
          userDevice,
          utmSource,
          utmMedium,
          utmCampaign,
          utmContent,
          utmTerm,
          double
        }

        if (
          data.contact !== '' &&
          data.contact !== null &&
          !data.contact.includes('@')
        ) {
          data.number = data.contact
          data.contact = '-'
        }

        sumbitData(data)

        setTimeout(() => {
          moduleStepSuccess.classList.add('hidden')
          btnAskQuestion.classList.remove('hidden')

          // console.log(sectionAskQuestionsInner.innerHTM);
          oneMoreQuestionText.innerText = 'ещё один'
          const sectionAskQuestionInnerSaver =
            sectionAskQuestionsInner.innerHTML
          // console.log(sectionAskQuestionInnerSaver);
          sectionAskQuestionsInner.innerHTML = 'Спасибо! Мы с вами свяжемся!'
          setTimeout(() => {
            sectionAskQuestionsInner.innerHTML = sectionAskQuestionInnerSaver
          }, 3000)

          moduleQuestions.classList.add('hidden')
          document.body.classList.remove('dark-overlay')
          // document.body.removeEventListener("click", closeQuestionModule);
          moduleBtnSubmit.removeEventListener('click', submitQuestionModule)
        }, 3000)
      }
    } else {
      if (
        moduleInputContactInfo.value.trim() !== '' &&
        moduleInputContactInfo.value.trim().match(numValidation)
      ) {
        moduleStepThree.classList.add('hidden')
        moduleStepTwo.classList.add('hidden')
        moduleStepOne.classList.add('hidden')
        moduleStepSuccess.classList.remove('hidden')
        window.history.pushState({ page_id: 7 }, '', '?thankyou=question')

        moduleStepSuccess.classList.add('showed')

        // Submit
        const question = moduleQuestionTextarea.value.trim()
        const contactWay = moduleStepThreeTitle.innerText.trim()
        const contact = moduleInputContactInfo.value.trim()

        // const googleClientId = ga.getAll()[0].get('clientId');
        const googleClientId = '-'

        let number

        let double = checkForUniqueUserNum()

        const data = {
          number,
          question,
          contactWay,
          contact,
          userCity,
          userCountry,
          googleClientId,
          userDevice,
          utmSource,
          utmMedium,
          utmCampaign,
          utmContent,
          utmTerm,
          double
        }

        if (
          data.contact !== '' &&
          data.contact !== null &&
          !data.contact.includes('@')
        ) {
          data.number = data.contact
          data.contact = '-'
        }

        sumbitData(data)

        setTimeout(() => {
          moduleStepSuccess.classList.add('hidden')
          btnAskQuestion.classList.remove('hidden')

          moduleStepSuccess.classList.remove('showed')

          // console.log(sectionAskQuestionsInner.innerHTM);
          oneMoreQuestionText.innerText = 'ещё один'
          const sectionAskQuestionInnerSaver =
            sectionAskQuestionsInner.innerHTML
          // console.log(sectionAskQuestionInnerSaver);
          sectionAskQuestionsInner.innerHTML = 'Спасибо! Мы с вами свяжемся!'
          setTimeout(() => {
            sectionAskQuestionsInner.innerHTML = sectionAskQuestionInnerSaver
          }, 3000)

          moduleQuestions.classList.add('hidden')
          document.body.classList.remove('dark-overlay')
          // document.body.removeEventListener("click", closeQuestionModule);
          moduleBtnSubmit.removeEventListener('click', submitQuestionModule)
        }, 3000)
      } else {
        moduleInputContactInfo.classList.add('bg-danger')

        if (moduleInputContactInfo.type === 'email') {
          // todo: validate email
        } else {
          moduleInputContactInfo.addEventListener('keyup', e => {
            // console.log("event keyup");
            if (
              moduleInputContactInfo.value.trim() !== '' &&
              moduleInputContactInfo.value.trim().match(numValidation)
            ) {
              // console.log("correct");
              moduleInputContactInfo.classList.remove('bg-danger')
            } else {
              // console.log("wrong");
              moduleInputContactInfo.classList.add('bg-danger')
            }

            e.preventDefault()
          })
        }
      }
    }

    e.preventDefault()
  })

  e.preventDefault()
})

// Pop up btns
function showPopUp(button = '') {
  const buttonSelected = document.getElementById(button)
  buttonSelected.addEventListener('click', e => {
    const popupFormTitle = document.getElementById('pop-up-form-title')
    const popupFormInfo = document.getElementById('popup-form-info')

    const popUpFormSubmit = document.getElementById('pop-up-form-submit')

    switch (button) {
      case 'learn-more-btn':
        // console.log('Узнайте подробнее о вузах');
        popupFormTitle.innerHTML = 'Узнайте больше о наших вузах-партнерах'
        popupFormInfo.innerHTML =
          'Оставьте свои контакты, консультант приемной комиссии подробно расскажет Вам о вузах и подберет программу!'
        popUpFormSubmit.dataset.form = 'learn-more'
        break
      case 'js-popup-choose-from-many':
        // console.log('Узнайте о наличии своего направления');
        popupFormTitle.innerHTML = `Узнайте о наличии <br />своего направления`
        popupFormInfo.innerHTML =
          'Оставьте свои контакты, менеджер свяжется с Вами и расcкажет на какие направления сейчас идет набор'
        popUpFormSubmit.dataset.form = 'choose-from-many'
        break
      case 'js-popup-what-to-do':
        // console.log('Узнайте что делать если нет ЕГЭ');

        popupFormInfo.innerHTML =
          'Оставьте свои контакты, менеджер свяжется с Вами и расскажет как можно поступить без ЕГЭ и диплома колледжа '
        if (window.screen.width < 371) {
          popupFormTitle.innerHTML =
            'Как поступить без ЕГЭ или диплома колледжа'
        } else {
          popupFormTitle.innerHTML =
            'Узнайте, что делать, если нет ЕГЭ и диплома колледжа'
        }
        popUpFormSubmit.dataset.form = 'what-to-do'
        break
      case 'main-popup-btn':
        // console.log('Узнайте что делать если нет ЕГЭ');
        popupFormTitle.innerHTML = 'Заявка на консультацию'
        popupFormInfo.innerHTML =
          'Менеджер расскажет о ВУЗах-партнерах, скидках и подберет программу обучения.'
        popUpFormSubmit.dataset.form = 'main'
        break
      case 'show-pop-up-bottom-mobile':
        // console.log('Узнайте что делать если нет ЕГЭ');
        popupFormTitle.innerHTML = 'Заявка на консультацию'
        popupFormInfo.innerHTML =
          'Менеджер расскажет о ВУЗах-партнерах, скидках и подберет программу обучения.'
        popUpFormSubmit.dataset.form = 'main'
        break
      default:
        return
    }

    showPopUpContant()

    submitPopUpForm()

    closePopUpContant()

    e.preventDefault()
  })
}

showPopUp('show-pop-up-bottom-mobile')
showPopUp('main-popup-btn')
showPopUp('learn-more-btn')
showPopUp('js-popup-choose-from-many')
showPopUp('js-popup-what-to-do')

function showPopUpContant() {
  const moduleForm = document.getElementById('module-popup-form')
  moduleForm.classList.add('show')
  btnAskQuestion.classList.add('hidden')
}

function closePopUpContant() {
  const moduleForm = document.getElementById('module-popup-form')
  const popUpForm = document.getElementById('pop-up-form')
  const learnMoreBtn = document.getElementById('learn-more-btn')
  const learnMoreBtn2 = document.getElementById('js-popup-choose-from-many')
  const learnMoreBtn3 = document.getElementById('js-popup-what-to-do')
  const learnMoreBtn4 = document.getElementById('main-popup-btn')
  const learnMoreBtn5 = document.getElementById('show-pop-up-bottom-mobile')
  document.body.addEventListener('click', function closePopUpContactEvent(e) {
    // console.log(e.target);
    if (
      moduleForm.classList.contains('show') &&
      e.target !== popUpForm &&
      !popUpForm.contains(e.target) &&
      e.target !== learnMoreBtn &&
      !learnMoreBtn.contains(e.target) &&
      e.target !== learnMoreBtn2 &&
      !learnMoreBtn2.contains(e.target) &&
      e.target !== learnMoreBtn3 &&
      !learnMoreBtn3.contains(e.target) &&
      e.target !== learnMoreBtn4 &&
      !learnMoreBtn4.contains(e.target) &&
      e.target !== learnMoreBtn5 &&
      !learnMoreBtn5.contains(e.target)
    ) {
      // console.log(e.target);
      moduleForm.classList.remove('show')
      btnAskQuestion.classList.remove('hidden')
      document.body.removeEventListener('click', closePopUpContactEvent)
    }
  })
}

function popUpFormSubmitFunc(e) {
  const popUpFormSubmit = document.getElementById('pop-up-form-submit')
  const moduleForm = document.getElementById('module-popup-form')
  e.preventDefault()

  // Submit
  const userName = document.getElementById('pop-up-form-name').value.trim()
  const userNameEl = document.getElementById('pop-up-form-name')
  const number = document.getElementById('pop-up-form-number').value.trim()
  const numberEl = document.getElementById('pop-up-form-number')

  // const googleClientId = ga.getAll()[0].get('clientId');
  const googleClientId = '-'

  let question = ''
  let double = checkForUniqueUserNum()

  if (popUpFormSubmit.dataset.form === 'choose-from-many') {
    question = 'Огромный выбор специальностей'
  } else if (popUpFormSubmit.dataset.form === 'learn-more') {
    question = 'Узнайте подробнее о ВУЗах'
  } else if (popUpFormSubmit.dataset.form === 'what-to-do') {
    question = 'Нет ЕГЭ или диплома колледжа?'
  } else if (popUpFormSubmit.dataset.form === 'main') {
    question = 'Главная'
  }

  const data = {
    number,
    question,
    userName,
    userCity,
    userCountry,
    googleClientId,
    userDevice,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
    double
  }

  if (
    number !== '' &&
    number !== null &&
    number !== undefined &&
    number.match(numValidation)
  ) {
    const appIsSumbitted = document.getElementById(
      'js-app-is-submitted--learn-more'
    )
    // const popUpFormSubmit = document.getElementById('pop-up-form-submit');

    if (popUpFormSubmit.dataset.form === 'choose-from-many') {
      // appIsSumbitted.id = 'popup--is-submitted-choose-from-many';
      window.history.pushState({ page_id: 1 }, '', '?thankyou=choose-from-many')
    } else if (popUpFormSubmit.dataset.form === 'learn-more') {
      // appIsSumbitted.id = 'popup--is-submitted-learn-more';
      window.history.pushState({ page_id: 2 }, '', '?thankyou=learn-more')
    } else if (popUpFormSubmit.dataset.form === 'what-to-do') {
      // appIsSumbitted.id = 'popup--is-submitted-what-to-do';
      window.history.pushState({ page_id: 3 }, '', '?thankyou=what-to-do')
    } else if (popUpFormSubmit.dataset.form === 'main') {
      // appIsSumbitted.id = 'popup--is-submitted-main';
      window.history.pushState({ page_id: 9 }, '', '?thankyou=main')
    }

    appIsSumbitted.classList.add('showed')

    document
      .getElementById('step-success-row__back-to-main--form-popup')
      .addEventListener('click', e => {
        // appIsSumbitted.id = 'js-app-is-submitted--learn-more';
        appIsSumbitted.classList.add('removing')
        setTimeout(() => {
          appIsSumbitted.classList.remove('showed')
          appIsSumbitted.classList.remove('removing')
        }, 300)

        e.preventDefault()
      })

    const success = document.getElementById('module-popup-is-submitted')
    success.classList.remove('hidden')
    sumbitData(data)
    moduleForm.classList.remove('show')
    userNameEl.value = ''
    numberEl.value = ''
  } else {
    numberEl.classList.add('bg-danger')
    numberEl.focus()
    numberEl.addEventListener('keyup', e => {
      e.target.value !== ''
        ? numberEl.classList.remove('bg-danger')
        : numberEl.classList.add('bg-danger')
    })
  }
}

// Submit Data from Forms
function submitPopUpForm() {
  const popUpFormSubmit = document.getElementById('pop-up-form-submit')
  const moduleForm = document.getElementById('module-popup-form')

  popUpFormSubmit.addEventListener('click', popUpFormSubmitFunc)
}

function submitContactForm() {
  const popUpFormSubmit = document.getElementById('submit-btn-contact-form')
  popUpFormSubmit.addEventListener('click', e => {
    e.preventDefault()

    // Submit
    const userName = document
      .getElementById('user-name-contact-from')
      .value.trim()
    const userNameEl = document.getElementById('user-name-contact-from')
    const number = document.getElementById('number-contact-form').value.trim()
    const numberEl = document.getElementById('number-contact-form')

    // const googleClientId = ga.getAll()[0].get('clientId');
    const googleClientId = '-'
    let double = checkForUniqueUserNum()

    const question = 'Возникли вопросы? Поможем!'

    const data = {
      number,
      question,
      userName,
      userCity,
      userCountry,
      googleClientId,
      userDevice,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      double
    }

    if (
      number !== '' &&
      number !== null &&
      number !== undefined &&
      number.match(numValidation)
    ) {
      const success = document.getElementById('footer-form-is-submitted')
      success.classList.remove('hidden')
      sumbitData(data)
      numberEl.value = ''
      userNameEl.value = ''
      window.history.pushState({ page_id: 5 }, '', '?thankyou=question')
    } else {
      numberEl.classList.add('bg-danger')
      numberEl.focus()
      numberEl.addEventListener('keyup', e => {
        e.target.value !== ''
          ? numberEl.classList.remove('bg-danger')
          : numberEl.classList.add('bg-danger')
      })
    }
  })
}

submitContactForm()

// AreThereQuestions
function submitQuestionsForm() {
  const popUpFormSubmit = document.getElementById(
    'submit-btn-contact-form-are-there-questions'
  )
  popUpFormSubmit.addEventListener('click', e => {
    e.preventDefault()

    // Submit
    const userName = document
      .getElementById('user-name-are-there-questions')
      .value.trim()
    const userNameEl = document.getElementById('user-name-are-there-questions')
    const number = document
      .getElementById('phone-are-there-questions')
      .value.trim()
    const numberEl = document.getElementById('phone-are-there-questions')

    // const googleClientId = ga.getAll()[0].get('clientId');
    const googleClientId = '-'

    const question = 'Возникли вопросы? Поможем!'

    let double = checkForUniqueUserNum()

    const data = {
      number,
      question,
      userName,
      userCity,
      userCountry,
      googleClientId,
      userDevice,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      double
    }

    if (
      number !== '' &&
      number !== null &&
      number !== undefined &&
      number.match(numValidation)
    ) {
      const success = document.getElementById(
        'are-there-questions-form-is-submitted'
      )
      success.classList.remove('hidden')
      sumbitData(data)
      numberEl.value = ''
      userNameEl.value = ''
      window.history.pushState({ page_id: 4 }, '', '?thankyou=question')
    } else {
      numberEl.classList.add('bg-danger')
      numberEl.focus()
      numberEl.addEventListener('keyup', e => {
        e.target.value !== ''
          ? numberEl.classList.remove('bg-danger')
          : numberEl.classList.add('bg-danger')
      })
    }
  })
}

submitQuestionsForm()

// Hide ask question on the top of the page and on the bottom of the page
btnAskQuestion.classList.add('hidden')
document.addEventListener('scroll', e => {
  const popUpForm = document.getElementById('module-popup-form')
  // moduleQuestions
  // console.log(window.scrollY);
  if (
    moduleQuestions.classList.contains('hidden') &&
    !popUpForm.classList.contains('show') &&
    menuToggler.checked === false
  ) {
    // if (window.scrollY >= 300)
    // {
    //   btnAskQuestion.classList.remove('hidden');
    // }else{
    //   btnAskQuestion.classList.add('hidden');
    // }
    if (
      window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 500 ||
      window.scrollY < 300
    ) {
      btnAskQuestion.classList.add('hidden')
    } else {
      btnAskQuestion.classList.remove('hidden')
    }
  }
})

const crossPopUpModule = document.getElementById('cross-close-popup-form')
crossPopUpModule.addEventListener('click', () => {
  document.getElementById('module-popup-form').classList.remove('show')
})

function retractableItems() {
  const titles = Array.from(
    document.querySelectorAll('.section__content .step__title')
  )
  titles[0].nextElementSibling.classList.add('show')
  titles.forEach((title, index) => {
    const arrowUp = title.childNodes[0].childNodes[0]
    const arrowDown = title.childNodes[0].childNodes[1]

    index === 0
      ? arrowUp.classList.add('show')
      : arrowDown.classList.add('show')

    title.addEventListener('click', () => {
      if (title.nextElementSibling.classList.contains('show')) {
        title.nextElementSibling.classList.remove('show')

        arrowUp.classList.remove('show')
        arrowDown.classList.add('show')
      } else {
        title.nextElementSibling.classList.add('show')

        arrowUp.classList.add('show')
        arrowDown.classList.remove('show')
      }
    })
  })
}

retractableItems()

// Swiper
/*!
 * swiped-events.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
;(function (window, document) {
  'use strict'

  // patch CustomEvent to allow constructor creation (IE/Chrome)
  if (typeof window.CustomEvent !== 'function') {
    window.CustomEvent = function (event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      }

      var evt = document.createEvent('CustomEvent')
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      )
      return evt
    }

    window.CustomEvent.prototype = window.Event.prototype
  }

  document.addEventListener('touchstart', handleTouchStart, false)
  document.addEventListener('touchmove', handleTouchMove, false)
  document.addEventListener('touchend', handleTouchEnd, false)

  var xDown = null
  var yDown = null
  var xDiff = null
  var yDiff = null
  var timeDown = null
  var startEl = null

  /**
   * Fires swiped event if swipe detected on touchend
   * @param {object} e - browser event object
   * @returns {void}
   */
  function handleTouchEnd(e) {
    // if the user released on a different target, cancel!
    if (startEl !== e.target) return

    var swipeThreshold = parseInt(
      getNearestAttribute(startEl, 'data-swipe-threshold', '20'),
      10
    ) // default 20px
    var swipeTimeout = parseInt(
      getNearestAttribute(startEl, 'data-swipe-timeout', '500'),
      10
    ) // default 500ms
    var timeDiff = Date.now() - timeDown
    var eventType = ''
    var changedTouches = e.changedTouches || e.touches || []

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // most significant
      if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
        if (xDiff > 0) {
          eventType = 'swiped-left'
        } else {
          eventType = 'swiped-right'
        }
      }
    } else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
      if (yDiff > 0) {
        eventType = 'swiped-up'
      } else {
        eventType = 'swiped-down'
      }
    }

    if (eventType !== '') {
      var eventData = {
        dir: eventType.replace(/swiped-/, ''),
        xStart: parseInt(xDown, 10),
        xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
        yStart: parseInt(yDown, 10),
        yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
      }

      // fire `swiped` event event on the element that started the swipe
      startEl.dispatchEvent(
        new CustomEvent('swiped', {
          bubbles: true,
          cancelable: true,
          detail: eventData
        })
      )

      // fire `swiped-dir` event on the element that started the swipe
      startEl.dispatchEvent(
        new CustomEvent(eventType, {
          bubbles: true,
          cancelable: true,
          detail: eventData
        })
      )
    }

    // reset values
    xDown = null
    yDown = null
    timeDown = null
  }

  /**
   * Records current location on touchstart event
   * @param {object} e - browser event object
   * @returns {void}
   */
  function handleTouchStart(e) {
    // if the element has data-swipe-ignore="true" we stop listening for swipe events
    if (e.target.getAttribute('data-swipe-ignore') === 'true') return

    startEl = e.target

    timeDown = Date.now()
    xDown = e.touches[0].clientX
    yDown = e.touches[0].clientY
    xDiff = 0
    yDiff = 0
  }

  /**
   * Records location diff in px on touchmove event
   * @param {object} e - browser event object
   * @returns {void}
   */
  function handleTouchMove(e) {
    if (!xDown || !yDown) return

    var xUp = e.touches[0].clientX
    var yUp = e.touches[0].clientY

    xDiff = xDown - xUp
    yDiff = yDown - yUp
  }

  /**
   * Gets attribute off HTML element or nearest parent
   * @param {object} el - HTML element to retrieve attribute from
   * @param {string} attributeName - name of the attribute
   * @param {any} defaultValue - default value to return if no match found
   * @returns {any} attribute value or defaultValue
   */
  function getNearestAttribute(el, attributeName, defaultValue) {
    // walk up the dom tree looking for data-action and data-trigger
    while (el && el !== document.documentElement) {
      var attributeValue = el.getAttribute(attributeName)

      if (attributeValue) {
        return attributeValue
      }

      el = el.parentNode
    }

    return defaultValue
  }
})(window, document)

// document.addEventListener('swiped-left', function(e) {
//   // console.log(e.target); // the element that was swiped
//   console.log('Влево');
// });

// document.addEventListener('swiped-right', function(e) {
//   // console.log(e.target); // the element that was swiped
//   console.log('Вправо');
// });

function coolCarousel() {
  const carousel = document.querySelector(
    '.section-trust-boost .content__img-group'
  )
  let i = 0
  let val = i + 'rem'

  const firstDot = document.querySelector(
    '.nav-dots .nav-dots__dot:nth-child(1)'
  )
  const secondDot = document.querySelector(
    '.nav-dots .nav-dots__dot:nth-child(2)'
  )
  const thirdDot = document.querySelector(
    '.nav-dots .nav-dots__dot:nth-child(3)'
  )

  firstDot.classList.add('active')

  carousel.addEventListener('swiped-right', e => {
    const currentRightVal = Number(carousel.style.right.slice(0, -3))
    if (currentRightVal > 0) {
      i -= 8
      val = i + 'rem'
      carousel.style.right = val

      // console.log(currentRightVal)

      if (currentRightVal < 24) {
        firstDot.classList.add('active')
        secondDot.classList.remove('active')
        thirdDot.classList.remove('active')
      } else if (currentRightVal <= 48) {
        firstDot.classList.remove('active')
        secondDot.classList.add('active')
        thirdDot.classList.remove('active')
      } else {
        firstDot.classList.remove('active')
        secondDot.classList.remove('active')
        thirdDot.classList.add('active')
      }
    }
  })
  carousel.addEventListener('swiped-left', e => {
    const currentRightVal = Number(carousel.style.right.slice(0, -3))
    if (currentRightVal < 80) {
      i += 8
      val = i + 'rem'
      carousel.style.right = val

      // console.log(currentRightVal)

      if (currentRightVal < 24) {
        firstDot.classList.add('active')
        secondDot.classList.remove('active')
        thirdDot.classList.remove('active')
      } else if (currentRightVal <= 48) {
        firstDot.classList.remove('active')
        secondDot.classList.add('active')
        thirdDot.classList.remove('active')
      } else {
        firstDot.classList.remove('active')
        secondDot.classList.remove('active')
        thirdDot.classList.add('active')
      }
    }
  })
}

coolCarousel()
