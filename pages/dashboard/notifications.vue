<template>
  <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm animate-fade-in">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-xl font-heading font-bold text-slate-900 mb-1">Notifications</h2>
        <p class="text-sm text-slate-500">Stay updated on your orders and requests</p>
      </div>
      <button 
        v-if="unreadCount > 0"
        @click="markAllAsRead"
        class="text-sm font-semibold text-primary-800 hover:bg-primary-50 px-4 py-2 rounded-lg transition-colors"
      >
        Mark all as read
      </button>
    </div>

    <div v-if="notifications.length === 0" class="text-center py-12">
      <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Bell class="w-8 h-8 text-slate-300" />
      </div>
      <h3 class="text-lg font-semibold text-slate-900 mb-1">All caught up!</h3>
      <p class="text-sm text-slate-500">You have no new notifications.</p>
    </div>

    <div v-else class="space-y-4">
      <div 
        v-for="notification in notifications" 
        :key="notification._id"
        @click="handleNotificationClick(notification)"
        class="p-5 rounded-2xl border transition-all cursor-pointer hover:shadow-md"
        :class="[notification.isRead ? 'bg-white border-slate-100' : 'bg-primary-50 border-primary-100']"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <h4 class="font-semibold text-slate-900 mb-1 flex items-center gap-2">
              {{ notification.title }}
              <span v-if="!notification.isRead" class="w-2 h-2 rounded-full bg-primary-600"></span>
            </h4>
            <p class="text-sm text-slate-600 mb-2">{{ notification.body }}</p>
            <span class="text-xs text-slate-400 font-medium">
              {{ new Date(notification.createdAt).toLocaleDateString() }} • 
              {{ new Date(notification.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bell } from 'lucide-vue-next';
import { useNotifications } from '~/composables/modules/notifications/useNotifications';
import { useRouter } from 'vue-router';

const { notifications, fetchNotifications, markAsRead, markAllAsRead, unreadCount } = useNotifications();
const router = useRouter();

onMounted(() => {
  if (notifications.value.length === 0) {
    fetchNotifications();
  }
});

const handleNotificationClick = async (notification: any) => {
  if (!notification.isRead) {
    await markAsRead(notification._id);
  }
  
  if (notification.type === 'SOURCING_QUOTE') {
    router.push('/dashboard/requests');
  } else if (notification.type === 'ORDER_CONFIRMED') {
    router.push('/dashboard/orders');
  }
};
</script>
