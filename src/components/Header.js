import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="Logo" onClick={() => navigate('/')}>
        BOX OFFICE
      </div>
      <nav>
        <ul>
          <li onClick={() => navigate('/')}>TOP 10</li>
          <li onClick={() => navigate('/like')}>찜한 리스트</li>
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(Header);
