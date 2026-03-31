export default function handler(req, res) {

  const {
    baseValue,
    confidenceMultiplier,
    batteryAdjustment,
    mechanicalAdjustment,
    ageFactor,
    demandFactor
  } = req.query;

  const adjustedValue =

    baseValue *
    confidenceMultiplier *
    batteryAdjustment *
    mechanicalAdjustment *
    ageFactor *
    demandFactor;

  res.status(200).json({
    adjustedValue: Math.round(adjustedValue)
  });

}
