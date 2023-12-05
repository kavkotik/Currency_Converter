import React from "react";
import useGetExchangeData from "../hooks/useGetExchangeData";

const DefaultRates = () => {
  const rates = useGetExchangeData();

  const defaultCurrencies = ["USD", "EUR"];

  const defaultCurrenciesToDisplay = defaultCurrencies.map((curr) =>
    rates.find((rate) => rate["cc"] === curr)
  );

  return (
    <div className="current-rates">
      <p className="current-rates-title"> Current Rates:</p>
      {defaultCurrenciesToDisplay[0] &&
        defaultCurrenciesToDisplay.map((item) => (
          <p className="usd-rate" key={item["cc"]}>
            {item["cc"]}: {item["rate"].toFixed(2)}
          </p>
        ))}
    </div>
  );
};

export default DefaultRates;
