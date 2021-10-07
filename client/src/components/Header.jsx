import React from 'react';
import { connect } from "react-redux";
// import mapLogo from './icon_map@2x.png'

const Header = (props) => {
  return (
    <div className='headerMainDiv'>
      <h1 className='headerText'>
        Lunch Thyme
      </h1>
      {/* <div>
        <img src={mapLogo}/>
      </div> */}
    </div>
  )
}



const mapStateToProps = (state) => {
  console.log('state', state)
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);