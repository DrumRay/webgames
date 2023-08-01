import "../styles/GameField.css"

export default function GameField() {
    return (
        <div className="game_field">
        <div className="row">
            <div className="field_button">
                    <button id="1st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
                <div className="field_button">
                    <button id="2st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
                <div className="field_button">
                    <button id="3st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
        </div>
        <div className="row">
                <div className="field_button">
                    <button id="4st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
            </div>
            <div className="field_button">
                    <button id="5st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
                <div className="field_button">
                    <button id="6st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
        </div>
        <div className="row">
        <div className="field_button">
                    <button id="7st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
                <div className="field_button">
                    <button id="8st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
                <div className="field_button">
                    <button id="9st_field">
                        <img src="/assets/empty_field.png"/>
                    </button>
                </div>
        </div>
    </div>
    )
}