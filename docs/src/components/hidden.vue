<template>
	<div>
		<h1>Hidden</h1>

		<section>
			<h2>.pp-hidden</h2>
			<p class="vue-hidden-p"><span class="pp-hidden">This message is hidden.</span>&nbsp;</p>
		</section>

		<section>
			<h2>.pp-hidden--mobile</h2>
			<p class="vue-hidden-p"><span class="pp-hidden--mobile">This message is hidden.</span>&nbsp;</p>
		</section>

		<section>
			<h2>.pp-hidden--tablet</h2>
			<p class="vue-hidden-p"><span class="pp-hidden--tablet">This message is hidden.</span>&nbsp;</p>
		</section>

		<section>
			<h2>.pp-hidden--desktop</h2>
			<p class="vue-hidden-p"><span class="pp-hidden--desktop">This message is hidden.</span>&nbsp;</p>
		</section>
	</div>
</template>

<style>
	.vue-hidden-p {
		background-color: #eee;
		padding: 1rem 0.5rem;
	}

	html.dark .vue-hidden-p {
		background-color: #555;
	}
</style>
