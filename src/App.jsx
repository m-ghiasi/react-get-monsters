import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Getmonster from "./components/GetMonster";

function App() {
  const [show, setShow] = useState(false);

  const handelClick = () => {
    setShow(true);
  };
  const handelClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Header />

      <Button titel={"Members"} onClick={handelClick} />

      {show ? (
        <Modal>
          <Button titel={"close"} onClick={handelClose} />

          <Getmonster />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
