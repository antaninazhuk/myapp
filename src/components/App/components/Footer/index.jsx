import React from 'react'
import { Container } from 'react-bootstrap'

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-3'>
        <Container className='text-center'>
            Created at {currentYear}
        </Container>
    </footer>
  )
}
