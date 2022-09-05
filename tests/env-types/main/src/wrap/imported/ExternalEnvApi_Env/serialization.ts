import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Option,
  BigInt,
  BigNumber,
  JSON,
  Context
} from "@polywrap/wasm-as";
import { ExternalEnvApi_Env } from "./";
import * as Types from "../..";

export function serializeExternalEnvApi_Env(type: ExternalEnvApi_Env): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported env-type: ExternalEnvApi_Env");
  const sizer = new WriteSizer(sizerContext);
  writeExternalEnvApi_Env(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported env-type: ExternalEnvApi_Env");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeExternalEnvApi_Env(encoder, type);
  return buffer;
}

export function writeExternalEnvApi_Env(writer: Write, type: ExternalEnvApi_Env): void {
  writer.writeMapLength(2);
  writer.context().push("externalArray", "Array<u32>", "writing property");
  writer.writeString("externalArray");
  writer.writeArray(type.externalArray, (writer: Write, item: u32): void => {
    writer.writeUInt32(item);
  });
  writer.context().pop();
  writer.context().push("externalString", "string", "writing property");
  writer.writeString("externalString");
  writer.writeString(type.externalString);
  writer.context().pop();
}

export function deserializeExternalEnvApi_Env(buffer: ArrayBuffer): ExternalEnvApi_Env {
  const context: Context = new Context("Deserializing imported env-type ExternalEnvApi_Env");
  const reader = new ReadDecoder(buffer, context);
  return readExternalEnvApi_Env(reader);
}

export function readExternalEnvApi_Env(reader: Read): ExternalEnvApi_Env {
  let numFields = reader.readMapLength();

  let _externalArray: Array<u32> = [];
  let _externalArraySet: bool = false;
  let _externalString: string = "";
  let _externalStringSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "externalArray") {
      reader.context().push(field, "Array<u32>", "type found, reading property");
      _externalArray = reader.readArray((reader: Read): u32 => {
        return reader.readUInt32();
      });
      _externalArraySet = true;
      reader.context().pop();
    }
    else if (field == "externalString") {
      reader.context().push(field, "string", "type found, reading property");
      _externalString = reader.readString();
      _externalStringSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_externalArraySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'externalArray: [UInt32]'"));
  }
  if (!_externalStringSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'externalString: String'"));
  }

  return {
    externalArray: _externalArray,
    externalString: _externalString
  };
}
