import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CircleCheckBig } from 'lucide-react';

const SubsDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');

  const handleReviewSubmit = () => {
    if (!reviewText.trim() || !rating || rating < 1 || rating > 5) return;

    const newReview = {
      text: reviewText,
      rating: Number(rating),
      date: new Date().toLocaleString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
    setRating('');
  };

  const data = useLoaderData();
  const { id } = useParams();

  const selectedPlan = data.find(plan => plan.id.toString() === id);

  if (!selectedPlan) {
    return <p className="text-center text-red-500">Subscription plan not found.</p>;
  }

  const {
    banner,
    name,
    category,
    frequency,
    description,
    price,
    features,
    subscription_benefits,
    popular,
    ratings,
    number_of_reviews,
  } = selectedPlan;

  return (
    <section className="bg-gray-100 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-violet-700">{name}</h1>
        <p className="text-gray-600 mt-2">{category} • {frequency}</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img src={banner} alt={name} className="w-full h-64 object-cover" />
        <div className="p-6">
          {popular && (
            <span className="inline-block mb-4 bg-yellow-300 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}

          <p className="text-xl font-semibold text-cyan-600 mb-2">${price} / {frequency}</p>
          <p className="text-gray-700 mb-4">{description}</p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-gray-800">What's Included:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CircleCheckBig className="w-4 h-4 mr-2 text-green-600 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-gray-800">Subscription Benefits:</h4>
            <ul className="text-sm text-gray-700 list-disc pl-5">
              {subscription_benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            ⭐ {ratings} ({number_of_reviews} reviews)
          </div>

          <button className="w-full bg-violet-700 text-white py-2 rounded-lg hover:bg-cyan-600 transition-all">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-violet-700 mb-4">Leave a Review</h3>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-3 resize-none"
          rows={3}
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          placeholder="Rating (1–5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          className="w-full py-2 bg-violet-700 text-white rounded hover:bg-cyan-600"
          onClick={handleReviewSubmit}
        >
          Submit Review
        </button>
      </div>

      {reviews.length > 0 && (
        <div className="mt-10 max-w-2xl mx-auto">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Reviews</h4>
          <ul className="space-y-4">
            {reviews.map((r, i) => (
              <li key={i} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-800">{r.text}</p>
                <div className="text-sm text-gray-500 mt-1">
                  Rating: {r.rating} / 5 — <span>{r.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default SubsDetails;
