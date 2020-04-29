import { build, fake, sequence } from 'test-data-bot';

export const buildUser = build('User').fields({
  name: fake((f) => f.name.findName()),
  email: fake((f) => `${f.internet.password(5, 1)}_e2e@test.herper.io`),
  message: fake((f) => f.lorem.paragraph()),
});
