import React from "react";

import { createStage } from "../gameHelpers";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="score" />
                        <Display text="rows" />
                        <Display text="level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;