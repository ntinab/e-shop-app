import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'
import PageContent from './components/PageContent'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='SideMenuAndPageContent'>
        <SideMenu></SideMenu> 
        <PageContent></PageContent>
      </div>
      <Footer />
    </div>
  );
}


export default App;