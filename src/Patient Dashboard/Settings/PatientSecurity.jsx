import QRCodePage from '@/Landing Page/Auth/Patient/QRCodePage';
import VerifyPassword from '@/Landing Page/Auth/Patient/VerifyPassword';
import { disable2SV, enable2SV, forgot_password, loadPatient, verify2FA } from '@/Redux/Actions/PatientActions';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const PatientSecurity = () => {
  const { id } = useParams();
  // const doctor = useSelector((state) => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor)
  const patient = useSelector((state) => state.loadPatient.patient);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const { loading } = useSelector((state) => state.patientForgetPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = patient?.email;
  const [showModal, setShowModal] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false)
  const [otp, setOtp] = useState('')
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {
    dispatch(loadPatient());
  }, [dispatch])

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      const body = {
        email: email.trim(),
      };
      dispatch(forgot_password(body, navigate));
    } else {
      toast.error('Please enter your email address.');
    }
  };

  const handleEnable2SV = async () => {
    try {
      const result = await dispatch(enable2SV(patient?._id));
      setQrCodeUrl(result.qrCodeUrl); // Set QR Code URL received from backend
      setSecret(result.secret); // Set the secret key for manual input
      setShowQRCode(true);
      toast.success('2-Step Verification enabled. Scan the QR code with your authenticator app.');
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to enable 2-Step Verification.');
    }
  };

  const handleDisable2SV = async () => {
    try {
      await dispatch(disable2SV(patient?._id));
      setQrCodeUrl('');
      toast.success('2-Step Verification disabled.');
      window.location.reload();
    } catch (error) {
      toast.error('Failed to disable 2-Step Verification.');
    }
  };

  // const handleQRCode = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await dispatch(verify2FA(otp, patient?._id)); // Dispatch 2SV verification action
  //     setShowQRCode(false);
  //     setTimeout(() => {
  //       toast.success('you have successfully turned ON Two-Factor Authentication.')
  //     }, 5000);
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleQRCode = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous error
  
    try {
      const result = await dispatch(verify2FA(otp, patient?._id));
      
      // Check if the action was successful by checking for errors in the result
      if (result.error) {
        // The action dispatched an error
        throw new Error(result.error); // Use the error returned by the action
      }
      
      if (result.success) { 
        setShowQRCode(false);
        toast.success('You have successfully turned ON Two-Factor Authentication.');
        window.location.reload();
      }
    } catch (error) {
      setError(error.message || 'The OTP code you entered is incorrect. Please try again.');
      setShowQRCode(true); // Keep the QR code modal open
    }
  };

  return (
    <div>
      <div className='lg:px-[30px] xs:px-[10px] mt-[5rem]'>
        <div className='mt-[3rem]'>
          <h1 className='text-[25px] font-Nunito font-bold leading-[10px]'>Authorization</h1>
          <p className='mt-[2rem] lg:text-[19px] xs:text-[17px] font-Nunito font-medium lg:leading-[40px]'>Information for login in to your Caresync account</p>
          <p className='lg:text-[19px] xs:text-[17px] lg:mt-0 xs:mt-3 font-Nunito font-medium lg:leading-[40px]'>Regularly change your password if you suspect it may have been compromised</p>
        </div>
        <div className='border border-gray-400 rounded-lg mt-[3rem] mb-[3rem]'>

          <div className='flex border-b-2 border-b-gray-400 lg:gap-[29rem] xs:gap-[9rem] py-4 px-4'>
            <h2 className='text-[16px] font-Mulish font-semibold tracking-wide text-left'>Email</h2>
            <h2 className='text-[16px] font-Mulish font-semibold tracking-wide text-left'>user....@gmail.com</h2>
          </div>
          <div className='flex justify-between items-center py-[10px] px-4'>
            <h2 className='text-[14px] font-Mulish font-normal'>Password</h2>
            <h2 className='text-[14px] font-Mulish font-normal'>************</h2>
            <button className='bg-[#A9A9A9] w-[100px] px-[10px] py-[5px] rounded-[6px]'><p className='text-white'>Change</p></button>
          </div>

        </div>

        <div className='mt-[3.5rem]'>
          <h1 className='text-[25px] font-Mulish font-bold leading-[10px]'>2-Step verification</h1>
          <h2 className='mt-[3rem] lg:text-[19px] xs:text-[17px] font-Mulish font-medium lg:leading-[3rem]'>2-Step Verification ensures that all sensitive transaction are authorized by you.</h2>
        </div>

        <div className='flex justify-between items-center border border-gray-400 py-[15px] lg:px-4 xs:px-2 rounded-lg mt-[3rem] mb-[3rem]'>
          <h3 className='text-[15px] font-Mulish font-medium'>Security Type</h3>
          <h3 className='text-[15px] font-Mulish font-medium'>Authenticator App</h3>
          {patient?.is2SVEnabled ? (
            <div className="flex flex-col items-center">
              <button className='bg-[#A9A9A9] w-[100px] px-[10px] py-[7px] rounded-[6px] font-Mulish font-medium text-[15px]' onClick={handleDisable2SV}>
                <p className='text-white'>Disable</p>
              </button>
            </div>
          ) : (
            <button className='bg-[#22D1EE] w-[100px] px-[10px] py-[7px] rounded-[6px] font-Mulish font-medium text-[15px]' onClick={() => setShowModal(true)}>
              <p className='text-white'>Enable</p>
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <VerifyPassword setShowModal={setShowModal} handleEnable2SV={handleEnable2SV} patient={patient} />
      )}

      {showQRCode && (
        <QRCodePage 
          setShowQRCode={setShowQRCode} 
          qrCodeUrl={qrCodeUrl} 
          handleQRCode={handleQRCode} 
          setOtp={setOtp} 
          otp={otp} 
          secret={secret} 
          error={error}
        />
      )}
    </div>
  )
}

export default PatientSecurity