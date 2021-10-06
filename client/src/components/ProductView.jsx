import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { setRestaurantData, selectRestaurant } from '../store/actions/restaurantActions.jsx'


const ProductView = (props) => {
  const { restaurantSelected } = props
  console.log('restaurantSelected', restaurantSelected)


  return (
    <div style={{ width: "50%", position: 'fixed', right: "-1", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className='mockmapdiv' style={{ height: "60%", backgroundColor: "yellow" }}></div>
      <div className='productViewRestaurantNameDiv' style={{ backgroundColor: "rgb(52,179,121)", height: "10%", color: "white", padding: "20px" }}>
        <h1>
          {restaurantSelected.name}
        </h1>
        <p>
          {restaurantSelected.category}
        </p>
      </div>

      <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "20px" }}>
        <span>{restaurantSelected.location.address}</span>

        <span style={{ marginBottom: "20px" }}>{restaurantSelected.location.city + ', ' + restaurantSelected.location.state + ' ' + restaurantSelected.location.postalCode}</span>

        {restaurantSelected.contact ? (
          <span style={{ marginBottom: "20px" }}>{"(" + restaurantSelected.contact.phone.slice(0, 3) + ") " + restaurantSelected.contact.phone.slice(3, 6) + '-' + restaurantSelected.contact.phone.slice(6)}</span>
        ) : (
          <span style={{ marginBottom: "20px" }}>
            No Contact Information Available.
          </span>
        )}

        {restaurantSelected.contact ? (
              <span style={{ marginBottom: "20px" }}>{"@" + restaurantSelected.contact.twitter}</span>
        ) : (
          <span style={{ marginBottom: "20px" }}>
            No Twitter Information Available.
          </span>
        )}
      </div>


    </div>
  )
}



const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);