import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import UsersCard from "./UsersCard"

function CategoriesCard() {

  const {categoryData} = useContext(DataContext)
  console.log(categoryData[1].uniq_users)
  return (
    <div>
      {categoryData.map((category) => {
        return (
          <ul key={category.id}>
            <li><b>Name | </b>{category.name}</li>
            <li><b>Description | </b>{category.description}</li>
            <hr></hr>
            <li>Users With Expenses in this Category</li>
            <UsersCard uniqUsers={category.uniq_users}/>
          </ul>
        )
      })
      
      
      }

    </div>
  )
}

export default CategoriesCard;
