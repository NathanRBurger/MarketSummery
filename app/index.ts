import axios from 'axios';
import { ChainExMarketData } from './interfaces/ChainEx';
import { MyMarketSummery } from './interfaces/MarketSummery';
import { VALRMarketSummery } from './interfaces/VALR';

CalculateDifferences();

/**
 * Calculates the differences between market summary data from Chainex and VALR exchanges.
 */
async function CalculateDifferences() {
  var ChainExData = await getChainExMarketSummery();
  var VALRData = await getVALRMarketSummery();
  
  if (VALRData.length > ChainExData.length) {
     for (let i = 0; i < VALRData.length; i++) {
        for (let j = 0; j < ChainExData.length; j++) {
          if (VALRData[i].currency_code=ChainExData[j].currency_code) {
            console.log("for " + VALRData[i].currency_code);
            console.log("----------------------------------------------------------------------------");
            console.log("Header:         VALR response       Chainex response    Comparison");
            console.log("top_ask:        " + VALRData[i].top_ask.padEnd(20) + ChainExData[j].top_ask.padEnd(20) + (ChainExData[j].top_ask > VALRData[i].top_ask ? "CX" : "VALR"));
            console.log("top_bid:        " + VALRData[i].top_bid.padEnd(20) + ChainExData[j].top_bid.padEnd(20) + (ChainExData[j].top_bid > VALRData[i].top_bid ? "CX" : "VALR"));
            console.log("last_price:     " + VALRData[i].last_price.padEnd(20) + ChainExData[j].last_price.padEnd(20) + (ChainExData[j].last_price > VALRData[i].last_price ? "CX" : "VALR"));
            console.log("volume_amount:  " + VALRData[i].volume_amount.padEnd(20) + ChainExData[j].volume_amount.padEnd(20) + (ChainExData[j].volume_amount > VALRData[i].volume_amount ? "CX" : "VALR"));
            console.log("highPrice:      " + VALRData[i].highPrice.padEnd(20) + ChainExData[j].highPrice.padEnd(20) + (ChainExData[j].highPrice > VALRData[i].highPrice ? "CX" : "VALR"));
            console.log("lowPrice:       " + VALRData[i].lowPrice.padEnd(20) + ChainExData[j].lowPrice.padEnd(20) + (ChainExData[j].lowPrice > VALRData[i].lowPrice ? "CX" : "VALR"));
            console.log("change:         " + VALRData[i].change.padEnd(20) + ChainExData[j].change.padEnd(20) + (ChainExData[j].change > VALRData[i].change ? "CX" : "VALR"));
            console.log("----------------------------------------------------------------------------");
          }
        }
       }
  } else {
    for (let i = 0; i < ChainExData.length; i++) {
      for (let j = 0; j < VALRData.length; j++) {
        if (ChainExData[i].currency_code=VALRData[j].currency_code) {
          console.log("for " + ChainExData[i].currency_code);
          console.log("----------------------------------------------------------------------------");
          console.log("Header        VALR response       Chainex response    Comparison");
          console.log("top_ask       " + VALRData[j].top_ask.padEnd(20) + ChainExData[i].top_ask.padEnd(20) + (ChainExData[i].top_ask > VALRData[j].top_ask ? "CX" : "VALR"));
          console.log("top_bid       " + VALRData[j].top_bid.padEnd(20) + ChainExData[i].top_bid.padEnd(20) + (ChainExData[i].top_bid > VALRData[j].top_bid ? "CX" : "VALR"));
          console.log("last_price    " + VALRData[j].last_price.padEnd(20) + ChainExData[i].last_price.padEnd(20) + (ChainExData[i].last_price > VALRData[j].last_price ? "CX" : "VALR"));
          console.log("volume_amount " + VALRData[j].volume_amount.padEnd(20) + ChainExData[i].volume_amount.padEnd(20) + (ChainExData[i].volume_amount > VALRData[j].volume_amount ? "CX" : "VALR"));
          console.log("highPrice     " + VALRData[j].highPrice.padEnd(20) + ChainExData[i].highPrice.padEnd(20) + (ChainExData[i].highPrice > VALRData[j].highPrice ? "CX" : "VALR"));
          console.log("lowPrice      " + VALRData[j].lowPrice.padEnd(20) + ChainExData[i].lowPrice.padEnd(20) + (ChainExData[i].lowPrice > VALRData[j].lowPrice ? "CX" : "VALR"));
          console.log("change        " + VALRData[j].change.padEnd(20) + ChainExData[i].change.padEnd(20) + (ChainExData[i].change > VALRData[j].change ? "CX" : "VALR"));
          console.log("----------------------------------------------------------------------------");
        }
      }
    }
  }
}

/**
 * Retrieves market summary data from the Chainex exchange.
 * @returns A promise that resolves to an array of market summary data.
 */
async function getChainExMarketSummery(): Promise<MyMarketSummery[]> {
  const response = await axios.get('https://api.chainex.io/market/summary/');

  const data: MyMarketSummery[] = [];
  response.data.data.forEach((element: ChainExMarketData) => {
    const temp: MyMarketSummery = {
      change: element.change,
      highPrice: element["24hhigh"],
      last_price: element.last_price,
      lowPrice: element["24hlow"],
      top_ask: element.top_ask,
      top_bid: element.top_bid,
      volume_amount: element.volume_amount,
      currency_code: element.code,
    };

    data.push(temp);
  });

  return data;
}

/**
 * Retrieves market summary data from the VALR exchange.
 * @returns A promise that resolves to an array of market summary data.
 */
async function getVALRMarketSummery(): Promise<MyMarketSummery[]> {
  const response = await axios.get('https://api.valr.com/v1/public/marketsummary');

  const data: MyMarketSummery[] = [];
  response.data.forEach((element: VALRMarketSummery) => {
    const temp: MyMarketSummery = {
      change:element.changeFromPrevious,
      highPrice:element.highPrice,
      last_price: element.lastTradedPrice,
      lowPrice:element.lowPrice ,
      top_ask: element.askPrice,
      top_bid: element.bidPrice,
      volume_amount: element.baseVolume,
      currency_code: element.currencyPair,
    };

    data.push(temp);
  });

  return data;
}
