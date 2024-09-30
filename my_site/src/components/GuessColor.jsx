import Grid from '@mui/material/Grid2';
import '../styles/guessColorStyle.css';
function GuessColor() {
	return (
		<Grid marginTop={8}>
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="stylesheet" href="../../styles/guessColorStyle.css" />
					<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" />
					<title>Guess The Color</title>
				</head>

				<body className="guess_body">
					<header className="guess_header">
						<h4 className="title guess_h4">Guess The RGB Color</h4>
						<h1 id="rgb-num">RGB</h1>
					</header>

					<section className="game-options guess_section">
						<div className="info">
							<div className="rgb-color">
								<button className="game-button">New Colors</button>
							</div>
							<div className="result">
								<p id="gameResult"></p>
							</div>
							<div className="difficulty">
								<button className="game-button easy mode">Easy</button>
								<button className="game-button hard mode active">Hard</button>
							</div>
						</div>
					</section>

					<section className="random-colors guess_section">
						<div className="row1">
							<button className="guess_buttons"></button>
							<button className="guess_buttons"></button>
							<button className="guess_buttons"></button>
						</div>
						<div className="row2">
							<button className="guess_buttons"></button>
							<button className="guess_buttons"></button>
							<button className="guess_buttons"></button>
						</div>
					</section>

					<script src="../assets/js/guessColor.js"></script>
				</body>
			</html>
		</Grid>
	);
}

export default GuessColor;
