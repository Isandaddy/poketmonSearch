import { POKETMON_SUCCESS, POKETMON_FAIL, poketmonType, poketmonDispatchType } from './../actions/PoketmonActionTypes';
interface initialState {
    success : boolean,
    poketmon? : poketmonType,
}

const initialState: initialState = {
    success : false,
    
};

const PoketmonReducer = (state = initialState, action:poketmonDispatchType): initialState => {
    switch (action.type) {
        case POKETMON_FAIL:
            return {
                ...state,
                success : false
            }
        case POKETMON_SUCCESS:
            const {abilities, name, order, sprites, types, weight} = action.payload
            return {
                ...state,
                success : true,
                poketmon : {
                    abilities,
                    name,
                    order,
                    sprites,
                    types,
                    weight
                }
            }
        
        default:
            return state;
    }
}

export default PoketmonReducer