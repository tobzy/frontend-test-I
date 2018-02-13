/**
 * Created by Tobechukwu.Onuegbu on 2/12/2018.
 */
import React from 'react';
import Header from '../Header'
import './styles.css'
import './mobile.css'

import graph from '../../assets/images/dashboard/graph.svg'
import avatar from '../../assets/images/dashboard/avatar.png'
import avatar2x from '../../assets/images/dashboard/avatar@2x.png'
import avatar3x from '../../assets/images/dashboard/avatar@3x.png'
import viewsIcon from '../../assets/images/dashboard/views-icon.svg'
import graph1 from '../../assets/images/dashboard/graph_1.svg'
import graph2 from '../../assets/images/dashboard/graph (2).svg'
import graph3 from '../../assets/images/dashboard/graph (3).svg'
import graph4 from '../../assets/images/dashboard/graph (4).svg'
import graph5 from '../../assets/images/dashboard/graph (5).svg'
import graph6 from '../../assets/images/dashboard/graph (6).svg'
import green from '../../assets/images/dashboard/green.svg'
import red from '../../assets/images/dashboard/red.svg'
import orange from '../../assets/images/dashboard/orange.svg'
import grey from '../../assets/images/dashboard/grey.svg'
import message from '../../assets/images/dashboard/message-icon.svg'
import retweet from '../../assets/images/dashboard/retweet-icon.svg'
import arrow from '../../assets/images/dashboard/arrow.svg'
import chat from '../../assets/images/dashboard/chat.svg'
import download from '../../assets/images/dashboard/export-icon.svg'
import info from '../../assets/images/dashboard/info-icon.svg'




const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Header />
      <section className="body">
        <section className="left-block">
          <div className="sales-summary">
            <div className="summary">
              <p className="name"><span>$47,450</span><span className="green">62%</span></p>
              <p className="title">MONTHLY DEPARTMENT SALES</p>
            </div>
            <img src={graph}/>
          </div>

          <div className="reports">
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Elva Martinez</p>
                    <p className="title">Division Leader</p>
                  </div>
                </div>
                <p className="percentage green">81%</p>
              </div>
              <img src={graph1} className="person-middle"/>
              <div className="person-bottom">
                <p>45 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Billy Bowers</p>
                    <p className="title">Sales Manager</p>
                  </div>
                </div>
                <p className="percentage green">76%</p>
              </div>
              <img src={graph1} className="person-middle"/>
              <div className="person-bottom">
                <p>84 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Myra Reed</p>
                    <p className="title">Sales Junior</p>
                  </div>
                </div>
                <p className="percentage orange">41%</p>
              </div>
              <img src={graph2} className="person-middle"/>
              <div className="person-bottom">
                <p>25 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Benjamin Butler</p>
                    <p className="title">Sales Manager</p>
                  </div>
                </div>
                <p className="percentage green">49%</p>
              </div>
              <img src={graph3} className="person-middle"/>
              <div className="person-bottom">
                <p>19 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Julia Powell</p>
                    <p className="title">Sales Junior</p>
                  </div>
                </div>
                <p className="percentage orange">52%</p>
              </div>
              <img src={graph2} className="person-middle"/>
              <div className="person-bottom">
                <p>12 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Phoebe Bush</p>
                    <p className="title">Sales Manager</p>
                  </div>
                </div>
                <p className="percentage green">89%</p>
              </div>
              <img src={graph4} className="person-middle"/>
              <div className="person-bottom">
                <p>105 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Mike Tucker</p>
                    <p className="title">Sales Manager</p>
                  </div>
                </div>
                <p className="percentage green">79%</p>
              </div>
              <img src={graph1} className="person-middle"/>
              <div className="person-bottom">
                <p>65 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Jesus Hammond</p>
                    <p className="title">Sales Junior</p>
                  </div>
                </div>
                <p className="percentage green">71%</p>
              </div>
              <img src={graph5} className="person-middle"/>
              <div className="person-bottom">
                <p>72 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Chris Becker</p>
                    <p className="title">Sales Manager</p>
                  </div>
                </div>
                <p className="percentage green">74%</p>
              </div>
              <img src={graph1} className="person-middle"/>
              <div className="person-bottom">
                <p>95 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
            <section className="person">
              <div className="person-top">
                <div>
                  <img src={avatar}
                       srcSet={`${avatar2x} 2x, ${avatar3x} 3x`}
                       className="user-icon"/>
                  <div className="name-group">
                    <p className="name">Gene Henderson</p>
                    <p className="title">Sales Junior</p>
                  </div>
                </div>
                <p className="percentage red">21%</p>
              </div>
              <img src={graph6} className="person-middle"/>
              <div className="person-bottom">
                <p>13 Sales</p>
                <p><img src={viewsIcon}/><span>View Report</span></p>
              </div>
            </section>
          </div>
          <div className="tags">
            <div>
              <img src={green}/>
              <span>Amazing Performance</span>
            </div>
            <div>
              <img src={orange}/>
              <span>Good Performance</span>
            </div>
            <div>
              <img src={red}/>
              <span>Poor Performance</span>
            </div>
            <div>
              <img src={grey}/>
              <span>Monthly Potential</span>
            </div>
          </div>
        </section>
        <section className="right-block">
          <div className="top-section">
            <h5>Latest Updates</h5>
            <span>Show All</span>
          </div>
          <div className="top-section-content">
            <div className="box">
              <div>
                <section>
                  <img src={message}/>
                  <h5>2016 Q1 Goals</h5>
                </section>
                <img src={retweet}/>
              </div>
              <p>I can’t even begin to express the delight I’m
                experiencing by making the design for…</p>
            </div>
            <div className="box">
              <div>
                <section>
                  <img src={message}/>
                  <h5>January 2016 Report</h5>
                </section>
                <img src={retweet}/>
              </div>
              <p>The moment you think of buying a Web Hosting
                Plan, you know one thing - So many…</p>
            </div>
          </div>
          <div className="top-section">
            <h5>Sale Reports</h5>
            <span>Show All</span>
          </div>
          <div className="top-section-content">
            <div className="select">
              <div><span className="arrow-left" /></div>
              <div style={{display:'flex', justifyContent:'space-between', flex:'1', padding:'10px'}}>
                <p>March 2015</p>
                <img src={arrow}/>
              </div>
              <div><span className="arrow-right" /></div>

            </div>

            <div className="summary">
              <p className="name"><span>$34,450</span><span className="green">69%</span></p>
              <p className="title">547 SALES</p>
            </div>

            <div className="progress">
              <span className="Fill" />
              <span className="Empty" />
            </div>

            <div className="release-stats">
              <div>
                <span className="key">Release Date:</span>
                <span className="value">April 14th, 2015</span>
              </div>
              <div>
                <span className="key">Reported By:</span>
                <span className="value">Ben Black</span>
              </div>
              <div>
                <span className="key">PDF Size:</span>
                <span className="value">13 MB</span>
              </div>
            </div>

            <div className="button-area">
              <button className="chat">
                <img src={chat}/>
                <span>Send via chat</span>
              </button>
              <button className="download">
                <img src={download}/>
                <span>Download Report</span>
              </button>
            </div>


            <div className="disclaimer">
              <img  src={info} />
              <p>All Reports are confidental and should be used for any
                propagation materials without any notice to the board
                members. Thanks for understanding</p>
            </div>
          </div>
        </section>

      </section>
    </div>
  )
}

export default Dashboard
