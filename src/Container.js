import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Components/Card';

function Container(props) {

    const [product_array, setProductArray] = useState([])

    useEffect(()=>{

        axios.get("https://cryptic-lowlands-74955.herokuapp.com/product")
        .then((res)=>{
            setProductArray(res.data.filter((item)=>{
                return item.Status !== "Posted"
               }))
          console.log(res.data)
        }).catch(err=>{
          console.log(err)
        })
        
          },[]);

    const remove=(id)=>{
        axios.patch(`https://cryptic-lowlands-74955.herokuapp.com/product/${id}`, {
    Status: 'Posted'
  })
  .then(response => {
    console.log(response);
    setProductArray(product_array.filter((item)=>{
     return item._id !== id
    }))

  })
  .catch(err => {
    console.log(err);
  });
    }
    
    const ar = product_array.map(item=>{
        const condition_desc = `(${item.Condition_desc})`
        let text = item.Name + 
                   "\nPrice : INR "+item.Price +"/- (FREE SHIPPING)" +
                   "\nCondition : " +item.Condition +"/10" + condition_desc +
                   "\n"+
                   "\nChest : " + item.Chest +
                   "\nLength : " + item.Length +
                   "\nShoulder : " + item.Shoulder +
                   "\n"+
                   "\nComment 'Book' to buy " 
 
            return (
              <Card title={item.Name} price={item.Price} size={item.size} copy_text={text} id={item._id} photo ={item.photo}/>
               
  //               <div class="col-sm-2">
  // <div class="card text-left" style={{width: 250, height: 170 }}>
  // <div class="card-body">
  //   <h6 >{item.Name}</h6>
  //   <p >Price : {item.Price} <br/> Condition : {item.Condition}</p>
  
  //   <button class = "btn btn-secondary" onClick={() => {navigator.clipboard.writeText(text)}}>copy</button>
  //   <button class = "btn btn-danger" style={{marginLeft : 20}} onClick={()=>{remove(item._id)}}>Remove</button>

//   </div>
// </div>
// </div>

            )
            
            
    })
    return (

            <div className ='product-container'>
            {ar}

            </div>

    )
}

export default Container

