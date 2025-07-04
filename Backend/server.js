const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stockRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/stocks', stockRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
