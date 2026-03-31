export default function handler(req, res) {

  const {
    bri,
    mri,
    trustScore
  } = req.query;

  let primaryRisk = "none";

  if (bri < mri) {

    primaryRisk = "battery";

  } else if (mri < bri) {

    primaryRisk = "mechanical";

  }

  res.status(200).json({

    unifiedScore:

      bri * 0.4 +
      mri * 0.4 +
      trustScore * 0.2,

    primaryRiskDriver: primaryRisk

  });

}
