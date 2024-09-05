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
        //  else if (videoCall.type === "in-coming") {
        //     // Handle incoming call, if necessary
        // }
    }, [videoCall, socket, doctor]);

  return <Container data={videoCall} />;
}

export default VideoCall