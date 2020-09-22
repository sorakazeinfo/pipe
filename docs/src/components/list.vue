<template>
	<div>
		<h1>List</h1>

		<section>
			<h2>UL</h2>

			<ul class="pp-list">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Item 5</li>
			</ul>

			<hr>

			<ul class="pp-list--circle">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Item 5</li>
			</ul>

			<hr>

			<ul class="pp-list--disc">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Item 5</li>
			</ul>

			<hr>

			<ul class="pp-list--sqaure">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Item 5</li>
			</ul>
		</section>

		<hr>

		<section>
			<h2>OL</h2>

			<ol class="pp-list--decimal">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
			</ol>

			<ol class="pp-list--decimal" start="9">
				<li>Item 9</li>
				<li>Item 10</li>
				<li>Item 11</li>
			</ol>

			<ol class="pp-list--decimal" start="99">
				<li>Item 90</li>
				<li>Item 100</li>
				<li>Item 101</li>
			</ol>
		</section>

		<hr>

		<section>
			<h2>DL</h2>

			<dl class="pp-dl">
				<dt>Definition 1</dt>
				<dd>Definition 1 message.</dd>
				<dd>Definition 1 message.</dd>

				<dt>Definition 2</dt>
				<dd>Definition 2 message.</dd>
				<dd>Definition 2 message.</dd>

				<dt>Definition 3</dt>
				<dd>Definition 3 message.</dd>

				<dt>Definition 4</dt>
				<dd>Definition 4 message.</dd>

				<dt>Definition 5</dt>
				<dd>Definition 5 message.</dd>

				<dt class="pp-dl__dt--bold">Definition 6</dt>
				<dd>Definition 6 message.</dd>

				<dt class="pp-dl__dt--underline">Definition 7</dt>
				<dd>Definition 7 message.</dd>

				<dt class="pp-dl__dt--bullet">Definition 8</dt>
				<dd>Definition 8 message.</dd>
			</dl>
		</section>

	</div>
</template>
