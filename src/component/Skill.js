import d from "../skill.json";
import React,{useState,useEffect,useRef} from "react"
import '../css/skill.css';
import AOS from "aos";
import "aos/dist/aos.css";
function Skill (){

    let data = [];
    let item = useRef();
    let item_l = useRef(d.HTML.name);

    const [pData,setPdata] = useState([]);
    const [iData,setIdata] = useState(d.HTML.img);
    const [iData2,setIdata2] = useState();
     const [ddata,setDdata] = useState(90);
    const [ddata2,setDdata2] = useState(0);
    let [blue,setBlue] = useState(null);

    const [pPer,setPer] = useState(d.HTML.detail_p);
    const [pPer2,setPer2] = useState(d.HTML.detail_p2);  
    const [pPer3,setPer3] = useState(d.HTML.detail_p3);
    const [pPer4,setPer4] = useState(d.HTML.detail_p4);

    let [detail1,setDetail1] = useState(d.HTML.detail);
    let [detail2,setDetail2] = useState(d.HTML.detail2);
    let [detail3,setDetail3] = useState(d.HTML.detail3);
    let [detail4,setDetail4] = useState(d.HTML.detail4);

    const canvasRef = useRef(null);

    let pos ={x:0,y:0};
    let num =0; 
  
   const hstyle = {
   animation: "p"+pPer+" 1s forwards"
   }
   const hstyle2 = {    
    animation: "p"+pPer2+" 1s forwards"
   }
   const hstyle3 = {
    animation: "p"+pPer3+" 1s forwards"
   }
   const hstyle4 = {   
    animation: "p"+pPer4+" 1s forwards"
   }

    const Canvas = (n) =>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
      
        context.strokeStyle = "black";
        context.lineWidth = 2.5;

        pos.x = canvas.width/2;
        pos.y = canvas.height/2;
 
        num++;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.font = '40px notosans';

        context.fillStyle= '#fff';
        context.textAlign = 'center';     /*left,right,center*/
        context.textBaseline = 'middle';  /*top,middle,bottom*/
        context.fillText(n+'%',pos.x,pos.y);
        context.lineWidth = 40;

        context.beginPath();
        context.strokeStyle = '#fff';
        context.arc(pos.x,pos.y,100,0,Math.PI*2,false);
        context.stroke();

        context.beginPath();
        context.strokeStyle = 'rgb(233, 72, 8)';
        context.arc(pos.x,pos.y,100,0,(Math.PI*2)*num/100,false);
        context.stroke();
      
        if(num < n) requestAnimationFrame(()=>Canvas(n));
      }

      const Change =(e) =>{
        for(let i = 0; i < 9; i++){
            item_l.current.children[i].classList.remove('on');
          }
          item_l.current.children[e.target.dataset.num].classList.add('on');
          
        if(e.target.innerHTML == "C" || e.target.innerHTML =="Unity"){
            setBlue('change');
        }else{
            setBlue('');
        }
        
             setDdata(pData[e.target.dataset.num].per);
             setDdata2(pData[e.target.dataset.num].per2);
             setDetail1(pData[e.target.dataset.num].detail);
             setDetail2(pData[e.target.dataset.num].detail2);
             setDetail3(pData[e.target.dataset.num].detail3);
             setDetail4(pData[e.target.dataset.num].detail4);
             setIdata(pData[e.target.dataset.num].img);
             setIdata2(pData[e.target.dataset.num].img2);
             setPer(pData[e.target.dataset.num].detail_p);
             setPer2(pData[e.target.dataset.num].detail_p2);
             setPer3(pData[e.target.dataset.num].detail_p3);
             setPer4(pData[e.target.dataset.num].detail_p4);

           
        
             Canvas(ddata); 
     }

     useEffect(() => {  
   
        AOS.init();
        for(let k in d){
            data.push({
                "name": d[k].name,
                "per": d[k].per,
                "per2": d[k].per2,
                "detail":d[k].detail,
                "img":d[k].img,
                "img2":d[k].img2,
                "detail2":d[k].detail2,
                "detail3":d[k].detail3,
                "detail4":d[k].detail4,
                "detail_p":d[k].detail_p,
                "detail_p2":d[k].detail_p2,
                "detail_p3":d[k].detail_p3,
                "detail_p4":d[k].detail_p4

              });
        }
        setPdata(data);
        Canvas(ddata);
    },[]);


   

    return(
    <>

        <div className="second" data-aos="fade-up"  > 
            <h1 className="s_title" >
                <span className="s_text"><span className="s_name1">MY</span></span><br />
                <span className="s_text"><span className="s_name">Skill</span></span>
            </h1>
       
        <div className="chart">
            <div className="canvas">
                <canvas width="300px" height="300px"ref={canvasRef}></canvas>  
                    <ul className={`detail_l ${blue}`}>
                        <li className="detail_li">{detail1}
                            <p className="progress"><span className="bar" style={hstyle} >{pPer}%</span></p>
                        </li>
                        <li className="detail_li">{detail2}
                            <p className="progress"><span className="bar"  style={hstyle2} >{pPer2}%</span></p>
                        </li>
                        <li className="detail_li">{detail3}
                            <p className="progress"><span className="bar"  style={hstyle3} >{pPer3}%</span></p>
                        </li>
                        <li className="detail_li">{detail4}
                            <p className="progress"><span className="bar"  style={hstyle4}  >{pPer4}%</span></p>    
                        </li>                
                    </ul>
                </div>
            <div className="list">
                <ul ref={item_l} >
                    {
                         pData?.map(function(v,k){
                        return(
                                <li 
                                className={v.name=="HTML" ? 'on' : ''}
                                    ref={item}
                                    key = {k} 
                                    data-num = {k} 
                                    onClick={Change}
                                   >
                                    {v.name}
                                 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className= "icon">
                <img className="img_1" src={iData} />
                <img className="img_2" src={iData2} />                       
           </div>
        </div>
    </div>
        </>

    );
}
export default Skill;