export interface Menu {
  id: number | string;
  path: string;
  label: string;
}

export interface MenuItem {
  id: number | string;
  path: string;
  label: string;
  sub?: Menu[];
  parent?: Menu;
}
interface Constants {
  apiBaseUrl: string;
  menuItems: MenuItem[];
  filters: {
    colors: string[];
    shapes: string[];
  };
}

const constants: Constants = {
  apiBaseUrl:
    "https://staging-api.bloobloom.com/user/v1/sales_channels/website",
  menuItems: [
    {
      id: 1,
      path: "",
      label: "Spectacles",
      sub: [
        { id: 11, label: "Men", path: "" },
        { id: 12, label: "Women", path: "" },
      ],
    },
    {
      id: 2,
      path: "",
      label: "Sunglasses",
      sub: [
        { id: 21, label: "sub menu 1", path: "" },
        { id: 12, label: "sub menu 2", path: "" },
      ],
    },
    {
      id: 3,
      path: "",
      label: "Home try on",
    },
    {
      id: 4,
      path: "",
      label: "Pair for pair",
    },
  ],
  filters: {
    colors: ["Black", "Tortoise", "Coloured", "Crystal", "Dark", "Bright"],
    shapes: ["Square", "Rectangle", "Round", "Cat-eye"],
  },
};

export default constants;
