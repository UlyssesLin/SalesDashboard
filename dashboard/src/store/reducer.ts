const initialState: DashboardState = {
    title: '',
    image: '',
    subtitle: '',
    brand: '',
    tags: []
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
                tags: payload.tags
            };
    }
    return state
  }
  
  export default reducer