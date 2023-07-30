import "../styles/tic_tac_toe.css"

// проверить можно ли использовать класснейм "who's_next" и добавить туда логику смены картинки
// в картинки вставить текст
// поискать svg рестарта и вставить вместо текста + скачать картинку маленького блока с фигмы
// заменить вообще эти картинки div-ом с background image этого блока и текстом внутри
// сделать внутренний паддинг детей через div turn-refresh, не изменяя каждый внутренний элемент по отдельности

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
        </div>
    )
}