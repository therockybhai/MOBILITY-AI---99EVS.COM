export default function handler(req, res) {

  const {

    bri,
    mri,
    icil,
    cosmetic,
    accessory,
    market,
    confidence

  } = req.query;


  const trustScore =

    bri * 0.30 +

    mri * 0.25 +

    icil * 0.15 +

    confidence * 0.15 +

    cosmetic * 0.05 +

    accessory * 0.05 +

    market * 0.05;


  res.status(200).json({

    trustScore: Math.round(trustScore)

  });

}
