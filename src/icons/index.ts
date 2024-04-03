import search from "./search.svg";
import heart from './heart.svg'
import heart_outline from './heart_outline.svg'
import supervise from './supervise.svg'
import backtest from './backtest.svg'
import stop_loss from './stop_loss.svg'
import stop_profit from './stop_profit.svg'
import holding_time from './holding_time.svg'
import automatic_updates from './automatic_updates.svg'
import performance from './performance.svg'

const Icon: { [key: string]: string } = {
  search,
  heart,
  heart_outline,
  supervise,
  backtest,
  stop_loss,
  stop_profit,
  holding_time,
  automatic_updates,
  performance
};

export default Icon;

// const req = require.context('.', true, /\.\/[^/]+\/index\.js$/);

// req.keys().forEach((key) => {
//   const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
//   module.exports[componentName] = req(key).default;
// });
