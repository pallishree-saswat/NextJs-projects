import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

function VerifyOtp() {
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

  const Router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table({ name, email, password });
    try {
        setLoading(true);
        const { data } = await axios.post(`http://localhost:8000/api/user/verifyEmail`, {
          name,
          email,
        });
        Router.push('/home')
        toast(data.message);
        setLoading(false);
      } catch (err) {
        toast(err.response.data);
        setLoading(false);
      }
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Verify OTP</Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
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
              <div class="phon_verifi">
                <h1>phone number verification</h1>
              </div>
              <div class="phon_verifi1">
                <h2>
                  Enter 4 digit code sent to your phone <br />
                  +91-123456789
                </h2>
                <form>
                  <div class="pl4s">
                    <div
                      class="digit-group tgd52d"
                      data-group-name="digits"
                      data-autosubmit="false"
                      autocomplete="off"
                    >
                      <input
                        type="text"
                        id="digit-1"
                        name="digit-1"
                        data-next="digit-2"
                      />
                      <input
                        type="text"
                        id="digit-2"
                        name="digit-2"
                        data-next="digit-3"
                        data-previous="digit-1"
                      />
                      <input
                        type="text"
                        id="digit-3"
                        name="digit-3"
                        data-next="digit-4"
                        data-previous="digit-2"
                      />
                      <input
                        type="text"
                        id="digit-4"
                        name="digit-4"
                        data-previous="digit-3"
                      />
                    </div>
                    <input type="submit" name="submit" value="Next" />
                    <p>Resend Code (in 20 sec)</p>
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

export default VerifyOtp;
