import React from 'react';

function Latest() {
return (
<section className="latest section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Projects</h2>
                        <div className="content">    
                                               
                            <div className="item featured text-center">
                                
                                <div className="featured-image has-ribbon">
                                    <a href="https://github.com/Czarke/CreditBonus" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-featured.png" alt="project name" />
                                    </a>
                                </div>
                                
                                <h3 className="title mb-3"><a href="https://github.com/Czarke/CreditBonus" target="_blank" rel="noopener noreferrer">CreditBonus - Which credit card should I use here?</a></h3>
                                    
                                <div className="desc text-center">                                    
                                    <p>The inspiration for this project came when I was applying for my first credit card. After looking into the different cash returns on credit cards, I decided to put an app together that informs the user of their best bonus at a location. I created a dictionary in Python containing different cards and their bonuses, then compared them to types of locations via Google Maps API.</p>
                                </div>
                                <p><a className="more-link" href="https://github.com/Czarke/CreditBonus" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>Github repo</a></p>       
                            </div>
                            <hr className="divider" />
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://github.com/Czarke/Kantogram" target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-1.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://github.com/Czarke/Kantogram" target="_blank" rel="noopener noreferrer">Kantogram - Social media for Kanto performers (currently rewriting)</a></h3>
                                    <p className="mb-2">This app is inspired by Instagram, with a twist that it's meant for fellow Kanto performers to share their teams and experiences. It is developed in React with typescript. It uses Express to connect the client side to a GraphQL server. I am currently rewriting this using GatsbyJS</p>
                                </div>                       
                            </div>
                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://github.com/Czarke/SpaceFarmRocket/tree/master/Graphics%20Final" target="_blank" rel="noopener noreferrer">
                                <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-2.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://github.com/Czarke/SpaceFarmRocket/tree/master/Graphics%20Final" target="_blank" rel="noopener noreferrer">Rocket - A short rocket launch animation graphic</a></h3>
                                    <p className="mb-2">This is the final project for my graphics class. I designed this as an addition to a previous project, a game called SpaceFarm. It is designed in C and compiled using a make file.</p>
                                    <p><a className="more-link" href="https://github.com/Czarke/SpaceFarmRocket/tree/master/Graphics%20Final" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>Github repo</a></p>
                                </div>                       
                            </div>
                            
                        </div> 
                    </div>               
                </section>
)
}

export default Latest