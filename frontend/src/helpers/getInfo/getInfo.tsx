import axios from "axios";

export const getSpecificItemInfo = async (itemId: number) => {

  const URL =`${process.env.REACT_APP_BACKEND_URL}/inventory/getSpecificItemsInfo`;

  const options = {
    params: {
      itemId: itemId,
    }
  }

  axios.get(URL, options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
};

