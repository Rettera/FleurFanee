<template>
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Fleur Fanée</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/">Home <span class="sr-only">(current)</span></router-link></li>
        <li><router-link to="/posts">Articles</router-link></li>
        <li v-if="auth=='loggedin'">
          <router-link to="/posts/new">Nouvel Article</router-link>
        </li>
        <li v-else class="btn disabled" style="padding:0">
          <router-link to="">Nouvel Article</router-link>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input class="form-control" placeholder="Search" type="text">
        </div>
        <button type="submit" class="btn btn-default">rechercher</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Connexion <b class="caret"></b></a>
          <ul class="dropdown-menu">
                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li v-if="auth=='loggedin'" class="nav-item">
                    <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
                <li v-if="auth=='loggedin'" class="nav-item">
                    <a class="nav-link" href="" v-on:click="logout">Logout</a>
                </li>
              <li class="divider"></li>
              <li class="nav-header">Nos partenaire</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
          </ul>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import EventBus from './EventBus'

EventBus.$on('logged-in', test => {
  console.log(test)
})

export default {
  data () {
    return {
      auth: '',
      user: ''
    }
  },

  methods: {
    logout () {
      localStorage.removeItem('usertoken'),
      $router.push('/')
    }
  },

  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>
