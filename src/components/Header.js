import Navigation from "./Navigation";
import logo from './assets/IgnaciosWebDev.png'


function Header() {

  return <div className="header">
    <img className="logo" src={logo} alt='Ignacio Web Dev🔧' />
    <Navigation/>
    </div>

}

export default Header;
