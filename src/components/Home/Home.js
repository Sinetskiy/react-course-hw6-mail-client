// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import styles from "../AppRouter/AppRouter.module.css";
import currentStyles from "./Home.module.css";

const Home = () => <>
    <h3 className={styles.title}>Home</h3>
    <div className={currentStyles.container}>
        <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
    </div>
</>;

export default Home;