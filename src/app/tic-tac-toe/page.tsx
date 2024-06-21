"use client"

import React, { useState, useEffect } from "react";
import "../styles/tic_tac_toe.css";
import "../styles/tic-tac-toe_main.css";
import { NextPlayerButton, Change_game_type_button, RefreshButton } from "../containers/Buttons";
import { FieldButton } from "../containers/Buttons";

interface FieldData {
  [key: number]: string;
}

export default function TicTacToe() {
  const [xTurn, setXTurn] = useState(true);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [draw, setDraw] = useState(false);
  const [botGame, setBotGame] = useState(false);
  const [bot, setBot] = useState<"X" | "O">("X");
  const [player, setPlayer] = useState<"X" | "O">("O");

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
  const assignPlayerValues = () => {
    const randomValue = Math.random() < 0.5 ? "X" : "O";
    setBot(randomValue);
    setPlayer(randomValue === "X" ? "O" : "X");
  };

  const resetFieldData = () => {
    setFieldData(defaultFieldData);
    setXTurn(true);
    setTurn("X");
    setClickedCells([]);
    setWinner(null);
    setDraw(false);
    if (botGame) {
      assignPlayerValues();
    }
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

    // Если игра с ботом и сейчас ход бота, вызываем его ход
    if (botGame && turn === bot) {
      const botIndex = botMove(newFieldData, bot);
      handleBotMove(botIndex);
    }
  };

  // Функция для обработки хода бота
  const handleBotMove = (index: number) => {
    // Меняем состояние поля
    const newFieldData = { ...fieldData, [index]: turn };
    setFieldData(newFieldData);

    // Проверяем победителя и ничью
    const newClickedCells = [...clickedCells, index];
    setClickedCells(newClickedCells);

    if (checkWinner(turn, newFieldData) || (newClickedCells.length === 8 && !checkWinner(turn, newFieldData))) {
      setWinner(turn);
    }

    setTurn(xTurn ? "O" : "X");
    setXTurn(!xTurn);
  };

  // Функция для проверки победителя
  const checkWinner = (turn: string, fieldData: FieldData) => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (fieldData[a] === turn && fieldData[b] === turn && fieldData[c] === turn) {
        return true;
      }
    }
    return false;
  };

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeAndStartGame = () => {
    if (botGame) {
      assignPlayerValues();
    }
    setShowModal(false);
    resetFieldData();
  };

  const botMove = (fieldData: FieldData, botSymbol: string): number => {
    const emptyCells = Object.keys(fieldData).filter((key) => !fieldData[parseInt(key)]).map(Number);
    const playerSymbol = botSymbol === "X" ? "O" : "X";
  
    // Функция для проверки выигрышной комбинации
    const checkCombo = (combo: number[], symbol: string) => {
      let count = 0;
      combo.forEach((index) => {
        if (fieldData[index] === symbol) count++;
      });
      return count === 2;
    };
  
    // Первый ход: центральная ячейка для X, случайная для O
    if (emptyCells.length === 9) {
      return botSymbol === "X" ? 4 : emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
  
    // Проверяем, можем ли выиграть в этом ходу
    for (let i = 0; i < winningCombos.length; i++) {
      const combo = winningCombos[i];
      if (checkCombo(combo, botSymbol)) {
        const emptyCell = combo.find((index) => !fieldData[index]);
        if (emptyCell !== undefined) return emptyCell;
      }
    }
  
    // Проверяем, может ли игрок выиграть следующим ходом
    for (let i = 0; i < winningCombos.length; i++) {
      const combo = winningCombos[i];
      if (checkCombo(combo, playerSymbol)) {
        const emptyCell = combo.find((index) => !fieldData[index]);
        if (emptyCell !== undefined) return emptyCell;
      }
    }
  
    // Проверяем, можем ли активировать клетку, чтобы улучшить свою позицию
    for (let i = 0; i < winningCombos.length; i++) {
      const combo = winningCombos[i];
      const botCells = combo.filter((index) => fieldData[index] === botSymbol);
      const emptyCell = combo.find((index) => !fieldData[index] && botCells.length === 1);
      if (emptyCell !== undefined) return emptyCell;
    }
  
    // Если все остальные проверки неудачны, ставим в случайную незанятую клетку
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  };
   
  
    return (
        <div className="ttt-general">
        {showModal && (
            <div className="modal-content_select_game_type">
            <p>Выберите режим игры</p>
            <div className="modal-content_select_game_type_buttons">
                    <button
                    onClick={closeAndStartGame}>
                    Локальная игра
                    </button>
                    <button onClick={() => {
                        setBotGame(true);
                        closeAndStartGame();
                      }}>
                    Игра с ботом
                    </button>
                    <button>
                    Игра онлайн
                    </button>
                </div>
            </div>
        )}
             <div className="top_field">
        <div className="turn-refresh py-4">
        <NextPlayerButton turn={turn}/>
        <Change_game_type_button onClick={() => setShowModal(true)}/>
        <RefreshButton onClick={resetFieldData}/>
        </div>
      <div className="placeholder_button py-2"> ... </div>
      </div>
   
      <div>
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
        </div>
    );
  }