<template>
	<div>
		<h1>Margin</h1>

		<ul class="vue-margin-ul">
			<li class="pp-margin">.pp-margin</li>
			<li class="pp-margin--large">.pp-margin--large</li>
			<li class="pp-margin--small">.pp-margin--small</li>
			<li class="pp-margin-top--large">.pp-margin-top--large</li>
			<li class="pp-margin-top--small">.pp-margin-top--small</li>
			<li class="pp-margin-right--large">.pp-margin-right--large</li>
			<li class="pp-margin-right--small">.pp-margin-right--small</li>
			<li class="pp-margin-bottom--large">.pp-margin-bottom--large</li>
			<li class="pp-margin-bottom--small">.pp-margin-bottom--small</li>
			<li class="pp-margin-left--large">.pp-margin-left--large</li>
			<li class="pp-margin-left--small">.pp-margin-left--small</li>
		</ul>
	</div>
</template>

<style scoped>
	ul.vue-margin-ul > li {
		background-color: #eee;
		border: 1px solid #ccc;
	}

	html.dark ul.vue-margin-ul > li {
		background-color: #555;
		border: 1px solid #777;
	}
</style>
