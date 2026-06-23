import { g as defineStore } from "../server.mjs";
const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalAmount: (state) => state.items.reduce((sum, item) => {
      const price = Number(item.gift?.discountPrice) || Number(item.gift?.price) || 0;
      const quantity = Number(item.quantity) || 1;
      return sum + price * quantity;
    }, 0),
    isEmpty: (state) => state.items.length === 0
  },
  actions: {
    addItem(gift, quantity = 1) {
      const existing = this.items.find((item) => item.gift._id === gift._id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push({ gift, quantity });
      }
      this.saveToLocal();
    },
    removeItem(giftId) {
      this.items = this.items.filter((item) => item.gift._id !== giftId);
      this.saveToLocal();
    },
    updateQuantity(giftId, quantity) {
      const item = this.items.find((item2) => item2.gift._id === giftId);
      if (item) {
        item.quantity = Math.max(1, quantity);
        this.saveToLocal();
      }
    },
    clearCart() {
      this.items = [];
      this.saveToLocal();
    },
    saveToLocal() {
    },
    loadFromLocal() {
    }
  }
});
export {
  useCartStore as u
};
//# sourceMappingURL=cart.store-B02bp-DA.js.map
