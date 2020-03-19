import React from 'react';
import './nav.css'

function Nav() {
  return (
    <div>
     <nav>
       <ul>
         <li>
           saral
         </li>
         <li>
         <i class="fa fa-search" aria-hidden="true"></i>
         <input type="text" className="search"></input>
         </li>
         <li>
           courses
         </li>
       </ul>
     </nav>
    </div>
  );
}

export default Nav;
