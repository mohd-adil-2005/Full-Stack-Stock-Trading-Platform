import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  mb-5 border-top">
        <h1 className=" text-center">People</h1>
      </div>

      <div
        className="row p- mb-5
            fs-6 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3  text-center">
          <img
            src="images\IMG_20240624_163222_840-removebg-preview.png "
            style={{ borderRadius: "100%", width: "50%", objectFit: "cover" }}
          />
          <h4 className="mt-5">Mohd Adil</h4>
          <h6>Full Stack web developer</h6>
        </div>
        <div className="col-6 p-3 fs-5">
          <p>
          I’m a passionate full stack web developer currently pursuing a B.Tech in Information Technology. I built this <b>FinSync – Zerodha-Inspired Stock Platform </b> project to sharpen my skills in frontend and backend development, especially using the MERN stack.
          </p>
          <p>
          This project helped me understand how real-world trading platforms are structured and how to implement scalable features.
          </p>
          <p>Playing basketball is my zen.</p>
          
          <p>
            {" "}
            connect on{" "}
            <a href="/" className="f-link">
              Home page
            </a>{" "}
            <a className=" f-link" href="#">
              Trading Q&N
            </a>
            <a className="f-link" href="#">
              {" "}
              X
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
