'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine, RiMailLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img 
                                    src={"/images/about/vivek Agrahari portfolio.jpg"} 
                                    alt="Vivek Kumar Agrahari" 
                                    style={{
                                        borderRadius: '50%',
                                        width: '200px',
                                        height: '200px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <h2>Vivek Kumar Agrahari</h2>
                                <p>Sr. Software Engineer with expertise in Web Development</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="mailto:vivekprinceagrahari92@gmail.com"><RiMailLine size={20} /></Link></li>
                                        <li><Link href="https://www.linkedin.com/in/your-linkedin"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/your-github"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I'm Vivek Kumar Agrahari, a Sr. Software Engineer specializing in full-stack web development.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> +91 - 9140670492</li>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> 8+ years of experience in web development</li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero