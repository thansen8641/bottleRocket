import React from 'react';
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import { connect } from "react-redux";
import ProductView from './components/ProductView.jsx'

const App = (props) => {
  const { restaurantSelected } = props
  console.log('restaurantSelected', restaurantSelected)

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <ProductList />
        {restaurantSelected ? (
          <ProductView restaurantSelected={restaurantSelected} />
        ) : (null)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('statestate', state.restaurants.restaurantSelected)
  return {
    dataLoaded: state.restaurants.dataLoaded,
    restaurantSelected: state.restaurants.restaurantSelected
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);