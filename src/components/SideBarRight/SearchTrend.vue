<script>
export default {};
</script>

<template>
  <div id="search-trend">
    <div class="search">
      <img src="../../assets/tweet-icons/find-search.svg" alt="" />
      <input type="text" placeholder="搜索" />
    </div>
    <div class="trends">
      <div class="title">
        <h2>有什么新鲜事？</h2>
        <img src="../../assets/tweet-icons/settings-icon.svg" alt="" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">1.趋势</p>
          <h4 class="caption">#northernlights</h4>
          <p class="tweet-number">4,223 posts</p>
        </div>
        <img src="../../assets/tweet-icons/icon-section.svg" alt="" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">2.趋势</p>
          <h4 class="caption">#iRobot</h4>
          <p class="tweet-number">1.63万 posts</p>
        </div>
        <img src="../../assets/tweet-icons/icon-section.svg" alt="" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">3.趋势</p>
          <h4 class="caption">#CriticalRoleSpoilers</h4>
          <p class="tweet-number">1,236 posts</p>
        </div>
        <img src="../../assets/tweet-icons/icon-section.svg" alt="" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">4.趋势</p>
          <h4 class="caption">#MANTRA OUT NOW</h4>
          <p class="tweet-number">2万 posts</p>
        </div>
        <img src="../../assets/tweet-icons/icon-section.svg" alt="" />
      </div>
      <!-- <div class="trend">
        <div class="content">
          <p class="rank">5.趋势</p>
          <h4 class="caption">#Turkey</h4>
          <p class="tweet-number">3,689 posts</p>
        </div>
        <img src="../../assets/tweet-icons/icon-section.svg" alt="" />
      </div>
      <div class="trend">
        <div class="content">
          <p class="rank">6.趋势</p>
          <h4 class="caption">#Optimus</h4>
          <p class="tweet-number">5,745 posts</p>
        </div>
        <img src="../../assets/tweet-icons/icon-section.svg" alt="" />
      </div> -->
      <h4>更多</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
#search-trend {
  max-width: 350px;
  margin-top: 0.2rem;
  margin-bottom: 24px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .search {
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px auto;
    height: 48px;
    background: #e7ecf0;
    border-radius: 100px;

    img {
      margin-left: 17.67px;
      margin-right: 9.88px;
    }
    input {
      color: #828282;
      background: #e7ecf0;
      font-size: 15px;
      line-height: 27.58px;
      width: 15rem;
    }
    input:active {
      outline: none;
      border: none;
    }
    input:focus {
      outline: 0;
    }
  }

  .trends {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #f6f8fa;
    padding: 14px 20px 12px;

    .title {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      margin-bottom: 12px;
      h2 {
        font-weight: 900;
        font-size: 19px;
        line-height: 22.27px;
        color: #000;
      }
    }

    .trend {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      margin-bottom: 1rem;

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        * {
          margin-bottom: 4px;
        }
        .rank {
          line-height: 14px;
          font-size: 12px;
          color: #828282;
        }
        .caption {
          font-size: 15px;
          line-height: 17.58px;
          font-weight: 700;
          color: #333;
        }

        .tweet-number {
          font-size: 14px;
          line-height: 16.41px;
          color: #828282;
        }
      }
    }

    h4 {
      color: #1da1f2;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 16.41px;
      cursor: pointer;
    }
  }
}
</style>