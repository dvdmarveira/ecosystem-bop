import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar
        inComment
        src="https://static.vecteezy.com/ti/vetor-gratis/p1/512576-icone-preto-do-glyph-do-perfil-gratis-vetor.jpg"
      ></Avatar>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.author}</strong>
              <time title="03 de Março às 15:40" dateTime="2025-03-03 15:40:54">
                1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Curtir{" "}
          </button>{" "}
          <span>20</span>
        </footer>
      </div>
    </div>
  );
}
