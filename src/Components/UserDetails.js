import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import * as Constants from '../Constants';


import { Button, InputAdornment, MenuItem, Snackbar } from "@material-ui/core";
import tshirt from "../Assets/tshirt.png";

function UserDetails() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [displayImage, setDisplayImage] = useState(tshirt);

  const [user, setUser] = useState({
    name: "",
    username: "",
    address: "",
    pincode: null,
    phone: null,
    email: "null",
    paymentMode : ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("photo", newProduct.photo);
//     formData.append("Name", newProduct.productName);
//     formData.append("Size", newProduct.size);
//     formData.append("Chest", newProduct.chest);
//     formData.append("Shoulder", newProduct.shoulder);
//     formData.append("Length", newProduct.length);
//     formData.append("Cost", newProduct.cost);
//     formData.append("Price", newProduct.price);
//     formData.append("Condition", newProduct.condition);
//     formData.append("Condition_desc", newProduct.condition_desc);

//     axios
//       .post(`${Constants.URL}/product/add/`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         setDisplayImage(tshirt);
//         setNewProduct({
//           productName: "",
//           cost: null,
//           price: null,
//           size: "L",
//           chest: null,
//           length: null,
//           shoulder: null,
//           condition: 10,
//           condition_desc: "",
//           photo: tshirt,
//         })
//       })
//       .catch((err) => {
//         console.log(err);
//         // handleClick()
//       });
//   };

  return (
    <form
      className="form"
    //   onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* {" "}
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar> */}

      <div className="input-group ">
        <div className="product-image-container">
          <label htmlFor="upload-button">
            <img src={displayImage} alt="tshirt" />
          </label>
          
        </div>
      </div>
      <div className="input-group ">
        <TextField
          className="input-control"
          required
          name="name"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.name}
        />
      </div>
      <div className="input-group ">
        <TextField
          className="input-control"
          required
          name="username"
          label="Username"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.username}
        />
            <TextField
          className="input-control"
          type='tel'
          required
          name="phone"
          label="Phone"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.phone}
        />
      </div>

      <div className="input-group ">
        <TextField
          multiline
          rows={4}
          className="input-control"
          required
          name="address"
          label="address"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.address}
        />
      </div>
     
      
      <div className="input-group ">
        <Button type="submit" variant="contained" className="button-primary">
          Save
        </Button>
      </div>
    </form>
  );
}

export default UserDetails;
