<template>
 <div>   
    <h1> Get All Users </h1> 
    <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>

   <p> <button v-on:click="navigateTo('/user/create/')">สร้างผู้ใช้</button></p>

    <div v-for="user in users" v-bind:key="user.id">
       
        <p>id : {{ user.id }}</p>
        <p>ชื่อ-นามสกุล : {{ user.name }} - {{ user.lastname }}</p>
        <p>email : {{ user.email }}</p>
        <p>password : {{ user.password}}</p>
        
        <p><button v-on:click="navigateTo('/user/'+ user.id)">ดูข้อมูลผู้ใช้</button>
        <button v-on:click="navigateTo('/user/edit/'+ user.id)">แก้ไขข้อมูล</button>
        <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
        </p>
        
        <hr >
    </div>
  <!--  <p><button v-on:click="logout">Logout</button></p> -->
</div>   
      
</template>
<script>

import UsersService from '@/services/UsersService'

    export default {
        data () {
            return {
                users : []
            }
        },
       async created (){
           this.users = (await UsersService.index()).data
           console.log(results)
        },
        methods: {
            navigateTo (route){
                this.$router.push(route)
             
        },
        async deleteUser(user) {
            let result = confirm("What To Delete?")
               if(result) { 
                   try {
                    await UsersService.delete(user)
                    this.refreshData()
            } catch (error){
            console.log(error)
          }
        }
         },
         async refreshData() {
             this.users = (await UsersService.index()).data
         },
     /*     logout (){
             this.$store.dispatch('setToken', null)
             this.$store.dispatch('setUser', null)
             
             this.$router.push({  
                 name : 'login'
             })
         }, */
    }
}


</script>
<style scoped>


</style>
