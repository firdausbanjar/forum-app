const ThreadDetail = ({ params }: { params: { slug: string } }) => {
	return <h1>{`Ini halaman Thread Detail: ${params.slug}`}</h1>;
};

export default ThreadDetail;
