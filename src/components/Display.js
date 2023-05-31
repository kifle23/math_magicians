import PropTypes from 'prop-types';

function Display({ total, operation, next }) {
  return (
    <div className="display">
      {total}
      {operation}
      {next}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.number,
};
Display.defaultProps = {
  operation: null,
  next: null,
};

export default Display;
