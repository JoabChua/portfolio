import React from "react";
import "../stylesheets/resume.css";

const Resume = () => {
  return (
    <div>
      <section className="hero-body is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-1"></div>

            <div className="column is-3">
              <div className="tile is-ancestor is-vertical">
                <div className="tile">
                  <div className="divider"></div>
                </div>
                <div className="tile d-flex-v-center">
                  <img
                    src={require("../assets/cwl.jpg")}
                    alt="me"
                    className="image mypic"
                  />
                </div>
                <div className="tile container is-vertical m20">
                  <h1 className="name">Joab Chua</h1>
                  <h1 className="name subname">Software Engineer</h1>
                </div>

                <div className="tile">
                  <div className="divider"></div>
                </div>
                <section className="connect">
                  <div className="tile container is-vertical">
                    <div className="tile is-vertical">
                      <a
                        className="d-flex-v-center pad-v"
                        href="mailto:chuaweeliang91@gmail.com"
                      >
                        <img
                          src={require("../assets/icons/mail.png")}
                          alt="email"
                          width="48"
                        />
                      </a>
                      <p className="has-text-centered contact">
                        Email: chuaweeliang91@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="tile container is-vertical m20">
                    <div className="tile is-vertical">
                      <a
                        className="d-flex-v-center pad-v"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/joabchua/"
                      >
                        <img
                          src={require("../assets/icons/linkedin.png")}
                          alt="email"
                          width="48"
                        />
                      </a>
                      <p className="has-text-centered contact">
                        https://www.linkedin.com/in/joabchua/
                      </p>
                    </div>
                  </div>
                </section>
                <div className="tile">
                  <div className="divider"></div>
                </div>

                <div className="tile is-vertical m20">
                  <p className="s-header">Education</p>
                  <div className="has-text-centered bottom-underline">___</div>
                  <p className="has-text-centered">
                    Engineering Science - Honours with Distinction (2013 - 2017)
                  </p>
                </div>
                <div className="tile m20">
                  <div className="divider"></div>
                </div>

                <div className="tile is-vertical m20">
                  <p className="s-header">Skills</p>
                  <div className="has-text-centered bottom-underline">___</div>
                  <p className="s-para">
                    Coding: HTML, CSS, JavaScript, Angular, Ionic, React, Git,
                    Node.js, Robot Framework.
                  </p>
                  <p className="s-para">
                    Project Management: JIRA, Jenkins, Azure DevOps
                  </p>
                </div>
              </div>
            </div>

            <div className="column is-1"></div>

            <div className="column is-6">
              <div className="tile is-ancestor is-vertical">
                <div className="tile">
                  <div className="divider"></div>
                </div>
                <div className="tile container">
                  <div className="h1 title section-header">My Experience</div>
                </div>
                <div className="tile">
                  <div className="divider"></div>
                </div>

                <section className="tile is-vertical m20">
                  <h2 className="subtitle company">Navig8 Asia Pte Ltd</h2>
                  <p className="period">
                    July 2019 till Present (Front End Engineer)
                  </p>
                  <ul>
                    <li>Develop bunker trading platform with Angular 13.</li>
                    <li>
                      Integrate with Google Map API to track vessel positions,
                      historical and destination routes and to show port
                      positions around the world.
                    </li>
                    <li>
                      Use Chart.JS and Azure SignalR integration to show
                      real-time crude oil prices.
                    </li>
                    <li>
                      Integrate with Angular gridster library to use
                      multi-widgets concept in the application.
                    </li>
                  </ul>
                </section>

                <section className="tile is-vertical m20">
                  <h2 className="subtitle company">DBS Bank Ltd</h2>

                  <section>
                    <p className="period">
                      Feb 2019 - June 2019 (CBGT - Software Engineer)
                    </p>
                    <ul>
                      <li>
                        Develop UI automation test suite using Robot Framework.
                      </li>
                      <li>
                        {" "}
                        Develop backend automation testing suite with Spring
                        Boot (Java) to query DB and run shell scripts in remote
                        server.
                      </li>
                    </ul>
                  </section>

                  <section className="m20">
                    <p className="period">
                      July 2018 - Feb 2019 (ITT - Business Analyst)
                    </p>
                    <ul>
                      <li>
                        Managed a collaborative project using JIRA tool, which
                        includes vendor and internal systems applications, that
                        runs Agile methodology such as defining user stories and
                        acceptance criteria.
                      </li>
                      <li>
                        Developed fully automated code deployment scripts to
                        deploy code changes from SIT to UAT to PROD environment
                        using Jenkins and PowerShell.
                      </li>
                    </ul>
                  </section>

                  <section className="m20">
                    <p className="period">
                      July 2017 - July 2018 (TS - Software Engineer)
                    </p>
                    <ul>
                      <li>
                        Developed an “amazon for services” platform known as
                        Marketplace as a web application for Bank wide usage
                        with Angular 4 as front-end, Node.js and Express as
                        back-end.
                      </li>
                      <li>
                        Developed customized Content Management System (CMS)
                        from scratch for service/ software providers in my
                        company to onboard their services into Marketplace web
                        platform.
                      </li>
                      <li>
                        Refactor outdated user interface that was written in
                        pure HTML, CSS and JQuery into AngularJS framework.
                      </li>
                    </ul>
                  </section>
                </section>

                <div className="tile m20">
                  <div className="divider"></div>
                </div>
                <div className="tile container">
                  <div className="h1 title section-header">
                    Passion and Personal Interest
                  </div>
                </div>
                <div className="tile">
                  <div className="divider"></div>
                </div>
                <section className="m20">
                  <ul>
                    <li>
                      Love to learn and explore new technology during my free
                      time.
                    </li>
                    <li>
                      Create new webpages and hybrid mobile application for fun.
                      Check out{" "}
                      <a
                        href="https://devjo-portfolio.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://devjo-portfolio.web.app
                      </a>
                      , (Hybrid Apps) PasssGuard, SpendGuard, GameGuard,
                      CarParkSG and Transport Guardian – find out more at{" "}
                      <a
                        href="https://devjo-apps.firebaseapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://devjo-apps.firebaseapp.com
                      </a>
                      .
                    </li>
                    <li>
                      Medium content writer in the making -{" "}
                      <a
                        href="https://medium.com/@devjo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://medium.com/@devjo
                      </a>
                      .
                    </li>
                    <li>
                      Love to sweat out by playing basketball, gym workout and
                      running.
                    </li>
                    <li>
                      Serve in church weekly as Sound Engineer (Monitor) for
                      services attended by more than 30,000 people.
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="column is-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
