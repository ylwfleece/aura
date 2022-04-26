import Button from '@mui/material/Button';

export default function AuraButton(props) {

    return <Button {...props} sx={{padding: '16px 0px'}}>{props.children}</Button>
}