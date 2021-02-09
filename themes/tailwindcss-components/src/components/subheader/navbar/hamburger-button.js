import React, { useContext } from 'react'
import { NavContext } from 'c32-gatsby-theme-core'

const Span = ({ open }) => <span />

const SiteMobileButton = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  return (
    <button
      type="button"
      aria-label="Toggle Menu"
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <Span open={isNavOpen} />
      <Span open={isNavOpen} />
      <Span open={isNavOpen} />
    </button>
  )
}

export default SiteMobileButton
