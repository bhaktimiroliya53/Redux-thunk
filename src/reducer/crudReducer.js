let value = {
    record : []
}

const crudReducer = (state = value , action) => {
    switch(action.type){
        case 'viewapi' : 
            return {
                ...state,
                record : action.poly
            }
        default :
            return state
    }
}

export default crudReducer