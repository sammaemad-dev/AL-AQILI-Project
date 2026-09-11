import { useEffect, useState } from "react";
import "./Reviews.css";

import { useAuth } from "../../hooks/useAuth";
import {
  getReviews,
  createReview,
  deleteReview,
} from "../../services/reviewService";

export default function Reviews() {
  const { isLoggedIn } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadReviews = async () => {
      try {
        setLoading(true);
        setError("");

        // No productId -> these are general, site-wide reviews.
        const data = await getReviews({});

        if (isMounted) setReviews(data);
      } catch (err) {
        console.error("Get Reviews Error:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to load reviews."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isLoggedIn) {
      setFormError("Please log in to leave a review.");
      return;
    }

    if (!review.trim()) return;

    try {
      setSubmitting(true);
      setFormError("");

      const created = await createReview({
        productId: null,
        rating,
        comment: review.trim(),
      });

      setReviews([created, ...reviews]);

      setReview("");
      setRating(5);
    } catch (err) {
      console.error("Create Review Error:", err);

      setFormError(
        err.response?.data?.message || "Failed to submit review."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) return;

    try {
      await deleteReview(id);
      setReviews(reviews.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Delete Review Error:", err);
      alert(
        err.response?.data?.message || "Failed to delete review."
      );
    }
  }

  return (
    <section className="reviews-page">

      <p className="reviews-small-title">
        WHAT OUR CUSTOMERS SAY
      </p>

      <h1 className="reviews-title">
        Customer Reviews
      </h1>

      <div className="reviews-container">

        {loading ? (
          <p>Loading reviews...</p>
        ) : error ? (
          <p style={{ color: "#c0392b" }}>{error}</p>
        ) : reviews.length === 0 ? (
          <p>No reviews yet. Be the first to share your experience.</p>
        ) : (
          reviews.map((item) => (

            <div className="review-card" key={item.id}>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                🗑
              </button>

              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  item.name
                )}&background=d4a373&color=fff`}
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

          ))
        )}

      </div>

      {/* ================= Add Review ================= */}

      <div className="review-form-card">

        <h2>Share Your Experience</h2>

        {!isLoggedIn && (
          <p style={{ color: "#c0392b" }}>
            Please log in to leave a review.
          </p>
        )}

        {formError && (
          <p style={{ color: "#c0392b" }}>{formError}</p>
        )}

        <form onSubmit={handleSubmit}>

          <textarea
            placeholder="Write your review..."
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          <div className="rating-select">

            <span>Rating:</span>

            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={
                  star <= rating
                    ? "star active-star"
                    : "star"
                }
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}

          </div>

          <button
            type="submit"
            className="submit-review-btn"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>

        </form>

      </div>

    </section>
  );
}
