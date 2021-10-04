<template>
  <div>
    <h1>รีวิวทั้งหมด</h1>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <h4>จำนวนรีวิว {{ comments.length }} รีวิว</h4>

    <p><button v-on:click="navigateTo('/comment/create')">เขียนรีวิว</button></p>
    <div v-for="comment in comments" v-bind:key="comment.id">
      <p>รีวิวที่: {{ comment.id }}</p>
      <p>หัวข้อ: {{ comment.title }}</p>
      <p>ชื่อภาพ: {{ comment.thumbnail }}</p>
      
      <transition name="fade"> 
        <div class="thumbnail-pic" v-if="comment.thumbnail != 'null'">
          <img :src="BASE_URL+comment.thumbnail" alt="thumbnail">
        </div>
      </transition>
   
      <p>เนื้อหา: {{ comment.content }}</p>
      <p>
        <button v-on:click="navigateTo('comment/'+comment.id)">ดูรีวิว</button>
        <button v-on:click="navigateTo('/comment/edit/' +comment.id)">แก้ไขรีวิว</button>
        <button v-on:click="deleteComment(comment)"> ลบรีวิว</button>
      </p>
      <hr>
    </div>
    
  </div>
</template>
<script>
import CommentService from "@/services/CommentsService";
export default {
  data() {
    return {
         BASE_URL: "http://localhost:8081/assets/uploads/",
      comments: [],
    };
  },
  async created() {
    this.comments = (await CommentService.index()).data;
  },
  methods: {

  /*   logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
    */
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteComment(comment) {
      let result = confirm("คุณแน่ใจนะ ที่จะลบรีวิวนี้?");
      if (result) {
        try {
          await CommentService.delete(comment);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.comments = (await CommentService.index()).data;
    },
  },
};
</script>
<style scoped>
</style>