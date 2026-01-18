"use client";

import { FadeInUp } from "../animations";

export function ValueProp() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <FadeInUp>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-text-primary leading-tight text-center mb-12">
              What is the Irish Roadshow?
            </h2>
          </FadeInUp>

          {/* Body Text */}
          <FadeInUp delay={0.2}>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                The Irish Roadshow is a 12-month, 12-county workshop tour across Ireland, created to bring sales professionals and entrepreneurs together in person.
              </p>
              <p>
                Run in partnership with (YIE) Young Irish Entrepreneurs, the Roadshow is designed to be a practical, welcoming space where like-minded people can connect, learn, and grow.
              </p>
              <p>
                These are not mastermind events or formal conferences. They are interactive workshops built for real conversations, real networking, and real learning.
              </p>
              <p>
                Whether you&apos;re brand new to sales and entrepreneurship or already experienced, each event is an opportunity to meet new people, share ideas, and develop practical skills you can use immediately.
              </p>
              <p>
                At each Roadshow stop, we will host guest speakers from across Ireland business owners, entrepreneurs, and sales professionals who will share real stories, lessons, and strategies.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
