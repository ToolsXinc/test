import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appTheme:"white",
  appTextColor:"black",
  SideBarState:true,

}

const  AppState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppTheme: (state,action) => {     
      state.appTheme = action.payload;
   },
   setAppTextColor: (state,action) => {     
    state.appTextColor = action.payload;
 },
   setSideBarState: (state,action) => {     
    state.SideBarState = action.payload;
 }
   
  },
})

// Action creators are generated for each case reducer function
export const {setAppTheme,setSideBarState,setAppTextColor} = AppState.actions

export default AppState.reducer