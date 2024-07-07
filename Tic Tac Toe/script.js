
let currentPlayer = "X";
        let gameBoard = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        function makeMove(cell) {
            const row = cell.parentElement.id.charAt(3) - 1;
            const col = Array.from(cell.parentElement.children).indexOf(cell);

            if (gameBoard[row][col] === "" && !checkWinner()) {
                cell.innerText = currentPlayer;
                gameBoard[row][col] = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                checkWinner();
            }
        }

        function checkWinner() {
            const winningCombos = [
                [[0, 0], [0, 1], [0, 2]],
                [[1, 0], [1, 1], [1, 2]],
                [[2, 0], [2, 1], [2, 2]],
                [[0, 0], [1, 0], [2, 0]],
                [[0, 1], [1, 1], [2, 1]],
                [[0, 2], [1, 2], [2, 2]],
                [[0, 0], [1, 1], [2, 2]],
                [[0, 2], [1, 1], [2, 0]]
            ];

            for (const combo of winningCombos) {
                const [a, b, c] = combo;
                if (
                    gameBoard[a[0]][a[1]] !== "" &&
                    gameBoard[a[0]][a[1]] === gameBoard[b[0]][b[1]] &&
                    gameBoard[a[0]][a[1]] === gameBoard[c[0]][c[1]]
                ) {
                    alert(`${gameBoard[a[0]][a[1]]} wins!`);
                    return true;
                }
            }

            if (gameBoard.flat().every((cell) => cell !== "")) {
                alert("It's a draw!");
                return true;
            }

            return false;
        }

        function resetGame() {
            const cells = document.querySelectorAll(".cell");
            cells.forEach((cell) => (cell.innerText = ""));
            gameBoard = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ];
            currentPlayer = "X";
        }