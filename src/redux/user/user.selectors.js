import { createSelector } from 'reselect';

//creating the input selector
const selectUser = state => state.user;


//creating th memorized selected user
export const selectCurrentUser = createSelector([selectUser],
    (user) => user.currentUser
    );