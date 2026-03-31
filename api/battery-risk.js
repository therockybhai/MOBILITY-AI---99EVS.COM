export default function handler(req, res) {

  const {
    chargeRetention,
    voltageStability,
    thermalBehavior,
    cycleAge,
    bmsStatus
  } = req.query;

  const bri =

    chargeRetention * 0.4 +
    voltageStability * 0.2 +
    thermalBehavior * 0.1 +
    cycleAge * 0.2 +
    bmsStatus * 0.1;

  res.status(200).json({
    batteryRiskIndex: Math.round(bri)
  });

}
