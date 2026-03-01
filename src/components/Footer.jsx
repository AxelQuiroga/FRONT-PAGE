import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>

      <h1 className="footer-title">🚀 MyApp</h1>
    <p >Proyecto Fullstack MERN</p>
    <p >Aprendiendo con daysui</p>

  </nav>

  <nav>
    

        <h6 className="footer-title">Navegación</h6>
    <Link to="/" className="link link-hover">Inicio</Link>
    <Link to="/contact" className="link link-hover">Contacto</Link>

  </nav>

  <nav>

      <h6 className="footer-title">Tecnologías</h6>
    <p >React</p>
    <p >Node.js</p>
    <p >MongoDB</p>

    
  </nav>
  
</footer>
  )
}