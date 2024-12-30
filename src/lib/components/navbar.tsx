import Link from "../../../node_modules/next/link"
import { NavLink } from './navLink';

export const Navbar = () =>{
    return <>
        <nav className="navbar has-background-dark">
            <NavLink className="navbar-item is-color-white" href="/">home</NavLink>
            <NavLink className="navbar-item is-color-white" href="/books">books</NavLink>
        </nav>
    </>
}