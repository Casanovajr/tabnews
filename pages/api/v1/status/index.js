function status(request, response) {
  response.status(200).json({ mensagem: "Funcionou" });
}

export default status;
