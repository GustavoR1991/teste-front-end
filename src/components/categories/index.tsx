import "./style.scss";

const categories = [
  { name: "Tecnologia", icon: "/images/tecnologiaIcon.png", active: true },
  { name: "Supermercado", icon: "/images/supermercados.png" },
  { name: "Bebidas", icon: "/images/whiskey.png" },
  { name: "Ferramentas", icon: "/images/ferramentas.png" },
  { name: "Saúde", icon: "/images/cuidados-de-saude.png" },
  { name: "Esportes e Fitness", icon: "/images/corrida.png" },
  { name: "Moda", icon: "/images/moda.png" },
];

export function Categories() {
  return (
    <nav className="categories" aria-label="Categorias de produtos">
      <ul className="categories__list">
        {categories.map(({ name, icon, active }) => (
          <li key={name}>
            <a
              href="#"
              className={`categories__item ${active ? "categories__item--active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="categories__icon">
                <img src={icon} alt="" />
              </span>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
