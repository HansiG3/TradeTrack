const { fetchStockData } = require('../utils/fetchStock');

const getStockDataAndTrack = async (req, res) => {
    const { symbol } = req.body;

    if (!symbol) {
        return res.status(400).json({ error: 'Symbol is required' });
    }

    try {
        // Start tracking this symbol every 10s
        setInterval(() => {
            fetchStockData(symbol.toUpperCase());
        }, 10000);

        res.json({ message: `Started tracking ${symbol}` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

module.exports = { getStockDataAndTrack };
