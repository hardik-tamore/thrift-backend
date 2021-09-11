import { Button } from "@material-ui/core";
import React from "react";
import tshirt from "../Assets/varsity.JPG";
import FileCopyIcon from '@material-ui/icons/FileCopy';

function Card({title, size, price, id, copy_text, photo}) {
  return (
    <div className="card">
      <div className="card-image">
          <FileCopyIcon id = 'copy-btn' onClick={() => {navigator.clipboard.writeText(copy_text)}} />
        <img src={`https://cryptic-lowlands-74955.herokuapp.com/uploads/285ec4fa-626e-41b2-abb6-1da25c7de6ec-1631365587642.JPG`} />
      </div>
      <div className="card-info">
        <h5>{title+' ('+size+')'}</h5>
        <div className ='card-info-desc'>
        <h6>{price}</h6>
   
       
        </div>
      </div>
      <div className="card-btn-container">
        <Button className='card-btn'>SELL</Button>
      </div>
    </div>
  );
}

export default Card;
