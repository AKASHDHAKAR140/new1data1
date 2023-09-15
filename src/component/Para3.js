import React from 'react'
import {useParams}from "react-router-dom"

function Para3() {
  const params = useParams();
  return (
    <div> <h4> employee Details</h4><hr/>
    <ul>   { params.length>0&&data.map((para)=>(
     <li> {para.mobile} {para.color}</li>
    ) )}</ul></div>
  )
}

export default Para3