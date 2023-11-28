import { useAuth } from "components/hooks";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;