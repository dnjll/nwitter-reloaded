import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    overflow-y: scroll;
    grid-template-rows: 1fr 5fr;
`;

export default function Home() {
    return (
        <Wrapper>
            <PostTweetForm/>
            <Timeline/>
        </Wrapper>
    )
}