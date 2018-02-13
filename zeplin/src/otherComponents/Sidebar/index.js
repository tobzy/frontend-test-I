import React from 'react';
import { connect } from 'react-redux';

import send from '../../assets/images/sidebar/account-1.svg'
import robot from '../../assets/images/sidebar/account-2.svg'
import game from '../../assets/images/sidebar/account-3.svg'
import plus from '../../assets/images/sidebar/add-account.svg'
import settings from '../../assets/images/sidebar/settings-icon.svg'
import grid from '../../assets/images/sidebar/grid-icon.svg'
import warning from '../../assets/images/sidebar/warning-red.svg'
import book from '../../assets/images/sidebar/book-icon.svg'
import stocks from '../../assets/images/sidebar/stocks-icon.svg'
import graphs from '../../assets/images/sidebar/graph-icons.svg'
import tutorials from '../../assets/images/sidebar/tutorials-icon.svg'

import './styles.css'
const Sidebar = (props) => {

  let sidebarClass = 'sidebar ';

  sidebarClass += props.responsiveSidebarShow ? 'responsive show' : 'responsive';
  return (
    <section className={sidebarClass} id="app-sidebar">
      <section className="left-sidebar">
        <span className="highlighted"><img src={send}/></span>
        <span><img src={robot}/></span>
        <span><img src={game}/></span>
        <span><img src={plus}/></span>
        <div className="bottom-menu">
          <img src={grid} />
          <img src={settings} />
        </div>
      </section>
      <section className="right-sidebar">
        <div>
          <section className="menu-section">
            <div className="menu-bar">
              <p className="menu-heading">Menu</p>
              <img src={settings}></img>
            </div>
            <div className="menu-content">
              <ul>
                <li>Overview</li>
                <li>
                  <span>Sales</span>
                  <span className="notify-me">54</span>
                </li>
                <li className="active">Your Staff</li>
                <li>Analytics & Targeting</li>
                <li>What's New</li>
              </ul>
            </div>
          </section>
          <section className="menu-section">
            <div className="menu-bar">
              <p className="menu-heading">Your Products</p>
              <img src={settings} />
            </div>
            <div className="menu-content">
              <ul>
                <li><img src={book}/><span>Books</span></li>
                <li><img src={tutorials}/><span>Tutorials</span></li>
                <li><img src={stocks}/><span>Stocks</span></li>
                <li><img src={graphs}/><span>Infographics</span></li>
              </ul>
            </div>
          </section>
          <section className="menu-section">
            <div className="menu-bar">
              <p className="menu-heading">Dashboard</p>
              <img src={settings} />
            </div>
            <div className="menu-content">
              <ul>
                <li>
                  <span>Messages</span>
                  <span className="notify-me">21</span>
                </li>
                <li>Connections</li>
                <li>Your Staff</li>
                <li><span>Integrations</span>
                  <span className="warning">!</span>
                </li>
                <li>Account Settings</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="bottom-menu">
          <div className="goals">
            <p>Monthly Goals</p>
            <p>
              <span>$580</span>
              <span>/$3200</span>
            </p>
          </div>
          <div>
            <span className="Fill"></span>
            <span className="Empty"></span>
          </div>
        </div>

      </section>
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    responsiveSidebarShow: state.responsiveSidebarShow,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect (mapStateToProps, mapDispatchToProps)(Sidebar);