import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alert !== null && (
      <div className={`shadow-md + ${alertContext.alert.type}`}>
        <i className='fas fa-info-circle'></i> {alertContext.alert.msg}
      </div>
    )
  );
};

export default Alert;
