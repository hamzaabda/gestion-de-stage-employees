import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = ()=>{

return(
<>
<div className="navbar">
<div className="navbar_left">
    <b>Work Space</b>

</div>

<div className="navbar_right">

<div className="navbar_profile_search">
<FontAwesomeIcon icon={faMagnifyingGlass} className="small gray"/>
<input type="text" placeholder="Search.."/>

</div>

<button className="navbar_profile_button">
 <FontAwesomeIcon icon={faSquarePlus}/>Create
</button>

<div className="navbar_profil_image">
    <img src=""/>
</div>



</div>







</div>


</>


)


}
export default Navbar;