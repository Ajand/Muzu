// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccountSettedUp extends ethereum.Event {
  get params(): AccountSettedUp__Params {
    return new AccountSettedUp__Params(this);
  }
}

export class AccountSettedUp__Params {
  _event: AccountSettedUp;

  constructor(event: AccountSettedUp) {
    this._event = event;
  }

  get _userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _hash(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class AlbumDefined extends ethereum.Event {
  get params(): AlbumDefined__Params {
    return new AlbumDefined__Params(this);
  }
}

export class AlbumDefined__Params {
  _event: AlbumDefined;

  constructor(event: AlbumDefined) {
    this._event = event;
  }

  get _artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _albumId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _dataHash(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class AlbumMinted extends ethereum.Event {
  get params(): AlbumMinted__Params {
    return new AlbumMinted__Params(this);
  }
}

export class AlbumMinted__Params {
  _event: AlbumMinted;

  constructor(event: AlbumMinted) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _albumId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TrackDefined extends ethereum.Event {
  get params(): TrackDefined__Params {
    return new TrackDefined__Params(this);
  }
}

export class TrackDefined__Params {
  _event: TrackDefined;

  constructor(event: TrackDefined) {
    this._event = event;
  }

  get _artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _trackId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _albumId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _dataHash(): string {
    return this._event.parameters[3].value.toString();
  }

  get _mintPrice(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _supply(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _royaltyReceiver(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get _royaltyFraction(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class TrackMinted extends ethereum.Event {
  get params(): TrackMinted__Params {
    return new TrackMinted__Params(this);
  }
}

export class TrackMinted__Params {
  _event: TrackMinted;

  constructor(event: TrackMinted) {
    this._event = event;
  }

  get _trackId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _minter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdrawl extends ethereum.Event {
  get params(): Withdrawl__Params {
    return new Withdrawl__Params(this);
  }
}

export class Withdrawl__Params {
  _event: Withdrawl;

  constructor(event: Withdrawl) {
    this._event = event;
  }

  get _artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Muzu__albumsResult {
  value0: Address;
  value1: string;

  constructor(value0: Address, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class Muzu__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Muzu__tracksResultRoyaltyInfoStruct extends ethereum.Tuple {
  get receiver(): Address {
    return this[0].toAddress();
  }

  get royaltyFraction(): BigInt {
    return this[1].toBigInt();
  }
}

export class Muzu__tracksResult {
  value0: Address;
  value1: string;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: Muzu__tracksResultRoyaltyInfoStruct;

  constructor(
    value0: Address,
    value1: string,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: Muzu__tracksResultRoyaltyInfoStruct
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromTuple(this.value6));
    return map;
  }
}

export class Muzu extends ethereum.SmartContract {
  static bind(address: Address): Muzu {
    return new Muzu("Muzu", address);
  }

  albums(param0: BigInt): Muzu__albumsResult {
    let result = super.call("albums", "albums(uint256):(address,string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new Muzu__albumsResult(result[0].toAddress(), result[1].toString());
  }

  try_albums(param0: BigInt): ethereum.CallResult<Muzu__albumsResult> {
    let result = super.tryCall("albums", "albums(uint256):(address,string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Muzu__albumsResult(value[0].toAddress(), value[1].toString())
    );
  }

  artistsBalances(param0: Address): BigInt {
    let result = super.call(
      "artistsBalances",
      "artistsBalances(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_artistsBalances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "artistsBalances",
      "artistsBalances(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  doesOwnTrack(_trackId: BigInt, _userAddress: Address): boolean {
    let result = super.call(
      "doesOwnTrack",
      "doesOwnTrack(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_trackId),
        ethereum.Value.fromAddress(_userAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_doesOwnTrack(
    _trackId: BigInt,
    _userAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "doesOwnTrack",
      "doesOwnTrack(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_trackId),
        ethereum.Value.fromAddress(_userAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  royaltyInfo(_tokenId: BigInt, _salePrice: BigInt): Muzu__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );

    return new Muzu__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    _tokenId: BigInt,
    _salePrice: BigInt
  ): ethereum.CallResult<Muzu__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Muzu__royaltyInfoResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokensToTracks(param0: BigInt): BigInt {
    let result = super.call(
      "tokensToTracks",
      "tokensToTracks(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_tokensToTracks(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokensToTracks",
      "tokensToTracks(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  trackTokens(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "trackTokens",
      "trackTokens(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_trackTokens(param0: BigInt, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "trackTokens",
      "trackTokens(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tracks(param0: BigInt): Muzu__tracksResult {
    let result = super.call(
      "tracks",
      "tracks(uint256):(address,string,uint256,uint256,uint256,uint256,(address,uint96))",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Muzu__tracksResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      changetype<Muzu__tracksResultRoyaltyInfoStruct>(result[6].toTuple())
    );
  }

  try_tracks(param0: BigInt): ethereum.CallResult<Muzu__tracksResult> {
    let result = super.tryCall(
      "tracks",
      "tracks(uint256):(address,string,uint256,uint256,uint256,uint256,(address,uint96))",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Muzu__tracksResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        changetype<Muzu__tracksResultRoyaltyInfoStruct>(value[6].toTuple())
      )
    );
  }

  usdcAddress(): Address {
    let result = super.call("usdcAddress", "usdcAddress():(address)", []);

    return result[0].toAddress();
  }

  try_usdcAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdcAddress", "usdcAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userProfiles(param0: Address): string {
    let result = super.call("userProfiles", "userProfiles(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toString();
  }

  try_userProfiles(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall(
      "userProfiles",
      "userProfiles(address):(string)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class DefineAlbumCall extends ethereum.Call {
  get inputs(): DefineAlbumCall__Inputs {
    return new DefineAlbumCall__Inputs(this);
  }

  get outputs(): DefineAlbumCall__Outputs {
    return new DefineAlbumCall__Outputs(this);
  }
}

export class DefineAlbumCall__Inputs {
  _call: DefineAlbumCall;

  constructor(call: DefineAlbumCall) {
    this._call = call;
  }

  get _info(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _tracks(): Array<DefineAlbumCall_tracksStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      DefineAlbumCall_tracksStruct
    >();
  }
}

export class DefineAlbumCall__Outputs {
  _call: DefineAlbumCall;

  constructor(call: DefineAlbumCall) {
    this._call = call;
  }
}

export class DefineAlbumCall_tracksStruct extends ethereum.Tuple {
  get metadata(): string {
    return this[0].toString();
  }

  get mintPrice(): BigInt {
    return this[1].toBigInt();
  }

  get supply(): BigInt {
    return this[2].toBigInt();
  }

  get royaltyInfo(): DefineAlbumCall_tracksRoyaltyInfoStruct {
    return changetype<DefineAlbumCall_tracksRoyaltyInfoStruct>(
      this[3].toTuple()
    );
  }
}

export class DefineAlbumCall_tracksRoyaltyInfoStruct extends ethereum.Tuple {
  get receiver(): Address {
    return this[0].toAddress();
  }

  get royaltyFraction(): BigInt {
    return this[1].toBigInt();
  }
}

export class DefineTrackCall extends ethereum.Call {
  get inputs(): DefineTrackCall__Inputs {
    return new DefineTrackCall__Inputs(this);
  }

  get outputs(): DefineTrackCall__Outputs {
    return new DefineTrackCall__Outputs(this);
  }
}

export class DefineTrackCall__Inputs {
  _call: DefineTrackCall;

  constructor(call: DefineTrackCall) {
    this._call = call;
  }

  get _track(): DefineTrackCall_trackStruct {
    return changetype<DefineTrackCall_trackStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class DefineTrackCall__Outputs {
  _call: DefineTrackCall;

  constructor(call: DefineTrackCall) {
    this._call = call;
  }
}

export class DefineTrackCall_trackStruct extends ethereum.Tuple {
  get metadata(): string {
    return this[0].toString();
  }

  get mintPrice(): BigInt {
    return this[1].toBigInt();
  }

  get supply(): BigInt {
    return this[2].toBigInt();
  }

  get royaltyInfo(): DefineTrackCall_trackRoyaltyInfoStruct {
    return changetype<DefineTrackCall_trackRoyaltyInfoStruct>(
      this[3].toTuple()
    );
  }
}

export class DefineTrackCall_trackRoyaltyInfoStruct extends ethereum.Tuple {
  get receiver(): Address {
    return this[0].toAddress();
  }

  get royaltyFraction(): BigInt {
    return this[1].toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _usdcAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintAlbumCall extends ethereum.Call {
  get inputs(): MintAlbumCall__Inputs {
    return new MintAlbumCall__Inputs(this);
  }

  get outputs(): MintAlbumCall__Outputs {
    return new MintAlbumCall__Outputs(this);
  }
}

export class MintAlbumCall__Inputs {
  _call: MintAlbumCall;

  constructor(call: MintAlbumCall) {
    this._call = call;
  }

  get _albumId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintAlbumCall__Outputs {
  _call: MintAlbumCall;

  constructor(call: MintAlbumCall) {
    this._call = call;
  }
}

export class MintTrackCall extends ethereum.Call {
  get inputs(): MintTrackCall__Inputs {
    return new MintTrackCall__Inputs(this);
  }

  get outputs(): MintTrackCall__Outputs {
    return new MintTrackCall__Outputs(this);
  }
}

export class MintTrackCall__Inputs {
  _call: MintTrackCall;

  constructor(call: MintTrackCall) {
    this._call = call;
  }

  get _trackId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintTrackCall__Outputs {
  _call: MintTrackCall;

  constructor(call: MintTrackCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetupAccountCall extends ethereum.Call {
  get inputs(): SetupAccountCall__Inputs {
    return new SetupAccountCall__Inputs(this);
  }

  get outputs(): SetupAccountCall__Outputs {
    return new SetupAccountCall__Outputs(this);
  }
}

export class SetupAccountCall__Inputs {
  _call: SetupAccountCall;

  constructor(call: SetupAccountCall) {
    this._call = call;
  }

  get _hash(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetupAccountCall__Outputs {
  _call: SetupAccountCall;

  constructor(call: SetupAccountCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
