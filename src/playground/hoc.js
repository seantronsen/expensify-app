// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract State

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to view the information.</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo info="There are the details" isAuthenticated={false} />,
  document.getElementById("app")
);
