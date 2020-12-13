<template>
  <div>
    <div class="banner h-10">
          <img
            src="https://i.pinimg.com/originals/9f/48/6c/9f486c13971293fee1d21c315ecb8603.jpg"
            class="rounded img-responsive h-10"
            alt="My image"
          />
        <div class="container">
            <div class="">
                <h1 class="text-white text-left text-capitalize">Bienvenido {{ user.name }}!</h1>
                <h4 class="text-white text-left">{{ user.email }} </h4>
            </div>
        </div>
    </div>
    <div class="container w-100">
        
        <div class="text-center mt-2" id="navbarSupportedContent">
            <button
              class="btn btn-outline-primary my-2 my-sm-0"
              type="button"
              v-on:click="logOut">
              Salir
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    logoutUser() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
    getUserData(){
        let token = localStorage.getItem('jwt');
        let user = localStorage.getItem('user');
        this.user = JSON.parse(user);
        console.log(this.user);
    }
  },
  created(){
      this.getUserData()
  }
};
</script>

<style scoped>
</style>