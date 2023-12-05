import React from "react";
import { useState } from "react";
import ValuteSection from "./ValuteSection";

const ExchangeZone = () => {
  const [incomingAmount, setIncomingAmount] = useState("");
  const [outgoingAmount, setOutgoingAmount] = useState("");
  const [incomingCurrency, setIncomingCurrency] = useState(1);
  const [outgoingCurrency, setOutgoingCurrency] = useState(1);

  const exchangeFormula = (amount, incomingCurrency, outgoingCurrency) => {
    return (
      (amount * Number(incomingCurrency)) /
      Number(outgoingCurrency)
    ).toFixed(2);
  };

  return (
    <main>
      <ValuteSection
        onAmountChange={(amount) => {
          setIncomingAmount(amount);
          setOutgoingAmount(
            exchangeFormula(amount, incomingCurrency, outgoingCurrency)
          );
        }}
        onCurrencyChange={(currency) => {
          setIncomingCurrency(currency);
          setOutgoingAmount(
            exchangeFormula(incomingAmount, currency, outgoingCurrency)
          );
        }}
        amount={incomingAmount}
      />

      <ValuteSection
        onAmountChange={(amount) => {
          setOutgoingAmount(amount);
          setIncomingAmount(
            exchangeFormula(amount, outgoingCurrency, incomingCurrency)
          );
        }}
        onCurrencyChange={(currency) => {
          setOutgoingCurrency(currency);
          setOutgoingAmount(
            exchangeFormula(incomingAmount, incomingCurrency, currency)
          );
        }}
        amount={outgoingAmount}
      />
    </main>
  );
};

export default ExchangeZone;
