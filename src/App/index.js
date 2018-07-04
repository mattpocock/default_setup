import React from 'react';
import styles from './index.scss';

const App = () => (
    <div>
        <h1
            className={styles.green}
        >
            Hello World
        </h1>
        <h3
            className={styles.red}
        >
            Now with CSS Modules!
        </h3>
    </div>
);

module.exports = App;
