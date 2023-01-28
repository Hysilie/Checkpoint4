import React, { useState } from "react";
import PreviousBtn from "@components/PreviousBtn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useCurrentUserContext } from "../../contexts/userContext";
import quillConfig from "../../config/quillConfig";

function ArticleCreation() {
  const { currentUser } = useCurrentUserContext();
  /* Get Quill module content */
  const [articleContentQuill, setArticleContentQuill] = useState("");

  /* Get the article content for the post */
  const [articleContent, setArticleContent] = useState({
    user_id: currentUser.id,
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setArticleContent({
      ...articleContent,
      [name]: value,
    });
  };

  const handleSubmitArticle = (e) => {
    e.preventDefault();
    setArticleContent({
      ...articleContent,
      content: { articleContentQuill },
    });
  };

  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">CREATE AN ARTICLE</h2>
      <form
        onSubmit={handleSubmitArticle}
        className="w-full h-full  lg:flex p-[5%]"
      >
        <article className="relative lg:w-1/2  lg:border-r-2 lg:h-4/5 border-second-dark">
          {/* Title of the article */}
          <label htmlFor="title" className="font-serif text-2xl w-20 px-3">
            Title
          </label>
          <input
            onChange={handleInputChange}
            name="title"
            maxLength={80}
            id="title"
            placeholder="An invitation to the Botanic Garden ... (max. 80 chars.)"
            type="text"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-second-dark"
          />
          <p className="px-3">
            by {currentUser.username}, the{" "}
            {Date().slice(0, 10).split("-").reverse().join("/")}
          </p>
        </article>
        {/* Content of the article */}
        <aside className="lg:w-1/2 px-6 my-6 h-96">
          <ReactQuill
            theme="snow"
            value={articleContentQuill}
            onChange={setArticleContentQuill}
            modules={quillConfig.modules}
            className=" h-60 lg:h-96"
          />
        </aside>
        {/* Buttons */}
        <div className="lg:absolute lg:bottom-60 flex w-full lg:w-1/2 justify-center  lg:justify-start gap-10 px-3">
          <button
            type="button"
            className=" text-sm h-12 shadow-md text-center border-2 rounded-lg border-main-dark opacity-70 w-20 hover:scale-110 duration-300"
          >
            PREVIOUS
          </button>
          <button
            type="submit"
            className=" text-sm font-semibold h-12 shadow-md text-center border-2 rounded-lg border-main-dark opacity-70 w-20 hover:scale-110 duration-300"
          >
            PUBLISH
          </button>
        </div>
      </form>
    </section>
  );
}

export default ArticleCreation;
