/*
<label for="fname">First name</label>
<input type="text" name="fname" id="rfname" placeholder="First name" required><br>
<label for="name">Last name</label>
<input type="text" name="name" id="name" placeholder="Last name" required><br>
<label for="email">Email</label>
<input type="email" name="email" id="email" placeholder="Email" required><br>
<label for="pseudonym">Pseudonym</label>
<input type="text" name="pseudonym" id="pseudonym" placeholder="Pseudonym" required><br>
<label for="password">Password</label>
<input type="password" name="password" id="password" placeholder="Password" required><br>
<label for="confirm">Confirm password</label>
<input type="password" name="confirm" id="confirm" placeholder="Confirm password" required><br>
<button type="submit">Submit</button>
*/

var values = ["First name", "Last name", "Email", "Pseudonym", "Password", "Confirm password"];
var names = {"First name": "fname", "Last name": "name", "Confirm password": "confirm"};
var ids = names;
var types = {"Email": "email", "Password": "password", "Confirm password": "password"};