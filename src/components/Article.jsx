import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function Article() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="assets/img/paper.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" color="text.primary">
            AI-KU: Using Substitute Vectors and Co-Occurrence Modeling for Word
            Sense Induction and Disambiguation
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
