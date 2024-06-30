export default function LeftRoundedMob({ color, ...props }) {
  return (
    <svg
      {...props}
      width='117'
      height='113'
      viewBox='0 0 117 113'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 59.1415C31.1318 59.1913 55.4315 83.135 55.9245 113H117L116.92 108.74C115.835 91.2746 112.272 78.1462 105.454 64.239C101.988 57.1768 96.5178 48.5618 91.6391 42.912C88.3053 39.055 85.1921 35.3745 81.4873 31.9973C62.8505 15.0117 37.1656 0.49345 0.00470017 0V59.1415H0Z'
        fill={color}
      />
    </svg>
  );
}
