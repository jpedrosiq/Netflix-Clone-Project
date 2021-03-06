import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, CLEAR_SESSION_ERRORS } from "../actions/session_actions";

// making the code cleaner by creating a constant for when the user is null
// this way, the sessionReducer should maintain its own default state
const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionReducer;