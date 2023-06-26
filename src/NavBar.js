import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'
import useUser from './hooks/useUser';

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <>
        <nav>
            <h1>Full Stack Blog (MERN)</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    {user
                        ? <a href="" onClick={() => {
                            signOut(getAuth());
                        }}>Log Out</a>
                        : <a href="" onClick={() => {
                            navigate('/login');
                        }}>Log In</a>
                    }
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;