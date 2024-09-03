import { loadHealthHistory, loadPatient, updatePatientProfile } from '@/Redux/Actions/PatientActions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaTemperatureHalf, FaChevronDown, FaChevronUp, FaPrescriptionBottle, FaPersonArrowUpFromLine } from "react-icons/fa6";
import { MdEdit, MdOutlineBloodtype, MdMedicationLiquid } from "react-icons/md";
import { TbClockHeart, TbScaleOutline } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { IoIosPulse } from "react-icons/io";
import { CiMedicalMask } from "react-icons/ci";
import { LiaAllergiesSolid } from "react-icons/lia";
import HealthModal from './HealthComponents/HealthModal';

const HealthProfile = () => {
  const { id } = useParams();
  const patient = useSelector((state) => state.loadPatient.patient);
  const healthHistory = useSelector((state) => state.getHealthProfile.histories);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showBloodPressure, setShowBloodPressure] = useState(false);
  const [showBloodType, setShowBloodType] = useState(false);
  const [showPulseRate, setShowPulseRate] = useState(false);
  const [showBloodOxygen, setShowBloodOxygen] = useState(false);
  const [showHeight, setShowHeight] = useState(false);
  const [showWeight, setShowWeight] = useState(false);
  const [showVisualAcuity, setShowVisualAcuity] = useState(false);
  const [showAllergies, setShowAllergies] = useState(false);
  const [showMedications, setShowMedications] = useState(false);
  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editField, setEditField] = useState('');
  const [temperature, setTemperature] = useState('');
  // const [bloodPressure, setBloodPressure] = useState({ systolic: '', diastolic: '' });
  const [bloodType, setBloodType] = useState('');
  const [pulseRate, setPulseRate] = useState('');
  const [bloodOxygen, setBloodOxygen] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [visualAcuity, setVisualAcuity] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [prescriptions, setPrescriptions] = useState('');


  useEffect(() => {
    dispatch(loadPatient(id));
  }, [dispatch, id]);

  const patientId = id;

  useEffect(() => {
    const fetchHealthData = async () => {
      const response = await dispatch(loadHealthHistory(id));
      if (response.success) {
        const healthHistory = response.data.filter(item => {
          const itemDate = new Date(item.updated_date).toLocaleDateString();
          const today = new Date().toLocaleDateString();
          return itemDate === today; // Fetch data for today
        });
        // Handle the filtered healthHistory as needed
      }
    };
  
    fetchHealthData();
  }, [dispatch, id]);



  const handleEditClick = (field) => {
    setEditField(field);
    setShowEditModal(true);
  };

  useEffect(() => {
    if (patient) {
      setTemperature(patient.temperature || "");
      // setBloodPressure({ systolic: patient.bloodPressureSystolic || "", diastolic: patient.bloodPressureDiastolic || "" });
      setBloodType(patient.bloodType || "");
      setPulseRate(patient.heartRate || "");
      setBloodOxygen(patient.bloodOxygen || "");
      setHeight(patient.height || "");
      setWeight(patient.weight || "");
      setVisualAcuity(patient.visualAcuity || "");
      setAllergies(patient.allergies || "");
      setMedications(patient.medications || "");
      setPrescriptions(patient.prescriptions || "");
    }
  }, [patient]);

  // Handle input changes
  const handleTemperatureChange = (e) => setTemperature(e.target.value);
  // const handleBloodPressureChange = (e, type) => setBloodPressure(prev => ({ ...prev, [type]: e.target.value }));
  // const handleBloodPressureChange = (e, type) => {
  //   const value = e.target.value;
  //   setBloodPressure(prev => ({ ...prev, [type]: value }));
  // };
  const handleBloodTypeChange = (e, type) => setBloodType(prev => ({ ...prev, [type]: e.target.value }));
  const handlePulseRateChange = (e, type) => setPulseRate(prev => ({ ...prev, [type]: e.target.value }));
  const handleBloodOxygenChange = (e, type) => setBloodOxygen(prev => ({ ...prev, [type]: e.target.value }));
  const handleHeightChange = (e, type) => setHeight(prev => ({ ...prev, [type]: e.target.value }));
  const handleWeightChange = (e, type) => setWeight(prev => ({ ...prev, [type]: e.target.value }));
  const handleVisualAcuityChange = (e, type) => setVisualAcuity(prev => ({ ...prev, [type]: e.target.value }));
  const handleAllergiesChange = (e, type) => setAllergies(prev => ({ ...prev, [type]: e.target.value }));
  const handleMedicationsChange = (e, type) => setMedications(prev => ({ ...prev, [type]: e.target.value }));
  const handlePrescriptionsChange = (e, type) => setPrescriptions(prev => ({ ...prev, [type]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let updatedPatient = {};

    // if (editField === 'bloodPressure') { updatedPatient = { bloodPressure: { systolic: bloodPressure.systolic || '', diastolic: bloodPressure.diastolic || ''} } };
    if (editField === 'temperature') { updatedPatient = { temperature: temperature, updated_date: new Date() } };
    if (editField === 'bloodType') { updatedPatient = { bloodType: bloodType, updated_date: new Date() } };
    if (editField === 'pulseRate') { updatedPatient = { heartRate: pulseRate, updated_date: new Date() } };
    if (editField === 'bloodOxygen') { updatedPatient = { bloodOxygen: bloodOxygen, updated_date: new Date() } };
    if (editField === 'height') { updatedPatient = { height: height, updated_date: new Date() } };
    if (editField === 'weight') { updatedPatient = { weight: weight, updated_date: new Date() } };
    if (editField === 'visualAcuity') { updatedPatient = { visualAcuity: visualAcuity, updated_date: new Date() } };
    if (editField === 'allergies') { updatedPatient = { allergies: allergies, updated_date: new Date() } };
    if (editField === 'medications') { updatedPatient = { medications: medications, updated_date: new Date() } };
    if (editField === 'prescriptions') { updatedPatient = { prescriptions: prescriptions, updated_date: new Date() } };

    try {
      const response = await dispatch(updatePatientProfile(id, updatedPatient));
      if (response.success) {
        toast.success('Profile updated successfully!');

        // Reset the form inputs
        setTemperature('');
        // setBloodPressure({ systolic: '', diastolic: '' });
        setBloodType('');
        setPulseRate('');
        setBloodOxygen('');
        setHeight('');
        setWeight('');
        setVisualAcuity('');
        setAllergies('');
        setMedications('');
        setPrescriptions('');
        setEditField('');
        setShowTemp(false);
        setShowBloodPressure(false);
        setShowBloodType(false);
        setShowPulseRate(false);
        setShowBloodOxygen(false);
        setShowHeight(false);
        setShowWeight(false);
        setShowVisualAcuity(false);
        setShowAllergies(false);
        setShowMedications(false);
        setShowPrescriptions(false);

        dispatch(loadPatient(id)); // Reload the patient data
        dispatch(loadHealthHistory(id))
        setShowEditModal(false); // Close the modal
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
          <form>
            <div className='flex items-start justify-between md:px-12 lg:px-0 gap-[2rem] md:gap-9 lg:flex-wrap xs:flex-wrap mt-5 md:flex-nowrap'>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <TbClockHeart className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Temperature</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.temperature || '- -'}</h2>
                        <span className='text-[13px] mt-2 font-Mulish font-normal'>degree Celsius</span>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('temperature')} />
                    {showTemp ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowTemp(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowTemp(true)} />}
                  </div>
                </div>
                {healthHistory ? (
                  <>
                    {showTemp && (
                      <div className='py-[20px] px-[20px]'>
                        <h2 className='text-[16px] font-Mulish font-medium text-center'>No Chart Data</h2>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {
                      showTemp && (
                        <div className='mt-5 px-[20px]'>
                          <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                          <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                            <div>
                              {
                                healthHistory && healthHistory.map(item => (
                                  <div className='flex items-start gap-[20px]'>
                                    <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                    <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                    <div className='mt-3'>
                                      <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                      <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.temperature}</h2>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </>
                )}

              </div>
              {/* <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <FaTemperatureHalf className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Blood pressure</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.temperature || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('blood Pressure')} />
                    {showBloodPressure ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowBloodPressure(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowBloodPressure(true)} />}
                  </div>
                </div>
                {
                  showBloodPressure && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.bloodPressure}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div> */}
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <MdOutlineBloodtype className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Blood type</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.bloodType || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('blood Type')} />
                    {showBloodType ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowBloodType(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowBloodType(true)} />}
                  </div>
                </div>
                {
                  showBloodType && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.bloodType}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <IoIosPulse className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Pulse rate</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.pulseRate || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('pulse Rate')} />
                    {showPulseRate ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowPulseRate(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowPulseRate(true)} />}
                  </div>
                </div>
                {
                  showPulseRate && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.pulseRate}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <FaPrescriptionBottle className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Blood Oxygen</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.bloodOxygen || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('blood Oxygen')} />
                    {showBloodOxygen ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowBloodOxygen(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowBloodOxygen(true)} />}
                  </div>
                </div>
                {
                  showBloodOxygen && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.bloodOxygen}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <FaPersonArrowUpFromLine className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Height</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.height || '- -'}</h2>
                        <span className='text-[13px] mt-2 font-Mulish font-normal'>Cm</span>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('height')} />
                    {showHeight ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowHeight(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowHeight(true)} />}
                  </div>
                </div>
                {
                  showHeight && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.height}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <TbScaleOutline className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Weight</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.weight || '- -'}</h2>
                        <span className='text-[13px] mt-2 font-Mulish font-normal'>Kg</span>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('weight')} />
                    {showWeight ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowWeight(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowWeight(true)} />}
                  </div>
                </div>
                {
                  showWeight && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.weight}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <FaRegEye className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Visual Acuity</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.visualAcuity || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('visual Acuity')} />
                    {showVisualAcuity ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowVisualAcuity(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowVisualAcuity(true)} />}
                  </div>
                </div>
                {
                  showVisualAcuity && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.visualAcuity}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <LiaAllergiesSolid className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Allergies</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.allergies || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('allergies')} />
                    {showAllergies ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowAllergies(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowAllergies(true)} />}
                  </div>
                </div>
                {
                  showAllergies && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.allergies}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <CiMedicalMask className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Medications</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.medications || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('medications')} />
                    {showMedications ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowMedications(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowMedications(true)} />}
                  </div>
                </div>
                {
                  showMedications && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.medications}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className='lg:w-[45%] xs:w-full border border-[#f3f3f3] p-3 rounded-[5px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end gap-[10px]'>
                    <MdMedicationLiquid className='text-[#384D6C] text-[28px] font-normal' />
                    <span>
                      <h2 className='text-[#384D6C] font-Mulish font-medium text-[17px]'>Prescriptions</h2>
                      <span className='flex gap-[10px] mt-2'>
                        <h2 className='text-[15px] font-bold font-Mulish'>{healthHistory?.prescriptions || '- -'}</h2>
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <MdEdit className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => handleEditClick('prescriptions')} />
                    {showPrescriptions ? <FaChevronUp className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowPrescriptions(false)} /> : <FaChevronDown className='text-[22px] text-[#384D6C] cursor-pointer' onClick={() => setShowPrescriptions(true)} />}
                  </div>
                </div>
                {
                  showPrescriptions && (
                    <div className='mt-5 px-[20px]'>
                      <h2 className='font-Mulish text-[15px] font-bold'>History</h2>
                      <div className='mt-2 px-[20px] h-[150px] overflow-y-auto' style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
                        <div>
                          {
                            healthHistory && healthHistory.map(item => (
                              <div className='flex items-start gap-[20px]'>
                                <hr className='h-[60px] w-[5px] rounded-full bg-[#eee]' />
                                <span className=' bg-[#384D6C] rounded-full w-[10px] h-[10px] mt-4 -ms-[1.7rem]' />
                                <div className='mt-3'>
                                  <h2 className='text-[11px] text-[#3b3b3b] font-Mulish font-normal'>{new Date(item?.updated_date).toLocaleDateString()}</h2>
                                  <h2 className='text-[12px] font-Mulish font-medium mt-1'>{item?.prescriptions}</h2>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </form>
        </section>
      </div>
      {/* Edit Modal */}
      <HealthModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleSubmit}
        field={editField}
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
        // bloodPressure={bloodPressure}
        // onBloodPressureChange={handleBloodPressureChange}
        bloodType={bloodType}
        onBloodTypeChange={handleBloodTypeChange}
        pulseRate={pulseRate}
        onPulseRateChange={handlePulseRateChange}
        bloodOxygen={bloodOxygen}
        onBloodOxygenChange={handleBloodOxygenChange}
        height={height}
        onHeightChange={handleHeightChange}
        weight={weight}
        onWeightChange={handleWeightChange}
        visualAcuity={visualAcuity}
        onVisualAcuityChange={handleVisualAcuityChange}
        allergies={allergies}
        onAllergiesChange={handleAllergiesChange}
        medications={medications}
        onMedicationsChange={handleMedicationsChange}
        prescriptions={prescriptions}
        onPrescriptionsChange={handlePrescriptionsChange}
      />

    </div>
  )
}

export default HealthProfile