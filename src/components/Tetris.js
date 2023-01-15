import React from "react";

import { createStage } from "../gameHelpers";

import StartButton from './StartButton';
import Stage from './Stage';
import Display from './Display';

const Tetris = () => {
    return (
        <div>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="score" />
                    <Display text="rows" />
                    <Display text="level" />
                </div>
                <StartButton />
            </aside>
        </div>
    );
};

export default Tetris;