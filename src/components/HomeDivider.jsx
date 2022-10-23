import { Chip, Divider } from '@mui/material'

export default function HomeDivider(props) {
  return (
    <Divider
      sx={{
        borderWidth: '5',
        borderColor: 'black',
        marginTop: '2em',
        marginBottom: '1em',
      }}
    >
      <Chip
        id={props.id}
        label={props.label}
        style={{ fontSize: 'large', scrollMarginTop: '5rem' }}
      />
    </Divider>
  )
}
