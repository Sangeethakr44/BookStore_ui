import { createContext, useEffect, useState } from "react";
import { book_list } from "../assets/assets";

export const StoreContext = createContext(null);

const storeContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // backend URL
  const url = "http://localhost:4312";

  const [token, setToken] = useState("");
  const [book_list_, setBook_list] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    // For cart item -- Post

    // if(token) {
    //   await .post(url+"/api/cart/add", {itemId},{headers: {token}})
    // }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    // For cart item remove
    // if(token) {
    //   await post(url+"/api/cart/remove", {itemId}, {headers:{token}})
    // }
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = book_list.find((product) => product.id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // const fetchBookList = async () => {
  //   const response = await axios.get(url + "/api/")
  //   setBook_list_(response.data.)
  // }

  // const loadCartData = async (token) => {
  //   const response = await postMessage(url + "/api/cart/get",{}, {headers: {token}});
  //   setCartItems(response.data. ...);
  // }

  // Login after the refresh
  //

  // useEffect(() => {

  //   async function loadData() {
  //     await fetchBookList();
  //     if (localStorage.getItem("token")) {
  //       setToken(localStorage.getItem("token"));
  //       await loadCartData(localStorage.getItem("token"))
  //     }
  //   }
  //   loadData();
  // }, []);

  //
  //login after refresh end

  const contextValue = {
    book_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default storeContextProvider;
