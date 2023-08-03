"use client"

import "../styles/GameField.css"
import { FieldButton } from "../containers/Buttons"
import { useState } from "react"

interface FieldData {
  [key: number]: string;
}

export default function GameField() {
  const [xTurn, setXTurn] = useState(true);
  const [fieldData, setFieldData] = useState<FieldData>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  } as const);

  const updateFieldData = (i: number) => {
    const newValue = xTurn ? "X" : "O";
    setFieldData({ ...fieldData, [i]: newValue });
    setXTurn(!xTurn);
  };

  return (
    <div className="game_field">
      {[...Array(9)].map((v, i) => (
        <FieldButton key={i} onClick={() => updateFieldData(i)}>
          P{fieldData[i]}
        </FieldButton>
      ))}
    </div>
  );
}
