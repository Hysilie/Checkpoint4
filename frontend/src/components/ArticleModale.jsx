import React from "react";

/* Quill */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ArticleModale({
  confirmDeleteModale,
  setConfirmDeleteModale,
  articleContentQuill,
  articleTitle,
}) {
  return (
    <div>
      {confirmDeleteModale && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-main-dark bg-opacity-75 transition-opacity" />

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg border-[1px] border-main-white bg-main-dark text-main-dark text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-main-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-main-white border border-main-dark  sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="black"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3
                        className="text-xl font-serif  font-medium leading-6 text-main-dark border-b-2 w-full"
                        id="modal-title"
                      >
                        Preview
                      </h3>

                      <div className="mt-2 ">
                        <h2 className="pb-3  px-4 font-semibold">
                          {articleTitle?.toUpperCase()}
                        </h2>

                        <ReactQuill
                          value={articleContentQuill}
                          readOnly
                          theme="bubble"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-main-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={() => setConfirmDeleteModale(!confirmDeleteModale)}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-main-dark bg-main-dark px-4 py-2 text-base font-medium text-main-white shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleModale;
