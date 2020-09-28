import React, { useEffect, useState } from "react";

function Table(props) {
  const [val, setData] = useState();
  console.log("aaya kya");

  useEffect(() => {
    console.log("Check useEffect");

    if (props.remove === false) {
      setData("");
    }
  });
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Type</th>
        <th>Action</th>
        <th>Update</th>
      </tr>

      {props.product.map((data, id) => {
        return (
          <tr style={{ marginLeft: "20px" }}>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.price}</td>
            <td>{data.type}</td>

            <button
              onClick={() => {
                props.delete(id);
              }}
              disabled={id === val ? true : false}
            >
              Delete
            </button>
            <td>
              {" "}
              <button
                onClick={() => {
                  props.update(id);

                  setData(id);
                }}
                disabled={id === val ? true : false}
              >
                Update
              </button>{" "}
            </td>
          </tr>
        );
      })}

      {/* <tr>
        <td>{props.name}</td>
        <td>{props.descrip}</td>
      </tr> */}
    </table>
  );
}
export default Table;
