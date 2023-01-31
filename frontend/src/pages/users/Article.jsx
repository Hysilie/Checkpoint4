import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import Comments from "@components/Comments";
import flowers from "@assets/others/flowers.svg";
import { useCurrentUserContext } from "../../contexts/userContext";

const { VITE_BACKEND_URL } = import.meta.env;

function Article() {
  const { id } = useParams();
  const { currentUser, token } = useCurrentUserContext();

  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

  const [contentArticle, setContentArticle] = useState("");

  const handleContentArticle = (content) => {
    setContentArticle(content);
  };

  /* Get the article by his id, get by params */
  useEffect(() => {
    const getArticle = () => {
      fetch(`${VITE_BACKEND_URL}/articles/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setArticle(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getArticle();
  }, []);

  /* Gets all the comments by article id */

  const getComments = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${VITE_BACKEND_URL}/comments/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getComments();
  }, [comments.length]);

  /* Add a comment */
  const addComment = (content) => {
    if (content === "") return;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      content: contentArticle,
      article_id: parseInt(id, 10),
      user_id: currentUser.id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${VITE_BACKEND_URL}/comments`, requestOptions)
      .then((response) => response.text())

      .catch((error) => console.warn("error", error));
    setComments([...comments, content]);
    setContentArticle("");
  };

  /* Delete a comment */
  const deleteComment = (commentID) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${VITE_BACKEND_URL}/comments/${commentID}`, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        console.warn(data);
        getComments();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    article && (
      <section className="h-[80vh]">
        <PreviousBtn />
        <h2 className="text-center my-6 text-xl">READING</h2>
        <div className="w-full h-full justify-center lg:flex pt-[15%] lg:p-[5%]">
          <article className="relative lg:w-1/2  lg:border-r-2 lg:h-fit lg:border-second-dark ">
            {/* Title of the article */}
            <h3 className="font-serif font-semibold text-2xl w-100 lg:w-4/6 px-3">
              {article.title?.toUpperCase()}
            </h3>

            <p className="px-3">
              by {article.username}, the{" "}
              {article.creationDate
                ?.slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
            </p>
            <img
              src={flowers}
              alt="flowers"
              className="hidden lg:block lg:absolute lg:top-[-14vh] lg:left-[-10vh] lg:z-[-10] lg:w-full lg:opacity-60 lg:-rotate-90 "
            />
            {/* Comments */}
            <div className="hidden lg:block">
              <Comments
                setContentArticle={setContentArticle}
                handleContentArticle={handleContentArticle}
                deleteComment={deleteComment}
                currentUser={currentUser}
                comments={comments}
                addComment={addComment}
                contentArticle={contentArticle}
                getComments={getComments}
              />
            </div>
            {/* Comments */}
          </article>
          {/* Content of the article */}
          <aside className="lg:w-1/2 px-6 my-6  lg:my-0 lg:h-96 h-fit items-center justify-center">
            <ReactQuill
              theme="bubble"
              value={article.content}
              className=" h-100  h-fit"
            />
          </aside>
          <div className=" md:hidden">
            <Comments
              handleContentArticle={handleContentArticle}
              deleteComment={deleteComment}
              currentUser={currentUser}
              comments={comments}
              addComment={addComment}
              contentArticle={contentArticle}
              setContentArticle={setContentArticle}
              getComments={getComments}
            />
          </div>
        </div>
      </section>
    )
  );
}

export default Article;
