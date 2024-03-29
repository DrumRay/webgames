import "../styles/FieldButton.css";
import React, { ReactNode } from 'react';
import { VscDebugRestart } from 'react-icons/vsc'


interface FieldButtonProps {
  children: ReactNode;
  onClick: () => void;
}

  interface RefreshButtonProps {
    onClick: () => void;
  }

  interface Change_game_type_buttonProps {
    onClick: () => void;
  }

  function FieldButton({ children, onClick }: FieldButtonProps) {
    return (
      <div className="w-[130px] h-[130px] relative bg-white bg-opacity-0 hover:cursor-pointer" onClick={onClick}>
        <div className="w-[130px] h-[130px] left-0 top-0 absolute bg-zinc-700 rounded-md" />
        <div className="w-[120px] h-[120px] left-[5px] top-[5px] absolute bg-gradient-to-br from-fuchsia-400 to-zinc-600 rounded-md" >
        <div className="flex justify-center items-center z-[1] relative text-[120px] font-nunito text-zinc-700 rounded-md max-h-[120px]" style={{ userSelect: 'none' }}>{children}</div>
        </div>
      </div>
    );
  };

function NextPlayerButton({ turn }: { turn: string }) {
    return (
    <div className="px-2 py-1">
        <div className="w-[170px] h-[43px] p-[9px] bg-gradient-to-b from-purple-400 to-zinc-600 rounded-[7px] border-4 border-black justify-center items-center gap-2.5 inline-flex">
            <div className="w-[170px] h-[18px] text-center text-black text-[15px] font-semibold">Turn: {turn}</div>
        </div>
    </div>
    )
};

function Change_game_type_button({ onClick }: Change_game_type_buttonProps) {
    return (
    <div className="px-2 py-1 hover:cursor-pointer" onClick={onClick}>
        <div className="w-[170px] h-[43px] p-[9px] bg-gradient-to-b from-purple-400 to-zinc-600 rounded-[7px] border-4 border-black justify-center items-center gap-2.5 inline-flex">
            <div className="w-[170px] h-[18px] text-center text-black text-[15px] font-semibold">Change game type</div>
        </div>
    </div>
    )
};

function RefreshButton({ onClick }: RefreshButtonProps) {
    return (
    <div className="px-2 py-1 hover:cursor-pointer" onClick={onClick}>
        <div className="w-[42px] h-[42px] bg-gradient-to-b from-purple-400 to-zinc-600 rounded-[7px] border-4 border-black flex items-center justify-center">
          <VscDebugRestart/>
        </div>
    </div>
    )
};

export {FieldButton, NextPlayerButton, Change_game_type_button, RefreshButton};