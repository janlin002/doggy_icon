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
import copy from './copy.svg'
import share from './share.svg'
import editing from './editing.svg'
import delete_icon from './delete.svg'
import new_folder from './new_folder.svg'
import folder from './folder.svg'
import add from './add.svg'
import funnels from './funnels.svg'
import more from './more.svg'
import card_mode from './card_mode.svg'
import table_mode from './table_mode.svg'
import info from './info.svg'
import notifications from './notifications.svg'
import magnifier from './magnifier.svg'
import cross from './cross.svg'

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
  performance,
  copy,
  share,
  editing,
  delete_icon,
  new_folder,
  folder,
  add,
  funnels,
  more,
  card_mode,
  table_mode,
  info,
  notifications,
  magnifier,
  cross
};

export default Icon;

// const req = require.context('.', true, /\.\/[^/]+\/index\.js$/);

// req.keys().forEach((key) => {
//   const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
//   module.exports[componentName] = req(key).default;
// });
