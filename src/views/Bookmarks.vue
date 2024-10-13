<template>
  <div class="bookmarks">
    <h2>收藏</h2>
    <div class="bookmark-list">
      <div class="bookmark-item" v-for="(bookmark, index) in bookmarks" :key="index">
        <div class="bookmark-content">
          <img :src="bookmark.userAvatar" alt="User Avatar" class="user-avatar" />
          <div class="bookmark-details">
            <p class="bookmark-message">
              <strong>{{ bookmark.username }}</strong> <span>{{ bookmark.message }}</span>
            </p>
            <p class="bookmark-time">{{ bookmark.time }}</p>
            <div v-if="bookmark.type === 'tweet'" class="tweet-content">
              <p>{{ bookmark.tweetText }}</p>
              <div class="tweet-image" v-if="bookmark.tweetImage">
                <img :src="bookmark.tweetImage" alt="Tweet Image" />
              </div>
            </div>
            <div v-else-if="bookmark.type === 'video'" class="video-content">
              <p>视频: {{ bookmark.videoTitle }}</p>
              <video controls>
                <source :src="bookmark.videoSrc" type="video/mp4" />
                您的浏览器不支持视频标签。
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.gif';
export default {
  data() {
    return {
      bookmarks: [
        {
          username: 'John Doe',
          userAvatar: avatar1,
          message: '收藏了你的推文',
          time: '刚刚',
          type: 'tweet',
          tweetText: '这是我最喜欢的推文！',
          tweetImage: pic2,
        },
        {
          username: 'Jane Smith',
          userAvatar: avatar2,
          message: '分享了一段视频',
          time: '10分钟前',
          type: 'video',
          videoTitle: '有趣的猫视频',
          videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
        {
          username: 'Emily Brown',
          userAvatar: avatar1,
          message: '收藏了一张图片',
          time: '30分钟前',
          type: 'tweet',
          tweetText: '逆天',
          tweetImage: pic3,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.bookmarks {
  width: 598px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 20px;
  background-color: #ffffff;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .bookmark-list {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    max-height: 800px;
    /* 设置最大高度 */
    overflow-y: auto;
    /* 允许垂直滚动 */
    overflow-x: hidden;
    /* 隐藏水平滚动 */
    scrollbar-width: none;
    /* Firefox 隐藏滚动条 */
    -ms-overflow-style: none;
    /* IE 和 Edge 隐藏滚动条 */

    /* 针对 Webkit 浏览器（如 Chrome 和 Safari） */
    &::-webkit-scrollbar {
      display: none;
      /* 隐藏滚动条 */
    }

    .bookmark-item {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &:last-child {
        border-bottom: none;
      }

      .bookmark-content {
        display: flex;
        align-items: flex-start;

        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 15px;
        }

        .bookmark-details {
          .bookmark-message {
            font-size: 16px;
            margin: 0;
            color: #14171a;

            strong {
              font-weight: bold;
            }
          }

          .bookmark-time {
            font-size: 12px;
            color: #657786;
            margin: 5px 0;
          }

          .tweet-content {
            margin-top: 10px;

            p {
              margin: 5px 0;
              color: #14171a;
            }

            .tweet-image {
              margin-top: 10px;

              img {
                max-width: 100%;
                border-radius: 10px;
              }
            }
          }

          .video-content {
            margin-top: 10px;

            video {
              max-width: 100%;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
