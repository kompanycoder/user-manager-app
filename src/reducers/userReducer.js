export default function (state={}, action) {
    switch(action.type){
        case 'GET_USERS':
            return {...state, users:action.payload};
        case 'GET_SINGLE_USER':
            return {...state, user: action.payload};    
        case 'EDIT_USER':
            return {...state, user:action.payload}
        default:
        return state;
    }
}