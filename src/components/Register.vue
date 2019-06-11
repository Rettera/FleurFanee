<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="pseudo">Pseudo</label>
            <input type="text" v-model="pseudo" class="form-control" name="pseudo" placeholder="Votre Pseudo">
          </div>
          <div class="form-group">
            <label for="profil">Image de Profil</label>
            <input type="text" v-model="profil" class="form-control" name="profil" placeholder="Votre URL d'image de profile">
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter Email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Enter Password">
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      pseudo: '',
      profil: '',
      email: '',
      password: '',
      mode: 'user'
    }
  },

  methods: {
    register () {
      axios.post('http://localhost:8081/users/register', {
        pseudo: this.pseudo,
        profil: this.profil,
        email: this.email,
        password: this.password,
        mode: this.mode
      }).then(res => {
        router.push({ name: 'Login' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
