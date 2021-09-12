import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import QueueIcon from '@material-ui/icons/Queue';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.kebottomy === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      
          <ListItem button component={Link} to='/add' >
            <ListItemIcon><QueueIcon /></ListItemIcon>
            <ListItemText primary="Add product" />
          </ListItem>
         
          
          <ListItem button component={Link} to="/products">
            <ListItemIcon><PhotoLibraryIcon /></ListItemIcon>
            <ListItemText primary="All Products" />
          </ListItem>
          
      
      </List>
     
    </div>
  );

  return (
    <div>
     
        <React.Fragment >
         <div className='navbar'> <Button className ='navbar-btn' onClick={toggleDrawer('bottom', true)}><MenuIcon/></Button> </div>
          <Drawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
            {list('bottom')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
