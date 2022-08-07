import { BigInt, ipfs, json, Address } from "@graphprotocol/graph-ts";
import {
  Muzu,
  AccountSettedUp,
  AlbumDefined,
  AlbumMinted,
  Approval,
  ApprovalForAll,
  Initialized,
  OwnershipTransferred,
  TrackDefined,
  Transfer,
  Withdrawl,
} from "../generated/Muzu/Muzu";
import { Artist, Track, Token, User } from "../generated/schema";

export function handleAccountSettedUp(event: AccountSettedUp): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  let artist = Artist.load(event.params._userAddress.toHex());

  if (!artist) {
    artist = new Artist(event.params._userAddress.toHex());
    artist.balance = BigInt.fromI32(0);
    artist.joinedAt = event.block.timestamp;
  }

  let data = ipfs.cat(event.params._hash.toString());
  if (data) {
    let value = json.fromBytes(data).toObject();
    if (value) {
      const name = value.get("name");
      if (name) {
        artist.name = name.toString();
      }
      const bio = value.get("bio");
      if (bio) {
        artist.bio = bio.toString();
      }
    }
  }

  artist.save();

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  //if (!entity) {
  //  entity = new ExampleEntity(event.transaction.from.toHex());
  //
  //  // Entity fields can be set using simple assignments
  //  entity.count = BigInt.fromI32(0);
  //}
  //
  //// BigInt and BigDecimal math are supported
  //entity.count = entity.count + BigInt.fromI32(1);
  //
  //// Entity fields can be set based on event parameters
  //entity._userAddress = event.params._userAddress;
  //entity._hash = event.params._hash;
  //
  //// Entities can be written to the store with `.save()`
  //entity.save();
  //
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.albums(...)
  // - contract.artistsBalances(...)
  // - contract.balanceOf(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.royaltyInfo(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.tokensToTracks(...)
  // - contract.tracks(...)
  // - contract.usdcAddress(...)
  // - contract.userProfiles(...)
}

export function handleAlbumDefined(event: AlbumDefined): void {}

export function handleAlbumMinted(event: AlbumMinted): void {}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTrackDefined(event: TrackDefined): void {
  let track = Track.load(event.params._trackId.toString());

  if (!track) {
    track = new Track(event.params._trackId.toString());
    track.artist = event.params._artist.toHex();
    track.royaltyFee = event.params._royaltyFraction.toI32();
    track.royaltyReceiver = event.params._royaltyReceiver.toHex();
    track.createdAt = event.block.timestamp;
    track.supply = event.params._supply;
    track.mintPrice = event.params._mintPrice;
    track.minted = BigInt.fromI64(0);
  }

  let data = ipfs.cat(event.params._dataHash.toString());
  if (data) {
    let value = json.fromBytes(data).toObject();
    if (value) {
      const name = value.get("name");
      if (name) {
        track.name = name.toString();
      }
      const cover = value.get("cover");
      if (cover) {
        track.cover = cover.toString();
      }
      const content = value.get("track");
      if (content) {
        track.content = content.toString();
      }
    }
  }

  track.save();
}

export function handleTransfer(event: Transfer): void {}

export function handleWithdrawl(event: Withdrawl): void {}
