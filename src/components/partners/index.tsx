import "./style.scss";

const parceiros = [
  {
    id: 1,
    titulo: "Parceiros",
    texto: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    titulo: "Parceiros",
    texto: "Lorem ipsum dolor sit amet, consectetur",
  },
];

export function Partners() {
  return (
    <section className="partners" aria-label="Parceiros">
      {parceiros.map(({ id, titulo, texto }) => (
        <article key={id} className="partners__card">
          <h2 className="partners__titulo">{titulo}</h2>
          <p className="partners__texto">{texto}</p>
          <a href="#" className="partners__botao">
            Confira
          </a>
        </article>
      ))}
    </section>
  );
}
