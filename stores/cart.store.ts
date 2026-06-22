import { defineStore } from 'pinia';
import type { CartItem, Gift } from '~/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalAmount: (state) => state.items.reduce((sum, item) => {
      const price = item.gift.discountPrice || item.gift.price;
      return sum + price * item.quantity;
    }, 0),
    isEmpty: (state) => state.items.length === 0,
  },

  actions: {
    addItem(gift: Gift, quantity: number = 1) {
      const existing = this.items.find((item) => item.gift._id === gift._id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push({ gift, quantity });
      }
      this.saveToLocal();
    },

    removeItem(giftId: string) {
      this.items = this.items.filter((item) => item.gift._id !== giftId);
      this.saveToLocal();
    },

    updateQuantity(giftId: string, quantity: number) {
      const item = this.items.find((item) => item.gift._id === giftId);
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
      if (import.meta.client) {
        localStorage.setItem('cwng-cart', JSON.stringify(this.items));
      }
    },

    loadFromLocal() {
      if (import.meta.client) {
        const saved = localStorage.getItem('cwng-cart');
        if (saved) {
          try {
            this.items = JSON.parse(saved);
          } catch {
            this.items = [];
          }
        }
      }
    },
  },
});
