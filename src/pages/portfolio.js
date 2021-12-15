import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Bulb from "../images/bulb.svg"

const SecondPage = () => (
  <Layout>
    <Seo title="Services" />
    <section className="home-first">
      <div className="container">
        <div className="home-first__wrapper">
          <div className="home-first-text">
            <h1 className="title big">Portfolio</h1>
            <p>
              Retrouvez l’ensemble de nos services, du site web vitrine ou
              e-commerce, aux sites web sur mesure et la conception de maquettes
              graphiques et fonctionnelles.
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
  </Layout>
)

export default SecondPage
