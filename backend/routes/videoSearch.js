const express = require('express');

const router = express.Router();

router.get('/video/:searchString', (req, res) => {
    const { searchString } = req.params;
    res.send(searchString);
});

module.exports = router;