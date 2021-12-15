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
            <h1 className="title big">Nous contacter</h1>
            <p>
              Vous avez un projet de création ou refonte de site web et vous
              vous posez de questions sur les démarches et le déroulement du
              projet ? N’hésitez pas à nous contacter via notre formulaire de
              contact.
            </p>
            <a className="btn outline blue"> Nous appeler </a>
          </div>
          <div className="home-first-image">
            <div className="laptop-container">
              <Bulb className="is-rotating bulb" />
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
