import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to= '/'>everythingMeta</Link></h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create Blog</a>
                <a href= "/about">About Us</a>
            </div>
        </nav>
     );
}
 
export default Navbar;