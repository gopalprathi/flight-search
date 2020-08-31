import React from 'react';
import SearchResultItem from '../SearchResultItem/SearchResultItem';

export default function SearchResult({searchResultData}) {
    debugger;
    return (
        <div>
            {(searchResultData.length>0)&&<div className="result-section-header">{`${searchResultData[0].source} > ${searchResultData[0].destination}`}</div>}
            {
                searchResultData.length>0?searchResultData.map((flight, i)=>{
                    return <SearchResultItem key={i} flight={flight} />
                }):<div className="p-15">No result found for provided input</div>
            }
        </div>
    )
}
