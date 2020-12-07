import React, { createContext, useState, useEffect } from "react";
import { api } from "./api";

export const ConversionContext = createContext();

export const ConversionContextProvide = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    setIsLoading(true);
    return api(`/latest?base=${currency}`)
      .then((response) => {
        console.log("response", response);
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setIsLoading(false));
  };

  const swapCurrrency = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };
  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrrency,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
    isLoading,
  };

  useEffect(() => {
    setBaseCurrency("USD");
  }, []);
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
