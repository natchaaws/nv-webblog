<template>
  <div>
    <h1>แสดงรีวิว {{ comment.id }} </h1>

    <p>id: {{ comment.id }}</p>
    <p>หัวข้อ: {{ comment.title }}</p>

    <p>ชื่อภาพ: {{ comment.thumbnail }}</p>
      
      <transition name="fade"> 
        <div class="thumbnail-pic" v-if="comment.thumbnail != 'null'">
          <img :src="BASE_URL+comment.thumbnail" alt="thumbnail">
        </div>
      </transition>

    <p>เนื้อหา: {{ comment.content }}</p>

    <p>
      <button v-on:click="navigateTo('/comment/edit/' + comment.id)">
        แก้ไขรีวิว
      </button>
      <button v-on:click="navigateTo('/comments')">ย้อนกลับ</button>
    </p>
  </div>
</template>

<script>
import CommentService from "@/services/CommentsService";
export default {
  data() {
    return {
      BASE_URL: "http://localhost:8081/assets/uploads/",
      comment: null,
    };
  },
  async created() {
    try {
      let commentId = this.$route.params.commentId;
      this.comment = (await CommentService.show(commentId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
</style>