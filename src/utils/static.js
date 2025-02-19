export const loggedOut = [
  {
    title: "Home",
    href: "/",
  },
];

export const employeeNavItems = [
  {
    title: "Home",
    href: "/dashboard/employee",
  },
  {
    title: "My Assets",
    href: "/dashboard/employee/my-assets",
  },
  {
    title: "My Team",
    href: "/dashboard/employee/my-team",
  },
  {
    title: "Request for an Asset",
    href: "/dashboard/employee/request-for-an-asset",
  },
  {
    title: "Profile",
    href: "/dashboard/employee/profile",
  },
];

export const hrManagerNavItems = [
  {
    title: "Home",
    href: "/dashboard/hr-manager",
  },
  {
    title: "Assets List",
    href: "/dashboard/hr-manager/assets-list",
  },
  {
    title: "Add an Asset",
    href: "/dashboard/hr-manager/add-an-asset",
  },
  {
    title: "All Requests",
    href: "/dashboard/hr-manager/all-requests",
  },
  {
    title: "My Employee List",
    href: "/dashboard/hr-manager/my-employee-list",
  },
  {
    title: "Add an Employee",
    href: "/dashboard/hr-manager/add-an-employee",
  },
  {
    title: "Profile",
    href: "/dashboard/hr-manager/profile",
  },
];

export const navItems = {
  loggedOut,
  employee: employeeNavItems,
  "hr-manager": hrManagerNavItems,
};

export const tiers = [
  {
    title: "Starter",
    price: 5,
    employees: 5,
    description: ["Maximum 5 employees", "Help center access", "Email support"],
    buttonText: "Sign up now",
    buttonVariant: "outlined",
    buttonColor: "primary",
    href: "/join-as-hr-manager?package=Starter",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: 8,
    employees: 5,
    description: [
      "Maximum 10 employees",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
    buttonColor: "secondary",
    href: "/join-as-hr-manager?package=Professional",
  },
  {
    title: "Enterprise",
    price: 20,
    employees: 5,
    description: [
      "Maximum 20 employees",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Get started",
    buttonVariant: "outlined",
    buttonColor: "primary",
    href: "/join-as-hr-manager?package=Enterprise",
  },
];

export const tierOptions = [
  { value: "Starter", label: "Starter" },
  { value: "Professional", label: "Professional" },
  { value: "Enterprise", label: "Enterprise" },
];

export const user = {
  isAuthenticated: true,
  role: "hr-manager",
};
