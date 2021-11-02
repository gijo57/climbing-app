import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  authorized,
  path,
  redirect,
  ...rest
}) => {
  return (
    <Route
      path={path}
      render={(props) => {
        return authorized ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
