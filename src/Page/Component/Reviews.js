import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  const Avatar = ({ avatarId }) => {
    return (
      <img
        className="w-10 h-10 me-4 rounded-full"
        src={`https://i.pravatar.cc/300/${avatarId}`}
        alt="Avatar"
      />
    );
  };

  useEffect(() => {
    const generateReviews = async () => {
      const reviews = [];

      for (let i = 1; i <= 1; i++) {
        const random_number = Math.floor(Math.random() * 100);
        const avatarId = Math.random().toString(36).substring(7);

        // Fetch review data from 'dummyjson.com/comments/{random_number}'
        const response = await fetch(
          `https://dummyjson.com/comments/${random_number}`
        );
        const data = await response.json();
        const rating =
          Math.random() >= 0.2 ? 5 : Math.floor(Math.random() * 4) + 1;

        reviews.push({
          random_number,
          avatarId,
          ...data,
          rating,
        });
      }

      setReviewsData(reviews);
    };

    generateReviews();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-10 py-10 mx-auto bg-white shadow-lg max-w-4xl truncate rounded-xl">
        <div className="container px-10 py-5 mx-auto bg-white  rounded-xl max-w-4xl truncate inline-block">
          {reviewsData.map((review, index) => (
            <article key={index} className="flex items-start mb-8">
              <div className="flex flex-col items-center mr-4">
                <Avatar avatarId={review.avatarId} />
                <div className="font-medium dark:text-white">
                <p>{review.user ? review.user.username : 'Anonymous'}</p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {review.body}
                </p>
                <footer className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                  <p>Reviewed in Hong Kong</p>
                </footer>
                <aside>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {`${review.random_number} people found this helpful`}
                  </p>
                </aside>
              </div>
              <div className="flex items-center ml-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < review.rating
                        ? "text-yellow-300"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Star path */}
                    <path d="M12 2L9.15 8.36L2 9.27L7.24 14.14L6.18 21.01L12 17.77L17.82 21.01L16.76 14.14L22 9.27L14.85 8.36L12 2Z" />
                  </svg>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
