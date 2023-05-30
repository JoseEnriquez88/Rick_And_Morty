const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const router = require('express').Router();

//! get character by id
router.get('/character/:id', getCharById);

//!login
router.get('/login', login);

//! post favorite character
router.post('/fav', postFav);

//!delete favorite character
router.delete('/fav/:id', deleteFav);

module.exports = router;