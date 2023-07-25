// import { TensorDescriptor } from "./mod.ts";
import { NSNumber } from "./raw.ts";

export enum Num {
  Bool,
  Char,
  Double,
  Float,
  Int,
  Integer,
  Long,
  LongLong,
  Short,
  UnsignedChar,
  UnsignedInteger,
  UnsignedLongLong,
  UnsignedShort,
}
export function num(
  n: number | string | boolean | Deno.PointerValue,
  type?: Num,
): Deno.PointerValue {
  if (typeof type === "undefined") {
    switch (typeof n) {
      case "boolean":
        type = Num.Bool;
        break;
      case "number":
        type = Num.Double;
        break;
      case "string":
        type = Num.Char;
        break;
      default:
        type = Num.Int;
        break;
    }
  }

  switch (type) {
    case Num.Bool:
      return NSNumber.numberWithBool(
        n as boolean ? 1 : 0,
      );
    case Num.Char:
      return NSNumber.numberWithChar(
        n as number,
      );
    case Num.Double:
      return NSNumber.numberWithDouble(
        n as number,
      );
    case Num.Float:
      return NSNumber.numberWithFloat(
        n as number,
      );
    case Num.Int:
      return NSNumber.numberWithInt(
        n as number,
      );
    case Num.Integer:
      return NSNumber.numberWithInteger(
        n as Deno.PointerValue,
      );
    case Num.Long:
      return NSNumber.numberWithLong(
        n as number,
      );
    case Num.LongLong:
      return NSNumber.numberWithLongLong(
        n as number,
      );
    case Num.Short:
      return NSNumber.numberWithShort(
        n as number,
      );
    case Num.UnsignedChar:
      return NSNumber.numberWithUnsignedChar(
        n as number,
      );
    case Num.UnsignedInteger:
      return NSNumber.numberWithUnsignedInteger(
        n as number,
      );
    case Num.UnsignedLongLong:
      return NSNumber.numberWithUnsignedLongLong(
        n as number,
      );
    case Num.UnsignedShort:
      return NSNumber.numberWithUnsignedShort(
        n as number,
      );
    default:
      throw new Error("Invalid number type");
  }
}

// export function descript(
//   descriptor: TensorDescriptor,
// ): Deno.PointerValue {
//   return descriptor;
// }