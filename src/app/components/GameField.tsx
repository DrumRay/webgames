import "../styles/GameField.css"
import {FieldButton} from "../containers/Buttons"

export default function GameField() {
    return (
    <div className="game_field">
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
        <FieldButton/>
    </div>
    )
}