import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card";
import * as Constants from "./Constants";
import TextField from "@material-ui/core/TextField";
import { Switch } from "@material-ui/core";

function Container(props) {
  const [product_array, setProductArray] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [foundProducts, setFoundProducts] = useState();

  useEffect(() => {
    axios
      .get(`${Constants.URL}/product`)
      .then((res) => {
        setProductArray(res.data);
        setFoundProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const remove = (id) => {
    axios
      .patch(`${Constants.URL}/product/${id}`, {
        Status: "Posted",
      })
      .then((response) => {
        console.log(response);
        setProductArray(
          product_array.filter((item) => {
            return item._id !== id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = product_array.filter((product) => {
        return product.Name.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
    } else {
      setFoundProducts(product_array);
      // If the text field is empty, show all users
    }

    setSearchInput(keyword);
  };
  return (
    <>
      <div className='search-container'>
        <input
          // style={{ flex: 1 }}
          className="search-bar"
          required
          name="productName"
          onChange={filter}
          value={searchInput}
          placeholder ="Search here..."
        />
      </div>
      <div className="product-container">
        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map((item) => {
            const condition_desc = `(${item.Condition_desc})`;
            let actual_size ;
         
            if(38<item.Chest <=40 ){
              actual_size = "S"
            }
            else  if(40<item.Chest <=42 ){
              actual_size = "M"
            }
            else  if(42<item.Chest <=44 ){
              actual_size = "L"
            }
            else  if(44<item.Chest <=46 ){
              actual_size = "XL"
            }
            else  if(46<item.Chest <=48 ){
              actual_size = "2XL"
            }
            else  if(48<item.Chest <=50 ){
              actual_size = "3XL"
            }
            else{
              actual_size = null;
            }
            let size = item.Size;
            if(actual_size && actual_size!== item.Size ){
              size = actual_size+"("+item.Size+" Mentioned)"
            }
            let text =
              item.Name +
              "\n"+
              "\nPrice : INR " +
              item.Price +
             
              "/- (FREE SHIPPING)" +
              "\nSize :"+
              size +
              "\nCondition : " +
              item.Condition +
              "/10" +
              condition_desc +
              "\n" +
              "\nChest : " +
              item.Chest +
              "\nLength : " +
              item.Length +
              "\nShoulder : " +
              item.Shoulder +
              "\n" +
              "\nComment 'Book' to buy ";
            return (
              <Card
                title={item.Name}
                price={item.Price}
                size={item.Size}
                copy_text={text}
                id={item._id}
                photo={item.photo}
                status={item.Status}
              />
            );
          })
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </>
  );
}

export default Container;
