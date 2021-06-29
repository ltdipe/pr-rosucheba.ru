const IconLocation = ({ light = false }) => {
  return (
    <svg
      width='16'
      height='24'
      viewBox='0 0 16 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        className={!light ? 'icon_path__stroke-1' : undefined}
        d='M8.22217 11.25C9.87902 11.25 11.2222 9.90685 11.2222 8.25C11.2222 6.59315 9.87902 5.25 8.22217 5.25C6.56531 5.25 5.22217 6.59315 5.22217 8.25C5.22217 9.90685 6.56531 11.25 8.22217 11.25Z'
        stroke={light ? '#fff' : '#FF6600'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        className={!light ? 'icon_path__stroke-1' : undefined}
        d='M14.2222 11.25C11.9722 16.5 8.22217 22.5 8.22217 22.5C8.22217 22.5 4.47217 16.5 2.22217 11.25C-0.0278318 6 3.72217 1.5 8.22217 1.5C12.7222 1.5 16.4722 6 14.2222 11.25Z'
        stroke={light ? '#fff' : '#FF6600'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default IconLocation
