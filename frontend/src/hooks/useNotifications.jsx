import { toast } from "react-hot-toast";

export const useNotifications = () => {
  /* Profile changes */
  const notifyChange = () =>
    toast.success(`Changes have been made`, {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /* Profile image changes */
  const notifyImage = () =>
    toast.success(`Your profile picture has been uploaded`, {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /* Profile username already used */
  const notifyError = () =>
    toast.error("Username is already used", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "red",
      },
    });

  /* PlantCreation post */
  const notifyPost = () =>
    toast.success("Plant picture added", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });
  /* PlantCreation error */
  const notifyPostError = () =>
    toast.error("Picture not published, you must add a title.", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /* Plant Delete */
  const notifyDeleteSucess = () =>
    toast.success(`Your publication has been delete`, {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /* Plant Error */
  const notifyPlantError = () =>
    toast.error("A problem occurred", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "red",
      },
    });

  /* Article Create */
  const notifyCreate = () =>
    toast.success("Article created", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /* Article Error */
  const notifyArticleError = () =>
    toast.error("Article not created, it must contain 200 characters min.", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /*  Register Create */
  const notifyRegister = () =>
    toast.success("Your account has been created", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  /*  Register Error */
  const notifyErrorRegister = () =>
    toast.error("A problem occurred", {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "red",
      },
    });

  /* Connexion Error */
  const notifyErrorConnexion = () =>
    toast.error(`Informations incorrect`, {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "red",
      },
    });

  return {
    notifyChange,
    notifyError,
    notifyImage,
    notifyPost,
    notifyPostError,
    notifyDeleteSucess,
    notifyPlantError,
    notifyCreate,
    notifyArticleError,
    notifyRegister,
    notifyErrorRegister,
    notifyErrorConnexion,
  };
};
