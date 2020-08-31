import React from "react";
import "./Search.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DoubleRangeSlider from "../DoubleRangeSlider/DoubleRangeSlider";

export default function Search({
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
  originCity,
  setOriginCity,
  destinationCity,
  setDestinationCity,
  handleSearch,
  minPrice,
  setminPrice,
  maxPrice,
  setmaxPrice,
}) {
  return (
    <>
      <div className="form-controls-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter Origin City"
            name="origin-city"
            value={originCity}
            onChange={(e) => setOriginCity(e.target.value)}
            required="required"
          />
          <input
            type="text"
            placeholder="Enter Destination City"
            name="destination-city"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            required="required"
          />
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            placeholderText="Departute Date"
            name="departure-date"
          />
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            placeholderText="Return Date"
            name="return-date"
          />
          <div>
            <button type="submit" className="search-btn">Search</button>
          </div>
        </form>
      </div>
      <div className="form-controls-container">
        <DoubleRangeSlider
          min={0}
          max={15000}
          minValue={minPrice}
          maxValue={maxPrice}
          setminPrice={setminPrice}
          setmaxPrice={setmaxPrice}
        />
      </div>
    </>
  );
}
