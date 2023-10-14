import React from 'react'
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview
} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-5xl">Hello {name}!</Text>
            <Link href="https://salesslider.com">https://salesslider.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
