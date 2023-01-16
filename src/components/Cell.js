import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={'O'} color={TETROMINOS['O'].color} >Cell</StyledCell>
)

export default Cell;