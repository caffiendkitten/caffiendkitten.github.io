import React from 'react'
// import Footer from "./Footer.js"
import '../CSS/ErrorPage.css';
import Particles from 'react-tsparticles';
// import '../Scripts/ErrorPage.js'


const ErrorPage = () => {


    
    return <div className="content">
        <h3>404 // Page Not Found</h3>


        <Particles 
                params={{
                        particles: {
                            number:{
                                value:80,
                                    density:{
                                        enable:true,
                                        value_area:900
                                    }
                            },
                            color:{
                                value:"#000000"
                            },
                            shape:{
                                type:"circle",
                                stroke:{
                                    width:0,
                                    color:"#000000"},
                                polygon:{
                                    nb_sides:5
                                },
                                image:{
                                    src:"img/github.svg",
                                    width:100,
                                    height:100
                                }
                            },
                            opacity:{
                                value:0.2,
                                random:false,
                                anim:{
                                    enable:false,
                                    speed:1,
                                    opacity_min:0.1,"sync":false
                                }
                            },
                            size:{
                                value:3.945738208161363,
                                random:true,
                                anim:{
                                    enable:false,
                                    speed:7.192807192807193,
                                    size_min:0.1,
                                    sync:false
                                }
                            },
                            line_linked: {
                                enable:true,
                                distance:192.40944730386272,
                                color:"#000",
                                // opacity:0.1122388442605866,
                                opacity:0.8,
                                width:1,
                                shadow: {
                                    enable: true,
                                    color: "#000",
                                    blur: 5
                                }
                            },
                            move:{
                                enable:true,
                                speed:2,
                                direction:"none",
                                random:false,
                                straight:false,
                                out_mode:"out",
                                bounce:true,
                                attract:{
                                    enable:false,
                                    rotateX:561.194221302933,
                                    rotateY:801.7060304327614
                                }
                            }
                        // },
                        // interactivity:{
                        //     detect_on:"canvas",
                        //     events:{
                        //         onhover:{
                        //             enable:true,
                        //             mode:"repulse"
                        //         },
                        //         onclick:{
                        //             enable:true,
                        //             mode:"push"
                        //         },
                        //         resize:true
                        //     },
                        //     modes:{
                        //         grab:{
                        //             distance:400,
                        //             line_linked:{
                        //                 opacity:1
                        //             }
                        //         },
                        //         bubble:{
                        //             distance:400,
                        //             size:40,
                        //             duration:2,
                        //             opacity:8,
                        //             speed:3
                        //         },
                        //         repulse:{
                        //             distance:64.96617698410762,
                        //             duration:0.4
                        //         },
                        //         push:{
                        //             particles_nb:4
                        //         },
                        //         remove:{
                        //             particles_nb:2
                        //         }
                        //     }
                        }
                        
                    }}
                style={{
                    width: '100%'
                    // backgroundImage: `url(${logo})` 
                }}
            />

        <figure>
            <div class="sad-mac"></div>
            <div class="message">
                Oops! This page was not found 
            </div>
            <div class="message">
                <a href="/">Go Home</a>
            </div>            
        </figure>



    </div>




}
        
export default ErrorPage

