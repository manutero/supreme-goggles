const { randomGenerator } = require("./random");

const normalExample = () => {
  const count = [];
  for (let i = 0; i < 1000; i++) {
    count[i] = 0;
  }

  const random = randomGenerator();
  for (let i = 0; i < 1000; i++) {
    const value = random.normal(15, 50);
    count[value]++;
  }

  console.log(count);
};

module.exports = { normalExample };
