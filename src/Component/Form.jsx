import React, { useState, useEffect } from "react";
import Table from "./Table";
function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  var [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(true);
  const [update, setUpdate] = useState(true);
  const [id, setID] = useState();
  const [remove, setRemove] = useState();

  var check = (e) => {
    console.log("e", e);
    setType(e);
  };
  function handleDelete(e) {
    product.splice(e, 1);

    setProduct([...product]);
    var temp = [...product];
    localStorage.setItem("products", JSON.stringify(temp));
    setRemove(true);
  }

  function updates() {
    product[id].name = name;
    product[id].description = description;
    product[id].price = price;
    product[id].type = type;
    setProduct([...product]);
    var temp = [...product];
    localStorage.setItem("products", JSON.stringify(temp));
    setUpdate(true);
    setName("");
    setPrice("");
    setDescription("");
    setType("Please Select");
    setFlag(false);
    setRemove(false);
    // setFlag(false);
  }
  function handleUpdate(e) {
    console.log("id", product[e].name);
    setID(e);
    setName(product[e].name);
    setDescription(product[e].description);
    setPrice(product[e].price);
    setUpdate(false);
    setFlag(true);
    setRemove(true);
  }
  console.log(type);

  useEffect(() => {
    if (name.length >= 1 && description.length >= 1 && price.length >= 1) {
      setFlag(false);
    }
  });

  console.log(name.length, description.length, price.length);
  function add() {
    console.log("Heloo");
    var temp;
    var data = {
      name: name,
      type: type,
      description: description,
      price: price,
    };

    var products = localStorage.getItem("products");
    if (products) {
      products = JSON.parse(products);
    } else {
      products = [];
    }
    console.log("pro", products);
    products.push(data);
    setProduct([...products]);

    temp = [...products];
    products = [];
    data = {};
    localStorage.setItem("products", JSON.stringify(temp));
    setName("");
    setPrice("");
    setDescription("");
    console.log("temp", temp);
    setRemove(true);
  }
  console.log("type", type);
  return (
    <div>
      <input
        type="text"
        placeholder="user name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br></br>
      <textarea
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br></br>
      <input
        type="input"
        placeholder="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br></br>
      <select
        onChange={(e) => {
          check(e.target.value);
        }}
        value={type}
      >
        <option>Please Select</option>
        <option value="Mobile" defaultValue>
          Mobile
        </option>
        <option value="Laptop">Laptop</option>
      </select>
      <br></br>
      {update == true ? (
        <button
          onClick={() => {
            add();
          }}
          disabled={flag}
        >
          {} Submit{" "}
        </button>
      ) : null}

      <button onClick={updates} disabled={update}>
        Update
      </button>
      {flag === false || update == false ? (
        <Table
          product={product}
          delete={(e) => {
            handleDelete(e);
          }}
          update={(e) => {
            handleUpdate(e);
          }}
          remove={remove}
        />
      ) : null}
    </div>
  );
}
export default Form;
