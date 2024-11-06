import React, { useEffect, useRef } from "react";

function UserProfile({ setName, setEmail }) {
  const inputNameRef = useRef(null);

  useEffect(() => {
    inputNameRef.current.focus();
  },[]);

  const handleClick=()=>{
    inputNameRef.current.focus();
  }
  return (
    <div>
      <input
        type="text"
        ref={inputNameRef}
        placeholder="adinizi yazn"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        input
        placeholder="emailinizi yazn"
        onChange={(e) => setEmail(e.target.value)}
      />
     <div> <button onClick={handleClick}>edit</button></div>
    </div>
  );
}

export default UserProfile;
