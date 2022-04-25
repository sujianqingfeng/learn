// 状态机

export function myAtoi(s: string) {
  const START = "start";
  const SIGNED = "signed";
  const IN_NUMBER = "isNumber";
  const END = "end";

  const MAX = Math.pow(2, 31) - 1;
  const MIN = Math.pow(-2, 31);

  // 0  1  2      3
  // '' +- number other
  //

  // 对符合要求的状态进行描述
  const table: any = {
    [START]: [START, SIGNED, IN_NUMBER, END],
    [SIGNED]: [END, END, IN_NUMBER, END],
    [IN_NUMBER]: [END, END, IN_NUMBER, END],
    [END]: [END, END, END, END],
  };

  const getStatus = (c: string) => {
    if (" " === c) return 0;
    if (~"+-".indexOf(c)) return 1;
    if (!isNaN(Number(c))) return 2;
    return 3;
  };

  let res = 0;
  let signed = 1;
  let status = START;

  for (const c of s) {
    status = table[status][getStatus(c)];
    // console.log(c, status);

    if (status === SIGNED) {
      if (~"-".indexOf(c)) {
        signed = -1;
      }
    }

    if (status === IN_NUMBER) {
      res = res * 10 + parseInt(c);
      if (signed > 0) res = Math.min(res, MAX);
      else res = Math.min(res, -MIN);
    }
  }

  return signed * res;
}
