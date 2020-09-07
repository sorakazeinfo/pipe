<template>
	<div>
		<h1>Loading</h1>

		<section>
			<h2>type=button</h2>
			<div>
				<button type="button" data-pipejs="loading" data-pipe-target="#loading-screen">Submit</button>
				<div id="loading-screen" style="display: none;">now loading...</div>
			</div>
		</section>

		<section>
			<h2>type=submit</h2>
			<div>
				<form>
					<button type="submit" data-pipejs="loading" data-pipe-target="#loading-screen2">Submit</button>
					<div id="loading-screen2" style="display: none;">now loading...</div>
				</form>
			</div>
		</section>
	</div>
</template>
