export const getRandomColor = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

export const calcTime = (data: string) => {
  const dataFutura = new Date(data);
  const dataAtual = new Date();
  const diferenca = dataAtual.getTime() - dataFutura.getTime();
  
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (dias > 0) {
    if (dias === 1) return '1 dia atrás';
    // Formatar a data no formato dd/mm/yyyy
    const dia = String(dataFutura.getDate()).padStart(2, '0');
    const mes = String(dataFutura.getMonth() + 1).padStart(2, '0');
    const ano = dataFutura.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  else if (horas > 0) return horas === 1 ? '1 hora atrás' : `${horas} horas atrás`;
  else return 'Menos de 1 hora atrás';
};

