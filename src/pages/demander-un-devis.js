import * as React from "react"
import { gsap } from "gsap"

import Bulb from "../images/bulb.svg"
import Bulbs from "../images/bulb-s.svg"
import Bulbss from "../images/bulb-ss.svg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const FullForm = () => {
  const nom = React.createRef(null)
  const prenom = React.createRef(null)
  const budget = React.createRef(null)
  const [error, setError] = React.useState(false)
  const section = React.createRef(null)
  const q = gsap.utils.selector(section)
  const tl = React.createRef(null)

  React.useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q(".moveBulb"), {
        x: 200,
        y: 200,
      })
      .from(q(".moveBulb2"), {
        x: 200,
        y: 200,
      })
      .from(q(".prenom"), {
        opacity: 0,
      })
  }, [])

  const changeStep = (currentRef, nextRef) => {
    const input = currentRef.querySelector("input")

    if (input && input.value != "") {
      currentRef.classList.toggle("active")
      nextRef.classList.toggle("active")
    } else {
      checkInput(currentRef)
    }
  }

  const checkInput = currentRef => {
    const input = currentRef.querySelector("input")
    console.log(input.type)
  }

  return (
    <Layout>
      <Seo title="Services" />
      <section ref={section} className="contact-form">
        <Link to="/">
          <div class="close-btn active">
            <div class="custom-menu-toggle openMenu"></div>
          </div>
        </Link>
        <Bulb className="bulb up moveBulb" />
        <Bulbss className="bulb down moveBulb2" />
        <div ref={prenom} className="step-contact prenom active">
          <h1 className="title big">Comment dois-je vous appeler ?</h1>
          {error && <p>Il y a une erreur ma foi</p>}
          <input type="text" placeholder="John" />
          <button onClick={() => changeStep(prenom.current, nom.current)}>
            Suivant
          </button>
        </div>
        <div ref={nom} className="step-contact nom">
          <h1 className="title big">Quel est ton nom ?</h1>
          <input type="text" placeholder="Doe" />
          <button onClick={() => changeStep(nom.current, budget.current)}>
            Suivant
          </button>
        </div>
        <div ref={budget} className="step-contact budget">
          <h1 className="title big">Quel est ton budget ?</h1>
          <select>
            <option>1000 €</option>
            <option>2000 €</option>
            <option>5000 €</option>
            <option>10000 €</option>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnslink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </select>
          <button>Suivant</button>
        </div>
      </section>
    </Layout>
  )
}
export default FullForm
