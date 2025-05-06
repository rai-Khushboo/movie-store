import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name : "",
  email : "",
  photo : "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        setUserLoginDetails : (state , action) => {
            //when the user logs in , need to remember these details
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOutState : (state) => {
            //when the user logs out, clear details
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// for getting access to anywhere in the file
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
    
export default userSlice.reducer;
