import { useState } from "react";
import "./Reviews.css";

const initialReviews = [
  {
    id: 1,
    name: "Sarah L.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The coffee quality exceeded my expectations. Every cup is crafted with care and the atmosphere is absolutely relaxing.",
    rating: 5,
  },
  {
    id: 2,
    name: "John H.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Veloura Café has become my favorite place. The espresso is rich, smooth, and the service is outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily S.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Beautiful interior, premium coffee, and friendly staff. Every visit feels luxurious and comfortable.",
    rating: 5,
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !review.trim()) return;

    const newReview = {
      id: Date.now(),
      name,
      review,
      rating,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}&background=d4a373&color=fff`,
    };

    setReviews([newReview, ...reviews]);

    setName("");
    setReview("");
    setRating(5);
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (confirmDelete) {
      setReviews(reviews.filter((item) => item.id !== id));
    }
  }

  return (
    <section className="reviews-page">

      <p className="reviews-small-title">
        WHAT OUR CUSTOMERS SAY
      </p>

      <h1 className="reviews-title">
        Reviews About Veloura Café
      </h1>

      <div className="reviews-container">

        {reviews.map((item) => (

          <div className="review-card" key={item.id}>

            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              🗑
            </button>

            <img
              src={item.image}
              alt={item.name}
              className="review-image"
            />

            <h2>{item.name}</h2>

            <p>{item.review}</p>

            <div className="review-stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

          </div>

        ))}

      </div>

      {/* ================= Add Review ================= */}

      <div className="review-form-card">

        <h2>Share Your Experience</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Write your review..."
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          <div className="rating-select">

            <span>Rating:</span>

            {[1,2,3,4,5].map((star)=>(
              <button
                key={star}
                type="button"
                className={
                  star <= rating
                    ? "star active-star"
                    : "star"
                }
                onClick={()=>setRating(star)}
              >
                ★
              </button>
            ))}

          </div>

          <button
            type="submit"
            className="submit-review-btn"
          >
            Submit Review
          </button>

        </form>

      </div>

    </section>
  );
}