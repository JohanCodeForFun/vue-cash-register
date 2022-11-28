<template>
  <div class="about">
    <h1>Cash Register</h1>
    <form id="register-form">
      <label for="username">Username
        <input id="username" type="text" name="username" v-model="username" placeholder="Minst 2 tecken...">
      </label>
      <label for="nickname">Nickname
        <input id="nickname" type="text" name="nickname" v-model="nickname" placeholder="Minst 2 tecken...">
      </label>

      <label for="password">Password
        <input id="password" type="text" name="password" v-model="password" placeholder="Minst 2 tecken...">
      </label>
      <input type="button" value="Submit" @click="RegisterUser()">
    </form>
  </div>
</template>

<script>
const axios = require('axios');
// import Button from '../components/ButtonTemplate.vue';

export default {
  components: {
    // Button,
  },

  data() {
    return {
      username: '',
      nickname: '',
      password: '',
    };
  },

  methods: {
    RegisterUser() {
      console.log('Clicked');

      const nicknameText = this.nickname;
      const pattern1 = /[a-öA-Ö0-9]{2,30}/;
      const result1 = pattern1.test(nicknameText);

      const usernameText = this.username;
      const pattern2 = /[a-öA-Ö0-9]{2,30}/;
      const result2 = pattern2.test(usernameText);

      const passwordText = this.password;
      const pattern3 = /[a-öA-Ö0-9!"#¤%&/()=?´@£$€!"#¤%&/()=]{2,30}/;
      const result3 = pattern3.test(passwordText);

      if (result1 === true && result2 === true && result3 === true) {
        console.log(this.nickname);
        console.log(this.username);
        console.log(this.password);

        axios.get('http://localhost:5000/users')
          .then((response) => {
            // handle success
            console.log(response.data);
          });
      } else {
        console.log('Inte sant');
        this.isValid = true;
      }
    },
  },
};
</script>

<style>
#register-form {
  display: flex;
  flex-direction: column;
}

</style>
