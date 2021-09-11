import { PublicKey } from "@solana/web3.js";
import Arweave from "arweave"
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

export const ArtweaveContext = createContext({ artPubkey: '', artContent: {} })

export const useArtweaveContext = () => useContext(ArtweaveContext)

//export const ArtweaveProvider = async (pubKey: PublicKey | null) => {

export const ArtweaveProvider = ({children}) => {
  const [artPubkey, setArtPubkey] = useState('')
  const [artContent, setArtContent] = useState({})
  const [artSign, setArtSign] = useState({})


    const arweave = Arweave.init({
        host: 'arweave.net',
        port: '443',
        protocol: 'https',
        timeout: 20000,     // Network request timeouts in milliseconds
        logging: false,     // Enable network request logging
    })


  const contextValue = useMemo(() => ({
        artPubkey,
        artContent,
      }), [artPubkey, artContent]);

  useEffect(()  => {
    const callArwave = (async () => {
      const arweaveRes = await arweave.transactions
      .getData('u_4zcbMCmiYBlnPq3pqMuc9qCXVVXEwYRms3M_bL-QY',
      {decode: true, string: true})
      setArtContent(JSON.parse(arweaveRes.toString()))
    })  
    callArwave()
  }, [])

    return (
      <ArtweaveContext.Provider value={contextValue}>
        {children}
      </ArtweaveContext.Provider>
    )
}
