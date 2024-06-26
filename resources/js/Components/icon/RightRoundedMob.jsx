export default function RightRoundedMob({ color, ...props }) {
  return (
    <svg
      {...props}
      width='113'
      height='117'
      viewBox='0 0 113 117'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M59.1415 117C59.1913 85.8682 83.135 61.5685 113 61.0755V0L108.74 0.0798416C91.2746 1.16452 78.1462 4.72845 64.239 11.5464C57.1768 15.0118 48.5618 20.4822 42.912 25.3609C39.055 28.6947 35.3745 31.8079 31.9973 35.5127C15.0117 54.1495 0.49345 79.8344 0 116.995L59.1415 116.995V117Z'
        fill={color}
      />
    </svg>
  );
}
