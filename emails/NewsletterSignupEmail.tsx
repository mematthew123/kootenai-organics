import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NewsletterSignupEmailProps {
  name: string;
}

export const NewsletterSignupEmail: React.FC<NewsletterSignupEmailProps> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>
      Thank you for joining our waitlist and welcome to the Kootenai famliy
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome.</Heading>
        <Text style={text}>
          Thank you for joining our waitlist and for your patience! While
          timelines can be difficult to predict, in the coming weeks we will be
          sending out newsletters with updates on our progress, product
          releases, and much more.
          <br />
          <br />
          Loyal customers like you are the heart of our business, and we are
          committed to providing you with the best possible experience. By
          signing up for our newsletter you will be the first to know about new
          products, promotions, and other exciting news.
          <br />
          <br /> We are excited to have you join the Kootenai family and look
          forward to sharing our journey with you.
          <br />
          <br /> <br />- The Kootenai Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default NewsletterSignupEmail;

const main = {
  backgroundColor: "#000000",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "auto",
  padding: "96px 20px 64px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "40px",
  margin: "0 0 20px",
};

const text = {
  color: "#aaaaaa",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 40px",
};
