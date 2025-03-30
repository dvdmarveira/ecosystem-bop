import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.icon-icons.com/38/PNG/512/femaleuser_user_female_4515.png",
      name: "Isis Marveira",
      role: "Angular Developer",
    },
    content: [
      { type: "paragraph", content: "O workshop foi incrível!" },
      {
        type: "paragraph",
        content:
          "Aprendi muito sobre desenvolvimento de aplicativos móveis e as dicas dos palestrantes foram muito valiosas. A organização do evento também estava impecável.",
      },
      {
        type: "paragraph",
        content:
          "Com certeza, participarei de outros eventos promovidos por essa equipe!",
      },
    ],
    publishedAt: new Date("2025-03-25 20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.icon-icons.com/38/PNG/512/femaleuser_user_female_4515.png",
      name: "Iris Marveira",
      role: "C# Developer",
    },
    content: [
      { type: "paragraph", content: "A mentoria foi incrível!" },
      {
        type: "paragraph",
        content:
          "Aprendi muito sobre desenvolvimento de aplicativos móveis e as dicas dos palestrantes foram muito valiosas. A organização do evento também estava impecável.",
      },
    ],
    publishedAt: new Date("2025-03-26 20:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
