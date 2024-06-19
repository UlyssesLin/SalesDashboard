import axios from "axios";

export function mockAPICall() {
    const action: APIAction = {
        type: 'MOCK_API_CALL',
        payload: {}
      }
    return (dispatch: any) => {
        const fetchData = async () => {
            try {
                const responseData = await axios.get('data2021.json');
                console.log(responseData?.data[0]);
                action.payload = responseData.data[0];
                dispatch(action);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
}