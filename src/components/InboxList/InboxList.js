// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import {Link} from 'react-router-dom';
import styles from "../AppRouter/AppRouter.module.css";
import currentStyles from "./InboxList.module.css";
import {withData} from "../../context/Data";

const InboxList = (props) => {
    const {match, data} = props;
    return <>
        <h3 className={styles.title}>Inbox</h3>
        <div className={currentStyles.container + ' t-inbox-list'}>
            {data.inbox && data.inbox.map((mail) =>
                <Link key={mail.id} className={currentStyles.link}
                      to={`${match.url}/${mail.id}`}>{mail.body.substring(0, 53)}...</Link>
            )}
        </div>
    </>
};

export default withData(InboxList);