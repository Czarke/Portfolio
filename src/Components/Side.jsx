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
                            <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a href="#">slpatterson97@gmail.com</a></li>
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
                                    <div className="level-bar-inner" data-level="85%">
                                    </div>                                      
                                </div>
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title">Javascript (React)<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Experienced</span></h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="85%">
                                    </div>                                      
                                </div>
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title">HTML5 & CSS3<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Moderate</span></h3>
                                <div className="level-bar">
                                    <div className="level-bar-inner" data-level="60%">
                                    </div>                                      
                                </div>
                            </div>
                            
                            <div className="item">
                                <h3 className="level-title">GraphQL<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Moderate</span></h3>
                                <div className="level-bar">
                                <div className="level-bar-inner" data-level="50%">
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
                            <li><a href="https://getbootstrap.com/" target="_blank"><i className="fas fa-external-link-alt"></i>Bootstrap</a></li>
                            <li><a href="https://fortawesome.github.io/Font-Awesome/" target="_blank"><i className="fas fa-external-link-alt"></i>FontAwesome</a></li>
                            <li><a href="https://jquery.com/" target="_blank"><i className="fas fa-external-link-alt"></i>jQuery</a></li>
                            
                            <li><a href="https://github.com/sdepold/jquery-rss" target="_blank"><i className="fas fa-external-link-alt"></i>jQuery RSS</a></li>
                            
                        </ul>
                        
                        <hr/>
                        
                            <p className="pt-2">This Bootstrap 4 portfolio template is handcrafted by UX designer <a href="https://twitter.com/3rdwave_themes" target="_blank">Xiaoying Riley</a> at <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a> for developers and is <strong>FREE</strong> as long as you keep the footer attribution link.</p>
                            <p>If you’d like to <strong>use this template without the attribution link</strong>, you can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/" target="_blank">buy the commercial license</a>.</p>
                            
                            <a className="btn btn-cta-primary btn-download" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/" target="_blank"><i className="fas fa-download"></i> I want to download</a>
                        <hr/>
                        <h5 className="subheading pt-3">Want more free Bootstrap themes and templates?</h5>
                        <p>Check out our <a href="https://themes.3rdwavemedia.com/bootstrap-templates/free/">collection of free themes and templates.</a></p>
                        <p>Follow <a href="https://twitter.com/3rdwave_themes" target="_blank">Xiaoying</a> on twitter so you don't miss any future freebies!</p> 
                        
                        <a className="btn btn-cta-secondary btn-follow" href="https://twitter.com/3rdwave_themes" target="_blank"><i className="fab fa-twitter"></i> Follow on twitter</a>
                        
                    </div>
                </div>
            </aside>
            
        </div>
    )
}

export default Side