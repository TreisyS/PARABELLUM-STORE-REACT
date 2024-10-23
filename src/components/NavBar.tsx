import React, {useState} from "react";
import {Link } from 'react-router-dom';
import logo from '../img/Sin título-5.png';
import cartIcon from '../img/JJJJJJJJ.png';

const NavBar: React.FC = () =>
{

    const [searchQuery, setSearchQuery] = useState('');

    return(
<nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    background: '#002244'
}}>
<Link to="/">
<img src={logo} alt="logo de parabellum store" style={{width: '50px'}}/>

</Link>


<input
  type="text"
  placeholder="Search"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{
    width: '400px',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
  }}
/>
<Link to="/cart">
<img src={cartIcon} alt="Cart" style={{width:'50px'}}/>


</Link>
</nav>
    );
}

export default NavBar; 