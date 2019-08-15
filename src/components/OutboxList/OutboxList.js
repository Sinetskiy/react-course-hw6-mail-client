// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import {Link} from 'react-router-dom';
import styles from "../AppRouter/AppRouter.module.css";
import currentStyles from "./OutboxList.module.css";
import {withData} from "../../context/Data";

const OutboxList = (props) => {
    const {match, data} = props;
    return <>
        <h3 className={styles.title}>Outbox</h3>
        <div className={currentStyles.container + ' t-outbox-list'}>
            {data.outbox && data.outbox.map((mail) =>
                <Link key={mail.id} className={currentStyles.link}
                      to={`${match.url}/${mail.id}`}>{mail.body.substring(0, 53)}...</Link>
            )}
        </div>
    </>
};

export default withData(OutboxList);