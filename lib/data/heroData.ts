const DELAY_HERO_ANIMATION = 5_000;
const CLASS_HERO_ANIMATION = 'animate-hero-slide';

const description =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo soluta rerum nihil voluptas necessitatibus exercitationem neque quaerat fuga laboriosam itaque possimus dignissimos error quasi, quisquam mollitia tenetur quis molestiae laborum.';

const HERO_TEST = Array.from({ length: 3 }, (_, i) => ({
  title: `Hero Title ${i + 1}`,
  description,
}));

export { HERO_TEST, DELAY_HERO_ANIMATION, CLASS_HERO_ANIMATION };
