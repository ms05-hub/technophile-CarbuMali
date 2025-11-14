import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Sign_up() {
  const [email, setEmail] = useState("");
  const [motDePasse, setPassword] = useState("");

  const isFormFilled =
    email &&
    motDePasse &&
    email.trim() !== "" &&
    motDePasse.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormFilled) {
      console.log("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          motDePasse,
        }
      );

      // ✔️ Récupération du token renvoyé par le backend
      const token = response.data.token;

      if (token) {
        console.log("✅ Token reçu :", token);
        alert("Connexion réussie !");
      } else {
        console.warn("⚠️ Aucun token reçu !");
      }

    } catch (err) {
      console.error(err);
      alert("Erreur lors de la connexion : " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col justify-center w-[400px] h-[400px] bg-blue-200 rounded-2xl">
        <h1 className="text-center text-2xl font-bold mb-4">Connexion</h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-y-6">

          <div className="flex flex-col justify-center gap-y-px">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
            />
          </div>

          <div className="flex flex-col justify-center gap-y-px">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={motDePasse}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
            />
          </div>

          <button
            type="submit"
            className={`w-[200px] h-[45px] rounded-2xl transition text-white font-medium ${
              isFormFilled
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormFilled}
          >
            Se connecter
          </button>
        </form>

        <p className="text-center mt-4">
          Vous n'avez pas de compte ?{" "}
          <NavLink to={"/inscription"} className="text-blue-600 cursor-pointer hover:underline">
            Inscrivez-vous
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Sign_up;
