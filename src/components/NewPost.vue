<template>
  <div class="posts">
<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Ajout d'Article</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="title" >Titre</label>
  <div class="col-md-6">
  <input id="title" type="text" placeholder="" v-model="title" class="form-control input-md" required="">
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="content">Contenu</label>
  <div class="col-md-6">
  <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
  </div>
</div>
<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="category">Categorie</label>
  <div class="col-md-6">
    <select id="category" name="category" class="form-control" v-model="category">
      <option value="Printemps">Printemps</option>
      <option value="Eté">Eté</option>
      <option value="Automne">Automne</option>
      <option value="Hiver">Hiver</option>
    </select>
  </div>
</div>

<!-- File Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="image">Image</label>
  <div class="col-md-6">
    <input id="image" name="image" class="input-file" type="file" @change="processFile($event)">
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="submit"></label>
  <div class="col-md-6">
    <button @click="addPost" class="btn btn-info">Valider</button>
  </div>
</div>
 
</fieldset>
</form>

  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import router from '../router'
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
var moment = require('moment')
moment.locale('fr')
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      content: '',
      category: '',
      image: '',
      editor: ClassicEditor,
      editorData: 'Lorem Ipsum...',
      editorConfig: {
        language: 'fr',
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraphe', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Titre 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Titre 2', class: 'ck-heading_heading2' }
            ]
        }
        },
      createdAt: moment(new Date()).format('LLL'),
      //author: this.users.pseudo

    }
  },
  methods: {
    processFile (event) {
      this.image = event.target.files[0]
    },
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        content: this.content,
        category: this.category,
        image: this.image,
        createdAt: this.createdAt,
        //author: this.author
      })
      router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
legend, label{
  color: antiquewhite
}
</style>
