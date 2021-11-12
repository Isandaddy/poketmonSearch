//action에 성공했을 경우/실패 경우
//action name
export const POKETMON_SUCCESS = 'POKETMON_SUCCESS'
export const POKETMON_FAIL = 'POKETMON_FAIL ' 

export type poketmonType = {
    abilities : poketmonAbility[],
    name: string,
    order: number,
    sprites : poketmonSprites,
    types : poketmonTypes[],
    weight : number
}

export type poketmonAbility = {
    ability: {
        name: string
        url: string
    },
    is_hidden : boolean
    slot : number    
}

export type poketmonTypes = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

export type poketmonSprites = {
    front_default : string
}

export interface poketmonFailDispatch {
    type : typeof POKETMON_FAIL
}

export interface poketmonSuccessDispatch {
    type : typeof POKETMON_SUCCESS,
    payload : {
        abilities : poketmonAbility[]
        name: string
        order: number
        sprites : poketmonSprites
        types : poketmonTypes[]
        weight : number
    } 
}

export type poketmonDispatchType = poketmonSuccessDispatch | poketmonFailDispatch