import "./App.css";
import AccordionSection from "./components/Containers/AccordionSection";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Title Area</h1>
			</header>
			<div>
				<AccordionSection width="100" sectionTitle="New Section">
					<section className="content">
						<div>
							<form action="">
								<input type="text" />
							</form>
						</div>
					</section>
					<button className="button button-primary">Press Me</button>
				</AccordionSection>
			</div>
		</div>
	);
}

export default App;
