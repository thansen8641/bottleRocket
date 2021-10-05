import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { setRestaurantData, selectRestaurant } from '../store/actions/restaurantActions.jsx'


const ProductList = (props) => {
  const { dataLoaded, restaurants, setRestaurantData, selectRestaurant } = props
  const [data, setData] = useState([])

  useEffect(() => {
    if (!dataLoaded) {
      axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
        .then((response) => {
          setRestaurantData(response.data)
        })
        .catch((err) => {
          console.log('error getting data', err)
        })
    }

  }, [])


  useEffect(() => {
    if (restaurants) {
      setData(restaurants.restaurants)
    }
  }, [restaurants])




  return (
    <div style={{ width: "50%" }}>
      {data && data.map((restaurant, index) => (
        <div onClick={() => selectRestaurant(restaurant)} key={index} style={{ width: "100%", }}>
          <div className='productListHeaderDetails' style={{display: "flex", flexDirection: "column", position: 'absolute', color: "white" }}>
            <h1>
              {restaurant.name}
            </h1>
            <p>
              {restaurant.name}
            </p>
          </div>
          <img style={{ maxWidth: "100%" }} src={restaurant.backgroundImageURL} />
        </div>
      ))}
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    dataLoaded: state.restaurants.dataLoaded,
    restaurants: state.restaurants.restaurants
  };
};

const mapDispatchToProps = (dispatch) => ({
  setRestaurantData: (data) => dispatch(setRestaurantData(data)),
  selectRestaurant: (restaurantSelected) => dispatch(selectRestaurant(restaurantSelected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);