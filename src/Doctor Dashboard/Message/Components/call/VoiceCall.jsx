import React, { useEffect } from 'react'
import Container from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '@/Redux/context/SocketContext';
import { setSelectedChatMessages } from '@/Redux/Actions/DoctorActions';

const VoiceCall = () => {
    const { selectedChatData, voiceCall, selectedChatMessages } = useSelector((state) => state.createChat);
    const doctor = useSelector(state => state.doctorAuth.doctor || state.doctorVerifyOtp.doctor);
    const socket = useSocket();
    const dispatch = useDispatch()

    useEffect(() => {
      if (voiceCall.type === "out-going") {
          socket.emit("outgoing-voice-call", {
              to: voiceCall.id,
              from: {
                  id: doctor?._id,
                  firstName: doctor?.firstName,
                  lastName: doctor?.lastName,
                  profilePic: doctor?.profilePic,
              },
              callType: voiceCall.callType,
              roomId: voiceCall.roomId,
          });
      } else if (voiceCall.type === "in-coming") {
          // Handle incoming call, if necessary
      }
  }, [voiceCall, socket, doctor]);

    return <Container data={voiceCall} />;
}

export default VoiceCall