import { Platform, Tensor } from "./mod.ts";

Platform.seed = 42;
console.log(Platform.seed);
console.log(Tensor.create({
  shape: [21.0, 22.0, 1.0, 1.0],
}));
