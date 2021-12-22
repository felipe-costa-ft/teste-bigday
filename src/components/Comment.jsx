import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const UserAvatar = styled(FaUser)`
  font-size: 50px;
  width: 50px;
`;

const CommentText = styled.div`
  width: 100%;
`;

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  border: 2px solid #b543e6;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
`;

const UserData = styled.p`
  margin: 0;
  @media (max-width: 580px) {
    font-size: 10pt;
  }
  @media (max-width: 430px) {
    font-size: 8pt;
  }
`;

const UserAttribute = styled.span`
  font-weight: bolder;

  @media (max-width: 580px) {
    font-size: 10pt;
  }
  @media (max-width: 430px) {
    font-size: 8pt;
  }
`;

const CommentBody = styled.p`
  color: DimGray;
  @media (max-width: 580px) {
    font-size: 10pt;
  }
  @media (max-width: 430px) {
    font-size: 8pt;
  }
`;

const Comment = ({ commentData }) => {
  return (
    <CommentWrapper>
      <UserAvatar color="#b543e6" />
      <CommentText>
        <UserData>
          <UserAttribute>Nome: </UserAttribute>
          {commentData.name}
        </UserData>
        <UserData>
          <UserAttribute>email: </UserAttribute>
          {commentData.email}
        </UserData>
        <CommentBody>{commentData.body}</CommentBody>
      </CommentText>
    </CommentWrapper>
  );
};

export default Comment;
