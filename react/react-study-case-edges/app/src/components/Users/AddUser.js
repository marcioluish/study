import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    if (
      userData.username.trim().length === 0 ||
      userData.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+userData.age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(userData);

    // Reset input values to empty by manipulating DOM
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
