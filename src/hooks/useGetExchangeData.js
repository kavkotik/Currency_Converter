import { useState, useEffect } from "react";

function useGetExchangeData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data;
}

export default useGetExchangeData;
