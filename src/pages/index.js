import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Bulb from "../images/bulb.svg"
import Code from "../images/code.svg"
import Two from "../images/two.svg"
import Three from "../images/three.svg"
import Four from "../images/four.svg"
import SurMesure from "../images/surmesure.svg"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Accueil" />
    <section className="home-first">
      <div className="container">
        <div className="home-first__wrapper">
          <div className="home-first-text">
            <h1 className="title big">Création de sites web sur mesure</h1>
            <p>
              Peleweb vous accompagne dans vos projets de création et de refonte
              de site web sous WordPress.
            </p>
            <a className="btn outline blue"> Nous contacter </a>
          </div>
          <div className="home-first-image">
            <div className="laptop-container">
              <Bulb className="bulb is-rotating" />
              <StaticImage
                src="../images/laptop.png"
                width={509}
                quality={95}
                alt="Peleweb accueil"
                className="laptop"
                placeholder="tracedSVG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-second section">
      <div className="container">
        <div className="home-second__wrapper">
          <h2 className="title normal">Nos services web</h2>
          <div className="services-container">
            <div className="service-item one">
              <Code />

              <h3 className="subtitle normal">Création de sites web</h3>
              <p className="text normal">
                Des sites web vitrine et e-commerce professionnels
              </p>
            </div>
            <div className="service-item two">
              <Two />
              <h3 className="subtitle normal">Création de sites web</h3>
              <p className="text normal">
                Des sites web vitrine et e-commerce professionnels
              </p>
            </div>
            <div className="service-item three">
              <Three />
              <h3 className="subtitle normal">Création de sites web</h3>
              <p className="text normal">
                Des sites web vitrine et e-commerce professionnels
              </p>
            </div>
            <div className="service-item four">
              <Four />
              <h3 className="subtitle normal">Création de sites web</h3>
              <p className="text normal">
                Des sites web vitrine et e-commerce professionnels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="service-plus-item-container">
      <div className="service-plus-item">
        <div className="service-plus-item__text">
          <h2 className="title normal">Des sites web sur-mesure</h2>
          <p className="text normal">
            Notre expertise nous permet de vous offrir le meilleur en terme de
            développement web. Du site vitrine simple à la boutique en ligne,
            nous vous proposerons des devis personnalisés en fonction de votre
            projet.
          </p>
          <p className="text normal nd-paragraph">
            Nous vous accompagnons également dans vos projets de refontes de
            sites web.
          </p>
          <a className="btn filled blue">Découvrir nos services</a>
        </div>
        <div className="image">
          <SurMesure />
        </div>
      </div>
      <div className="service-plus-item">
        <div className="image">
          <SurMesure />
        </div>
        <div className="service-plus-item__text">
          <h2 className="title normal">Design responsive</h2>
          <p className="text normal">
            Notre expertise nous permet de vous offrir le meilleur en terme de
            développement web. Du site vitrine simple à la boutique en ligne,
            nous vous proposerons des devis personnalisés en fonction de votre
            projet.
          </p>
          <p className="text normal nd-paragraph">
            Nous vous accompagnons également dans vos projets de refontes de
            sites web.
          </p>
          <a className="btn filled blue">Découvrir nos services</a>
        </div>
      </div>
      <div className="service-plus-item">
        <div className="service-plus-item__text">
          <h2 className="title normal">SEO friendly</h2>
          <p className="text normal">
            Notre expertise nous permet de vous offrir le meilleur en terme de
            développement web. Du site vitrine simple à la boutique en ligne,
            nous vous proposerons des devis personnalisés en fonction de votre
            projet.
          </p>
          <p className="text normal nd-paragraph">
            Nous vous accompagnons également dans vos projets de refontes de
            sites web.
          </p>
          <a className="btn filled blue">Découvrir nos services</a>
        </div>
        <div className="image">
          <SurMesure />
        </div>
      </div>
      <div className="service-plus-item">
        <div className="image">
          <SurMesure />
        </div>
        <div className="service-plus-item__text">
          <h2 className="title normal">Entièrement sécurisé</h2>
          <p className="text normal">
            Notre expertise nous permet de vous offrir le meilleur en terme de
            développement web. Du site vitrine simple à la boutique en ligne,
            nous vous proposerons des devis personnalisés en fonction de votre
            projet.
          </p>
          <p className="text normal nd-paragraph">
            Nous vous accompagnons également dans vos projets de refontes de
            sites web.
          </p>
          <a className="btn filled blue">Découvrir nos services</a>
        </div>
      </div>
    </div>
    <section className="home-third section">
      <div className="container">
        <div className="home-third__wrapper">
          <h2 className="title normal">Les étapes du projet</h2>
        </div>
      </div>
    </section>
    <section className="home-fourth section">
      <div className="container">
        <div className="home-third__wrapper">
          <h2 className="title normal">Nos tarifs</h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
