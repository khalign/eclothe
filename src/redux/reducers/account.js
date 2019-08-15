const INITIAL_STATE = {
    user: null
};

export default function  (state = INITIAL_STATE, {type, payload}) {
    switch(type) {
        case 'SET_USER':
            return {...state, user:payload};
        default:
            return state;
    }
} 