import styled from "styled-components";
import "../index.css";
import logo from "../assets/images/logo.svg";
import home from "../assets/images/home-icon.svg";
import search from "../assets/images/search-icon.svg";
import watchlist from "../assets/images/watchlist-icon.svg";
import originals from "../assets/images/original-icon.svg";
import movies from "../assets/images/movie-icon.svg";
import series from "../assets/images/series-icon.svg";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails, 
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
   }, [userName]);

   const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth , provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if(userName){
      auth
        .signOut().then(() => {
          dispatch(setSignOutState({}));
          history("/");
        })
        .catch((error) => alert(error.message));
    }
  };
  

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  // Add scrollToSection function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <Logo as={Link} to="/home">
          <img src={logo} alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
        <NavMenu>
          <a href="#home" onClick={e => { e.preventDefault(); scrollToSection('home'); }}>
            <img src={home} alt="HOME" />
            <span>HOME</span>
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px' }}>
            <img src={search} alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a href="#watchlist" onClick={e => { e.preventDefault(); scrollToSection('watchlist'); }}>
            <img src={watchlist} alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a href="#originals" onClick={e => { e.preventDefault(); scrollToSection('originals'); }}>
            <img src={originals} alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>
          <a href="#new-disney" onClick={e => { e.preventDefault(); scrollToSection('new-disney'); }}>
            <img src={movies} alt="MOVIES" />
            <span>MOVIES</span>
          </a>
          <a href="#trending" onClick={e => { e.preventDefault(); scrollToSection('trending'); }}>
            <img src={series} alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <SignOut>
          <UserImg src={userPhoto} alt={userName} />
          <DropDown>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  color: #f9f9f9;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;


const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position : absolute;
  top : 48px;
  right : 0px;
  background : rgb(19, 19, 19);
  border : 1px solid rgba(151, 151, 151, 0.34);
  border-radius : 4px;
  box-shadow : rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding : 10px;
  font-size : 14px;
  letter-spacing : 3px;
  width : 100px;
  opacity : 0;
  `;

const SignOut = styled.div`
  position : relative;
  height : 48px;
  width : 48px;
  display : flex;
  cursor : pointer;
  align-items : center;
  justify-content : center;

  ${UserImg} {
    border-radius : 50%;
    width : 100%;
    height : 100%;
  }

  &:hover {
    ${DropDown} {
      opacity : 1;
      transition-duration : 1s;
    }
  }
`; 
