import React, { useState } from "react";

/* Quill */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

/* Styles and Images */
import quillConfig from "../config/quillConfig";
import trash from "../assets/icons/trash2.svg";
import edit from "../assets/icons/Frameedit.svg";

/* Hooks, contexts and .env */
import { useCurrentUserContext } from "../contexts/userContext";

const { VITE_BACKEND_URL } = import.meta.env;

function Comments({
  comments,
  addComment,
  currentUser,
  deleteComment,
  contentArticle,
  handleContentArticle,
  getComments,
}) {
  const { token } = useCurrentUserContext();
  const [id, setId] = useState(null);
  const [modifyContent, setModifyContent] = useState(comments.content);
  const handleModifyComment = (currentId) => {
    if (id === null) {
      setId(currentId);
    }
    if (id !== null) {
      setId(null);
    }
  };

  const modifyComment = (content) => {
    setModifyContent(content);
  };

  const updateComment = () => {
    /* Fetch to POST the content  */
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      content: modifyContent,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${VITE_BACKEND_URL}/comments/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.warn(result);
        getComments();
        setId(null);
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <ul className=" flex flex-col m-2 p-2 items-center ">
      {comments?.map((comment, index) => (
        <li
          key={index}
          className={`border-2 border-main-dark bg-main-white w-5/6 my-3 flex flex-col ${
            index % 2 === 0 ? "self-end" : "self-start"
          }`}
        >
          <div className="relative border-b-2 border-main-dark flex justify-between items-center">
            {/* Delete */}
            {comment?.user_id === currentUser?.id && (
              <button
                className="absolute right-0"
                type="button"
                onClick={() => deleteComment(comment?.id)}
              >
                <img
                  src={trash}
                  alt="trash"
                  className=" w-5 h-5 m-1 hover:scale-105"
                />
              </button>
            )}

            {comment?.user_id === currentUser?.id && (
              <button
                className="absolute right-5"
                type="button"
                onClick={() => handleModifyComment(comment?.id)}
              >
                <img
                  src={edit}
                  alt="edit"
                  className=" w-5 h-5 m-1 hover:scale-105"
                />
              </button>
            )}
            {/* Header */}
            <p className={` ${index % 2 !== 1 ? "" : "font-semibold"} px-3`}>
              {index % 2 === 0
                ? comment?.creationDate
                    ?.slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")
                : comment?.username?.toUpperCase()}
            </p>
            <p className={` ${index % 2 !== 1 ? "font-semibold" : ""}  pr-12`}>
              {index % 2 === 0
                ? comment?.username?.toUpperCase()
                : comment?.creationDate
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
            </p>
          </div>
          <article
            className={`  h-fit   ${
              index % 2 === 0 ? "text-left" : "text-left"
            }`}
          />
          <div className="relative">
            {handleModifyComment && comment?.id === id ? (
              <ReactQuill
                theme="bubble"
                placeholder={comment?.content}
                onChange={modifyComment}
                className="  w-full  border-main-dark  h-20 "
                modules={quillConfig.modules}
                preserveWhitespace
              />
            ) : (
              <ReactQuill
                theme="bubble"
                value={comment?.content}
                readOnly
                className=" w-5/6 border-main-dark mt-3"
                modules={quillConfig.modules}
                preserveWhitespace
              />
            )}
            {handleModifyComment && comment?.id === id && (
              <div
                className={`w-1/6 ${
                  id ? "flex" : "hidden"
                }  justify-end absolute right-0  h-full top-0`}
              >
                <button
                  onClick={() => updateComment()}
                  type="button"
                  className=" text-md h-full shadow-md text-center border-2    bg-main-dark text-main-white border-main-dark  w-2/6 hover:scale-110 duration-300"
                >
                  <p className="text-sm -p-3 -m-3">
                    {" "}
                    E<br />D<br />I<br />T<br />
                  </p>
                </button>
              </div>
            )}
          </div>
        </li>
      ))}

      {/* Create a comment with Quill */}

      <ReactQuill
        theme="snow"
        value={contentArticle}
        onChange={handleContentArticle}
        placeholder="Write a comment... (max 250 chars.)"
        className={` w-5/6 border-main-dark mt-3 ${id ? "hidden" : ""}`}
        modules={quillConfig.modules}
        preserveWhitespace
      />

      <div className={`w-5/6 flex justify-end ${id ? "hidden" : ""}`}>
        <button
          onClick={() => addComment()}
          type="button"
          className=" text-md h-10 shadow-md text-center border-2 rounded-br rounded-bl   bg-main-dark text-main-white border-main-dark  w-20 hover:scale-110 duration-300"
        >
          SEND
        </button>
      </div>
    </ul>
  );
}

export default Comments;
