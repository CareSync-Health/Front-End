import axios from "axios";
import { config } from "../Config";

const url = config.liveUrl

export const userChats = (id) => axios.get(`${url}/chat/${id}`)