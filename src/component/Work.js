import d from "../skill.json";
import React,{useState,useEffect,useRef} from "react"
import {Link} from "react-router-dom";
import '../css/work.css';
import AOS from "aos";
import "aos/dist/aos.css";


function Work(){
    let w_data = [];
    let item = useRef();
    const[wlist,setWlist] = useState([]);
    const[wnum,setWnum] = useState(0);

    const hoverHandler = (e) =>{
        setWnum(e.target.dataset.num);
    }

    useEffect(() => {
        AOS.init();  
        const list = d.work;
        list.forEach((value) =>{
            w_data.push(value);
        })
        setWlist(d.work);
      
    },[]);
   

    return(
   <>
        <div className="third">
            <div className="third_1">
                    <span className="num">02</span>
            </div>
        </div>

        <div className="third2" data-aos="fade-up">
            <h1 className="title">
                <span className="text">Work</span>
                <div className="title_l">
                    <span className="s_name1">PRO</span><br />
                    <span className="s_name1">JECTS</span><br />
                </div>
            </h1>
        </div>
      
       
        <div className="work_l">
           <ul className="w_ul"  >
           {
                         wlist?.map(function(v,k){
                        return(
                            <li className="w_li "
                                key={k}
                                ref={item}
                            >
                            <Link to={`/Detail/${v.num}`} 
                            onMouseEnter={hoverHandler}
                            data-num={k}>{v.title}</Link>           
                                </li> 
                            )
                        })
                    }
           </ul>
           <div className="imgs_1" data-aos="fade-up"> <img src={d.work[wnum].img[0]}  /></div>
           <div className="imgs_2" data-aos="fade-up"> <img src={d.work[wnum].img[1]}  /></div>
           <div className="imgs_3" data-aos="fade-up"> <img src={d.work[wnum].img[2]}  /></div>

           </div>

           
    </>
    );
}
export default Work;