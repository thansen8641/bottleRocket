import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { setRestaurantData, selectRestaurant } from '../store/actions/restaurantActions.jsx'


const ProductView = (props) => {
  const { restaurantSelected } = props



  return (
    <div style={{ width: "50%", position: 'fixed', right: "-1" }}>
      this is product view
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