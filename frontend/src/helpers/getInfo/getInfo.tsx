import axios from "axios";

export const getSpecificItemInfo = async (itemId: number) => {

  const URL =`/api/inventory/getSpecificItemsInfo`;

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

