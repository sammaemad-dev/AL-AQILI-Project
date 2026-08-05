import "./Reviews.css";
import {
  Search,
  Star,
  Check,
  Trash2,
} from "lucide-react";

function Reviews() {
  return (
    <div className="reviews-page">

      <div className="reviews-header">
        <div>
          <h1>Reviews</h1>
          <p>Manage customer reviews</p>
        </div>
      </div>

      <div className="reviews-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search Reviews..."
        />
      </div>

      <div className="reviews-list">

        <div className="review-card">

          <div className="review-top">

            <div className="customer">

              <img
                src="https://i.pravatar.cc/60?img=15"
                alt=""
              />

              <div>
                <h3>Ahmed Ali</h3>
                <span>Royal Crystal Chandelier</span>
              </div>

            </div>

            <div className="stars">
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
            </div>

          </div>

          <p className="review-text">
            Amazing quality and elegant design. Highly recommended.
          </p>

        <div className="review-actions">
  <button className="approve-btn">
     Approve
  </button>

  <button className="deletemy-btn">
    Delete
  </button>
</div>

        </div>





        <div className="review-card">

          <div className="review-top">

            <div className="customer">

              <img
                src="https://i.pravatar.cc/60?img=18"
                alt=""
              />

              <div>
                <h3>Sara Mohamed</h3>
                <span>Luxury Wall Light</span>
              </div>

            </div>

            <div className="stars">
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
              <Star fill="#f7b500" color="#f7b500"/>
              <Star color="#ddd"/>
            </div>

          </div>

          <p className="review-text">
            Very beautiful product with premium finishing.
          </p>

          <div className="review-actions">

            <button className="approve-btn">
              <Check size={18}/>
              Approve
            </button>

            <button className="deletemy-btn">
              <Trash2 size={18}/>
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reviews;