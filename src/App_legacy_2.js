import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("created :)");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello!</h1>;
}
// useEffect(() => {
//   console.log("created ;)");
//   return () => console.log("destroyed :(");
// }, []);

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
