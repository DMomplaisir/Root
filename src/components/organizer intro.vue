<template>
  <div class="organizer intro">
    <h3>What would you like to do?</h3>
    <button>Create Protest</button>
    <button>View Protests</button>
  </div>
</template>

<script>bm
  export default {
    name: 'organizer intro',
    data: function() {
      return {}
    },
    methods: {
      login: function() {
        this.$router.replace('hello')
      }
    }
  }
</script>


<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  P {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
