import React from "react";

function DeleteModaleUser({
  confirmDeleteModale,
  setConfirmDeleteModale,
  handleDeleteUser,
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
              <div className="relative transform overflow-hidden rounded-lg border-[1px] border-main-white bg-main-dark text-main-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-main-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-main-white border border-main-dark  sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-main-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg font-medium leading-6 text-main-white text-center"
                        id="modal-title"
                      >
                        DESACTIVATE THE ACCOUNT
                      </h3>
                      <div className="mt-2 text-center">
                        <p className="text-sm text-main-white">
                          Are you sure you want to delete this account? All of
                          <br />
                          the data will be permanently removed. This action
                          <br />
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-main-dark px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={handleDeleteUser}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    DESACTIVATE
                  </button>
                  <button
                    onClick={() => setConfirmDeleteModale(!confirmDeleteModale)}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-main-white bg-second-dark px-4 py-2 text-base font-medium text-main-white shadow-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    CANCEL
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

export default DeleteModaleUser;
