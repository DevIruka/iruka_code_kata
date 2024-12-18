function solution(id_list, report, k) {
  let answer = [];
  let reportedCount = {};
  const userReports = {};
  id_list.forEach((id) => {
    userReports[id] = [];
  });
  const reportSet = new Set(report);
  reportSet.forEach((report) => {
    const splitedArray = report.split(" ");
    const reporter = splitedArray[0];
    const bad = splitedArray[1];
    if (!reportedCount[bad]) {
      updated = true;
      reportedCount[bad] = 1;
    } else {
      reportedCount[bad] += 1;
    }
    userReports[reporter].push(bad);
  });
  const bannedUsers = Object.keys(reportedCount).filter(
    (user) => reportedCount[user] >= k
  );
  const answerArray = new Array(id_list.length).fill(0);
  id_list.forEach((user, idx) => {
    userReports[user].forEach((reported) => {
      if (bannedUsers.includes(reported)) {
        answerArray[idx] += 1;
      }
    });
  });
  return answerArray;
}