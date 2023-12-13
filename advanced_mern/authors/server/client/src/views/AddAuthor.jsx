import AuthorForm from "../components/AuthorForm";

export default (props) => {
    const { addAuthor } = props

    return (
        <>
            <AuthorForm addAuthor={addAuthor}/>
        </>
    );
}