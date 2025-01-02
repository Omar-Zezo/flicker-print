import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UseNotifications = () => {
  const signupData = useSelector((state) => state.signup);
  const loginData = useSelector((state) => state.login);
  const sendEmailData = useSelector((state) => state.sendEmail);
  const checkOtpData = useSelector((state) => state.checkOtp);
  const verifyEmailData = useSelector((state) => state.verifyEmail);
  const resetPasswordData = useSelector((state) => state.resetPassword);

  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  const navigate = useNavigate();

  // Handling signup notification
  useEffect(() => {
    if (signupData) {
      if (signupData.error !== null) {
        if (signupData.error.data) {
          errorMsg(signupData.error.data.message);
        }
      }
      if (signupData.data) {
        if (signupData.data.data) {
          if (signupData.data.data.data) {
            localStorage.setItem("token", signupData.data.data.data.token);
            navigate("/auth/verify-email");
          }
        }
      }
    }
  }, [signupData]);

  // Handling login notification
  useEffect(() => {
    if (loginData) {
      if (loginData.error !== null) {
        if (loginData.error.data) {
          errorMsg(loginData.error.data.message);
        }
      }
      if (loginData.data) {
        if (loginData.data.data) {
          localStorage.setItem("token", loginData.data.data.data.token);
          navigate("/");
        }
      }
    }
  }, [loginData]);

  // Handling send email notification
  useEffect(() => {
    if (sendEmailData) {
      if (sendEmailData.error !== null) {
        if (sendEmailData.error.data) {
          errorMsg(sendEmailData.error.data.message);
        }
      }
      if (sendEmailData.data) {
        if (sendEmailData.data.data) {
          navigate("/auth/verify-reset-password");
        }
      }
    }
  }, [sendEmailData]);

  // Handling otp status
  useEffect(() => {
    if (checkOtpData) {
      if (checkOtpData.error !== null) {
        if (checkOtpData.error.data) {
          errorMsg(checkOtpData.error.data.message);
        }
      }
      if (checkOtpData.data) {
        if (checkOtpData.data.status === 200) {
          navigate("/auth/change-password");
        }
      }
    }
  }, [checkOtpData]);

  // Handling verify email status
  useEffect(() => {
    if (verifyEmailData) {
      if (verifyEmailData.error !== null) {
        if (verifyEmailData.error.data) {
          errorMsg(verifyEmailData.error.data.message);
        }
      }
      if (verifyEmailData.data) {
        if (verifyEmailData.data.data) {
          if (verifyEmailData.data.data.data) {
            if (verifyEmailData.data.data.data.token) {
              localStorage.setItem(
                "token",
                verifyEmailData.data.data.data.token
              );
              localStorage.removeItem("email");
              localStorage.removeItem("code");
            }
          }
          navigate("/");
        }
      }
    }
  }, [verifyEmailData]);

  // Handling reset password status
  useEffect(() => {
    if (resetPasswordData) {
      if (resetPasswordData.error !== null) {
        if (resetPasswordData.error.data) {
          errorMsg(resetPasswordData.error.data.message);
        }
      }
      if (resetPasswordData.data) {
        if (resetPasswordData.data.status === 200) {
          localStorage.removeItem("email");
          localStorage.removeItem("otp");
          navigate("/auth/login");
        }
      }
    }
  }, [resetPasswordData]);
};

export default UseNotifications;
