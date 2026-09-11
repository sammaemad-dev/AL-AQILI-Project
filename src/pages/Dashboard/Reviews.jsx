import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, User } from "lucide-react";
import "./Reviews.css";
import { useAuth } from "../../hooks/useAuth";
import { getReviews, createReview } from "../../services/reviewService";

export default function Reviews() {
  const { user, isLoggedIn } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadReviews() {
      try {
        setLoading(true);
        const data = await getReviews();
        if (isMounted) setReviews(data);
      } catch (error) {
        console.error("Failed to load reviews:", error);
        if (isMounted) setLoadError("Couldn't load reviews right now.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!review.trim() || submitting) return;

    try {
      setSubmitting(true);

      const newReview = await createReview({
        productId: null,
        rating,
        comment: review.trim(),
      });

      // Fall back to the logged-in user's name if the API response
      // doesn't include one.
      setReviews((prev) => [
        {
          ...newReview,
          name: newReview.name !== "Anonymous" ? newReview.name : user?.fullName ?? "You",
        },
        ...prev,
      ]);

      setReview("");
      setRating(5);
    } catch (error) {
      console.error("Create Review Error:", error);
      const message =
        error.response?.data?.message || "Couldn't submit your review. Please try again.";
      alert(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="reviews-page">

      <p className="reviews-small-title">WHAT OUR CUSTOMERS SAY</p>

      <h1 className="reviews-title">Reviews About AL AQILI</h1>

      <div className="reviews-container">

        {loading && (
          <p className="reviews-status">Loading reviews...</p>
        )}

        {!loading && loadError && (
          <p className="reviews-status">{loadError}</p>
        )}

        {!loading && !loadError && reviews.length === 0 && (
          <p className="reviews-status">
            No reviews yet. Be the first to share your experience!
          </p>
        )}

        {!loading &&
          !loadError &&
          reviews.map((item) => (

            <div className="review-card" key={item.id}>

              <div className="review-avatar">
                <User size={30} />
              </div>

              <h3 className="review-name">{item.name}</h3>

              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill={item.rating >= star ? "#C89B3C" : "transparent"}
                    color="#C89B3C"
                  />
                ))}
              </div>

              <p className="review-text">{item.review}</p>

            </div>

          ))}

      </div>

      {/* ================= Add Review ================= */}

      <div className="review-form-card">

        <h2>Share Your Experience</h2>

        {isLoggedIn ? (
          <form onSubmit={handleSubmit}>

            <textarea
              placeholder="Write your review..."
              rows="5"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>

            <div className="rating-select">

              <span>Your Rating:</span>

              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="star-btn"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  >
                    <Star
                      size={26}
                      fill={
                        (hoverRating || rating) >= star
                          ? "#C89B3C"
                          : "transparent"
                      }
                      color="#C89B3C"
                    />
                  </button>
                ))}
              </div>

            </div>

            <button
              type="submit"
              className="submit-review-btn"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>

          </form>
        ) : (
          <p className="login-prompt">
            Please <Link to="/login">log in</Link> to share your experience.
          </p>
        )}

      </div>

    </section>
  );
}
