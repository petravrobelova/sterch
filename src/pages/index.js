import React from "react"
import {
  injectIntl,
  Link,
  FormattedMessage,
  changeLocale,
} from "gatsby-plugin-intl"

import Layout from "../components/layout"
import logo from "../images/logo.svg"
import cz from "../images/cz.svg"
import de from "../images/de.svg"
import en from "../images/en.svg"
import background from "../images/background.jpg"
import actuator from "../images/home_actuators-3 1.png"
import galerie_1 from "../images/galerie_1.jpg"
import galerie_2 from "../images/galerie_2.jpg"
import galerie_3 from "../images/galerie_3.jpg"
import galerie_4 from "../images/galerie_4.jpg"
import galerie_5 from "../images/galerie_5.jpg"
import logo_1 from "../images/logo_1.png"
import logo_2 from "../images/logo_2.png"
import logo_3 from "../images/logo_3.png"
import airplane from "../images/airplane.png"

const IndexPage = ({ intl }) => (
  <Layout>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Sterch.com" className="logo-img"></img>
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="right-header-container">
              <div className="language-switcher">
                <div className="language-switcher-button">
                  <Link to="/">
                    <img src={cz} alt="Czech language"></img>
                  </Link>
                </div>
                <div className="language-switcher-button">
                  <Link to="/de">
                    <img src={de} alt="German language"></img>
                  </Link>
                </div>
                <div className="language-switcher-button">
                  <Link to="/en">
                    <img src={en} alt="English language"></img>
                  </Link>
                </div>
              </div>
              <nav className="nav-menu">
                <a href="#aerospace">Aerospace</a>

                <a href="#electric-actuators">Electric actuators</a>

                <a href="#certifikaty">
                  <FormattedMessage id="menuCertificates" />
                </a>

                <a href="#kontakt">
                  <FormattedMessage id="menuContact" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="video-container">
      <div className="video">
        <video autoPlay poster={background} muted loop>
          <source src="/sterch-h265.mp4" type="video/mp4; codecs=hevc" />
          <source src="/sterch-vp8.webm" type="video/webm; codecs=vp8" />
          <source src="/sterch-h264.mp4" type="video/mp4; codecs=h264" />
          <img src={background} alt="video"></img>
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="video-description-container">
              <h3 className="video-title font-white">
                <FormattedMessage id="videoTitle" />
              </h3>
              <p className="video-description font-white">
                <FormattedMessage id="videoDescription" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section" id="aerospace">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-5">
            <img src={airplane} alt="airplane"></img>
          </div>
          <div className="col-lg-5 col-md-7">
            <h2 className="section-title">
              <FormattedMessage id="aerospaceTitle" />
            </h2>
            <p className="section-description">
              <FormattedMessage id="aerospaceDescription" />
              Zabýváme se přesnou výrobou přípravků a výrobků z
              <b>
                {" "}
                leteckého, vesmírného, jaderného a vědeckého průmyslu.
              </b>{" "}
              Naše konstrukční a vývojové procesy, splňují ty nepřísnější
              podmínky, což dokazují{" "}
              <a className="link" href="#certifikaty">
                získané certifikáty
              </a>
              . Stejně tak neustále vylepšujeme naše technologie a modernizujeme
              stroje.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="section background-dark" id="electric-actuators">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-7">
            <h2 className="section-title font-white">ELECTRIC ACTUATORS</h2>
            <p className="section-description font-white">
              Pro více informací o výrobě servopohonů navštivte webové stránky
              firmy SCHIEBEL GmbH Wien. <br />
              <br />
              <a className="link" href="https://schiebel.net">
                Přejít na web SCHIEBEL GmbH Wien
              </a>
            </p>
          </div>
          <div className="col-lg-7 col-md-5">
            <img
              src={actuator}
              alt={intl.formatMessage({ id: "actuactorsImageAlt" })}
            ></img>
          </div>
        </div>
      </div>
    </div>
    <div className="section" id="galerie">
      <div className="container">
        <h2 className="section-title center-title">Galerie</h2>
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <img className="image-1" src={galerie_1} alt="img_1"></img>
          </div>
          <div className="col-md-6 galerie-mobile">
            <div className="row no-gutters">
              <div className="col-6">
                <img src={galerie_2} alt="img_2"></img>
              </div>
              <div className="col-6">
                <img src={galerie_4} alt="img_4"></img>
              </div>
              <div className="col-6">
                <img src={galerie_3} alt="img_3"></img>
              </div>
              <div className="col-6">
                <img src={galerie_5} alt="img_5"></img>
              </div>
              <div className="d-md-none col-6">
                <img className="image-1" src={galerie_1} alt="img_1"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section background-dark" id="certifikaty">
      <div className="container">
        <h2 className="section-title center-title font-white">Certifikáty</h2>
        <div className="row logo-images">
          <Link to="/">
            <img className="logo-image" src={logo_1} alt="logo_1"></img>
          </Link>
          <Link to="/">
            <img className="logo-image" src={logo_2} alt="logo_1"></img>
          </Link>
          <Link to="/">
            <img className="logo-image" src={logo_3} alt="logo_1"></img>
          </Link>
        </div>
      </div>
    </div>
    <div className="section" id="kontakt">
      <div className="container">
        <h2 className="section-title center-title">Kontakt</h2>
        <div className="row">
          <div className="col-lg-9 col-md-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10348.23428589019!2d17.2826554!3d49.5777841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47b7bdfe7350bcf9!2sSTERCH-INTERNATIONAL%20s.r.o.!5e0!3m2!1sen!2scz!4v1574058417600!5m2!1sen!2scz"
              width="825"
              height="338"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="col-lg-3 col-md-5">
            <p className="sterch-contact">
              <b>STERCH - INTERNATIONAL s.r.o. </b>
              <br />
              Technologická 979/17
              <br />
              779 00 Olomouc
              <br />
              Česká republika
              <br />
              <br />
              <b>Telefon</b>
              <br />
              <a className="link" href="tel:+420585208210">
                +420 585 208 210
              </a>
              <br />
              <br />
              <b>E-mail</b>
              <br />
              <a className="link" href="mailto:sterch@sterch.com">
                sterch@sterch.com
              </a>
              <br />
              <br />
              <b>IČ</b>
              <br />
              25354256
              <br />
              <br />
              <b>DIČ</b>
              <br />
              CZ25354256
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <p className="position">
              assistant
              <br />
              <b>Jana Pichrtová</b>
              <br />
              <a className="link" href="mailto:j.pichrtova@sterch.com">
                j.pichrtova@sterch.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-4">
            <p className="position">
              director
              <br />
              <b>Dipl. Ing. Jaroslav Zdražil</b>
              <br />
              <a className="link" href="mailto:j.zdrazil@sterch.com">
                j.zdrazil@sterch.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-4">
            <p className="position">
              sales manager - actuators
              <br />
              <b>Ing. Peter Galík</b>
              <br />
              <a className="link" href="mailto:p.galik@sterch.com">
                p.galik@sterch.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-4">
            <p className="position">
              sales manager - aerospace
              <br />
              <b>Ing. Pavel Komárek</b>
              <br />
              <a className="link" href="mailto:p.komarek@sterch.com">
                p.komarek@sterch.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-4">
            <p className="position">
              quality manager
              <br />
              <b>Ing. Přemysl Lýsek</b>
              <br />
              <a className="link" href="mailto:p.lysek@sterch.com">
                p.lysek@sterch.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="section background-dark footer">
      <p className="font-white text-footer">
        © 2019 - STERCH - INTERNATIONAL s.r.o.{" "}
      </p>
    </div>
  </Layout>
)

export default injectIntl(IndexPage)
