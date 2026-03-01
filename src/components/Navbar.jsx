import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-md px-6">
      
      {/* Lado izquierdo */}
      <div className="flex-1">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-wide hover:opacity-80 transition"
        >
          🚀 MyApp
        </Link>
      </div>

      {/* Lado derecho */}
      <div className="flex-none gap-2">
        <Link to="/" className="btn btn-ghost">
          Inicio
        </Link>

        <Link to="/contact" className="btn btn-ghost">
          Contacto
        </Link>
      </div>
      

    </div>
  )
}