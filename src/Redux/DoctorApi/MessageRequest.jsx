import axios from "axios";
import { config } from "../Config";

const url = config.liveUrl

export const getMessages = (id) => axios.get(`${url}/message/${id}`)

export const addMessage = (data) => axios.post(`${url}/message/`, data)
