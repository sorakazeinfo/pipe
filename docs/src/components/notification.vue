<template>
	<div>
		<h1>Notification</h1>

		<div v-for="v in ['primary', 'secondary', 'info', 'success', 'warning', 'danger']">
			<p v-bind:class="['pp-notification--' + v]">.pp-notification--{{ v }}</p>
		</div>
	</div>
</template>
