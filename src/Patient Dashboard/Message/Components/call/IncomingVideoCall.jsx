import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../../../assets/avatar.png'
import * as types from '../../../../Redux/Types'
import { useSocket } from '@/Redux/context/SocketContext';
import ringtone from '../../../../assets/ringtone.mp3'

const IncomingVideoCall = () => {
    const incomingVideoCall = useSelector((state) => state.createChat.incomingVideoCall);
    const dispatch = useDispatch();
    const socket = useSocket();

    if (!incomingVideoCall) return null; // Only render if there is an incoming call

    const acceptCall = () => {
        dispatch({
            type: types.SET_VIDEO_CALL,
            videoCall: { ...incomingVideoCall, type: "in-coming" },
        });
        dispatch({
            type: types.SET_INCOMING_VIDEO_CALL,
            incomingVideoCall: undefined,
        });

        // Emit event to notify the caller that the call has been accepted
        socket.emit("accept-incoming-call", {
            roomId: incomingVideoCall.roomId,
            callType: incomingVideoCall.callType,
        });
    }

    const rejectCall = () => {
        dispatch({
            type: types.SET_INCOMING_VIDEO_CALL,
            incomingVideoCall: undefined, // Clears the incoming call state
        });
    
        socket.emit("reject-video-call", { from: incomingVideoCall.id });
        dispatch({
            type: types.END_CALL, // Ends the call
        });
    
        // Emit event to notify the caller that the call has been rejected
        socket.emit("video-call-rejected", {
            roomId: incomingVideoCall.roomId, // Notify the server about the rejection
        });
    }

    return (
        <div className={`h-24 w-80 fixed lg:bottom-8 xs:bottom-24 mb-0 right-6 z-[1000] rounded-sm flex gap-5 items-center px-4 justify-start drop-shadow-2xl border-green-800 border-2 py-[4.2rem] bg-[#FFFCF8]`}>
            <div>
                <div className='flex items-center justify-start gap-[1rem]'>
                    <img
                        src={incomingVideoCall.profilePic || avatar} alt='avatar'
                        className='rounded-full w-[70px] h-[70px] object-cover'
                    />
                    <div>
                        <div className='text-[18px] font-Nunito font-bold'>{incomingVideoCall?.firstName} {incomingVideoCall?.lastName}</div>
                        <div className='text-[12px] text-start font-Nunito font-medium'>Incoming Video Call</div>
                    </div>
                </div>
                <audio src={ringtone} autoPlay loop />

                <div>
                    <div className="flex gap-[2rem] mt-3 px-[10px]">
                        <button className='bg-red-500 p-1 px-7 text-sm rounded-full font-Nunito font-normal' onClick={rejectCall}>
                            Reject
                        </button>
                        <button className='bg-green-500 p-1 px-7 text-sm rounded-full font-Nunito font-normal' onClick={acceptCall}>
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomingVideoCall