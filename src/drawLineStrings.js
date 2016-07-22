module.exports = function drawLineStrings(ctx, lineStrings) {
  var i;
  var p1;
  var p2;
  var coordinates;

  lineStrings.forEach(function(lineString) {
    ctx.lineWidth = lineString.styles.lineWidth;
    coordinates = lineString.coordinates;

    for (i = 0; i < coordinates.length - 1; i++) {
      p1 = coordinates[i];
      p2 = coordinates[i + 1];

      ctx.beginPath();
      ctx.moveTo(p1[0], p1[1]);
      ctx.lineTo(p2[0], p2[1]);
      ctx.strokeStyle = lineString.styles.color;
      ctx.stroke();
    }
  });
};
