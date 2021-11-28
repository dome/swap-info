import React from 'react'

// todo: change link
const Attribution = () => (
  <p className="attribution">
    <a href="https://github.com/SashimiProject/sashimis-swap-info" rel="noopener noreferrer" target="_blank">
      Github
    </a>{' '}
    |{' '}
    <a href={`https://${process.env.REACT_APP_HOMEPAGE_URL}/`} rel="noopener noreferrer" target="_blank">
      Sashimi
    </a>{' '}
    |{' '}
    <a href="https://gifer.com/en/1Atv" rel="noopener noreferrer" target="_blank">
      GIF
    </a>
  </p>
)

export default Attribution
