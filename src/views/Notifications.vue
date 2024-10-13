<template>
  <div class="notifications">
    <h2>通知</h2>
    <div class="notification-list">
      <div class="notification-item" v-for="(notification, index) in notifications" :key="index">
        <img :src="notification.userAvatar" alt="User Avatar" class="user-avatar" />
        <div class="notification-content">
          <p class="notification-message">
            <strong>{{ notification.username }}</strong> {{ notification.message }}
            <span class="notification-time">{{ notification.time }}</span>
          </p>
          <p class="notification-detail">{{ notification.detail }}</p>
          <p v-if="notification.extra" class="notification-extra">{{ notification.extra }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';

export default {
  data() {
    return {
      notifications: [
        {
          username: 'John Doe',
          message: '关注了你',
          detail: '查看ta的个人资料',
          time: '2分钟前',
          userAvatar: avatar1,
          extra: '新用户，欢迎关注！',
        },
        {
          username: 'Jane Smith',
          message: '提及了你',
          detail: '查看ta的推文',
          time: '5分钟前',
          userAvatar: avatar2,
          extra: '她想知道你的想法。',
        },
        {
          username: 'Alex Johnson',
          message: '喜欢了你的推文',
          detail: '',
          time: '10分钟前',
          userAvatar: avatar3,
          extra: '你的创意得到了认可！',
        },
        {
          username: 'Emily Brown',
          message: '评论了你的推文',
          detail: '查看ta的评论',
          time: '15分钟前',
          userAvatar: avatar4,
          extra: '她对你的内容很感兴趣！',
        },
        {
          username: 'Michael Davis',
          message: '点赞了你的推文',
          detail: '',
          time: '20分钟前',
          userAvatar: avatar5,
          extra: '点赞数提升了！',
        },
        {
          username: 'Sarah Wilson',
          message: '正在直播 🎥',
          detail: '前往观看直播',
          time: '25分钟前',
          userAvatar: avatar6,
          extra: '点击这里加入实时互动。',
        },
        {
          username: 'Chris Evans',
          message: '转发了你的推文',
          detail: '查看他的分享',
          time: '30分钟前',
          userAvatar: avatar1,
          extra: '你的推文正在被更多人看到！',
        },
        {
          username: 'Jessica Green',
          message: '对你的提问进行了回答',
          detail: '查看她的回复',
          time: '1小时前',
          userAvatar: avatar2,
          extra: '深入讨论中！',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.notifications {
  min-width: 598px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 20px;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .notification-list {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    max-height: 800px;
    overflow-y: auto;
  }

  .notification-item {
    display: flex;
    align-items: flex-start;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      border-bottom: none;
    }

    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }

    .notification-content {
      .notification-message {
        font-size: 16px;
        margin: 0;

        .notification-time {
          font-size: 12px;
          color: #657786;
          margin-left: 5px;
        }
      }

      .notification-detail {
        font-size: 14px;
        color: #657786;
      }

      .notification-extra {
        font-size: 12px;
        color: #1da1f2;
        margin-top: 5px;
      }
    }
  }
}
</style>
