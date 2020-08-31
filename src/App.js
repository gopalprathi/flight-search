import React, { useState, useEffect } from "react";
import flights from "./flights.json";
import "./App.css";
import Search from "./components/Search/Search";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  //State data
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [searchResultData, setsearchResultData] = useState([]);
  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(15000);

  // refine result on proce slider change
  useEffect(() => {
    handleSearch();
  }, [minPrice, maxPrice]);

  //Search Handler
  const handleSearch = (e) => {
    if (e) {
      e.preventDefault();
    }
    const filterResult = flights.filter(
      (flight) =>
        (flight.source.toLowerCase() === originCity.toLowerCase() ||
          flight.source_code.toLowerCase() === originCity.toLowerCase()) &&
        (flight.destination.toLowerCase() === destinationCity.toLowerCase() ||
          flight.destination_code.toLowerCase() ===
            destinationCity.toLowerCase()) &&
        (parseInt(flight.fare.split(" ")[1]) >= minPrice &&
        parseInt(flight.fare.split(" ")[1]) <= maxPrice)
    );
    setsearchResultData(filterResult);
  };

  return (
    <div className="App">
      <main className="main-section d-grid grid-template-search-container">
        <header className="grid-header">
          <h3 className="m-0 pt-15 pb-15 pl-5">Flight Search Engine</h3>
        </header>
        <aside className="grid-aside">
          {/* Controlled Search component */}
          <Search
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            originCity={originCity}
            setOriginCity={setOriginCity}
            destinationCity={destinationCity}
            setDestinationCity={setDestinationCity}
            handleSearch={handleSearch}
            minPrice={minPrice}
            setminPrice={setminPrice}
            maxPrice={maxPrice}
            setmaxPrice={setmaxPrice}
          />
        </aside>
        <section className="grid-section pt-15 pb-15">
          <SearchResult
            searchResultData={searchResultData}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
