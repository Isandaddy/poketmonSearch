import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RootReducerType} from './store'
import {fetchPoketmonData} from './actions/PoketmonActions'
import Card from "./components/card/Card";
import style from './App.module.css'

function App() {
  const poketmonReducer = useSelector((state: RootReducerType) => state.PoketmonReducer)
  const searchName = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch()
  const searchPoketmon = () => {
    if(searchName.current?.value === null || searchName.current?.value === ''){
      return
    }
    dispatch(fetchPoketmonData(searchName.current ? searchName.current.value : ''))
  }
  
  return (
    <div className={style.App}>
      <div className={style.search}>
        <input ref={searchName} type="text" placeholder="Search Poketmon" />
        <button onClick={searchPoketmon}>search</button>
      </div>
      <section>
          {
          poketmonReducer.success ? <>
            <Card poketmon = {poketmonReducer.poketmon} />
          </> : <div>{searchName.current?.value} is not found</div>
          }
      </section>
    </div>
  );
}

export default App;
