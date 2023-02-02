import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Components */
import PreviousBtn from "@components/PreviousBtn";
import DeleteModaleArticle from "../../components/DeleteModaleArticle";

/* Styles and Images */
import trash from "../../assets/icons/trash.svg";

/* Hooks, contexts and .env */
import { useCurrentArticleContext } from "../../contexts/articleContext";
import { useCurrentUserContext } from "../../contexts/userContext";

const { VITE_BACKEND_URL } = import.meta.env;

function ArticlesManagement() {
  const navigate = useNavigate();
  const { token } = useCurrentUserContext();
  const { allArticles, setAllArticles } = useCurrentArticleContext();

  /* Make the research of users */
  const [search, setSearch] = useState("");
  const normalizeSearch = search
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f+.]/g, "");

  const filtredArticles = allArticles?.filter((article) =>
    article.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(normalizeSearch)
  );

  /* Delete user */
  const [confirmDeleteModale, setConfirmDeleteModale] = useState(false);
  const [id, setId] = useState();
  const deleteArticles = () => {
    /* Delete the associate article comments */
    fetch(`${VITE_BACKEND_URL}/comments-all`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ articleId: id }),
    });

    /* Delete the article */
    fetch(`${VITE_BACKEND_URL}/articles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setConfirmDeleteModale(!confirmDeleteModale);
    setAllArticles(allArticles.filter((article) => article.id !== id));
  };

  const handleDeleteArticles = async () => {
    deleteArticles();
  };

  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">ARTICLES MANAGEMENT</h2>
      <label className="w-full flex justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="An invitation to the botanic ..."
          className="lg:w-2/6 w-4/6 p-3 border-[1px] border-main-dark rounded-xl opacity-60"
        />
      </label>
      <div className="w-full h-full  flex flex-col  gap-10 p-[5%]">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-main-white bg-main-dark">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Title</div>
                  </th>
                  <th className="hidden md:table-cell p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Creator</div>
                  </th>
                  <th className="hidden md:table-cell  p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Publication</div>
                  </th>
                  <th className="hidden md:table-cell  p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">view</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Management</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-main-white">
                {filtredArticles.length === 0 ? (
                  <tr className="mx-0 text-1xl">
                    Aucun article n'a été trouvé
                  </tr>
                ) : (
                  filtredArticles?.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-100">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {article.title?.toUpperCase()}
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell  p-2 whitespace-nowrap">
                        <div className="text-left">{article.username}</div>
                      </td>

                      <td className="hidden md:table-cell  p-2 whitespace-nowrap">
                        <div className="text-left ">
                          {article.creationDate
                            ?.slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("/")}
                        </div>
                      </td>
                      <td className="hidden md:table-cell p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          <button
                            type="button"
                            onClick={() => navigate(`/articles/${article.id}`)}
                            className=" focus:outline-none text-white bg-second-dark hover:bg-main-dark focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
                          >
                            View
                          </button>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          {" "}
                          <button
                            type="button"
                            onClick={() => {
                              setId(article.id);
                              setConfirmDeleteModale(!false);
                            }}
                            className=" focus:outline-none text-white bg-main-dark hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            <img src={trash} alt="trash for users" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteModaleArticle
        handleDeleteArticles={handleDeleteArticles}
        setConfirmDeleteModale={setConfirmDeleteModale}
        confirmDeleteModale={confirmDeleteModale}
      />
    </section>
  );
}

export default ArticlesManagement;
