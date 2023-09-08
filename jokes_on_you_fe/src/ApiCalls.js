import React from "react"

async function getData(endpoint){
  try{
    const response = await fetch(`http://${endpoint}`)
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}

export default getData