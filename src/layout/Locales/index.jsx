import React from 'react';
import Cookie from 'js-cookie';

import styles from './index.module.scss';

const Locales = () => {
  const handleSwitchLang = event => {
    const { lang } = event.target.dataset;

    Cookie.set('lang', lang, { path: '/' });
    window.location.reload();
  };

  return (
    <div className={styles.locales}>
      <span data-lang="zh_CN" onClick={handleSwitchLang}>
        简体中文
      </span>
      &nbsp; · &nbsp;
      <span data-lang="en" onClick={handleSwitchLang}>
        English
      </span>
    </div>
  );
};

export default Locales;
