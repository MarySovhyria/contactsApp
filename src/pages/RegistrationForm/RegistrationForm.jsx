import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from 'components/Register/Register';

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}