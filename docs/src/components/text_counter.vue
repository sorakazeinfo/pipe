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

		<section>
			<h2>Normal with min characters</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter" data-pipe-target="#counter5" data-pipe-min="5">w a y</textarea>
				<span id="counter5"></span>/15 chars
			</p>
			<p></p>
		</section>

		<section>
			<h2>Strict with min characters</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter-strict" data-pipe-target="#counter6" data-pipe-min="5">w a y</textarea>
				<span id="counter6"></span>/15 chars
			</p>
		</section>

		<section>
			<h2>Normal with max and min characters</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter" data-pipe-target="#counter7" data-pipe-min="5" data-pipe-max="15">w a y</textarea>
				<span id="counter7"></span>/15 chars
			</p>
			<p></p>
		</section>

		<section>
			<h2>Strict with max and min characters</h2>
			<p>
				<textarea type="text" class="pp-textarea--max" rows="5" data-pipejs="text-counter-strict" data-pipe-target="#counter8" data-pipe-min="5" data-pipe-max="15">w a y</textarea>
				<span id="counter8"></span>/15 chars
			</p>
		</section>
	</div>
</template>
