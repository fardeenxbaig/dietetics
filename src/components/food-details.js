import React from "react";
import { Table } from "react-bootstrap";

import calorieData from "./data/calorie-data.js";

function FoodDetails(props) {
  return (
    <tr className="table-light">
      <td style={{ fontWeight: "bold" }}>{props.name}</td>
      <td style={{ color: "dimgray" }}>{props.measure.toFixed(2)}g</td>
      <td>{props.calories} kCal</td>
      <td>{props.proteins}g</td>
      <td>{props.fats}g</td>
      <td>{props.carbs}g</td>
      <td>{props.fiber}g</td>
    </tr>
  );
}

/* Display Food Details Table */
export function FoodTable(props) {
  let foodData = [];
  !!props.profile ? (foodData = calorieData) : (foodData = props.profile);

  return (
    <Table responsive className="container w-100 table table-hover">
      <tr class="thead-dark">
        <th>Items in your Plate</th>
        <th>Portion Measure (g)</th>
        <th>Energy Calories (kCal)</th>
        <th>Proteins (g)</th>
        <th>Fat Lipids (g)</th>
        <th>Carbohydrates (g)</th>
        <th>Dietary Fiber (g)</th>
      </tr>
      {foodData.map((foodItem) => (
        <FoodDetails
          key={foodItem.name}
          name={foodItem.name}
          measure={foodItem.measure}
          calories={foodItem.calories}
          proteins={foodItem.proteins}
          fats={foodItem.fats}
          carbs={foodItem.carbs}
          fiber={foodItem.fiber}
        />
      ))}
    </Table>
  );
}

/*
# ORIGINAL: {calorieData.map((foodItem) => (
# FETCHED DATA: {props.profile.map((foodItem) => (
######################
  if (!!props.profile) {  // !!data means isEmpty(data)
    foodData = calorieData;
  } else {
    foodData = props.profile;
  }
*/
