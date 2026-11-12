import "./style.scss";

const partners = [
  {
    id: 1,
    title: "Parceiros",
    text: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Parceiros",
    text: "Lorem ipsum dolor sit amet, consectetur",
  },
];

export function Partners() {
  return (
    <section className="partners" aria-label="Parceiros">
      {partners.map(({ id, title, text }) => (
        <article key={id} className="partners__card">
          <h2 className="partners__title">{title}</h2>
          <p className="partners__text">{text}</p>
          <a href="#" className="partners__button">
            Confira
          </a>
        </article>
      ))}
    </section>
  );
}
