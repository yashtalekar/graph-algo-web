import { Box } from "@material-ui/core"
import GraphController from "../components/GraphController"
import GraphDisplay from "../components/GraphDisplay"

const GraphScreen = () => {


	return (
		<Box  flexDirection="column" justifyContent="center">
			<GraphDisplay/>
			<GraphController/>
		</Box>
	)
}
export default GraphScreen;