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

  /* Make the delete of the user step by step to delete all the content
  Use async and promise to check step by step the statement */
  const [confirmDeleteModale, setConfirmDeleteModale] = useState(false);
  const [id, setId] = useState();
  const deleteUser = async () => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);
    myHeader.append("Content-Type", "application/json");

    try {
      /* Get all comments of a user  */
      const commentsResponse = await fetch(
        `${VITE_BACKEND_URL}/comments-user/${parseInt(id, 10)}`,
        {
          method: "GET",
          headers: myHeader,
        }
      );
      const commentsData = await commentsResponse.json();

      /* if [] length > 0 delete */
      if (commentsData.length > 0) {
        /* Delete all comments of a user */
        await fetch(
          `${VITE_BACKEND_URL}/comments-all-user/${parseInt(id, 10)}`,
          {
            method: "DELETE",
            headers: myHeader,
          }
        );
      }

      /* Get all favorites of a user  */
      const favoritesResponse = await fetch(
        `${VITE_BACKEND_URL}/favorites/${parseInt(id, 10)}`,
        {
          method: "GET",
          headers: myHeader,
        }
      );
      const favoritesData = await favoritesResponse.json();

      /* if myFavorites length > 0 delete */
      if (favoritesData.length > 0) {
        /* Delete all favorites of a user */
        await fetch(
          `${VITE_BACKEND_URL}/favorites-all-user/${parseInt(id, 10)}`,
          {
            method: "DELETE",
            headers: myHeader,
          }
        );
      }

      /* Get all favorite of the plant of the creator */
      const favoritesPlantResponse = await fetch(
        `${VITE_BACKEND_URL}/favorites-all-plant-by-creator/${parseInt(
          id,
          10
        )}`,
        {
          method: "GET",
          headers: myHeader,
        }
      );
      const favoritesPlantData = await favoritesPlantResponse.text();

      /* if myFavorites length > 0 delete */
      if (favoritesPlantData.length > 0) {
        /* Delete all favorites of the plant of the creator */
        await fetch(
          `${VITE_BACKEND_URL}/favorites-all-plant-by-creator/${parseInt(
            id,
            10
          )}`,
          {
            method: "DELETE",
            headers: myHeader,
          }
        );
      }

      /* Get all plants of a user */
      const plantsResponse = await fetch(
        `${VITE_BACKEND_URL}/plants/user/${parseInt(id, 10)}`,
        {
          method: "GET",
          headers: myHeader,
        }
      );
      const plantsData = await plantsResponse.json();
      if (plantsData.length > 0) {
        /* Delete all plants published by a user */
        await fetch(`${VITE_BACKEND_URL}/plants-all-user/${parseInt(id, 10)}`, {
          method: "DELETE",
          headers: myHeader,
        });
      }

      /* Get the user */
      const userResponse = await fetch(`${VITE_BACKEND_URL}/users/${id}`, {
        method: "GET",
        headers: myHeader,
      });
      const userData = await userResponse.json();
      /* if userdata > 0  delete */
      {
        userData &&
          (await fetch(`${VITE_BACKEND_URL}/users/${parseInt(id, 10)}`, {
            method: "DELETE",
            headers: myHeader,
          }));
      }

      setConfirmDeleteModale(false);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
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
