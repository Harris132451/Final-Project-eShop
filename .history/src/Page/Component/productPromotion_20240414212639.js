import React, { useState } from 'react';

function ProductPromotion() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const promoContent = [
    "Points Rewards: Accumulate points with every purchase, which can be redeemed for future discounts or product exchanges.",
    "Birthday Privileges: Special offers or gifts are provided to members on their birthdays to express care and appreciation.",
    "Exclusive Discounts: Members enjoy regular exclusive discount events on specific products or entire shopping carts.",
    "Early Access: Members have the privilege to purchase new or limited edition products in advance, avoiding product shortages or waiting times.",
    "Free Delivery: Members benefit from free delivery services, regardless of purchase amount, ensuring convenience with doorstep delivery.",
    "VIP Customer Service: Providing faster and superior customer service to members, including dedicated hotlines or online support.",
    "Rebate Programs: Earn a certain percentage of rebates on purchases, which can be used for future shopping or cashed out.",
    "Double Points Day: Regularly hold double or multiple points days, where members receive double or more points for purchases during this period.",
    "Eligibility for Member Activities: Participation in specific promotions, gifts, or draw events is limited to members.",
    "Exclusive Events and Packages: Periodically host member-exclusive events and provide exclusive gift packages or gifts."
  ];

  return (
    <div className="container px-5 py-24 mx-auto bg-gray-200 shadow-lg max-w-4xl truncate inline-block">
    
        {promoContent.slice(0, expanded ? promoContent.length : 5).map((content, index) => (
          <div key={index} className="container px-5 py-24 mx-auto bg-gray-200 shadow-lg max-w-4xl truncate inline-block">{content}</div>
        ))}
        <div className="container px-5 py-24 mx-auto bg-gray-200 shadow-lg max-w-4xl truncate inline-block">
          {!expanded && <a href="#" className="text-blue-500 hover:underline" onClick={toggleExpanded}>Read more</a>}
        </div>
      
    </div>
  );
}

export default ProductPromotion;
