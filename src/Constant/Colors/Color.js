import { deactiveText } from "../Common/common-variable";

export const Colors = {
  //   LOGINRED: "#990C0C",
  LOGINYELLOW: "#F7D552",
  DEFAULTBG: "#EDEDED",
  INACTIVE: "#AB1515",
  CRITICAL: "#FF0000",
  ACTIVE: "#45AB15",
  WHITE: "#FFF",
  SUBICONBG: "#F2F2F2",
  //   CIRCULERPINK: "#990C0C24",
  THEMEPINK: "#FFF2F2",
  LOGINTEXT: "#F1BBBB",
  LAUNCHERTHEME: "#156b88",
};

// statusClasses.js

export const STATUS_CLASSES = {
  active: {
    badgeColor: "success",
    textColor: "text-green-dark",
  },
  inactive: {
    badgeColor: "warning",
    textColor: "text-orange-dark",
  },
  blocked: {
    badgeColor: "danger",
    textColor: "text-red-dark",
  },
  connected: {
    badgeColor: "success",
    textColor: "text-green-dark",
  },
  [deactiveText]: {
    badgeColor: "danger",
    textColor: "text-red-dark",
  },
  missing: {
    badgeColor: "danger",
    textColor: "text-red-dark",
    renderAsDot: false,
  },
  extra: {
    badgeColor: "warning",
    textColor: "text-orange-dark",
    renderAsDot: false,
  },
  critical: {
    badgeColor: "danger",
    textColor: "text-red-dark",
    renderAsDot: false,
  },
  good: {
    badgeColor: "success",
    textColor: "text-green-dark",
    renderAsDot: false,
  },
  fair: {
    badgeColor: "warning",
    textColor: "text-orange-dark",
    renderAsDot: false,
  },
  default: {
    badgeColor: "bg-gray-400",
    textColor: "text-gray-600",
  },
};

export const PermissionColors = {
  read: "bg-yellow-buttonYellow text-white font-bold",
  write: "bg-green-buttonGreen text-white font-bold",
  delete: "bg-red-buttonRed text-white font-bold",
};
