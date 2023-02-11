import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { pagesQuery } from '@queries/pages';
import { Page } from '@types';

const getData = async () => {
	const page: [Page] = await sanityClient.fetch(pagesQuery('uses'));

	return page[0];
};

export const metadata = {
	title: 'Jacob Herper uses ...',
	description:
		'This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the UK.',
};

const UsesPage = async () => {
	const page = await getData();

	return (
		<Container>
			<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">Uses</h1>
			<ContentBlock value={page.body} />
		</Container>
	);
};

export default UsesPage;
