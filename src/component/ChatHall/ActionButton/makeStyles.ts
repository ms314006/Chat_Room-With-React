import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fontColor: {
    color: '#D4D4D4',
  },
  button: {
    width: '100%',
    height: '32px',
    background: '#303030',
    border: '1px solid #D4D4D4',
    borderRadius: '0px 0px',
    padding: '0px',
    margin: '0px 4px',
    '&:hover': {
      backgroundColor: '#696969',
    },
    fontSize: '14px',
  },
  createChatRoomWindow: {
    width: '300px',
    height: '360px',
    background: '#252526',
    borderRadius: '0px 0px',
  },
  createChatRoomTitle: {
    textAlign: 'center',
    color: '#9CDCFE',
  },
});

export default useStyles;
