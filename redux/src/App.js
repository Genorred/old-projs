import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";
import {
    addCostumerAction,
    ASYNC_ADD_MANY_COSTUMERS,
    asyncAddManyCostumersAction,
    removeCostumerAction
} from "./store/costumerReducer";
import {fetchingCostumers} from "./asyncActions/costumers";
import {ASYNC_INCREAMENT, asyncDecreamentCreator, asyncIncreamentCreator} from "./store/cashReducer";
function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const costumers = useSelector(state => state.costumers.costumers)
    console.log(cash)
    const addCash = (cash) => {
        dispatch({
            type: 'ADD-CASH',
            payload: cash
        })
    }
    const getCash = (cash) => {
        dispatch({
            type: 'GET-CASH',
            payload: cash
        })
    }
    const addCostumer = (name) => {
        const costumer = {
            name: name,
            id: Date()
        }
        dispatch(addCostumerAction(costumer))
    }
    const removeCostumer = (costumer) => {
        dispatch(removeCostumerAction((costumer)))
    }

  return (
    <div>
        {cash}
        <button style={{width: '200px', heigth: '100px'}} onClick={()=> addCash(Number(prompt()))}>increase</button>
        <button style={{width: '200px', heigth: '100px'}} onClick={()=> getCash(Number(prompt()))}>decrease</button>
        <button style={{width: '200px', heigth: '100px'}} onClick={()=> addCostumer(prompt())}>add user</button>
        <button style={{width: '200px', heigth: '100px'}} onClick={()=> null}>remove user</button>
        <button style={{width: '200px', heigth: '100px'}} onClick={()=> dispatch(fetchingCostumers())}>get costumers from data</button>
        <button onClick={() => dispatch(asyncAddManyCostumersAction())}>add users aaa</button>
        {costumers.length>0
        ?<div>
                {costumers.map(costumer=>
                            <div onClick={()=>removeCostumer(costumer)}>{costumer.name}</div>
                        )}

            </div>
            : 0
        }
        <div>
            <button onClick={() => dispatch(asyncIncreamentCreator())}>inc</button>
            <button onClick={() => dispatch(asyncDecreamentCreator())}>dec</button>
        </div>
    </div>
  );
}

export default App;
