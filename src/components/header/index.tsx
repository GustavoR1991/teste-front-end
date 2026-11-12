import "./style.scss";
import logo from "../../assets/svg/Logo.svg";
import shield from "../../assets/svg/ShieldCheck.svg";
import truck from "../../assets/svg/Truck.svg";
import creditCard from "../../assets/svg/CreditCard.svg";
import magnify from "../../assets/svg/MagnifyingGlass.svg";
import group from "../../assets/svg/Group.svg";
import heart from "../../assets/svg/Heart.svg";
import avatar from "../../assets/svg/UserCircle.svg";
import cart from "../../assets/svg/ShoppingCart.svg";
import crown from "../../assets/svg/CrownSimple.svg";

export function Header() {
  return (
    <header className="header">
      {/* 1. Barra de benefícios */}
      <ul className="header__beneficios">
        <li>
          <img src={shield} alt="" />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </li>
        <li>
          <img src={truck} alt="" />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </li>
        <li>
          <img src={creditCard} alt="" />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </li>
      </ul>

      {/* 2. Logo, busca e ícones */}
      <div className="header__principal">
        <a href="/" className="header__logo">
          <img src={logo} alt="Econverse - página inicial" />
        </a>

        <form
          className="header__busca"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="busca"
            type="search"
            placeholder="O que você está buscando?"
          />
          <button type="submit" aria-label="Buscar">
            <img src={magnify} alt="" />
          </button>
        </form>

        <ul className="header__acoes">
          <li>
            <a href="#" aria-label="Meus pedidos">
              <img src={group} alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Favoritos">
              <img src={heart} alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Minha conta">
              <img src={avatar} alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Carrinho">
              <img src={cart} alt="" />
            </a>
          </li>
        </ul>
      </div>

      {/* 3. Menu de categorias */}
      <nav className="header__menu" aria-label="Categorias">
        <ul>
          <li>
            <a href="#">Todas categorias</a>
          </li>
          <li>
            <a href="#">Supermercado</a>
          </li>
          <li>
            <a href="#">Livros</a>
          </li>
          <li>
            <a href="#">Moda</a>
          </li>
          <li>
            <a href="#">Lançamentos</a>
          </li>
          <li>
            <a href="#" className="header__menu--destaque">
              Ofertas do dia
            </a>
          </li>
          <li>
            <a href="#">
              <img src={crown} alt="" />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
