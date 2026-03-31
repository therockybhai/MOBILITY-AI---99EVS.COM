export default function handler(req, res) {

  const { currentTrust, previousTrust } = req.query;

  let trend = "stable";

  if (currentTrust > previousTrust + 5) {

    trend = "improving";

  } else if (currentTrust < previousTrust - 5) {

    trend = "declining";

  }

  res.status(200).json({
    lifecycleTrend: trend
  });

}
