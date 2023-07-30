import objc, {
  //   Block,
} from "https://raw.githubusercontent.com/DjDeveloperr/deno_objc/main/mod.ts";

objc.import("MLCompute");

export const {
  MLCPlatform,
  MLCTensor,
  MLCTensorData,
  MLCGraph,
  MLCInferenceGraph,
  MLCMatMulLayer,
  MLCMatMulDescriptor,
  MLCArithmeticLayer,
  MLCDevice,
  

  // types
  NSNumber,
  MLCTensorDescriptor,
  MLCDataType,
  MLCDataTypeFloat32,
  MLCDataTypeInt32,
} = objc.classes;
