import { useTheme } from '@/Doctor Dashboard/Components/ThemeContext';
import React, { useState } from 'react';

const QRCodePage = ({ qrCodeUrl, handleQRCode, otp, setOtp, secret, error }) => {
    const { theme, appearance } = useTheme();
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[1000]">
            <div className={`lg:p-6 xs:p-4 rounded-md lg:w-auto xs:w-[95vw] overflow-scroll ${theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-[#E2F3F5]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <form onSubmit={handleQRCode}>
                    <h2 className="text-[19px] font-Mulish font-bold">Enable 2-Step Verification</h2>
                    <p className='mt-2 text-[13px] font-Mulish font-normal'>Scan the QR code below using your Google Authenticator app:</p>
                    <div className='flex items-center justify-center'>
                        <img src={qrCodeUrl} alt="2SV QR Code" className="w-[280px] h-[280px] mb-2 mt-[1.5rem]" />
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-[13px] font-Mulish font-normal'>If you can't use the QR code. <span className='text-red-500 cursor-pointer' onClick={() => setShowCode(true)}>enter this text code</span> instead.</h2>
                        {showCode && (
                            <h2 className='text-[14px] w-[20px] font-Mulish tracking-widest'>{secret}</h2>
                        )}
                    </div>
                    {error && <p className="text-red-500 text-[13px] font-Mulish font-medium">{error}</p>}
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                setOtp(value);
                            }
                        }}
                        maxLength={6}
                        className="border p-2 w-full text-black mt-[1rem] font-Mulish font-normal text-[15px] outline-none"
                        placeholder="Enter authentication code"
                        required
                    />
                    <div className="mt-4 flex gap-[1rem] justify-end">
                        <button type="submit" className="bg-[#22D1EE] text-white px-[40px] py-2 rounded-md font-Mulish text-[17px] font-medium">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QRCodePage;