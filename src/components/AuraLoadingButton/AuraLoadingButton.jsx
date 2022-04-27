import React from 'react';
import { LoadingButton } from '@mui/lab';

function AuraLoadingButton(props) {
  return (
       <LoadingButton
          size="small"
        //   onClick={handleClick}
        loading={true}
          variant='contained'
          fullWidth={true}
          disabled
          {...props}
        >
          disabled
        </LoadingButton>
  )
}

export default AuraLoadingButton