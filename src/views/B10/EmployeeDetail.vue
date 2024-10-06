<template>
  <div v-if="employee">
    <h2>Thông tin cá nhân</h2>
    <p>Id: {{ employee.id }}</p>
    <p>Name: {{ employee.name }}</p>
    <p>Position: {{ employee.position }}</p>
    <p @click="handleProject(employee.id)">Project: {{ employee.project }}</p>
    <p @click="handleContact(employee.id)">Contact: {{ employee.contact }}</p>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
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

const employee = ref(null);

const updateEmployee = () => {
  const { id } = route.params;
  employee.value = employees.find((employee) => employee.id == id);
};

updateEmployee();

watch(
  () => route.params.id, // Theo dõi sự thay đổi của id trong route params
  () => {
    updateEmployee(); // Cập nhật user khi id thay đổi
  }
);

const handleProject = (id) => {
  router.push(`/employeeDetail/${id}/project`);
};

const handleContact = (id) => {
  router.push(`/employeeDetail/${id}/contact`);
};
</script>
<style lang=""></style>
