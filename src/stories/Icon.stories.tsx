import type { Meta } from "@storybook/react";
import DoggyIcon from "../core/doggyIcon";

const ICONS = [
  "search",
  "heart",
  "heart_outline",
  "supervise",
  "backtest",
  "stop_loss",
  "stop_profit",
  "holding_time",
  "automatic_updates",
  "performance",
  "copy",
  "share",
  "editing",
  "delete_icon",
  "new_folder",
  "folder",
  "add",
  "funnels",
  "more",
  "card_mode",
  "table_mode",
  "info",
  "notifications",
  "magnifier",
  "cross",
  "setting",
  "mail",
  "system",
  "upload",
  "popula_strategies",
  "newest_on_the_shelf",
  "more_info",
  "caret_left",
  "caret_right",
  "caret_down",
  "caret_up",
  "chevron_right",
  "chevron_left",
  "chevron_down",
  "chevron_up",
  "ascending_order",
  "descending_order",
];
const meta: Meta<typeof DoggyIcon> = {
  component: DoggyIcon,
  argTypes: {
    icon: {
      options: ICONS,
    },
  },
};
export default meta;
// type Story = StoryObj<typeof meta>;
export const AllIcons = () => (
  <div style={{ margin: "10px" }}>
    {ICONS.map((icon) => (
      <div
        key={icon}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
        }}
      >
        <DoggyIcon icon={icon} />
        <p>{icon}</p>
      </div>
    ))}
  </div>
);
// export const SingleIcon: Story = {
//   args: {
//     icon: ICONS[0],
//     width: 20,
//   },
// };
