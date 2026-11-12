import "./style.scss";
import logo from "../../assets/svg/Logo.svg";

const brands = [
  { id: 1, name: "Econverse", logo },
  { id: 2, name: "Econverse", logo },
  { id: 3, name: "Econverse", logo },
  { id: 4, name: "Econverse", logo },
  { id: 5, name: "Econverse", logo },
];

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>

      <ul className="brands__list">
        {brands.map(({ id, name, logo }) => (
          <li key={id}>
            <a
              href="#"
              className="brands__item"
              aria-label={`Ver produtos da marca ${name}`}
            >
              <img src={logo} alt="" loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
