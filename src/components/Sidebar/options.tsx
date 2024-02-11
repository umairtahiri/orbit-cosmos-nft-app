import DashboardIcon from "@images/dashboard.svg";
import MarketIcon from "@images/market.svg";
import ActiveBidsIcon from "@images/activeBids.svg";
import PortfolioIcon from "@images/portfolio.svg";
import WalletIcon from "@images/wallet.svg";
import FavoriteIcon from "@images/favorites.svg";
import HistoryIcon from "@images/history.svg";
import SettingsIcon from "@images/settings.svg";
import MoonIcon from "@images/mode.svg";

export const mainOptions = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    isActive: true,
  },
  {
    label: "Market",
    icon: MarketIcon,
  },
  {
    label: "Active Bids",
    icon: ActiveBidsIcon,
  },
];

export const profileOptions = [
  {
    label: "My Portfolio",
    icon: PortfolioIcon,
  },
  {
    label: "Wallet",
    icon: WalletIcon,
  },
  {
    label: "Favourites",
    icon: FavoriteIcon,
  },
  {
    label: "History",
    icon: HistoryIcon,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
];

export const otherOptions = [
  {
    label: "Light Mode",
    icon: MoonIcon,
  },
];
