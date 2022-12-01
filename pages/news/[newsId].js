import {useRouter} from 'next/router';

function DetailPage() {
	const router = useRouter();
	const newsID = router.query.newsId;
	return <h1>The Detail of {newsID} Article</h1>;
}

export default DetailPage;
