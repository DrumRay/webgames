"use client"

import "../styles/GameField.css"
import {FieldButton} from "../containers/Buttons"
import {useState} from "react"

export default function GameField() {
    const [xTurn, setXTurn] = useState(true);
    const [fieldData, setFieldData] = useState({  
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
});

    return (
        <div className="game_field">
        {[...Array(9)].map((v, i) => (
          <FieldButton key={i} /> 
        ))}
      </div>
    )
}