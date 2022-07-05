import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = (props) => {
  const { heading } = props;

  return (
    <header>
      <i className={styles.backButton} />
      <div className={styles.icon}>
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

