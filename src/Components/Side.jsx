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
                    <h2 className="heading">Education & Certification</h2>
                    <div className="content">
                        <div className="item">                      
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> BA Computer Science</h3>
                            <h4 className="university">University of Colorado Boulder <span className="year">(2015-2019)</span></h4>
                        </div>
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> Study Abroad</h3>
                            <h4 className="university">Akita International University <span className="year">(2019)</span></h4>
                        </div>
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> Certified Associate in Project Management</h3>
                            <h4 className="university">Project Management Institution <span className="year">(Nov 2019)</span></h4>
                        </div>
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"></i> Certified Cloud Practitioner</h3>
                            <h4 className="university">Amazon Web Services <span className="year">(Aug 2020)</span></h4>
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

            <aside className="list music aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Currently reading</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fas fa-headphones"></i> <a href="https://www.amazon.com/Tattooist-Auschwitz-Novel-Heather-Morris/dp/0062797158">The Tattooist of Auschwitz - Heather Morris</a></li>
                            <li><i className="fas fa-headphones"></i> <a href="https://www.amazon.com/Brief-Wondrous-Life-Oscar-Wao/dp/1594483299/ref=sr_1_1?crid=32FHEZ8QQF3SE&dchild=1&keywords=the+brief+wondrous+life+of+oscar+wao&qid=1599961297&s=books&sprefix=the+brief%2Cstripbooks%2C183&sr=1-1">The Brief Wondrous Life of Oscar Wao - Junot Díaz</a></li>
                            <li><i className="fas fa-headphones"></i> <a href="https://www.amazon.com/Kite-Runner-Khaled-Hosseini/dp/159463193X/ref=sr_1_1?dchild=1&keywords=the+kite+runner&qid=1599961325&s=books&sr=1-1">The Kite Runner - Khaled Hosseini</a></li>
                            <li><i className="fas fa-headphones"></i> <a href="https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021">12 Rules for Life: An Antidote to Chaos - Jordan Peterson</a></li>
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