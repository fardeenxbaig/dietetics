import React from "react";

import calorieData from "./data/calorie-data.js";

function FoodDetails(props) {
  return (
    <tr className="table-light">
      <td style={{ fontWeight: "bold" }}>{props.name}</td>
      <td style={{ color: "dimgray" }}>{props.measure}</td>
      <td>({props.calories}) Cal</td>
    </tr>
  );
}

/* Display Food Details Table */
export function FoodTable(props) {
  return (
    <table className="container w-50 table table-hover">
      <tr class="thead-dark">
        <th>Items in your Plate</th>
        <th>Measure</th>
        <th>Calories</th>
      </tr>
      {calorieData.map((foodItem) => (
        <FoodDetails
          key={foodItem.name}
          name={foodItem.name}
          measure={foodItem.measure}
          calories={foodItem.calories}
        />
      ))}
    </table>
  );
}
