<template>
  <div>
    <h1>รายชื่อห้องประชุม</h1>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <h4>จำนวนห้องประชุม {{ rooms.length }} ห้อง</h4>

    <div v-for="room in rooms" v-bind:key="room.id">
      <p>ห้องที่: {{ room.id }}</p>
      <p>ชื่อห้องประชุม: {{ room.nameroom }}</p>
      <p>จำนวนผู้เข้าประชุม: {{ room.peopleroom }}</p>
      
      <hr>
    </div>
    
  </div>
</template>
<script>

import RoomService from "@/services/RoomsService";
export default {
  data() {
    return {
      rooms: [],
    };
  },
  async created() {
    this.rooms = (await RoomService.index()).data;
  }
};
</script>
<style scoped>
</style>