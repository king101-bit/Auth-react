import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const supabase = createClient(
'https://vccgzjpbnawoqpqrtgyw.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjY2d6anBibmF3b3FwcXJ0Z3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTk5NjgsImV4cCI6MjA0NTc5NTk2OH0.Y3xX7XWjDgqrR6kVDFY9iljKAnsggyQeLtlxxReALKc',     // Replace with your actual anon key
);

function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                //value.data.user
                if(value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate('/');
    }

    return(
        { Object.keys(user).length !== 0 ?
     <>
     <h1>success</h1>
     <button onClick={() => signOutUser()}>Sign Out</button>
     </>
    :
     <>
     <h1>User is not logged in</h1>
     <button onClick={signOutUser} > sign out </button>
     </>
    }
    );
   }
   
   export default Success;