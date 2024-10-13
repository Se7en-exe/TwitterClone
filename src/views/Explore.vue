<template>
  <div class="explore-content">
    <h2>当前趋势</h2>

    <!-- 热门话题部分 -->
    <section class="trending-topics">
      <h3>热门话题</h3>
      <ul class="trending-list">
        <li v-for="(topic, index) in trendingTopics" :key="index" class="trending-item">
          <p class="trend-name">#{{ topic.name }}</p>
          <p class="trend-tweets">{{ topic.tweets }} Tweets</p>
        </li>
      </ul>
    </section>
    <section class="recommended-videos">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(image, index) in images" :key="index" class="carousel-item">
          <img :src="image" alt="Carousel Image" class="carousel-image" />
          <i class="icon fas fa-play" @click="handleIconClick(index)"><svg t="1728804651793" class="icon"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4263" width="48"
              height="48">
              <path
                d="M512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m128-256l-213.333333 128V384l213.333333 128z"
                fill="#ffffff" p-id="4264"></path>
            </svg></i>
        </el-carousel-item>
      </el-carousel>
    </section>
    <!-- 推荐帖子部分 -->
    <section class="recommended-posts">
      <h3>推荐</h3>
      <div v-for="(post, index) in recommendedPosts" :key="index" class="post">
        <div class="post-header">
          <img :src="post.userAvatar" alt="User Avatar" class="user-avatar">
          <div>
            <p class="user-name">{{ post.username }}</p>
            <p class="user-handle">@{{ post.handle }}</p>
          </div>
          <button class="follow-button" @click="followUser(post)">关注</button>
        </div>
        <div class="post-content">
          <p>{{ post.content }} <span id="more">详情 ></span> </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import rec1 from '../assets/recP/rec1.jpg';
import rec2 from '../assets/recP/rec2.jpg';
import rec3 from '../assets/recP/rec3.jpg';
import rec4 from '../assets/recP/rec4.jpg';
import rec5 from '../assets/recP/rec5.jpg';





export default {
  data() {
    return {
      trendingTopics: [
        { name: 'Vue3 Update', tweets: '120K' },
        { name: 'JavaScript News', tweets: '80K' },
        { name: 'CSS Tricks', tweets: '75K' },
        { name: 'Web Development', tweets: '65K' },
      ],
      recommendedPosts: [
        {
          username: 'John Doe',
          handle: 'johndoe123',
          content: 'AI加筆あり/ぼっちざろっく/終わりのセラフ/このすば/とある科学の超電磁砲/灼眼のシャナ',
          userAvatar: avatar1,
        },
        {
          username: 'Jane Smith',
          handle: 'janesmith99',
          content: 'Si te sigo eres fan de Azu-nyan la besto Keioncita 🎸🎸🎸',
          userAvatar: avatar2,
        },
      ],
      images: [
        rec1,
        rec2,
        rec3,
        rec4,
        rec5,
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.explore-content {
  width: 598px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  flex-grow: 1;
  padding: 20px;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
.trending-topics {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
  .trending-topics,
  .recommended-posts {
    margin-bottom: 30px;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    #more {
      margin-left: 10px;
      color: #1da1f2;
    }

    #more:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .trending-list {
      list-style: none;
      padding: 0;

      .trending-item {
        margin-bottom: 10px;

        .trend-name {
          font-size: 16px;
          font-weight: bold;
          color: #1da1f2;
        }

        .trend-tweets {
          font-size: 14px;
          color: #657786;
        }
      }
    }
  }

  .post {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .post-header {
      justify-content: space-between;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .user-name {
        font-size: 16px;
        font-weight: bold;
      }

      .user-handle {
        font-size: 14px;
        color: #657786;
      }
    }

    .follow-button {
      cursor: pointer;
      color: #1da1f2;
      background-color: inherit;
      line-height: 18px;
      font-size: 15px;
      font-weight: 700;
      border: 1px solid #1da1f2;
      box-sizing: border-box;
      border-radius: 59px;
      width: 77px;
      height: 30px;
      margin-left: auto;


      &:hover {
        border: 1px solid #fff;
        background-color: #1da1f2;
        color: #fff;
        border: 1px solid #fff;
        transition: 1s color, 1s background-color, 1s border;
      }
    }

    .post-content {
      font-size: 16px;
      color: #333;
    }
  }

  .carousel-image-container {
    position: relative;
    /* 相对定位，使图标可以绝对定位 */
  }

  .el-carousel-item {
    display: flex;
    /* 使用 Flexbox */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    height: 100%;
    /* 确保轮播项占满容器高度 */
  }

  .carousel-image {
    width: 100%;
    /* 使图片宽度占满轮播框 */
    height: 100%;
    /* 使图片高度占满轮播框 */
    object-fit: cover;
    /* 确保图片按比例缩放并裁剪 */
  }

  .icon {
    position: absolute;
    /* 绝对定位图标 */
    top: 50%;
    /* 垂直居中 */
    left: 50%;
    /* 水平居中 */
    transform: translate(-50%, -50%);
    /* 使图标完全居中 */
    font-size: 36px;
    /* 调整图标大小 */
    color: white;
    /* 图标颜色 */
    cursor: pointer;
    /* 鼠标指针样式 */
    z-index: 10;
    /* 确保图标在图片之上 */
  }
}
</style>