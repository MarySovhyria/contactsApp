import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNavigation/AuthNavigation';
import { useAuth } from 'components/hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <header>
      <Navigation />
      {renderNavigation()}
    </header>
  );
};

export default AppBar;