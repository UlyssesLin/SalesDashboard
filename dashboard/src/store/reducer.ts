const initialState: DashboardState = {
    title: '',
    image: '',
    subtitle: '',
    brand: '',
    tags: [],
    sales: []
}

const convertToDollars = (amount: string): string => {
    return '$' + amount.toLocaleString();
}

const processSales = (sales: GenericObject[]): GenericObject[] => {
    let tableRows: GenericObject[] = [];
    sales.map((sale: GenericObject) => {
        const splitDate: string[] = sale?.weekEnding.split('-');
        const newSale: GenericObject = {
            weekEnding: [splitDate[1], splitDate[2], splitDate[0]].join('-'),
            retailSales: convertToDollars(sale?.retailSales),
            wholesaleSales: convertToDollars(sale?.wholesaleSales),
            unitsSold: sale?.unitsSold,
            retailerMargin: convertToDollars(sale?.retailerMargin)
        }
        tableRows.push(newSale);
    })
    return tableRows;
}

const reducer = (
    state: DashboardState = initialState,
    action: APIAction
  ): DashboardState => {
    switch (action.type) {
        case 'MOCK_API_CALL':
            console.log(action);
            const payload = action.payload;
            return {
                ...state,
                title: payload.title,
                image: payload.image,
                subtitle: payload.subtitle,
                brand: payload.brand,
                tags: payload.tags,
                sales: processSales(payload.sales)
            };
    }
    return state
  }
  
  export default reducer