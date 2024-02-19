"use client"

import React, { useState, useEffect } from "react";
import "../styles/tic-tac-toe_main.css";
import GameField from "../components/GameField"


export default function TicTacToe() {
    const [showModal, setShowModal] = useState(true);
  
    useEffect(() => {
      setShowModal(true);
    }, []);
  
    const closeAndStartGame = () => {
      setShowModal(false);
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
                    <button>
                    Игра с ботом
                    </button>
                    <button>
                    Игра онлайн
                    </button>
                </div>
            </div>
        )}
        <GameField />
        </div>
    );
  }