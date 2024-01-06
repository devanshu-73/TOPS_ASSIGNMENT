import axios from "axios";

// action types
const ALLDATA = "ALLDATA";
const SINGLEDATA = "SINGLEDATA";

// creating object for our reducer
const userObject = {
   allUser: [],
   singleUser: [],
   name: "Tirth Rathod"
};

// reducer
const userReducer = (state = userObject, action) => {

   // condition over which type is called and performing the action
   switch (action.type) {
      case ALLDATA:
         return {
            ...state,
            allUser: action.payload
         }

      case SINGLEDATA:
         return {
            ...state,
            singleUser: action.payload
         }
   }
   return state;
}

export default userReducer;

// setting up the payload data for ALLDATA
const getData = (data) => ({ type: ALLDATA, payload: data });

// creating a reusable function for fetching all the data
// which will also set the data to our reducer function
export const fetchUser = (api) => {
   return function (dispatch) {
      axios.get(api)
         .then((res) => { dispatch(getData(res.data)) });
   }
}

// setting up the payload data for SINGLEDATA
const getSingleData = (data) => ({ type: SINGLEDATA, payload: data });

// creating a reusable function for fetching single user data
export const fetchSingleUser = (api) => {
   return function (dispatch) {
      axios.get(api)
         .then((res) => { dispatch(getSingleData(res.data)) });
   }
}


