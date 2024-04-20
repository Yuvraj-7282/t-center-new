let valueArr = [];
const useCart = () => ({
  addItemToCart: (value) => {
    const checkArr = valueArr.some((item) => item.id == value.id);

    if (!checkArr) {
      valueArr.push(value);
    } else {
      throw Error("already exists in cart");
    }

    localStorage.setItem("cart", JSON.stringify(valueArr));

    return JSON.parse(localStorage.getItem("cart"));
  },

  getCartItems: () => {
    return JSON.parse(localStorage.getItem("cart"));
  },

  removeItemFromCart: (id) => {
    valueArr = valueArr.filter((item) => item.id != id);
    localStorage.setItem("cart", JSON.stringify(valueArr));
  },
});

export { useCart };
