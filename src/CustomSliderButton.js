import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export const CustomSliderButton = ({ direction, onClick }) => {
  const icon = direction === 'previous' ? faAngleLeft : faAngleRight;
  return (
    <button className={`${direction}-button`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CustomSliderButton;