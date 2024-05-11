import React, {useEffect, useState} from 'react';
import './App.css';
import Board from "./Board";




function App() {
    const emoji = ['🐬', '🐍', '🎉', '😍', '🌺', '🌴',];
  const initialSquares = new Array(12).fill(
      {
        id: 0,
        img:'',
        isOpen:false
      }).map(el=>({...el, id: Math.random() }) )

  const [squares,setSquares]= useState(initialSquares);
  const [history,setHistory] = useState<string[]>([])
  const [isBlocked,setIsBlocked] = useState(false);




useEffect(() => {
    fillBoard();
},[])

    useEffect(() => {
checkMove()
    },[history])

function fillBoard(){
    const doubleEmoji = [...emoji, ...emoji].sort(() => Math.random() - 0.5);

    const newSquares = squares.map((el,index) =>({...el,img: doubleEmoji[index]}))
    setSquares(newSquares);
};

   // for (let i = 0; i < doubleEmoji.length; i++) {
   //     let randomIndex;
   //     do {
   //         randomIndex = Math.floor(Math.random() * 12);
   //     } while (newSquares[randomIndex].img !== '');
   //     newSquares[randomIndex].img = doubleEmoji[i];
  //  }
   //  setSquares(newSquares)
//    }
function openSquare(id:number, img:string){
    const newSquares = squares.map(el => el.id === id ? {...el, isOpen:true} : el);
    setHistory([...history, img])

setSquares(newSquares);
}

function checkMove(){

    if(history.length % 2 === 0 && history[history.length-1] !== history[history.length-2]){
        setIsBlocked(true)
        setTimeout(()=>{


        const newSquares = squares.map(
            el => el.img === history[history.length-1] ||
                  el.img === history[history.length-2]
                ?{...el, isOpen:false}
                : el
    )
        setSquares(newSquares);
        setIsBlocked(false);
        } ,1000)
    }
}



  return (
      <><h1 className="gameName"> Mahjong </h1>

          <div className="board">

              <Board
                  squares={squares}
                  openSquare={openSquare}
                  isBlocked={isBlocked}
              />


          </div>
        </>  );
          }





          export default App;