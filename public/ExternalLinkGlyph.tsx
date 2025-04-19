import * as React from 'react'

const ExternalLinkGlyph = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={15}
    viewBox='0 0 256 256'
    {...props}
  >
    <path
      d='M53.333 32C41.674 32 32 41.674 32 53.333v149.334C32 214.326 41.674 224 53.333 224h149.334c11.659 0 21.333-9.674 21.333-21.333V128h-21.333v74.667H53.333V53.333H128V32zm96 0v21.333h38.25l-99.125 99.125 15.084 15.084 99.125-99.125v38.25H224V32z'
    />
  </svg>
)
export default ExternalLinkGlyph
