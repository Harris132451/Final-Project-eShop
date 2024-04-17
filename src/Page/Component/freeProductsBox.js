const FreeBox = function (props) {
  const productsArr = [props.freeItemsList[1], props.freeItemsList[2]];
  return (
    <div class="flex flex-row justify-between border-t-grey border-b-[1px] mx-2 w-[400px] sm:w-[330px] px-2 pt-3 pb-2 sm:pt-3 text-black">
      {productsArr.map((p) => {
        return (
          <div class="flex flex-col justify-between">
            <div class="flex flex-col max-w-[140px] h-auto sm:max-w-[110px] sm:h-auto">
              <img src={p.picture} class="shadow rounded" />
              <h5 class="mt-1 text-[13px] text-center font-normal sm:text-left sm:mt-1 sm:text-[10px] sm:font-light">
                {p.name}
              </h5>
            </div>
            <div class="flex justify-between sm:justify-start ">
              <h6 class="text-[20px] text-red-500 line-through text-left sm:text-[14px]">
                ${p.price}
              </h6>
              <h6 class="text-[20px] text-right self-end sm:text-[14px] sm:ml-3">
                $0
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FreeBox;
