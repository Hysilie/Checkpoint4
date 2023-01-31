import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import quillConfig from "../config/quillConfig";
import trash from "../assets/icons/trash2.svg";

function Comments({
  comments,
  setContent,
  addComment,
  currentUser,
  deleteComment,
}) {
  return (
    <ul className="flex flex-col m-2 p-2 items-center ">
      {comments?.map((comment, index) => (
        <li
          key={comment?.id}
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
                <img src={trash} alt="trash" className=" w-5 h-5 m-1 " />
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

            <p className={` ${index % 2 !== 1 ? "font-semibold" : ""} pr-8`}>
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
          {/* first letter of comment  of the string bold and xl  chartAt 0 */}
          <ReactQuill
            theme="bubble"
            value={comment?.content}
            modules={quillConfig.modules}
            readOnly
          />
        </li>
      ))}

      {/* Create a comment with Quill */}
      <ReactQuill
        theme="snow"
        onChange={setContent}
        placeholder="Write a comment... (max 250 chars.)"
        className=" w-5/6 border-main-dark mt-3"
        modules={quillConfig.modules}
      />
      <div className="w-5/6 flex justify-end">
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
