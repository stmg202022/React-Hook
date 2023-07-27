import React, { useState, useReducer } from "react";

// const listsData = [
//   {
//     name: "samson",
//     email: "samson@gmail.com",
//     ph: 74957,
//   },
//   {
//     name: "ram",
//     email: "ram@gmail.com",
//     ph: 749780,
//   },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return [...state, action.payload];
    }
    case "DELETE_USER": {
      let newState = state.filter((list, idx) => idx !== action.payload.index);
      console.log(newState);

      return [...newState];
    }
    default:
      return state;
  }
};

const UseReducerfun = () => {
  const [dataLists, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  const canSave = Boolean(name) && Boolean(email) && Boolean(phone);

  //add user in list
  const addUser = () => {
    dispatch({ type: "ADD_USER", payload: { name, email, phone } });
  };

  //Delete user in list
  const deleteUser = ({ index }) => {
    dispatch({ type: "DELETE_USER", payload: { index } });
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />

      <label htmlFor="name">email:</label>
      <input type="text" name="email" value={email} onChange={handleEmail} />

      <label htmlFor="name">ph no:</label>
      <input type="number" name="phone" value={phone} onChange={handlePhone} />

      <button disabled={!canSave} onClick={addUser}>
        Add to List
      </button>

      {dataLists.map((data, index) => {
        return (
          <div key={index}>
            <div>
              <span>Name:{data.name}</span>
              <br />
              <span>Email:{data.email}</span>
              <br />
              <span>Phone:{data.phone}</span>
              <button onClick={() => deleteUser({ index })}>Delete</button>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default UseReducerfun;
