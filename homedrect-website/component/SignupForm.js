import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import VerifyOtp from "./VerifyOtp";

function SignupForm() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Signup</Button>
      <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open}>
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent>
          <Box
            noValidate
            component="form"
            md={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <div class="modal-body veri_fication">
              <div class="phon_verifi1">
                <h2>
                  Enter your details to <br />
                  Register
                </h2>
                <form>
                  
                  <div class="pl4s">
                  <p>Enter Your Name</p>
                    <input type="text" name="name" />
                    <span>
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <div class="pl4s">
                  <p>Enter Your Email</p>
                    <input type="email" name="email" />
                    <span>
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <div class="pl4s">
                  <p>Enter Your Phone number</p>
                    <input type="tel" name="phone" />
                    <span>
                      <i class="fa fa-phone"></i>+91-
                    </span>
                  </div>
                  <div class="pl4s">
                  <p>Enter Your Password</p>
                    <input type="password" name="password" />
                    <span>
                      <i class="fa fa-key"></i> 
                    </span>
                  </div>
                  <div class="pl4s">
                  <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" />
                    <span>
                      <i class="fa fa-key"></i> 
                    </span>
                  </div>
                  <div class="pl4s">
                  <input type="submit" name="submit" value="Register" />
                    
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SignupForm;
