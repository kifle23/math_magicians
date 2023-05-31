import PropTypes from 'prop-types';

function Display({ total, operation, next }) {
  return (
    <div className="display">
      {total !== 0 ? total : ''}
      {operation}
      {next}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};
Display.defaultProps = {
  total: null,
  operation: null,
  next: null,
};

export default Display;
