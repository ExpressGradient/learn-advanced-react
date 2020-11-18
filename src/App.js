import Accessibility, {Todos} from "./Accessibility";
import RootComponent from "./Context";
import ErrorBoundary from "./ErrorBoundary";
import RefComponent from "./Ref";
import RefForward from "./RefForward";
import FinalContainer from "./HOC";
import ShouldComponentUpdateExample from "./ShouldComponentUpdateExample";
import PortalComponent from "./Portal";
import ProfilerComponent from "./ProfilerComponent";
import RenderProps from "./RenderProps";
import GreetingWithTypechecking, { SingleChild } from "./Typechecking";

export default function App() {
	return(<ErrorBoundary>
		<Accessibility />
		<Todos />
		<RootComponent />
		<RefComponent />
		<RefForward />
		<FinalContainer />
		<ShouldComponentUpdateExample />
		<PortalComponent>
			<h1>I'm inside a portal</h1>
		</PortalComponent>
		<ProfilerComponent />
		<RenderProps render={(state) => <p>The value of data is {state.data}</p>} />
		<GreetingWithTypechecking name="discoding" rank={2} />
		<SingleChild>
			<h1>I'm a single child</h1>
		</SingleChild>
	</ErrorBoundary>);
}

// Short note about Fragment.
// React.Fragment can accept a key while mapping a collection to array of fragments.
