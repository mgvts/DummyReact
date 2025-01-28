import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FullPost, FullUser, User} from '../../api/types';
import Chip from '../UI/Chip';
import Card from '../Card';
import Loader from "../UI/Loader";
import {FC} from "react";
import {Nullable} from "../../types";

const PostContainer = styled(Card)`
  padding: 2rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.cardBackground};
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const UserInfo = styled.div`
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const PostContent = styled.article`
  h2 {
    margin: 0 0 1rem;
    font-size: 2rem;
  }

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1.5rem;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

interface PostDetailsProps {
    post: Nullable<FullPost>;
    user: Nullable<FullUser>;
}

const PostInfo: FC<PostDetailsProps> = ({ post, user }) => {
    if (!user || !post) return <Loader/>
    return (
        <PostContainer>
            <UserSection>
                <UserInfo>
                    <Link to={`/users/${user.id}`}>
                        {user.username}
                    </Link>
                </UserInfo>
            </UserSection>

            <PostContent>
                <h2>{post.title}</h2>
                <p>{post.body}</p>

                <StatsRow>
                    <div>👍 {post.reactions.likes}</div>
                    <div>👎 {post.reactions.dislikes}</div>
                    <div>👁️ {post.views} views</div>
                </StatsRow>

                {post.tags?.length > 0 && (
                    <TagsContainer>
                        {post.tags.map((tag, index) => (
                            <Chip key={index} value={tag} />
                        ))}
                    </TagsContainer>
                )}
            </PostContent>
        </PostContainer>
    );
};

export default PostInfo;