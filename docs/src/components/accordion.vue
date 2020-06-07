<template>
	<div>
		<h1>Accordion</h1>

		<div class="item">
			<div
				data-pipejs="accordion"
				data-pipe-target="#description">
					<a href="#">toggle</a>
			</div>

			<div id="description">
				<div style="padding: 1rem">toggle1 description.
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

	.item > div:last-child {
		/* Please using 'pipe-accordion' mixin in your project */
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;
	}
</style>
