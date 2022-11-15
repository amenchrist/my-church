import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Announcements() {

  const cards = [
    {
      title: 'Your Loveworld Season 6',
      image: 'https://d3u1jgd2t7cgti.cloudfront.net/2022/04/19/20/58/22/966/165041630277_img_20220419_161222.jpg',
      description: "It's time for another special time of fellowship with God's word"
    },
    {
      title: 'October Global Communion Service',
      image: 'https://d3u1jgd2t7cgti.cloudfront.net/2022/04/03/18/01/33/322/164902329381_img_20220403_174314.jpg',
      description: "Tune in on the first sunday of the month to hear God's word for the new month"
    },
    {
      title: 'Healing Streams live Services with Pastor Chris',
      image: 'https://d3u1jgd2t7cgti.cloudfront.net/2022/03/17/09/32/34/656/164752395351_managed6257135200200020568.tmp.mp4_thumb.jpg',
      description: "For I wish above all things that you might prosper and be in health..."
    }
  ];

  return (
    <Container  sx={{ p:2, height: "100%" }}>
          {/* End hero unit */}
          <Grid container spacing={2} sx={{  height: "100%", overflowY: "auto" }} >
            {cards.map((card,i) => (
              <Grid item key={i} xs={12} sm={12} md={12}>
                <Card
                  sx={{ height: '400px', display: 'flex', flexDirection: 'column', borderRadius: '2px' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: '56.25%',
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  )
}

