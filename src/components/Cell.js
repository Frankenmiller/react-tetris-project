import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={'Z'} color={TETROMINOS['Z'].color} ></StyledCell>
)

export default Cell;