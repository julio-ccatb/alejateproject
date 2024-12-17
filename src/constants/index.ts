export const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
    icon: "dashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "Staff",
    url: "/dashboard/staff",
    icon: "user",
    shortcut: ["e", "e"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Tours",
    url: "/dashboard/tours",
    icon: "product",
    shortcut: ["p", "p"],
    isActive: false,
    items: [], // No child items
  },
  {
    title: "Cuenta",
    url: "#", // Placeholder as there is no direct link for the parent
    icon: "billing",
    isActive: true,

    items: [
      {
        title: "Perfil",
        url: "/dashboard/user",
        icon: "userPen",
        shortcut: ["m", "m"],
      },
      {
        title: "Login",
        shortcut: ["l", "l"],
        url: "/",
        icon: "login",
      },
    ],
  },
  // {
  //   title: "Kanban",
  //   url: "/dashboard/kanban",
  //   icon: "kanban",
  //   shortcut: ["k", "k"],
  //   isActive: false,
  //   items: [], // No child items
  // },
];
