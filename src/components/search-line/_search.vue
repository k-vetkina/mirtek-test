<template>  
	<div class="test">
		<input
			placeholder="Search"
			class="input">
			<img src="img/icons/search.svg" alt="Search" class="search" />
	</div>				
</template>

<script>	
	export default {
		name: 'Search',
	}
</script>


<style>
  .test {		
		height: 100%;
	}
	.input {		
		padding: 0 70px;
		height: 100%;
		border: none;
		outline: none;
		background: transparent;
		position: relative;
	}
	.search {
  	position: absolute;
		top: 18px;	
		left: 340px;			
	}
</style>