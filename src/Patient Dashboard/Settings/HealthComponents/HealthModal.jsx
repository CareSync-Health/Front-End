import React from 'react'

const HealthModal = ({ show, onClose, onSubmit, field, temperature, onTemperatureChange, bloodType, onBloodTypeChange, pulseRate, onPulseRateChange, bloodOxygen, onBloodOxygenChange, height, onHeightChange, weight, onWeightChange, visualAcuity, onVisualAcuityChange, allergies, onAllergiesChange, medications, onMedicationsChange, prescriptions, onPrescriptionsChange }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#FFFCF8] p-5 rounded-md shadow-md w-[90%] max-w-md">
                <h2 className="text-xl mb-4">{`Edit ${field.charAt(0).toUpperCase() + field.slice(1)}`}</h2>

                {field === 'temperature' && (
                    <div className="mb-4">
                        <label htmlFor="temperature" className="block text-sm font-medium">Temperature (°C)</label>
                        <input
                            type="text"
                            id="temperature"
                            value={temperature}
                            onChange={onTemperatureChange}
                            className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish w-full border-[#D1D5DB] px-2 py-1 rounded-lg mt-3'
                        />
                    </div>
                )}

                {/* {field === 'blood Pressure' && (
                    <div className="mb-4">
                        <label htmlFor="systolic" className="block text-sm font-medium">Systolic</label>
                        <input
                            type="text"
                            id="systolic"
                            placeholder="Systolic"
                            value={bloodPressure.systolic}
                            onChange={(e) => onBloodPressureChange(e, 'systolic')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <label htmlFor="diastolic" className="block text-sm font-medium mt-2">Diastolic</label>
                        <input
                            type="text"
                            id="diastolic"
                            placeholder="Diastolic"
                            value={bloodPressure.diastolic}
                            onChange={(e) => onBloodPressureChange(e, 'diastolic')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )} */}

                {field === 'blood Type' && (
                    <div className="mb-4">
                        <label htmlFor="bloodType" className="block text-sm font-medium">Blood Type</label>
                        <input
                            type="text"
                            id="bloodType"
                            placeholder="Blood Type"
                            value={bloodType}
                            onChange={onBloodTypeChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'pulse Rate' && (
                    <div className="mb-4">
                        <label htmlFor="pulseRate" className="block text-sm font-medium">Pulse Rate</label>
                        <input
                            type="text"
                            id="pulseRate"
                            value={pulseRate}
                            onChange={onPulseRateChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'blood Oxygen' && (
                    <div className="mb-4">
                        <label htmlFor="bloodOxygen" className="block text-sm font-medium">Blood Oxygen</label>
                        <input
                            type="text"
                            id="bloodOxygen"
                            value={bloodOxygen}
                            onChange={onBloodOxygenChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'height' && (
                    <div className="mb-4">
                        <label htmlFor="height" className="block text-sm font-medium">Height</label>
                        <input
                            type="text"
                            id="height"
                            value={height}
                            onChange={onHeightChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'weight' && (
                    <div className="mb-4">
                        <label htmlFor="weight" className="block text-sm font-medium">Weight</label>
                        <input
                            type="text"
                            id="weight"
                            value={weight}
                            onChange={onWeightChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'visual Acuity' && (
                    <div className="mb-4">
                        <label htmlFor="visualAcuity" className="block text-sm font-medium">Visual Acuity</label>
                        <input
                            type="text"
                            id="visualAcuity"
                            value={visualAcuity}
                            onChange={onVisualAcuityChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'allergies' && (
                    <div className="mb-4">
                        <label htmlFor="allergies" className="block text-sm font-medium">Allergies</label>
                        <input
                            type="text"
                            id="allergies"
                            value={allergies}
                            onChange={onAllergiesChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'medications' && (
                    <div className="mb-4">
                        <label htmlFor="medications" className="block text-sm font-medium">Medications</label>
                        <input
                            type="text"
                            id="medications"
                            value={medications}
                            onChange={onMedicationsChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                {field === 'prescriptions' && (
                    <div className="mb-4">
                        <label htmlFor="prescriptions" className="block text-sm font-medium">Prescriptions</label>
                        <input
                            type="text"
                            id="prescriptions"
                            value={prescriptions}
                            onChange={onPrescriptionsChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                )}

                <div className="flex justify-end space-x-3 mt-4">
                    <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
                    <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default HealthModal