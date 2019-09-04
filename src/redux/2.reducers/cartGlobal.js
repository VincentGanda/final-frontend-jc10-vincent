const INITIAL_STATE = {cartLength : 0}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CARTING':
            return {...INITIAL_STATE, cartLength: action.payload.cartLength}
        default:
            return state
    }
}