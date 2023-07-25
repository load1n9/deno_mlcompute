import objc, {
  //   Block,
} from "https://raw.githubusercontent.com/DjDeveloperr/deno_objc/main/mod.ts";

objc.import("MLCompute");

export const {
  MLCPlatform,
  MLCTensor,

  // types
  NSNumber,
  MLCTensorDescriptor,
  MLCDataType,
  MLCDataTypeInt32
} = objc.classes;
