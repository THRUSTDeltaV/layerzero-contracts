module.exports = {
    beam: {
        BeamNativeOFT: {
            name: "LayerZero Beam",
            symbol: "LZBEAM",
            withFee: true,
            isNative: true,
        },
        NativeOFTWithFeeUpgradeable: {
            name: "LayerZero Merit Circle",
            symbol: "LZMC",
            withFee: true,
            isNative: true,
        },
        ExtendedONFT721Upgradeable: {
            name: "Edenhorde",
            symbol: "EH",
            baseUri: "https://ipfs.io/ipfs/QmbHSG2Y14wy2mSF7L57fzE4evv1BhTtUWtkzUaSnUsacB/",
            royaltyBasePoints: 500,
            minGas: 100000,
        },
        UsdcOFT: {
            name: "USD Coin",
            symbol: "USDC",
            withFee: true,
        },
        UsdtOFT: {
            name: "Tether USD",
            symbol: "USDT",
            withFee: true,
        },
        AvaxOFT: {
            name: "Avalanche",
            symbol: "AVAX",
            withFee: true,
        },
        GobOFT: {
            name: "Goons of Balatroon",
            symbol: "GOB",
            withFee: true,
        },
    },
    "beam-testnet": {
        BeamNativeOFT: {
            name: "LayerZero Beam",
            symbol: "LZBEAM",
            withFee: true,
            isNative: true,
        },
        NativeOFTWithFeeUpgradeable: {
            name: "LayerZero Wrapped Merit Circle",
            symbol: "LZMC",
            withFee: true,
            isNative: true,
        },
        NativeOFTV2: {
            name: "LayerZero Merit Circle",
            symbol: "LZMC",
            isNative: true,
        },
        ExtendedONFT721: {
            name: "Snakes on a chain",
            symbol: "SNAKE",
            baseUri: "https://snake-on-a-chain-euppi.ondigitalocean.app/token/",
            royaltyBasePoints: 500,
            minGas: 100000,
        },
        UsdcOFT: {
            name: "USD Coin",
            symbol: "USDC",
            withFee: true,
        },
        UsdtOFT: {
            name: "Tether USD",
            symbol: "USDT",
            withFee: true,
        },
        AvaxOFT: {
            name: "Avalanche",
            symbol: "AVAX",
            withFee: true,
        },
    },
    ethereum: {
        BeamProxyOFT: {
            address: "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE", // BEAM
            withFee: true,
            minGas: 10000000,
        },
        ProxyOFTWithFeeUpgradeable: {
            address: "0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6", // MC
            withFee: true,
        },
        ProxyONFT721Upgradeable: {
            address: "0x9eEAeCBE2884AA7e82f450E3Fc174F30Fc2a8de3", // Edenhorde Eclipse
            minGas: 10000000,
        },
        UsdcProxyOFT: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // USDC
            withFee: true,
            minGas: 10000000,
        },
        UsdtProxyOFT: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT
            withFee: true,
            minGas: 10000000,
        },
    },
    goerli: {
        BeamProxyOFT: {
            address: "TODO", // BEAM
            withFee: true,
            minGas: 10000000,
        },
        UsdcProxyOFT: {
            address: "0x2724A590fe9cC7c66A83204aa11D6ec7Aa8e7C58", // USDC
            withFee: true,
            minGas: 10000000,
        },
        UsdtProxyOFT: {
            address: "0x908C7A34a87FD8e207BC4585707E484Ed2c9E8aE", // USDT
            withFee: true,
            minGas: 10000000,
        },
    },
    avalanche: {
        AvaxNativeOFT: {
            name: "LayerZero Avalanche",
            symbol: "LZAVAX",
            withFee: true,
            isNative: true,
            minGas: 10000000,
        },
        BeamOFT: {
            name: "Beam",
            symbol: "BEAM",
            withFee: true,
        },
    },
    fuji: {
        ProxyOFTWithFeeUpgradeable: {
            address: "0x955723e26bd1b2165391BCaf39A92f77b30FFe01", // MC
            withFee: true,
        },
        ProxyONFT721: {
            address: "0x588348d84498d0689B76F89438bE58999a5434EE", // Snakes on a chain
            minGas: 10000000,
        },
        AvaxNativeOFT: {
            name: "LayerZero Avalanche",
            symbol: "LZAVAX",
            withFee: true,
            isNative: true,
            minGas: 10000000,
        },
        BeamOFT: {
            name: "Beam",
            symbol: "BEAM",
            withFee: true,
        },
    },
    arbitrum: {
        GobProxyOFT: {
            address: "0xa2f9ecf83a48b86265ff5fd36cdbaaa1f349916c", // USDT
            withFee: true,
            minGas: 10000000,
        },
    },
}
