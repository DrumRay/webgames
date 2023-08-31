import "./styles/game_preview.css"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
  <main> 
      <div className='game_preview_container'>
        <Link href="/tic-tac-toe">
        <div className='game-card'>
          <Image src='/assets/game_preview_placeholder.png' alt="game_preview_pic" width='251' height='314'/>
          <a>Tic Tac Toe</a>
        </div>
        </Link>
        <Link href="/pic-diff">
        <div className='game-card'>
          <Image src='/assets/game_preview_placeholder.png' alt="game_preview_pic" width='251' height='314'/>
          <a>Pic Diff</a>
        </div>
        </Link>
        <Link href="/rock-paper-scissors">
        <div className='game-card'>
          <Image src='/assets/game_preview_placeholder.png' alt="game_preview_pic" width='251' height='314'/>
          <a>Rock Paper Scissors</a>
        </div>
        </Link>
      </div>

  </main>
  )
}
