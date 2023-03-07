import { useLanguage } from '@/hooks/useLanguage'
import s from './PreparedSolutions.module.scss'






const PreparedSolutions = () => {
const {} = useLanguage().prepared_solutions

  return <section className={`section ${s.preparedSolutionsWrapper}`}>
    
  </section>
}
export default PreparedSolutions