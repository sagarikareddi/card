import React from "react";
import "./Cardsample.css"
function Cardsample(props){
    return (
      <div className="Cards">
        <div className="Cardsample">
          <div className="image" >
            <img src={props.image} alt="" width="303px" height="300px" />
          </div>
          <div className="Head">
            <div className="title">
              <span>{props.title}</span>
            </div>
            <div className="value">
              <p className="big">$3.99</p>
              <p className="smltxt">$5.99</p>
            </div>
          </div>
          <div className="diff">
            <div className="Color">
              {props.color.map((value) => (                <div className="circle" style={{border :`2px solid ${value}`}}></div>
              ))}
            </div>
            <div className="Size">
              <div className="sizes">S</div>
              <div className="sizes">M</div>
              <div className="sizes">L</div>
            </div>
          </div>
          <div className="rate">
            <div className="rating">{props.rate}</div>
            <div className="buy">
                BUY +
            </div>
          </div>
        </div>
        <div className="Coupan">
          <div className="coupandetails">
            <p className="txtt">{props.coupan}</p>
            <h2>{props.coupancode}</h2>
          </div>
          <div className="off">
            20% <br/> OFF
          </div>
        </div>
      </div>
    );
}
export default Cardsample;