import AWS from 'aws-sdk';
import createError from 'http-errors';
import getAuctionById from './getAuction'
const dynamodb = new AWS.DynamoDB.DocumentClient();
import commonMiddleware from '../lib/commonMiddleware';

async function deleteAuction(event, context) {
  console.log(event)
  const { id } = event.pathParameters;

  // const hasAuction = await getAuctionById(id)

  // if (!hasAuction) {
  //   createError.NotFound('Auction Not Found')
  // }
  // console.log(`Chegou até aqui: ${hasAuction} ID: ${id}`)
  try {
    // console.log(`Chegou até aqui: ${hasAuction} ID: ${id}`)
    await dynamodb.delete({
      TableName: process.env.AUCTIONS_TABLE_NAME,
      Key: {
        HashKey: 'HASH'
      }
    }).promise()
  } catch (error) {
    createError.BadRequest(error)
    // console.log(`Chegou até aqui: ${hasAuction} Error: ${error}`)
  }

  return {
    statusCode: 204,
    message: `Auction ${id} deleted`
  }

}

export const handler = commonMiddleware(deleteAuction);