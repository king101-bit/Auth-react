import Avatar from "boring-avatars";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ProtectRoutes from "../Components/ProtectRoutes";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Profile({ user }) {
  return (
    <div>
      <h1>{user ? `Hello, ${user.email}` : "Guest Profile"}</h1>

      {/* Displaying a larger avatar on the profile page */}
      {user && (
        <Avatar
          size={100} // Larger size for profile page
          name={user.email} // Same identifier for consistent avatar
          variant="marble" // Can choose a different variant for a unique look
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      )}
    </div>
  );
}

export default Profile;