import './Header.css'
import Logo from '../../assets/images/logo.svg'

export function Header () {
  return (
    <header>
      <picture>
        <img src={Logo} alt="PING Logo" />
      </picture>
    </header>
  )
}