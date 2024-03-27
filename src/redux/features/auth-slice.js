import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        username: null,
        uid: null,
        isAdmin: false,
        isAuth: false
    }

}


export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },

        logIn: (state, action) => {
            return {
                value: {
                    username: action.payload.username,
                    uid: action.payload.uid,
                    isAdmin: action.payload.isAdmin,
                    isAuth: true
                }
            }
        }
    }
})

export const { logIn, logOut } = auth.actions;
export default auth.reducer;