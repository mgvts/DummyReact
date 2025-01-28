import {FC} from "react";
import styled from "styled-components";
import './test.css';
import {Link} from "react-router-dom";

interface AboutProps {

}

const Page = styled.div`
    background: white;
    border: thin solid lightgrey;
    border-radius: 20px;
    height: calc(100vh - 40px - 20px - 2px);
    margin: 20px;
    padding: 10px;
`

const Text = styled.div`
`
const ULink = styled(Link)`
text-decoration: underline`

const About: FC<AboutProps> = ({}) => {

    return (
        <Page>
            <h2>Dummy React</h2>
            <Text>
                Simple proj to test React lib with actions with&nbsp;
                <ULink to='https://dummyjson.com/' target='blank'>DummyJson</ULink>
            </Text>

            <Text>
                <h3>Some Features</h3>
                Layouts for
                <ULink to='/posts'>Posts</ULink>
                (<ULink to='https://dummyjson.com/'>git</ULink>)
                and <ULink to='/users'>Users</ULink>
                (<ULink to='https://dummyjson.com/'>git</ULink>)
            </Text>

            <Text>
                <h3>Example:</h3>
                Posts from&nbsp;
                <ULink to='https://dummyjson.com/docs/posts' target='blank'>DummyJson.Posts</ULink>
            </Text>
        </Page>
    )
};

export default About;