import "../styles/FieldButton.css";
import React, { ReactNode } from 'react';

interface FieldButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

function FieldButton({ children, onClick }: FieldButtonProps) {
    return (
      <div className="w-[130px] h-[130px] relative bg-white bg-opacity-0 hover:cursor-pointer" onClick={onClick}>
        <div className="w-[130px] h-[130px] left-0 top-0 absolute bg-zinc-700 rounded-md" />
        <div className="w-[120px] h-[120px] left-[5px] top-[5px] absolute bg-gradient-to-br from-fuchsia-400 to-zinc-600 rounded-md" />
        {children} 
      </div>
    );
  };

function NextPlayerButton() {
    return (
    <div className="px-2 py-1">
        <div className="w-[170px] h-[43px] p-[9px] bg-gradient-to-b from-purple-400 to-zinc-600 rounded-[7px] border-4 border-black justify-center items-center gap-2.5 inline-flex">
            <div className="w-[170px] h-[18px] text-center text-black text-[15px] font-semibold">Turn: X</div>
        </div>
    </div>
    )
};

function PlayerOrCompButton() {
    return (
    <div className="px-2 py-1 hover:cursor-pointer">
        <div className="w-[170px] h-[43px] p-[9px] bg-gradient-to-b from-purple-400 to-zinc-600 rounded-[7px] border-4 border-black justify-center items-center gap-2.5 inline-flex">
            <div className="w-[170px] h-[18px] text-center text-black text-[15px] font-semibold">Player Vs Player</div>
        </div>
    </div>
    )
};

function RefreshButton() {
    return (
    <div className="px-2 py-1 hover:cursor-pointer">
        <div className="w-[42px] h-[42px] bg-gradient-to-b from-purple-400 to-zinc-600 rounded-[7px] border-4 border-black" />
    </div>
    )
};

export {FieldButton, NextPlayerButton, PlayerOrCompButton, RefreshButton};