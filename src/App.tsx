import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
