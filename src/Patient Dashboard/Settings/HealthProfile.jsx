import { loadPatient, updatePatientProfile } from '@/Redux/Actions/PatientActions';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const HealthProfile = () => {
  const { id } = useParams();
  const patient = useSelector((state) => state.loadPatient.patient);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [bloodOxygen, setBloodOxygen] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [visualAcuity, setVisualAcuity] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [prescriptions, setPrescriptions] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhoneNumber, setEmergencyContactPhoneNumber] = useState('');


  useEffect(() => {
    dispatch(loadPatient(id));
  }, [dispatch, id]);


  useEffect(() => {
    if (patient) {
      setTemperature(patient.temperature || "");
      setBloodPressure(patient.bloodPressure || "");
      setBloodSugar(patient.bloodSugar || "");
      setBloodType(patient.bloodType || "");
      setHeartRate(patient.heartRate || "");
      setBloodOxygen(patient.bloodOxygen || "");
      setHeight(patient.height || "");
      setWeight(patient.weight || "");
      setVisualAcuity(patient.visualAcuity || "");
      setAllergies(patient.allergies || "");
      setMedications(patient.medications || "");
      setPrescriptions(patient.prescriptions || "");
      setEmergencyContactName(patient.emergencyContactName || "");
      setEmergencyContactPhoneNumber(patient.emergencyContactPhoneNumber || "");
    }
  }, [patient]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let updatedPatient = {};

    if (temperature !== patient.temperature) updatedPatient.temperature = temperature;
    if (bloodPressure !== patient.bloodPressure) updatedPatient.bloodPressure = bloodPressure;
    if (bloodSugar !== patient.bloodSugar) updatedPatient.bloodSugar = bloodSugar;
    if (bloodType !== patient.bloodType) updatedPatient.bloodType = bloodType;
    if (heartRate !== patient.heartRate) updatedPatient.heartRate = heartRate;
    if (bloodOxygen !== patient.bloodOxygen) updatedPatient.bloodOxygen = bloodOxygen;
    if (height !== patient.height) updatedPatient.height = height;
    if (weight !== patient.weight) updatedPatient.weight = weight;
    if (visualAcuity !== patient.visualAcuity) updatedPatient.visualAcuity = visualAcuity;
    if (allergies !== patient.allergies) updatedPatient.allergies = allergies;
    if (medications !== patient.medications) updatedPatient.medications = medications;
    if (prescriptions !== patient.prescriptions) updatedPatient.prescriptions = prescriptions;
    if (emergencyContactName !== patient.emergencyContactName) updatedPatient.emergencyContactName = emergencyContactName;
    if (emergencyContactPhoneNumber && emergencyContactPhoneNumber !== patient.emergencyContactPhoneNumber) updatedPatient.emergencyContactPhoneNumber = emergencyContactPhoneNumber;

    if (Object.keys(updatedPatient).length === 0) {
      toast.error('No changes detected. Please make a change to save your profile.');
      return;
    }

    try {
      const response = await dispatch(updatePatientProfile(id, updatedPatient));
      if (response.success) {
        toast.success('Health Profile updated successfully!');

        // Reset the form inputs
        setTemperature('');
        setBloodPressure('');
        setBloodSugar('');
        setBloodType('');
        setHeartRate('');
        setBloodOxygen('');
        setHeight('');
        setWeight('');
        setVisualAcuity('');
        setAllergies('');
        setMedications('');
        setPrescriptions('');
        setEmergencyContactName('');
        setEmergencyContactPhoneNumber('');

        dispatch(loadPatient(id)); // Reload the patient data
      } else {
        setError(response.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-[3rem]'>
      <div>
        <section className='md:px-7 px-4 mb-[3rem]'>
          <h2 className='text-[28px] font-Mulish font-medium mt-12 px-2'>Health Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className='flex md:px-12 lg:px-2 md:gap-9 lg:flex-wrap xs:flex-wrap mt-5 md:flex-nowrap'>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Temperature</label>
                <input value={temperature} onChange={(e) => setTemperature(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- - Decree celsius" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Pressure</label>
                <input value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="-/- mmHg" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Sugar</label>
                <input value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="-/- mmHg" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Type</label>
                <input value={bloodType} onChange={(e) => setBloodType(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- - Decree celsius" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Heart Rate</label>
                <input value={heartRate} onChange={(e) => setHeartRate(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Blood Oxygen</label>
                <input value={bloodOxygen} onChange={(e) => setBloodOxygen(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Height</label>
                <input value={height} onChange={(e) => setHeight(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- - Cm" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Weight</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- - Kg" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Visual Acuity</label>
                <input value={visualAcuity} onChange={(e) => setVisualAcuity(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Allergies</label>
                <input value={allergies} onChange={(e) => setAllergies(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Medications</label>
                <input value={medications} onChange={(e) => setMedications(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Prescriptions</label>
                <input value={prescriptions} onChange={(e) => setPrescriptions(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Emergency Contact Name</label>
                <input value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
              <div className='flex flex-col lg:w-[30%] xs:w-full mt-3'>
                <label className='text-[0.87rem] font-bold text-[#384D6C]' htmlFor="">Emergency Contact Phone Number</label>
                <input value={emergencyContactPhoneNumber} onChange={(e) => setEmergencyContactPhoneNumber(e.target.value)} className='border outline-none placeholder:italic placeholder:font-light text-[#6e6e6e] font-Mulish border-[#D1D5DB] px-5 py-3 rounded-lg mt-3' type="text" placeholder="- -" />
              </div>
            </div>
            <div className='flex items-end justify-end'>
              <button type='submit' className={`mt-8 px-10 py-3 bg-[#22D1EE] text-white font-bold rounded-lg ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? 'Saving Changes' : 'Save Changes'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default HealthProfile