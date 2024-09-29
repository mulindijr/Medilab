import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaAngleRight} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

    const SocialMedia = [
        { icon: FaTwitter, url: "https://twitter.com/mulindijr" },
        { icon: FaFacebook, url: "https://www.facebook.com/mulindijr" },
        { icon: FaInstagram, url: "https://www.instagram.com/mulindijr" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/mulindijr" }
    ];
    
  return (
    <>
        <div style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
            <div className='footer'>
                <div className='footer-flex'>
                    <div>
                        <h1>Medilab</h1>
                        <p>C63 Kimtech Properties, Ruiru, Kenya</p>
                        <div>
                            <p><span style={{fontWeight:"600"}}>Phone:</span>+25413621330</p>
                            <p><span style={{fontWeight:"600"}}>Email:</span>contact@medilab.com</p>
                        </div>
                    </div>
                    <div className='links-newsletter'>
                        <div>
                            <h2>Useful links</h2>
                            <ul className='footer-links'>
                                <li><Link to="home" smooth={true} duration={1500} spy={true}><FaAngleRight /> Home</Link></li>
                                <li><Link to="about" smooth={true} duration={1500} spy={true} offset={-90}><FaAngleRight /> About</Link></li>
                                <li><Link to="services" smooth={true} duration={1500} spy={true} offset={-90}><FaAngleRight /> Services</Link></li>
                                <li><Link to="departments" smooth={true} duration={1500} spy={true} offset={-70}><FaAngleRight /> Departments</Link></li>
                                <li><Link to="doctors" smooth={true} duration={1500} spy={true} offset={-90}><FaAngleRight /> Doctors</Link></li>
                                <li><Link to="contact" smooth={true} duration={1500} spy={true} offset={-90}><FaAngleRight /> Contact</Link></li>
                            </ul>
                        </div>

                        <div className='newsletter'>
                            <h2>Join Our Newsletter</h2>
                            <p>Stay updated with our latest news, special offers, and exclusive content by joining our newsletter. Sign up now</p>
                            <form className='newsletter-form' method="post">
                                <input type="email" name="email" placeholder="Enter your email" required />
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div> 
                    </div>
                </div>     
            </div>

            <div className='copyright-bg'>
                <div className='copyright-content'>
                    <div className='rights-reserved'>
                        <p>© Copyright Medilab. All Rights Reserved</p>
                        <p>Designed & Created by <a href="https://linkedin.com/in/mulindijr" target="_blank">Mulindi Jr</a></p>
                    </div>

                    <div className="footer-social-icons">
                        {SocialMedia.map((social, idx) => (
                            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">
                                <social.icon className='socio-icon' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;
