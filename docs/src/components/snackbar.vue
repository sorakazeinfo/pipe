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
						<td><button data-pipejs="snackbar" data-pipe-target="#snackbar1" data-pipe-hidden-time="3000">Show</button></td>
						<td>
							<div class="pp-snackbar--top" id="snackbar1">
								<span>
									Hello, ".pp-snackbar--top" selector!
									<a href="#">Close</a>
								</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--top--success</td>
						<td><button data-pipejs="snackbar" data-pipe-target="#snackbar2">Show</button></td>
						<td>
							<div class="pp-snackbar--top--success" id="snackbar2">
								<span>
									Hello, ".pp-snackbar--top--success" selector!
									<a href="#">Close</a>
								</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--top--error</td>
						<td><button data-pipejs="snackbar" data-pipe-target="#snackbar3">Show</button></td>
						<td>
							<div class="pp-snackbar--top--error" id="snackbar3">
								<span>
									Hello, ".pp-snackbar--top--error" selector!
									<a href="#">Close</a>
								</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--bottom</td>
						<td><button data-pipejs="snackbar" data-pipe-target="#snackbar4" data-pipe-hidden-time="3000">Show</button></td>
						<td>
							<div class="pp-snackbar--bottom" id="snackbar4">
								<span>
									Hello, ".pp-snackbar--bottom" selector!
									<a href="#">Close</a>
								</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--bottom--success</td>
						<td><button data-pipejs="snackbar" data-pipe-target="#snackbar5">Show</button></td>
						<td>
							<div class="pp-snackbar--bottom--success" id="snackbar5">
								<span>
									Hello, ".pp-snackbar--bottom--success" selector!
									<a href="#">Close</a>
								</span>
							</div>
						</td>
					</tr>

					<tr>
						<td>.pp-snackbar--bottom--error</td>
						<td><button data-pipejs="snackbar" data-pipe-target="#snackbar6">Show</button></td>
						<td>
							<div class="pp-snackbar--bottom--error" id="snackbar6">
								<span>
									Hello, ".pp-snackbar--bottom--error" selector!
									<a href="#">Close</a>
								</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
	</div>
</template>
