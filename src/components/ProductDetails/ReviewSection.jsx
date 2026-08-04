import { useState } from "react";
import "./ReviewSection.css";
import { Star, User, X } from "lucide-react";

function ReviewSection() {
  const [open, setOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      name: "Ahmed Ali",
      rating: 5,
      comment:
        "Amazing quality and luxury finish. Highly recommended.",
    },
    {
      name: "Sara Mohamed",
      rating: 4,
      comment:
        "Beautiful lighting and easy installation.",
    },
  ]);

  const [review, setReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleSubmit = () => {
    if (
      review.name.trim() === "" ||
      review.comment.trim() === ""
    )
      return;

    setReviews([...reviews, review]);

    setReview({
      name: "",
      rating: 5,
      comment: "",
    });

    setOpen(false);
  };

  return (
    <div className="reviews">

      <div className="reviews-header">

        <h2>Customer Reviews</h2>

        <button
          className="review-btn"
          onClick={() => setOpen(true)}
        >
          Write a Review
        </button>

      </div>

      {reviews.map((item, index) => (

        <div className="review-card" key={index}>

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

            <p>{item.comment}</p>

          </div>

        </div>

      ))}

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

            <input
              type="text"
              placeholder="Your Name"
              value={review.name}
              onChange={(e) =>
                setReview({
                  ...review,
                  name: e.target.value,
                })
              }
            />

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
            >
              Submit Review
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ReviewSection;