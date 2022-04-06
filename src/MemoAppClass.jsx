import React, { Component } from "react";

// Allmemos textInput textInputEditted
export default class MemoAppClass extends Component {
  // Add
  constructor(props) {
    super(props);

    // set init state
    this.state = {
      Allmemos: [],
      textInput: "",
      textInputEditted: ""
    };
  }

  //   Displays the single memo entry in our array
  displayMemo(entry, key) {
    //   responsible for displaying a single entry as well as having a place to edit the current value this way we can change a single entry in our array by having acess to the index of the entry as well as having the current state of that entry
    return (
      <li key={key} style={{ color: `${entry.done ? "green" : "black"}` }}>
        <h2>{entry.memo}</h2> <br />
        <input
          value={this.state.textInputEditted.length > 0 ? this.state.textInputEditted : entry.memo}
          type='text'
          placeholder='type here...'
          onChange={(e) => this.setState({ textInputEditted: e.target.value })}
        />
        <button
          onClick={() => {
            this.editMemo(key);
          }}>
          Edit
        </button>{" "}
        <br />
        <br />
        <button
          onClick={() => {
            this.deleteMemo(key);
          }}>
          Delete
        </button>
        <br />
        <button
          onClick={() => {
            this.markAsDoneMemo(key);
          }}>
          Completed
        </button>
      </li>
    );
  }

  //   q1 pushed
  addMemo() {
    //   Do not mutate state directly ever create a copy
    let copy = [...this.state.Allmemos];
    // create new entry with user input
    let newMemo = { memo: this.state.textInput, done: false };
    // Add entry to copied array at the end
    copy.push(newMemo);
    //   update the state
    this.setState({ Allmemos: copy });
    // clean the current input of its value
    this.setState({ textInput: "" });
  }
  //   q2 indexed and changed
  editMemo(index) {
    console.log("THE MEMO TO EDIT IS AT INDEX: ", index);
    // create copy of the state
    let copy = [...this.state.Allmemos];
    // get the index we want to change and change the memo value:
    copy[index].memo = this.state.textInputEditted;
    //   update the state
    this.setState({ Allmemos: copy });
    // clean the current input of its value
    this.setState({ textInputEditted: "" });
  }
  //   q3  find and remove item at index
  deleteMemo(index) {
    console.log("THE MEMO TO DELETE IS AT INDEX: ", index);
    // create copy of the state
    let copy = [...this.state.Allmemos];

    // remove value from array
    // splice remove splice
    copy.splice(index, 1);

    //   update the state
    this.setState({ Allmemos: copy });
  }
  //   q4 indexed and changed with visual change
  markAsDoneMemo(index) {
    console.log("THE MEMO TO COMPLETE IS AT INDEX: ", index);
    // create copy of the state
    let copy = [...this.state.Allmemos];
    // change to completed
    copy[index].done = !copy[index].done; //hardcoded as true
    //   update the state
    this.setState({ Allmemos: copy });
  }

  render() {
    return (
      <>
        <h1>MEMO APP Class Component</h1>

        {/* Create the new memo to add to our array */}

        <>
          <label>Create new memo</label>
          <br />
          <input value={this.state.textInput} type='text' placeholder='type here...' onChange={(e) => this.setState({ textInput: e.target.value })} />
          <button
            onClick={() => {
              this.addMemo();
            }}>
            {" "}
            Add New Memo
          </button>
        </>

        {/* Display all memos to client */}
        <ul>
          {this.state.Allmemos.map((entry, index) => {
            return this.displayMemo(entry, index);
          })}
        </ul>
      </>
    );
  }
}
