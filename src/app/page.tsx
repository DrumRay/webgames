import "./styles/game_preview.css"

export default function Home() {
  return (
  <main> 
      <div className='game_preview_container'>
        <div className='game-card'>
          <img src='/assets/game_preview_placeholder.png' alt="game_preview_pic"/>
          <a>Tic Tac Toe</a>
        </div>
        <div className='game-card'>
          <img src='/assets/game_preview_placeholder.png' alt="game_preview_pic"/>
          <a>Pic Diff</a>
        </div>
        <div className='game-card'>
          <img src='/assets/game_preview_placeholder.png' alt="game_preview_pic"/>
          <a>Rock Paper Scissors</a>
        </div>
      </div>

  </main>
  )
}
