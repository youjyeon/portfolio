import '../css/main.css';
import React,{useState,useEffect,useRef} from "react";
import Skill from '../component/Skill';
import Work from '../component/Work';
import Contact from '../component/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
function Main({hd}){

   

    useEffect(()=>{
        AOS.init({
            duration : 1000
        });

       
        
    
    },[])

    hd('/');
    return(
        <div className="content-wrap">      
                <div className="content">                    
                    <div className="page-section">
                        <div className="first">
                            <div className="first_1">
                                <span className="num">01</span>
                             <img className="me" src="../img/me2.jpg"/>
                            </div>
                        </div>
                        <div className="first2">
                            <h1 className="title">
                                <span className="text"><span >About</span></span>
                            </h1>
                        </div>
                        <div className="introduce">
                            <p>
                                안녕하세요<br />
                                FRONT-END<br />
                                ENGINEER<br />
                                <span className="name">유주연</span>입니다
                            </p>
                            <div className="intro_2"  data-aos="fade-up">
                                <p>ACTIVE<br />
                                    TRENDY<br />
                                    SIMPLE<br />
                                    flexibility<br />
                                    ENFJ<br />
                                </p> 
                            </div>
                             <img className="me2" src="../img/juyeon3.jpeg"/>
                        </div>
                    
                        <Skill />
                        <Work />
                        <Contact />
                    </div>
                </div>
        </div>        
    );
}
export default Main;