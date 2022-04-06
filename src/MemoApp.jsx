import React, { useState } from "react";

// const memo = {memo: "", done: false, }

export default function MemoApp() {
  const [Allmemos, setAllmemos] = useState([{ memo: "Test", done: false }]);

  const [textInput, settextInput] = useState("");
  const [textInputEditted, settextInputEditted] = useState("");

  function displayMemo(entry, key) {
    //   responsible for displaying a single entry as well as having a place to edit the current value this way we can change a single entry in our array by having acess to the index of the entry as well as having the current state of that entry
    return (
      <li key={key} style={{ color: `${entry.done ? "green" : "black"}` }}>
        <h2>{entry.memo}</h2> <br />
        <input value={textInputEditted.length > 0 ? textInputEditted : entry.memo} type='text' placeholder='type here...' onChange={(e) => settextInputEditted(e.target.value)} />
        <button onClick={() => editMemo(key)}>Edit</button> <br />
        <br />
        <button onClick={() => deleteMemo(key)}>Delete</button>
        <br />
        <button onClick={() => markAsDoneMemo(key)}>Completed</button>
      </li>
    );
  }

  //   q1 pushed
  function addMemo() {
    //   Do not mutate state directly ever create a copy
    let copy = [...Allmemos];
    // create new entry with user input
    let newMemo = { memo: textInput, done: false };
    // Add entry to copied array at the end
    copy.push(newMemo);
    //   update the state
    setAllmemos(copy);
    // clean the current input of its value
    settextInput("");
  }
  //   q2 indexed and changed
  function editMemo(index) {
    console.log("THE MEMO TO EDIT IS AT INDEX: ", index);
    // create copy of the state
    let copy = [...Allmemos];
    // get the index we want to change and change the memo value:
    copy[index].memo = textInputEditted;
    //   update the state
    setAllmemos(copy);
    // clean the current input of its value
    settextInputEditted("");
  }
  //   q3  find and remove item at index
  function deleteMemo(index) {
    console.log("THE MEMO TO DELETE IS AT INDEX: ", index);
    // create copy of the state
    let copy = [...Allmemos];

    // remove value from array
    // splice remove splice
    copy.splice(index, 1);

    //   update the state
    setAllmemos(copy);
  }
  //   q4 indexed and changed with visual change
  function markAsDoneMemo(index) {
    console.log("THE MEMO TO COMPLETE IS AT INDEX: ", index);
    // create copy of the state
    let copy = [...Allmemos];
    // change to completed
    copy[index].done = !copy[index].done; //hardcoded as true
    //   update the state
    setAllmemos(copy);
  }

  return (
    <>
      <h1>MEMO APP Functional Component</h1>

      {/* Create the new memo to add to our array */}

      <>
        <label>Create new memo</label>
        <br />
        <input value={textInput} type='text' placeholder='type here...' onChange={(e) => settextInput(e.target.value)} />
        <button onClick={() => addMemo()}> Add New Memo</button>
      </>

      {/* Display all memos to client */}
      <ul>
        {Allmemos.map((entry, index) => {
          return displayMemo(entry, index);
        })}
      </ul>
    </>
  );
}
