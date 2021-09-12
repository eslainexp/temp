import { PublicKey } from "@solana/web3.js";
import { useArtweaveContext } from "../contexts/arweave";

export function useArtweave(pubKey: PublicKey | null) {
  const arweave = useArtweaveContext()
  return arweave
}
