import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <section>
      <div className="error-wrapper">
        <h2>404 Error: Page Not Found</h2>
        <Link to={'/dashboard'}>
          <button className="go-back-button">
            Go To Dashboard!
          </button>
        </Link>    
      </div>
    </section>
  )
}

export default Error;