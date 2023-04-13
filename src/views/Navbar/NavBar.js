import react from 'react'
import './NavBar.scss'
import {
    NavLink,
    Link
} from "react-router-dom";


class Nav extends react.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink activeClassName='active' to="/" exact={true}>
                    Home
                </NavLink>
                <NavLink activeClassName='active' to="/todos">
                    Todos
                </NavLink>
                
                {/* <Link className='active' to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/about">About</Link> */}

                {/* <a className="active" href="/">Home</a>
                <a href="/todos">Todos</a>
                <a href="/about">About</a> */}
            </div>
        )
    }
}

export default Nav