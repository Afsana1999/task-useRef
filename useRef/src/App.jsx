import { useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
import UserProfile from "./components/UserProfile";

function App() {
  // task3
  // const inputRef = useRef(null);

  // const handleClick = () => {
  //   inputRef.current.focus();
  // };

  // const handleReset = () => {
  //   inputRef.current.value = "";
  // };

  // task4
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // task5
  // const [name, setname] = useState("");
  // const [email, setEmail] = useState("");
  // const [submit, setSubmit] = useState("");
  // const handleSave = (e) => {
  //   e.preventDefault();
  //   setSubmit({ name, email });
  // };

  return (
    <>
      {/* //task2
       <Card>
        <img
          src="https://7gul.az/src/img/products/7gul-485745_80ac.jpeg"
          width={300}
        />
      </Card>
      <Card>
        <h1>Lorem, ipsum dolor.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          nulla est reprehenderit culpa atque molestias?
        </p>
      </Card> */}

      {/* task3
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <button onClick={handleReset}>Input value reset</button> */}

      {/* task4
      <Modal
        title={"Title:  basliq"}
        content={
          "Content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, animi!"
        }
        isOpen={isOpen}
      />
      <button onClick={handleOpen}>modal open</button>
      <button onClick={handleClose}>modal close</button> */}

      {/* task5
      <UserProfile setName={setname} setEmail={setEmail} />
      <button onClick={handleSave}>Save</button>
      {submit && (<div>ad: {submit.name} ---- email: {submit.email}</div>)} */}
    </>
  );
}

export default App;
