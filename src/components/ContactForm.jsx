import { useState } from "react";
import { sendContact } from "../api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Actualiza el estado cada vez que escribimos en un input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita que la página recargue
    setLoading(true);   // activa un estado de "loading"

    try {
      const data = await sendContact(form); // llama a la función que hace POST al backend
      setSuccess(data.message);             // mostramos mensaje de éxito
      setForm({ name: "", email: "", number: "", message: "" }); // resetea formulario
    } catch (err) {
      console.error(err);
      setSuccess(err.response?.data?.message || "Error sending message"); // manejo de error
    } finally {
      setLoading(false); // desactiva loading
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-base-200 rounded-lg shadow-lg">
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input input-bordered w-full" />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input input-bordered w-full" />
      <input type="tel" name="number" placeholder="Phone number" value={form.number} onChange={handleChange} className="input input-bordered w-full" />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
      <button type="submit" className="btn btn-neutral btn-outline" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
}