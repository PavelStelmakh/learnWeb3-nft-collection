import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { tokenId } = params;

  const name = `Crypto Devs #${ tokenId }`;
  const description = 'CryptoDevs is NFT Collection for Web3 Developers';
  const image = `${ new URL(request.url).origin }/cryptodevs/${ Number(tokenId) - 1 }.svg`;

  return NextResponse.json({ name, description, image });
}
