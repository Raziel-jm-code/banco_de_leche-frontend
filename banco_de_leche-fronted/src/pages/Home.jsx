import SideBar from '../components/SideBar.jsx'
import AddDonante from '../components/Home/AddDonante.jsx'
import '../styles/home.scss'
import HomeBanner from '../components/Home/HomeBanner.jsx'

export const Home = () => {
  return (
    <>
      <div className="app-container">
      <SideBar />
      <div className="content-container">
        <AddDonante />
        <HomeBanner />
      </div>
    </div>
    </>
  )
}