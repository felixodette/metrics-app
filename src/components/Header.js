import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = (props) => {
  const { heading } = props;
  return (
    <header>
      <i className={styles.previous} />
      <h1>{ heading }</h1>
      <div className={styles.icons}>
        <i className={styles.mic} />
        <i className={styles.settings} />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
