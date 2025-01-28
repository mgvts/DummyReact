import {FC} from "react";
import styled from "styled-components";
import './test.css';
import {Link} from "react-router-dom";
import {usePaginatedResource} from "../hooks/core/usePaginatedResource";

interface AboutProps {

}

const Page = styled.div`
    overflow: auto;
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
    const codeExamples = {
        paginationHook: `const usePaginatedResource = <T>(
    fetcher: ResourceFetcher<T>,
    options: UsePaginatedResourceOptions = {}
): PaginationData<T> `,
        listLayout: `interface ListLayoutProps<T extends Base> {
    domainHook: () => PaginationData<T>
    ListElement: ListElement<T> // <T>FC<{data: T}>
}
const ListLayout = <T extends Base>({ domainHook, ListElement }: ListLayoutProps<T>): ReactNode => {/**/}`,
        infoLayout: `const InfoLayout = <T, L extends Base>(
    {
        infoHook,
        listHook,
        InfoComponent,
        ListComponent,
        dependencies = [],
        emptyListMsg = ''
    }: InfoLayoutProps<T, L>) => {/**/}`
    }
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
                    <h4>Hook for pagination</h4>
                    create self hook for pagination with api call (fetcher) and options
                    <pre>{codeExamples.paginationHook}</pre>
                    more types are in <ULink
                    to="https://github.com/mgvts/DummyReact/blob/master/src/hooks/core/usePaginatedResource.ts">source
                    file</ULink>
                    <br/>
                </div>
                <div>
                    <h4>Layout for List</h4>
                    <span>
                        <ULink to='/posts'>Posts</ULink>
                        (<ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/pages/posts/PostsPage.tsx'>git</ULink>)
                        and <ULink to='/users'>Users</ULink>
                        (<ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/pages/users/UsersPage.tsx'>git</ULink>)
                    </span>
                    <br/>
                    Component which combined search header with api calls (must use instance of usePaginatedResource
                    hook) and logic with render lists
                </div>
                <div>
                    <pre>
                        {codeExamples.listLayout}
                    </pre>
                    <ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/layouts/ListLayout.tsx'>Layout</ULink> have
                    <ul>
                        <li>hook for process list (ex: <ULink
                            to="https://github.com/mgvts/DummyReact/blob/master/src/hooks/domain/usePosts.ts">usePosts</ULink>)
                        </li>
                        <li>
                            FC for render list element (ex: <ULink
                            to="https://github.com/mgvts/DummyReact/blob/master/src/components/posts/PostInline.tsx">PostInline</ULink>)
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Layout for Info</h4>
                    <span>
                      <ULink to='/posts/1'>Posts</ULink>
                    (<ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/pages/posts/PostId.tsx'>git</ULink>)
                    and <ULink to='/users/1'>Users</ULink>
                    (<ULink
                        to='https://github.com/mgvts/DummyReact/blob/master/src/pages/users/UsersId.tsx'>git</ULink>)
                    </span>
                    <br/>
                    Similar with ListLayout but  needed separated elements for header and list
                    and also hooks for its.
                </div>
                <pre>
                        {codeExamples.infoLayout}
                </pre>
            </Text>
            <Text>
                <h3>Data:</h3>
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