import Image from 'next/image';
import styled from 'styled-components';

import { Container } from 'Atoms/Container';
import { List } from 'Atoms/List';
import { SeoHead } from 'Atoms/SeoHead';

import desk from 'Public/assets/desk.jpg';

function Home() {
	return (
		<>
			<SeoHead
				title="Jacob Herper Uses ... - Front-End Software Engineer"
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
					src={desk}
					width={1920}
					height={1080}
					alt="A photo of my desk"
					placeholder="blur"
				/>
				<h3>Computer & Hardware</h3>
				<List>
					<li>
						<strong>
							<a
								href="https://amzn.to/3ySbHP2"
								target="_blank"
								rel="noopener noreferrer"
							>
								Macbook Pro 16"
							</a>
						</strong>{' '}
						(2.4 GHz i9 CPU, 32 GB Ram, 2TB storage)
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3uGdfbs"
								target="_blank"
								rel="noopener noreferrer"
							>
								Apple Magic Keyboard 2
							</a>
						</strong>{' '}
						in space grey
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3c6al9k"
								target="_blank"
								rel="noopener noreferrer"
							>
								Apple Magic Trackpad 2
							</a>
						</strong>{' '}
						in space grey
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3fxf7Pr"
								target="_blank"
								rel="noopener noreferrer"
							>
								LG 34WN80C-B
							</a>
						</strong>{' '}
						34" ultra-wide monitor, connected via USB-C
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/2RWN1nP"
								target="_blank"
								rel="noopener noreferrer"
							>
								Invision MX450
							</a>
						</strong>{' '}
						monitor arm
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3uDzFu3"
								target="_blank"
								rel="noopener noreferrer"
							>
								Rain Design mStand
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3vGlCFa"
								target="_blank"
								rel="noopener noreferrer"
							>
								iPhone 12 Pro
							</a>
						</strong>{' '}
						(256 GB)
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3wCC35E"
								target="_blank"
								rel="noopener noreferrer"
							>
								Bose 700
							</a>
						</strong>{' '}
						headphones
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/2R889al"
								target="_blank"
								rel="noopener noreferrer"
							>
								Apple AirPods Pro
							</a>
						</strong>{' '}
						for on-the-go
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3ux8DnT"
								target="_blank"
								rel="noopener noreferrer"
							>
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
								rel="noopener noreferrer"
							>
								Google Home
							</a>
						</strong>{' '}
						to manage my smart home
					</li>
					<li>
						<strong>
							<a
								href="https://amzn.to/3vBBSHy"
								target="_blank"
								rel="noopener noreferrer"
							>
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
							<a
								href="https://code.visualstudio.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								VS Code
							</a>
						</strong>{' '}
						with the{' '}
						<strong>
							<a
								href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
								target="_blank"
								rel="noopener noreferrer"
							>
								Night Owl
							</a>
						</strong>{' '}
						theme and{' '}
						<strong>
							<a
								href="https://www.typography.com/fonts/operator/styles/operatormono"
								target="_blank"
								rel="noopener noreferrer"
							>
								Operator Mono
							</a>
						</strong>{' '}
						font
					</li>
					<li>
						<strong>
							<a
								href="https://www.iterm2.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								iTerm 2
							</a>
						</strong>{' '}
						Terminal
					</li>
					<li>
						<strong>
							<a
								href="https://www.sourcetreeapp.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sourcetree
							</a>
						</strong>{' '}
						for version control beyond the command line
					</li>
					<li>
						<strong>
							<a
								href="https://insomnia.rest/"
								target="_blank"
								rel="noopener noreferrer"
							>
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
							<a
								href="https://www.sketch.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sketch
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://www.figma.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Figma
							</a>
						</strong>
					</li>
					<li>
						<strong>
							<a
								href="https://affinity.serif.com/en-gb/photo/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Affinity Photo
							</a>
						</strong>
						,{' '}
						<strong>
							<a
								href="https://affinity.serif.com/en-gb/designer/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Affinity Designer
							</a>
						</strong>
						,{' '}
						<strong>
							<a
								href="https://affinity.serif.com/en-gb/publisher/"
								target="_blank"
								rel="noopener noreferrer"
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
								rel="noopener noreferrer"
							>
								Notion
							</a>
						</strong>{' '}
						for notes and to-do lists
					</li>
					<li>
						<strong>
							<a
								href="https://www.atlassian.com/software/jira"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jira
							</a>
						</strong>{' '}
						for project management
					</li>
					<li>
						<strong>
							<a
								href="https://slack.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Slack
							</a>
						</strong>{' '}
						for communication
					</li>
					<li>
						<strong>
							<a
								href="https://workspace.google.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
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
							<a
								href="https://brave.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Brave browser
							</a>
						</strong>{' '}
						has replaced Google Chrome for me
					</li>
					<li>
						<strong>
							<a
								href="https://1password.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								1Password
							</a>
						</strong>{' '}
						as my password manager
					</li>
					<li>
						<strong>
							<a
								href="https://www.backblaze.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Backblaze
							</a>
						</strong>{' '}
						for constant backups of my machines
					</li>
					<li>
						<strong>
							<a
								href="https://magnet.crowdcafe.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
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

export default Home;
