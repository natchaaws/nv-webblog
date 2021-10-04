<template>
  <div>
    <h1>การจองห้องประชุม</h1>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <h4>จำนวนที่จอง {{ blogs.length }} </h4>

    <p><button v-on:click="navigateTo('/blog/create')"> จองห้องประชุม </button></p>
    <div v-for="blog in blogs" v-bind:key="blog.id">
      <p>ลำดับ: {{ blog.id }}</p>
      <p>ชื่อ: {{ blog.firstname }}</p>
      <p>นามสกุล: {{ blog.lastname }}</p>
      <p>ชื่อห้องประชุม: {{ blog.nroom }}</p>
      <p>จำนวนผู้เข้าประชุม: {{ blog.pnum }}</p>
      <p>เบอร์โทรศัพท์: {{ blog.tel }}</p>
      <p>วันที่เริ่มต้น: {{ blog.dates }}</p>
      <p>เวลาที่เริ่มต้น: {{ blog.times }}</p>
      <p>วันที่สิ้นสุด: {{ blog.datee }}</p>
      <p>เวลาที่สิ้นสุด: {{ blog.timee }}</p>
      <p>อื่นๆ : {{ blog.other }}</p>
      <p>
        <button v-on:click="navigateTo('blog/'+blog.id)"> ตรวจสอบการจอง </button>
        <button v-on:click="navigateTo('/blog/edit/' + blog.id)"> แก้ไขการจองห้องประชุม </button>
        <button v-on:click="deleteBlog(blog)"> ยกเลิกการจองห้องประชุม</button>
      </p>
      <hr>
    </div>
    
  </div>
</template>
<script>
import BlogService from "@/services/BlogsService";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    this.blogs = (await BlogService.index()).data;
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
    async deleteBlog(blog) {
      let result = confirm("คุณแน่ใจนะ ที่จะยกเลิกการจองห้องประชุม?");
      if (result) {
        try {
          await BlogService.delete(blog);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.blogs = (await BlogService.index()).data;
    },
  },
};
</script>
<style scoped>

</style>