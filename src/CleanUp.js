import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("I'm destroyed!");
  }

  function hiFn() {
    console.log("I'm created!");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
