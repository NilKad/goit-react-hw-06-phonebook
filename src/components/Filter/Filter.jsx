import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onInputHandle, filterValue }) => {
  return (
    <input
      type="text"
      name="filter"
      className={css.input}
      onInput={onInputHandle}
      value={filterValue}
    />
  );
};

Filter.propTypes = {
  onInputHandle: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
