import React from 'react';

function Header() {
return (
<header className="header">
<div className="container clearfix">                  
    <img className="profile-image img-fluid float-left rounded-circle" src="assets/images/profile.png" alt="Profile"/>
    <div className="profile-content float-left">
        <h1 className="name">Sean Patterson</h1>
        <h2 className="desc">Software Developer</h2>   
    </div>          
</div>
</header>
)
}

export default Header