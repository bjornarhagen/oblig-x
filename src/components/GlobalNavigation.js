import React, { Component } from "react";

import SVG from "react-inlinesvg";
import openModal from "../js/modals";

import logo from "../images/logo.svg";
import iconUser from "../images/icons/space-astronaut.svg";
import iconOpen from "../images/icons/navigation-menu.svg";
import iconClose from "../images/icons/remove.svg";
import iconBaggage from "../images/icons/baggage.svg";
import iconSpaceport from "../images/icons/space-rocket-launch.svg";
import iconSeatedPerson from "../images/icons/seat-regular.svg";
import iconTicket from "../images/icons/ticket-hold.svg";
import iconLogin from "../images/icons/login-key.svg";
import iconRocket from "../images/icons/space-rocket-flying.svg";
import iconRocket2 from "../images/icons/space-rocket-2.svg";
import iconRocket3 from "../images/icons/space-ship-1.svg";
import iconRocket4 from "../images/icons/space-rocket-1.svg";

require("../scss/_components/navigation.scss");

class GlobalNavigation extends Component {
  render() {
    return (
      <div className="inner-wrapper">
        <a className="skip-to-link" href="#main">
          Skip to content
        </a>
        <a className="skip-to-link" href="#footer">
          Skip to footer
        </a>
        <a href="/" className="logo">
          <img src={logo} alt="SpaceX logo" />
        </a>
        <button
          className="nav-open modal-trigger"
          onClick={openModal.bind(this)}
          data-target="#nav"
        >
          <SVG src={iconOpen} className="icon">
            <img
              src="/images/icons/navigation-menu.png"
              alt="Meny ikon - åpne"
            />
          </SVG>
          <span>Åpne</span>
        </button>
        <button className="nav-close modal-close">
          <SVG src={iconClose} className="icon">
            <img src="/images/icons/remove.png" alt="Meny ikon - lukk" />
          </SVG>
          <span>Lukk</span>
        </button>
        <ul className="links links-primary">
          <li>
            <a href="#2">Bestill</a>
            <ul>
              <li>
                <a href="#" className="text">
                  <SVG src={iconRocket3} className="icon">
                    <img
                      src="/images/icons/space-ship-1.png"
                      alt="Ikon for reiseklasse - Economy"
                    />
                  </SVG>
                  <span>Economy</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Studentbilletter</a>
                  </li>
                  <li>
                    <a href="#">Gruppereiser</a>
                  </li>
                  <li>
                    <a href="#">Tilleggstjenester</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="text">
                  <SVG src={iconRocket4} className="icon">
                    <img
                      src="/images/icons/space-rocket-1.png"
                      alt="Ikon for reiseklasse - Business"
                    />
                  </SVG>
                  <span>Business</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Bestill</a>
                  </li>
                  <li>
                    <a href="#">Fordeler</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="text">
                  <SVG src={iconRocket2} className="icon">
                    <img
                      src="/images/icons/space-rocket-2.png"
                      alt="Ikon for reiseklasse - Luxury"
                    />
                  </SVG>
                  <span>Luxury</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Bestill</a>
                  </li>
                  <li>
                    <a href="#">Fordeler</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#3">Reiseinfo</a>
            <ul>
              <li>
                <a href="#" className="text">
                  <SVG src={iconBaggage} className="icon">
                    <img src="/images/icons/baggage.png" alt="Bagasje ikon" />
                  </SVG>
                  <span>Bagasje</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Håndbagasje</a>
                  </li>
                  <li>
                    <a href="#">Innsjekket bagasje</a>
                  </li>
                  <li>
                    <a href="#">Ekstra bagasje</a>
                  </li>
                  <li>
                    <a href="#">Tapt bagasje</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="text">
                  <SVG src={iconSpaceport} className="icon">
                    <img
                      src="/images/icons/space-rocket-launch.png"
                      alt="Romhavn ikon"
                    />
                  </SVG>
                  <span>På romhavnen</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Se om vi er i rute</a>
                  </li>
                  <li>
                    <a href="#">Lounger</a>
                  </li>
                  <li>
                    <a href="#">Innsjekking og boarding</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="text">
                  <SVG src={iconSeatedPerson} className="icon">
                    <img
                      src="/images/icons/seat-regular.png"
                      alt="Person som sitter og ser ut vindu"
                    />
                  </SVG>
                  <span>Om bord</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Reiseklasser</a>
                  </li>
                  <li>
                    <a href="#">Mat og drikke</a>
                  </li>
                  <li>
                    <a href="#">WiFi</a>
                  </li>
                  <li>
                    <a href="#">Underholdning</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">SpaceX</a>
            <ul>
              <li>
                <ul>
                  <li>
                    <a href="#">Selskapet</a>
                  </li>
                  <li>
                    <a href="#">kunder</a>
                  </li>
                  <li>
                    <a href="#">Jobber</a>
                  </li>
                  <li>
                    <a href="#">Miljø</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="links links-secondary">
          <li>
            <a href="#">
              <span>Min konto</span>
              <SVG src={iconUser} className="icon">
                <img
                  src="/images/icons/space-astronaut.svg"
                  alt="Profil ikon - en astronaut"
                />
              </SVG>
            </a>

            <ul>
              <li>
                <ul>
                  <li>
                    <a href="#">
                      <SVG src={iconTicket} className="icon">
                        <img
                          src="/images/icons/ticket-hold.png"
                          alt="Ikon av hånd som holder biletter"
                        />
                      </SVG>
                      <span>Bestillinger</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SVG src={iconLogin} className="icon">
                        <img
                          src="/images/icons/login-key.png"
                          alt="Ikon av nøkler"
                        />
                      </SVG>
                      <span>Logg inn</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default GlobalNavigation;
