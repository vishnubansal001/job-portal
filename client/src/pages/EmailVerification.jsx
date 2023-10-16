// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { resendEmailVerificationToken, verifyUserEmail } from "../api/auth";
// import { useAuth, useNotification } from "../hooks";
// import { MuiOtpInput } from "mui-one-time-password-input";


// const isValidOTP = (otp) => {
//   let valid = false;

//   for (let val of otp) {
//     valid = !isNaN(parseInt(val));
//     if (!valid) break;
//   }

//   return valid;
// };

// export default function EmailVerification() {
//   const [otp, setOtp] = React.useState("");

//   console.log(otp);

//   const handleChange = (newValue) => {
//     setOtp(newValue);
//   };

//   const { isAuth, authInfo } = useAuth();
//   const { isLoggedIn, profile } = authInfo;
//   const isVerified = profile?.isVerified;

//   const { updateNotification } = useNotification();

//   const { state } = useLocation();
//   const user = state?.user;

//   const navigate = useNavigate();

//   const handleOTPResend = async () => {
//     const { error, message } = await resendEmailVerificationToken(user.id);

//     if (error) return updateNotification("error", error);

//     updateNotification("success", message);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidOTP(otp)) return updateNotification("error", "invalid OTP");

//     const { error, message, userData } = await verifyUserEmail({
//       OTP: otp.toString(),
//       userId: user.id,
//     });
//     if (error) return updateNotification("error", error);

//     updateNotification("success", message);
//     console.log(userData);
//     localStorage.setItem("auth-token", userData.token);
//     isAuth();
//   };

//   useEffect(() => {
//     if (!user) navigate("/not-found");
//     if (isLoggedIn && isVerified) navigate("/");
//   }, [user, isLoggedIn, isVerified]);

//   return (
//     <FormContainer>
//       <Container>
//         <form
//           onSubmit={handleSubmit}
//           className={
//             "dark:bg-secondary bg-white drop-shadow-lg rounded p-6 space-y-6 w-[50%]"
//           }
//         >
//           <div>
//             <Title>Please enter the OTP to verify your account</Title>
//             <p className="text-center dark:text-dark-subtle text-light-subtle">
//               OTP has been sent to your email
//             </p>
//           </div>
//           <div className="flex justify-center items-center">
//             <MuiOtpInput
//               value={otp}
//               length={6}
//               onChange={handleChange}
//               className="space-x-4"
//             />
//           </div>

//           <div>
//             <Submit value="Verify Account" onClick={handleSubmit} />
//             <button
//               onClick={handleOTPResend}
//               type="button"
//               className="dark:text-black text-blue-500 font-semibold hover:underline mt-2"
//             >
//               I don't have OTP
//             </button>
//           </div>
//         </form>
//       </Container>
//     </FormContainer>
//   );
// }

// function FormContainer({ children }) {
//   return (
//     <div className="fixed inset-0 dark:bg-primary bg-white -z-10 flex justify-center items-center">
//       {children}
//     </div>
//   );
// }

// function Container({ children, className }) {
//   return (
//     <div
//       className={
//         "max-w-screen-xl mx-auto flex flex-col items-center justify-center" +
//         className
//       }
//     >
//       {children}
//     </div>
//   );
// }

// function Submit({ value, busy, type, onClick }) {
//   return (
//     <button
//       type={type || "submit"}
//       className="w-full rounded dark:bg-white bg-secondary dark:text-secondary text-black hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer h-10 flex items-center justify-center"
//       onClick={onClick}
//     >
//       {value}
//     </button>
//   );
// }

// function Title({ children }) {
//   return (
//     <h1 className="text-xl dark:text-black text-secondary font-semibold text-center">
//       {children}
//     </h1>
//   );
// }
