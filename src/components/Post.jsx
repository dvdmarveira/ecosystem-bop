import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { User } from "phosphor-react";
import styles from "./Post.module.css";
import { useState } from "react"; // Variáveis que o componente REACT deve monitorar para ser exibido a cada alteração

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    "Foi um dia de muito aprendizado!",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' H:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    // const newCommentText = event.target.comment.value;

    // Programação imperativa > O que deve ser feito para se alcançar determinado resultado (passo a passo como algoritmo)
    // Programação declarativa > Quais as condições existentes para ter o resultado final

    setComments([...comments, newCommentText]); // Imutabilidade (...comments)
    setNewCommentText("");
    // event.target.comment.value = "";
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  // Imutabilidade > A informação nunca é alterada; em vez disso, uma nova informação é criada e salva dentro do estado.
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      {/* Campo de respostas   */}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Responder</strong>

        <textarea
          name="comment"
          placeholder="Adicionar resposta"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Responder
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              author="Musa Marveira"
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
