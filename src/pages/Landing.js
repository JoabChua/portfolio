import React from "react";
import Card from "../components/Card";
import SkillCard from "../components/SkillCard";
import AnimatedCard from "../components/AnimatedCard";
import "../stylesheets/landing.css";

const isPrimary = {
  backgroundColor: "#d24a40",
  color: "#fff",
  paddingBottom: "16rem",
};

const skills = {
  marginTop: "-14rem",
  paddingBottom: "1rem",
};

const Landing = () => {
  return (
    <div>
      <section className="hero is-white has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Software Engineer
                </h1>
                <h2 className="subtitle is-size-4-desktop">
                  I love to code and develop web and mobile application.
                </h2>
                <img
                  src={require("../assets/my-pic.png")}
                  alt="avatar"
                  className="avatar"
                  width="250"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <img
              src={require("../assets/dev.svg")}
              alt="development"
              className="is-bottom"
            />
          </div>
        </div>
      </section>

      <section
        className="section is-medium has-text-centered is-long"
        style={isPrimary}
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1
                className="title is-spaced is-size-3-desktop is-size-4-mobile"
                style={{ color: "white" }}
              >
                Hi, I am Joab. Glad to see you here.
              </h1>
              <h2
                className="subtitle is-size-5-desktop"
                style={{ color: "white" }}
              >
                I have been on this coding adventure since I graduated from
                University in 2017. This has been the most fun and rewarding
                passion that I have pursued in my life thus far. It keeps me
                motivated and inspired to be a better developer each day. Hope
                that we will have opportunity to work together soon.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-text-centered" style={skills}>
        <div className="container is-narrow">
          <div className="box">
            <div className="content">
              <div className="columns is-centered">
                <SkillCard
                  icon={require("../assets/code.png")}
                  title="Web Dev"
                  subtitle="Love to learn and explore all front end framework and libraries through simple construct"
                  secthead1="Things I use to develop"
                  sectpara1="HTML, CSS, JavaScript, Angular, Angular Material, React, Semantic-UI"
                />
                <SkillCard
                  icon={require("../assets/app.png")}
                  title="Mobile Dev"
                  subtitle="Love to create mobile apps that help make people's lives more convenient and comfortable."
                  secthead1="Tools I use for development"
                  sectpara1="Ionic, React-Native, Android-Java, IOS-Swift"
                />
                <SkillCard
                  icon={require("../assets/web.png")}
                  title="Launch"
                  subtitle="Love to code and deploy my solutions to live environment so that I can get feedback to make it better"
                  secthead1="Platforms I use to deploy"
                  sectpara1="Firebase, Heroku, AWS, AppStore, PlayStore"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects is-medium is-white has-text-centered">
        <div className="container is-narrow">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
            My Web Projects
          </h1>
          <h2 className="subtitle is-size-5-desktop">
            Here are a few coding projects I've worked on recently. Interested
            to know more? <a href="mailto:chuaweeliang91@gmail.com">Email me</a>
            .
          </h2>
          <div className="project-grid">
            <div className="columns is-multiline is-mobile">
              <AnimatedCard
                image={require("../assets/website/gracelyrics.png")}
                title="Lignt and dark themed christian lyrics website for all."
                link="https://hesedwisdom.tech"
              />
              <AnimatedCard
                image={require("../assets/website/foodorder.png")}
                title="Lightweight food order management for small event."
                link="https://ionic-training-auth.firebaseapp.com/"
              />
              <AnimatedCard
                image={require("../assets/website/appsite.png")}
                title="Website that showcase mobile application in full extent."
                link="https://devjo-apps.firebaseapp.com/"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section is-medium has-text-centered is-long"
        style={isPrimary}
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1
                className="title is-spaced is-size-3-desktop is-size-4-mobile"
                style={{ color: "white" }}
              >
                My Personal Projects
              </h1>
              <h2
                className="subtitle is-size-5-desktop"
                style={{ color: "white" }}
              >
                I am very into making web application that works in both desktop
                and mobile and I always adhere to the mobile-first principle
                when building my applications.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section startups has-text-centered">
        <div className="container is-narrow">
          <div className="startup-grid">
            <div className="columns is-multiline level">
              <Card
                image={require("../assets/app/transportguard.png")}
                text="This app eases your travelling journey by providing you real time bus arrival and route information."
                links={{
                  ios: "https://apps.apple.com/us/app/transport-guardian/id1593829504",
                  android:
                    "https://play.google.com/store/apps/details?id=io.devjo.transport",
                }}
              />
              <Card
                image={require("../assets/app/passsguard.png")}
                text="The last app that you need to store your password safely without connecting to internet!"
                links={{
                  ios: "https://apps.apple.com/us/app/passsguard/id1458491688",
                  android:
                    "https://play.google.com/store/apps/details?id=io.ionic.password",
                }}
              />
              <Card
                image={require("../assets/app/spendguard.png")}
                text="The app that you need to track your daily, monthly and yearly expenses with interactive charts."
                links={{
                  ios: "https://apps.apple.com/us/app/spendguard/id1482284888",
                  android:
                    "https://play.google.com/store/apps/details?id=io.devjo.expense",
                }}
              />
              <Card
                image={require("../assets/app/gameguard.png")}
                text="The Only Christian Charades Game app that you need to bond with your brothers and sisters in Christ."
                links={{
                  ios: "https://apps.apple.com/us/app/gameguard/id1501027282",
                  android:
                    "https://play.google.com/store/apps/details?id=io.devjo.gameguard",
                }}
              />
              <Card
                image={require("../assets/app/carpark.png")}
                text="Find parking lot before heading over and save tonnes of trouble and time at your destination."
                links={{
                  ios: "https://apps.apple.com/us/app/carparksg/id1460263050",
                  android:
                    "https://play.google.com/store/apps/details?id=cordova.devjo.carpark",
                }}
              />
              <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item no-pad"></div>
            </div>
          </div>

          <div className="callout">
            <div className="colums is-centered">
              <div className="column">
                <h1 className="title is-spaced">
                  Interested in collaborating or partnering?
                </h1>
                <h2 className="subtitle is-size-5-desktop">
                  I’m always open to discussing about development work or
                  partnership opportunities.
                </h2>
                <a
                  className="button is-primary is-outlined is-rounded is-medium"
                  href="mailto:chuaweeliang91@gmail.com"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
