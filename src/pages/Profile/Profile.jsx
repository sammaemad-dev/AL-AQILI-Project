// import "./Profile.css";
// import { FiUser, FiEdit2, FiHeart, FiShoppingBag, FiLogOut } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// function Profile() {

//     const navigate = useNavigate();

//     // مؤقتًا لحد الـ API
//     const user = {
//         userName: "Sama Emad",
//         email: "sama@gmail.com"
//     };

//     function handleLogout(){

//         localStorage.removeItem("token");
//         localStorage.removeItem("user");

//         navigate("/login");
//     }

//     return(

//         <section className="profile-page">

//             <div className="profile-card">

//                 <div className="profile-header">

//                     <div className="avatar">
//                         <FiUser />
//                     </div>

//                     <h2>{user.userName}</h2>

//                     <p>{user.email}</p>

//                 </div>

//                 <div className="profile-menu">

//                     <button>
//                         <FiEdit2 />
//                         Edit Profile
//                     </button>

//                     <button onClick={()=>navigate("/tracking")}>
//                         <FiShoppingBag />
//                         My Orders
//                     </button>

//                     <button onClick={()=>navigate("/wishlist")}>
//                         <FiHeart />
//                         Wishlist
//                     </button>

//                     <button
//                         className="logout"
//                         onClick={handleLogout}
//                     >
//                         <FiLogOut />
//                         Logout
//                     </button>

//                 </div>

//             </div>

//         </section>

//     );
// }

// export default Profile;










import "./Profile.css";
import { FiUser, FiEdit2, FiHeart, FiShoppingBag, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useAuth } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { getCurrentUser, logoutUser } from "../../services/authService";

function Profile() {
    const navigate = useNavigate();
    const { user: cachedUser, logout } = useAuth();

    const [user, setUser] = useState({
        userName: cachedUser?.fullName,
        email: cachedUser?.email,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function loadUser() {
            try {
                const data = await getCurrentUser();

                if (isMounted) {
                    setUser({
                        userName: data.fullName ?? data.userName ?? cachedUser?.fullName,
                        email: data.email ?? cachedUser?.email,
                    });
                }
            } catch (error) {
                console.error("Failed to load profile:", error);
                // Keep showing the cached user (from login) on failure.
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadUser();

        return () => {
            isMounted = false;
        };
    }, []);

    async function handleLogout() {
        try {
            await logoutUser();
        } catch (error) {
            console.error("Logout Error:", error);
        } finally {
            logout();
            navigate("/login");
        }
    }

    return (

        <section className="profile-page">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="avatar">
                        <FiUser />
                    </div>

                    <h2>{loading ? "Loading..." : user.userName ?? "Guest"}</h2>

                    <p>{user.email}</p>

                </div>

                <div className="profile-menu">

                    <button>
                        <FiEdit2 />
                        Edit Profile
                    </button>

                    <button onClick={() => navigate("/tracking")}>
                        <FiShoppingBag />
                        My Orders
                    </button>

                    <button onClick={() => navigate("/wishlist")}>
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
