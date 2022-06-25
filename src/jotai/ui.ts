import { atom, useAtom, useSetAtom } from "jotai";

export const showConnectWalletModal = atom<boolean>(false);

export const useShowConnectWalletModal = () => useAtom(showConnectWalletModal);
export const useSetConnectWalletModal = () =>
  useSetAtom(showConnectWalletModal);
