import React from 'react'
import { useCallback } from "react";
// import Footer from "./Footer.js"
import '../CSS/ErrorPage.css';
import Particles from 'react-tsparticles';
// import '../Scripts/ErrorPage.js'
import { loadFull } from "tsparticles";

const ErrorPage = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return <div className="content">
        <script src="https://cdn.jsdelivr.net/npm/tsparticles@1.28.0/dist/tsparticles.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/custom-elements-es5-adapter.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/webcomponents-loader.js"></script>
        <script type="module" src="https://cdn.jsdelivr.net/npm/web-particles@1.1.0/dist/web-particles.min.js"></script>
        
        <h3>404 // Page Not Found</h3>

        {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}


        <Particles 
            id="tsparticles" 
            options={{
                // options:{"fps_limit":60,"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onHover":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"push":{"particles_nb":4},"repulse":{"distance":200,"duration":0.4}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":"#ffffff","distance":150,"enable":true,"opacity":0.4,"width":1},"move":{"bounce":false,"direction":"none","enable":true,"outMode":"out","random":false,"speed":2,"straight":false},"number":{"density":{"enable":true,"area":800},"value":80},"opacity":{"value":0.5},"shape":{"type":"circle"},"size":{"random":true,"value":5}},"detectRetina":true},
                
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
            <div className="sad-mac"></div>
            <div className="message">
                Oops!!!!! This page was not found 
            </div>
            <div className="message">
                <a href="/">Go Home</a>
            </div>            
        </figure>



    </div>




}
        
export default ErrorPage

