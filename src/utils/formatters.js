// Format number to BRL currency, eg: 25.99 -> R$ 25,99
export const formatterCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });