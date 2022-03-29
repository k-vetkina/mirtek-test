<template>
	<div class="wrapper">
		<div class="main__content"
			<div class="main__menuColumn">

				<div class="main__logo">
				  <Logo />
				</div>

				<div class="main__menu">
				  <Menu />
				</div>

			</div>
		<div class="main__contentColumn">
			<div class="main__top">			
			  <SearchLine/>
			</div>
		</div>
		</div>
	</div>
</template>

<script>

	import Logo from './components/Logo';
	import Menu from './components/Menu';
	import SearchLine from './components/search-line/search-line.vue';	
	
	export default {
    name: 'MainPage',

    components: {
			Menu,
      Logo,
			SearchLine
    }
	}
	
</script>


<style>
  .wrapper {
		display: grid;		
		min-height: 100vh;
		width: 100%;
		/* max-width: 1200px;
		background-position: center; */
		/* padding-left: 15px;
		padding-right: 15px;		 */
		z-index: 0;
		background-color: #ffffff;
		grid-template-columns: 1fr;
	}	
	@media screen and (min-width: 1024px) {
    .wrapper {      
      grid-template-columns: 300px 1fr;
    }
		.main__menuColumn {
			background: #34474f;
		}
		.main__contentColumn {
			background: #ffffff;
		}		
		.main__logo {
			text-align: center;
			background: #0083e9;
			padding: 15px 0;			
		}
		.main__top {
			background: #e0e0e0;	
			height: 54px;	
		}
  }	
</style>