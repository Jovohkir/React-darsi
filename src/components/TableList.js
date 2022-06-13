import React from "react";
import "../styles.css";
import TableItem from "./TableItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TableList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h4 className="text-center m-2">Not Found</h4>;
  }
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={200} className="item">
            <TableItem removePost={removePost} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
export default TableList;
