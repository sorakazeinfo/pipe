<template>
	<div>
		<h1>Accordion</h1>

		<div class="item">
			<div
				data-pipejs="accordion"
				data-pipe-target="#description">
					<a href="#">toggle</a>
			</div>

			<div id="description" class="pp-accordion">
				<div style="padding: 1rem">toggle1 description.
				</div>
			</div>
		</div>

		<br>

		<div class="item">
			<div
				data-pipejs="accordion"
				data-pipe-target="#description2">
					<a href="#">toggle2</a>
			</div>

			<div id="description2" class="pp-accordion">
				<div style="padding: 1rem">toggle2 description.
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.item {
		border: 1px solid #aaa;
	}

	.item > div:first-child a {
		background-color: #eee;
		display: block;
		text-decoration: none;
		padding: 1rem 0.5rem;
	}
</style>
