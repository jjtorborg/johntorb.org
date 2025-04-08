import * as React from "react"
const NextJsIcon = (props) => (
  <svg
    width={32}
    height={32}
    aria-label="Next.js logomark"
    className="next-mark_root__iLw9v"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="url(#b)"
      d="M24.568 26.448 10.343 7.6H7.6v12.792h2.152v-9.6l13.184 17.28a16.064 16.064 0 0 0 1.632-1.344Z"
    />
    <path fill="url(#c)" d="M18.48 7.6h2.4v14.4h-2.4z" />
    <defs>
      <linearGradient
        id="b"
        x1={17.36}
        x2={23.6}
        y1={18.8}
        y2={26.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--foreground)" />
        <stop offset={1} stopColor="var(--foreground)" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={19.6}
        x2={19.6}
        y1={7.6}
        y2={17.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--foreground)" />
        <stop offset={1} stopColor="var(--foreground)" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default NextJsIcon
