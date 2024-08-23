/* auto-generated by NAPI-RS */
/* eslint-disable */


export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
/**
 * `constructor` option for `struct` requires all fields to be public,
 * otherwise tag impl fn as constructor
 * #[napi(constructor)]
 */
export class Animal {
  /** Kind of animal */
  readonly kind: Kind
  /** This is the constructor */
  constructor(kind: Kind, name: string)
  /** This is a factory method */
  static withKind(kind: Kind): Animal
  get name(): string
  set name(name: string)
  get type(): Kind
  set type(kind: Kind)
  /**
   * This is a
   * multi-line comment
   * with an emoji 🚀
   */
  whoami(): string
  /** This is static... */
  static getDogKind(): Kind
  /**
   * Here are some characters and character sequences
   * that should be escaped correctly:
   * \[]{}/\:""{
   * }
   */
  returnOtherClass(): Dog
  returnOtherClassWithCustomConstructor(): Bird
  overrideIndividualArgOnMethod(normalTy: string, overriddenTy: {n: string}): Bird
}

export class AnimalWithDefaultConstructor {
  name: string
  kind: number
  constructor(name: string, kind: number)
}

export class AnotherClassForEither {
  constructor()
}

export class AnotherCssStyleSheet {
  get rules(): CssRuleList
}
export type AnotherCSSStyleSheet = AnotherCssStyleSheet

export class Asset {
  constructor()
  get filePath(): number
}
export type JsAsset = Asset

export class Assets {
  constructor()
  get(id: number): JsAsset | null
}
export type JsAssets = Assets

export class Bird {
  name: string
  constructor(name: string)
  getCount(): number
  getNameAsync(): Promise<string>
  acceptSliceMethod(slice: Uint8Array): number
}

/** Smoking test for type generation */
export class Blake2BHasher {
  static withKey(key: Blake2bKey): Blake2BHasher
  update(data: Buffer): void
}
export type Blake2bHasher = Blake2BHasher

export class Blake2BKey {

}
export type Blake2bKey = Blake2BKey

export class CatchOnConstructor {
  constructor()
}

export class CatchOnConstructor2 {
  constructor()
}

export class ClassWithFactory {
  name: string
  static withName(name: string): ClassWithFactory
  static with4Name(name: string): Promise<ClassWithFactory>
  static with4NameResult(name: string): Promise<ClassWithFactory>
  setName(name: string): this
}

export class Context {
  maybeNeed?: boolean
  buffer: Uint8Array
  constructor()
  static withData(data: string): Context
  static withBuffer(buf: Uint8Array): Context
  method(): string
}

export class CssRuleList {
  getRules(): Array<string>
  get parentStyleSheet(): CSSStyleSheet
  get name(): string | null
}
export type CSSRuleList = CssRuleList

export class CssStyleSheet {
  constructor(name: string, rules: Array<string>)
  get rules(): CssRuleList
  anotherCssStyleSheet(): AnotherCssStyleSheet
}
export type CSSStyleSheet = CssStyleSheet

export class CustomFinalize {
  constructor(width: number, height: number)
}

export class CustomStruct {
  static customStatusCodeForFactory(): CustomStruct
  constructor()
}

export class DefaultUseNullableClass {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
  constructor(requiredNumberField: number, requiredStringField: string, optionalNumberField?: number, optionalStringField?: string)
}

export class Dog {
  name: string
  constructor(name: string)
}

export class Fib {
  [Symbol.iterator](): Iterator<number, void, number>
  constructor()
}

export class Fib2 {
  [Symbol.iterator](): Iterator<number, void, number>
  static create(seed: number): Fib2
}

export class Fib3 {
  current: number
  next: number
  constructor(current: number, next: number)
  [Symbol.iterator](): Iterator<number, void, number>
}

export class GetterSetterWithClosures {
  constructor()
}

export class JsClassForEither {
  constructor()
}

export class JsRemote {
  constructor(repo: JsRepo)
  name(): string
}

export class JsRepo {
  constructor(dir: string)
  remote(): JsRemote
}

export class NinjaTurtle {
  name: string
  static isInstanceOf(value: unknown): boolean
  /** Create your ninja turtle! 🐢 */
  static newRaph(): NinjaTurtle
  getMaskColor(): string
  getName(): string
  returnThis(this: this): this
}

export class NotUseNullableClass {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
  constructor(requiredNumberField: number, requiredStringField: string, optionalNumberField?: number, optionalStringField?: string)
}

export class NotWritableClass {
  name: string
  constructor(name: string)
  setName(name: string): void
}

export class Optional {
  static optionEnd(required: string, optional?: string | undefined | null): string
  static optionStart(optional: string | undefined | null, required: string): string
  static optionStartEnd(optional1: string | undefined | null, required: string, optional2?: string | undefined | null): string
  static optionOnly(optional?: string | undefined | null): string
}

export class Selector {
  orderBy: Array<string>
  select: Array<string>
  struct: string
  where?: string
  constructor(orderBy: Array<string>, select: Array<string>, struct: string, where?: string)
}

export class UseNullableClass {
  requiredNumberField: number
  requiredStringField: string
  nullableNumberField: number | null
  nullableStringField: string | null
  constructor(requiredNumberField: number, requiredStringField: string, nullableNumberField: number | null, nullableStringField: string | null)
}

export class Width {
  value: number
  constructor(value: number)
}

export interface A {
  foo: number
}

export declare function acceptArraybuffer(fixture: ArrayBuffer): bigint

export declare function acceptSlice(fixture: Uint8Array): bigint

export declare function acceptThreadsafeFunction(func: (err: Error | null, arg: number) => any): void

export declare function acceptThreadsafeFunctionFatal(func: (arg: number) => any): void

export declare function acceptThreadsafeFunctionTupleArgs(func: (err: Error | null, arg0: number, arg1: boolean, arg2: string) => any): void

export declare function acceptUint8ClampedSlice(input: Uint8ClampedArray): bigint

export declare function acceptUint8ClampedSliceAndBufferSlice(a: Buffer, b: Uint8ClampedArray): bigint

export declare function add(a: number, b: number): number

export const enum ALIAS {
  A = 0,
  B = 1
}

export interface AliasedStruct {
  a: ALIAS
  b: number
}

export interface AllOptionalObject {
  name?: string
  age?: number
}

export declare function appendBuffer(buf: Buffer): Buffer

export declare function apply0(ctx: Animal, callback: (...args: any[]) => any): void

export declare function apply1(ctx: Animal, callback: (...args: any[]) => any, name: string): void

export declare function arrayBufferPassThrough(buf: Uint8Array): Promise<Uint8Array>

export declare function asyncBufferToArray(buf: ArrayBuffer): Array<number>

export declare function asyncMultiTwo(arg: number): Promise<number>

export declare function asyncPlus100(p: Promise<number>): Promise<number>

export declare function asyncReduceBuffer(buf: Buffer): Promise<number>

export declare function asyncTaskOptionalReturn(): Promise<number | null>

export declare function asyncTaskVoidReturn(): Promise<void>

export interface B {
  bar: number
}

export declare function bigintAdd(a: bigint, b: bigint): bigint

export declare function bigintFromI128(): bigint

export declare function bigintFromI64(): bigint

export declare function bigintGetU64AsString(bi: bigint): string

export declare function bufferPassThrough(buf: Buffer): Promise<Buffer>

export interface C {
  baz: number
}

export declare function call0(callback: (...args: any[]) => any): number

export declare function call1(callback: (...args: any[]) => any, arg: number): number

export declare function call2(callback: (...args: any[]) => any, arg1: number, arg2: number): number

export declare function callbackReturnPromise<T>(functionInput: () => T | Promise<T>, callback: (err: Error | null, result: T) => void): T | Promise<T>

export declare function callbackReturnPromiseAndSpawn(jsFunc: (arg0: string) => Promise<string>): Promise<string>

export declare function callFunction(cb: () => number): number

export declare function callFunctionWithArg(cb: (arg0: number, arg1: number) => number, arg0: number, arg1: number): number

export declare function callFunctionWithArgAndCtx(ctx: Animal, cb: (arg: string) => void, name: string): void

export declare function callLongThreadsafeFunction(callback: (...args: any[]) => any): void

export declare function callThreadsafeFunction(callback: (...args: any[]) => any): void

export declare function captureErrorInCallback(cb1: () => void, cb2: (arg0: Error) => void): void

export declare function chronoDateAdd1Minute(input: Date): Date

export declare function chronoDateFixtureReturn1(): Date

export declare function chronoDateFixtureReturn2(): Date

export declare function chronoDateWithTimezoneReturn(): Date | null

export declare function chronoDateWithTimezoneToMillis(input: Date): number

export declare function chronoLocalDateReturn(): Date | null

export declare function chronoLocalDateToMillis(input: Date): number

export declare function chronoNativeDateTime(date: Date): number

export declare function chronoNativeDateTimeReturn(): Date | null

export declare function chronoUtcDateReturn(): Date | null

export declare function chronoUtcDateToMillis(input: Date): number

export declare function concatLatin1(s: string): string

export declare function concatStr(s: string): string

export declare function concatUtf16(s: string): string

export declare function contains(source: string, target: string): boolean

export declare function convertU32Array(input: Uint32Array): Array<number>

export declare function createArraybuffer(): ArrayBuffer

export declare function createBigInt(): bigint

export declare function createBigIntI64(): bigint

export declare function createExternal(size: number): ExternalObject<number>

export declare function createExternalString(content: string): ExternalObject<string>

export declare function createExternalTypedArray(): Uint32Array

export declare function createObj(): object

export declare function createObjectWithClassField(): ObjectFieldClassInstance

export declare function createObjWithProperty(): { value: ArrayBuffer, get getter(): number }

export declare function createReferenceOnFunction(cb: () => void): Promise<void>

export declare function createSymbol(): symbol

export declare function createSymbolFor(desc: string): symbol

/** You could break the step and for an new continuous value. */
export const enum CustomNumEnum {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Six = 6,
  Eight = 8,
  Nine = 9,
  Ten = 10
}

export declare function customStatusCode(): void

export const enum CustomStringEnum {
  Foo = 'my-custom-value',
  Bar = 'Bar',
  Baz = 'Baz'
}

export interface DatesWithTimeZone {
  start: Date
  end?: Date
}

export declare function dateToNumber(input: Date): number

/** This is a const */
export const DEFAULT_COST: number

export interface DefaultUseNullableStruct {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
}

export declare function derefUint8Array(a: Uint8Array, b: Uint8ClampedArray): number

export declare function either3(input: string | number | boolean): number

export declare function either4(input: string | number | boolean | Obj): number

export declare function eitherBoolOrFunction(input: boolean | ((...args: any[]) => any)): void

export declare function eitherBoolOrTuple(input: boolean | [boolean, string]): void

export declare function eitherFromObjects(input: A | B | C): string

export declare function eitherFromOption(): JsClassForEither | undefined

export declare function eitherStringOrNumber(input: string | number): number

export const enum Empty {

}

export declare function enumToI32(e: CustomNumEnum): number

export declare function f32ArrayToArray(input: Float32Array): Array<number>

export declare function f64ArrayToArray(input: Float64Array): Array<number>

export declare function fibonacci(n: number): number

export declare function fnReceivedAliased(s: AliasedStruct, e: ALIAS): void

export declare function getBtreeMapping(): Record<string, number>

export declare function getBuffer(): Buffer

export declare function getCwd(callback: (arg0: string) => void): void

export declare function getEmptyBuffer(): Buffer

export declare function getExternal(external: ExternalObject<number>): number

export declare function getGlobal(): typeof global

export declare function getIndexMapping(): Record<string, number>

export declare function getMapping(): Record<string, number>

export declare function getModuleFileName(): string

export declare function getNestedNumArr(): number[][][]

export declare function getNull(): null

export declare function getNumArr(): number[]

/** Gets some numbers */
export declare function getNums(): Array<number>

export declare function getPackageJsonName(packageJson: PackageJson): string

export declare function getStrFromObject(): void

export declare function getterFromObj(): number

export declare function getUndefined(): void

export declare function getWords(): Array<string>

export declare function i16ArrayToArray(input: Int16Array): Array<number>

export declare function i32ArrayToArray(input: Int32Array): Array<number>

export declare function i64ArrayToArray(input: BigInt64Array): Array<number>

export declare function i8ArrayToArray(input: Int8Array): Array<number>

export declare function indexmapPassthrough(fixture: Record<string, number>): Record<string, number>

/** default enum values are continuos i32s start from 0 */
export const enum Kind {
  /** Barks */
  Dog = 0,
  /** Kills birds */
  Cat = 1,
  /** Tasty */
  Duck = 2
}

/** default enum values are continuos i32s start from 0 */
export const enum KindInValidate {
  /** Barks */
  Dog = 0,
  /** Kills birds */
  Cat = 1,
  /** Tasty */
  Duck = 2
}

export declare function listObjKeys(obj: object): Array<string>

export interface LocalDates {
  start: Date
  end?: Date
}

export declare function mapOption(val?: number | undefined | null): number | null

export declare function mutateExternal(external: ExternalObject<number>, newVal: number): void

export declare function mutateTypedArray(input: Float32Array): void

export interface NotUseNullableStruct {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
}

export interface Obj {
  v: string | number
}

export interface ObjectFieldClassInstance {
  bird: Bird
}

export declare function objectGetNamedPropertyShouldPerformTypecheck(obj: { foo: number; bar: string; }): void

export interface ObjectOnlyFromJs {
  count: number
  callback: (err: Error | null, arg: number) => any
}

export interface ObjectOnlyToJs {
  name: number
  dependencies: any
}

export declare function optionEnd(callback: (arg0: string, arg1?: string | undefined | null) => void): void

export declare function optionOnly(callback: (arg0?: string | undefined | null) => void): void

export declare function optionStart(callback: (arg0: string | undefined | null, arg1: string) => void): void

export declare function optionStartEnd(callback: (arg0: string | undefined | null, arg1: string, arg2?: string | undefined | null) => void): void

export declare function overrideIndividualArgOnFunction(notOverridden: string, f: () => string, notOverridden2: number): string

export declare function overrideIndividualArgOnFunctionWithCbArg(callback: (town: string, name?: string | undefined | null) => string, notOverridden: number): object

/** This is an interface for package.json */
export interface PackageJson {
  name: string
  /** The version of the package */
  version: string
  dependencies?: Record<string, any>
  devDependencies?: Record<string, any>
}

export declare function panic(): void

export declare function panicInAsync(): Promise<void>

export declare function plusOne(this: Width): number

export declare function promiseInEither(input: number | Promise<number>): Promise<boolean>

/** napi = { version = 2, features = ["serde-json"] } */
export declare function readFile(callback: (arg0: Error | undefined, arg1?: string | undefined | null) => void): void

export declare function readFileAsync(path: string): Promise<Buffer>

export declare function readPackageJson(): PackageJson

export declare function receiveAllOptionalObject(obj?: AllOptionalObject | undefined | null): void

export declare function receiveClassOrNumber(either: number | JsClassForEither): number

export declare function receiveDifferentClass(either: JsClassForEither | AnotherClassForEither): number

export declare function receiveMutClassOrNumber(either: number | JsClassForEither): number

export declare function receiveObjectOnlyFromJs(obj: { count: number, callback: (err: Error | null, count: number) => void }): void

export declare function receiveObjectWithClassField(object: ObjectFieldClassInstance): Bird

export declare function receiveStrictObject(strictObject: StrictObject): void

export declare function receiveString(s: string): string

export declare function referenceAsCallback(callback: (arg0: number, arg1: number) => number, arg0: number, arg1: number): number

export declare function returnEither(input: number): string | number

export declare function returnEitherClass(input: number): number | JsClassForEither

export declare function returnFromSharedCrate(): Shared

export declare function returnJsFunction(): (...args: any[]) => any

export declare function returnNull(): null

export declare function returnObjectOnlyToJs(): ObjectOnlyToJs

export declare function returnUndefined(): void

export declare function returnUndefinedIfInvalid(input: boolean): boolean

export declare function returnUndefinedIfInvalidPromise(input: Promise<boolean>): Promise<boolean>

export declare function roundtripStr(s: string): string

export declare function runScript(script: string): unknown

export declare function setSymbolInObj(symbol: symbol): object

export interface Shared {
  value: number
}

export const enum Status {
  Pristine = 'Pristine',
  Loading = 'Loading',
  Ready = 'Ready'
}

export const enum StatusInValidate {
  Poll = 'Poll',
  Ready = 'Ready',
  Done = 'Done'
}

export interface StrictObject {
  name: string
}

export const enum StringEnum {
  VariantOne = 'variantone',
  VariantTwo = 'varianttwo',
  VariantThree = 'variantthree'
}

export declare function sumBtreeMapping(nums: Record<string, number>): number

export declare function sumIndexMapping(nums: Record<string, number>): number

export declare function sumMapping(nums: Record<string, number>): number

export declare function sumNums(nums: Array<number>): number

export declare function testSerdeBigNumberPrecision(number: string): any

export declare function testSerdeBufferBytes(obj: object): bigint

export declare function testSerdeRoundtrip(data: any): any

export declare function threadsafeFunctionClosureCapture(func: (...args: any[]) => any): void

export declare function threadsafeFunctionFatalMode(cb: (...args: any[]) => any): void

export declare function threadsafeFunctionFatalModeError(cb: (...args: any[]) => any): void

export declare function threadsafeFunctionThrowError(cb: (...args: any[]) => any): void

export declare function throwAsyncError(): Promise<void>

export declare function throwError(): void

export declare function throwSyntaxError(error: string, code?: string | undefined | null): void

export declare function toJsObj(): object

export declare function tsfnAsyncCall(func: (...args: any[]) => any): Promise<void>

export declare function tsfnCallWithCallback(func: (...args: any[]) => any): void

export declare function tsfnReturnPromise(func: (err: Error | null, arg: number) => any): Promise<number>

export declare function tsfnReturnPromiseTimeout(func: (err: Error | null, arg: number) => any): Promise<number>

export declare function tsfnThrowFromJs(tsfn: (err: Error | null, arg: number) => any): Promise<number>

export declare function tsRename(a: { foo: number }): string[]

export interface TsTypeChanged {
  typeOverride: object
  typeOverrideOptional?: object
}

export declare function u16ArrayToArray(input: Uint16Array): Array<number>

export declare function u32ArrayToArray(input: Uint32Array): Array<number>

export declare function u64ArrayToArray(input: BigUint64Array): Array<bigint>

export declare function u8ArrayToArray(input: Uint8Array): Array<number>

export interface UseNullableStruct {
  requiredNumberField: number
  requiredStringField: string
  nullableNumberField: number | null
  nullableStringField: string | null
}

export interface UtcDates {
  start: Date
  end?: Date
}

export declare function validateArray(arr: Array<number>): number

export declare function validateBigint(input: bigint): bigint

export declare function validateBoolean(i: boolean): boolean

export declare function validateBuffer(b: Buffer): number

export declare function validateBufferSlice(input: Buffer): number

export declare function validateDate(d: Date): number

export declare function validateDateTime(d: Date): number

export declare function validateEnum(input: KindInValidate): number

export declare function validateExternal(e: ExternalObject<number>): number

export declare function validateFunction(cb: () => number): number

export declare function validateHashMap(input: Record<string, number>): number

export declare function validateNull(i: null): boolean

export declare function validateNumber(i: number): number

export declare function validateOptional(input1?: string | undefined | null, input2?: boolean | undefined | null): boolean

export declare function validatePromise(p: Promise<number>): Promise<number>

export declare function validateString(s: string): string

export declare function validateStringEnum(input: StatusInValidate): string

export declare function validateSymbol(s: symbol): boolean

export declare function validateTypedArray(input: Uint8Array): number

export declare function validateTypedArraySlice(input: Uint8Array): number

export declare function validateUint8ClampedSlice(input: Uint8ClampedArray): number

export declare function validateUndefined(i: undefined): boolean

export declare function withAbortController(a: number, b: number, signal: AbortSignal): Promise<number>

export declare function withoutAbortController(a: number, b: number): Promise<number>

export declare function xxh64Alias(input: Buffer): bigint

export namespace xxh2 {
  export function xxh2Plus(a: number, b: number): number
  export function xxh3Xxh64Alias(input: Buffer): bigint
}

export namespace xxh3 {
  /** Xxh3 class */
  export class Xxh3 {
    constructor()
    /** update */
    update(input: Buffer): void
    digest(): bigint
  }
  export const ALIGNMENT: number
  /** xxh128 function */
  export function xxh128(input: Buffer): bigint
  export function xxh3_64(input: Buffer): bigint
}

