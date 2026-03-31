export default function handler(req, res) {

  const {
    motorCondition,
    controllerResponse,
    brakingCondition,
    suspensionCondition,
    wiringCondition
  } = req.query;

  const mri =

    motorCondition * 0.35 +
    controllerResponse * 0.25 +
    brakingCondition * 0.15 +
    suspensionCondition * 0.15 +
    wiringCondition * 0.10;

  res.status(200).json({
    mechanicalReliabilityIndex: Math.round(mri)
  });

}
