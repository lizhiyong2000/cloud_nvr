import React from 'react';
import styles from './index.css';
import { useIntl } from 'umi';

export default function() {
  const intl = useIntl();
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {intl.formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
