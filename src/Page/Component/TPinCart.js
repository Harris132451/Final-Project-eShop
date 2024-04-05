function TotalPriceCount({ ItemInfo }) {
  let TotalPrice = ItemInfo.qty * ItemInfo.price;
  return (
    <>
      <img src={ItemInfo.photo} width={200} height={200} />
      <h5>{ItemInfo.name}</h5>
      <h6>${TotalPrice}</h6>
    </>
  );
}

export default TotalPriceCount;
