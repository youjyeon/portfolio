import "./App.css";
import "./css/common.css";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Main from "./component/Main";
import Detail from "./component/Detail";
import d from "./skill.json";
import AOS from "aos";
function App() {
  const nav = useRef();
  const [items, setItems] = useState(d);
  const [blue, setBlue] = useState(null);
  const  [num, setNum]  = useState([]);

  
  const change = (c) => {
    if (c === "/") {
      setBlue("");
    } else {
      setBlue("change");
    }
  };


  const handleTop = (e) => {
    window.scrollTo({
      top: num[e.target.dataset.num],
      behavior: "smooth",
    });
  };

  
  window.onload = ()=>{
    const n = document.querySelectorAll('.num');
    let numArr = [];
    n.forEach(v => {
      numArr.push((v.offsetTop+60) - window.innerHeight*0.5);
    });
    setNum(numArr)    
  }

  const handleFollow = () => {
    
    let scroll = window.pageYOffset;
    let currentNum = 0;

    for (let i = 0; i < 3; i++) {
      if (scroll > num[i]) {
        currentNum = i;
      }
      nav.current.children[i].children[0].classList.remove("active");
    }
    nav.current.children[currentNum].children[0].classList.add("active");
  };


  useEffect(() => {
    AOS.init();
   
    window.addEventListener('scroll',handleFollow);
    return () =>{
        window.removeEventListener('scroll',handleFollow);
    }
    

 
  
  });

  return (
    <HashRouter>
      <div className={`total ${blue}`}>
        <div className="grid-wrap">
          <div className={`grid ${blue}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={`logo ${blue}`}>
          <Link to="/" onClick={handleTop}>
            <div className="barcode">
              <img src="../img/icon.png" />
            </div>
            <div className="logo-info">
              <div>
                <span><i className="from-top">Y</i></span><span><i className="from-bottom">O</i></span><span><i className="from-left">U</i></span>&nbsp;
                <span><i className="from-top">J</i></span><span><i className="from-left">U</i></span>&nbsp;<span><i className="from-top">Y</i></span>
                <span><i className="from-right">E</i></span><span><i className="from-left">O</i></span><span><i className="from-bottom">N</i></span>
              </div>
              <div>
                <span><i className="from-top">P</i></span><span><i className="from-left">O</i></span><span><i className="from-bottom">R</i></span>
                <span><i className="from-top">T</i></span><span><i className="from-right">F</i></span><span><i className="from-bottom">O</i></span>
                <span><i className="from-left">L</i></span><span><i className="from-left">I</i></span><span><i className="from-left">O</i></span>
              </div>
              <div>
                <span> <i className="from-top">@</i></span><span><i className="from-left">2</i></span><span><i className="from-bottom">0</i></span>
                <span><i className="from-top">2</i></span><span><i className="from-right">2</i></span>
              </div>
            </div>
          </Link>
        </div>
        <div className={`menu ${blue}`}>
          <ul className="nav" ref={nav}>
            <li className="anchor" >
              <p className="active" onClick={handleTop} data-num="0">
                {" "}
                ABOUT{" "}
              </p>
            </li>
            <li className="anchor">
              <p onClick={handleTop} data-num="1"> WORK </p>
            </li>
            <li className="anchor" >
              <p onClick={handleTop} data-num="2">CONTACT</p>
            </li>
          </ul>
          <div className="square">
            <img className="sq" src="../img/Artboard.png" />
            <p className="cir">
              <span></span>
              <span></span>
              <span></span>
            </p>
          </div>
        </div>

        <main>
          <Routes>
            <Route path="/" element={<Main hd={change} />}></Route>
            <Route
              path="/Detail/:id"
              element={<Detail hd={change} items={items} />}
            ></Route>
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
