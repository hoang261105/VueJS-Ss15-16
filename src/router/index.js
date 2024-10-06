import { createWebHistory, createRouter } from "vue-router";

import B1 from "@/views/B1.vue";
import B2 from "@/views/B2.vue";
import Register from "@/views/B3/Register.vue";
import Login from "@/views/B4/Login.vue";
import NotFound from "@/views/B5/NotFound.vue";
import Home from "@/views/B6/Home.vue";
import Contact from "@/views/B6/Contact.vue";
import Product from "@/views/B7/Product.vue";
import Detail from "@/views/B7/Detail.vue";
import UserDetail from "@/views/B9/UserDetail.vue";
import Employee from "@/views/B10/Employee.vue";
import EmployeeDetail from "@/views/B10/EmployeeDetail.vue";
import Profile from "@/views/B10/Profile.vue";
import Project from "@/views/B10/Project.vue";
import Contacts from "@/views/B10/Contacts.vue";

const routes = [
  { path: "/", component: B1 },
  { path: "/contact", component: B2 },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/notFound", component: NotFound },
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/product", component: Product },
  { path: "/detail", component: Detail },
  { path: "/userDetail/:id", component: UserDetail },
  { path: "/employee", component: Employee },
  {
    path: "/employeeDetail/:id",
    component: EmployeeDetail,
    children: [
      {
        path: "profile",
        component: Profile,
      },
      {
        path: "project",
        component: Project,
      },
      {
        path: "contact",
        component: Contacts,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
