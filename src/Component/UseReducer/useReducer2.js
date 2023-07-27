import React, { useState, useReducer } from "react";

//
const nameReducer = (state, action) => {
  console.log(action.payload.name);
  switch (action.type) {
    case "ADDNAME": {
      return {
        //Dont forgot to spread the state/distructure the state
        //and include the state for property identifications
        ...state,
        totalUser: state.userlist.length,
        userlist: [
          ...state.userlist,
          {
            name: action.payload.name,
            edit: false,
          },
        ],
      };
    }

    case "DELETE": {
      console.log(action.payload);

      const userlist = state.userlist.filter((user, i) => i === action.payload);
      return {
        ...state,
        totalUser: state.totalUser - 1,
        userlist: [...userlist],
      };
    }

    case "EDIT": {
      console.log(action.payload.indx);
      const editUser = state.userlist.map((user, i) => {
        if (i === action.payload.indx) {
          return {
            ...user,
            edit: !user.edit,
          };
        }

        return user;
      });

      return {
        ...state,
        userlist: [...editUser],
      };
    }

    default: {
      return state;
    }
  }
};

const initailState = {
  totalUser: 0,
  userlist: [],
};
//
const MyApp = () => {
  //
  const [name, setName] = useState("");
  const [nextName, setNextName] = useState("");
  const [namelist, dispatch] = useReducer(nameReducer, initailState); //state=[]
  const userlist = namelist.userlist;
  console.log(userlist);
  const nameChange = (e) => setName(e.target.value);

  //CREATE A ACTION FUNCTION TO MAKE EASY IN CRUD
  //CREATE
  const addName = ({ name }) => {
    console.log(name);

    dispatch({ type: "ADDNAME", payload: { name } });

    setName("");
  };

  //DELETE
  const deleteName = ({ indx }) => {
    console.log(indx);

    dispatch({ type: "DELETE", payload: indx });
  };

  //EDIT

  const editName = ({ indx }) => {
    console.log(indx);

    dispatch({ type: "EDIT", payload: { indx } });
  };

  //UPDATE
  const updateName = ({ indx }) => {
    let selectedUser = userlist.find((user, i) => i === indx);
    console.log(selectedUser.name);

    dispatch({ type: "UPDATE", payload: { indx, name } });
  };

  const list = userlist.map((user, indx) => (
    <ul key={indx}>
      {user.edit ? (
        <input type="text" value={nextName} />
      ) : (
        <li>{user.name}</li>
      )}

      <button onClick={() => deleteName({ indx })}>Delete</button>

      {user.edit ? (
        <button onClick={() => editName({ indx })}>Edit</button>
      ) : (
        <button onClick={() => updateName({ indx })}>Update</button>
      )}
    </ul>
  ));

  // console.log(list);

  return (
    <div>
      <label>name:</label>
      <input type="text" value={name} onChange={nameChange} />

      <h4>Total: {namelist.totalUser}</h4>

      <button onClick={() => addName({ name })} disabled={false}>
        Add
      </button>

      <div>{list}</div>
    </div>
  );
};

export default MyApp;
