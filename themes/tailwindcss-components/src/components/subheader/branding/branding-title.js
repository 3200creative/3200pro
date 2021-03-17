import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { useSiteMetadata, NavContext } from 'c32-gatsby-theme-core'

const SiteTitle = () => {
  const { title } = useSiteMetadata()
  const [isNavOpen] = useContext(NavContext)

  return (
    <Link to="/" sx={{ textDecoration: 'none' }}>
      <h1 as="span">{title}</h1>
    </Link>
  )
}

export default SiteTitle
