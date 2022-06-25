import { Guild } from "@/hardhat/typechain";
import { GuildForm } from "@/interfaces/guild";
import { guildTxFn } from "@/utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";
import { useContracts } from "./useContract";
import { useToast } from "./useToast";
import { useWalletAccount } from "./useWalletAccount";

export const useGuild = () => {
  const { account, chainId } = useWalletAccount();
  const { toastError } = useToast();
  const contracts = useContracts();
  const web3Context = useWeb3React();
  const runGuildTxFn = guildTxFn(web3Context, contracts);

  const createGuild = async (data: GuildForm) => {
    // validation
    if (!(account && chainId)) {
      toastError("Wallet Connection Error");
      return;
    }

    if (!contracts) {
      toastError("Not valid Network or something wrong");
      return;
    }

    const d = {};
    const details = {
      description: data.description,
      uri: data.uri,
      oracleContract: data.oracleContract,
      rewardToken: data.rewardToken,
      rewardAmount: data.rewardAmount,
      totalRewardAmount: data.totalRewardAmount,
    };
    console.log(details);
    const tx = await runGuildTxFn((g) =>
      g.createGuild(data.name, data.symbol, details)
    ).catch(async (error) => {
      console.log("error", error);
      toastError("transaction failed...");
      return;
    });

    if (!tx) {
      toastError("transaction failed...");
      return;
    }

    const receipt = await tx.wait();

    console.log("receipt", receipt);
    if (receipt.events && receipt.events.length > 0) {
      //listen events
      for (const event of receipt.events) {
        if (event?.event === "GuildCreated") {
          console.log("GuildCreated");
        }
      }
    }
    return receipt.transactionHash;
  };

  return { createGuild };
};
