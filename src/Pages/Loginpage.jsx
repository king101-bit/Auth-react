import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from "react-router-dom";

const supabase = createClient(
'https://vccgzjpbnawoqpqrtgyw.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjY2d6anBibmF3b3FwcXJ0Z3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTk5NjgsImV4cCI6MjA0NTc5NTk2OH0.Y3xX7XWjDgqrR6kVDFY9iljKAnsggyQeLtlxxReALKc',     // Replace with your actual anon key
);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {

        if (event == "SIGNED_IN") {

            navigate("/success");

        } else {
            //forward to the localhost URL
            navigate("/");
        }
    })

 return(
<Auth
  supabaseClient={supabase}
  appearance={{ theme: ThemeSupa }}
  theme="dark"
  providers={["discord"]}
/>
);
}

export default Login;