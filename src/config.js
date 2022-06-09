const layersOrder = [
  { name: "Roomz", val: 1 },
  { name: "Boda", val: 1 },
  { name: "LeEarz", val: 1 },
  { name: "RiEarz", val: 1 },
  { name: "LErrings", val: 0.5 },
  { name: "RErrings", val: 0.5 },
  { name: "HeeD", val: 1 },
  { name: "FaceDrawigz", val: 0.5 },
  { name: "SmiLez", val: 1 },
  { name: "DaSide", val: 1 },
  { name: "DaOtaSide", val: 1 },
  { name: "SmellsLikeThis", val: 1 },
  { name: "LookAtMe", val: 0.5 },
];

const format = {
  width: 1001,
  height: 1001,
};

const rarity = {
  Common: 0.5,
  Uncommon: 0.25,
  Rare: 0.15,
  "Super Rare": 0.08,
  Legendary: 0.02,
};

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };
