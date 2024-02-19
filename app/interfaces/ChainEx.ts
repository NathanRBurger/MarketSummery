export interface ChainExMarketSummery {
  status: string;
  count: number;
  data: ChainExMarketData[];
}

export interface ChainExMarketData {
  market: string;
  coin_decimals: string;
  exchange_decimals: string;
  yesterday_price: string;
  last_price: string;
  volume_amount: string;
  last_trade_time: string;
  change: string;
  top_bid: string;
  top_ask: string;
  spread_price: number;
  '24hhigh': string;
  '24hlow': string;
  '24hvol': string;
  code: string;
  name: string;
  exchange: string;
}