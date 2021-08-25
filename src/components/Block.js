import React from "react";
import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

const Block = ({ block }) => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Typography className={classes.id}>
                <BlockId id={block.id}/>
            </Typography>
            <Typography className={classes.description}>{block.attributes.data}</Typography>
        </Box>
    );
};

const BlockId = ({ id }) => String(id).padStart(3,"0") 

const useStyles = makeStyles((theme) => ({
    box: {
        background: "#e0e0e0",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: "auto",
        marginBottom: 5
    },
    id: {
        color: "#2d4dff",
        fontSize: theme.typography.pxToRem(12),
    },
    description: {
        fontSize: theme.typography.pxToRem(14),
    }
}));

export default Block;