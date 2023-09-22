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

      <section className="second-section-header">
        <div className="form-container-header">
          <input
            className="input-header"
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <button className="search-btn-header" type="submit">
            <span className="line-input-btn-header" />
            <img
              className="search-icon-header"
              src="./img/header/pesquisa.png"
              alt=""
            />
          </button>
        </div>

        <ol className="text-opacity-header">
          <li>Categorias</li>
          <li>Ofertas do dia</li>
          <li>Histórico</li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Contato</li>
        </ol>
      </section>
    </header>
  );
}

export default Header;
