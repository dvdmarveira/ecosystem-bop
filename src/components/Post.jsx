import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { User } from "phosphor-react";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' H:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}></Avatar>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
            {/* <span>{props.event}</span> */}
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      {/* Corpo da publicação  */}
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      {/* Campo de respostas   */}
      <form className={styles.commentForm}>
        <strong>Responder</strong>
        <textarea placeholder="Adicionar resposta" />
        <footer>
          <button type="submit">Responder</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment author="Frederico Pereira" content="Muito bom! Parabéns!!" />
        <Comment
          author="Musa Marveira"
          content="Aprendi muito também!"
        ></Comment>
      </div>
    </article>
  );
}
