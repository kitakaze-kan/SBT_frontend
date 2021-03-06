/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Guild {
  export type GuildDetailsStruct = {
    description: PromiseOrValue<string>;
    uri: PromiseOrValue<string>;
    oracleContract: PromiseOrValue<string>;
    rewardToken: PromiseOrValue<string>;
    rewardAmount: PromiseOrValue<BigNumberish>;
    totalRewardAmount: PromiseOrValue<BigNumberish>;
  };

  export type GuildDetailsStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    description: string;
    uri: string;
    oracleContract: string;
    rewardToken: string;
    rewardAmount: BigNumber;
    totalRewardAmount: BigNumber;
  };
}

export interface GuildInterface extends utils.Interface {
  functions: {
    "claim(address,uint256,uint256,uint256,uint256[8])": FunctionFragment;
    "createGuild(string,string,(string,string,address,address,uint256,uint256))": FunctionFragment;
    "guildCounter()": FunctionFragment;
    "guildIdToNFTAddress(uint256)": FunctionFragment;
    "guildToRewardsLeft(uint256)": FunctionFragment;
    "guilds(uint256)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "createGuild"
      | "guildCounter"
      | "guildIdToNFTAddress"
      | "guildToRewardsLeft"
      | "guilds"
      | "mint"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createGuild",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      Guild.GuildDetailsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "guildCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "guildIdToNFTAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "guildToRewardsLeft",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "guilds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGuild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guildCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guildIdToNFTAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guildToRewardsLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "guilds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;

  events: {
    "GuildCreated()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GuildCreated"): EventFragment;
}

export interface GuildCreatedEventObject {}
export type GuildCreatedEvent = TypedEvent<[], GuildCreatedEventObject>;

export type GuildCreatedEventFilter = TypedEventFilter<GuildCreatedEvent>;

export interface Guild extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuildInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claim(
      receiver: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createGuild(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _guildDetails: Guild.GuildDetailsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    guildCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    guildIdToNFTAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    guildToRewardsLeft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    guilds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber] & {
        description: string;
        uri: string;
        oracleContract: string;
        rewardToken: string;
        rewardAmount: BigNumber;
        totalRewardAmount: BigNumber;
      }
    >;

    mint(
      account: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    receiver: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    root: PromiseOrValue<BigNumberish>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    proof: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createGuild(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _guildDetails: Guild.GuildDetailsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  guildCounter(overrides?: CallOverrides): Promise<BigNumber>;

  guildIdToNFTAddress(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  guildToRewardsLeft(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  guilds(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber, BigNumber] & {
      description: string;
      uri: string;
      oracleContract: string;
      rewardToken: string;
      rewardAmount: BigNumber;
      totalRewardAmount: BigNumber;
    }
  >;

  mint(
    account: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      receiver: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    createGuild(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _guildDetails: Guild.GuildDetailsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    guildCounter(overrides?: CallOverrides): Promise<BigNumber>;

    guildIdToNFTAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    guildToRewardsLeft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guilds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber] & {
        description: string;
        uri: string;
        oracleContract: string;
        rewardToken: string;
        rewardAmount: BigNumber;
        totalRewardAmount: BigNumber;
      }
    >;

    mint(
      account: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GuildCreated()"(): GuildCreatedEventFilter;
    GuildCreated(): GuildCreatedEventFilter;
  };

  estimateGas: {
    claim(
      receiver: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createGuild(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _guildDetails: Guild.GuildDetailsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    guildCounter(overrides?: CallOverrides): Promise<BigNumber>;

    guildIdToNFTAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guildToRewardsLeft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guilds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      account: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      receiver: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createGuild(
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _guildDetails: Guild.GuildDetailsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    guildCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guildIdToNFTAddress(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guildToRewardsLeft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guilds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      account: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
