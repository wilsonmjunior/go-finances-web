const formatValue = (value: number): string =>
  Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

export default formatValue;
