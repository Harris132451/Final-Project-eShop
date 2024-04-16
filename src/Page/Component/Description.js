import React from 'react';

const ProductDetail = ({ descriptions, productId }) => {
    console.log("descriptions","productId")
  // 找到对应产品的描述
  const description = descriptions.find(desc => desc.id === productId);

  if (!description) {
    return <div>Description not found</div>;
  }

  return (
    <>
      <div className="container px-10 py-5 mx-auto bg-white shadow-sm rounded-xl max-w-4xl truncate inline-block ">
        <div className="w-full space-y-14">
          <div className="text-blue-500 font-bold mb-2">{description.code}</div>
          <div>
            <h3 className="text-xl font-bold mb-2">{description.title}</h3>
            <div className="mb-4 whitespace-pre-line" >{description.detail}</div>
          </div>
          <div>
            <div className="text-blue-500 font-bold mb-2">{description["detail-title"]}</div>
            <div>{description["detail-content"]}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;


