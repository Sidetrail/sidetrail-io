import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import withNavBar from '../PageComponent/PageComponent';
import './PageNotFound.scss';

const PageNotFound = props => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/404', { replace: true });
  }, [navigate]);
  return (
    <div className="pageNotFound">
      <div className="notFoundIcon">
        <i className="fas fa-search" />
      </div>
      Sorry, Couldn't find the page you are looking for!
    </div>
  );
};

export default withNavBar(PageNotFound);
