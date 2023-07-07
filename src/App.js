import { useState } from 'react';
import './App.css';

function App() {
  const [mail, setMail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special = "@#$&";
  const numbers = "1234567890";

  function handleFirst(event) {
    setFName(event.target.value);
  }

  function handleLast(event) {
    setLName(event.target.value);
  }

  function display(event) {
    if (fname !== "" && lname !== "") {
      //event.preventDefault();
      setMail("Your Mail :  " + fname + lname + "@gmail.com");
      setFName("");
      setLName("");
      let nums = "";
      var i;
      for (i = 0; i < 10; ) {
        let id1 = Math.floor(Math.random() * 4);
        let val;
        let idx;
        if (id1 === 1) {
          idx = Math.floor(Math.random() * 26);
          val = alpha[idx];
        } else if (id1 === 2) {
          idx = Math.floor(Math.random() * 26);
          val = caps[idx];
        } else if (id1 === 3) {
          idx = Math.floor(Math.random() * 4);
          val = special[idx];
        } else if (id1 === 4) {
          idx = Math.floor(Math.random() * 10);
          val = numbers[idx];
        }
        if (val === undefined) {
          continue;
        }
        i++;
        nums += val;
      }
      setPassword("Password:  " + nums);
    } else {
    }
  }

  return (
    <div className="App">
      <div className='answer'>
        <h2>{mail}</h2>
        <h3>{password}</h3>
      </div>
      <form>
        <input
          onChange={handleFirst}
          type="text"
          placeholder="First Name"
          value={fname}
          required
        />
        <input
          onChange={handleLast}
          type="text"
          placeholder="Last Name"
          value={lname}
          required
        />
        <button onClick={display}>Submit</button>
      </form>
    </div>
  );
}

export default App;
