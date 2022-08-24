import useFetch from "../hooks/useFetch";
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import './TotalProductsByCategory.css';

const TotalProductsByCategory = () => {

  const { data, isLoading } = useFetch(`/api/products?page=1`); 

  return (
    <section className='categories-count-container'>
      <h2 className='categories-count-title'>Categorías</h2>
      <ul className='categories-list'>
        { isLoading ? <LoaderSpinner /> : 
            data && data.categories.length > 0  && data.categories.map((categoryToRender, i) => {
              return(
                <li 
                  className='category-card'
                  key = { i }
                  >
                  <p>{ categoryToRender.category }: { categoryToRender.totalExperiences }</p>
                </li>
              )
            })
        }
      </ul>
    </section>
  );
};

export default TotalProductsByCategory;