const express = require('express');
const { signup, login } = require('../controllers/auth');

const router = express.Router();

router.get('/login', (req,res)=>{
    res.send('Heyy');
})
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;