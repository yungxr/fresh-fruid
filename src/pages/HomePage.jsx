import { topics } from "../data/topics";
import CategoryCard from "../components/CategoryCard";
import ShopItemCard from "../components/ShopItemCard";
import TopicCard from "../components/TopicCard";

const categories = [
  {
    id: 1,
    name: "Ностальгия по интернету",
    description: "Вспоминаем сайты, программы и культуру нулевых",
    online: 43,
    path: "/categories/nostalgia",
  },
  {
    id: 2,
    name: "Игры детства",
    description: "Обсуждаем игры, с которыми мы выросли",
    online: 27,
  },
  {
    id: 3,
    name: "Техника и компьютеры",
    description: "Делимся сборками и обсуждаем технологии",
    online: 18,
  },
];

const items = [
  {
    id: 1,
    name: "Товар 1",
    description: "купи",
    price: 199,
    stock: 4,
  },
  {
    id: 2,
    name: "Товар 2",
    description: "купи",
    price: 399,
    stock: 7,
  },
  {
    id: 3,
    name: "Товар 3",
    description: "купи",
    price: 299,
    stock: 11,
  },
];

function HomePage() {
    return(
        <>
        <div className="breadcrumb">
          AeroSphere <span> / </span> Главная{" "}
          <span className="demo-label">Учебный форум · демоданные</span>
        </div>
        <div className="forum-layout">
          <main id="home">
            <section className="welcome">
              <div className="welcome-copy">
                <span className="eyebrow">ТВОЙ УГОЛОК ХОРОШЕГО ИНТЕРНЕТА</span>
                <h1>
                  Будущее, о котором
                  <br />
                  мы мечтали.
                </h1>
                <p>
                  Общайся, делись воспоминаниями
                  <br />и находи своих в AeroSphere.
                </p>
                <a className="button primary" href="#categories">
                  Найти своё сообщество <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="hero-orb" aria-hidden="true">
                <span className="orb-leaf" />
              </div>
              <span className="welcome-caption">
                Больше света. Больше общения.
              </span>
            </section>
            <section className="panel" id="categories">
              <div className="panel-heading">
                <h2>
                  <span aria-hidden="true">◈</span> Категории форума
                </h2>
                <span>Найди своих</span>
              </div>
              {categories.map((categorie) => (
                <CategoryCard
                  key={categorie.id}
                  name={categorie.name}
                  description={categorie.description}
                  online={categorie.online}
                  path={categorie.path}
                  icon={
                    categorie.id === 1 ? "◎" : categorie.id === 2 ? "✦" : "▣"
                  }
                  tone={
                    categorie.id === 1
                      ? "blue"
                      : categorie.id === 2
                        ? "green"
                        : "purple"
                  }
                />
              ))}
            </section>
            <section className="panel" id="topics">
              <div className="panel-heading">
                <h2>
                  <span aria-hidden="true">◌</span> Свежие обсуждения
                </h2>
                <span>{topics.length} темы</span>
              </div>
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  title={topic.title}
                  author={topic.author}
                  replies={topic.replies}
                  category={topic.category}
                  categoryPath={topic.categoryPath}
                />
              ))}
            </section>
            <section className="panel" id="shop">
              <div className="panel-heading">
                <h2>
                  <span aria-hidden="true">◇</span> Магазин сообщества
                </h2>
                <span>Учебная корзина</span>
              </div>
              <div className="shop-grid">
                {items.map((item) => (
                  <ShopItemCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                  />
                ))}
              </div>
            </section>
          </main>
          <aside className="sidebar" aria-label="О сообществе">
            <section className="panel">
              <div className="panel-heading">
                <h2>
                  <span className="online-dot" /> Наше сообщество
                </h2>
              </div>
              <div className="side-content">
                <p className="side-intro">Место, где тебе рады</p>
                <div className="avatar-line" aria-hidden="true">
                  <span>S</span>
                  <span>E</span>
                  <span>A</span>
                  <span>H</span>
                </div>
                <p>SkyUser, Evan, Aqua и Herbar — авторы первых обсуждений.</p>
                <a className="button" href="#topics">
                  Заглянуть в обсуждения →
                </a>
              </div>
            </section>
            <section className="panel">
              <div className="panel-heading">
                <h2>
                  <span aria-hidden="true">✧</span> С чего начать
                </h2>
              </div>
              <a className="side-link" href="#categories">
                <span className="number-badge">1</span>
                <span>
                  <strong>Найди свою тему</strong>
                  <small>Ностальгия, игры и технологии</small>
                </span>
                <b aria-hidden="true">›</b>
              </a>
              <a className="side-link" href="#topics">
                <span className="number-badge">2</span>
                <span>
                  <strong>Поддержи обсуждение</strong>
                  <small>Поставь лайк тому, что близко</small>
                </span>
                <b aria-hidden="true">›</b>
              </a>
              <a className="side-link" href="#shop">
                <span className="number-badge">3</span>
                <span>
                  <strong>Загляни в магазин</strong>
                  <small>Попробуй учебную корзину</small>
                </span>
                <b aria-hidden="true">›</b>
              </a>
            </section>
            <section className="panel">
              <div className="panel-heading">
                <h2>
                  <span aria-hidden="true">▥</span> Наш маленький мир
                </h2>
              </div>
              <dl className="stats">
                <div>
                  <dt>Категорий</dt>
                  <dd>{categories.length}</dd>
                </div>
                <div>
                  <dt>Обсуждений</dt>
                  <dd>{topics.length}</dd>
                </div>
                <div>
                  <dt>Товаров</dt>
                  <dd>{items.length}</dd>
                </div>
              </dl>
              <p className="side-note">
                Это учебные данные. Настоящие участники появятся после запуска.
              </p>
            </section>
            <section className="nature-card">
              <span className="nature-leaf" aria-hidden="true">
                ❧
              </span>
              <h2>
                Интернет может
                <br />
                быть уютным.
              </h2>
              <p>
                Меньше шума.
                <br />
                Больше добрых разговоров.
              </p>
              <span className="nature-tag">EST. 2026 · AEROSPHERE</span>
            </section>
          </aside>
        </div>
        </>
    )
};

export default HomePage;