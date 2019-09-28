import React from 'react'
import Link from 'next/link'
import Brafe from '../img/brafe.png'

const links = [
  { href: '#', label: 'Sobre' },
  { href: '#', label: 'Produtos' },
  { href: '#', label: 'Portifólio'},
  { href: '#', label: 'Contato'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <header>
    <div>
      <a href='#' ><img src={Brafe}/></a>
    </div>
    <nav>
    <ul>
      {/* <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li> */}
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    {/* <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style> */}
  </nav>
  </header>
 )

export default Nav
