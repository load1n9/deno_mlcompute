import { Platform, Tensor, TensorData } from "./mod.ts";

Platform.seed = 42;
console.log(Platform.seed);

const shape = [1, 1024, 1024];
const size = shape.reduce((a, b) => a * b, 1);

const tensorA = Tensor.fromShapeDataType(
  shape,
);

const a = new Float32Array(size).fill(1);
const b = new Float32Array(size).fill(2);
const c = new Float32Array(size).fill(3);

const dataA = TensorData.fromBytesNoCopyLength(a, a.byteLength);
const dataB = TensorData.fromBytesNoCopyLength(b, b.byteLength);
const dataC = TensorData.fromBytesNoCopyLength(c, c.byteLength);

console.log(tensorA);
console.log(dataA);
console.log(dataB);
console.log(dataC);
