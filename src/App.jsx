import React, { Component } from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        <CardFront />
        <CardBack />
      </section>
    </>
  );
};

export default App;
