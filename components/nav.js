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
  <header className='menu'>
    <div className="menu-container">
      <a href='#' className="menu-logo"><img src={Brafe}/></a>
      <nav className="menu-nav">
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
      </nav>
    </div>
  <style jsx>{`
    .menu {
        background: #252525;
        padding: 20px 0;
    }
    .menu-container {
      max-width: 960px;
      margin: 0 auto;
    }

    @media (max-width: 739px) {
      .menu {
        text-align: center;
      }
      .menu nav {
        float: none;
        clear: both;
      }
    }

    .menu-container::after, .menu-container::before {
      content: '';
      display: table;
      clear: both;
    }
      a.menu-logo{
      display: block;
      float: left;
      margin-left: 10px;
    }
    nav.menu-nav {
      float: right;
      margin-right: 10px;
    }

    .menu-nav li {
      display: inline-block;
    }

    .menu-nav a {
      display: block;
      padding: 10px;
      text-decoration: none;
      color: #fff;
      font-size: 1.125em;
    }

    `}</style>
  </header>
 )

export default Nav
//clear fix
// .menu-container::after, .menu-container::before {
//   content: '';
//   display: table;
//   clear: both;
// }
