import React, { FC } from 'react';
import { useSelector } from '../services/hooks';

const ListErrors: FC = () => {
  const errors = useSelector((state) => state.api.errorMessage);
  if (errors) {
    return (
      <ul className='error-messages'>
        {Object.keys(errors).map((key) => (
          <li key={key}>
            {key}
            {' '}
            {errors[key]}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default ListErrors;
