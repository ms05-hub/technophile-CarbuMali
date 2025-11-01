import { useState } from "react";
import axios from "axios"; 
import { NavLink } from "react-router-dom";

function Sign_in() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);

  // Champs spécifiques à la station
  const [stationNom, setStationNom] = useState("");
  const [stationAdresse, setStationAdresse] = useState("");

  const roles = ["CONDUCTEUR", "STATION"];

  const isFormFilled =
    nom.trim() !== "" &&
    prenom.trim() !== "" &&
    email.trim() !== "" &&
    motDePasse.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormFilled) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/utilisateurs/ajouter", {
        nom,
        prenom,
        email,
        motDePasse,
        role: selectedRole || "CONDUCTEUR", // On envoie le rôle choisi
        localisation: selectedRole === "STATION" ? stationAdresse : "Bamako", // Ex station
      });

      console.log("Connexion réussie :", response.data);
      alert("Inscription réussie !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'inscription : " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="flex-1 sm:flex justify-center items-center overflow-y-auto py-4 h-screen">
      <div className="sm: flex flex-col justify-center w-[400px] h-auto bg-blue-200 rounded-2xl p-6">
        <h1 className="sm: text-center text-2xl font-bold mb-4">Inscription</h1>

        <form onSubmit={handleSubmit} method="POST" className="sm: flex flex-col items-center justify-center gap-y-6">

          {/* Nom */}
          <div className="sm: flex flex-col justify-center gap-y-px">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
            />
          </div>

          {/* Prénom */}
          <div className="sm: flex flex-col justify-center gap-y-px">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
            />
          </div>

          {/* Email */}
          <div className="sm: flex flex-col justify-center gap-y-px">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
            />
          </div>

          {/* Mot de passe */}
          <div className="sm: flex flex-col justify-center gap-y-px">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={motDePasse}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
            />
          </div>

          {/* Choix du rôle */}
          <div className="flex flex-col items-center gap-y-5">
            <p>Voulez-vous utiliser l'application en tant que :</p>
            <ul className="sm: flex gap-x-2.5">
              {roles.map((role) => (
                <li key={role}>
                  <div
                    onClick={() => setSelectedRole(role)}
                    className={`flex items-center justify-center w-[150px] h-[25px] rounded-[15px] cursor-pointer 
                      ${selectedRole === role ? 'bg-[#2AB7CA]' : 'bg-[#F4F4F8]'}`}
                  >
                    <p className="sm: text-[15px] transition-colors duration-300">{role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Champs station — affichés seulement si "STATION" est sélectionné */}
          {selectedRole === "STATION" && (
            <div className="flex flex-col items-center gap-y-4 mt-4">
              <div className="sm: flex flex-col justify-center gap-y-px">
                <label htmlFor="station_nom">Nom de la station</label>
                <input
                  type="text"
                  id="station_nom"
                  value={stationNom}
                  onChange={(e) => setStationNom(e.target.value)}
                  className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
                />
              </div>

              <div className="sm: flex flex-col justify-center gap-y-px">
                <label htmlFor="station_adresse">Adresse</label>
                <input
                  type="text"
                  id="station_adresse"
                  value={stationAdresse}
                  onChange={(e) => setStationAdresse(e.target.value)}
                  className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
                />
              </div>
            </div>
          )}

          {/* Bouton */}
          <button
            type="submit"
            className={`sm: w-[200px] h-[45px] rounded-2xl transition text-white font-medium ${
              isFormFilled ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormFilled}
          >
            S'inscrire
          </button>
        </form>

        <p className="sm: text-center mt-4">
          Vous avez déjà un compte ?{" "}
          <NavLink to={"/connection"} className="sm: text-blue-600 cursor-pointer hover:underline">
            Connectez-vous
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Sign_in;
