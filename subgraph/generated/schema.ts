// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Artist extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("balance", Value.fromBigInt(BigInt.zero()));
    this.set("joinedAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Artist entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Artist must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Artist", id.toString(), this);
    }
  }

  static load(id: string): Artist | null {
    return changetype<Artist | null>(store.get("Artist", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get bio(): string | null {
    let value = this.get("bio");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bio(value: string | null) {
    if (!value) {
      this.unset("bio");
    } else {
      this.set("bio", Value.fromString(<string>value));
    }
  }

  get tracks(): Array<string> {
    let value = this.get("tracks");
    return value!.toStringArray();
  }

  set tracks(value: Array<string>) {
    this.set("tracks", Value.fromStringArray(value));
  }

  get joinedAt(): BigInt {
    let value = this.get("joinedAt");
    return value!.toBigInt();
  }

  set joinedAt(value: BigInt) {
    this.set("joinedAt", Value.fromBigInt(value));
  }
}

export class Track extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("artist", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("content", Value.fromString(""));
    this.set("cover", Value.fromString(""));
    this.set("royaltyFee", Value.fromI32(0));
    this.set("royaltyReceiver", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("supply", Value.fromBigInt(BigInt.zero()));
    this.set("minted", Value.fromBigInt(BigInt.zero()));
    this.set("mintPrice", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Track entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Track must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Track", id.toString(), this);
    }
  }

  static load(id: string): Track | null {
    return changetype<Track | null>(store.get("Track", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get artist(): string {
    let value = this.get("artist");
    return value!.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get cover(): string {
    let value = this.get("cover");
    return value!.toString();
  }

  set cover(value: string) {
    this.set("cover", Value.fromString(value));
  }

  get royaltyFee(): i32 {
    let value = this.get("royaltyFee");
    return value!.toI32();
  }

  set royaltyFee(value: i32) {
    this.set("royaltyFee", Value.fromI32(value));
  }

  get royaltyReceiver(): string {
    let value = this.get("royaltyReceiver");
    return value!.toString();
  }

  set royaltyReceiver(value: string) {
    this.set("royaltyReceiver", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value!.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get minted(): BigInt {
    let value = this.get("minted");
    return value!.toBigInt();
  }

  set minted(value: BigInt) {
    this.set("minted", Value.fromBigInt(value));
  }

  get mintPrice(): BigInt {
    let value = this.get("mintPrice");
    return value!.toBigInt();
  }

  set mintPrice(value: BigInt) {
    this.set("mintPrice", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("track", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("mintedAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get track(): string {
    let value = this.get("track");
    return value!.toString();
  }

  set track(value: string) {
    this.set("track", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get mintedAt(): BigInt {
    let value = this.get("mintedAt");
    return value!.toBigInt();
  }

  set mintedAt(value: BigInt) {
    this.set("mintedAt", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokens", Value.fromStringArray(new Array(0)));
    this.set("Tracks", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get Tracks(): Array<string> {
    let value = this.get("Tracks");
    return value!.toStringArray();
  }

  set Tracks(value: Array<string>) {
    this.set("Tracks", Value.fromStringArray(value));
  }
}
