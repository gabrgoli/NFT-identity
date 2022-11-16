import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import { scrollToElement } from "../../utils/layout";

const StyledHeader = styled.header`
  width: 7%;
  background: transparent;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  border-right: 1px solid #000000;
  position: fixed;
  z-index: 11;
  max-height: 100vh!important;
  overflow: hidden!important;
  .logo-desktop {
   margin: 15px;
  }


  .logo-mobile {
    display: none;
  }

  nav {
    height: 100vh;
    a {
      transform: scale(-1);
      display: flex !important;
    }
  }

  button {
    max-width: 187.39px;
  }

  nav {
    display: flex !important;
    justify-content: space-around;
    a {
      display: none;
      white-space: nowrap;
      color: #000000;
      text-decoration: none;
    }
  }
`;

const MobileMenu = styled.header`
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  top: 0;
  left: 100%;
  transition: all 0.5s;
  z-index: 10;

  &.opened {
    left: 0;
  }

  button.close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 12px;
    height: 12px;

    background-color: transparent;
    border: none;
    background-image: url("/images/icons/close.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 65px;
    padding-top: 140px;

    .logo {
      margin-bottom: 40px;
    }
    a {
      color: #fff;
      font-size: 24px;
      line-height: 33px;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 32px;
      &:hover {
        text-decoration: underline;
      }
    }
    button {
      margin-top: auto;
    }
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setMobileMenuOpen(false);
  const openMenu = () => setMobileMenuOpen(true);

  return (
    <>
      <StyledHeader>
        <nav id="header">
          <span className="logo-mobile">
            <Image
              src="/images/logo/IAMX_Logo_Blue_1.svg"
              width={20}
              height={24}
              alt="NFT Maker logo"
            />
          </span>
          <div className="logo-desktop">
            <Image
              src="/images/logo/IAMX_Logo_Blue_1.svg"
              width={135}
              height={90}
              alt="NFT Maker logo"
            />
          </div>
          <a onClick={() => scrollToElement("view-get-started")}>Get started</a>
          <a onClick={() => scrollToElement("view-learn-more")}>Learn more</a>
        </nav>
      </StyledHeader>
      <MobileMenu className={mobileMenuOpen ? "opened" : ""}>
        <button className="close" onClick={closeMenu}></button>
        <nav>
          <span className="logo">
            <Image
              src="/images/logo/logo-big-gray.svg"
              width={133}
              height={24}
              alt="NFT Maker logo"
            />
          </span>
          <a
            onClick={() => {
              closeMenu();
              scrollToElement("view-get-started");
            }}
          >
            Get started
          </a>
          <a
            onClick={() => {
              closeMenu();
              scrollToElement("view-learn-more");
            }}
          >
            Learn more
          </a>

          <Button>Connect Wallet</Button>
        </nav>
      </MobileMenu>
    </>
  );
};

export default Header;
