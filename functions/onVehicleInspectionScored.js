const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.onVehicleInspectionScored =
functions.firestore
.document("vehicles/{vehicleId}")
.onUpdate(async (change, context) => {

  const before = change.before.data();
  const after = change.after.data();

  if (
    before.inspectionScore === 0 &&
    after.inspectionScore > 0
  ) {

    const vehicleId = context.params.vehicleId;

    await fetch(
      "https://99evs.com/api/process-inspection",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          vehicleId,
          inspectionScore: after.inspectionScore
        })
      }
    );

  }

});
