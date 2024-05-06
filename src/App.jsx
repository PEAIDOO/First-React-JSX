import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const navImage =
    "https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png";
  const cameraImage =
    "https://i.pinimg.com/564x/9b/3d/38/9b3d386be30a13a0dac641c50dc4b469.jpg";

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          <img src={navImage} width="50" height="30" alt="" />
          Techi-fi
        </a>
        <button
          class="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link ">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="photo-heading">Photography</h1>
            <p className="first-para">
              Photography is an art form that captures moments in time,
              preserving the beauty, emotions, and stories that unfold in a
              single frame. It goes beyond the technical aspects of operating a
              camera; it is a powerful means of self-expression, storytelling,
              and a way to explore and appreciate the world around us
            </p>
            <p className="second-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est
              similique voluptatem minus vel tenetur perspiciatis pariatur
              dolorem totam. Doloribus blanditiis similique veritatis delectus
              aspernatur obcaecati odit earum inventore corrupti!
            </p>
            <button type="button" class="btn btn-sm">
              Read more
            </button>
          </div>
          <div className="col-md-6 cam-image">
            <img className="circular-image" src={cameraImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
