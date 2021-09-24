import React from "react";

function Filter ({onCategoryChange}) {
    
    
    return (
    
        //somewhere in here will need to add onChange={onCategoryChange} to the select element

    <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        </select>
    </div>

    )
}

export default Filter;