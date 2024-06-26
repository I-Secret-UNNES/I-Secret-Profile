export default function XLogo({ color, ...props }) {
  return (
    <svg
      {...props}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1103_188)'>
        <path
          d='M25.2016 2H30.1088L19.3888 14.2L32 30.8H22.1248L14.392 20.7312L5.5424 30.8H0.6304L12.0976 17.752L0 2H10.1248L17.1168 11.2032L25.2016 2ZM23.48 27.8752H26.2L8.6464 4.7712H5.728L23.48 27.8752Z'
          style={{
            fill: color, // Warna default
            transition: 'fill 0.3s ease', // Animasi transisi
          }}
          onMouseEnter={e => (e.currentTarget.style.fill = 'red')}
          onMouseLeave={e => (e.currentTarget.style.fill = color)}
        />
      </g>
      <defs>
        <clipPath id='clip0_1103_188'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
