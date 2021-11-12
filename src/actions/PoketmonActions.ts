import axios from "axios";
import {Dispatch} from 'redux'
import { poketmonDispatchType, POKETMON_SUCCESS, POKETMON_FAIL } from "./PoketmonActionTypes";

export const fetchPoketmonData = (poketmonName:string) => async (dispatch: Dispatch<poketmonDispatchType>) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poketmonName}`)
        const data = res.data

        dispatch({
            type: POKETMON_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POKETMON_FAIL
        })
    }
}