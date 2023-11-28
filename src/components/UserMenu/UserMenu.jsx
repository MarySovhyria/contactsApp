import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <form>
            <p>Welcome {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
        </form>
    )
}
export default UserMenu;