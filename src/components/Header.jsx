import { Link, useLocation } from "react-router";
function Header() {
  const location = useLocation();
  const isCategoryPage = location.pathname === "/categories/nostalgia";
  return (
    <header className="site-header">
      <div className="brand-row">
        <Link className="brand" to="/" aria-label="AeroSphere — главная">
          <span className="brand-orb" aria-hidden="true">
            <span />
          </span>
          <span>
            <strong>
              Aero<span>Sphere</span>
            </strong>
            <small>Форум обещанного интернета</small>
          </span>
        </Link>
        <p className="brand-motto">
          Лучшие идеи
          <br />
          <span>растут вместе</span>
        </p>
      </div>
      <nav className="glass-nav" aria-label="Основная навигация">
        <Link className={isCategoryPage ? "" : "nav-home"} to="/">
          <span aria-hidden="true">⌂</span> Главная
        </Link>
        <Link className={isCategoryPage ? "nav-home" : ""} to="/#categories">
          <span aria-hidden="true">▦</span> Категории
        </Link>
        <Link to="/#topics">
          <span aria-hidden="true">◌</span> Обсуждения
        </Link>
        <Link to="/#shop">
          <span aria-hidden="true">◇</span> Магазин
        </Link>
        <span className="nav-status">
          <span className="online-dot" /> Твой цифровой оазис
        </span>
      </nav>
    </header>
  );
}
export default Header;
