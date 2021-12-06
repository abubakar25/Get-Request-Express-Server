import React from "react";

function GetRequestServer(props) {
  console.log(props.data);
  return (
    <div>
      <h1>List of orders with Status and Ids</h1>
      <div>
        <table>
          {/* {props.data.map((items) => {})} */}
          <tr>
            <th>Order_Status</th>
            <th>Order_Value</th>
          </tr>
          <tr>
            <td>Alfreds </td>
            <td>Maria </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default GetRequestServer;
