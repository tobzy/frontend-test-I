import React from 'react'

import avatar from '../../assets/images/dashboard/avatar.png'
import avatar2x from '../../assets/images/dashboard/avatar@2x.png'
import avatar3x from '../../assets/images/dashboard/avatar@3x.png'
import arrow from '../../assets/images/dashboard/arrow.svg'
import onlineSign from '../../assets/images/dashboard/online-sign.svg'

import attachment from '../../assets/images/dashboard/attachments.svg'
import requests from '../../assets/images/dashboard/requests.svg'
import notifications from '../../assets/images/dashboard/notifications.svg'

import './styles.css'

const Header = () => {
  return <header>
    <section className="header-top">
      <h5>Your Staff</h5>
      <div className="user-account-area">
        <img src={avatar}
             srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
             className="user-icon" />
        <img src={onlineSign} className="online-sign"/>
        <div>
          <p className="name">Jordan J.</p>
          <p className="title">Administrator</p>
        </div>
        <img src={arrow} className="arrow"/>
      </div>
    </section>
    <section className="header-bottom">
      <div className="headings">
        <div>
          <p className="name">
            Sales Team 3 - Heroes
            <img src={arrow} className="arrow"/>
          </p>
          <p className="title">SALES.IO</p>
        </div>
      </div>
      <div className="notifications headings">
        <img src={attachment} className="notification"/>
        <img src={requests} className="notification"/>
        <img src={notifications} className="notification"/>
        <div className="notification">
          <p className="name">10</p>
          <p className="title">MEMBERS</p>
        </div>
        <div className="notification">
          <p className="name">$80K</p>
          <p className="title">TARGET</p>
        </div>
        <div className="notification">
          <p className="name">67K</p>
          <p className="title">POTENTIAL</p>
        </div>
      </div>
    </section>

  </header>
}

export default Header