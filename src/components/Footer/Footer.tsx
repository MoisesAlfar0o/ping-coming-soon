import './Footer.css'

export function Footer () {
  return (
    <footer>
      <section className="social-container">
        <ul>
          <li className="fab fa-facebook-f"></li>
          <li className="fab fa-twitter"></li>
          <li className="fab fa-instagram"></li>
        </ul>
      </section>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  )
}