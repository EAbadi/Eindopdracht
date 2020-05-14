import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import AutheticationService from './AutheticationService.js'


class Header extends Component {
  
        
    render() {

        let isUserLoggedIn = AutheticationService.isUserLoggedIn();
        //console.log("isUserLoggedIn: "+isUserLoggedIn)
       
        
        
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="/">MijnWebsiteLogoLink</a></div>
                    <ul className="navbar-nav">
                        {/* Gebruik className="nav-link"  in de <Link> tag en NIET in <li>, anders
                        zal de bootstrap niet echt werken en de navigatiebar niet zo mooi uitzien!*/}
                         <li ><Link to="/" className="nav-link">Home </Link> </li>
                        <li><Link to="/categories" className="nav-link">Categories</Link></li>
                        <li><Link to="/products" className="nav-link">Products</Link></li>
                        <li><Link to="/products2" className="nav-link">Products2</Link></li>
                        <li><Link to="/test/user" className="nav-link">User Role Test</Link></li>
                        
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                    {(AutheticationService.isUserAdmin() === 'admin') ? <li><Link to="/AdminDashboard" className="nav-link">Admin Dashboard</Link></li> : ''}
                        {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AutheticationService.logout}>Logout</Link></li>}

                        
                        
                    </ul>
                    <Link to='/cart' className="ml-auto"> <button><i className="fas fa-cart-plus"/> my cart</button></Link>
                </nav>
            </header>
        )
    }
}
export default Header