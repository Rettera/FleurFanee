<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">PROFILE</h1>
            </div>
            <table class="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>Pseudo</td>
                        <td>{{pseudo}}</td>
                    </tr>
                    <tr>
                        <td>Image de profile</td>
                        <td><img v-bind:src="profil" alt="image de profile">{{profil}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      pseudo: decoded.pseudo,
      profil: decoded.profil,
      email: decoded.email
    }
  }
}
</script>
