import { BigNumberish } from "@ethersproject/bignumber";

export type GuildForm = GuildDetail & {
  name: string;
  symbol: string;
};

export type GuildDetail = {
  description: string;
  uri: string;
  oracleContract: string;
  rewardToken: string;
  rewardAmount: BigNumberish;
  totalRewardAmount: BigNumberish;
};
