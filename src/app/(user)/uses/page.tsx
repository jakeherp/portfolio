import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';

import { sanityClient } from '@lib/sanity';

import { pagesQuery } from '@queries/pages';

import type { Page } from '@types';

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
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">Uses</h1>
				<ContentBlock value={page.body} />
			</Container>
		</AnimatePage>
	);
};

export default UsesPage;
