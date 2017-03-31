const express = require("express");
const router = express.Router();

const {
  getKingdoms,
  getKingdomInfo,
  getKingdomCastles,
  getCastleInfo
} = require('../services/kingdom-services');


router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render('kingdoms', {allKingdoms});
});

router.get('/:kingdom', (req, res) => {
  var kingdomName = req.params.kingdom;
  const kingdomInfo = getKingdomInfo(kingdomName);
  res.render('kingdom/show', {kingdomInfo});
});

router.get('/:kingdom/castles', (req, res) => {
  var kingdomName = req.params.kingdom;
  const kingdomCastles = getKingdomCastles(kingdomName);
  res.render('kingdom/show_castles', {kingdomName, kingdomCastles});
});

router.get('/:kingdom/castles/:castle', (req, res) => {
  var kingdomName = req.params.kingdom;
  var castleName = req.params.castle;
  const castleInfo = getCastleInfo(kingdomName, castleName);
  res.render('castle/show', {kingdomName, castleInfo});
});

module.exports = router;
