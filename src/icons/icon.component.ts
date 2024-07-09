import React, { SVGProps } from "react";
import SearchIcon from "../icons/search.svg?react";
import HeartIcon from "../icons/heart.svg?react";
import HeartOutlineIcon from "../icons/heart_outline.svg?react";
import SuperviseIcon from "../icons/supervise.svg?react";
import BacktestIcon from "../icons/backtest.svg?react";
import StopLossIcon from "../icons/stop_loss.svg?react";
import StopProfitIcon from "../icons/stop_profit.svg?react";
import HoldingTimeIcon from "../icons/holding_time.svg?react";
import AutomaticUpdatesIcon from "../icons/automatic_updates.svg?react";
import PerformanceIcon from "../icons/performance.svg?react";
import CopyIcon from "../icons/copy.svg?react";
import ShareIcon from "../icons/share.svg?react";
import EditingIcon from "../icons/editing.svg?react";
import DeleteIcon from "../icons/delete.svg?react";
import NewFolderIcon from "../icons/new_folder.svg?react";
import FolderIcon from "../icons/folder.svg?react";
import AddIcon from "../icons/add.svg?react";
import FunnelsIcon from "../icons/funnels.svg?react";
import MoreIcon from "../icons/more.svg?react";
import CardModeIcon from "../icons/card_mode.svg?react";
import TableModeIcon from "../icons/table_mode.svg?react";
import InfoIcon from "../icons/info.svg?react";
import NotificationsIcon from "../icons/notifications.svg?react";
import MagnifierIcon from "../icons/magnifier.svg?react";
import CrossIcon from "../icons/cross.svg?react";
import SettingIcon from "../icons/setting.svg?react";
import MailIcon from "../icons/mail.svg?react";
import SystemIcon from "../icons/system.svg?react";
import UploadIcon from "../icons/upload.svg?react";
import PopulaStrategiesIcon from "../icons/popula_strategies.svg?react";
import NewestOnTheShelfIcon from "../icons/newest_on_the_shelf.svg?react";
import MoreInfoIcon from "../icons/more_info.svg?react";
import CaretLeftIcon from "../icons/caret_left.svg?react";
import CaretRightIcon from "../icons/caret_right.svg?react";
import CaretDownIcon from "../icons/caret_down.svg?react";
import CaretUpIcon from "../icons/caret_up.svg?react";
import ChevronRightIcon from "../icons/chevron_right.svg?react";
import ChevronLeftIcon from "../icons/chevron_left.svg?react";
import ChevronDownIcon from "../icons/chevron_down.svg?react";
import ChevronUpIcon from "../icons/chevron_up.svg?react";
import AscendingOrderIcon from "../icons/ascending_order.svg?react";
import DescendingOrderIcon from "../icons/descending_order.svg?react";

const iconComponents: { [key: string]: React.FC<SVGProps<SVGSVGElement>> } = {
  search: SearchIcon,
  heart: HeartIcon,
  heart_outline: HeartOutlineIcon,
  supervise: SuperviseIcon,
  backtest: BacktestIcon,
  stop_loss: StopLossIcon,
  stop_profit: StopProfitIcon,
  holding_time: HoldingTimeIcon,
  automatic_updates: AutomaticUpdatesIcon,
  performance: PerformanceIcon,
  copy: CopyIcon,
  share: ShareIcon,
  editing: EditingIcon,
  delete_icon: DeleteIcon,
  new_folder: NewFolderIcon,
  folder: FolderIcon,
  add: AddIcon,
  funnels: FunnelsIcon,
  more: MoreIcon,
  card_mode: CardModeIcon,
  table_mode: TableModeIcon,
  info: InfoIcon,
  notifications: NotificationsIcon,
  magnifier: MagnifierIcon,
  cross: CrossIcon,
  setting: SettingIcon,
  mail: MailIcon,
  system: SystemIcon,
  upload: UploadIcon,
  popula_strategies: PopulaStrategiesIcon,
  newest_on_the_shelf: NewestOnTheShelfIcon,
  more_info: MoreInfoIcon,
  caret_left: CaretLeftIcon,
  caret_right: CaretRightIcon,
  caret_down: CaretDownIcon,
  caret_up: CaretUpIcon,
  chevron_right: ChevronRightIcon,
  chevron_left: ChevronLeftIcon,
  chevron_down: ChevronDownIcon,
  chevron_up: ChevronUpIcon,
  ascending_order: AscendingOrderIcon,
  descending_order: DescendingOrderIcon,
};

export default iconComponents;
