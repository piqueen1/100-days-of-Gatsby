import * as React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const NavItem = Styled(Link)`
  text-decoration: none;
  color: #663399;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: black;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: black;
    text-transform: uppercase;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

// markup
const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>About Page</title>
      <h1 style={headingStyles}>
        Welcome to my About page
        <br />
        <span style={headingAccentStyles}>— I am a hot momma developer! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About Us</NavItem>
      <NavItem to="/chico">Chico</NavItem>
      <NavItem to="/redding">Redding</NavItem>
      <NavItem to="/sacramento">Sacramento</NavItem>
    </main>
  )
}

export default AboutPage
