import "../styles/tic_tac_toe.css"
import GameField from "../components/GameField"
import {NextPlayerButton, PlayerOrCompButton, RefreshButton} from "../containers/Buttons"

export default function TicTacToe() {
    return (
        <div className="ttt-general">
            <div className="top_field">
                <div className="turn-refresh py-4">
                    <NextPlayerButton />
                    <PlayerOrCompButton/>
                    <RefreshButton/>
                </div>
                <div className="placeholder_button py-2"> ... </div>
            </div>
            <GameField/>
        </div>
    )
}