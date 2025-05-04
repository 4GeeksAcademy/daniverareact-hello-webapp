import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img 
        src={rigoImageUrl} 
        className="card-img-top" 
        alt="Rigo Baby" 
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <div className="d-flex justify-content-between">
          <button 
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'SOME_ACTION' })}
          >
            Dispatch Action
          </button>
          <span className="badge bg-secondary">
            {store.someValue || "No data"}
          </span>
        </div>
      </div>
    </div>
	
  );
};