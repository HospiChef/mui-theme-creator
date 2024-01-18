import AssignmentIcon from "@mui/icons-material/Assignment"
import BarChartIcon from "@mui/icons-material/BarChart"
import DashboardIcon from "@mui/icons-material/Dashboard"
import LayersIcon from "@mui/icons-material/Layers"
import PeopleIcon from "@mui/icons-material/People"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { ListItemButton, Toolbar } from "@mui/material"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import React from "react"
import * as colors from 'src/assets/theme/colors'

const drawerWidth = 240

interface Props {
  open: boolean
  onClose: () => void
}
const DrawerExample = ({ open, onClose }: Props) => {
  const drawerRef = React.useRef<HTMLDivElement | null>(null)

  const getParent = () => drawerRef.current?.parentElement

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ref={drawerRef}
      ModalProps={{
        container: getParent(),
        disablePortal: true,
        BackdropProps: {
          sx: {
            position: "absolute",
          }
        },
      }}
      sx={{
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: (theme) => theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Toolbar sx={{ bgcolor: colors.blueGrey[950] }} />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  )
}

export default DrawerExample

export const mainListItems = (
  <div>
    <ListItemButton selected>
      <ListItemIcon>
        <DashboardIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary="Orders" primaryTypographyProps={{ style: { fontWeight: 100 } }} />
    </ListItemButton>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)
