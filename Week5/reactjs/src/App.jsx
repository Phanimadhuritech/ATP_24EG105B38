import './App.css'
import UsersList from './components/UsersList'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div className='m-10 min-h-screen'>
        <UsersList /></div>
      <Footer />
    </div>
  )
}


export default App