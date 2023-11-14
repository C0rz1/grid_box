import React from 'react'
import Vegas from "../images/vegas.jpg"
import Newyork from "../images/newyork.jpg"
import Singapor from "../images/singapore.jpg"

export default function Gridbox() {
  return (
    <div className="cards">

      <div className="card card1">
        <div className="container">
            <img src={Vegas} alt="las vegas"/>
        </div>
        <div className="details">
            <h3>Las Vegas</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
      </div>
    </div>

    <div className="card card2">
        <div className="container">
            <img src={Newyork} alt="New York"/>
        </div>
        <div className="details">
            <h3>New York</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
        </div>
    </div>

    <div className="card card3">
        <div className="container">
            <img src={Singapor} alt="Singapore"/>
        </div>
        <div className="details">
            <h3>Singapore</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
        </div>
    </div>

</div>
  )
}
