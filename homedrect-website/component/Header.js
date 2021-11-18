import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <section class="top-section">
        <div class="row">
          <div class="col-sm-3">
            <div class="logo-wp">
              <div class="lo_go">
                <Link href="/home">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
              <div class="sec_loc">
                <a href="#">
                  <i class="fa fa-map-marker"></i> select your location
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="ser_prod">
              <form class="example" action="">
                <input
                  type="text"
                  placeholder="Search for products"
                  name="search"
                />
                <button type="submit">
                  <img src="img/searchicon.png" alt="" />
                </button>
              </form>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="right_top">
              <div class="login"></div>
              <div class="my-account">
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Account
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    style={{ marginTop: "40px" }}
                  >
                    <div class="dropdown-item yhh">
                      <img src="img/icon1.png" alt="" />
                      <Link href="/myprofile"> John </Link>
                    </div>
                    <MenuItem onClick={handleClose}>
                      <a class="dropdown-item" href="#">
                        <img src="img/icon2.png" alt="" /> My Order
                      </a>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <a class="dropdown-item" href="#">
                        <img src="img/icon3.png" alt="" /> My Address
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a class="dropdown-item" href="#">
                        <img src="img/icon6.png" alt="" /> Logout
                      </a>
                    </MenuItem>
                  </Menu>
                </div>
                <div class="log_in">
                  <LoginModal />
                </div>
                <div class="my_crt">
                  <p>
                    <img src="img/icon7.png" alt="" /> <span>My Cart</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
