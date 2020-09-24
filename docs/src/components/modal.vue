<template>
	<div>
		<h1>Modal</h1>

		<p><button data-pipejs="modal" data-pipe-target="#modal">Open Modal</button></p>
		<p><button data-pipejs="modal" data-pipe-target="#modal2">Open Modal2</button></p>

		<div class="pp-modal" id="modal">
			<div class="pp-modal__overlay"></div>
			<div class="pp-modal__close"><i class="fas fa-times fa-2x"></i></div>
			<div class="pp-modal__contents">
				<div class="pp-modal__contents__close"><i class="fas fa-times fa-2x"></i></div>
				<h3>Hello, Modal! Hello, Modal! Hello, Modal! Hello, Modal! Hello, Modal! Hello, Modal!</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<p>
					<a class="pp-button pp-modal__close-action">Cancel</a>
					<button class="pp-button--primary">Ok</button>
				</p>
			</div>
		</div>

		<div class="pp-modal" id="modal2">
			<div class="pp-modal__overlay"></div>
			<div class="pp-modal__close"></div>
			<div class="pp-modal__contents">
				<div class="pp-modal__contents__close"></div>
				<h3>Hello, Modal2!</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<p>
					<a class="pp-button pp-modal__close-action">Cancel</a>
					<button class="pp-button--primary">Ok</button>
				</p>
			</div>
		</div>
	</div>
</template>
