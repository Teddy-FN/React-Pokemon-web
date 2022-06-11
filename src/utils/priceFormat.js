export const priceFormat = (price) => {
  console.log("Price", price);
  if (price === 0) {
    return "-";
  } else {
    const priceFormat = price.toLocaleString("id-ID", {
      minimumFractionDigits: 0,
    });
    console.log(priceFormat);
    return priceFormat;
  }
};
