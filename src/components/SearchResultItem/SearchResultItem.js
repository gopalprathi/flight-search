import React from 'react';
import './SearchResultItem.css';

export default function SearchResultItem({flight}) {
    return (
        <section className="search-result-item d-grid p-5 m-10 solid-border">
            <div className="flight-result-info">
                <h3 className="price mb-5">{flight.fare}</h3>
                <p className="m-0">{flight.flight_id}</p>
                <div>{`${flight.source_code} >  ${flight.destination_code}`}</div>
                <div>Depart: {flight.departs_at}</div>
                <div>Arrive: {flight.arrives_at}</div>
            </div>
            <div className="flight-book-btn">
                <button type="button">Book this flight</button>
            </div>
        </section>
    )
}