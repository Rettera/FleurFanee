<template>
  <div class="posts">
    <h1>Liste des Articles</h1>
<div class="container"  v-for="post in posts">
    <div class="panel panel-default">
        <div class="panel-heading">
            <a href="#" class="MakaleYazariAdi">{{post.category}}</a>
            <div class="btn-group" style="float:right;">
            	<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            		<span class="glyphicon glyphicon-cog"></span>
            		<span class="sr-only">Toggle Dropdown</span>
            	</button>
            	<ul class="dropdown-menu">
            		<li><router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</router-link></li>
            		<li role="separator" class="divider"></li>
            		<li><a href="/" @click="deletePost(post._id)"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> Delete</a></li>
            	</ul>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body">
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Canis_lupus.jpg/260px-Canis_lupus.jpg" alt="Kurt">
                    </a>
                    Posté le {{post.createdAt}}
                </div>
                <div class="media-body">
                <h4 class="media-heading">{{ post.title }}</h4>
               {{ post.content }}
                <div class="clearfix"></div>
                <div class="btn-group" role="group" id="BegeniButonlari">
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up"></span></button>
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down"></span></button>
                </div>                 
               </div>
            </div>
        </div>
    </div>
</div>
  </div>

</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css" scoped>
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
