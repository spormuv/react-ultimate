import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';
import Row from './ui/Row';

const StyledApp = styled.main`
	/* background-color: orangered; */
	padding: 20px;
`;

const App = () => {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Row>
					<Row type='horizontal'>
						<Heading as='h1'>Wild Oasis</Heading>

						<div>
							<Heading as='h2'>Check in and out</Heading>
							<Button onClick={() => alert('Check in')}>Check in</Button>
							<Button
								variation='secondary'
								size='small'
								onClick={() => alert('Check out')}
							>
								Check out
							</Button>
						</div>
					</Row>

					<Row>
						<Heading as='h3'>Form</Heading>
						<form>
							<Input type='number' placeholder='Guests' />
							<Input type='number' placeholder='Guests' />
						</form>
					</Row>
				</Row>
			</StyledApp>
		</>
	);
};

export default App;
