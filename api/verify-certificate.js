export default function handler(req, res) {

  const { id } = req.query;

  if (!id) {

    return res.status(400).json({

      error: "Certificate ID required"

    });

  }

  res.status(200).json({

    certificateId: id,

    status: "verified",

    issuer: "99EVS"

  });

}
