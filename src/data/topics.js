// Учебные темы. Один источник данных для главной и категории.
export const nostalgiaTopics = [
  { id: 1, title: "Какие сайты вы помните с нулевых?", author: "SkyUser", replies: 10, category: "Ностальгия по интернету", categoryPath: "/categories/nostalgia", symbol: "◎" },
  { id: 2, title: "Покажите свой рабочий стол", author: "Evan", replies: 4, category: "Ностальгия по интернету", categoryPath: "/categories/nostalgia", symbol: "▣" },
  { id: 5, title: "ICQ и первые друзья онлайн", author: "Aqua", replies: 8, category: "Ностальгия по интернету", categoryPath: "/categories/nostalgia", symbol: "✿" },
  { id: 6, title: "Ваш первый личный сайт", author: "Herbar", replies: 3, category: "Ностальгия по интернету", categoryPath: "/categories/nostalgia", symbol: "⌂" },
  { id: 7, title: "Музыка из старых плееров", author: "Dreamer", replies: 16, category: "Ностальгия по интернету", categoryPath: "/categories/nostalgia" },
];


export const topics = [
  ...nostalgiaTopics,
  { id: 3, title: "Любимые игры детства", author: "Aqua", replies: 7, category: "Игры детства" },
  { id: 4, title: "Вы видели новый Iphone Duo?", author: "Herbar", replies: 34, category: "Техника и компьютеры" },
];
