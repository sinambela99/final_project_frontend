import "../app/globals.css";
import styles from "../styles/LoginAndRegis.module.css";

export default function LogAndRegis({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-white rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
        </div>
        <div className={styles.formStyle}>
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
