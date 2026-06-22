const formatNaira = (amountInKobo) => {
  const naira = amountInKobo / 100;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(naira);
};
export {
  formatNaira as f
};
//# sourceMappingURL=formatCurrency-DDPrfxv6.js.map
