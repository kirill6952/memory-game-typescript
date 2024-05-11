import React from 'react';
import {ISquare} from "./Board"

interface IProps{
    square: ISquare
    openSquare: (id:number, img: string) => void
}





const Square = (props:IProps) => {
    return (
        <div className={`square ${props.square.isOpen ? 'blocked' : ''}`}
             onClick={() => props.openSquare(props.square.id, props.square.img)}>
            {props.square.isOpen && props.square.img}

        </div>
    );
};

export default Square;