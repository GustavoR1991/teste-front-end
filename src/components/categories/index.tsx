import "./style.scss";

const categorias = [
  { nome: "Tecnologia", icone: "/images/tecnologiaIcon.png", ativo: true },
  { nome: "Supermercado", icone: "/images/supermercados.png" },
  { nome: "Bebidas", icone: "/images/whiskey.png" },
  { nome: "Ferramentas", icone: "/images/ferramentas.png" },
  { nome: "Saúde", icone: "/images/cuidados-de-saude.png" },
  { nome: "Esportes e Fitness", icone: "/images/corrida.png" },
  { nome: "Moda", icone: "/images/moda.png" },
];

export function Categories() {
  return (
    <nav className="categories" aria-label="Categorias de produtos">
      <ul className="categories__lista">
        {categorias.map(({ nome, icone, ativo }) => (
          <li key={nome}>
            <a
              href="#"
              className={`categories__item ${ativo ? "categories__item--ativo" : ""}`}
              aria-current={ativo ? "page" : undefined}
            >
              <span className="categories__icone">
                <img src={icone} alt="" />
              </span>
              {nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
