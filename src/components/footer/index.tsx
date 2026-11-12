import "./style.scss";

import logo from "../../assets/svg/Grupo 9.svg";

import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import { Policy } from "../policy";
import { Newsletter } from "../newsletter";

export function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="footer">
        <section className="footer__marca" aria-label="Sobre a Econverse">
          <img className="footer__logo" src={logo} alt="Econverse" />

          <p className="footer__descricao">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <nav aria-label="Redes sociais">
            <ul className="footer__redes">
              <li>
                <a href="#" aria-label="Instagram">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <nav className="footer__links" aria-label="Links do rodapé">
          <div className="footer__coluna">
            <h2 className="footer__titulo">Institucional</h2>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Movimento</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>
          <div className="footer__coluna">
            <h2 className="footer__titulo">Atendimento</h2>
            <ul>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Perguntas frequentes</a>
              </li>
            </ul>
          </div>

          <div className="footer__coluna">
            <h2 className="footer__titulo">Termos</h2>
            <ul>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
      <Policy />
    </>
  );
}
