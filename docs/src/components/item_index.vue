<template>
	<div>
		<h1>Item Index</h1>

		<section>
			<h2>.pp-item-index</h2>

			<ul class="pp-item-index">
				<li v-for="i in 12"><a href="#">Item{{ i }}</a></li>
			</ul>

			<ul class="pp-item-index">
				<li v-for="i in 12">Item{{ i }}</li>
			</ul>

			<ul class="pp-item-index">
				<li v-for="i in 12"><span><i class="fas fa-fw fa-user"></i></span><a href="#item">Item{{ i }}</a>({{i}})</li>
			</ul>
		</section>

		<section>
			<h2>.pp-item-index--alignment</h2>

			<ul class="pp-item-index--alignment">
				<li v-for="i in 12" class="pp-text--primary">
					<a href="#">Item{{ i }}</a>
					(1)
				</li>
			</ul>
		</section>

		<section>
			<h2>.pp-item-index--alignment--between</h2>

			<ul class="pp-item-index--alignment--between">
				<li v-for="i in 12" class="pp-text--primary">
					<a href="#">Item{{ i }}</a>
					(1)
				</li>
			</ul>
		</section>
	</div>
</template>
