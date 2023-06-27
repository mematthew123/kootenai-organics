import {client } from '../lib/client';

export async function getTestimonials() {
    const testimonials = await client.fetch(`
      *[_type == "testimonial"] {
        name,
        title,
        quote,
      }
    `);
  
    return testimonials;
  }