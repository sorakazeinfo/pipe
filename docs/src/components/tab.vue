<template>
	<div>
		<h1>Tab</h1>

		<div class="pp-tab" data-pipejs="tab">
			<ul class="pp-tab__menu">
				<li><a href="#contents1">List1 List1 List1 List1 List1 List1 List1 List1</a></li>
				<li><a href="#contents2">List2 List2 List2 List2 List2 List2 List2 List2</a></li>
				<li class="pp-tab__menu__active"><a href="#contents3">List3 List3 List3 List3 List3 List3 List3 List3</a></li>
				<li><a href="#contents4">List4 List4 List4 List4 List4 List4 List4 List4</a></li>
				<li><a href="#contents5">List5 List5 List5 List5 List5 List5 List5 List5</a></li>
			</ul>

			<div class="pp-tab__contents">
				<div id="contents1">Contents1</div>
				<div id="contents2">Contents2</div>
				<div id="contents3">Contents3</div>
				<div id="contents4">Contents4</div>
				<div id="contents5">Contents5</div>
			</div>
		</div>

		<br>

		<div class="pp-tab" data-pipejs="tab">
			<ul class="pp-tab__menu">
				<li><a href="#contents6">List6 List6 List6 List6 List6 List6 List6 List6</a></li>
				<li><a href="#contents7">List7 List7 List7 List7 List7 List7 List7 List7</a></li>
				<li class="pp-tab__menu__active"><a href="#contents8">List8 List8 List8 List8 List8 List8 List8 List8</a></li>
				<li><a href="#contents9">List9 List9 List9 List9 List9 List9 List9 List9</a></li>
				<li><a href="#contents10">List10 List10 List10 List10 List10 List10 List10 List10</a></li>
			</ul>

			<div class="pp-tab__contents">
				<div id="contents6">Contents6</div>
				<div id="contents7">Contents7</div>
				<div id="contents8">Contents8</div>
				<div id="contents9">Contents9</div>
				<div id="contents10">Contents10</div>
			</div>
		</div>

		<br>

		<div class="pp-tab-border" data-pipejs="tab">
			<div class="pp-tab-border__menu">
				<ul>
					<li><a href="#contents11">List11</a></li>
					<li><a href="#contents12">List12</a></li>
					<li class="pp-tab-border__menu__active"><a href="#contents13">List13</a></li>
					<li><a href="#contents14">List14</a></li>
					<li><a href="#contents15">List15</a></li>
				</ul>
			</div>

			<div class="pp-tab-border__contents">
				<div id="contents11">Contents11</div>
				<div id="contents12">Contents12</div>
				<div id="contents13">Contents13</div>
				<div id="contents14">Contents14</div>
				<div id="contents15">Contents15</div>
			</div>
		</div>
	</div>
</template>
