<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="../../styles/guessColorStyle.css" />
		<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
		<title>Guess The Color</title>
	</head>

	<body>
		<header>
			<h4 class="title">Guess The RGB Color</h4>
			<h1 id="rgb-num">RGB</h1>
		</header>

		<section class="game-options">
			<div class="info">
				<div class="rgb-color">
					<button class="game-button">New Colors</button>
				</div>
				<div class="result">
					<p id="gameResult"></p>
				</div>
				<div class="difficulty">
					<button class="game-button easy mode">Easy</button>
					<button class="game-button hard mode active">Hard</button>
				</div>
			</div>
		</section>

		<section class="random-colors">
			<div class="row1">
				<button class="buttons"></button>
				<button class="buttons"></button>
				<button class="buttons"></button>
			</div>
			<div class="row2">
				<button class="buttons"></button>
				<button class="buttons"></button>
				<button class="buttons"></button>
			</div>
		</section>

		<script src="../js/guessColor.js"></script>
	</body>
</html>
