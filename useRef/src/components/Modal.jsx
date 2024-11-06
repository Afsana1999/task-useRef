import React from "react";

function Modal({ title, content, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Modal;
