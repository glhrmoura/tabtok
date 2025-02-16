export const calcTime = (data: string) => {
  const dataFutura = new Date(data);
  const dataAtual = new Date();
  const diferenca = dataAtual.getTime() - dataFutura.getTime();
  
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (dias > 0) return dias === 1 ? '1 dia atrás' : `${dias} dias atrás`;
  else if (horas > 0) return horas === 1 ? '1 hora atrás' : `${horas} horas atrás`;
  else return 'Menos de 1 hora atrás';
};

