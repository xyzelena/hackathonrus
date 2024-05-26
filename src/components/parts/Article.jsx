import styles from './Article.module.css';

const Article = ({ articles }) => {
    return (
        <div className={styles.articles_container}>
            <div className={styles.articles_cards}>
                {
                    articles.map((article) => {
                        return (
                            <div className={styles.article_card} key={article.id}>
                                <div className={styles.article_img}>
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className={styles.article_info}>
                                    <a href={article.url}>{article.title}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Article; 