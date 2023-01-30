import React, { useEffect, useState } from "react";
import PreviousBtn from "@components/PreviousBtn";
import { useCurrentUserContext } from "../../contexts/userContext";
import trash from "../../assets/icons/trash.svg";
import DeleteModaleUser from "../../components/DeleteModaleUser";
import profilePictureEmpty from "../../assets/others/profilePictureEmpty.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function UsersManagement() {
  const { token } = useCurrentUserContext();

  /* Get all the users */
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch(`${VITE_BACKEND_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(`Error:`, error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  /* Removing all admins */
  const noAdmin = users?.filter((user) => user.admin !== 1);

  /* Make the research of users */
  const [search, setSearch] = useState("");
  const normalizeSearch = search
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f+.]/g, "");

  const filtredUser = noAdmin?.filter(
    (user) =>
      user.firstname
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(normalizeSearch) ||
      user.username
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(normalizeSearch)
  );

  /* Delete user */
  const [confirmDeleteModale, setConfirmDeleteModale] = useState(false);
  const [id, setId] = useState();
  const deleteUser = () => {
    fetch(`${VITE_BACKEND_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setConfirmDeleteModale(!confirmDeleteModale);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleDeleteUser = async () => {
    deleteUser();
  };

  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">MEMBERS</h2>
      <label className="w-full flex justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Jane Austen ..."
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
                    <div className="font-semibold text-left">Username</div>
                  </th>
                  <th className="hidden md:table-cell p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Firstname</div>
                  </th>
                  <th className="hidden md:table-cell  p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="hidden md:table-cell  p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Registration</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Management</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-main-white">
                {filtredUser.length === 0 ? (
                  <tr className="mx-0 text-1xl">
                    Aucun utilisateur n'a été trouvé
                  </tr>
                ) : (
                  filtredUser?.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-100">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full grayscale"
                              src={profilePictureEmpty}
                              width="40"
                              height="40"
                              alt=""
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            {user.username?.toUpperCase()}
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell  p-2 whitespace-nowrap">
                        <div className="text-left">{user.firstname}</div>
                      </td>
                      <td className="hidden md:table-cell  p-2 whitespace-nowrap">
                        <div className="text-left ">{user.email}</div>
                      </td>
                      <td className="hidden md:table-cell  p-2 whitespace-nowrap">
                        <div className="text-left ">
                          {user.registrationDate
                            ?.slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("/")}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          {" "}
                          <button
                            type="button"
                            onClick={() => {
                              setId(user.id);
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
      <DeleteModaleUser
        getUsers={getUsers}
        handleDeleteUser={handleDeleteUser}
        setConfirmDeleteModale={setConfirmDeleteModale}
        confirmDeleteModale={confirmDeleteModale}
      />
    </section>
  );
}

export default UsersManagement;
