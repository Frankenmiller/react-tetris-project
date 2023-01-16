import React, { useState } from "react";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);
    console.log("re-rendered")
    return (
        <StyledTetrisWrapper>
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
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;