import React, { useState } from "react";
import { createStage } from "../gameHelpers";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);
    console.log("re-rendered")
    const movePlayer = dir => {
        updatePlayerPos({x: dir, y: 0, collided:false})
    }
    const startGame = () => {
        setStage(createStage());
        resetPlayer();
    }
    const drop = () => {
        updatePlayerPos({x: 0, y: 0.5, collided: false})
    }
    const dropPlayer = () => {
        drop();
    }
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) { // keyboard left arrow
                movePlayer(-.5);
            } else if (keyCode === 39) { // keyboard right arrow
                movePlayer(.5);
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex='0' onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? ( // if gameover display
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : ( // otherwise display game info
                    <div>
                        <Display text="score: " />
                        <Display text="rows: " />
                        <Display text="level: " />
                    </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;