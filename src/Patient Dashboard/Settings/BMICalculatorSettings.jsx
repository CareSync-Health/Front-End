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
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15);
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

          <div className="flex flex-col space-y-4 ml-24 p-4">
            <div className="flex flex-row items-center space-x-10">
              <label className="font-extrabold text-2xl">Height</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="custom-select mt-1 bg-gray-400 p-2 rounded-lg text-justify"
              >
                <option value="cm">Centimeters</option>
                <option value="m">Meters</option>
                <option value="ft">Feet</option>
                <option value="in">Inches</option>
              </select>
            </div>

            <div className="flex flex-row items-center space-x-10">
              <label className="font-extrabold text-2xl">Weight</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="custom-select mt-1 bg-gray-400 p-2 rounded-lg text-justify"
              >
                <option value="kg">Kilograms</option>
                <option value="lb">Pounds</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Age and Gender
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Enter your age and gender for more accurate BMI calculations:
          </h3>

          <div className="flex flex-col space-y-4 ml-24 p-4">
            <div className="flex flex-row items-center space-x-20">
              <label className="font-extrabold text-2xl">Age</label>
              <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="custom-input mt-1 p-2 rounded-lg"
                type="text"
                placeholder="Input your age"
              />
            </div>

            <div className="flex flex-row items-center space-x-10">
              <label className="font-extrabold text-2xl">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="custom-select mt-1 bg-gray-400 p-2 rounded-lg text-justify"
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            BMI Categories
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            View BMI categories and corresponding ranges for interpretation:
          </h3>

          <div className="flex flex-col justify-center ml-32">
            <ul className="custom-list">
              <li className="flex items-center w-full">
                <span className="w-48">Underweight:</span>
                <span className="text-blue-500 ml-2">BMI &lt; 18.5</span>
              </li>
              <li className="flex items-center w-full">
                <span className="w-48">Normal weight:</span>
                <span className="text-green-500 ml-2">
                  18.5 ≤ BMI &lt; 24.9
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="w-48">Overweight:</span>
                <span className="text-yellow-300 ml-2">25 ≤ BMI &lt; 29.9</span>
              </li>
              <li className="flex items-center w-full">
                <span className="w-48">Obese:</span>
                <span className="text-red-500 ml-2">BMI ≥ 30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Custom Thresholds
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Set custom BMI thresholds or goals tailored to your preferences:
          </h3>

          <div className="flex flex-col justify-center ml-32">
            <ul className="custom-list">
              <li>
                <label className="flex flex-row font-normal text-lg font-Nunito items-center m-5">
                  <span className="font-extrabold text-base mr-10 w-60">
                    Underweight Threshold:
                  </span>
                  <input
                    name="underweightThreshold"
                    value={formData.underweightThreshold}
                    onChange={handleChange}
                    className="custom-input flex-grow mt-1 p-2 rounded-lg"
                    type="number"
                    placeholder="Input Threshold"
                  />
                </label>
              </li>
              <li>
                <label className="flex flex-row font-normal text-lg font-Nunito items-center m-5">
                  <span className="font-extrabold text-base mr-10 w-60">
                    Normal Weight Threshold:
                  </span>
                  <input
                    name="normalWeightThreshold"
                    value={formData.normalWeightThreshold}
                    onChange={handleChange}
                    className="custom-input flex-grow mt-1 p-2 rounded-lg"
                    type="number"
                    placeholder="Input Threshold"
                  />
                </label>
              </li>
              <li>
                <label className="flex flex-row font-normal text-lg font-Nunito items-center m-5">
                  <span className="font-extrabold text-base mr-10 w-60">
                    Overweight Threshold:
                  </span>
                  <input
                    name="overweightThreshold"
                    value={formData.overweightThreshold}
                    onChange={handleChange}
                    className="custom-input flex-grow mt-1 p-2 rounded-lg"
                    type="number"
                    placeholder="Input Threshold"
                  />
                </label>
              </li>
              <li>
                <label className="flex flex-row font-normal text-lg font-Nunito items-center m-5">
                  <span className="font-extrabold text-base mr-10 w-60">
                    Obese Threshold:
                  </span>
                  <input
                    name="obeseThreshold"
                    value={formData.obeseThreshold}
                    onChange={handleChange}
                    className="custom-input flex-grow mt-1 p-2 rounded-lg"
                    type="number"
                    placeholder="Input Threshold"
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col justify-items-center">
            <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito text-center">
              Color-Coding and Visual Feedback
            </h1>
            <h3 className="text-[18px] font-normal leading-[38px] font-Nunito text-center">
              Receive instant visual feedback on your BMI results:
            </h3>
            <div className="flex flex-row gap-x-10 justify-center p-4">
              <div className="flex flex-col items-center justify-center w-18">
                <p className="text-center">Low Risk</p>
                <div className="bg-green-500 rounded-md block h-16 w-16 mt-4"></div>
              </div>
              <div className="flex flex-col items-center justify-center w-18">
                <p className="text-center">Moderate Risk</p>
                <div className="bg-yellow-300 rounded-md block h-16 w-16 mt-4"></div>
              </div>
              <div className="flex flex-col items-center justify-center w-18">
                <p className="text-center">High Risk</p>
                <div className="bg-red-500 rounded-md block h-16 w-16 mt-4"></div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 flex-row justify-around mt-32 w-full">
            <button
              type="button"
              onClick={handleCancel}
              className="button-cancel flex-1 bg-[#a0efff] text-black rounded-md py-2 px-4 mt-4 border border-black hover:bg-[#8ed1e3]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-save flex-1 bg-[#22D1EE] text-white rounded-md py-2 px-4 mt-4 ring-6 ring-[#a0efff] ring-opacity-50 hover:bg-[#1cb3cd] border border-[#a0efff]"
              style={{ borderColor: "#a0efff" }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BMICalculatorSettings;
