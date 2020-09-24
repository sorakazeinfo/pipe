<template>
	<div>
		<h1>Agreement</h1>

		<div>
			<div data-pipejs="agreement" data-pipe-target="#submit">
				<div><label><input type="checkbox"> Please agreement the term of service.</label></div>
				<div><label><input type="checkbox"> Please agreement the privacy policy.</label></div>
			</div>

			<p><button type="button" id="submit" disabled="disabled">Submit</button></p>
		</div>

		<div>
			<div data-pipejs="agreement" data-pipe-target="#submit2">
				<div><label><input type="checkbox"> Please agreement the term of service.</label></div>
			</div>

			<p><input type="button" id="submit2" disabled="disabled" value="Submit"></p>
		</div>

	</div>
</template>
