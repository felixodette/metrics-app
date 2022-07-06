import React from 'react';
import PropTypes from 'prop-types';
import styles from './Country.module.css';

const Country = (props) => {
  const { name, number, vector } = props;

  return (
    <div className={styles.wrapper}>
      <i className={styles.right_arrow} />
      <img src={vector} alt={ `${name} map` } />
      <div>
        <h2>{name}</h2>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default Country;

Country.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  vector: PropTypes.string.isRequired,
};
