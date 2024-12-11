function solution(players, callings) {
  const playerRank = new Map();
  players.forEach((player, index) => {
    playerRank.set(player, index);
  });
  callings.forEach((name) => {
    const currentRank = playerRank.get(name);
    const previousRank = currentRank - 1;
    if (previousRank >= 0) {
      const previousPlayer = players[previousRank];
      [players[previousRank], players[currentRank]] = [
        players[currentRank],
        players[previousRank],
      ];
      playerRank.set(name, previousRank);
      playerRank.set(previousPlayer, currentRank);
    }
  });
  return players;
}
