import Button from '@mui/material/Button';

export default function AuraButton(props) {

    return <Button {...props} >{props.children}</Button>
}