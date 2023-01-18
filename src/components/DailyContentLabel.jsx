import React from 'react';
import PropTypes from 'prop-types';

function DailyContentLabel({ icon, label, content }) {
  return (
    <span className="flex justify-center items-center gap-x-1 text-white text-sm">
      {icon}
      <span className="font-light capitalize">{label}</span>
      <span className="font-medium">{content}</span>
    </span>
  );
}

DailyContentLabel.defaultProps = {
  icon: undefined,
};

DailyContentLabel.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DailyContentLabel;
