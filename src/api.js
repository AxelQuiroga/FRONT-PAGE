import axios from "axios"

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})
//Ejemplo de función para enviar un mensaje de contacto:
export const sendContact = async (contactData) => {
  const res = await api.post("/", contactData); // /contacts viene de tu backend
  return res.data; // devolvemos solo los datos
};