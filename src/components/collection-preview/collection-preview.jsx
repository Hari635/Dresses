import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Container,Button} from "@material-ui/core";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
    textAlign:'left',
    fontFamily:'Indie Flower'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const CollectionPreview=({ title,items,addItems })=>{
    const classes = useStyles();
    return(
        <Container fixed maxWidth={'md'}>
        <h1>{title.toUpperCase()}</h1>
        <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {items.filter((item,ind)=>ind<4).map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.imageUrl} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              actionPosition={'right'}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <Button onClick={()=>addItems(tile)} style={{color:'white'}} variant="contained" color="primary" href="#contained-buttons">
                Buy
                </Button>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
        {/* {
            items.filter((item,idx)=>idx<4).map((item)=>{
                return(
                    <h3 key={item.id} >{item.name}</h3>
                )
            })
        } */}
    </Container>)
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addItems:(item)=>dispatch(addItems(item))
  }
}

export default connect(null,mapDispatchToProps)(CollectionPreview)