<template>


    <div>
        <div class="nv-navbar"> 
        <ul class="nav">
            <li><router-link :to="{name: 'rooms'}">รายละเอียดห้องประชุม</router-link></li> 
            <li><router-link :to="{name: 'blogs'}">การจองห้องประชุม</router-link></li>
            <li><router-link :to="{name: 'comments'}">รีวิวห้องประชุม</router-link></li>
            <li><router-link :to="{name: 'users'}">ผู้ใช้งาน</router-link></li>
            <li><router-link :to="{name: 'login'}">Login</router-link></li>
            <li><a v-on:cick.prevent="logout" href="login">Logout</a></li>
        </ul>
        <div class="clearfix"></div>
        </div>
    </div>

</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setTkoen", null);
      this.$store.dispatch("setComment", null);
      this.$router.push({
        name: "login"
      })
    }
  }
}
</script>

<style scoped>
    .nv-navbar{
        background-color: #fc77c2;/*สีแทบ */
        width:  100%;
        padding: 10px 0px 10px 0px;
    }

    .nv-navbar .nav {
        list-style: none;
        margin: 0;
        padding: 0;
        float: left;
    }

    .nv-navbar .nav li {
        float: left;
    }

    .nv-navbar .nav li a {
        padding: 10px;
        text-decoration: none;
        color: #ffe297; /*สีอักษร */
        font-weight: bold;
    }

    .nv-navbar .nav li a:hover {
        padding: 10px;
        text-decoration: none;
        color: #b6ffe3; /*สีอักษรเมื่อเอาเม้าส์ไปวาง */
    }

    .nv-navbar .nav li a.router-link-active {
        background-color: #40cbea; 
        color: white; /*สีอักษรเมื่อกดอยู๋ในหน้านี้ */
    }

    .clearfix {
        clear: left;
    }

</style>
