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

		<section>
			<h2>Normal with max characters</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter" data-pipe-target="#counter3" data-pipe-max="15"> h e l l o</textarea>
				<span id="counter3"></span>/15 chars
			</p>
			<p></p>
		</section>

		<section>
			<h2>Strict with max characters</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter-strict" data-pipe-target="#counter4" data-pipe-max="15"> h e l l o</textarea>
				<span id="counter4"></span>/15 chars
			</p>
		</section>
	</div>
</template>
