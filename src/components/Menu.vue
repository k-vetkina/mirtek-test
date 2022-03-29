<template>
	<ul class="menuList__list">
		<li
      v-for="{ name, type } in menuList"
      :key="type"
			class="menuList__item"      
    >  
		  <img
			  :src="type"
        class="icon"
      /> 

      <span>{{ name }}</span>
    </li>
	</ul>
</template>

<script>
	// import { mapGetters, mapMutations } from 'vuex';
	//img/Logo.png

	export default {

		name: 'Menu',

		data: () => ({
      menuList: [
        { name: 'Home', type: 'img/icons/home.png'},
        { name: 'Time Management', type: 'img/icons/time.png' },
        { name: 'Inbox', type: 'img/icons/inbox.png' },
        { name: 'Analytics', type: 'img/icons/Untitled-5.svg'},
				{ name: 'Settings', type: 'img/icons/settings.png'}
      ]
    }),
	}
</script>


<style>
  .menuList__list {
		margin-left: 0;
		padding-left: 0;
	}
	.menuList__item {
		color: #fff;		
		padding: 15px;
		cursor: pointer;
		list-style-type: none;		
	}
	.menuList__item:hover {
		background: #415a65;
	}	
	.menuList__item:last-child {		
		padding-bottom: none;
	}
	.icon {
		margin-right: 10px;
  }
	.cls-1:hover {
		fill: red;
  }

</style>