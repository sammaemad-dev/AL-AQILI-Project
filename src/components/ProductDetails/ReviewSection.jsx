import { useEffect, useState } from "react";
import "./ReviewSection.css";
import { Star, User, X } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import { getReviews, createReview } from "../../services/reviewService";

function ReviewSection({ productId }) {
  const { isLoggedIn } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [review, setReview] = useState({
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    if (!productId) return;

    let isMounted = true;

    const loadReviews = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getReviews({ productId });

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
  }, [productId]);

  const handleSubmit = async () => {
    if (review.comment.trim() === "") return;

    try {
      setSubmitting(true);
      setFormError("");

      const created = await createReview({
        productId,
        rating: review.rating,
        comment: review.comment.trim(),
      });

      setReviews([created, ...reviews]);

      setReview({ rating: 5, comment: "" });
      setOpen(false);
    } catch (err) {
      console.error("Create Review Error:", err);

      setFormError(
        err.response?.data?.message || "Failed to submit review."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="reviews">

      <div className="reviews-header">

        <h2>Customer Reviews</h2>

        <button
          className="review-btn"
          onClick={() => {
            if (!isLoggedIn) {
              alert("Please log in to write a review.");
              return;
            }
            setOpen(true);
          }}
        >
          Write a Review
        </button>

      </div>

      {loading ? (
        <p>Loading reviews...</p>
      ) : error ? (
        <p style={{ color: "#c0392b" }}>{error}</p>
      ) : reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review this product.</p>
      ) : (
        reviews.map((item) => (

          <div className="review-card" key={item.id}>

            <div className="review-avatar">

              <User size={35} />

            </div>

            <div className="review-content">

              <h4>{item.name}</h4>

              <div className="stars">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    fill={
                      item.rating >= star
                        ? "#D4A42B"
                        : "transparent"
                    }
                    color="#D4A42B"
                  />

                ))}

              </div>

              <p>{item.review}</p>

            </div>

          </div>

        ))
      )}

      {open && (

        <div className="popup-overlay">

          <div className="popup">

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>

            <h2>Write a Review</h2>

            {formError && (
              <p style={{ color: "#c0392b" }}>{formError}</p>
            )}

            <div className="popup-stars">

              {[1, 2, 3, 4, 5].map((star) => (

                <Star
                  key={star}
                  size={30}
                  color="#D4A42B"
                  fill={
                    review.rating >= star
                      ? "#D4A42B"
                      : "transparent"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setReview({
                      ...review,
                      rating: star,
                    })
                  }
                />

              ))}

            </div>

            <textarea
              rows="5"
              placeholder="Write your review..."
              value={review.comment}
              onChange={(e) =>
                setReview({
                  ...review,
                  comment: e.target.value,
                })
              }
            />

            <button
              className="submit-review"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ReviewSection;
