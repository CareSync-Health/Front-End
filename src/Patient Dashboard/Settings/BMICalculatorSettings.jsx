import React, { useState } from "react";

const BMICalculatorSettings = () => {
  const initialFormData = {
    heightUnit: "cm",
    weightUnit: "kg",
    age: "",
    gender: "M",
    underweightThreshold: "",
    normalWeightThreshold: "",
    overweightThreshold: "",
    obeseThreshold: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="flex justify-start ml-32 p-4">
      <style>{`
        .custom-select {
          width: 12rem;
          height: 2.5rem;
          background: linear-gradient(180deg, #d9d9d9, #737373);
          color: black;
          text-align: center;
          font-size: 1.2rem;
          position: relative;
        }
        .custom-input {
          width: 12rem;
          height: 2.5rem;
          border: 1px solid #000000;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          color: black;
          font-size: 1.2rem;
          position: relative;
        }
        .custom-list {
          list-style: none;
        }
        .custom-list li {
          position: relative;
          padding-left: 20px;
          text-align: left;
        }
        .custom-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 5px;
          width: 5px;
          background-color: black;
          border-radius: 50%;
        }

        .button-cancel,
        .button-save {
          width: 1rem;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .button-cancel:hover {
          background-color: #8ed1e3;
          transform: scale(1.05);
        }

        .button-save:hover {
          background-color: #1cb3cd;
          transform: scale(1.05);
        }
      `}</style>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Units of Measurement
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Choose your preferred units for height and weight:
          </h3>

          <label className="flex flex-row font-normal text-lg font-Nunito ml-24 p-4 justify-evenly">
            <span className="font-extrabold text-2xl">Height</span>
            <select
              name="heightUnit"
              value={formData.heightUnit}
              onChange={handleChange}
              className="custom-select flex justify-around w-full mt-1 bg-gray-400 p-2 rounded-lg text-justify"
            >
              <option value="cm">Centimeters</option>
              <option value="m">Meters</option>
              <option value="ft">Feet</option>
              <option value="in">Inches</option>
            </select>
          </label>

          <label className="flex flex-row font-normal text-lg font-Nunito ml-24 p-4 justify-evenly">
            <span className="font-extrabold text-2xl">Weight</span>
            <select
              name="weightUnit"
              value={formData.weightUnit}
              onChange={handleChange}
              className="custom-select flex justify-around w-full mt-1 bg-gray-400 p-2 rounded-lg text-justify"
            >
              <option value="kg">Kilograms</option>
              <option value="lb">Pounds</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Age and Gender
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Enter your age and gender for more accurate BMI calculations:
          </h3>

          <label className="flex flex-row font-normal text-lg font-Nunito ml-24 p-4 justify-evenly">
            <span className="font-extrabold mr-20 text-2xl">Age</span>
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="custom-input flex w-full mt-1 p-2 rounded-lg"
              type="text"
              placeholder="Input your age"
            />
          </label>

          <label className="flex flex-row font-normal text-lg font-Nunito ml-24 p-4 justify-evenly">
            <span className="font-extrabold mr-20 text-2xl">Gender</span>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="custom-select flex justify-around w-full mt-1 bg-gray-400 p-2 rounded-lg text-justify"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            BMI Categories
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            View BMI categories and corresponding ranges for interpretation:
          </h3>

          <ul className="custom-list">
            <li>
              Underweight:{" "}
              <span className="text-blue-500">
                BMI <span className="text-black">&lt;</span> 18.5
              </span>{" "}
            </li>
            <li>
              Normal weight:{" "}
              <span className="text-green-500">
                18.5 <span className="text-black">&le;</span> BMI{" "}
                <span className="text-black">&lt;</span> 24.9
              </span>
            </li>
            <li>
              Overweight:{" "}
              <span className="text-yellow-300">
                25 <span className="text-black">&le;</span> BMI{" "}
                <span className="text-black">&lt;</span> 29.9
              </span>
            </li>
            <li>
              Obese:{" "}
              <span className="text-red-500">
                BMI <span className="text-black">&ge;</span> 30
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Custom Thresholds
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Set custom BMI thresholds or goals tailored to your preferences:
          </h3>

          <ul className="custom-list">
            <li>
              <label className="flex flex-row font-normal text-lg font-Nunito">
                <span className="font-extrabold text-base mr-20">
                  Underweight Threshold:
                </span>
                <input
                  name="underweightThreshold"
                  value={formData.underweightThreshold}
                  onChange={handleChange}
                  className="custom-input flex w-full mt-1 p-2 rounded-lg"
                  type="number"
                  placeholder="Input Threshold"
                />
              </label>
            </li>
            <li>
              <label className="flex flex-row font-normal text-lg font-Nunito">
                <span className="font-extrabold text-base mr-20">
                  Normal Weight Threshold:
                </span>
                <input
                  name="normalWeightThreshold"
                  value={formData.normalWeightThreshold}
                  onChange={handleChange}
                  className="custom-input flex w-full mt-1 p-2 rounded-lg"
                  type="number"
                  placeholder="Input Threshold"
                />
              </label>
            </li>
            <li>
              <label className="flex flex-row font-normal text-lg font-Nunito">
                <span className="font-extrabold text-base mr-20">
                  Overweight Threshold:
                </span>
                <input
                  name="overweightThreshold"
                  value={formData.overweightThreshold}
                  onChange={handleChange}
                  className="custom-input flex w-full mt-1 p-2 rounded-lg"
                  type="number"
                  placeholder="Input Threshold"
                />
              </label>
            </li>
            <li>
              <label className="flex flex-row font-normal text-lg font-Nunito">
                <span className="font-extrabold text-base mr-20">
                  Obese Threshold:
                </span>
                <input
                  name="obeseThreshold"
                  value={formData.obeseThreshold}
                  onChange={handleChange}
                  className="custom-input flex w-full mt-1 p-2 rounded-lg"
                  type="number"
                  placeholder="Input Threshold"
                />
              </label>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-items-center">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Color-Coding and Visual Feedback
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Receive instant visual feedback on your BMI results:
          </h3>

          <div className="flex flex-row gap-x-10 justify-center p-4">
            <div className="flex flex-col justify-center">
              <p>Low Risk</p>
              <div className="bg-green-500 rounded-md block h-16 w-16 mt-4"></div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-center">Moderate Risk</p>
              <div className="bg-yellow-300 rounded-md block h-16 w-16 mt-4"></div>
            </div>
            <div className="flex flex-col justify-center">
              <p>High Risk</p>
              <div className="bg-red-500 rounded-md block h-16 w-16 mt-4"></div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 flex-row justify-around mt-32">
          <button
            type="button"
            onClick={handleCancel}
            className="button-cancel flex-1 bg-[#a0efff] text-black rounded-md py-2 px-4 mt-4 border border-black hover:bg-[#8ed1e3]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button-save flex-1 bg-[#22D1EE] text-white rounded-md py-2 px-4 mt-4 ring-6 ring-[#22D1EE] ring-opacity-50 hover:bg-[#1cb3cd]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default BMICalculatorSettings;
