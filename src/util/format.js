//função para formatar a preço

export const {format: formatPrice} = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})