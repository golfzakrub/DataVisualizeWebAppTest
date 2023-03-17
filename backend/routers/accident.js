const express = require('express');
const router = express.Router();
const AccidentController = require('../controllers/AccidentController');

const accidentController = new AccidentController();

router.get('/', accidentController.findAccidentData);
router.get('/death', accidentController.findAllDeath);
router.get('/death/stat', accidentController.findDeadStat);
router.post('/', accidentController.insertManyAccidents);
router.get('/injure', accidentController.findAllInjure);
router.get('/injure/stat', accidentController.findInjureStat);


module.exports = router;