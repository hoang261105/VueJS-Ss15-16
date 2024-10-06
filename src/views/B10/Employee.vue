<template>
  <div>
    <ul v-for="item in employees" :key="item.id">
      <li>Id: {{ item.id }}</li>
      <li>Name: {{ item.name }}</li>
      <li>Position: {{ item.position }}</li>
      <button @click="handleClick(item.id)">Xem chi tiết</button>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import EmployeeDetail from "./EmployeeDetail.vue";

const router = useRouter();
const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Nhân viên",
    project: "Quản lí khách sạn",
    contact: "0992472341",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    position: "Giám đốc",
    project: "Quản lí bán hàng",
    contact: "0343553921",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    position: "Trưởng phòng",
    project: "Quản lí sách",
    contact: "02349124923",
  },
];

const handleClick = (id) => {
  router.push(`/employeeDetail/${id}`);
};
</script>
<style></style>
