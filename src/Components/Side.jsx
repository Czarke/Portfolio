import React from 'react';

function Side() {
    return (
        <div className="secondary col-lg-4 col-12">
            <aside className="info aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>Boulder, CO</li>
                            <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span>slpatterson97@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </aside>
            
            <aside className="skills aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <p className="intro">
                            I learn new languages quickly with strong fundamental programming capabilities. These are the technologies I understand best:</p>
                        
                        <div className="skillset">
                            
                            <div className="item">
                                <h3 className="level-title">Python<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Experienced</span></h3>
                                <div className="level-bar">
                                    <div className="python" data-level="85%">
                                    </div>                                      
                                </div>
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title">Javascript (React)<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Moderate</span></h3>
                                <div className="level-bar">
                                    <div className="javascript" data-level="85%"></div>                                      
                                </div>
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title">HTML5 & CSS3<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Moderate</span></h3>
                                <div className="level-bar">
                                    <div className="html" data-level="60%">
                                    </div>                                      
                                </div>
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title">GraphQL<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Moderate</span></h3>
                                <div className="level-bar">
                                <div className="graphql" data-level="50%">
                                    </div>                                      
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>
            </aside>
            
            <aside className="education aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        <div className="item">                      
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> BA Computer Science</h3>
                            <h4 className="university">University of Colorado Boulder <span className="year">(2015-2019)</span></h4>
                        </div>
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> Study Abroad</h3>
                            <h4 className="university">Akita International University <span className="year">(2019)</span></h4>
                        </div>
                    </div>
                </div>
            </aside>
                        
            <aside className="languages aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Languages</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="item">
                                <span className="title"><strong>English:</strong></span>
                                <span className="level"> Native Proficiency <br className="visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                            </li>
                            <li className="item">
                                <span className="title"><strong>Japanese:</strong></span>
                                <span className="level"> Conversational Proficiency <br className="visible-sm visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            
            
            <aside className="list music aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Favourite coding music</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fas fa-headphones"></i> <a href="https://open.spotify.com/artist/50JJSqHUf2RQ9xsHs0KMHg">Jon Bellion</a></li>
                            <li><i className="fas fa-headphones"></i> <a href="https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq">Joji</a></li>
                            <li><i className="fas fa-headphones"></i> <a href="https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH">SEVENTEEN</a></li>
                            <li><i className="fas fa-headphones"></i> <a href="https://open.spotify.com/artist/1snhtMLeb2DYoMOcVbb8iB">Kenshi Yonezu</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
            
            <aside className="credits aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Credits</h2>
                    <div className="content">
                        <ul className="list-unstyled pb-2">
                            <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>Bootstrap</a></li>
                            <li><a href="https://fortawesome.github.io/Font-Awesome/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>FontAwesome</a></li>
                            <li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>jQuery</a></li>
                            
                            <li><a href="https://github.com/sdepold/jquery-rss" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>jQuery RSS</a></li>
                            
                        </ul>
                        
                       
                        
                    </div>
                </div>
            </aside>
            
        </div>
    )
}

export default Side