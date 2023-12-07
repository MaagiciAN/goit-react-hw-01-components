import css from "./Statisctics.module.css"
import getRandomHexColor from "components/randomColor"

const Statisctics = ({ stats, title }) => {
    const statiscticsList = stats.map((elem) => (
        <li key={elem.id} className={css.item} style={{
    backgroundColor: getRandomHexColor(),
        }}>
            <span className={css.label}>{elem.label}</span>
            <span className={css.percentage}>{elem.percentage}</span>
</li>
    ))
    return (
        <section className={css.statisctics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>{statiscticsList}</ul>
        </section>
    )
}

export default Statisctics