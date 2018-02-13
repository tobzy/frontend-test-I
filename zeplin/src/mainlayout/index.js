import React from 'react';
import Sidebar from '../otherComponents/Sidebar/index'
import Dashboard from '../otherComponents/Dashboard/index'
import { connect } from 'react-redux';

import {hideResponsiveSidebar, toggleResponsiveSidebar} from '../actions'

import './styles.css'


class MainLayout extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      profilePopShow: false,
      helpPopShow: false,
      responsiveSidebarShow: false
    };
    this.toggleSidebarShow = this.toggleSidebarShow.bind(this);
    this.handleHiding = this.handleHiding.bind(this);
  }

  toggleSidebarShow(e) {
    e.stopPropagation();
    this.props.toggleResponsiveSidebar();
  }

  handleHiding(e) {

    if (this.props.responsiveSidebarShow === true) {
      this.props.hideResponsiveSidebar();
    }
  }

  render(){

    let sidebarButton = (
      <div className="app-nav-sidebarButton" onClick={this.toggleSidebarShow}>
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
    );
    return (
      <div onClick={this.handleHiding}>
        {sidebarButton}
        <Sidebar/>
        <Dashboard/>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    responsiveSidebarShow: state.responsiveSidebarShow,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideResponsiveSidebar: () => dispatch(hideResponsiveSidebar()),
    toggleResponsiveSidebar: () => dispatch(toggleResponsiveSidebar()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);