import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event?.target?.value);
  };

  useEffect(() => {
    console.log("Call the API....");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]);
  /** keyword가 있고, keyword 변경시에만 검색API를 호출하고 싶다.
   * conter가 변화하든 말든 검색하고 싶지 않음. */
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={keyword}
        // onChange={(text) => setKeyword(text)}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
