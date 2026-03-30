const express = require('express');
const natural = require('natural');

const app = express();
app.use(express.json());

app.post('/sentiment', (req, res) => {
  try {
    const analyzer = new natural.SentimentAnalyzer();
    const score = analyzer.getSentiment(req.body.text.split(' '));

    let sentiment = 'neutral';
    if (score > 0) sentiment = 'positive';
    else if (score < 0) sentiment = 'negative';

    res.json({ sentimentScore: score, sentiment });
  } catch (e) {
    res.status(500).json({ message: "Error performing sentiment analysis" });
  }
});

app.listen(4000);
