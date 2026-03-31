const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.processVehicleScore = functions.firestore
  .document("vehicles/{vehicleId}")
  .onWrite(async (change, context) => {

    const data = change.after.data();
    if (!data) return null;

    let {
      documentScore = 10,
      imageScore = 10,
      confidenceScore = 10,
      marketScore = 10,
      inspectionScore = 10,
      batteryScore = 10
    } = data;

    const trustScore =
      documentScore * 0.15 +
      imageScore * 0.10 +
      confidenceScore * 0.10 +
      marketScore * 0.10 +
      inspectionScore * 0.30 +
      batteryScore * 0.25;

    const vehicleRef =
      admin.firestore().doc(`vehicles/${context.params.vehicleId}`);

    await vehicleRef.update({
      trustScore,
      trustScoreUpdatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    if (trustScore >= 60) {

      await admin.firestore().collection("certificates").add({
        vehicleId: context.params.vehicleId,
        trustScore,
        issuedAt: admin.firestore.FieldValue.serverTimestamp()
      });

    }

    if (trustScore < 70) {

      await admin.firestore()
        .collection("predictive_forecasts")
        .doc(context.params.vehicleId)
        .set({
          forecast: "service soon",
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });

    }

    await admin.firestore()
      .collection("health_scores")
      .doc(context.params.vehicleId)
      .set({
        documentScore,
        imageScore,
        confidenceScore,
        marketScore,
        inspectionScore,
        batteryScore,
        trustScore
      });

  });
