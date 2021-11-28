import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h1>The coins! {loading ? "" : coins?.length}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin?.id}>
              {coin?.name} ({coin?.symbol}) price :{coin?.quotes?.USD?.price}{" "}
              then, you get : {value ? value / coin?.quotes?.USD?.price : 0}
            </option>
          ))}
        </select>
      )}
      <form>
        <input
          value={value}
          type="number"
          onChange={onChange}
          placeholder="how much do you want to convert?"
        />
      </form>
    </div>
  );
}

export default App;
