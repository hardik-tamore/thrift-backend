import { Button } from "@material-ui/core";
import React from "react";
import tshirt from "../Assets/varsity.JPG";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import * as Constants from '../Constants';
import axios from "axios";

const remove=(id)=>{
  axios.patch(`${Constants.URL}/product/${id}`, {
Status: 'Sold'
})
.then(response => {
console.log(response);
})
.catch(err => {
console.log(err);
});
}

function Card({title, size, price, id, copy_text, photo, status}) {
  return (
    <div className="card">
      {status=='Sold'? <div className='card-status'><span>SOLD</span></div>:<></>}
     
      <div className="card-image">
          <FileCopyIcon id = 'copy-btn' onClick={() => {navigator.clipboard.writeText(copy_text)}} />
        <img src={`${Constants.URL}/uploads/${photo}`} />
      </div>
      <div className="card-info">
        <h5>{title+' ('+size+')'}</h5>
        <div className ='card-info-desc'>
        <h6>₹{price}</h6>
   
       
        </div>
      </div>
      <div className="card-btn-container">
        <Button className='card-btn' onClick={()=>{remove(id)}}>SELL</Button>
      </div>
    </div>
  );
}

export default Card;
