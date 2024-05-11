import React from 'react';
import Square from "./Square";

 export interface ISquare{
    id: number,
    img: string,
    isOpen: boolean,
}
interface IProps{
    squares: ISquare[];
    openSquare: (id: number, img:string) => void;
    isBlocked: boolean,
}


const Board = (props: IProps) => {
     console.log(props.isBlocked)
    return (
        <div className={`board ${props.isBlocked ? 'blocked': ''}`} >
            {
                props.squares.map(square  => (
                <Square
                    square={square}
                    key = {square.id}
                    openSquare={props.openSquare}


                />
                ))
            }

        </div>
    );
};

export default Board;