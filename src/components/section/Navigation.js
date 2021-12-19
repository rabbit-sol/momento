import React from "react";

function Navigation() {
  return (
    <div>
      <header className="py-4">
        <div className="container">
          <div id="logo">
            <h1>
              {" "}
              <span className="fa fa-home" aria-hidden="true"></span> Pauri
              Town
            </h1>
          </div>
          <nav className="d-lg-flex">
            <label for="drop" className="toggle">
              Menu
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2 ml-auto">
              <li className="mr-lg-4 mr-3">
                <a href="/">Home</a>
              </li>
              <li className="mr-lg-4 mr-3">
                <a href="/services">Services</a>
              </li>
          
              <li className="mr-lg-4 mr-3">
                <a href="/properties">Properties</a>
              </li>
              <li className="mr-lg-4">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="login-icon mt-2">
              <a className="user" href="#popup3">
                <span className="fa fa-user-circle-o" aria-hidden="true"></span>
              </a>
            </div>
          </nav>
          <div className="clear"></div>
        </div>
      </header>
      <div id="popup1" className="popup-effect">
          <div className="popup">
            <img
              src="./assets/images/home.png"
              alt="Popup"
              className="img-fluid"
              style={{ width: "300px" }}
            />
            <p className="mt-4 ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <a className="close" href={"/"}>
              &times;
            </a>
          </div>
        </div>

        <div id="popup2" className="popup-effect">
          <div className="popup">
            <iframe title="myFrame" src="https://player.vimeo.com/video/12690053" sandbox=""/>
            
            <p className="mt-4 ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <a className="close" href={"/"}>
              &times;
            </a>
          </div>
        </div>

        <div id="popup3" className="popup-effect">
          <div className="popup">
            <div className="login px-sm-4 mx-auto mw-100">
              <h5 className="text-center mb-4">Login to Estate Town</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <label className="mb-2">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    required=""
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label className="mb-2">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                    required=""
                  />
                </div>
                <button type="submit" className="btn btn-primary submit mt-2">
                  Login
                </button>
                <p className="text-center mt-2">
                  <a href="#popup4"> Don't have an account?</a>
                </p>
              </form>
            </div>

            <a className="close" href={"/"}>
              &times;
            </a>
          </div>
        </div>

        <div id="popup4" className="popup-effect">
          <div className="popup">
            <div className="login px-sm-4 mx-auto mw-100">
              <h5 className="text-center mb-4">Register Now</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    placeholder=""
                    required=""
                  />
                </div>

                <div className="form-group">
                  <label className="mb-2">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password1"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    placeholder=""
                    required=""
                  />
                </div>

                <button type="submit" className="btn btn-primary submit">
                  Register
                </button>
                <p className="text-center mt-3">
                  <a href="/">By clicking Register, I agree to your terms</a>
                </p>
              </form>
            </div>
            <a className="close" href="/">
              &times;
            </a>
          </div>
        </div>
    </div>
  );
}

export default Navigation;
