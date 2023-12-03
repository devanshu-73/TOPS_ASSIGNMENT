import axios from "axios";

// reusable function/actions

// for adding the data
export const insert = (api, object) => {
   return function () {
      axios.post(api, object);
   }
}

// for deleting the data
export const deleteData = (api) => {
   return function () {
      axios.delete(api);
   }
}

// for updating the data
export const updateData = (api, object) => {
   return function () {
      axios.patch(api, object);
   }
}
