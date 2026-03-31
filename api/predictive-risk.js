export default function handler(req, res) {

  const {
    briTrend,
    mriTrend,
    trustTrend
  } = req.query;

  let forecast = "stable";

  if (briTrend < 70 || mriTrend < 70) {

    forecast = "service soon";

  }

  if (trustTrend < 60) {

    forecast = "resale recommended";

  }

  res.status(200).json({
    predictiveForecast: forecast
  });

}
