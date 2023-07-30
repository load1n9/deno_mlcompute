// deno-lint-ignore-file no-explicit-any
import {
  MLCDataTypeFloat32,
  MLCGraph,
  MLCMatMulDescriptor,
  MLCMatMulLayer,
  MLCPlatform,
  MLCTensor,
} from "./raw.ts";
import { num } from "./utils.ts";

export interface TensorDescriptor {
  dataType?: number;
  dimensionCount?: number;
  shape: number[];
  stride?: number[];
  tensorAllocationSizeInBytes?: number;
  sequenceLengths?: number;
  sortedSequences?: number;
  batchSizePerSequenceStepsortedSequences?: number;
}

/**
 * A utility class for setting global properties in the framework.
 */
export class Platform {
  /**
   * Returns the global random number generator seed value.
   */
  static get seed(): number {
    return MLCPlatform.getRNGseed();
  }

  /**
   * Sets the global random number generator seed value.
   * @param seed The global random number generator seed value.
   */
  static set seed(seed: number | string | boolean | Deno.PointerValue) {
    MLCPlatform.setRNGSeedTo(num(seed));
  }
}

/**
 * The data object you use throughout the framework.
 */
export class Tensor {
  /**
   * Creates a tensor without data, using the descriptor you specify.
   */
  static create(descriptor: TensorDescriptor): Deno.PointerValue;

  static create(
    _descriptor: TensorDescriptor,
  ): Deno.PointerValue {
    throw new Error("Not implemented");
  }

  /**
   *  Creates a tensor with the specified shape and data type.
   */
  static fromShapeDataType(
    shape: number[],
    dataType: any = MLCDataTypeFloat32,
  ) {
    return MLCTensor["tensorWithShape:dataType:"](
      Deno.UnsafePointer.of(new Float32Array(shape)),
      dataType,
    );
  }
}

export class Device {
  /**
   * Returns the CPU device.
   */
  static cpu(): Deno.PointerValue {
    return MLCPlatform.cpuDevice();
  }

  /**
   * Returns the GPU device.
   */
  static gpu(): Deno.PointerValue {
    return MLCPlatform.gpuDevice();
  }

  /**
   * Returns the ANE device.
   */
  static ane(): Deno.PointerValue {
    return MLCPlatform.aneDevice();
  }
}

export class InferenceGraph {
  /**
   * Creates an inference graph with the specified graph objects.
   */
  static create(graphObjects: Deno.PointerValue[]) {
    return MLCPlatform.graphWithGraphObjects(graphObjects);
  }
}

export class Graph {
  /**
   * Creates a graph.
   */
  static create() {
    return MLCGraph.new();
  }
}

export class TensorData {
  /**
   * Creates a tensor data object with the specified bytes and length.
   */
  static fromBytesNoCopyLength(
    bytes: Float32Array,
    length?: number,
  ): Deno.PointerValue {
    return MLCPlatform.tensorDataWithBytesNoCopyLength(
      bytes,
      length ?? bytes.byteLength,
    );
  }
}

export class MatMulLayer {
  /**
   * Creates a matrix multiplication layer with the specified descriptor.
   */
  static fromDescriptor(descriptor: any = MLCMatMulDescriptor.descriptor()) {
    return MLCMatMulLayer.layerWithDescriptor(descriptor);
  }
}
