import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'c32-gatsby-theme-core'

const SiteLogo = () => {
  const { title, logo } = useSiteMetadata()

  return (
    <Link to="/">
      <img src={logo} alt={title} imgStyle={{ objectFit: 'contain' }} />
    </Link>
  )
}

export default SiteLogo
