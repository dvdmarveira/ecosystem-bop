import styles from "./Avatar.module.css";

export function Avatar({ inComment = false, src }) {
  return (
    <img
      className={inComment ? styles.avatarComment : styles.avatar}
      src={src}
    ></img>
  );
}

// export function Avatar({ src, icon: Icon, inComment }) {
//   return (
//     <div className={inComment ? styles.avatarComment : styles.avatar}>
//       {src ? <img src={src} alt="Avatar" /> : Icon ? <Icon size={32} /> : null}
//     </div>
//   );
// }
