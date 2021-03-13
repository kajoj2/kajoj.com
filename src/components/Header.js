import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';
import { animation, colors, fonts, media } from '../tokens';
import Search from './Search';

const Header = styled('header')`
  background-color: ${colors.lightest};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  ::before,
  ::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    height: 1px;
    width: calc(100% - 45px);
    z-index: 1;
  }

  ::before {
    top: calc(100% - 1px);
    background-color: ${colors.primary};
  }

  ::after {
    top: 100%;
    background-color: ${colors.grayAlpha};
  }
`;

const SkipToContent = styled('a')`
  transition: none;

  :focus,
  :active,
  :hover {
    clip: auto;
    width: auto;
    height: auto;
    background-color: ${colors.lightest};
    border: 2px solid ${colors.darkest};
    border-radius: 0;
    color: ${colors.darkest};
    padding: 0.5rem 1rem;
    z-index: 5000;
  }
`;

const Nav = styled('nav')`
  display: flex;
  font-size: 0.875rem;
  justify-content: flex-start;
  margin: 0;
  position: relative;
  z-index: 5;

  @media ${media.small} {
    font-size: 1rem;
  }
`;

const NavLink = styled(Link)`
  border: 2px solid transparent;
  border-radius: 0;
  color: ${colors.darkest};
  font-family: ${fonts.heading};
  font-weight: 900;
  line-height: 1.25;
  margin: 0;
  padding: calc(0.5rem - 2px) 0.25rem;
  text-decoration: none;
  text-transform: uppercase;
  transition-property: color;

  &.active {
    color: ${colors.primary};
  }

  &.hiddenSmall {
    display: none;

    @media (min-width: 414px) {
      display: inline-block;
    }
  }

  @media ${media.small} {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  :focus,
  :active,
  :hover {
    background-color: transparent;
    border-radius: 0;
    color: ${colors.primaryDark};
  }

  :focus {
    border-color: ${colors.darkest};
  }
`;

const EndLinkDiv = styled('div')`
    margin-left: auto;
    margin-top: 0;
    padding: calc(0.5rem - 2px) 0.25rem;
`;

const NavEndLink = styled(NavLink)`
    margin-left: auto;

`;

const LogoLink = styled(NavLink)`
  border: 0;
  margin-right: 0.5rem;
  min-width: 42px;
  padding: 0;
  position: relative;
  width: 42px;
  z-index: 10;

  @media ${media.small} {
    padding: 0;
  }


  :focus,
  :active,
  :hover {
    outline: 0;
  }

  :focus {
    ::after {
      opacity: 1;
    }
  }
`;

const Logo = styled('img')`
  padding: calc(0.5rem - 2px) 0.25rem;
  position: absolute;
  width: 45px;
  z-index: 2;
`;

const topLevelNav = [
  {
    href: '/blog/',
    label: 'Blog',
  },
  {
    href: '/about/',
    label: 'About',
  },
  // {
  //   href: '/newsletter/',
  //   label: 'Newsletter',
  // },
];

export default () => (
  <Header role="banner">
    <SkipToContent
      href="#content"
      id="skip-navigation"
      className="screen-reader-text"
    >
      Skip to Content
    </SkipToContent>
    <Nav>
      <LogoLink to="/">
        <Logo
          src={logo}
          alt="Furwers"
          // This keeps the logo from flashing at full-width on fresh loads.
          style={{ maxWidth: '42px' }}
        />
      </LogoLink>
      {topLevelNav.map(({ href, label, extraClass = '' }) => (
        <NavLink
          key={label}
          to={href}
          className={`${extraClass} text-sharp`}
          activeClassName="active"
        >
          {label}
        </NavLink>
      ))}
      <EndLinkDiv>

      <NavEndLink
          key='about'
          to='/about'
          className={`text-sharp`}
          activeClassName="active"      
      >
        Me
      </NavEndLink>
      </EndLinkDiv>

      {/* <Search /> */}
    </Nav>
  </Header>
);
