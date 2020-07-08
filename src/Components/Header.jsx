import React from 'react';

function Header() {
return (
<header className="header">
<div className="container clearfix">                  
    <img className="profile-image img-fluid float-left rounded-circle" src="assets/images/profile.png" alt="profile image" />
    <div className="profile-content float-left">
        <h1 className="name">Sean Patterson</h1>
        <h2 className="desc">Software Developer</h2>   
        <ul className="social list-inline">
            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt"></i></a></li>                  
        </ul> 
    </div>          
</div>
</header>
)
}

export default Header