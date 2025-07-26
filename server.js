const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
 app.use(express.static('public'));

 app.post('/api/tts', (req, res) => {
     const { text, voice } = req.body;
     // Tích hợp API TTS ở đây
     // Giả sử trả về file âm thanh
     res.send('File âm thanh đã được tạo!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
