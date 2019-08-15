// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import currentStyles from "./Mail.module.css";
import styles from "../AppRouter/AppRouter.module.css";

const Mail = (props) => {
    const {from, to, body} = props;
    return <><h3 className={styles.title}>{to ? 'Outbox' : 'Inbox'}</h3>
        <div className={currentStyles.container}>
            <p className={to ? 't-mail-to' : 't-mail-from'}>From: <b>{from || to}</b></p>
            <p className="t-mail-body">{body}</p>
        </div>
    </>;
};

export default Mail;