import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../preloader/preloader';
import lpStyles from '../two-columns/two-columns.module.css';

interface ILoaderProtectorProps {
  isLoaded: boolean;
  children: ReactNode;
}

const LoaderProtector : FC<ILoaderProtectorProps> = ({ isLoaded: boolean, children }) => {

  if (isLoaded) {
    return (
      <div>
        {children}
      </div>
    );
  }
  return <div className={lpStyles.loading}><Preloader /></div>;
};

LoaderProtector.propTypes = {
  children: PropTypes.element.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default LoaderProtector;
