import React, {useState, useEffect} from 'react';
import Block from './components/Block';
import './App.css';

function App() {
  const [data, setData] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState(1);
  const [won, setWon] = useState("");

  const checkWin = () => {
    if((data[0] === data[1] && data[1] === data[2] && data[1] === 'X') ||
    (data[3] === data[4] && data[4] === data[5] && data[4] === 'X') ||
    (data[6] === data[7] && data[7] === data[8] && data[7] === 'X') ||
    (data[0] === data[3] && data[3] === data[6] && data[3] === 'X') ||
    (data[1] === data[4] && data[4] === data[7] && data[4] === 'X') ||
    (data[2] === data[5] && data[5] === data[8] && data[5] === 'X') ||
    (data[0] === data[4] && data[4] === data[8] && data[4] === 'X') ||
    (data[2] === data[4] && data[4] === data[6] && data[4] === 'X')) {
      return 'X';
    }
    if((data[0] === data[1] && data[1] === data[2] && data[1] === 'O') ||
    (data[3] === data[4] && data[4] === data[5] && data[4] === 'O') ||
    (data[6] === data[7] && data[7] === data[8] && data[7] === 'O') ||
    (data[0] === data[3] && data[3] === data[6] && data[3] === 'O') ||
    (data[1] === data[4] && data[4] === data[7] && data[4] === 'O') ||
    (data[2] === data[5] && data[5] === data[8] && data[5] === 'O') ||
    (data[0] === data[4] && data[4] === data[8] && data[4] === 'O') ||
    (data[2] === data[4] && data[4] === data[6] && data[4] === 'O')) {
      return 'O';
    }
    return "";
  }

  const clicked = (id) => {
    if(data[id] === "") {
      const _data = [...data];
      _data[id] = player === 0 ? 'X' : 'O';
      setData(_data);
    }
      
  }

  useEffect(() => {
    const win = checkWin();
    if(win === "") {
      if(data.filter(e => e === "").length === 0) {
        setData(["","","","","","","","",""]);
        setPlayer(1);
        document.getElementsByTagName('h5')[0].style.display = 'block';
        setTimeout(() => document.getElementsByTagName('h5')[0].style.display = 'none', 1000);
      } else {
        setPlayer(player === 0 ? 1 : 0);
      }
    } else {
      setData(["","","","","","","","",""]);
      setPlayer(1);
      setWon(win);
    }
  }, [data]);

  return (
    <>
      {
        won === "" ?
        <div id='content'>
          <h1 style={{textDecoration: 'underline'}}>TIC TAC TOE</h1>
          <br />
          <h5 style={{display: 'none'}}>IT's A DRAW</h5>
          <h3>Player 1 {'→ X'} & Player 2 {'→ O'}</h3>
          <br />
          <h2>Player {player+1}'s Turn</h2>
          <br />
          <div id="container">
            {
              data.map((e, idx) => <Block id={idx} key={idx} data={data} clicked={clicked}/>)
            }
          </div>
          <br />
          <br />
          <h2>©️ TALAL AHMED</h2>
          <h2>🐦 Follow @t_alal02 for more 🔥</h2>
        </div>
        :
        <div id="content">
          <h1 style={{textDecoration: 'underline'}}>TIC TAC TOE</h1>
          <br />
          <h1>Player {won === 'O' ? 2 : 1} WON......!</h1>
          <button className="button-54" onClick={() => setWon("")}>Play Again</button>
        </div> 
      }
    </>
  );
}

export default App;
