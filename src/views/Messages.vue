<template>
  <div class="messages">
    <h2>私信</h2>
    <div class="message-list">
      <div class="message-item" v-for="(message, index) in messages" :key="index">
        <img :src="message.userAvatar" alt="User Avatar" class="user-avatar" />
        <div class="message-content">
          <p class="message-header">
            <strong>{{ message.username }}</strong>
            <span class="message-time">{{ message.time }}</span>
          </p>
          <p class="message-text">{{ message.text }}</p>
          <div v-if="message.type === 'image'" class="message-image">
            <img :src="message.imageSrc" alt="Image Message" />
          </div>
        </div>
      </div>
    </div>
    <div class="message-input">
      <input type="text" v-model="newMessage" placeholder="发送消息..." @keyup.enter="sendMessage" />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import pic1 from '../assets/pic1.jpg';

export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          username: 'John Doe',
          text: '嗨，最近怎么样？',
          time: '刚刚',
          userAvatar: avatar1,
          type: 'text', // 消息类型
        },
        {
          username: 'Jane Smith',
          text: '你有没有看最新的电影？',
          time: '10分钟前',
          userAvatar: avatar2,
          type: 'text',
        },
        {
          username: 'Alex Johnson',
          text: '我觉得这件事需要更深入的讨论。',
          time: '20分钟前',
          userAvatar: avatar3,
          type: 'text',
        },
        {
          username: 'Emily Brown',
          text: '希望能尽快见到你！',
          time: '1小时前',
          userAvatar: avatar1,
          type: 'text',
        },
        {
          username: 'Alice',
          text: '看这张有趣的图片！',
          time: '2小时前',
          userAvatar: avatar2,
          type: 'image',
          imageSrc: pic1, // 这可以是你图片的链接
        },
        {
          username: 'Bob',
          text: '我最近发现了一个很棒的网站，你一定要看看！https://www.bilibili.com/',
          time: '3小时前',
          userAvatar: avatar3,
          type: 'text',
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({
          username: '你',
          text: this.newMessage,
          time: '刚刚',
          userAvatar: require('../assets/your-avatar.png'), // 替换为你的头像
          type: 'text',
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.messages {
  width: 598px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 20px;
  background-color: #ffffff;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .message-list {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    max-height: 800px;
    overflow-y: auto;
    margin-bottom: 20px;
  }

  .message-item {
    display: flex;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      border-bottom: none;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .message-content {
      .message-header {
        display: flex;
        justify-content: space-between;
        font-size: 14px;

        .message-time {
          color: #657786;
          font-size: 12px;
        }
      }

      .message-text {
        font-size: 16px;
        margin: 5px 0;
      }

      .message-image {
        margin-top: 10px;

        img {
          max-width: 100%;
          border-radius: 10px;
        }
      }
    }
  }

  .message-input {
    display: flex;
    align-items: center;

    input {
      flex-grow: 1;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding: 10px;
      font-size: 16px;
      margin-right: 10px;

      &:focus {
        outline: none;
        border-color: #1da1f2;
      }
    }

    button {
      background-color: #1da1f2;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background-color: #00a6ff6c;
      }
    }
  }
}
</style>
