import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useFormData } from "/src/pages/connexion/context/FormContext";

function Sign_in() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, setFormData } = useFormData();

  const roles = ["CONDUCTEUR", "STATION"];

  // Récupérer la position choisie sur la page map
  useEffect(() => {
    if (location.state?.position) {
      setFormData({ ...formData, stationPosition: location.state.position });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  const isFormFilled =
    formData.nom?.trim() &&
    formData.prenom?.trim() &&
    formData.email?.trim() &&
    formData.motDePasse?.trim();

  const handleOpenMap = () => {
    navigate("/inscription/map");
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔍 Données envoyées :", formData);

    if (!isFormFilled) return alert("Veuillez remplir tous les champs !");

    try {
      // On construit d’abord la base de l’objet utilisateur
      const userData = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        motDePasse: formData.motDePasse,
        role: formData.role || "CONDUCTEUR",
      };

      // Si le rôle est STATION, on ajoute les infos station
      if (formData.role === "STATION") {
        if (!formData.stationPosition)
          return alert("Veuillez choisir la position de la station 📍");

        userData.nomStation = formData.nomStation;
        userData.adresse = formData.adresse;
        userData.latitude = formData.stationPosition.lat;
        userData.longitude = formData.stationPosition.lng;
      }

      const response = await axios.post(
        "http://localhost:8080/api/utilisateurs/ajouter",
        userData
      );

      alert("✅ Inscription réussie !");
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'inscription : " + (err.response?.data || err.message));
    }
  };





  return (
    <div className="flex-1 sm:flex justify-center items-center overflow-y-auto py-4 h-screen">
      <div className="sm:flex flex-col justify-center w-[400px] h-auto bg-blue-200 rounded-2xl p-6">
        <h1 className="text-center text-2xl font-bold mb-4">Inscription</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-y-6"
          method="post"
        >
          <input
            placeholder="Nom"
            value={formData.nom || ""}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
          />
          <input
            placeholder="Prénom"
            value={formData.prenom || ""}
            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
            className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
          />
          <input
            placeholder="Email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
          />
          <input
            placeholder="Mot de passe"
            type="password"
            value={formData.motDePasse || ""}
            onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
            className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
          />

          {/* Choix du rôle */}
          <div className="flex gap-x-3 mt-2">
            {roles.map((role) => (
              <button
                type="button"
                key={role}
                onClick={() => setFormData({ ...formData, role })}
                className={`px-4 py-1 rounded-2xl w-35 h-8 ${
                  formData.role === role ? "bg-[#2AB7CA] text-white" : "bg-[#F4F4F8]"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Champs station */}
          {formData.role === "STATION" && (
            <div className="flex items-center justify-center flex-col gap-y-5 mt-2">
              <input
                placeholder="Nom de la station"
                value={formData.nomStation || ""}
                onChange={(e) => setFormData({ ...formData, nomStation: e.target.value })}
                className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
              />
              <input
                placeholder="Adresse"
                value={formData.adresse || ""}
                onChange={(e) =>
                  setFormData({ ...formData, adresse: e.target.value })
                }
                className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"
              />
              <button
                type="button"
                onClick={handleOpenMap}
                className=" w-[255px] h-[45px] text-white rounded px-4 py-2 mt-1 rounded-2xl bg-[#2AB7CA]"
              >
                position de la station📍
              </button>

              {formData.stationPosition && (
                <p className="text-green-600 mt-1">
                  ✅ Position choisie : {formData.stationPosition.lat.toFixed(5)},{" "}
                  {formData.stationPosition.lng.toFixed(5)}
                </p>
              )}
            </div>
          )}

          <button type="submit" className=" text-white px-6 py-3 rounded-2xl mt-4 bg-[#2AB7CA]">
            S'inscrire
          </button>
        </form>

        <p className="text-center mt-4">
          Vous avez déjà un compte ?{" "}
          <NavLink to={"/connection"} className="text-blue-600 hover:underline">
            Connectez-vous
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Sign_in;
