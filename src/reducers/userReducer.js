export default function (state=[], action) {
    switch(action.type){
        case 'Get_User':
            return { ...state, login:action.payload};
        default:
        return state;
    }
}