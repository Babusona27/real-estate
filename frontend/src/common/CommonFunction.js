import { BASE_URL, POST_ADD_WISHLIST_API } from "./urls";

export const PostApiFetch = async (URL, formData, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  };
  console.log("headers => ", headers);
  return await fetch(BASE_URL + URL, {
    method: "POST",
    headers: headers,
    body: formData,
  }).then((response) => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  });
};

export const GetApiFetch = async (URL, params = "") => {
  return await fetch(BASE_URL + URL + params, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  });
};


// ==================== Add to Wishlist ====================

export const addToWishlist = async (propertyId, propertyName, propertyImage, propertyPrice, token) => {
 
  const formData = JSON.stringify({
    property_id: propertyId,
    property_name: propertyName,
    property_image: propertyImage,
    propertyPrice: propertyPrice
  });
  console.log("formData => ", formData);
  return PostApiFetch(POST_ADD_WISHLIST_API, formData, token)
    .then(([status, response]) => {
      console.log("addToWishlist => " + status, response);
      // if (status == 200) {
      //   var wishlistData = null
      //   if (response.status == true) {
      //     var wishlistData = response
      //     return Promise.all([wishlistData]);
      //   } else {
      //     return Promise.all([wishlistData]);
      //   }
      // }
    })
}