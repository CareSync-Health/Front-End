import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useTheme } from "../Components/ThemeContext";

const OnlineWithdrawal = () => {
  const { theme, appearance } = useTheme();

  return (
    <div>
      <div
        className={`flex ${
          theme === "dark"
            ? "bg-gray-900"
            : theme === "light"
            ? "bg-[#E2F3F5]"
            : "bg-gray-100"
        } ${
          appearance === "green"
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
              <h2 className="text-[40px] font-bold font-Lato">Withdrawal</h2>
              <hr className="w-full h-[1.5px] bg-[#C7C7C7] mt-[1rem]" />
              <Link to="" className="underline">
                <h3 className="text-[14px] font-bold font-Lato mt-[2rem] text-[#17B978]">
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
                            name="Payment Method"
                            value=""
                            className="flex justify-around  bg-opacity-0  p-2 text-left w-full h-[40px] border border-[#E1E1E3] rounded-[5px] px-[10px] font-Lato"
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
                            className="flex justify-around  bg-opacity-0  p-2 text-left w-full h-[40px] border border-[#E1E1E3] rounded-[5px] px-[10px] font-Lato"
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
                          <input
                            type="dropdown"
                            placeholder="Balance Available                      0.00USD"
                            className="w-full h-[40px] border border-[#E1E1E3] rounded-[5px] px-[10px] font-Lato"
                          />
                        </label>
                      </div>
                      <div className="col-span-3 ...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <span className="font-normal text-2xl text-left">
                            Amount
                          </span>
                          <input
                            type="dropdown"
                            placeholder="0.00                       USD"
                            className="w-full h-[40px] border border-[#E1E1E3] rounded-[5px] px-[10px] font-Lato"
                          />
                          <span className="text-[14px] font-bold font-Lato  text-[#17B978]">
                            <p>5.00 - 10 000.00 USD</p>
                          </span>
                        </label>
                      </div>
                      <div className="col-span-3 flex items-left m-4 px-4 py-8 justify-left bg-teal-300 text-black rounded-[5px]">
                        <p>
                          Enter the amount you want to withdraw. It ought to
                          fall inside the recommended range and can&apos;t be
                          more than accessible on your account or wallet. The
                          other assets may be withdrawn utilizing different
                          methods.
                        </p>
                      </div>
                      <div className="col-span-3 ...">
                        <label className="flex flex-col items-left p-4 justify-left">
                          <input
                            type="text"
                            placeholder="To be withdrawn      0.00NGN"
                            className="w-full h-[40px] border border-[#E1E1E3] rounded-[5px] px-[10px] font-Lato"
                          />
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

                        <p className="text-gray-500 px-4 pt-4">
                          Average payment time{" "}
                          <span className="text-white">30 mins</span>{" "}
                        </p>
                        <p className="text-gray-500 px-4">
                          Fee <span className="text-white">0%</span>{" "}
                        </p>
                      </div>

                      <div className="">
                        <h3 className="flex flex-col items-left p-4 justify-left text-[20px] font-bold font-Lato">
                          FAQ
                        </h3>

                        <p className="text-gray-500 px-4 pt-4 underline">
                          How to withdraw with online bank transfer
                        </p>
                      </div>
                    </div>
                    <div className="row-span-1 col-span-3 ...">
                      <p className="flex flex-col items-left p-4 justify-left text-[18px] font-normal font-Lato">
                        Conversion rate
                      </p>
                      <p className="font-extralight p-2">
                        1 USD - NGN = <span className="font-bold">1,600</span>
                      </p>
                      <p className="font-extralight p-2">
                        1 NGN - USD ={" "}
                        <span className="font-bold">0.0001650</span>
                      </p>
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
