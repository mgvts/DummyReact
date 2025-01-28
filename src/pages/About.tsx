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

    h1, h2, h3, h4 {
        margin: 8px 0;
    }
`

const Text = styled.div`
    & div {
        padding: 4px 0;
    }
`
const ULink = styled(Link)`
    text-decoration: underline;
`

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
                <div>
                    <h4>Layouts for List</h4>
                    <ULink to='/posts'>Posts</ULink>
                    (<ULink
                    to='https://github.com/mgvts/DummyReact/blob/master/src/pages/posts/PostsPage.tsx'>git</ULink>)
                    and <ULink to='/users'>Users</ULink>
                    (<ULink
                    to='https://github.com/mgvts/DummyReact/blob/master/src/pages/users/UsersPage.tsx'>git</ULink>)
                </div>
                <div>
                    <ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/layouts/ListLayout.tsx'>Layout</ULink> have
                    hook and list element node for it
                    and combine it, and in pages components needed only to pass FC (with data) and current fetch
                </div>

                <div>
                    <h4>Layouts for Info</h4>
                    <ULink to='/posts/1'>Posts</ULink>
                    (<ULink
                    to='https://github.com/mgvts/DummyReact/blob/master/src/pages/posts/PostId.tsx'>git</ULink>)
                    and <ULink to='/users/1'>Users</ULink>
                    (<ULink
                    to='https://github.com/mgvts/DummyReact/blob/master/src/pages/users/UsersId.tsx'>git</ULink>)
                </div>
                <div>
                    <ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/layouts/InfoLayout.tsx'>Layout</ULink> have
                    info hook and info component as ReactNode to render 'header'
                    and list with no query with FC for list element and hook for this.
                </div>

            </Text>
            <Text>
                <h3>Example:</h3>
                <ul>
                    <li>
                        Posts from&nbsp;
                        <ULink to='https://dummyjson.com/docs/posts' target='blank'>DummyJson.Posts</ULink>
                    </li>
                    <li>
                        Users from&nbsp;
                        <ULink to='https://dummyjson.com/docs/users' target='blank'>DummyJson.Users</ULink>
                    </li>
                </ul>
            </Text>
        </Page>
    )
};

export default About;