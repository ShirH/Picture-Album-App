import {CHANGE_MODAL_STATE} from '../actions/index';

export default function(state=false, action){
    switch (action.type){
        case CHANGE_MODAL_STATE:
            return action.payload;
        default:
            return state;
    }
}