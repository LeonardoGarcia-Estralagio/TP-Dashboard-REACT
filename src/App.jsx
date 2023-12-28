import './assets/css/app.css'
import { ContentRowTop } from './pages/home-admin-page'
import { Footer } from './components/Footer'
import { TableMovies } from './pages/movies-list-page'
import { TopBar } from './components/TopBar'
import { SideBar } from './components/sidebar'

function App() {

  return (
    <div id="wrapper">

      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          <TopBar />

          <div className="container-fluid">
            
            <ContentRowTop/>

            <TableMovies />

          </div>

        </div>

        <Footer />

      </div>

    </div>
  )
}

export default App