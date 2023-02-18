import React from "react";
import "./About.css";
import NavBar from "./NavBar";
const About = () => {
  return (
    <div className="flex AboutMain">
      <NavBar />
      <div className="flex section">
        <div className="heading">
          <h1>What is this ??</h1>
        </div>
        <div className="para">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus mollitia sequi voluptatum repudiandae exercitationem fugit
            nulla architecto id voluptas a minima doloribus, similique labore
            tenetur eveniet, modi et porro! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium vel eum iste sint debitis
            quia ullam a esse similique rem animi non facilis, cupiditate natus?
            Pariatur quos delectus est corrupti?
          </p>
        </div>
      </div>{" "}
      <div className="flex section">
        <div className="heading">
          <h1>How to Use ??</h1>
        </div>
        <div className="para">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus mollitia sequi voluptatum repudiandae exercitationem fugit
            nulla architecto id voluptas a minima doloribus, similique labore
            tenetur eveniet, modi et porro! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium vel eum iste sint debitis
            quia ullam a esse similique rem animi non facilis, cupiditate natus?
            Pariatur quos delectus est corrupti?
          </p>
        </div>
      </div>
      <div className="flex section">
        <div className="heading">
          <h1>How this Works ??</h1>
        </div>
        <div className="para">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus mollitia sequi voluptatum repudiandae exercitationem fugit
            nulla architecto id voluptas a minima doloribus, similique labore
            tenetur eveniet, modi et porro! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium vel eum iste sint debitis
            quia ullam a esse similique rem animi non facilis, cupiditate natus?
            Pariatur quos delectus est corrupti?
            <ul>
              <li>
                sdnfali Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quae soluta explicabo tempora inventore cum mollitia enim
                eum magni cumque eos rerum, ducimus odit. Rerum quis ducimus
                veritatis obcaecati ipsa maiores!ewbfal
              </li>
              <li>sdnfaliewbfal</li>
              <li>sdnfaliewbfal</li>
              <li>sdnfaliewbfal</li>
              <li>sdnfaliewbfal</li>
              <li>sdnfaliewbfal</li>
            </ul>
          </p>
        </div>
      </div>{" "}
      <div className="flex section">
        <div className="heading">
          <h1>Who built this ??</h1>
        </div>
        <div className="para">
          <p>
            This was built by <span className="strike">two</span> 3 Students
            during the Hackathon <span className="bold">ETHForAll 2023</span>.
            <ul>
              <li>
                <a href="https://theanuragshukla.github.io/portfolio">
                  Anurag Shukla
                </a>
              </li>
              <li>
                <a href="https://github.com/vatsalmadhur">
                  Madhur Vatsal Bharti
                </a>
              </li>
              <li>
                <a href="https:///github.com/kumarmanishrai">
                  Manish Kumar Rai
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
