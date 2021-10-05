import React, { useEffect } from 'react';
import axios from 'axios'
import Header from './components/Header.jsx'
import { connect } from "react-redux";
import { setRestaurantData } from './store/actions/restaurantActions.jsx'


const App = (props) => {
  const { setRestaurantData, dataLoaded, restaurants } = props

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

  return (
    <div>
      <Header />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    dataLoaded: state.restaurants.dataLoaded,
    restaurants: state.restaurants.restaurants
  };
};

const mapDispatchToProps = (dispatch) => ({
  setRestaurantData: (data) => dispatch(setRestaurantData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);