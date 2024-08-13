import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useTheme } from "../Components/ThemeContext";
import { CiWallet } from "react-icons/ci";

const OnlineWithdrawal = () => {
  const { theme, appearance } = useTheme();

  return (
    <div>
      <div
        className={`flex ${theme === "dark"
            ? "bg-gray-900"
            : theme === "light"
              ? "bg-[#E2F3F5]"
              : "bg-gray-100"
          } ${appearance === "green"
            ? "text-[#17B978]"
            : appearance === "blue"
              ? "text-[#22D1EE]"
              : appearance === "accent"
                ? "text-[#A6FFF2]"
                : theme === "dark"
                  ? "text-white"
                  : "text-gray-800"
          }`}
      >
        <Sidebar />
        <div
          className="flex-1 lg:h-[99.9vh]  xs:h-[85vh]  overflow-y-auto"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <Navbar messageCount={5} notificationCount={12} />
          <div>
            {/* starting coding from here don't touch any other thing from the navbar and sidebar please. if you touch am... YOU DIE 🔪😤 */}

            <div className="lg:px-[30px] xs:px-[10px] mt-[1rem]">
              <h2 className="text-[32px] font-bold font-Lato">Withdrawal</h2>
              <hr className="w-full h-[1.5px] bg-[#C7C7C7] mt-[1rem]" />
              <Link to="/payment_method" className="underline">
                <h3 className="text-[16px] font-bold font-Nunito mt-[2rem] text-[#17B978]">
                  See all payment methods
                </h3>
              </Link>
              <div className="mt-[2rem] flex flex-wrap justify-between items-center bg-opacity-0">
                <div className="grid grid-cols-3 gap-4 order-first">
                  <form className="col-span-2 ...">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 ...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <span className="font-normal text-2xl text-left">
                            Payment Method
                          </span>
                          <select
                            className={`flex justify-around p-2.5 text-left w-full border rounded-[5px] px-[10px] font-Nunito font-normal mt-4 bg-transparent outline-none  ${theme === "dark" ? "border-[#fff]" : theme === "light" ? "border-[rgba(0,0,0,0.2)]" : ""}`}
                          >
                            <option value="OnlineBank">Online Bank</option>
                            <option value="Card">Card</option>
                            <option value="Transfer">Transfer</option>
                          </select>
                        </label>
                      </div>
                      <div className="...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <span className="font-normal text-2xl text-left">
                            Currency
                          </span>
                          <select
                            name="Payment Method"
                            value=""
                            className={`flex justify-around p-2.5 text-left w-full border rounded-[5px] px-[10px] font-Nunito font-normal mt-4 bg-transparent outline-none  ${theme === "dark" ? "border-[#fff]" : theme === "light" ? "border-[rgba(0,0,0,0.2)]" : ""}`}
                          >
                            <option value="OnlineBank">NGN</option>
                            <option value="Card">USD</option>
                            <option value="Transfer">GBP</option>
                            <option value="Transfer">EUR</option>
                          </select>
                        </label>
                      </div>
                      <div className="col-span-3 ...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <span className="font-normal text-2xl text-left">
                            From account
                          </span>
                          <div className={`flex justify-between p-4 text-left w-full border rounded-[5px] px-[10px] font-Nunito font-normal mt-4 bg-transparent  ${theme === "dark" ? "border-[#fff]" : theme === "light" ? "border-[rgba(0,0,0,0.2)]" : ""}`}>
                            <h2 className="text-[15px] font-Nunito font-bold flex items-center gap-[10px]"><CiWallet className="text-[28px] font-bold" /> Balance Available</h2>
                            <h2 className="text-[18px] font-Nunito font-bold flex items-center gap-[10px]">0.00 <span>NGN</span></h2>
                          </div>
                        </label>
                      </div>
                      <div className="col-span-3 ...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <span className="font-normal text-2xl text-left">
                            Amount
                          </span>
                          <label className={`flex justify-between px-[10px] py-2.5 text-left w-full border rounded-[5px] font-Nunito font-normal mt-4 bg-transparent  ${theme === "dark" ? "border-[#fff]" : theme === "light" ? "border-[rgba(0,0,0,0.2)]" : ""}`}>
                            <input
                              type="dropdown"
                              className="bg-transparent outline-none"
                              placeholder="0.00"
                            />
                            <h2 className="text-[16px] font-Nunito font-normal">NGN</h2>
                          </label>
                          <span className="text-[14px] font-medium font-Nunito mt-2 text-[#17B978]">
                            <p>5,000 - 100,000 NGN</p>
                          </span>
                        </label>
                      </div>
                      <div className="col-span-3 flex items-left m-4 p-4 justify-left bg-teal-300 text-black rounded-[5px]">
                        <p className="text-[16px] font-Nunito font-bold">
                          Enter the amount you want to withdraw. It ought to
                          fall inside the recommended range and can&apos;t be
                          more than accessible on your account or wallet. The
                          other assets may be withdrawn utilizing different
                          methods.
                        </p>
                      </div>
                      <div className="col-span-3 ...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <div className={`w-full p-4 flex items-center justify-between rounded-[10px] ${theme === "dark" ? "bg-gray-800" : theme === "light" ? "bg-[#D6F6F9]" : ""}`}>
                            <h2 className="text-[17px] font-bold font-Nunito">To be withdrawn </h2>
                            <h2 className="text-[22px] font-Nunito font-bold flex items-center gap-[10px]">0.00 <span>NGN</span></h2>
                          </div>
                        </label>
                      </div>
                      <div className="col-span-1 flex items-left p-4 justify-left">
                        <button
                          type="submit"
                          className={`w-full h-[40px] bg-[#22D1EE] text-white font-bold font-Lato rounded-[5px] mt-[1rem]`}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="grid grid-rows-3 grid-flow-col gap-4 order-last">
                    <div className="row-span-2 col-span-3 ...">
                      <div className="pb-20">
                        <h3 className="flex flex-col items-left p-4 justify-left text-[20px] font-bold font-Lato">
                          Terms
                        </h3>

                        <p className="text-gray-400 font-normal font-Nunito px-4 pt-4 flex items-center gap-[1rem]">
                          <span>Average payment time</span>
                          <span className="font-bold">30 mins</span>
                        </p>
                        <p className="text-gray-400 font-normal font-Nunito px-4 flex items-center gap-[1rem] mt-1">
                          <span>Fee</span>
                          <span className="font-bold">0%</span>
                        </p>
                      </div>

                      <div className="">
                        <h3 className="flex flex-col items-left p-4 justify-left text-[20px] font-bold font-Lato">
                          FAQ
                        </h3>

                        <Link to='' className="text-gray-400 px-4 pt-4 underline">
                          How to withdraw with online bank transfer
                        </Link>
                      </div>
                    {/* <div className="row-span-1 col-span-3 mt-[10rem]">
                      <p className="justify-left text-[19px] font-medium font-Nunito">
                        Conversion rate
                      </p>
                      <p className="font-extralight p-2">
                        1 USD - NGN = <span className="font-bold">1,600</span>
                      </p>
                      <p className="font-extralight p-2">
                        1 NGN - USD ={" "}
                        <span className="font-bold">0.0001650</span>
                      </p>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineWithdrawal;
