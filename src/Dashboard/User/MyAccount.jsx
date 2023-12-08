import { useContext } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import { authContext } from "../../context/AuthContext.jsx";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);

  const logoutHandler = () => {
    dispatch({ type: "LOGIN_OUT" });
  };

  return (
    <div className="max-w-[117-px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-primaryColor">
              <img
                src={userImg}
                alt=""
                className="w-full h-full rounded-full"
              />
            </figure>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
              Terence Faid
            </h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              terencefaid@gmail.com
            </p>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              Blood Type:{" "}
              <span className="mt-2 text-headingColor text-[22px] leading-8">
                O-
              </span>
            </p>
          </div>

          <div className="mt-[50px] md:mt-[100px]">
            <button
              className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
              onClick={logoutHandler}
            >
              LOGOUT
            </button>
            <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
              DELETE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
