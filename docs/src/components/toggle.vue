<template>
	<div>
		<h1>Toggle</h1>

		<p>
			<a
				href="#"
				data-pipejs="toggle"
				data-pipe-target=".toggle_class">
				All toggle(display)
			</a>
		</p>

		<p>
			<a
				href="#"
				data-pipejs="toggle"
				data-pipe-target=".toggle_class"
				data-pipe-hidden-class-name="pp-hidden">
				All toggle(class)
			</a>
		</p>

		<p>
			<a
				href="#"
				class="pp-button--primary"
				data-pipejs="toggle"
				data-pipe-target="#toggle_description1">Toggle</a>
		</p>
		<div id="toggle_description1" style="display: none;" class="toggle_class">
			Description 1.
		</div>

		<p>
			<button
				type="button"
				class="pp-button--primary"
				data-pipejs="toggle"
				data-pipe-target="#toggle_description2"
				data-pipe-close-label="Close"
				data-pipe-open-label="Open">Open</button>
		</p>
		<div id="toggle_description2" style="display: none;" class="toggle_class">
			Description 2.
		</div>

		<p>
			<button
				type="button"
				class="pp-button--primary"
				data-pipejs="toggle"
				data-pipe-target="#toggle_description3"
				data-pipe-hidden-class-name="pp-hidden">Toggle</button>
		</p>
		<div id="toggle_description3" class="toggle_class pp-hidden">
			Description 3.
		</div>

		<p>
			<a
				href="#"
				class="pp-button--primary"
				data-pipejs="toggle"
				data-pipe-target="#toggle_description4"
				data-pipe-hidden-class-name="pp-hidden"
				data-pipe-close-label="Close"
				data-pipe-open-label="Open">Open</a>
		</p>
		<div id="toggle_description4" class="toggle_class pp-hidden">
			Description 4.
		</div>
	</div>
</template>
