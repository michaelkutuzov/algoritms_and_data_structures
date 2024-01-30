/**
 *
 * Исходим из предположения, что оба числа одинаковой чётной длины
 * Проверки:
 *  - если длины разные, домножаем меньшее, сохраняем коэффициент деления
 *  - если длины нечётные, домножаем на 10, сохраняем коэффициент деления
 */

const getParts = (num: number, coeff: number) => {
  const num1 = Math.floor(num / coeff);
  const num2 = num - num1 * coeff;
  return [num1, num2];
};

const mult = (a: number, b: number): number => {
  let la = String(a).length;
  let lb = String(b).length;
  let diffCoeff = 1;
  if (la === 1 && lb === 1) return a * b;

  if (la > lb) {
    diffCoeff = 10 ** (la - lb);
    b *= diffCoeff;
    lb = la;
  }

  if (lb > la) {
    diffCoeff = 10 ** (lb - la);
    a *= diffCoeff;
    la = lb;
  }

  if (la % 2 === 1) {
    a *= 10;
    b *= 10;
    diffCoeff *= 100;
    la = String(a).length;
    lb = String(b).length;
  }

  const mainCoeff = 10 ** la;
  const secondaryCoeff = 10 ** (la / 2);
  const [a1, a2] = getParts(a, secondaryCoeff);
  const [b1, b2] = getParts(b, secondaryCoeff);

  const term1 = mult(a1, b1);
  const term2 = mult(a2, b2);
  const term3 = mult(a1 + a2, b1 + b2) - term1 - term2;

  return (mainCoeff * term1 + term2 + secondaryCoeff * term3) / diffCoeff;
};

export default mult;
