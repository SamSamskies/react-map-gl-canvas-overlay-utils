export default function(ctx, lineStrings) {
  let i;
  let p1;
  let p2;

  lineStrings.forEach(({ coordinates, styles: { color, lineWidth } }) => {
    ctx.lineWidth = lineWidth;

    for (i = 0; i < coordinates.length - 1; i++) {
      p1 = coordinates[i];
      p2 = coordinates[i + 1];

      ctx.beginPath();
      ctx.moveTo(p1[0], p1[1]);
      ctx.lineTo(p2[0], p2[1]);
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  });
};
