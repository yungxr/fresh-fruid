function Header() {
  return (
    <header className="site-header">
      <div className="brand-row">
        <a className="brand" href="#home" aria-label="AeroSphere — главная">
          <span className="brand-orb" aria-hidden="true">
            <span />
          </span>
          <span>
            <strong>
              Aero<span>Sphere</span>
            </strong>
            <small>Форум обещанного интернета</small>
          </span>
        </a>
        <p className="brand-motto">
          Лучшие идеи
          <br />
          <span>растут вместе</span>
        </p>
      </div>
      <nav className="glass-nav" aria-label="Основная навигация">
        <a className="nav-home" href="#home">
          <span aria-hidden="true">⌂</span> Главная
        </a>
        <a href="#categories">
          <span aria-hidden="true">▦</span> Категории
        </a>
        <a href="#topics">
          <span aria-hidden="true">◌</span> Обсуждения
        </a>
        <a href="#shop">
          <span aria-hidden="true">◇</span> Магазин
        </a>
        <span className="nav-status">
          <span className="online-dot" /> Твой цифровой оазис
        </span>
      </nav>
    </header>
  );
}
export default Header;
