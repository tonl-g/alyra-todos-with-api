import React from "react";
import NavBar from "../components/NavBar";
import TodosApp from "./TodosApp";

const Home = () => {
  return (
    <div>
      <TodosApp />
      <Forms />
    </div>
  );
};

export default Home;