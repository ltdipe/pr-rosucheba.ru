const IconClock = ({ light = false }) => {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={!light ? 'icon_path__counter' : undefined}
        d='M10.2222 0C4.70817 0 0.222168 4.486 0.222168 10C0.222168 15.514 4.70817 20 10.2222 20C15.7362 20 20.2222 15.514 20.2222 10C20.2222 4.486 15.7362 0 10.2222 0ZM10.2222 18C5.81117 18 2.22217 14.411 2.22217 10C2.22217 5.589 5.81117 2 10.2222 2C14.6332 2 18.2222 5.589 18.2222 10C18.2222 14.411 14.6332 18 10.2222 18Z'
        fill={light ? '#fff' : '#FF6600'}
      />
      <path
        className={!light ? 'icon_path__counter' : undefined}
        d='M11.2222 5H9.22217V10.414L12.5152 13.707L13.9292 12.293L11.2222 9.586V5Z'
        fill={light ? '#fff' : '#FF6600'}
      />
    </svg>
  )
}

export default IconClock
