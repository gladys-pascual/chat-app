import React from "react";
import Contact from "./components/Contact";
import users from "./ContactList";

const App = () => {
  return (
    <>
      {users.map((user) => (
        <Contact {...user} key={user.name} />
      ))}
    </>
  );
};

export default App;
