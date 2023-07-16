"use client";

import { useState } from 'react';
import "../styles/Navbar.css";
import { GrGamepad } from "react-icons/gr";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TbSquareRoundedLetterR } from 'react-icons/tb';

export default function Navbar() {
    const [isEnabled, setEnabled] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    
    const handleMenuToggle = () => {
        if (!isEnabled) {
          setAnimationClass('swing-in-top-fwd');
          setEnabled(true);
        } else {
          setAnimationClass('swing-out-top-fwd');
          setTimeout(() => {
            setEnabled(false);
          }, 1000);
        }
      };

    return (
        <nav className="Navbar-main">
            <Link href='/' className="logo">
                <GrGamepad />
                <a className="gradient_text">Webgames</a>
            </Link>

            <div className="all_games" onClick={handleMenuToggle}>
                <button className="all_games_button">All Games</button>
                {isEnabled && (
                    <div className={`all_games_links_container ${animationClass}`}>
                    <p><a href="/tic-tac-toe">Tic Tac Toe</a></p>
                    <p><a href="/pic-diff">Pic Diff</a></p>
                    <p><a href="/rock-paper-scissors">Rock Paper Scissors</a></p>
                    </div>
                )}
            </div>


            <div className="links_container">
                <Link href="/tic-tac-toe" className="webgame_link">
                    Tic Tac Toe
                </Link>
                <Link href="/pic-diff" className="webgame_link">
                    Pic Diff
                </Link>
                <Link href="/rock-paper-scissors" className="webgame_link">
                    Rock Paper Scissors
                </Link>
            </div>
            <div className="social-icons">
                <Link href='https://github.com/DrumRay' className="social-icon">
                    <AiFillGithub size='2.7rem' />
                </Link>
                <Link href='https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B1%D0%B0%D0%BA%D1%83%D0%BC-a1270b1a6/' className="social-icon">
                    <AiFillLinkedin size='2.7rem' />
                </Link>
                <Link href='https://www.instagram.com/gruseligerivan/' className="social-icon">
                    <AiFillInstagram size='2.7rem' />
                </Link>
                <Link href='https://rabota.by/resume/4c3a292cff0bed1b170039ed1f455338515331' className="social-icon">
                    <TbSquareRoundedLetterR size='2.7rem' />
                </Link>
            </div>
        </nav>
    );
}

