// import React from "react";

const BMICalculatorSettings = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Units of Measurement
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Choose your preferred units for height and weight:
          </h3>
          <select>
            <optgroup label="Height">
              <option value="cm">Centimeters</option>
              <option value="m">Meters</option>
              <option value="ft">Feet</option>
              <option value="in">Inches</option>
            </optgroup>
            <optgroup label="Weight">
              <option value="kg">Kilograms</option>
              <option value="lb">Pounds</option>
            </optgroup>
          </select>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Age and Gender
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Enter your age and gender for more accurate BMI calculations:
          </h3>

          <label htmlFor="age">Age</label>
          <input id="age" type="text" />
          <select>
            <optgroup label="Gender">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </optgroup>
          </select>
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            BMI Categories
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            View BMI categories and corresponding ranges for interpretation:
          </h3>

          <ul>
            <li>
              Underweight: <span>BMI &lt; 18.5</span>{" "}
            </li>
            <li>
              Normal weight: <span>18.5 &le; BMI &lt; 24.9</span>
            </li>
            <li>
              Overweight: <span>25 &le; BMI &lt; 29.9</span>
            </li>
            <li>
              Obese: <span>BMI &ge; 30</span>
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

          <label htmlFor="Underweight">Underweight Threshold:</label>
          <input id="Underweight" type="number" />
          <label htmlFor="Normal">Normal Weight Threshold:</label>
          <input id="Normal" type="number" />
          <label htmlFor="Overweight">Overweight Threshold:</label>
          <input id="Overweight" type="number" />
          <label htmlFor="Obese">Obese Threshold:</label>
          <input id="Obese" type="number" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[25px] pt-[2rem] font-[700] leading-[46px] font-Nunito">
            Color-Coding and Visual Feedback
          </h1>
          <h3 className="text-[18px] font-normal leading-[38px] font-Nunito">
            Receive instant visual feedback on your BMI results:
          </h3>

          <div className="flex flex-col">
            <p>Low Risk</p>
            <div></div>
          </div>
          <div className="flex flex-col">
            <p>Moderate Risk</p>
            <div></div>
          </div>
          <div className="flex flex-col">
            <p>High Risk</p>
            <div></div>
          </div>
        </div>

        <button className="bg-[#a0efff] text-black rounded-md py-2 px-4 mt-4">
          Cancel Changes
        </button>
        <button className="bg-[#22D1EE] text-white rounded-md py-2 px-4 mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default BMICalculatorSettings;
