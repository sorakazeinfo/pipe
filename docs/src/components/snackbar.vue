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
						<td>.snackbar--top</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="snackbar--top">
								<span>Hello, ".snackbar--top" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.snackbar--top--success</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="snackbar--top--success">
								<span>Hello, ".snackbar--top--success" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.snackbar--top--error</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="snackbar--top--error">
								<span>Hello, ".snackbar--top--error" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.snackbar--bottom</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="snackbar--bottom">
								<span>Hello, ".snackbar--bottom" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.snackbar--bottom--success</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="snackbar--bottom--success">
								<span>Hello, ".snackbar--bottom--success" selector!</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.snackbar--bottom--error</td>
						<td><button @click="toggleSnackbar">Show</button></td>
						<td style="display: none;">
							<div class="snackbar--bottom--error">
								<span>Hello, ".snackbar--bottom--error" selector!</span>
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
