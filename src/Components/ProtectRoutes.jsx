import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function ProtectRoutes({ children }) {
    const [session, setSession] = useState(undefined);  // `undefined` initially to indicate loading
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch session asynchronously
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);  // Set session state after fetching
        };

        checkSession();
    }, []); // Empty dependency array to run only on initial render

    useEffect(() => {
        if (session === null) {
            navigate('/login');  // Only navigate if session is confirmed as `null`
        }
    }, [session, navigate]);

    if (session === undefined) {
        return null; // Optionally, show a loading indicator instead of `null`
    }

    return session ? children : null;  // Render children only if session exists
}

export default ProtectRoutes;