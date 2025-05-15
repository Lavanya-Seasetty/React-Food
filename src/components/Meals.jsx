import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Meals() {
    const BACKEND_URL = 'https://food-order-backend-jzse.onrender.com';
    const {
        data: loadedMeals,
        isLoading,
        error,
    } = useHttp(`${BACKEND_URL}/meals`, requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals...</p>;
    }

    if(error){
        return <Error title="Failed to fetch Meals" message ={error}/>;
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}