import React from 'react';
import { Card as StoryCard, Button } from 'react-bootstrap';

export function Card(props) {
  const { title, abstract, multimedia } = props;
  const imageSrc = Array.isArray(multimedia) && multimedia[1].url;

  return (
    <StoryCard style={{ width: '18rem' }}>
      <StoryCard.Img variant="top" src={imageSrc} />
      <StoryCard.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <StoryCard.Title>{title}</StoryCard.Title>
        <StoryCard.Text style={{ flex: 1}}>
          {abstract}
        </StoryCard.Text>
        <Button variant="primary" style={{ width: '60%', margin: 'auto'}}>Read more</Button>
      </StoryCard.Body>
    </StoryCard>
  )
}