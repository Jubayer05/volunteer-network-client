import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Volunteering } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const {volunteerInfo, selectedEvent} = useContext(Volunteering);
  const [info, setInfo] = volunteerInfo;  

    return (
        <Route
      {...rest}
      render={({ location }) =>
        info.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;