import React, { useEffect, useState, useRef } from "react";
import "./css/style.css"
import Header from "./components/Header";
import User from "./components/User";


function App() {
  const [user, setUser] = useState(null);
  
  const inputRef = useRef()  /* reference or tag */

  //componentdidMount
  useEffect(() => {
    fetchUserProfile("nrcool");
  }, []);

  const fetchUserProfile = async (name) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const result = await response.json();
    setUser(result);
  };

const searchNewUser = (e) => {
e.preventDefault()
/* console.log(inputRef.current.value); */

if (inputRef.current.value.trim() !== "") {
  fetchUserProfile(inputRef.current.value);
}

 
inputRef.current.value=""

}

  return (
    <div className="App">
      <Header />

      <form onSubmit = {searchNewUser}>
        <input ref={inputRef} type="text" name="username"  />
        <input type="submit" value="search" />
      </form>

      {user && <User userdata={user} />}
    </div>
  );
}

export default App;
