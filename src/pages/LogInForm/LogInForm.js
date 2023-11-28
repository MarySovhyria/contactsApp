import { Helmet, HelmetProvider } from 'react-helmet-async';

import LogIn from 'components/LogIn/LogIn';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LogIn/>
      </div>
    </HelmetProvider>
  );
}