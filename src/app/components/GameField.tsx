"use client"

import "../styles/GameField.css"
import "../styles/tic_tac_toe.css"
import { FieldButton } from "../containers/Buttons"
import { useState } from "react"
import {NextPlayerButton, PlayerOrCompButton, RefreshButton} from "../containers/Buttons"

interface FieldData {
  [key: number]: string;
}

export default function GameField() {
  const [xTurn, setXTurn] = useState(true);
  const [turn, setTurn] = useState("X");
  const defaultFieldData = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  };

  const [fieldData, setFieldData] = useState(defaultFieldData);
  const [clickedCells, setClickedCells] = useState([]);

  const resetFieldData = () => {
    setFieldData(defaultFieldData);
    setXTurn(true);
    setTurn("X");
    setClickedCells([]);
  };

  const updateFieldData = (i: number) => {
    if (clickedCells.includes(i)) {
      return; 
    }
  
    const newValue = xTurn ? "X" : "O";
    setFieldData({ ...fieldData, [i]: newValue });
    setXTurn(!xTurn);
    setTurn(newValue);
    setClickedCells([...clickedCells, i]); 
  };

  return (
    <div>
      <div className="top_field">
        <div className="turn-refresh py-4">
        <NextPlayerButton turn={turn}/>
        <PlayerOrCompButton/>
        <RefreshButton onClick={resetFieldData}/>
        </div>
      <div className="placeholder_button py-2"> ... </div>
      </div>
      <div className="game_field">
      {[...Array(9)].map((v, i) => (
        <FieldButton key={i} onClick={() => updateFieldData(i)}>
          {fieldData[i]}
        </FieldButton>
      ))}
      </div>
    </div>
  );
}
