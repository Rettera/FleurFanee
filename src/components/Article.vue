<template>
    <div class="article">
        <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-2">
					<img alt="Bootstrap Image Preview" v-bind:src="image"/>
				</div>
				<div class="col-md-10">
					<div class="page-header">
						<h1>
							{{post.title}}
						</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p>
						{{post.content}}
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					 <h3>Dans <strong>{{post.category}}<strong></h3>
				</div>
				<div class="col-md-4">
					<h3>
						Posté le <span class="date">{{post.createdAt}}</span>
					</h3>
				</div>
				<div class="col-md-4">
					<h3>
						Par <span class="author">{{post.author}}</span>
					</h3>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
