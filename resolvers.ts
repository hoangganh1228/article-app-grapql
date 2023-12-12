import Article from "./models/article.model";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world!";
        },
        getListArticle: async () => {
            const articles = await Article.find({
                deleted: false
            })

            return articles;
        },
        getArticle: async (_, args) => {
            const { id } = args;
            const article = await Article.findOne({
                _id: id,
                deleted: false
            })

            return article;
        },
    }
}