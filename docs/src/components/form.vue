<template>
	<div>
		<h1>Form</h1>

		<section>
			<h2>Input</h2>
			<p><input class="pp-input" required type="text" placeholder="type=text"></p>
			<p><input class="pp-input" type="password" placeholder="type=password"></p>
			<p><input class="pp-input" type="email" placeholder="type=email"></p>
			<p><input class="pp-input" type="number" placeholder="type=number"></p>
			<p><input class="pp-input" type="url" placeholder="type=url"></p>
			<p><input class="pp-input--max" required type="text" placeholder="type=text"></p>
			<p><input class="pp-input pp-input--error" required type="text" value="with .pp-iput--error" placeholder="type=text"></p>
			<p><label>Label:<input class="pp-input" type="text" placeholder="with label">Type=text</label></p>
		</section>

		<section>
			<h2>Textarea</h2>
			<p><textarea class="pp-textarea" placeholder="type=textarea"></textarea></p>
			<p><textarea class="pp-textarea" placeholder="type=textarea">with .pp-textarea--error</textarea></p>
			<p><textarea class="pp-textarea--max" placeholder="type=textarea"></textarea></p>
			<p><label>Label:<textarea class="pp-textarea" placeholder="with label"></textarea>textarea</label></p>
			<p><textarea class="pp-textarea" data-pipejs="textarea-expanded" placeholder="type=textarea">1
2
3
4
5
6
7
8
9
10</textarea></p>
			<p><textarea class="pp-textarea--max" data-pipejs="textarea-expanded" placeholder="type=textarea expanded"></textarea></p>
		</section>

		<section>
			<h2>Select</h2>
				<div class="pp-select">
					<select>
						<option>Please select a value</option>
						<option>Tokyo</option>
						<option>Yokohama</option>
						<option>Osaka</option>
						<option>Nagoya</option>
						<option>Sendai</option>
					</select>
				</div>

			<div class="pp-select--max">
				<select>
					<option>Please select a value</option>
					<option>Tokyo</option>
					<option>Yokohama</option>
					<option>Osaka</option>
					<option>Nagoya</option>
					<option>Sendai</option>
				</select>
			</div>
		</section>

		<section>
			<h2>Checkbox</h2>

			<table>
				<tr>
					<td><strong>Default</strong></td>
					<td>
						<label class="pp-form__control__label"><input type="checkbox" class="pp-checkbox">checkbox</label>
						<input type="checkbox" class="pp-checkbox">
					</td>
				</tr>

				<tr>
					<td><strong>.pp-checkbox--medium</strong></td>
					<td>
						<label class="pp-form__control__label"><input type="checkbox" class="pp-checkbox--medium" checked>checkbox</label>
						<input type="checkbox" class="pp-checkbox--medium">
					</td>
				</tr>

				<tr>
					<td><strong>.pp-checkbox--large</strong></td>
					<td>
						<label class="pp-form__control__label"><input type="checkbox" class="pp-checkbox--large" checked>checkbox</label>
						<input type="checkbox" class="pp-checkbox--large">
					</td>
				</tr>
			</table>
		</section>

		<section>
			<h2>Radio</h2>

			<table>
				<tr>
					<td><strong>Default</strong></td>
					<td>
						<label class="pp-form__control__label"><input type="radio" class="pp-radio">radio</label>
						<input type="radio" class="pp-radio">
					</td>
				</tr>

				<tr>
					<td><strong>.pp-radio--medium</strong></td>
					<td>
						<label class="pp-form__control__label"><input type="radio" class="pp-radio--medium" checked>radio</label>
						<input type="radio" class="pp-radio--medium">
					</td>
				</tr>

				<tr>
					<td><strong>.pp-radio--large</strong></td>
					<td>
						<label class="pp-form__control__label"><input type="radio" class="pp-radio--large" checked>radio</label>
						<input type="radio" class="pp-radio--large">
					</td>
				</tr>
			</table>
		</section>

		<section>
			<h2>File Upload</h2>
			<div><input type="file" class="pp-file"></div>
		</section>

		<section>
			<h2>Vertical Form</h2>

			<div class="pp-form--vertical">
				<div class="pp-form__control">
					<label>Label1</label>
					<input type="text" class="pp-input--max">
					<ul class="pp-form__control__help">
						<li>help</li>
						<li>text</li>
					</ul>
				</div>

				<div class="pp-form__control">
					<label>Label1</label>
					<input type="text" class="pp-input--max">
					<ul class="pp-form__control__help">
						<li>help</li>
						<li>text</li>
					</ul>
				</div>

				<div class="pp-form__control">
					<label>Gender</label>
					<div>
						<label class="pp-form__control__label"><input type="radio" class="pp-radio">Do not select</label>
						<label class="pp-form__control__label"><input type="radio" class="pp-radio">Male</label>
						<label class="pp-form__control__label"><input type="radio" class="pp-radio">Female</label>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h2>Horizontal Form</h2>

			<div class="pp-form--horizontal">
				<div class="pp-form__control">
					<div><label>Label1</label></div>
					<div>
						<input type="text" class="pp-input--max">
						<ul class="pp-form__control__help">
							<li>help</li>
							<li>text</li>
						</ul>
					</div>
				</div>

				<div class="pp-form__control">
					<div><label>Already a member?</label></div>
					<div>
						<input type="text" class="pp-input--max">
						<div class="pp-form__control__note">
							<ul class="pp-form__control__note__help">
								<li>help</li>
								<li>text</li>
							</ul>

							<div>30/50文字</div>
						</div>
					</div>
				</div>

				<div class="pp-form__control">
					<div><label>Department</label></div>
					<div>
						<input type="text" class="pp-input--max">
					</div>
				</div>

				<div class="pp-form__control">
					<div><label>Body</label></div>
					<div>
						<textarea class="pp-textarea--max" rows="5"></textarea>
						<ul class="pp-form__control__help">
							<li>help</li>
							<li>text</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
