"use client"

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
  const [winner, setWinner] = useState<string | null>(null);
  const [draw, setDraw] = useState(false);
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

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]           
  ];

  const [fieldData, setFieldData] = useState<{ [key: number]: string }>(defaultFieldData);
  const [clickedCells, setClickedCells] = useState<number[]>([]);

  const resetFieldData = () => {
    setFieldData(defaultFieldData);
    setXTurn(true);
    setTurn("X");
    setClickedCells([]);
    setWinner(null);
    setDraw(false);
  };

  const updateFieldData = (i: number) => {
    if (clickedCells.includes(i)) {
      return;
    }
  
    const newValue = xTurn ? "X" : "O";
    const whichTurn = xTurn ? "O" : "X";
    const newFieldData = { ...fieldData, [i]: newValue };

    const checkWinner = (turn: string) => {
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (newFieldData[a] === turn && newFieldData[b] === turn && newFieldData[c] === turn) {
          return true;
          
        }
      }
      return false; 
    };
    
    setFieldData(newFieldData);
    setXTurn(!xTurn);
    setTurn(whichTurn);
    setClickedCells([...clickedCells, i]);


    if (checkWinner(newValue)) {
      setWinner(newValue); 
      return;
    } else if (clickedCells.length === 8 && !winner) {
      setDraw(true);
    }

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

      {winner !== null || draw ? (
        <div className="winner-modal">
          <div className="modal-content">
            {winner ? (
              <p>Игрок {winner} победил!</p>
            ) : (
              <p>Ничья!</p>
            )}
            <button onClick={resetFieldData} className="px-2 py-1 mt-10 bg-neutral-400 rounded-[7px] border-4 border-black inline-flex items-center justify-center gap-2.5">
              Начать новую игру
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
