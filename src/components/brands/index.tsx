import "./style.scss";
import logo from "../../assets/svg/Logo.svg";

const marcas = [
  { id: 1, nome: "Econverse", logo },
  { id: 2, nome: "Econverse", logo },
  { id: 3, nome: "Econverse", logo },
  { id: 4, nome: "Econverse", logo },
  { id: 5, nome: "Econverse", logo },
];

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-titulo">
      <h2 id="brands-titulo" className="brands__titulo">
        Navegue por marcas
      </h2>

      <ul className="brands__lista">
        {marcas.map(({ id, nome, logo }) => (
          <li key={id}>
            <a
              href="#"
              className="brands__item"
              aria-label={`Ver produtos da marca ${nome}`}
            >
              <img src={logo} alt="" loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
