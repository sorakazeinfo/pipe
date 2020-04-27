<template>
	<div>
		<h1>Snackbar</h1>

			<table>
				<thead>
					<tr>
						<th>Selector</th>
						<th>&nbsp;</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>.pp-snackbar--top</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="pp-snackbar--top">
								<span>Hello, ".pp-snackbar--top" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--top--success</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="pp-snackbar--top--success">
								<span>Hello, ".pp-snackbar--top--success" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--top--error</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="pp-snackbar--top--error">
								<span>Hello, ".pp-snackbar--top--error" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--bottom</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="pp-snackbar--bottom">
								<span>Hello, ".pp-snackbar--bottom" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--bottom--success</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="pp-snackbar--bottom--success">
								<span>Hello, ".pp-snackbar--bottom--success" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--bottom--error</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="pp-snackbar--bottom--error">
								<span>Hello, ".pp-snackbar--bottom--error" selector!</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
	</div>
</template>

<script>
export default {
	methods: {
		toggleSnackbar: function(e) {
			const cell = e.target.parentElement.nextElementSibling;
			if (cell.style.display === "none") {
				cell.style.display = "block";
			} else {
				cell.style.display = "none";
			}
		}
	},
}
</script>
