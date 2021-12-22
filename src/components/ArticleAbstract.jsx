import React, { useLayoutEffect, useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Comment from "./Comment";
import IntroCard from "./IntroCard";
import Subtitle from "./Subtitle";
import Title from "./Title";

const ArticleAbstract = ({ data, comments }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [postComments, setPostComments] = useState([]);

  useLayoutEffect(() => {
    setPostComments(
      comments?.filter((comment) => {
        return data.id === comment.postId;
      })
    );
  }, [data, comments]);

  function openModal(articleId) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <IntroCard>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <Button onClick={closeModal}>Fechar</Button>
        <Title>{data.title}</Title>
        <p>{data.body}</p>
        <Subtitle>Comentários</Subtitle>
        {postComments.map((comment) => (
          <Comment key={comment.id} commentData={comment} />
        ))}
      </Modal>
      <Title>{data.title}</Title>
      <Button onClick={openModal}>Leia mais</Button>
    </IntroCard>
  );
};

export default ArticleAbstract;
