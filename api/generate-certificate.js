export default function handler(req, res) {

  const {

    mlilId,
    trustScore

  } = req.body;


  const certificateId =

    `99EVS-${Date.now()}-${mlilId.slice(-6)}`;


  res.status(200).json({

    certificateId,

    trustScore,

    issuedAt: new Date()

  });

}
