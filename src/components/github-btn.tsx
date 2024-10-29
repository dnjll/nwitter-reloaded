import { GithubAuthProvider, sendPasswordResetEmail, signInWithPopup, signInWithRedirect } from "firebase/auth";
import {styled} from "styled-components";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Input, Switcher, Wrapper } from "./auth-components";
import { useState } from "react";

const Button = styled.span`
    margin-top: 20px;
    background-color: white;
    font-weight: 500;
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;

`;

const Logo = styled.img`
    height: 25px;
`;


export default function GithubButton() {
    const navigate = useNavigate();
    const onClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/")
        } catch(error) {
            console.error(error);
        }
    };
    return (
        <Button onClick={onClick}>
            <Logo src="/github-logo.svg"/>
            Coninue with Github
        </Button>
       
    );
}

