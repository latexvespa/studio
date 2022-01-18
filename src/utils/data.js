import { range } from "lodash";
import seedrandom from "seedrandom";

const getData = (num, seed, max = 100) => {
  seed = seed || "getData";
  const baseSeed = seedrandom(seed);
  const rand = () => baseSeed.quick() * max;
  return range(num).map((v) => ({ x: v + 1, y: rand() }));
};

export { getData };
