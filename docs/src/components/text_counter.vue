<template>
	<div>
		<h1>TextCounter</h1>

		<section>
			<h2>Normal</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter" data-pipe-target="#counter"> h e l l o</textarea>
				<span id="counter"></span> chars
			</p>
			<p></p>
		</section>

		<section>
			<h2>Strict</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter-strict" data-pipe-target="#counter2"> h e l l o</textarea>
				<span id="counter2"></span> chars
			</p>
		</section>
	</div>
</template>
