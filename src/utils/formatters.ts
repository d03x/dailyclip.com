type formatedType = {
  bilion?: string;
  milion?: string;
  thousand?: string;
};

const defauldata: formatedType = {
  milion: "M",
  bilion: "B",
  thousand: "K",
};
const shortNumberHumanityFormat = (
  number: number,
  formated: formatedType = defauldata
) => {
  if (number >= 1_000_000_000) {
    return (
      (number / 1_000_000_000).toFixed(1).replace(".0", "") +' '+ formated.bilion
    ); // Miliar → M
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(".0", "") +' '+ formated.milion; // Juta
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1).replace(".0", "") +' '+ formated.thousand; // Ribu
  }
  return number.toString();
};

export { shortNumberHumanityFormat };
