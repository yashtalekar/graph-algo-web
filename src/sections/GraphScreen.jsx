import { Box } from "@material-ui/core"
import GraphController from "../components/GraphController"
import GraphDisplay from "../components/GraphDisplay"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  graphScreen: {
    // backgroundColor: "black",
    backgroundPosition: "center",
    marginLeft: "200",
    alignContent: "center",
    display: "flex",
  },
})

const GraphScreen = () => {
  const classes = useStyles()
  return (
    <Box flexDirection="column" justifyContent="center" className={classes.graphScreen}>
      <GraphDisplay />
      <GraphController />
    </Box>
  )
}
export default GraphScreen
