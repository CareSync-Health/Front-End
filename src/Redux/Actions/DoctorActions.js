import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"

const url = config.liveUrl

export const doctor_register = (body, navigate) => async (dispatch) => {
	try {
		dispatch({ type: types.ADMIN_AUTH_REQUEST })

		const { data } = await axios.post(`${url}/admin/`, body)
		if (data.status === 'ok') {
			dispatch({ type: types.ADMIN_AUTH_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
			navigate('/admindashboard');
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'

		dispatch({ type: types.ADMIN_AUTH_FAIL, payload: message })
	}
}