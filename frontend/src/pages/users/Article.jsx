import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import flowers from "@assets/others/flowers.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState([]);

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

  return (
    article && (
      <section className="h-[80vh]">
        <PreviousBtn />
        <h2 className="text-center my-6 text-xl">READING</h2>
        <div className="w-full h-full justify-center lg:flex pt-[15%] lg:p-[5%]">
          <article className="relative lg:w-1/2  lg:border-r-2 lg:h-96  lg:border-second-dark ">
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
          </article>
          {/* Content of the article */}
          <aside className="lg:w-1/2 px-6 my-6 h-96 items-center justify-center">
            <ReactQuill
              theme="bubble"
              value={article.content}
              className=" h-100  h-fit"
            />
          </aside>
        </div>
      </section>
    )
  );
}

export default Article;
