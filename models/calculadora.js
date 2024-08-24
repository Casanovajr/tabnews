function somar(numero1, numero2) {
  if (typeof numero != "number") {
    return "Erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;
