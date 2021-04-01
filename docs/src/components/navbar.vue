<template>
	<div>
		<h1>Navbar</h1>

		<section>
			<h2>.pp-navbar</h2>

			<div class="pp-navbar">
				<div class="pp-navbar__start">
					<div class="pp-navbar__logo">PIPE</div>
					<div class="pp-navbar__toggle">
						<div class="pp-navbar__toggle__open" data-pipejs="navbar-toggle" data-pipe-navbar-group="navbar1">
							<i class="fas fa-bars" aria-hidden="true"></i>
						</div>

						<div class="pp-navbar__toggle__close" data-pipejs="navbar-toggle" data-pipe-navbar-group="navbar1">
							<i class="fas fa-times" aria-hidden="true"></i>
						</div>
					</div>
				</div>

				<div class="pp-navbar__end" data-pipe-navbar-group="navbar1">
					<div class="pp-navbar__items">
						<ul class="pp-navbar__items__menu">
							<li><a href="#">about</a></li>
							<li>pricing</li>
							<li><a>contact</a></li>
						</ul>

						<ul class="pp-navbar__items__menu">
							<li><a href="#">about</a></li>
							<li>pricing</li>
							<li><a>contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
