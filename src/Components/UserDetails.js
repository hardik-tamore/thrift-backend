import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import * as Constants from "../Constants";
import { useParams } from "react-router";

import { Button, InputAdornment, MenuItem, Snackbar } from "@material-ui/core";
import tshirt from "../Assets/tshirt.png";
import { URL } from "../Constants";

function UserDetails() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [displayImage, setDisplayImage] = useState(tshirt);

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    sellingPrice : 0,
    address: "",
    address_2: "",
    pincode: 0,
    phone: 0,
    email: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

    const updateCustomerInfo = (e) => {
    //  console.log("in update")
      
      e.preventDefault();
      
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("username", user.username);
      formData.append("pincode", user.pincode);
      formData.append("sellingPrice", user.sellingPrice);
      formData.append("paymentmode", user.paymentMode);
      formData.append("address", user.address);
     // console.log( user.name)
     

      // axios
      //   .patch(`${URL}/product/user/${id}`, formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     // setDisplayImage(tshirt);
      //     // setNewProduct({
      //     //   productName: "",
      //     //   cost: null,
      //     //   price: null,
      //     //   size: "L",
      //     //   chest: null,
      //     //   length: null,
      //     //   shoulder: null,
      //     //   condition: 10,
      //     //   condition_desc: "",
      //     //   photo: tshirt,
      //     // })
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     // handleClick()
      //   });
    };

  return (
    <form
      className="form"
       onSubmit={updateCustomerInfo}
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

      <div className="input-group">
        <TextField
          className="input-control"
          required
          style={{ flex: 1 }}
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
      <div className="input-group">
        <TextField
          className="input-control"
          type="email"
          style={{ flex: 1 }}
          name="email"
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className="input-group">
        <TextField
          className="input-control"
          style={{ flex: 5 }}
          type="tel"
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
         <TextField
          className="input-control"
          style={{ flex: 3 }}
          name="username"
          label="Username"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.username}
        />
      </div>
      
      <div className="input-group ">
        <TextField
          required
          name="paymentMode"
          select
          label="Payment Mode"
          onChange={handleChange}
          value={user.paymentMode}
          style={{ flex: 3 }}
          variant="outlined"
          className="input-control"
        >
          {["GPay", "Paytm", "PhonePe", "Bank Transfer"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="input-control"
          style={{ flex: 2}}
          required
          name="sellingPrice"
          label="Price"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.sellingPrice}
        />
      </div>
      <div className="input-group ">
       
        <TextField
          className="input-control"
          style={{ flex: 1 }}
          type="number"
          required
          name="pincode"
          label="Pincode"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={user.pincode}
        />
      </div>

      <div className="input-group ">
        <TextField
          multiline
          rows={4}
          style={{ flex: 1 }}
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
          update
        </Button>
      </div>
    </form>
  );
}

export default UserDetails;
