// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React from "react";
import styles from './AppRouter.module.css';
import {Link, Route, Switch} from "react-router-dom";
import Home from "../Home";
import InboxList from "../InboxList";
import InboxMail from "../InboxMail";
import OutboxList from "../OutboxList";
import OutboxMail from "../OutboxMail";

const AppRouter = (props) => {
    console.log(props);
    const {match} = props;
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.navList + ' t-nav-list'}>
                    <li className={styles.navElement}><Link className={styles.link + ' t-link-home'} to={match.url}>Home</Link></li>
                    <li className={styles.navElement}><Link className={styles.link + ' t-link-inbox'} to={`${match.url}/inbox`}>Inbox</Link></li>
                    <li className={styles.navElement}><Link className={styles.link + ' t-link-outbox'} to={`${match.url}/outbox`}>Outbox</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.content}>
                <Switch>
                    <Route path={match.path} component={Home} exact />
                    <Route exact path={`${match.path}/inbox`} component={InboxList}/>
                    <Route path={`${match.path}/inbox/:id`} component={InboxMail}/>
                    <Route exact path={`${match.path}/outbox`} component={OutboxList}/>
                    <Route path={`${match.path}/outbox/:id`} component={OutboxMail}/>
                </Switch>
            </div>
        </div>
    </div>;
};

export default AppRouter;