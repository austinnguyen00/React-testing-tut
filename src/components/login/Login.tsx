import React, { useState } from "react";

const Login = () => {
	const [error, setError] = useState<boolean>(false);
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		try {
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="container">
			<form>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button
					disabled={!username || !password}
					onClick={handleClick}
				>
					Login
				</button>
				<span
					data-testid="error"
					style={{ visibility: error ? "visible" : "hidden" }}
				>
					Something went wrong!
				</span>
			</form>
		</div>
	);
};

export default Login;
