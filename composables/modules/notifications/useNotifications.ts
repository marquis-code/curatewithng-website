import { ref, onMounted, onUnmounted } from 'vue';
import { io, Socket } from 'socket.io-client';
import { useUser } from '../auth/user';
import { useRuntimeConfig } from '#app';

export const useNotifications = () => {
  const { user, token } = useUser();
  const config = useRuntimeConfig();
  const socket = ref<Socket | null>(null);
  const unreadCount = ref(0);
  const notifications = ref<any[]>([]);

  const connectSocket = () => {
    if (!token.value) return;

    socket.value = io(config.public.apiBase, {
      auth: { token: token.value }
    });

    socket.value.on('connect', () => {
      console.log('Connected to realtime notifications');
    });

    socket.value.on('new_notification', (data) => {
      unreadCount.value++;
      notifications.value.unshift(data);
      // Here you could also trigger a Toast plugin
    });
  };

  const disconnectSocket = () => {
    if (socket.value) {
      socket.value.disconnect();
      socket.value = null;
    }
  };

  const fetchUnreadCount = async () => {
    if (!token.value) return;
    try {
      const { data } = await useFetch<any>(`${config.public.apiBase}/notifications/unread-count`, {
        headers: { Authorization: `Bearer ${token.value}` }
      });
      if (data.value) {
        unreadCount.value = data.value.count;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchNotifications = async (page = 1) => {
    if (!token.value) return;
    try {
      const { data } = await useFetch<any>(`${config.public.apiBase}/notifications?page=${page}&limit=20`, {
        headers: { Authorization: `Bearer ${token.value}` }
      });
      if (data.value?.data) {
        if (page === 1) notifications.value = data.value.data;
        else notifications.value.push(...data.value.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const markAsRead = async (id: string) => {
    if (!token.value) return;
    try {
      await useFetch(`${config.public.apiBase}/notifications/${id}/read`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token.value}` }
      });
      const index = notifications.value.findIndex(n => n._id === id);
      if (index !== -1 && !notifications.value[index].isRead) {
        notifications.value[index].isRead = true;
        unreadCount.value = Math.max(0, unreadCount.value - 1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const markAllAsRead = async () => {
    if (!token.value) return;
    try {
      await useFetch(`${config.public.apiBase}/notifications/read-all`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token.value}` }
      });
      notifications.value.forEach(n => n.isRead = true);
      unreadCount.value = 0;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    socket,
    unreadCount,
    notifications,
    connectSocket,
    disconnectSocket,
    fetchUnreadCount,
    fetchNotifications,
    markAsRead,
    markAllAsRead
  };
};
