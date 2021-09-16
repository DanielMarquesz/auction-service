import { getEndedAuctions } from '../lib/getEndedAuction'

async function processAuctions(event, context) {
  const auctionsClose = await getEndedAuctions();
  console.log(auctionsClose);
}

export const handler = processAuctions;