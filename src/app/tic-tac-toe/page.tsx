import "../styles/tic_tac_toe.css"
import GameField from "../components/GameField"

export default function TicTacToe() {
    return (
        <div className="ttt-general">
            <div className="top_field">
                <div className="turn-refresh">
                    <div className="who's_next"> 
                        <img src="/assets/top_field_block.png"></img> 
                    </div>
                    <button id="player_or_comp_change">
                        <img src="/assets/top_field_block.png"></img>
                    </button>
                    <button id="refresh_btn">
                        <img src="/assets/refresh.png"></img>
                    </button>
                </div>
                <div className="placeholder_button"> ... </div>
            </div>
            <GameField/>
        </div>
    )
}