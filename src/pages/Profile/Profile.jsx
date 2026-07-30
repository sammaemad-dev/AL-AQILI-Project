import "./Profile.css";
import { FiUser, FiEdit2, FiHeart, FiShoppingBag, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    // مؤقتًا لحد الـ API
    const user = {
        userName: "Sama Emad",
        email: "sama@gmail.com"
    };

    function handleLogout(){

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    }

    return(

        <section className="profile-page">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="avatar">
                        <FiUser />
                    </div>

                    <h2>{user.userName}</h2>

                    <p>{user.email}</p>

                </div>

                <div className="profile-menu">

                    <button>
                        <FiEdit2 />
                        Edit Profile
                    </button>

                    <button onClick={()=>navigate("/tracking")}>
                        <FiShoppingBag />
                        My Orders
                    </button>

                    <button onClick={()=>navigate("/wishlist")}>
                        <FiHeart />
                        Wishlist
                    </button>

                    <button
                        className="logout"
                        onClick={handleLogout}
                    >
                        <FiLogOut />
                        Logout
                    </button>

                </div>

            </div>

        </section>

    );
}

export default Profile;