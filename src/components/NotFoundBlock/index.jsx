import React from "react";
import styles from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <h1 className={styles.root}>
      <h1>Корзина пустая 😕 </h1>
      <span>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </span>
      <img className={styles.from} src="" alt="" />
    </h1>
  );
}
