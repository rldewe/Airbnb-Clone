import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/*Navbar */}
      <Navbar />

      {/*Filters */}
      <Filters />

      {/**Rentals */}
      <Rentals/>

      {/**Footer */}
      <Footer/>
        
    </div>
  );
}

export default App;
