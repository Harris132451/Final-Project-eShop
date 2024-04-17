function TotalPriceCount({ ItemInfo }) {
  let TotalPrice = ItemInfo.qty * ItemInfo.price;
  return (
    <>
      <div className="bg-blue-50 rounded-md p-5 font-bold text-2xl md:flex items-center space-x-4">
        <img
          className="w-1/5 text-center float-left hidden md:block"
          src={ItemInfo.picture}
          width={200}
          height={200}
        />
        <p className="md:w-2/5 text-left md:text-left">{ItemInfo.name}</p>
        <p className="md:w-1/5 text-left md:text-right">{ItemInfo.qty}</p>
        <p className="md:w-1/5 text-left md:text-right">
          ${TotalPrice.toFixed(1)}
        </p>
      </div>
    </>
  );
}

export default TotalPriceCount;
