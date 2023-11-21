export default function AuthRole({ label }: { label: 'ADMIN' | 'USER' }) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="47"
        viewBox="0 0 134 47"
        fill="none"
      >
        <g filter="url(#filter0_d_7574_5103)">
          <path
            d="M16.7447 8.03571L128 2L101.191 34.5L2 41L16.7447 8.03571Z"
            fill="#DC2626"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_7574_5103"
            x="0"
            y="0"
            width="134"
            height="47"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_7574_5103"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_7574_5103"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="absolute top-2 left-8 text-xl text-white [font-family:Helvetica_Neue_Bold]">
        {label}
      </div>
    </div>
  )
}
