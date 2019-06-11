
<template>
  <div class="posts">
    <form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Modifié l'Article</legend>

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
    <input id="image" name="image" class="input-file" type="file">
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="submit"></label>
  <div class="col-md-6">
    <button id="submit" class="btn btn-info"  @click="updatePost">Modifier</button>
  </div>
</div>

</fieldset>
</form>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: 'EditPost',
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
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.content = response.data.content
      this.category = response.data.category
      this.image = response.data.image
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        content: this.content,
        category: this.category,
        image: this.image
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
