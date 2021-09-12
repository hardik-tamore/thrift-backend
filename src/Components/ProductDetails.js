import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import * as Constants from '../Constants';


import { Button, InputAdornment, MenuItem, Snackbar } from "@material-ui/core";
import tshirt from "../Assets/tshirt.png";

function ProductDetails() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [displayImage, setDisplayImage] = useState(tshirt);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    cost: null,
    price: null,
    size: "L",
    chest: null,
    length: null,
    shoulder: null,
    condition: 10,
    condition_desc: "",
    photo: tshirt,
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = () => {
    setOpenSuccess(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newProduct.photo);
    formData.append("Name", newProduct.productName);
    formData.append("Size", newProduct.size);
    formData.append("Chest", newProduct.chest);
    formData.append("Shoulder", newProduct.shoulder);
    formData.append("Length", newProduct.length);
    formData.append("Cost", newProduct.cost);
    formData.append("Price", newProduct.price);
    formData.append("Condition", newProduct.condition);
    formData.append("Condition_desc", newProduct.condition_desc);

    axios
      .post(`${Constants.URL}/product/add/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setDisplayImage(tshirt);
        setNewProduct({
          productName: "",
          cost: null,
          price: null,
          size: "L",
          chest: null,
          length: null,
          shoulder: null,
          condition: 10,
          condition_desc: "",
          photo: tshirt,
        })
      })
      .catch((err) => {
        console.log(err);
        // handleClick()
      });
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {" "}
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>

      <div className="input-group ">
        <div className="product-image-container">
          <label htmlFor="upload-button">
            <img src={displayImage} alt="tshirt" />
          </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            id="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={(e) => {
              setDisplayImage(URL.createObjectURL(e.target.files[0]));

              setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.files[0],
              });
            }}
          />
        </div>
      </div>
      <div className="input-group ">
        <TextField
          style={{ flex: 1 }}
          className="input-control"
          required
          name="productName"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={newProduct.productName}
        />
      </div>
      <div className="input-group ">
        <TextField
        required
          name="size"
          select
          label="Size"
          onChange={handleChange}
          value={newProduct.size}
          style={{ flex: 2 }}
          variant="outlined"
          className="input-control"
        >
          {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        required
          label="Chest"
          className="input-control"
          name="chest"
          type="number"
          style={{ flex: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={newProduct.chest}
        />
        <TextField
        required
          label="Length"
          className="input-control"
          name="length"
          type="number"
          style={{ flex: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={newProduct.length}
        />
        <TextField
          label="Shoulder"
          className="input-control"
          name="shoulder"
          type="number"
          style={{ flex: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={newProduct.shoulder}
        />
      </div>
      <div className="input-group ">
        <TextField
        required
          style={{ flex: 2 }}
          name="cost"
          type="number"
          className="input-control"
          label="Cost"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
          variant="outlined"
          onChange={handleChange}
          value={newProduct.cost}
        />

        <TextField
        required
          style={{ flex: 2 }}
          type="number"
          className="input-control"
          label="Price"
          name="price"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
          variant="outlined"
          onChange={handleChange}
          value={newProduct.price}
        />
      </div>
      <div className="input-group ">
        <TextField
        required
          name="condition"
          select
          label="Condition"
          onChange={handleChange}
          value={newProduct.condition}
          style={{ flex: 2 }}
          variant="outlined"
          className="input-control"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          style={{ flex: 8 }}
          className="input-control"
          name="condition_desc"
          InputLabelProps={{
            shrink: true,
          }}
          label="Condition Desc"
          variant="outlined"
          onChange={handleChange}
          value={newProduct.condition_desc}
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

export default ProductDetails;
