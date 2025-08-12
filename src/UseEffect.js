import { useState, useEffect } from "react";
import Button from "./Button";

function UseEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  const iRunOnlyOnce = () => console.log("CAll THE API...");
  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when keyword changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword & counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text="Click" />
    </div>
  );
}

export default UseEffect;
