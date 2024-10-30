import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Avatar from "boring-avatars";  // Import the avatar component
import { createClient } from '@supabase/supabase-js';
import ProtectRoutes from "../Components/ProtectRoutes";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await supabase.auth.getUser();
                setUser(data?.user);
            } catch (error) {
                setError("Failed to load user information.");
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            navigate('/login');
        } catch (error) {
            setError("Failed to log out. Please try again.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ProtectRoutes>
            <div>
                <h1>Welcome Home, {user ? user.email : 'Guest'}!</h1>

                {user ? (
                    <>
                        {/* Display Avatar */}
                        <Avatar
                            size={80}                   // Set size of avatar
                            name={user.email}           // Use email or username for unique avatars
                            variant="marble"              // Choose a variant: "marble", "beam", "pixel", "sunset", etc.
                            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                        />
                        <button onClick={handleLogout}>Log Out</button>
                        <button onClick={() => navigate('/profile')}>Go to Profile</button>
                        <button onClick={() => navigate('/settings')}>Settings</button>
                    </>
                ) : (
                    <p>Please <button onClick={() => navigate('/login')}>log in</button> to access more features.</p>
                )}
            </div>
        </ProtectRoutes>
    );
}

export default Home;