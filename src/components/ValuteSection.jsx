import React from "react";
import useGetExchangeData from "../hooks/useGetExchangeData";

const ValuteSection = ({ onCurrencyChange, onAmountChange, amount }) => {
  const rates = useGetExchangeData();

  return (
    <div className="valute-section">
      <input
        type="number"
        className="valute-input"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select onChange={(e) => onCurrencyChange(e.target.value)}>
        <option value={1}>UAH</option>
        {rates.map((rate) => (
          <option value={rate["rate"]} key={rate["cc"]}>
            {rate["cc"]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ValuteSection;
