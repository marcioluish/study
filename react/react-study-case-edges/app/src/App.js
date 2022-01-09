import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userInput) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        {
          name: userInput.username,
          age: userInput.age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default App;
