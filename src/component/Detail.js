import {useParams,useNavigate,useLocation} from "react-router-dom";
import React, {useState, useRef,useEffect} from 'react';
import '../css/detail.css';



function Detail({hd,items}){
    let locate = useLocation();
    hd(locate.pathname);
    const navigate = useNavigate();
    
    const goBack = () =>{
        navigate(-1);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [locate]);
    
  
    let { id } = useParams();
    let matchItems = items.work;
    let movie_key = matchItems[id - 1].num;
  
    if(movie_key == id ){
    return(
        
    <div className="detail_1">
      
         <div className="title_1">
            <p className="t_img"><img src={matchItems[movie_key-1].img[1]} /></p> 
            <h2 className="title">{matchItems[movie_key-1].title}</h2>
          
         </div>
         
       <ul className="pro_detail">
            <li><span className="de_name">NAME </span> <p>{matchItems[movie_key-1].title}</p></li>
            <li><span className="de_name">ABOUT </span><p>{matchItems[movie_key-1].detail}</p></li>
            <li><span className="de_name">DEVELOPMENT PERIOD  </span> <p>{matchItems[movie_key-1].date}</p></li>
            <li><span className="de_name">TOOL </span><p>{matchItems[movie_key-1].tool}</p></li>
            <li><span className="de_name">CONTRIBUTION </span><p>{matchItems[movie_key-1].contribution}</p></li>
            <li><span className="de_name">SITE </span> <p><a className="link" href={matchItems[movie_key-1].url}>{matchItems[movie_key-1].url}</a></p></li>
       </ul>
       <div className = "img">
           <p className="iframe_view">VIEW</p><br />
           <iframe   src={matchItems[movie_key-1].url} className={matchItems[movie_key-1].style} ></iframe>
         
       </div>
      

        <button className="back" onClick={goBack}> X HOME</button>
    </div>
   

     );
    }
   
}
export default Detail;