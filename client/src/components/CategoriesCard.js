import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function CategoriesCard() {

  const {categoryData} = useContext(DataContext)
  console.log("from CAT card",categoryData)
  return (
    <div>
      {categoryData.map((category) => {
        return (
          <ul key={category.id}>
            <li><b>Name | </b>{category.name}</li>
            <li><b>Description | </b>{category.description}</li>
          </ul>
        )
      })
      
      
      }

    </div>
  )
}

export default CategoriesCard;
