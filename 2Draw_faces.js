

function drawInteraction(faces) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    noStroke()
fill(0, 120, 255);
  triangle( //top blue triangle
    face.keypoints[109].x, face.keypoints[109].y,
    face.keypoints [10].x, face.keypoints[10].y,
    face.keypoints[123].x, face.keypoints[123].y,
  );
triangle( //bottom blue triangle
    face.keypoints[22].x, face.keypoints[22].y,
    face.keypoints [112].x, face.keypoints[112].y,
    face.keypoints[169].x, face.keypoints[169].y,
  );
  fill(250, 22, 34);
  triangle( //bottom red triangle
    face.keypoints[112].x, face.keypoints[112].y,
    face.keypoints [334].x, face.keypoints[334].y,
    face.keypoints[169].x, face.keypoints[169].y,
  );
  quad( //top red square
    face.keypoints[10].x, face.keypoints[10].y,
    face.keypoints [297].x, face.keypoints[297].y,
    face.keypoints[188].x, face.keypoints[188].y,
    face.keypoints[123].x, face.keypoints[123].y,
  );
  stroke(0)
  strokeWeight(3);
   line(face.keypoints[10].x, face.keypoints[10].y,
    face.keypoints[123].x, face.keypoints[123].y,
  );
   line(face.keypoints[121].x, face.keypoints[121].y,
    face.keypoints[169].x, face.keypoints[169].y,
  );


    drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    drawPoints(face.lips);
    drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow);
  }
}
// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 0);
  }
  pop()

}
