import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './City.module.css';

const City = (props) => {
  const { title } = props;

  return (
    <Link to="/details" className={styles.city}>
      <span>{title}</span>
      <div className={styles.info}>
        <span>AQI: 5</span>
        <i className="right_arrow" />
      </div>
    </Link>
  );
};

export default City;

City.propTypes = {
  title: PropTypes.string.isRequired,
};
