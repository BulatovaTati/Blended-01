import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

import {
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
} from 'data/article.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={poster}
          avatar={avatar}
          description={description}
          name={name}
          postedAt={postedAt}
          tag={tag}
          title={title}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
