import './header.css';

function Header() {
  return (
    <header>
      <section className="first-section-header">
        <img
          className="logo-header"
          src="./img/header/logo.png"
          alt="Logo - Mercado Livre"
        />
        <div className="localization-container">
          <img
            className="localization-icon"
            src="./img/header/localizacao.png"
            alt="Localização"
          />
          <div>
            <p className="inf-cep-header text-opacity-header">Informe seu</p>
            <p>CEP</p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
