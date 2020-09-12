import React from "react";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Contact
        avatar="https://randomuser.me/api/portraits/women/90.jpg"
        name="Jenny Mendoza"
        isOnline={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/77.jpg"
        name="Maxine Vargas"
        isOnline={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/38.jpg"
        name="Isaiah Butler"
        isOnline={true}
      />
    </>
  );
};

export default App;
