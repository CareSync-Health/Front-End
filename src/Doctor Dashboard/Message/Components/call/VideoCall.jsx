import React, { useEffect } from 'react';
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '@/Redux/context/SocketContext';

const VideoCall = () => {
    const { videoCall } = useSelector((state) => state.createChat);
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const socket = useSocket();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!videoCall || !doctor) {
            return;
        }

        if (videoCall.type === "out-going") {
            socket.emit("outgoing-video-call", {
                to: videoCall.id,
                from: {
                    id: doctor?._id,
                    firstName: doctor?.firstName,
                    lastName: doctor?.lastName,
                    profilePic: doctor?.profilePic,
                },
                callType: videoCall.callType,
                roomId: videoCall.roomId,
            });
        }
        
        // Handle incoming calls if needed
        // if (videoCall.type === "in-coming") {
        //     // Handle incoming call logic here
        // }

        // Cleanup function to remove socket listeners if needed
        return () => {
            // Example cleanup (if any socket listeners were set up)
            // socket.off("some-event");
        };
    }, [videoCall, socket, doctor, dispatch]);

    return (
        // Render the Container component with the videoCall data
        <Container data={videoCall} />
    );
}

export default VideoCall;
