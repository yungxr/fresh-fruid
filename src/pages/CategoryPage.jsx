import { useState } from "react";
import { Link } from "react-router";
import { nostalgiaTopics } from "../data/topics";
import "./CategoryPage.css";

const topicDetails = [
  { views: 127, date: "Сегодня, 14:20", last: "Сегодня, 16:03", lastAuthor: "Evan", art: "portal" },
  { views: 428, date: "Вчера, 19:11", last: "Сегодня, 12:47", lastAuthor: "SunnyD", art: "desktop" },
  { views: 915, date: "12 авг. 2024", last: "Сегодня, 11:22", lastAuthor: "Dreamer", art: "icq" },
  { views: 640, date: "10 авг. 2024", last: "Вчера, 20:15", lastAuthor: "IceWind", art: "homepage" },
  { views: 502, date: "8 авг. 2024", last: "Вчера, 18:49", lastAuthor: "SkyUser", art: "winamp" },
];

function CategoryPage() {
  const [isJoined, setIsJoined] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [localTopics, setLocalTopics] = useState(nostalgiaTopics);
  const rows = localTopics.map((topic, index) => ({ ...topic, ...topicDetails[index] }));
  const visibleRows = activeTab === "popular" ? [...rows].sort((a,b) => b.replies-a.replies) : activeTab === "new" ? [...rows].reverse() : rows;
  function handleCreate(event) {
    event.preventDefault();
    if (title.trim() === "") return;
    setLocalTopics(currentTopics => [...currentTopics, { id: Date.now(), title: title.trim(), author: "Вы", replies: 0, category: "Ностальгия по интернету" }]);
    setTitle(""); setIsCreating(false); setActiveTab("new");
  }
  return (
    <div className="eco-page">
      <nav className="breadcrumb" aria-label="Путь к странице"><Link to="/">⌂ Главная</Link><span>/</span><Link to="/#categories">Категории</Link><span>/</span><span>Ностальгия по интернету</span><small className="eco-demo">Демофорум</small></nav>
      <div className="eco-layout">
        <main>
          <section className="eco-hero">
            <h1>Ностальгия по интернету</h1>
            <p>Вспоминаем сайты, программы и культуру нулевых.</p>
            <div className="eco-metrics"><span><b aria-hidden="true">▤</b> {localTopics.length} тем</span><span><b aria-hidden="true">♟</b> 128 участников</span><span><span className="online-dot" />43 онлайн</span></div>
            <div className="eco-hero-actions"><button className="eco-primary" onClick={() => setIsJoined(wasJoined => !wasJoined)} aria-pressed={isJoined}><span aria-hidden="true">{isJoined ? "✓" : "♟"}</span>{isJoined ? "Вы вступили · Выйти" : "Вступить"}</button><button onClick={() => setIsFavorite(wasFavorite => !wasFavorite)} aria-pressed={isFavorite}><span aria-hidden="true">{isFavorite ? "★" : "☆"}</span>{isFavorite ? "В избранном" : "В избранное"}</button></div>
          </section>
          <section className="eco-panel eco-discussions">
            <div className="eco-discussion-heading"><h2><span className="eco-leaf" aria-hidden="true" />Темы категории</h2><button className="eco-primary" onClick={() => setIsCreating(!isCreating)} aria-expanded={isCreating}><span aria-hidden="true">✎</span>{isCreating ? "Закрыть" : "Создать тему"}</button></div>
            {isCreating ? (<form className="eco-create-form" onSubmit={handleCreate}><label htmlFor="new-topic-title">Название новой темы</label><input id="new-topic-title" autoFocus value={title} onChange={event => setTitle(event.target.value)} placeholder="О чём хочется поговорить?" maxLength={160} /><button className="eco-primary" disabled={title.trim() === ""}>Добавить тему</button></form>) : null}
            <div className="eco-tabs" role="group" aria-label="Порядок тем"><button className={activeTab === "all" ? "selected" : ""} onClick={() => setActiveTab("all")} aria-pressed={activeTab === "all"}>Все темы</button><button className={activeTab === "popular" ? "selected" : ""} onClick={() => setActiveTab("popular")} aria-pressed={activeTab === "popular"}><span aria-hidden="true">♨</span> Популярные</button><button className={activeTab === "new" ? "selected" : ""} onClick={() => setActiveTab("new")} aria-pressed={activeTab === "new"}><span aria-hidden="true">◷</span> Новые</button></div>
            <div className="eco-topic-list">{visibleRows.map(topic => (<article className="eco-topic-row" key={topic.id}><span className={"eco-topic-art art-" + (topic.art || "homepage")} aria-hidden="true" /><div className="eco-topic-copy"><h3>{topic.title}{topic.id === 1 ? <small className="eco-pin">⚑ Закреплено</small> : null}</h3><p><strong>{topic.author}</strong><span>·</span>{topic.date || "Только что"}</p></div><div className="eco-topic-stats"><span aria-label={"Ответов: " + topic.replies}><b aria-hidden="true">●</b>{topic.replies}</span><span aria-label={"Просмотров: " + (topic.views || 0)}><b aria-hidden="true">◉</b>{topic.views || 0}</span></div><div className="eco-last"><span>{topic.last || "Только что"}</span><span>от {topic.lastAuthor || topic.author}</span></div></article>))}</div>
            <div className="eco-list-bottom"><span className="eco-page-number" aria-label="Страница 1">1</span><span>{localTopics.length} тем · Учебные данные</span></div>
          </section>
        </main>
        <aside className="eco-sidebar" aria-label="О категории">
          <section className="eco-panel"><div className="eco-panel-heading"><h2><span className="eco-info-icon" aria-hidden="true">i</span>О категории</h2></div><div className="eco-side-copy"><p>Вспоминаем сайты, программы и культуру нулевых.</p><p>Делимся историями, скриншотами, музыкой и атмосферой той эпохи.</p><div className="eco-side-stats"><span><b>{localTopics.length}</b><small>тем</small></span><span><b>128</b><small>участников</small></span><span><b>43</b><small>онлайн</small></span></div></div></section>
          <section className="eco-panel"><div className="eco-panel-heading"><h2><span className="online-dot" />Сейчас онлайн</h2></div><div className="eco-members">{["SkyUser", "Evan", "Aqua", "CoolCat"].map((name,index) => (<div key={name}><span className={"eco-member-avatar member-"+index} aria-hidden="true" /><strong>{name}</strong></div>))}</div></section>
          <section className="eco-panel"><div className="eco-panel-heading"><h2><span className="eco-info-icon" aria-hidden="true">◇</span>Правила общения</h2></div><ol className="eco-rules"><li>Уважайте других участников и их воспоминания.</li><li>Держите обсуждения в рамках темы.</li><li>Делитесь ссылками, скриншотами и личным опытом — это ценно!</li></ol></section>
          <section className="eco-promise"><h2>Интернет<br />объединяет поколения</h2><p>Вспоминаем. Обсуждаем.<br />Сохраняем атмосферу.</p></section>
        </aside>
      </div>
    </div>
  );
}
export default CategoryPage;
