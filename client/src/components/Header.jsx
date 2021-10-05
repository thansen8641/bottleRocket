import React from 'react';
import { connect } from "react-redux";


const Header = (props) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "rgb(67,232,149)", color: "#FFFFFF", height: "7%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        Lunch Thyme
      </h1>
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