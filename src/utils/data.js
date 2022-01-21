import { range, sortBy } from "lodash";
import seedrandom from "seedrandom";

const getData = (num, seed, max = 100) => {
  seed = seed || "getData";
  const baseSeed = seedrandom(seed);
  const rand = () => baseSeed.quick() * max;
  return range(num).map((v) => ({ x: v + 1, y: rand() }));
};

const getLissajousData = (options = {}) => {
  const { a = 2, b = 3, D = Math.PI, samples = 100, step = 0.01} = options;
  const data = range(0, samples, step).map((t) => ({
    t,
    x: Math.sin(a * t + D),
    y: Math.sin(b * t)
  }));
  return sortBy(data, "t");
}

export { getData, getLissajousData };
