import express from "express";
import cors from "cors";
const app = express();
const port = 5174;
app.use(cors());

// 推文内容库，至少10条
const tweetContents = [
    "今天天气真好，出去走走。",
    "最近在学编程，有点小进步。",
    "这个周末看了几部电影，推荐大家看看。",
    "生活总是充满惊喜和挑战。",
    "今天做了一道很好吃的菜，心情大好。",
    "学习了新的编程技巧，感到非常充实。",
    "最近读了一本好书，真的受益匪浅。",
    "运动让生活更有活力！",
    "努力工作，生活总会越来越好。",
    "保持积极的心态，面对一切挑战。",
    "与朋友聚会，度过了愉快的时光。",
    "探索新事物，总能发现意想不到的乐趣。"
];

// 用户名和姓氏库
const firstNames = ["John", "Jane", "Mike", "Anna", "Tom", "Emily", "Chris", "Sophie", "David", "Olivia", "James", "Emma"];
const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Taylor", "Clark", "Lee", "Walker", "Harris", "Adams", "Martin", "Lewis"];

// 生成随机用户数据
const randomUser = (index) => ({
    author: `${firstNames[index]} ${lastNames[index]}`,  // 组合生成用户名
});

// 生成随机推文
const randomTweet = (index) => ({
    content: tweetContents[Math.floor(Math.random() * tweetContents.length)], // 从内容库中随机选一条
    author: randomUser(index).author,
});

// 生成多个推文，每个推文来自不同的用户
const generateTweets = (count = 12) => {
    const tweets = [];
    for (let i = 0; i < count; i++) {
        tweets.push(randomTweet(i));
    }
    return tweets;
};

// 定义 API 路由，返回推文列表
app.get("/api/tweets", (req, res) => {
    const tweetCount = parseInt(req.query.count) || 12;
    res.json(generateTweets(tweetCount));
});

// 启动服务器
app.listen(port, () => {
    console.log(`Tweet API server running at http://localhost:${port}`);
});
