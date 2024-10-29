import { fetchSignInMethodsForEmail, sendPasswordResetEmail, SignInMethod } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Form, Input, Wrapper,Switcher, Error} from "../components/auth-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ResetPassword() {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<String | null>(null);

    const sendResetEmail = async() => {

       try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);

            if(signInMethods.length > 0) {
                await sendPasswordResetEmail(auth, email);
                setMessage("resetPassword");
            } else {
                setMessage("userNotRegistered");
            }
       } catch (error: any) {
        setMessage("error");
       }
    }
    return (
        <Wrapper>
            <h1>{'resetPassword'}</h1>
            <Form><Input
                type="email"
                placeholder={'pleaseEnterYourEmail'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input type="submit" onClick={sendResetEmail} value='resetYourPassword'></Input>
            </Form>
            {message && <Error>{message}</Error>}
            <Switcher>
                'backToLoginPage' <Link to="/login">'logIn' &rarr;</Link>{' '}
            </Switcher>
        </Wrapper>
    );
    
};

