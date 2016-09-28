import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav} from 'react-bootstrap';

const NAV_LINKS = {
  '/': {
    link: '/',
    title: 'Главная'
  },
  services: {
    link: '/services.html',
    title: 'Услуги'
  },
  articles: {
    link: '/articles.html',
    title: 'Статьи'
  },
  support: {
    link: '/support.html',
    title: 'Консультация'
  },
  about: {
    link: '/about.html',
    title: 'О нас'
  }

};

// We don't want to include react-router-bootstrap as a dependency here, so we
// need to fudge our own `<NavItem>` substitutes, and hide unknown props from
// them.

function Wrapper({ children }) {
  return children;
}

const propTypes = {
  activePage: React.PropTypes.string
};

function NavMain({ activePage }) {
  let i = 0;
  return (
    <Navbar
      staticTop
      componentClass="header"
      className="app-nav"
      role="banner"
    >
      <Navbar.Header>
        <Navbar.Brand style={{
            width: '1px',
            paddingRight: '0px',
            paddingLeft: '0px'}}>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" />
      </Navbar.Header>
      <Navbar.Collapse className="bs-navbar-collapse">
       <nav role="navigation">
        <Nav id="top" className="app-navbar-nav">
          {Object.entries(NAV_LINKS).map(([linkName, { link, title }]) => (
            <Wrapper key={linkName}>
              <li className={linkName === activePage ? 'active' : null}>
                <Link style=
                        {{
                            backgroundPosition: '-5px '+(-1)*(5+(i++)*60)+'px'
                        }}
                      className="app-nav-link" to={link}>
                  {title}
                </Link>
              </li>
            </Wrapper>
          ))}
        </Nav>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavMain.propTypes = propTypes;

export default NavMain;
