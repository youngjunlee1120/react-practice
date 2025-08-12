import { useEffect, useState } from "react";

function CoinTracker() {
  const USD_TO_KRW_RATE = 1389.5048;

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, id) => {
            // 원화 가격을 계산합니다.
            const krwPrice = coin.quotes.USD.price * USD_TO_KRW_RATE;

            return (
              <option key={id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)}{" "}
                USD (₩{krwPrice.toLocaleString("ko-KR")} KRW)
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default CoinTracker;
