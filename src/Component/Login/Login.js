import React, {useState} from "react";
import * as Components from './Component';
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login() {
    const navigate=useNavigate();
    const [signIn, toggle] = React.useState(true);
    const [form, setForm] = useState({});

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const signup = await fetch('http://localhost:3002/signup', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json' 
          }
        });
        const data = await signup.text(); 
        console.log(data);
        alert("Welcome to AniLearn");
      }
    

    return (
        <>
            <div className="logincomponent">
                <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Input type='text' onChange={handleForm} name="name"  placeholder='Name' />
                            <Components.Input type='email' onChange={handleForm} name="email" placeholder='Email' />
                            <Components.Input type='password' onChange={handleForm} name="password" placeholder='Password' />
                            <Components.Input type='role' onChange={handleForm} name="role" placeholder='Student/Educator/Admin' />
                            <Components.Button onClick={submitHandler}>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type='email' placeholder='Email' />
                            <Components.Input type='password' placeholder='Password' />
                            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                            <Components.Button onClick={()=>{navigate('/')}}>Sigin In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => {toggle(true); navigate('/')}}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sigin Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </div>
        </>
    )
}

export default Login;