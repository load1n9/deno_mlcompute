import { MLCPlatform } from "./raw.ts";
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
}
