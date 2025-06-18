export function calcularSintrom(
  inr: number,
  dts: number,
  previoMinimo: boolean,
  cambiosClinicos: boolean
): { nuevaDTS: number; dias: number } {
  let ajuste = 0;
  let dias = 0;

  if (inr <= 1.6) {
    ajuste = 0.10;
    dias = 14;
  } else if (inr === 1.7) {
    ajuste = 0.05;
    dias = previoMinimo ? 14 : 21;
  } else if (inr === 1.8) {
    ajuste = 0.10;
    dias = previoMinimo ? 14 : 21;
  } else if (inr === 1.9) {
    ajuste = 0;
    dias = 28;
  } else if (inr === 2.3) {
    ajuste = 0;
    dias = previoMinimo ? 28 : 35;
  } else if (inr >= 3.1 && inr <= 3.3) {
    ajuste = 0;
    dias = 28;
  } else if (inr >= 3.4 && inr <= 3.6) {
    ajuste = 0.05;
    dias = previoMinimo ? 14 : 21;
  } else if (inr >= 3.7 && inr <= 3.9) {
    ajuste = 0.10;
    dias = previoMinimo ? 14 : 21;
  } else if (inr >= 4.0) {
    ajuste = -0.10;
    dias = 14;
  }

  if (cambiosClinicos) {
    dias = 7;
  }

  const nuevaDTS = Math.round(dts * (1 + ajuste));

  return { nuevaDTS, dias };
}
