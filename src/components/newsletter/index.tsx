import "./style.scss";

export function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__text">
        <h2 id="newsletter-title" className="newsletter__title">
          Inscreva-se na nossa newsletter
        </h2>
        <p className="newsletter__description">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
        <div className="newsletter__fields">
          <input
            id="name"
            className="newsletter__input"
            type="text"
            placeholder="Digite seu nome"
            required
          />

          <input
            id="email"
            className="newsletter__input"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />

          <button className="newsletter__subscribe" type="submit">
            INSCREVER
          </button>
        </div>

        <label className="newsletter__terms">
          <input type="checkbox" required />
          Aceito os termos e condições
        </label>
      </form>
    </section>
  );
}
