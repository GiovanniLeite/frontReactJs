/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCircle, FaYoutubeSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillFileAdd } from 'react-icons/ai';
import { RiLogoutBoxRFill, RiUser3Fill } from 'react-icons/ri';

import * as actions from '../../store/modules/auth/actions';

import { Container, FixedHeader, TopBar, MainBar } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleHideMenu = () => {
    const element = document.querySelector('input#check');
    element.checked = !element.checked;
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());
    history.push('/home');
  };

  return (
    <Container>
      <FixedHeader>
        <TopBar>
          <div>
            <ul className="socialMedia">
              <li title="Acesse o nosso Instagram">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </li>
              <li title="Acesse o nosso Twitter">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li title="Acesse o nosso Facebook">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <AiFillFacebook />
                </a>
              </li>
              <li title="Acesse o nosso canal no Youtube">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>

            <ul className="subscribeLogin">
              <li title="Novo">
                <Link to="/new">
                  <AiFillFileAdd />
                </Link>
              </li>
              <li title="Perfil">
                <Link to="/profile">
                  <RiUser3Fill />
                </Link>
              </li>
              {isLoggedIn && (
                <li title="Sair">
                  <button type="button" onClick={(e) => handleLogout(e)}>
                    <RiLogoutBoxRFill />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </TopBar>
        <MainBar>
          <div>
            <input type="checkbox" id="check" />
            <label id="icon" htmlFor="check" title="Menu">
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#fff" strokeWidth="4" />
                <path d="M0,15 30,15" stroke="#fff" strokeWidth="4" />
                <path d="M0,25 30,25" stroke="#fff" strokeWidth="4" />
              </svg>
              <span>MENU</span>
            </label>
            <div className="sideBar">
              <nav>
                <Link to="/new" onClick={() => handleHideMenu()}>
                  <div className="link">
                    <AiFillFileAdd /> Novo
                  </div>
                </Link>
                <Link to="/profile" onClick={() => handleHideMenu()}>
                  <div className="link">
                    <RiUser3Fill /> Perfil
                  </div>
                </Link>

                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      handleLogout(e);
                      handleHideMenu();
                    }}
                  >
                    <div className="link">
                      <RiLogoutBoxRFill /> Sair
                    </div>
                  </button>
                ) : (
                  <Link to="/login" onClick={() => handleHideMenu()}>
                    <div className="link login" title="Acessar">
                      <div className="loginZ">
                        <FaUserCircle size={28} />
                      </div>
                      <div>
                        acesse sua conta
                        <br />
                        <span>ou cadastre-se grátis</span>
                      </div>
                    </div>
                  </Link>
                )}
              </nav>
            </div>
            <label className="darkBackground" htmlFor="check">
              <div className="darkBackground" />
            </label>
          </div>

          <div className="home">
            <Link to="/home" title="Home">
              Example
            </Link>
          </div>
        </MainBar>
      </FixedHeader>
    </Container>
  );
}
