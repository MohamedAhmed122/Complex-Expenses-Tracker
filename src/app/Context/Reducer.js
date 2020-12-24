import { DELETE_TRANSACTION , CREATE_TRANSACTION} from './Types'


export const  trackerReducer = (state , {type, payload}) =>{
    let transactions;

    switch (type) {
        case CREATE_TRANSACTION:
            transactions =[payload, ...state]
            return transactions 

        case DELETE_TRANSACTION:
            transactions = state.filter(transaction => transaction.id !== payload)
           return transactions 
           
        default:
           return state;
    }

}