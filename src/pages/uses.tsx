import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Image from 'next/image';
import styled from 'styled-components';

function Home() {
	return (
		<>
			<SeoHead
				title="Jacob Herper Uses - Front-End Software Engineer"
				description="This is a list of tech equipment I currently use for my day-to-day work as a software engineer."
			/>

			<Container>
				<Headline>/uses</Headline>
				<p>
					This is a list of tech equipment I currently use for my day-to-day
					work as a software engineer. With the pandemic and a shift to working
					fully remotely, I have upgraded a lot of my equipment in 2020 and
					2021.
				</p>
				<Image
					src="/assets/desk.jpg"
					width={1920}
					height={1080}
					alt="A photo of my desk"
				/>
				<h3>Computer & Hardware</h3>
				<List>
					<li>
						<strong>
							<a href="https://amzn.to/3ySbHP2" target="_blank">
								Macbook Pro 16"
							</a>
						</strong>{' '}
						(2.4 GHz i9 CPU, 32 GB Ram, 2TB storage)
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3uGdfbs" target="_blank">
								Apple Magic Keyboard 2
							</a>
						</strong>{' '}
						in space grey
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3c6al9k" target="_blank">
								Apple Magic Trackpad 2
							</a>
						</strong>{' '}
						in space grey
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3fxf7Pr" target="_blank">
								LG 34WN80C-B
							</a>
						</strong>{' '}
						34" ultra-wide monitor, connected via USB-C
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/2RWN1nP" target="_blank">
								Invision MX450
							</a>
						</strong>{' '}
						monitor arm
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3uDzFu3" target="_blank">
								Rain Design mStand
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3vGlCFa" target="_blank">
								iPhone 12 Pro
							</a>
						</strong>{' '}
						(256 GB)
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3wCC35E" target="_blank">
								Bose 700
							</a>
						</strong>{' '}
						headphones
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/2R889al" target="_blank">
								Apple AirPods Pro
							</a>
						</strong>{' '}
						for on-the-go
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3ux8DnT" target="_blank">
								Nest Wifi
							</a>
						</strong>{' '}
						Mesh Network
					</li>
					<li>
						<strong>
							<a
								href="https://store.google.com/product/google_home"
								target="_blank"
							>
								Google Home
							</a>
						</strong>{' '}
						to manage my smart home
					</li>
					<li>
						<strong>
							<a href="https://amzn.to/3vBBSHy" target="_blank">
								Tonor Q9
							</a>
						</strong>{' '}
						Condenser Microphone
					</li>
				</List>
				<h3>Development Tools</h3>
				<List>
					<li>
						<strong>
							<a href="https://code.visualstudio.com/" target="_blank">
								VS Code
							</a>
						</strong>{' '}
						with the{' '}
						<strong>
							<a
								href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
								target="_blank"
							>
								Night Owl
							</a>
						</strong>{' '}
						theme and{' '}
						<strong>
							<a
								href="https://www.typography.com/fonts/operator/styles/operatormono"
								target="_blank"
							>
								Operator Mono
							</a>
						</strong>{' '}
						font
					</li>
					<li>
						<strong>
							<a href="https://www.iterm2.com/" target="_blank">
								iTerm 2
							</a>
						</strong>{' '}
						Terminal
					</li>
					<li>
						<strong>
							<a href="https://www.sourcetreeapp.com/" target="_blank">
								Sourcetree
							</a>
						</strong>{' '}
						for version control beyond the command line
					</li>
					<li>
						<strong>
							<a href="https://insomnia.rest/" target="_blank">
								Insomnia
							</a>
						</strong>{' '}
						to test REST and GraphQL API's
					</li>
				</List>
				<h3>Design Tools</h3>
				<List>
					<li>
						<strong>
							<a href="https://www.sketch.com/" target="_blank">
								Sketch
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a href="https://www.figma.com/" target="_blank">
								Figma
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a href="https://affinity.serif.com/en-gb/photo/" target="_blank">
								Affinity Photo
							</a>
						</strong>
						,{' '}
						<strong>
							<a
								href="https://affinity.serif.com/en-gb/designer/"
								target="_blank"
							>
								Affinity Designer
							</a>
						</strong>
						,{' '}
						<strong>
							<a
								href="https://affinity.serif.com/en-gb/publisher/"
								target="_blank"
							>
								Affinity Publisher
							</a>
						</strong>
					</li>
				</List>
				<h3>Productivity Tools</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://www.notion.so/?r=008f1f1395694a2594659c43f8d666d8"
								target="_blank"
							>
								Notion
							</a>
						</strong>{' '}
						for notes and to-do lists
					</li>
					<li>
						<strong>
							<a href="https://www.atlassian.com/software/jira" target="_blank">
								Jira
							</a>
						</strong>{' '}
						for project management
					</li>
					<li>
						<strong>
							<a href="https://slack.com/" target="_blank">
								Slack
							</a>
						</strong>{' '}
						for communication
					</li>
					<li>
						<strong>
							<a href="https://workspace.google.com/" target="_blank">
								Google Workspace
							</a>
						</strong>{' '}
						for email, calendars and Google Drive
					</li>
				</List>
				<h3>Various other software</h3>
				<List>
					<li>
						<strong>
							<a href="https://brave.com/" target="_blank">
								Brave browser
							</a>
						</strong>{' '}
						has replaced Google Chrome for me
					</li>
					<li>
						<strong>
							<a href="https://1password.com/" target="_blank">
								1Password
							</a>
						</strong>{' '}
						as my password manager
					</li>
					<li>
						<strong>
							<a href="https://www.backblaze.com/" target="_blank">
								Backblaze
							</a>
						</strong>{' '}
						for constant backups of my machines
					</li>
					<li>
						<strong>
							<a href="https://magnet.crowdcafe.com/" target="_blank">
								Magnet
							</a>
						</strong>{' '}
						to manage windows
					</li>
				</List>{' '}
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;

	span {
		display: none;
	}

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

const List = styled.ul`
	list-style: square;
	padding: 0 1rem;
	line-height: 2;
`;

export default Home;
